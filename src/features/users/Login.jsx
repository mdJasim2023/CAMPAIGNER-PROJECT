import { useFormik } from "formik";
import React from "react";
import { useLazyCheckloginQuery } from "../../services/loginApi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { login } from "./loginSlice";
import { useDispatch } from "react-redux";
import * as Yup from 'yup'


function Login(){
    var [data] = useLazyCheckloginQuery()
    let nav = useNavigate()
    let dispatch = useDispatch()
    let formik = useFormik({
        initialValues:{
            username:'',
            password:''
        },
        validationSchema:Yup.object({
            username:Yup.string().required(),
            password:Yup.string().required(),
        }),
        onSubmit: (values)=>{
            data(values).then((res)=>{
                if(res.data?.length===0){
                    alert("Please Enter valid credentials")
                }
                else{
                    dispatch(login({...res.data[0]}))
                }
                if(res.data[0]?.role==='admin'){
                    nav('/admindb')
                }
                else if(res.data[0]?.role==='campaigner'){
                    nav('/campaignerdb')
                }
                console.log(res );
            })
        }   
    })
    return(
        <div class="p">
           <form onSubmit={formik.handleSubmit} className="rounded p-5 shadow h-75" id="form">
                <div class='frm'>
                    <h1 style={{color:'darkblue'}} class='h1'>Login</h1><br />
                    <div className="form-floating">
                        <input type="text" placeholder="Username" className="form-control  m-2" id="username" name="username" onBlur={formik.handleBlur}  onChange={formik.handleChange} />
                        <label>&nbsp;&nbsp;Username</label>
                        {formik.touched.username && <div className="a"><span>{formik.errors.username}</span></div>}
                    </div>
                    <div className="form-floating ">
                        <input type="Password" placeholder="Password" name="password" className="form-control  m-2" onBlur={formik.handleBlur} onChange={formik.handleChange}/>
                        <label>&nbsp;&nbsp;Password</label>
                        {formik.touched.password && <div className="a">{formik.errors.password}</div>}
                    </div>
                    <button type="submit" className="form-control w-100 m-2 loginbtn">Login</button>
                </div>
                <Link to='/register' className="p-2">Sign Up ?</Link>
           </form>
        </div>
    )
}   
export default Login
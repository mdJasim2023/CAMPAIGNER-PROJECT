import React from "react";
import { useFormik } from "formik";
import { useNewCampMutation } from "../../services/loginApi";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup'

function Register(){
    let [newCamp] = useNewCampMutation()
    let nav = useNavigate()
    let formik = useFormik({
        initialValues:{
            username:'',
            email:'',
            phone:'',
            role:'campaigner',
            password:''
        },
        validationSchema:Yup.object({
                username:Yup.string().required().min(5 , 'Please Enter Atleast 5 characters'),
                email:Yup.string().required(),
                phone:Yup.string().required().min(10,'Enter valid Phone Number').max(10,'Enter valid Phone Number'),
                password:Yup.string().required().min(5,'Password must be min 5 numbers or characters'),
        }),
        onSubmit:(values)=>{
            newCamp(values).then((res)=>{
                console.log(res);
                nav("/login")
            })
        }
    })

    return(
        <div class='parentReg'>
            <form className="p-5 rounded" id="mainReg" onSubmit={formik.handleSubmit}>
                    <h1 className="text-center text-warning">Register</h1><br />
                    <div className="d-flex ">
                        <input type="text" name="username" placeholder="Username" onChange={formik.handleChange} className="form-control d"/>&nbsp;
                    </div><br/>{formik.touched.username &&
                    (<div className="ms-2 z"><span>{formik.errors.username}</span></div>)}
                    <input type="email" name="email" placeholder="Email Address"onChange={formik.handleChange} className="form-control d"/><br />
                    {formik.touched.email &&
                    (<div className="ms-2 z"><span>{formik.errors.email}</span></div>)}
                    <input type="text" name="phone" placeholder="phone number" onChange={formik.handleChange} className="form-control d"/><br />
                    {formik.touched.phone &&
                    (<div className="ms-2 z"><span>{formik.errors.phone}</span></div>)}
                    <div className="d-flex">
                        <input type="password" placeholder="Password" name="password" onChange={formik.handleChange} className="form-control d" />&nbsp; 
                    </div><br />
                    {formik.touched.password &&
                    (<div className="ms-2 z"><span>{formik.errors.password}</span></div>)}
                    <button className="btn btn-warning form-control d">Register</button>
            </form>
        </div>
    )
}

export default Register
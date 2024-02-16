import { useFormik } from "formik";
import React from "react";
import { useAddnewregMutation } from "../../services/loginApi";
import { useParams } from "react-router-dom";
function AddNewReg(){
    let {cname,pname}=useParams()
    let [newReg]  = useAddnewregMutation()
    let formik = useFormik({
        initialValues:{
            name:'',
            phone:'',
            email:'',
            campaigner:cname,
            course:pname
        },
        onSubmit:(values)=>{
            newReg(values).then((res)=>{
                console.log(res);
                alert("Thanks for Registeration")
            })
        }
    })
    console.log(cname,pname);
    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input type="text" placeholder="Enter the name" name="name" onChange={formik.handleChange}/><br />
                <input type="text" placeholder="Enter the phone number" name="phone" onChange={formik.handleChange}/><br />
                <input type="text" placeholder="Entern the e-mail" name="email" onChange={formik.handleChange}/><br />
                <button>Register</button>
            </form>
        </div>
    )
}

export default AddNewReg
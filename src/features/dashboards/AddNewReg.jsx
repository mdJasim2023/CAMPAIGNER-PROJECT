import { useFormik } from "formik";
import React from "react";
import { useAddnewregMutation } from "../../services/loginApi";
import { useParams } from "react-router-dom";
import * as Yup from 'yup'
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
        validationSchema:Yup.object({
            name:Yup.string().required(),
            phone:Yup.string().required(),
            email:Yup.string().required()
        }),
        onSubmit:(values)=>{
            newReg(values).then((res)=>{
                console.log(res);
                alert("Thanks for Registeration")
            })
        }
    })
    return(
        <div className="newregform p-5 rounded shadow">
            <h3 className="text-center text-warning ">NEW REGISTER FORM</h3>
            <form onSubmit={formik.handleSubmit} className="p-2">
                <input type="text" className="form-control w-75" placeholder="Enter the name" name="name" onChange={formik.handleChange}/><br />
                <input type="text" className="form-control w-75" placeholder="Enter the phone number" name="phone" onChange={formik.handleChange}/><br />
                <input type="text" className="form-control w-75" placeholder="Enter the e-mail" name="email" onChange={formik.handleChange}/><br />
                <button className="form-control w-75 btn btn-danger">Register</button>
            </form>
        </div>
    )
}

export default AddNewReg
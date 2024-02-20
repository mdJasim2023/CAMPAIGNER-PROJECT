import { Formik, useFormik } from "formik";
import React from "react";
import { useNewcampaignsMutation } from "../../services/loginApi";
import * as Yup from 'yup'

function CreateCamp(){
    let [newcamps] = useNewcampaignsMutation()
    let formik = useFormik({
        initialValues:{
            title:'',
            description:'',
            imgUrl:'',
            link:'',
            date:(new Date()).getHours()
        },
        validationSchema:Yup.object({
            title:Yup.string().required(),
            description:Yup.string().required(),
            imgUrl:Yup.string().required(),
            link:Yup.string().required(),
        }),
        onSubmit:(values)=>{
            newcamps(values).then((res)=>{
                console.log(res);
            })
        }
    })
    return(
        <div className="border  p-5 createCampMainDiv"> 
            <h2 className="text-center text-warning">CREATE CAMPAGIN</h2><br />
             <form onSubmit={formik.handleSubmit} className="createCampForm">
                <input type="text" className="form-control" name='title' placeholder='Enter Title' onChange={formik.handleChange}/>
                <br />
                {formik.touched.title && <div className="z">{formik.errors.title}</div>}
                <input type="text" className="form-control" name='description' placeholder='Enter Description' onChange={formik.handleChange}/>
                <br />
                {formik.touched.description && <div className="z">{formik.errors.description}</div>}
                <input type="text" className="form-control" name='imgUrl' placeholder='Enter Image Url' onChange={formik.handleChange}/>
                <br />
                {formik.touched.imgUrl && <div className="z">{formik.errors.imgUrl}</div>}
                <input type="text" className="form-control" name='link' placeholder='Enter contact Url' onChange={formik.handleChange}/>
                <br />
                {formik.touched.link && <div className="z">{formik.errors.link}</div>}
                <button className="btn btn-warning form-control text-light">Add Campaign</button>
            </form> 
        </div>
    )
}

export default CreateCamp
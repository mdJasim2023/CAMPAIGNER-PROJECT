import { Formik, useFormik } from "formik";
import React from "react";
import { useNewcampaignsMutation } from "../../services/loginApi";

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
        onSubmit:(values)=>{
            newcamps(values).then((res)=>{
                console.log(res);
            })
        }
    })
    return(
        <div className="border w-50 m-auto p-5"> 
             <form onSubmit={formik.handleSubmit} className="createCampForm w-50">
                <input type="text" className="form-control" name='title' placeholder='Enter Title' onChange={formik.handleChange}/>
                <br />
                <input type="text" className="form-control" name='description' placeholder='Enter Description' onChange={formik.handleChange}/>
                <br />
                <input type="text" className="form-control" name='imgUrl' placeholder='Enter Image Url' onChange={formik.handleChange}/>
                <br />
                <input type="text" className="form-control" name='link' placeholder='Enter contact Url' onChange={formik.handleChange}/>
                <br />
                <button className="btn btn-warning form-control">Add Campaign</button>
            </form> 
        </div>
    )
}

export default CreateCamp
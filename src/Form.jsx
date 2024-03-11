import { useFormik } from "formik"
import * as Yup from 'yup'
function FormDetails(){
    let formik = useFormik({
        initialValues:{
            name:'',
            phone:'',
            email:'',
            date:'',
            ncd:'',
            remarks:'',
            options:'',
            courses:[],
            mode:''
        },
        validationSchema:Yup.object({
            name:Yup.string().required(),
            phone:Yup.string().required(),
            email:Yup.string().required(),
            data:Yup.string().required(),
            remarks:Yup.string().required(),
            ncd:Yup.string().required(),
            options:Yup.string().required(),
            courses:Yunp.array().min(1,'Please select one'),
            mode:Yup.string().required(),
        }),
        onSubmit:(values)=>{
            console.log(values);
        }
    })
    return(
        <div className="fromMainDiv">
            <form onSubmit={formik.handleSubmit}>
                <div className="d-flex justify-content-between p-5">
                    <div className="leftside">
                        <h1 className="text-center p-4 text-primary">ENQUIRY FORM</h1>
                        <div className="d-flex">
                            <div className="form-floating mb-3 w-50">
                                <input type="text" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} name="name" placeholder="Name"/>
                                <label className="text-primary">Name :</label>
                                {formik.touched.name && <b>{formik.errors.name}</b>}
                            </div>&nbsp;
                            <div className="form-floating w-50">
                                <input type="text" className="form-control" name="phone" onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Name"/>
                                <label className="text-primary">Phone Number :</label>
                                {formik.touched.phone && <b>{formik.errors.phone}</b>}
                            </div>
                        </div>  
                        <div className="form-floating">
                            <input type="email" className="form-control" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="email"/>
                            <label className="text-primary">Email :</label>
                            {formik.touched.email && <b>{formik.errors.email}</b>}
                        </div><br />
                        <div className="d-flex justify-content-between w-75 ">
                            <div>
                                <strong className="text-primary">COURSES</strong><br />
                                <input type="checkbox" value='Frontend with Angular' onChange={formik.handleChange} onBlur={formik.handleBlur} name="courses"/>&nbsp;
                                <span className="mt-2">Frontend with Angular</span><br />
                                <input type="checkbox" value='Frontend with Angular' onChange={formik.handleChange} onBlur={formik.handleBlur} name="courses"/>&nbsp;
                                <span>Frontend with Angular</span><br />
                                <input type="checkbox" value='Frontend with Angular' onChange={formik.handleChange} onBlur={formik.handleBlur} name="courses"/>&nbsp;
                                <span>Frontend with Angular</span><br />
                                <input type="checkbox" value='Frontend with Angular' onChange={formik.handleChange} onBlur={formik.handleBlur} name="courses"/>&nbsp;
                                <span>Frontend with Angular</span><br />
                                <input type="checkbox" value='Frontend with Angular' onChange={formik.handleChange} onBlur={formik.handleBlur} name="courses"/>&nbsp;
                                <span>Frontend with Angular</span><br />
                                <input type="checkbox" value='Frontend with Angular' onChange={formik.handleChange} onBlur={formik.handleBlur} name="courses"/>&nbsp;
                                <span>Frontend with Angular</span><br />
                                <div>
                                    {formik.touched.courses && <b>{formik.errors.courses}</b>}
                                </div>
                            </div>
                            <div>
                                <strong className="text-primary">MODE</strong><br />
                                <input type="radio" name="mode" onChange={formik.handleChange} onBlur={formik.handleBlur}/>&nbsp;
                                <span>Offline</span><br />
                                <input type="radio" name="mode" onChange={formik.handleChange} onBlur={formik.handleBlur}/>&nbsp;
                                <span>Online</span>
                                <div>
                                    {formik.touched.mode && <b>{formik.errors.mode}</b>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rightside">
                        <h1 className="text-center p-4 text-primary">FEED BACK</h1>
                        <div className="d-flex">
                            <div className="form-floating w-50">
                                    <input type="date" className="form-control" name="date" onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="date"/>
                                    <label className="text-primary">Date :</label>
                                    {formik.touched.date && <b>{formik.errors.date}</b>}
                            </div>&nbsp;
                            <div className="form-floating w-50 mb-3">
                                <select className="form-control" name="interest" onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='options'>
                                    <option name='options' onChange={formik.handleChange} onBlur={formik.handleBlur}>Choose a option</option>  
                                    <option name='options' onChange={formik.handleChange} onBlur={formik.handleBlur}>Interested</option>  
                                    <option name='options' onChange={formik.handleChange} onBlur={formik.handleBlur}>Not Interested</option>  
                                </select>
                                <label className="text-primary">Interest</label>
                                {formik.touched.options && <b>{formik.errors.options}</b>}
                            </div>
                        </div>
                        <div className="form-floating mb-3">
                                <input type="text" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} name="remarks" placeholder="remarks"/>
                                <label className="text-primary">Remarks :</label>
                                {formik.touched.remarks && <b>{formik.errors.remarks}</b>}
                        </div>
                        <div className="form-floating">
                                <input type="date" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} name="ncd" placeholder="nxt call date"/>
                                <label className="text-primary">Next Call Date :</label>
                                {formik.touched.ncd && <b>{formik.errors.ncd}</b>}
                        </div>
                    </div>
                </div>
            <div className="btn1">
                <button className="btn btn-primary w-25 p-3">Save</button>
            </div>
            </form>
        </div>
    )
}

export default FormDetails
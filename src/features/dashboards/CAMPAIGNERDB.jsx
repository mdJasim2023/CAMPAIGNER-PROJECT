import React from "react";
import { useGetAllCampaignersQuery, useGetCampsQuery } from "../../services/loginApi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Campaignerdb(){
    let {data, isLoading} = useGetCampsQuery()
    let userdetails = useSelector(state=>state.login.userDetails)
    
    return(
        <div className="campmainDiv">
            <h1>CAMPAIGNER DASHBOARD</h1>
            <div className="d-flex flex-wrap justify-content-around">
                {
                    isLoading && <h1>Loading....</h1>
                }
                {!isLoading&&
                    data?.map((details)=>{
                        return(
                            <div className=" p-3 w-25 m-3 border rounded text-light h-50 text-center cbd">
                                <img src={details.imgUrl} width='80%'/>
                                <h2>{details.title}</h2>
                                <p>{details.description}</p>
                                <h6>{details.link}/{userdetails.username}/{details.title}</h6>
                                <div>
                                    <button className="btn btn-info w-50">Copy Link</button>
                                    <Link to='/regs'><button className="btn btn-warning w-50">View Registers</button></Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Campaignerdb
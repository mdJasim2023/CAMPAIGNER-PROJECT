import React from "react";
import { useSelector } from "react-redux";
import { useGetCampsQuery, useLazyGetCampsQuery } from "../../services/loginApi";

function AllCampaigns(){
    let {data, isLoading} = useGetCampsQuery()
    return(
        <div className="d-flex flex-wrap justify-content-around">
            {
                data?.map((details)=>{
                    return(
                        <div className=" p-3 w-25 m-3 shadow rounded">
                            <img src={details.imgUrl} width='90%'/>
                            <h1>{details.title}</h1>
                            <p>{details.description}</p>
                            <h6>{details.link}</h6>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllCampaigns
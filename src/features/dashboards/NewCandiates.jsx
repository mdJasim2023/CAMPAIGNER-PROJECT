import React from "react";
import { useGetAddRegQuery } from "../../services/loginApi";

function NewCandiates(){
    let {data} = useGetAddRegQuery()
    console.log(data);
    return(
       <div>
        <h1 className="text-center text-danger"><u>New Registered Candiates</u></h1>
            <table className="table text-center candiatestab w-75">
                <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name of the Candiate</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Campaigner</th>
                            <th scope="col">Course</th>
                        </tr>
                    </thead>
                {
                    data?.map((candiates,ind)=>{
                        return(
                            <tbody>
                                <tr>
                                    <th scope="row">{ind+1}</th>
                                    <td><b className="text-danger">{candiates.name.toUpperCase()}</b></td>
                                    <td>{candiates.email}</td>
                                    <td>+91 {candiates.phone}</td>
                                    <td>{candiates.campaigner}</td>
                                    <td className="text-danger">{candiates.course}</td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
       </div>
    )
}

export default NewCandiates
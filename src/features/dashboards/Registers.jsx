import React from "react";
import { useGetAddRegQuery } from "../../services/loginApi";

function Registers(){

    let {data }= useGetAddRegQuery()
    console.log(data);
    return(
        <div className="">
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
                    data?.map((regs,ind)=>{
                        return(
                            <tbody>
                                <tr>
                                    <th scope="row">{ind+1}</th>
                                    <td><b className="text-danger">{regs.name}</b></td>
                                    <td>{regs.email}</td>
                                    <td>+91 {regs.phone}</td>
                                    <td>{regs.campaigner}</td>
                                    <td><b className="text-danger" >{regs.course}</b></td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default Registers
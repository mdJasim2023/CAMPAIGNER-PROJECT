import React from "react";
import { useLazyGetAllCampaignersQuery } from "../../services/loginApi";


function AllCampaigners(){
    let [fndet,{data}] =useLazyGetAllCampaignersQuery()
    var [c,setC] = React.useState(1)
    console.log(data);
    React.useEffect(()=>{
        fndet()
    },[])
    return(
        <div className="tabMainDiv">
            <h1 className="text-center text-danger"><u>All Registered Campaigners</u></h1>
                <table className="table  text-center w-75 allcampaignerstab">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phonenumber</th>
                        <th scope="col">Role</th>
                    </tr>
                </thead>
            {data  && data.map((users,i)=>{
                    return(
                        <tbody>
                            <tr>
                                <th scope="row">{i+1}</th>
                                <td><b className="text-danger">{users.username}</b></td>
                                <td>{users.email}</td>
                                <td>+91 {users.phone}</td>
                                <td className="text-danger">{users.role.toUpperCase()}</td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
    )
}
export default AllCampaigners
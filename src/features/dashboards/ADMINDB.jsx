import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Admindb(){
    return(
        <div className="adminMainDiv">
            <h1 className="text-center">ADMIN DASHBOARD</h1>
            <div style={{height:'100px'}}></div>
            <div className="w-25  AdminBtns">
                <Link to='/createcamp'><button className="btn  form-control p-3 btn-warning firstbtn">+Create Campaign</button></Link><br /><br />
                <Link to='/allcampaigns'><button className="btn  form-control p-3 btn-primary secondbtn">view Campaigns</button></Link><br /><br />
                <Link to='/allcampaigners'><button className="btn  form-control p-3 btn-secondary thirdbtn">All Campaigners</button><br /><br /></Link>
                <Link to='/newcandiates'><button className="btn  form-control p-3 btn-info fourthbtn">All Registered Details</button></Link>
            </div>
        </div>
    )
    
}

export default Admindb

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Header(){
    let data = useSelector(state=>state.login)

    return(
        <div className="d-flex justify-content-between align-items-center headermainDiv">
            <div id="navName">
                <h2 className="text-light container">Edupoly Code Your Carrer</h2>
            </div>
            <nav class="navbar navbar-expand-sm shadow">
                <div class="container-fluid">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to='/' class="nav-link text-light">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-light" to='/login'>Login</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-light" to='/register'>Register</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
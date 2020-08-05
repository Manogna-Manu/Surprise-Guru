import React from 'react';
import './LoginPage.css';
import {Link} from "react-router-dom";

const LoginPage = () => {
    return (
        <div className="contactbg d-flex justify-content-center">
<div className="container " style={{width:'350px' ,
            height: '580px'}}>
                <h3 className="text-center  titlestyle pt-4 pb-2">Login</h3>
        <div className="border borderstyle ">
            
            <form>
                <div className="form-group   p-5">
                    <label>Username or Email*</label>
                <input type="text" className="form-control formcontrolstyle mt-3" placeholder="Username" required/><br/>
                <label>Password*</label>
                <input type="password" className="form-control formcontrolstyle mt-3" placeholder="password" required/><br/>
                <button type="button" className="btn btn-outline-danger btn-md my-3 float-right">Sign in</button>
                </div>
                
            </form>
            

            </div>
        </div>
        </div>


    )
}

export default LoginPage
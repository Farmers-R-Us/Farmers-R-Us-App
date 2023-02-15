import React from 'react';
import { useNavigate } from 'react-router-dom';

// import { Routes, Route } from 'react-router-dom';


export default function Login() {
    const navigate = useNavigate()
    //@ts-ignore
    window.authenticateUser = async (data) => {
        console.log(data);
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }
        const serverResponse = await fetch('/api/oAuth', options).then(response => response.json());
        console.log('This is serverResponse: ', serverResponse)
        //redirect a user to the home page? 
        navigate('/home', {state: serverResponse});
;    }

    return (
    <div className='container'>
        <div className='main-bg'>
            <div className="whiteModal">
                <h2>LOGIN</h2>
                <div id="g_id_onload"
                data-client_id="277472323209-6vvv21f4emad9157i1r13i14eq9jcujb.apps.googleusercontent.com"
                data-context="signin"
                data-ux_mode="popup"
                data-callback="authenticateUser"
                data-auto_prompt="false">
                </div>
                <div className="g_id_signin"
                    data-type="standard"
                    data-shape="rectangular"
                    data-theme="outline"
                    data-text="signin_with"
                    data-size="large"
                    data-logo_alignment="left">
                </div>
            </div>
        </div>
    </div>
    )
}
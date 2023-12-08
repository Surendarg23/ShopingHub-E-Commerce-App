import React from 'react'
import './Login.css'

const Login =()=> {
    return (
        <div className='bodylogin'>
        <div className="login">
           <h2>Login</h2><br />
            <form>
                <label>Email:</label><br /><br />
                <input type="email" placeholder="suren@gmail.com"/>
                <br />
                <br />
                <label>Password:</label><br /><br />
                <input type="password" /><br />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
        </div>
    )
}

export default Login
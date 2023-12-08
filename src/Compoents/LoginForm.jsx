// LoginForm.jsx

import React from 'react';

const LoginForm = () => {
    return (
        <div>
            <h2>Login</h2>
            <form>
                <label>Email:</label>
                <input type="email" />
                <br />
                <label>Password:</label>
                <input type="password" />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;

import React, { useState } from "react";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div>
      <div className="container">
        <div className="Form-Container">
          <div className="Form-Toggle">
            <button
              className={isLogin ? "active" : ""}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={!isLogin ? "active" : ""}
              onClick={() => setIsLogin(false)}
            >
              SignUp
            </button>
          </div>
          {isLogin ? (
            <>
              <div className="Form">
                <h2>Login Form</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="#">Forgot Password? </a>
                <button>Login</button>
                <p>
                  Not a Member
                  <a href="#" onClick={() => setIsLogin(false)}>
                    SignUP
                  </a>
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="Form">
                <h2>Sign Form</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>SignUP</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

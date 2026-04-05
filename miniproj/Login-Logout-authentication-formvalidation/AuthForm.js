import React, { useState } from "react";
import { supabase } from "./supabase";
import { useNavigate } from "react-router-dom";
import "./AuthForm.css";
import { useEffect } from "react";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // 🔍 VALIDATION FUNCTION
  const validate = () => {
    let newErrors = {};

    // Email validation
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Confirm password validation (only for signup)
    if (!isLogin) {
      if (!confirmPassword) {
        newErrors.confirmPassword = "Confirm your password";
      } else if (password !== confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();

      if (data.session) {
        navigate("/dashboard");
      }
    };

    checkUser();
  }, [navigate]);

  // 🔐 LOGIN
  const handleLogin = async () => {
    if (!validate()) return;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      if (error.message.toLowerCase().includes("email not confirmed")) {
        alert("Verify your email first 📧");
      } else {
        alert(error.message);
      }
    } else {
      navigate("/dashboard");
    }
  };

  // 🔐 SIGNUP
  const handleSignup = async () => {
    if (!validate()) return;
    if (loading) return;

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      if (error.message.includes("rate limit")) {
        alert("Too many requests. Wait a minute ⏳");
      } else {
        alert(error.message);
      }
    } else {
      alert("Check your email to verify 📧");
      setIsLogin(true);
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <div className="Form-Container">
        {/* Toggle */}
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
          <div className="Form">
            <h2>Login</h2>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="error">{errors.password}</p>}

            <button onClick={handleLogin}>Login</button>

            <p onClick={() => setIsLogin(false)}>Not a member? Sign Up</p>
          </div>
        ) : (
          <div className="Form">
            <h2>Sign Up</h2>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="error">{errors.password}</p>}

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}

            <button onClick={handleSignup} disabled={loading}>
              {loading ? "Sending..." : "Sign Up"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

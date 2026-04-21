import React, { use, useState } from "react";
import { AuthContext } from "./Contexts/AuthContext";
import { Link } from "react-router";

const SignIn = () => {
    const {signInUser} = use(AuthContext);
    const [error, setError] = useState("");
    const handleLogin = (event) => {    
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const { email, password } = Object.fromEntries(formData.entries());

        signInUser(email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);

            const signInInfo = {
                email,
                lastSignInTime: user.metadata.lastSignInTime,
            }
            fetch("https://coffee-store-server-six-zeta.vercel.app/", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(signInInfo),
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });

            form.reset();
          })
          .catch((error) => {
            console.error("Error:", error);
            setError(error.message);
          });
    };

    
  
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              name="password"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <p className="text-red-500">{error}</p>
            <button className="btn btn-neutral mt-4">Login</button>
          </form>
          <p>
            New to this site? Please
            <Link className="text-blue-400 underline" to="/auth/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

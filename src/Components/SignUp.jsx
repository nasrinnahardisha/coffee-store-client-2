import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "./Contexts/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = use(AuthContext);
  const [error, setError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const name = formData.get("name");
    const { email, photoUrl, password, ...rest } = Object.fromEntries(
      formData.entries(),
    );

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

createUser(email, password)
  .then((result) => {
    const user = result.user;

    const userProfile = {
      name,
      email,
      photoUrl,
      ...rest,
      creationTime: user.metadata.creationTime,
      lastSignInTime: user.metadata.lastSignInTime,
    };

    return fetch("https://coffee-store-server-six-zeta.vercel.app/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userProfile),
    });
  })
  .then((res) => res.json())
  .then((data) => {
    if (data.insertedId) {
      Swal.fire({
        title: "Success!",
        text: "User registered successfully!",
        icon: "success",
      });
      form.reset();
    }
  })
  .catch((error) => {
    console.error("Error:", error);
    setError(error.message);
  });

  };

  return (
    <div className="flex justify-center items-center min-h-3.5">
      <div className="hero bg-base-200 min-h-screen">
        <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
          <div className="card-body">
            <h2 className="text-center font-bold text-2xl">Register Now</h2>
            <form onSubmit={handleRegister} className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                name="name"
                placeholder="Name"
              />

              <label className="label">Photo Url</label>
              <input
                type="text"
                className="input"
                name="photoUrl"
                placeholder="Photo Url"
              />
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
              {error && <p className="text-red-500">{error}</p>}
              <button className="btn btn-neutral mt-4">Sign Up</button>
            </form>
            <p className="text-center">
              Already have an account?
              <Link
                className="font-bold text-blue-500 underline"
                to="/auth/login"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signUpUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    if (!/@gmail\.com$/.test(email)) {
      alert("Please add an valid email!!");
      return;
    }
    if (password.length < 6) {
      alert("Password should be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      alert("Password should contain at least one uppercase");
      return;
    } else if (!/[a-z]/.test(password)) {
      alert("Password should contain at least one lowercase");
      return;
    }

    signUpUser(email, password)
      .then((result) => {
        console.log(result.user);
        if (result.user) {
          updateProfile(result.user, {
            displayName: name,
            photoURL: photo,
            // photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              console.log("Updated Profile");
            })
            .catch();
        }
        e.target.reset();
        navigate("/login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="hero bg-green-200">
      {/* <Helmet>
          <title>Register At Hunting Hotels</title>
        </Helmet> */}
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered w-full"
                  required
                />
                <span
                  className="absolute top-5 right-4"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
              <label className="label">
                <p href="#" className="label-text-alt link link-hover">
                  Already have account? please{" "}
                  <Link to="/login" className="text-blue-500">
                    Login
                  </Link>
                </p>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-neutral text-white">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
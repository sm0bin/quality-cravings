import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {
    const { loginUser, googleSignIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        setLoginError("");
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(form);

        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Login Successful!');
                form.reset();
            })
            .catch(error => {
                console.log(error);
                setLoginError(error.message);
            })

    }
    const handleGoogleSignIn = () => {
        setLoginError("");

        googleSignIn()
            .then(result => {
                console.log(result.user);
                toast.success('Login Successful!');
            })
            .catch(error => {
                console.log(error);
                setLoginError(error.message);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content w-full flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-md shadow border bg-base-100 p-6 gap-5">
                    <form onSubmit={handleLogin} className="card-body p-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        {
                            loginError && <p className='mt-4 font-medium text-rose-500'>{loginError}</p>
                        }
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Login</button>
                        </div>
                    </form>
                    <h4 className="font-medium text-lg">Don&apos;t Have an Account? <Link to="/sign-up" className="text-indigo-500 link link-hover">Sign Up</Link></h4>
                    <div className="flex items-center gap-4">
                        <hr className="border w-full" />
                        <p>Or</p>
                        <hr className="border w-full" />
                    </div>
                    <button onClick={handleGoogleSignIn} className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className=""><path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path></svg>
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
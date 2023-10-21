import { useContext, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
    const { signUpUser, googleSignIn, updateUser, logoutUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState("");
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        setSignUpError("");
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setSignUpError('Password must be at least 6 characters long.');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setSignUpError('Password must contain at least one lowercase letter.');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setSignUpError('Password must contain at least one uppercase letter.');
            return;
        }
        else if (!/[0-9]/.test(password)) {
            setSignUpError('Password must contain at least one number.');
            return;
        }
        else if (!/[!@#$%^&*()+=]/.test(password)) {
            setSignUpError('Password must contain at least one special character.');
            return;
        }

        const newUser = { photoUrl: photoURL, name, email };
        console.log(newUser);

        signUpUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Sign Up Successful!');
                updateUser(name, photoURL)
                    .then(result => {
                        console.log(result);
                    })
                    .catch(error => {
                        console.log(error);
                        setSignUpError(error.message);
                    })

                fetch("https://brandshop-server-red.vercel.app/users", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newUser),
                })
                    .then(res => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.insertedId) {
                            console.log("User added to database");
                        }
                    });
                form.reset();
                logoutUser()
                    .then(result => {
                        navigate("/login");
                        console.log(result);
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                console.log(error);
                setSignUpError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        setSignUpError("");

        googleSignIn()
            .then(result => {
                console.log(result.user);
                toast.success('Google Sign In Successful!');
            })
            .catch(error => {
                console.log(error);
                setSignUpError(error.message);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-100">
            <Toaster></Toaster>
            <div className="hero-content w-full flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-md shadow border bg-base-100 p-6 gap-5">
                    <form onSubmit={handleSignUp} className="card-body p-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Photo URL</span>
                            </label>
                            <input type="text" name="photoUrl" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        </div>
                        {
                            signUpError && <p className='mt-4 font-medium text-rose-500'>{signUpError}</p>
                        }
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Sign Up</button>
                        </div>
                    </form>
                    <h4 className="font-medium text-lg">Already Have an Account? <Link to="/login" className="text-indigo-500 link link-hover">Login</Link></h4>
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

export default SignUp;
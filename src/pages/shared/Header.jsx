import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import { toast } from "react-hot-toast";

const Header = () => {
    const { user, logoutUser } = useContext(AuthContext);
    console.log(user);

    const handleLogout = () => {
        logoutUser();
        toast.success('Logout Successful!');
    }

    {/* Home, Add Product, My Cart, and Login. */ }
    const navLinks = <>

        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/products/new">Add Product</NavLink>
        </li>
        <li>
            <NavLink to="/cart">My Cart</NavLink>
        </li>
    </>
    return (
        <div className="navbar bg-base-100 sticky top-0 z-50 border-b">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <NavLink to="/" className="btn btn-ghost normal-case font-bold text-xl">Quality Cravings</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                                <div className="w-12 mask mask-squircle">
                                    <img src={user.photoURL} />
                                </div>
                            </div>
                            <h3 className="font-semibold text-xl">{user.displayName}</h3>
                            <button onClick={handleLogout} className="btn btn-neutral">Logout</button>
                        </div>
                        :
                        <NavLink to="/login" className="btn btn-neutral">Login</NavLink>
                }
            </div>
        </div>
    );
};

export default Header;
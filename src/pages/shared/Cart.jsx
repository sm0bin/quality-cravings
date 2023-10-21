import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Cart = () => {
    // const loadedUserCartProducts = useLoaderData();
    // const [cartProducts, setCartProducts] = useState(loadedUserCartProducts);
    const loadedUser = useLoaderData();
    const [user, setUser] = useState(loadedUser);



    return (
        <section className=" my-32">
            <h2 className="font-bold text-5xl text-center mb-12">My Cart</h2>


            {
                user?.cartItems?.length ?


                    <div className="max-w-7xl mx-4 md:mx-8 lg:mx-auto overflow-x-auto">
                        <table className="table  text-xl">
                            {/* head */}
                            <thead className="font-bold text-xl">
                                <tr>
                                    <th></th>
                                    <th>Product Image</th>
                                    <th>Product Name</th>
                                    <th>Brand</th>
                                    <th>Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user?.cartItems?.map(product => (
                                        <tr key={product._id}>
                                            <th>1</th>
                                            <td>
                                                <div className="avatar">
                                                    <div className="w-24 rounded-xl">
                                                        <img src={product.photoUrl} />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{product._id}</td>
                                            <td>{product._id}</td>
                                            <td>{product._id}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    :
                    <div className="flex flex-col justify-center items-center my-12 gap-6">
                        <h2 className="font-bold text-3xl">No Products in Cart</h2>
                        <Link to="/" className="btn btn-neutral">Go Home</Link>
                    </div>
            }
        </section>
    );
};

export default Cart;
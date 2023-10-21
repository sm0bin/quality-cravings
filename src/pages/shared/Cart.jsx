import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Cart = () => {
    const { user } = useContext(AuthContext);
    const [loadedUserCart, setLoadedUserCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadedProducts, setLoadedProducts] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://brandshop-server-red.vercel.app/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setLoadedUserCart(data.cartItems);
                // setLoading(false);
            });
    }, [user?.email]);

    useEffect(() => {
        fetch(`https://brandshop-server-red.vercel.app/products`)
            .then(res => res.json())
            .then(data => {
                setLoadedProducts(data);
                setLoading(false);
            });
    }, []);



    useEffect(() => {
        if (loadedUserCart?.length && loadedProducts?.length) {
            const showProducts = loadedProducts.filter(product => loadedUserCart.includes(product._id));
            setProducts(showProducts);
            setLoading(false);
        }
    }, [loadedUserCart, loadedProducts]);

    const handleRemoveFromCart = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const cartItems = loadedUserCart.filter((productId) => productId !== id);
                setLoadedUserCart(cartItems);
                fetch(`https://brandshop-server-red.vercel.app/users/${user?.email}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ cartItems })
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount) {
                            Swal.fire(
                                'Success',
                                'Removed Item from Cart',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    // useEffect(() => {
    //     if (loadedUserCart.length && loadedProducts.length) {
    //         const showProducts = loadedUserCart.map((productId) =>
    //             loadedProducts.find((product) => product._id === productId)
    //         );
    //         setProducts(showProducts);
    //     }
    // }, [loadedUserCart, loadedProducts]);



    if (loading) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    return (
        <section className="my-32">
            <h2 className="font-bold text-5xl text-center mb-12">My Cart</h2>

            {
                loadedUserCart?.length ?
                    <div className="max-w-7xl mx-4 md:mx-8 lg:mx-auto">
                        <div className="overflow-x-auto">
                            <table className="table text-xl">
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
                                    {products.map((product, idx) => (
                                        <tr key={product._id}>
                                            <th>{idx + 1}</th>
                                            <td>
                                                <div className="avatar">
                                                    <div className="w-24 mask mask-squircle">
                                                        <img src={product.imageUrl} alt={product.name} />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{product.name}</td>
                                            <td>{product.brandName}</td>
                                            <td>{product.price}</td>
                                            <td>
                                                <button onClick={() => handleRemoveFromCart(product._id)} className="p-2.5 rounded bg-rose-500 text-white hover:scale-110">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <button className="block mx-auto mt-12 btn btn-neutral">Order Now</button>
                    </div>
                    :
                    <div className="flex flex-col justify-center items-center my-12 gap-6">
                        <h2 className="font-bold text-3xl">No Products in Cart</h2>
                        <Link to="/" className="btn btn-neutral">
                            Go Home
                        </Link>
                    </div>
            }
        </section>
    );
};

export default Cart;

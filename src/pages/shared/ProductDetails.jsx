import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const ProductDetails = () => {
    const loadedProduct = useLoaderData();
    const { user } = useContext(AuthContext);
    const [loadedUser, setLoadedUser] = useState({});
    // console.log(user?.email);
    useEffect(() => {
        fetch(`https://quality-cravings.vercel.app/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setLoadedUser(data);
            })
    }, [user?.email])


    const { _id, name, imageUrl, brandId, brandName, type, rating, price, shortDescription } = loadedProduct;

    const handleAddToCart = (productId) => {
        console.log('Add to cart clicked', productId);
        let cartItems = [];


        if (loadedUser?.cartItems) {
            cartItems = loadedUser.cartItems;
        }

        cartItems.push(productId);

        fetch(`https://quality-cravings.vercel.app/users/${user?.email}`, {
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
                        'Product Added to Cart',
                        'success'
                    )
                }
            })
    }

    return (
        <div className=" my-32">
            <h2 className="font-bold text-5xl text-center mb-16 dark:text-gray-300">Product Details</h2>
            <div className="flex flex-col md:flex-row bg-base-100 shadow border rounded-2xl overflow-hidden mx-4 md:mx-8 lg:mx-auto max-w-7xl">
                <figure><img className="h-96" src={imageUrl} alt={`${name} Image`} /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-4xl mb-3">{name}</h2>
                    <h2 className="card-title text-3xl"><span className="font-bold">Price: </span>${price}</h2>
                    <h2 className="card-title">
                        <span className="font-bold">Brand: </span><Link to={`/brands/${brandId}`} className="font-semibold rounded-full px-3 py-1 border-2 ">{brandName}</Link>
                    </h2>
                    <h2 className="card-title"><span className="font-bold">Category: </span>{type}</h2>
                    <h2 className="card-title"><span className="font-bold">Rating: </span>{rating}</h2>
                    <p className="text-lg"><span className="font-bold">Details: </span>{shortDescription}</p>
                    <div className="card-actions">
                        <button onClick={() => handleAddToCart(_id)} className="btn btn-neutral">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
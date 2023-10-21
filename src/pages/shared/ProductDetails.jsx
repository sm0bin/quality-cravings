import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const loadedProduct = useLoaderData();

    const { _id, name, imageUrl, brandId, brandName, type, rating, price, shortDescription } = loadedProduct;

    const handleAddToCart = (id) => {
        console.log('Add to cart clicked', id);

    }

    return (
        <div className=" my-32">
            <h2 className="font-bold text-5xl text-center mb-16">Product Details</h2>
            <div className="flex flex-row bg-base-100 shadow border rounded-2xl overflow-hidden mx-4 md:mx-8 lg:mx-auto max-w-7xl">
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
                        {/* <button onClick={handleUpdate} className="btn btn-neutral">Update</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
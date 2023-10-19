import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const loadedProduct = useLoaderData();

    const { _id, name, image_url, brand_name, type, rating, price, short_description } = loadedProduct;

    const handleAddToCart = (id) => {
        console.log('Add to cart clicked', id);

    }

    return (
        <div className="flex flex-row bg-base-100 shadow border rounded-2xl overflow-hidden">
            <figure><img className="" src={image_url} alt={`${name} Image`} /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-4xl mb-3">{name}</h2>
                <h2 className="card-title text-3xl"><span className="font-bold">Price: </span>${price}</h2>
                <h2 className="card-title">
                    <span className="font-bold">Brand: </span><span className="font-semibold rounded-full px-3 py-1 border-2 ">{brand_name}</span>
                </h2>
                <h2 className="card-title"><span className="font-bold">Category: </span>{type}</h2>
                <h2 className="card-title"><span className="font-bold">Rating: </span>{rating}</h2>
                <p className="text-lg"><span className="font-bold">Details: </span>{short_description}</p>
                <div className="card-actions">
                    <button onClick={() => handleAddToCart(_id)} className="btn btn-neutral">Add to Cart</button>
                    {/* <button onClick={handleUpdate} className="btn btn-neutral">Update</button> */}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
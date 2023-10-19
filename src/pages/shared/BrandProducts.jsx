import { useLoaderData, useNavigate } from "react-router-dom";

const BrandProducts = () => {
    const loadedBrand = useLoaderData();
    const navigate = useNavigate();

    const handleShowDetails = (id) => {
        navigate(`products/${id}`);
    }

    const handleUpdate = (id) => {
        navigate(`products/${id}/new`);
    }

    console.log(loadedBrand);
    return (
        <div className="my-12">

            <div className="grid grid-cols-1 md:grid-cols-2  mx-4 md:mx-8 lg:mx-6 gap-6">
                {
                    loadedBrand.products.map(product => (
                        <div key={product._id} className="flex flex-row bg-base-100 shadow border rounded-2xl overflow-hidden">
                            <figure><img className="" src="https://source.unsplash.com/coca-cola-glass-bottles-yZOfNnI2PA0/400x400" alt={`${product.name} Image`} /></figure>
                            <div className="card-body">
                                <h2 className="card-title font-bold text-4xl mb-3">{product.name}</h2>
                                <h2 className="card-title text-3xl"><span className="font-bold">Price: </span>${product.price}</h2>
                                <h2 className="card-title">
                                    <span className="font-bold">Brand: </span><span className="font-semibold rounded-full px-3 py-1 border-2 ">{product.brand_name}</span>
                                </h2>
                                <h2 className="card-title"><span className="font-bold">Category: </span>{product.type}</h2>
                                <h2 className="card-title"><span className="font-bold">Rating: </span>{product.rating}</h2>
                                <p className="text-lg"><span className="font-bold">Details: </span>{product.short_description}</p>
                                <div className="card-actions">
                                    <button onClick={() => handleShowDetails(product._id)} className="btn btn-neutral">Details</button>
                                    <button onClick={() => handleUpdate(product._id)} className="btn btn-neutral">Update</button>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default BrandProducts;
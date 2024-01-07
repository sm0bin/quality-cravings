
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const UpdateProduct = () => {
    const loadedProduct = useLoaderData();
    const [loadedBrands, setLoadedBrands] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://quality-cravings.vercel.app/brands")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setLoadedBrands(data);
            })
    }, []);

    const {
        _id,
        name,
        imageUrl,
        brandName,
        brandId,
        type,
        price,
        rating,
        shortDescription
    } = loadedProduct;
    const [selectedBrand, setSelectedBrand] = useState([brandId, brandName]);

    const handleBrandSelect = e => {
        const brandInfo = e.currentTarget.value.split(',');
        setSelectedBrand([brandInfo[0], brandInfo[1]]);
    }

    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.currentTarget;
        // const brandInfo = form.brandName.value.split(',');
        const newProduct = {
            name: form.name.value,
            imageUrl: form.imageUrl.value,
            brandId: selectedBrand[0],
            brandName: selectedBrand[1],
            type: form.type.value,
            price: form.price.value,
            rating: form.rating.value,
            shortDescription: form.shortDescription.value,
        }
        console.log(newProduct);

        fetch(`https://quality-cravings.vercel.app/products/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire(
                    'Success',
                    'Product Updated Successfully',
                    'success'
                )
                // form.reset();
                navigate(`/products/${_id}`);
            })
            .catch(err => console.log(err));
    }

    return (
        <div>


            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content w-full flex-col">
                    <h2 className="font-bold text-5xl text-center mb-12">Update Product</h2>
                    <div className="card flex-shrink-0 w-full shadow border bg-base-100">
                        <form onSubmit={handleUpdateProduct} className="card-body ">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Name</span>
                                    </label>
                                    <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Image</span>
                                    </label>
                                    <input type="text" name="imageUrl" defaultValue={imageUrl} placeholder="Image URL" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Brand Name</span>
                                    </label>
                                    <select onChange={handleBrandSelect} name="brandName" defaultValue={selectedBrand.toString()} className="input input-bordered select select-success">
                                        <option disabled selected hidden>{brandName}</option>
                                        {
                                            loadedBrands.map((brand, index) => (
                                                <option key={index} value={[brand._id, brand.name]}>{brand.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Type</span>
                                    </label>
                                    <input type="text" name="type" defaultValue={type} placeholder="Type" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Price</span>
                                    </label>
                                    <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Rating</span>
                                    </label>
                                    <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Product Description</span>
                                </label>
                                <input type="text" name="shortDescription" defaultValue={shortDescription} placeholder="Product Description" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-neutral">Update Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UpdateProduct;

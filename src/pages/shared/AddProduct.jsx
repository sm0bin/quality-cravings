import Swal from "sweetalert2";

const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.currentTarget;

        const newProduct = {
            name: form.name.value,
            imageUrl: form.imageUrl.value,
            brandName: form.brandName.value,
            type: form.type.value,
            price: form.price.value,
            rating: form.rating.value,
            productDescription: form.productDescription.value,
        }
        console.log(newProduct);

        fetch('http://localhost:5500/products/', {
            method: 'POST',
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
                    'Product Added Successfully',
                    'success'
                )
                form.reset();
            })
            .catch(err => console.log(err));
    }

    return (
        <div>


            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content w-full flex-col">
                    <h2 className="font-bold text-5xl text-center mb-12">Add Product</h2>
                    <div className="card flex-shrink-0 w-full shadow border bg-base-100">
                        <form onSubmit={handleAddProduct} className="card-body ">
                            <div className="grid grid-cols-2 gap-6">


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Image</span>
                                    </label>
                                    <input type="text" name="imageUrl" placeholder="Image URL" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Brand Name</span>
                                    </label>
                                    <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Type</span>
                                    </label>
                                    <input type="text" name="type" placeholder="Type" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Price</span>
                                    </label>
                                    <input type="text" name="price" placeholder="Price" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Rating</span>
                                    </label>
                                    <input type="text" name="rating" placeholder="Rating" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Product Description</span>
                                </label>
                                <input type="text" name="productDescription" placeholder="Product Description" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-neutral">Add Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddProduct;
// Image
// Name
// Brand Name
// Type
// Price
// Short Description
// Rating
// Add button
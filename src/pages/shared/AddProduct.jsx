
const AddProduct = () => {
    return (
        <div>


            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content w-full flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full shadow bg-base-100">
                        <form className="card-body ">
                            <div className="grid grid-cols-2 gap-6">


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Image</span>
                                    </label>
                                    <input type="text" placeholder="Image" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Brand Name</span>
                                    </label>
                                    <input type="text" placeholder="Brand Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Type</span>
                                    </label>
                                    <input type="text" placeholder="Type" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Price</span>
                                    </label>
                                    <input type="text" placeholder="Price" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Rating</span>
                                    </label>
                                    <input type="text" placeholder="Rating" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Short Description</span>
                                </label>
                                <input type="text" placeholder="Short Description" className="input input-bordered" required />
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
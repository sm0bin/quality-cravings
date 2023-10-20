import { Link, useLoaderData, useNavigate } from "react-router-dom";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

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
        <div className="">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {
                    loadedBrand.advertisement_images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img src={image} alt={`Advertisement image ${index}`} />
                        </SwiperSlide>
                    ))
                }

            </Swiper>

            <h2 className="font-bold text-5xl text-center mt-32 mb-16">{loadedBrand.name} Brand Products</h2>

            {
                loadedBrand.products.length === 0 ?
                    <div className="flex flex-col justify-center items-center my-12 gap-6">
                        <h1 className="text-4xl font-bold text-center">No Products In Stock For This Brand</h1>
                        <Link to="/" className="btn btn-neutral w-max">Go Home</Link>
                    </div> :

                    <div className="grid grid-cols-1 md:grid-cols-1 mb-32 mx-4 md:mx-8 max-w-7xl lg:mx-auto gap-6">
                        {loadedBrand.products.map(product => (
                            <div key={product._id} className="flex flex-row bg-base-100 shadow border rounded-2xl overflow-hidden">
                                <figure><img className="h-96 w-full object-cover" src={product.image_url} alt={`${product.name} Image`} /></figure>
                                <div className="card-body ">
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
                        ))}

                    </div>
            }
        </div>
    );
};

export default BrandProducts;
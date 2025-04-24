import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Products = () => {
    const loadedProducts = useLoaderData();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [category, setCategory] = useState('all');

    // Filter products based on search query and category
    const filteredProducts = loadedProducts.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.brandName.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = category === 'all' || product.type === category;
        return matchesSearch && matchesCategory;
    });

    // Get unique categories from products
    const categories = ['all', ...new Set(loadedProducts.map(product => product.type))];

    const handleShowDetails = (id) => {
        navigate(`/products/${id}`);
    }

    const handleUpdate = (id) => {
        navigate(`/products/${id}/edit`);
    }

    // Get featured products for the carousel
    const featuredProducts = loadedProducts.filter(product => product.rating >= 4.5).slice(0, 5);

    return (
        <div className="mx-4 md:mx-8 max-w-7xl lg:mx-auto">
            {/* Featured Products Carousel */}
            <h2 className="font-bold text-3xl text-center mb-6 mt-8">Featured Products</h2>
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
                {featuredProducts.map((product, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-96">
                            <img
                                src={product.imageUrl}
                                alt={`${product.name}`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
                                <h3 className="text-2xl font-bold">{product.name}</h3>
                                <p className="text-lg">${product.price} - {product.brandName}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <h2 className="font-bold text-5xl text-center mb-8 mt-16">All Products</h2>

            {/* Search and Filter Section */}
            <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="input input-bordered w-full md:w-80"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <select
                        className="select select-bordered w-full md:w-60"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {categories.map((cat, index) => (
                            <option key={index} value={cat}>
                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {filteredProducts.length === 0 ? (
                <div className="flex flex-col justify-center items-center my-12 gap-6">
                    <h1 className="text-4xl font-bold text-center">No Products Found</h1>
                    <button
                        className="btn btn-neutral w-max"
                        onClick={() => {
                            setSearchQuery('');
                            setCategory('all');
                        }}
                    >
                        Reset Filters
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-32 gap-6">
                    {filteredProducts.map(product => (
                        <div key={product._id} className="card bg-base-100 shadow-xl border">
                            <figure className="h-64">
                                <img className="h-full w-full object-cover" src={product.imageUrl} alt={`${product.name} Image`} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-bold">{product.name}</h2>
                                <div className="flex justify-between items-center">
                                    <p className="font-bold text-xl">${product.price}</p>
                                    <div className="badge badge-outline">{product.brandName}</div>
                                </div>
                                <p className="text-sm mt-2">Category: {product.type}</p>
                                <p className="text-sm">Rating: {product.rating}</p>
                                <p className="text-sm line-clamp-2">{product.shortDescription}</p>
                                <div className="card-actions justify-end mt-4">
                                    <button onClick={() => handleShowDetails(product._id)} className="btn btn-sm btn-neutral">Details</button>
                                    <button onClick={() => handleUpdate(product._id)} className="btn btn-sm btn-outline btn-neutral">Update</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;
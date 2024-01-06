import { Link, useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";
import Testimonials from "./Testimonials";

const Home = () => {
    const loadedBrands = useLoaderData();
    return (
        <div>
            <section className="hero min-h-screen bg-[url('/pizza.jpg')]">
                <div className="hero-overlay bg-orange-600/10"></div>
                <div className="hero-content w-full text-neutral-content">
                    <div className="w-full">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to Quality Cravings</h1>
                        <p className="mb-5 text-xl">Your Destination for Premium Food and Beverages.</p>
                        <Link to="/login">
                            <button className="btn btn-neutral font-semibold bg-orange-500 hover:scale-110 hover:bg-orange-500 text-white shadow-xl border-none">Shop Now</button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className=" my-32">

                <h2 className="font-bold text-5xl text-center mb-16 dark:text-gray-300">Top Brands</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4 md:mx-8 max-w-7xl lg:mx-auto gap-6">
                    {
                        loadedBrands?.map(brand => (
                            <BrandCard key={brand._id} brand={brand} ></BrandCard>
                        ))
                    }
                </div>
            </section>

            <section className="overflow-hidden relative my-32 mx-4 md:mx-8 max-w-7xl lg:mx-auto p-12 rounded-2xl bg-cover object-right bg-[url('https://source.unsplash.com/burger-with-lettuce-and-cheese-on-black-wooden-board-3UmTH5x2guQ/1280x400')]">
                <h2 className="text-white font-bold text-3xl">Authentic Products from Top Brands at Affordable Prices</h2>
                <h4 className="text-white font-medium text-xl mt-3 mb-6">Enjoy Free Delivery on Your First Purchase</h4>

                <Link to="/login">
                    <button className="btn btn-neutral font-semibold bg-orange-500 hover:scale-110 hover:bg-orange-500 text-white shadow-xl border-none">Shop Now</button>
                </Link>
                <img className="absolute -bottom-16 md:-bottom-12 -right-12 md:-right-8 lg:right-8 h-64 scale-75 lg:scale-100" src="/certified-1.svg" alt="" />
            </section>

            <Testimonials></Testimonials>



        </div>
    );
};

export default Home;
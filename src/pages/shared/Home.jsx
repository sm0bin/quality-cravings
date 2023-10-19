import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";
import Testimonials from "./Testimonials";

const Home = () => {
    const loadedBrands = useLoaderData();
    return (
        <div>
            <section className="hero min-h-screen" style={{ backgroundImage: 'url("https://source.unsplash.com/burger-with-fries-8l8Yl2ruUsg/1920x1280")' }}>
                <div className="hero-overlay bg-orange-600/10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to Quality Cravings</h1>
                        <p className="mb-5 text-xl">Your Destination for Premium Food and Beverages.</p>
                        <button className="btn btn-neutral font-semibold bg-orange-500 hover:scale-110 hover:bg-orange-500 text-white shadow-xl">Shop Now</button>
                    </div>
                </div>
            </section>

            <section className=" my-32">

                <h2 className="font-bold text-5xl text-center mb-12">Top Brands</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 mx-4 md:mx-8 lg:mx-6 gap-6">
                    {
                        loadedBrands.map(brand => (
                            <BrandCard key={brand._id} brand={brand} ></BrandCard>
                        ))
                    }
                </div>
            </section>

            <Testimonials></Testimonials>



        </div>
    );
};

export default Home;
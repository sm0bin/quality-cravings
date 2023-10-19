import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";
import Testimonials from "./Testimonials";

const Home = () => {
    const loadedBrands = useLoaderData();
    return (
        <div>
            <section className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-neutral">Get Started</button>
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
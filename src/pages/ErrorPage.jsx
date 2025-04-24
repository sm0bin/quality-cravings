import { Link, useRouteError } from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <Header></Header>
            <div id="error-page" className="flex flex-col items-center justify-center my-24 gap-3 space-y-4 w-11/12 mx-auto">
                <img className="lg:w-1/3 mx-auto" src="/404-cat.svg" alt="" />
                <div>
                    <h2 className="font-semibold text-2xl text-center">Sorry, an unexpected error has occurred.</h2>
                    <h4 className="font-medium text-lg text-center">
                        <i>{error.statusText || error.message}</i>
                    </h4>
                </div>
                <Link to="/" className="btn btn-neutral">Go Home</Link>
            </div>
            <Footer></Footer>
        </>
    );
}
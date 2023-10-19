import { useNavigate, useRouteError } from "react-router-dom";
import Footer from "./shared/Footer";
import Header from "./shared/Header";

export default function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate();

    console.error(error);
    const handleGoHome = () => {
        navigate("/");
    }

    return (
        <>
            <Header></Header>
            <div id="error-page" className="flex flex-col items-center justify-center my-24 gap-3 space-y-4 w-11/12 mx-auto">
                <img className="lg:w-1/3 mx-auto" src="/404-cat-2.svg" alt="" />
                <div>
                    <h2 className="font-semibold text-2xl text-center">Sorry, an unexpected error has occurred.</h2>
                    <h4 className="font-medium text-lg text-center">
                        <i>{error.statusText || error.message}</i>
                    </h4>
                </div>
                <button onClick={handleGoHome} className="btn btn-neutral">Go Home</button>
            </div>
            <Footer></Footer>
        </>
    );
}
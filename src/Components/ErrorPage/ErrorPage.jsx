import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
    const error = useRouteError();

    const navigate = useNavigate();
    const handelGoBackBtn = () =>{
        navigate(-1); // -1 use korle one step back page jaoya
    }

    return (
        <div>
            <h1>Opoooos</h1>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page not found</h3>
                    <p>Go back where you come</p>
                    <Link to="/"><button>Home</button></Link>
                    <button onClick={handelGoBackBtn}>Go Back</button>
                </div>
            }
        </div>
    );
};

export default ErrorPage;


/*
useNavigate0

The useNavigate hook returns a function that lets you navigate programmatically.

It returns a function that can be invoked with a URI to redirect the client to the respective page.

*/
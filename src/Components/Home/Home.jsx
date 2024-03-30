import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    const navigation = useNavigation(); // use kora hoy -> data loading track rakhar jonno
    const location = useLocation(); // use kora hoy user kon page ache seta dekha jonno
    console.log(location);
    return (
        <div>
            {/* 
                <Outlet>
                    The React Router <Outlet/> component (from react-router-dom) is used within the parent route element to indicate where a child route element should be rendered.
            */}
            <Header></Header>
            {
                navigation.state === "loading"?<p>loading...</p>:
                <Outlet></Outlet>// je part change hoy oi parte e outlet bose. 


            }
            <h1>Hello my home</h1>
            <Footer></Footer>
        </div>
    );
};

export default Home;

/*
useNavigationO

This Hook gives the developer access to properties that show the state of a currently rendered route.

For example, this Hook can indicate when a route is "loading" or when a form on the route is "submitting" as well as "idle" when there is no navigation pending.

It is useful for building loading indicators or optimistically updating data on a page.



useLocation(

. The useLocation React Router Hook allows you to access the location object that represents the active URL.

. The value of the location object changes whenever the user navigates to a new

*/
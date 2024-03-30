import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {userId} = useParams();  // useParams diye link er laste unique part collect kora jay  ->https//facbook/home -> useParams diye home ke alada variable neoya jay
    const {name,username,id} = user;
    const navigate = useNavigate();
    const handelGoBackBtn = () =>{
        navigate(-1); // -1 use korle one step back page jaoya
    }
    return (
        <div>
            <h1>Hi! {name}</h1>
            <h2>My Id: {userId}</h2>
            <h2>My Id: {username} && {id}</h2>
            <button onClick={handelGoBackBtn}>Go Back</button>
        </div>
    );  
};

export default UserDetails;

/*
useParams()
useParams() - This hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the Route path
*/
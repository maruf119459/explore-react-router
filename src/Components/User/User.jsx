import { Link, useNavigate } from "react-router-dom";
const User = ({user}) => {
    const {id, name, email, phone} = user;
    
    const navigate = useNavigate();

    const handelShowDetailsBtn = ()=>{  // btn e use kora hoy  -> useNavigate
        navigate(`/user/${id}`)
    }
    return (
        <div>
            <h1>Name: {name}</h1>
            <h2>Id: {id}</h2>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <button onClick={handelShowDetailsBtn}>Btn SHow Details</button>
        </div>
    );
};

export default User;

/*
<Navigate>
1. <Navigate> -This component is a built-in components in React router version 6.

2. It is a wrapper for the useNavigate hook, and the current location changes when you render it.

3. It accepts all the same arguments as props.

*/
import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h1>users number {users.length}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptates.</p>
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users;

/*
useLoaderData()

useLoaderData-This hook provides the value returned from your route loader. Each route can define a "loader" function to provide data to the route element before it renders.


*/
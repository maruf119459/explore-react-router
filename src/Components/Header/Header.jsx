import { Link,NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div>
            <h2>NavBar</h2>
            <nav>
                {/* <Link to="/">Home</Link>
                <Link to="/about">about</Link>
                <Link to="/contact">contact</Link>
                <Link to="/users">Users</Link> */}
                <br />
                <NavLink to="/">Home </NavLink>
                <NavLink to="/about">about </NavLink>
                <NavLink to="/contact">contact </NavLink>
                <NavLink to="/users">Users </NavLink>


            </nav>
        </div>
    );
};

export default Header;

/*
<Link>

. A <Link> is an element that lets the user navigate to another page by clicking or tapping on it.

. The to prop specifies the location to which the user will be redirected after clicking on the <Link>.

. Rendering a <Link> will insert an anchor tag (<a>) in your HTML document, but the anchor's default behavior (triggering a page reload) will be disabled.


<NavLink>

. A <NavLink> is a special kind of <Link> that knows whether or not it is "active" or "pending".

· This is useful when building a navigation menu, such as a breadcrumb or a set of tabs where you'd like to show which of them is currently selected.

*/
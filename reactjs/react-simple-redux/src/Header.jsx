import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <h2>Header</h2>
            {/* Link component from react-router-dom is used to create hyperlinks. It takes a "to" prop which specifies the URL to navigate to when the link is clicked. */}
            <Link to="/">Home</Link> |
            <Link to="/cart">View Cart</Link> |
            <Link to="/detail/1">Detail Page 1</Link> |
            <Link to="/detail/2">Detail Page 2</Link> |
        </div>
    )
}
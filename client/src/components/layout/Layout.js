import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import Policy from "./content/policy/Policy";
import Footer from "./footer/Footer";

export default function Layout(props) {
    return (
        <div>
            <Navbar />
            <Header />
            {props.children}
            <Policy />
            <Footer />
        </div>
    )
}

import CartWidget from "./CartWidget";
import LogoMc from "./LogoMc";

const NavBar = () => {
    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-md-1">
                    <LogoMc tamano={120} />
                </div>
                <div className="col-md-10 d-flex align-items-center justify-content-center">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">Helados</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">Chocolates</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">Panaderia</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">Quesos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">Bonebroth</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">Hamburguesas</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-1 d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar;
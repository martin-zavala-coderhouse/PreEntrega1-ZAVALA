import BannerApp1 from "../assets/banner_app1.jpg";
import BannerApp2 from "../assets/banner_app2.jpg";

const Banner = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <img src={BannerApp1} className="img-fluid" alt="..." />
                        <div className="card-body text-center">
                            <h4>Helados Orgánicos</h4>
                            <p>Pedí la nueva Pileta de Cheddar de McDonald's para enchufarle mucho, muchísimo cheddar a tus papitas, McNuggets y hamburguesa.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={BannerApp2} className="img-fluid" alt="..." />
                        <div className="card-body text-center">
                            <h4>Chocolates Orgánicos</h4>
                            <p>Llegó a McDonald's la nueva Bacon Cheddar McMelt, con mucho, muchísimo cheddar, che . Vení a probarla. Chequeadísimo que te va a encantar.</p>
                        </div>
                    </div>
                </div>
            </div>

            



            <div className="row">
                <div className="col">
                    <div className="card">
                        <img src={BannerApp1} className="img-fluid" alt="..." />
                        <div className="card-body text-center">
                            <h4>Panadería Orgánica</h4>
                            <p>Pedí la nueva Pileta de Cheddar de McDonald's para enchufarle mucho, muchísimo cheddar a tus papitas, McNuggets y hamburguesa.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={BannerApp2} className="img-fluid" alt="..." />
                        <div className="card-body text-center">
                            <h4>Quesos Orgánicos</h4>
                            <p>Llegó a McDonald's la nueva Bacon Cheddar McMelt, con mucho, muchísimo cheddar, che . Vení a probarla. Chequeadísimo que te va a encantar.</p>
                        </div>
                    </div>
                </div>
            </div>









            <div className="row">
                <div className="col">
                    <div className="card">
                        <img src={BannerApp1} className="img-fluid" alt="..." />
                        <div className="card-body text-center">
                            <h4>BoneBroth Orgánico</h4>
                            <p>Pedí la nueva Pileta de Cheddar de McDonald's para enchufarle mucho, muchísimo cheddar a tus papitas, McNuggets y hamburguesa.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={BannerApp2} className="img-fluid" alt="..." />
                        <div className="card-body text-center">
                            <h4>Hamburguesas Orgánicas</h4>
                            <p>Llegó a McDonald's la nueva Bacon Cheddar McMelt, con mucho, muchísimo cheddar, che . Vení a probarla. Chequeadísimo que te va a encantar.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
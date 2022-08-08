import './App.css';

function App() {
  return (
    <div className="bg-container">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-3">
                    <div className="card1 d-flex flex-row">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-about-me-img.png" className="img1" alt ="img1"/>
                        <div>
                            <h1 className="h1">Jenny</h1>
                            <p className="p1">Frontend Developer</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-3 mt-md-3">
                    <h1 className="h2">Phone No.</h1>
                    <div className="card2 d-flex flex-row">
                        <i className="fas fa-phone-alt img2"></i>
                        <p className="p2">9876543210</p>
                    </div>
                </div>

                <div className="col-12 col-md-3 mt-md-3">
                    <h1 className="h2">E-mail</h1>
                    <div className="card2 d-flex flex-row">
                        <i className="fas fa-envelope img2"></i>
                        <p className="p2">jenny3@gmail.com</p>
                    </div>
                </div>

                <div className="col-12 col-md-3 mt-md-3">
                    <h1 className="h2">Address</h1>
                    <div className="card2 d-flex flex-row">
                        <i className="fas fa-map-marked-alt img2"></i>
                        <p className="p2">17 Ayur Vigyan Nagar, New Delhi, India.</p>
                    </div>
                </div>

            </div>
        </div>
        <div className="ftcontainer text-center">
            <p className="p3">
                <i className="far fa-copyright img2"></i>
                2020 by Jenny Wilson. Created with Bootstrap.
            </p>
        </div>
    </div>
  );
}

export default App;

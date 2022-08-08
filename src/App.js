import './App.css';
import myimg from './myimg.jpeg';

function App() {
  return (
    <div className="bg-container">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-3">
                    <div className="card1 d-flex flex-row">
                        <img src={myimg} className="img1" alt ="img1"/>
                        <div>
                            <h1 className="h1">CVS CHARAN</h1>
                            <p className="p1">Frontend Developer</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-3 mt-md-3">
                    <h1 className="h2">Phone No.</h1>
                    <div className="card2 d-flex flex-row">
                        <i className="fas fa-phone-alt img2"></i>
                        <p className="p2">+91 7337525111</p>
                    </div>
                </div>

                <div className="col-12 col-md-3 mt-md-3">
                    <h1 className="h2">E-mail</h1>
                    <div className="card2 d-flex flex-row">
                        <i className="fas fa-envelope img2"></i>
                        <p className="p2">charan.cvs@gmail.com</p>
                    </div>
                </div>

                <div className="col-12 col-md-3 mt-md-3">
                    <h1 className="h2">Address</h1>
                    <div className="card2 d-flex flex-row">
                        <i className="fas fa-map-marked-alt img2"></i>
                        <p className="p2"> Hyderabad, India.</p>
                    </div>
                </div>

            </div>
        </div>
        <div className="ftcontainer text-center">
            <p className="p3">
                <i className="far fa-copyright img2"></i>
                2020 by CVS CHARAN. Created with Bootstrap.
            </p>
        </div>
    </div>
  );
}

export default App;

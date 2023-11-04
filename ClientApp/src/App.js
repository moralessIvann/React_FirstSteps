import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-sm-center">
                <div className="col-sm-4">
                    <div className="card text-center bg-dark mt-5">
                        <div className="card-body">
                            <h1 className="card-title text-info">Welcome to this site</h1>
                            <p className="card-title text-light">First steps with REACT JS</p>
                            <a href="#" className="btn btn-danger">SUBSCRIBE</a>
                        </div>
                    </div>
                </div>
            </div>
            {/*<h1>Hello World</h1>*/}
        </div>
    )
}

export default App;
/* //using props example
function Card(props) {
    return (
        <div className="card text-center bg-dark mt-5">
            <div className="card-body">
                <h1 className="card-title text-info">{ props.title }</h1>
                <p className="card-title text-light">{ props.bodyText }</p>
                <a href="#" className="btn btn-danger">{props.btnText} </a>
                { children }
            </div>
        </div>
    );
}
*/

//using children
export default
    function Card({ title, bodyText, btnText, children }) {

    return (
        <div className="card text-center bg-dark mt-5">
            <div className="card-body">
                <h1 className="card-title text-info">{title}</h1>
                <p className="card-title text-light">{bodyText}</p>
                <a href="#" className="btn btn-danger">{btnText} </a>
                {children}
            </div>
        </div>
    );
}

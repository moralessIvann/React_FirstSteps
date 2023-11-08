import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './components/Card'
import Counter from './components/Counter'
import Employee from './components/Employee'
import Animal from './components/Animal'


export default function App() {
    return (
        
        <div className="container-fluid">

            <h1>Hello World</h1>
            <Counter />
            
            <div className="row justify-content-sm-center">
                <div className="col-sm-4">

                    <Card title="Card #1" bodyText="This is the first card" btnText="Subscribe x1">
                        <br/>
                        <b className="text-light">5 Likes</b>
                    </Card>

                    <Card title="Card #2" bodyText="This is the second card" btnText="Subscribe x2"/>
                    <Card title="Card #3" bodyText="This is the third card" btnText="Subscribe x3" />  
                    <br />
                    <Employee />

                    <Animal/>

                </div>
            </div>
        </div>
    )
}
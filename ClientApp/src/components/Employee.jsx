import { useState } from 'react';

//creating component with 'const'
const Employee = () => {

    let employeeModel = {
        name: 'John Connor',
        mail: 'john.connor@mail.com'
    }

    const [employee, setEmployee] = useState(employeeModel)

    return (
        <div className="text-center border border-dark py-2 px-2">
            <p>Name: {employee.name}</p>
            <p>Mail: {employee.mail}</p>

            <button className="me-2 btn btn-warning" onClick={() => setEmployee(
                {
                ...employee,mail:'connor.john@mail.com' //destructuring
                }
            )}>Change mail</button>

            <button className="btn btn-primary"  onClick={() => setEmployee(
                {
                    ...employee, mail: 'john.connor@mail.com' //destructuring
                }
            )}>Back to original mail</button>
        </div>
    )
}

export default Employee;
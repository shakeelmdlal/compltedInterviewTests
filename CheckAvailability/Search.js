import { useState } from 'react'
import { STUDENTS } from './StudentList'
import Error from './Error'
import ResidentsList from './Residents'

function checkValidity(joiningDate, validityDate) {
    console.log(joiningDate)
    console.log(validityDate)
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const [year, month, day] = joiningDate.split('-');
    const [yyyy, mm, dd] = validityDate.split('-');
    const maxValid = new Date(yyyy, mm - 1, dd);
    const selected = new Date(year, month - 1, day);
    return (maxValid >= selected) && (maxValid >= today);
}


function SearchStudent() {

    const [name, setName] = useState('');
    const [joiningDate, setjoiningDate] = useState();
    const [notVerified, setnotVerified] = useState(false);
    const [validityExpired, setvalidityExpired] = useState(false);
    const [availableName, setavailableName] = useState([]);

    const handleChangeName = (e) => {
        setName(e.target.value)
        setnotVerified(false)
        setvalidityExpired(false)
    }

    const handleChangeDate = (e) => {
        setjoiningDate(e.target.value)
    }

    const checkStudent = () => {
        if (name.length > 0) {
            const lowercased = name.toLowerCase()
            const isStudentAvail = STUDENTS.filter(item => item.name.toLowerCase() === lowercased);
            if (isStudentAvail.length > 0) {
                setnotVerified(false)
                setvalidityExpired(false)
                const returnName = isStudentAvail.map(item => {
                    return item.name
                })
                const returnValidDate = isStudentAvail.map(item => {
                    return item.validityDate
                })
                const isStudentValid = checkValidity(joiningDate, returnValidDate.toString())
                if (isStudentValid) {
                    const newAvailName = [...availableName, {
                        'name': returnName,
                    }]
                    setavailableName(newAvailName);
                    setName('');
                    setjoiningDate('')
                }
                else {
                    setvalidityExpired(true)
                }
            }
            else {
                setnotVerified(true)
            }
        }
    }
    return (
        <div>
            <input type="text" data-testid="studentName" placeholder="Name" name="name" value={name} onChange={handleChangeName} />
            <input type="date" data-testid="joiningDate" placeholder="yyyy-mm-dd" name="joiningDate" value={joiningDate} onChange={handleChangeDate} />
            <button data-testid="addBtn" onClick={checkStudent}>Add</button>
            <p>
                {validityExpired && <Error errmsg={"Sorry, " + name + "'s" + " validity has Expired!"} />}
                {notVerified && <Error errmsg={"Sorry, " + name + " is not a verified student!"} />}
            </p>
            <ResidentsList name={availableName} />
        </div>
    )
}
export default SearchStudent;
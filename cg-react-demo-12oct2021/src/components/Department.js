import { useEffect, useState } from "react";

const Department = (props) => {
    console.log('Departmentchild Componet');

    const [deptData, setDeptData] = useState(1);

    useEffect(() => {
        console.log('deptChild useEffect');
        setDeptData(5450);
    }
        , []);

    const deptFun = () => {
        console.log('dept fun');
        return deptData;
    }

    return (
        <div>
            <p className="display-4 text-primary">Department componenets</p>
            <p>Department child data : {deptData} </p>
            <button className="btn btn-primary" onClick={() => { props.callDepartFun(deptFun) }}>
                pass data from Department child to Parenmt</button>
        </div>
    );
}
export default Department;
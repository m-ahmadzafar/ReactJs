import { useState } from "react";
import PropChild from "./PropChild";

const PropParent = () => {

    const [data1, SetData1]= useState("Ahmad")
    const [data2, SetData2] = useState([
        { name: "Ahmad", age: 21, id: 1 },
        { name: "Ahmad", age: 22, id: 2 },
        { name: "Ahmad", age: 23, id: 3 }
    ]);
    return ( <div>
        This is the prop that will send the data

        <PropChild data1={data1} data2={data2}/>
    </div> );
}
 
export default PropParent;
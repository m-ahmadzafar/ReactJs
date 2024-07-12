const PropChild = ({data1, data2}) => {

    const recieved_data = data1
    const recieved_data2 = data2

    return (
        <div>
        <p>Now we can use that data</p>
        <p>{recieved_data}</p>
        {recieved_data2 && recieved_data2.map((shit) => (
            <div key={shit.id}>
                <p>{shit.name}</p>
                <p>{shit.age}</p>
            </div>
        ))}
    </div>
    
    
    );
}
 
export default PropChild;
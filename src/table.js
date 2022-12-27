
function Table({vector, select}){

    return(

        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Select</th>  
                </tr>
                </thead>
                <tbody>
                    {
                        vector.map((obj, position) => 
                        <tr key={position}>
                            <td>{position + 1}</td>
                            <td>{obj.name}</td>
                            <td>{obj.brand}</td>
                            <td><button onClick={() => {select(position)}} className="btn btn-success">Select</button></td>
                        </tr>)


                    }
                </tbody>
            
        </table>
    )

}

 export default Table;
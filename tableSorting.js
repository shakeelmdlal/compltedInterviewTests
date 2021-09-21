import react, { useEffect, useState } from 'react'
 
function TableSorting(){
    const [tableData, setTableData] = useState([]);
    const [sortTable, setsortTable] = useState([])

   

useEffect(() =>{
    const url = `https://jsonmock.hackerrank.com/api/movies`;
    fetch(url, {method: "Get", datatype: "JSON"})
    .then(res => res.json())
    .then(data => setTableData(data.data))
    .catch(error => {
        console.log(error);
    });
},[tableData])

    // const sortName = (tableData) => {
    //     tableData.sort((a, b) =>{
    //         const nameA = a.Title.toUpperCase();
    //         const nameB = b.Title.toUpperCase();
    //         if(nameA < nameB){
    //             return -1;
    //         }if(nameA > nameB){
    //             return 1;
    //         }
    //         return 0;
    //     })
    // }
    
   const handleChange = (e) =>{
    console.log(tableData);
    let sortData = [];
        const isChecked = e.target.checked;
        console.log(isChecked);
        console.log(tableData);
        if(isChecked){
        sortData = tableData.sort((a, b) =>{
                const nameA = a.Title
                const nameB = b.Title
                if(nameA < nameB){
                    return -1;
                }if(nameA > nameB){
                    return 1;
                }
                return 0;
            })   
            console.log('sort data:', sortData)
            setsortTable(sortData)
        }else{
            setsortTable([])
        }
     
    }
    const tableList = tableData.map((item, key) =>{
        return <tr key={key}><td>{item.Title}</td><td>{item.Year}</td><td>{item.imdbID}</td></tr>
    })
    const sortTableData = sortTable.map((item, key) =>{
        return <tr key={key}><td>{item.Title}</td><td>{item.Year}</td><td>{item.imdbID}</td></tr>
    })
    
    return(
        <react.Fragment>
<p><input type="checkbox" name="sortTable" onChange={(e) => handleChange(e)} />Sort Movie Name</p>
            <table>
                <thead>
                <tr><td>Movie Name</td><td>Movie Year</td><td>ImbID</td></tr>
                </thead>
                <tbody>
                    {sortTable.length > 0 ? sortTableData : tableList}
                    {/* {
                         tableData.map((item, key) =>(
                         <tr key={key}><td>{item.Title}</td><td>{item.Year}</td><td>{item.imdbID}</td></tr>
                        ))
                    } */}
                </tbody>
            </table>
        </react.Fragment>
    )
}
export default TableSorting;
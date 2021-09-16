
import React, {useState} from 'react';
import './index.css'

function Stocks() {
    const [inputDate, setDate] = useState('');
    const [stockData, setstockData] = useState([]);
    const [apiHit, setapiHit] = useState(0);

    const getInputdate = (e) => {
        setDate(e.target.value);
    }

    const getData = () => {
        if(inputDate) {
            const url = `https://jsonmock.hackerrank.com/api/stocks?date=${inputDate}`
            fetch(url, {
              method: "Get",
              datatype: "JSON",
              headers: {
                  "content-type": "application/json; charset=utf-8",
              },
          })
            .then((resp) => {
               return resp.json()
            })
            .then((data) => {
                if(data.data.length > 0){
                    setapiHit(0);
                    setstockData(data.data)
                }else{
                    setapiHit(1)
                    setstockData([])
                }
            })
            .catch((error) => {
              console.log('error is :', error);      
            })
        }
    }

    const displayData = stockData.map((item) =>{
        return <ul className="mt-50 slide-up-fade-in styled" id="stockData" data-testid="stock-data">
        <li className="py-10">Open: {item.open}</li>
        <li className="py-10">Close: {item.close}</li>
        <li className="py-10">High: {item.high}</li>
        <li className="py-10">Low: {item.low}</li>
        </ul>
    })

    return(
        <div>
         <input type="text" placeholder="5-January-2000" onChange={(e) => getInputdate(e)} />
            <button onClick={() => getData()}>search</button>
            {stockData.length > 0 && displayData}
            {apiHit !== 0 && <div>data not found</div>}
        </div>
    )

} //main method close
export default Stocks

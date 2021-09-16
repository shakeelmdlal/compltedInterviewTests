
import React, {useState} from 'react';
import './index.css'

function Movies() {
    const [inputYear, setInputYear] = useState('');
    const [movieData, setmovieData] = useState([]);
    const [apiHit, setapiHit] = useState(0);

    const getInputYear = (e) => {
        setInputYear(e.target.value);
    }

    const getData = () => {
        if(inputYear) {
            const url = `https://jsonmock.hackerrank.com/api/movies?Year=${inputYear}`
            fetch(url, {
                method: "Get",
                datatype: "JSON",
                headers: {
                    "content-type": "application/json; charset=utf-8",
                },
            })
            .then((resp) => {
              console.log('resp ',resp)
                return resp.json()
            })
            .then((data) => {
              console.log('data', data)
                if(data.data.length > 0){
                    setapiHit(0);
                    setmovieData(data.data)
                }else{
                    setapiHit(1)
                    setmovieData([])
                }
            })
            .catch((error) => {
              console.log('error is :', error);      
            })
        }
    }

    const displayData = movieData.map((item) =>{
        return <li>{item.Title}</li>
    })

    return(
        <div>
            <input type="number" placeholder="2015" onChange={(e) => getInputYear(e)} />
            <button onClick={() => getData()}>search</button>
            {movieData.length > 0 && <ul>{displayData}</ul>}
            {apiHit !== 0 && <div>data not found</div>}
        </div>
    )

} //main method close
export default Movies
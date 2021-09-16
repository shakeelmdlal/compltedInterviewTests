
//// Filter data

const [{ noteTitle, noteStatus }, setNote] = useState(initialState);
  const [noteList, setNoteList] = useState([]);
  const [filter, setFilter] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote(prevState => ({ ...prevState, [name]: value }));
  }

  const addNote = () => {
    setFilter('')
    setNote({ ...initialState });;
    const newNoteList  =   [ ...noteList, {
      'noteTitle': noteTitle,
      'noteStatus': noteStatus
    }]
    setNoteList(newNoteList)
  }

  const checkFilter = (filter) => {
    setFilter(filter)
  }

  const filterNoteList = () => {
    let newData;
    switch(filter) {
      case 'active':
          newData = noteList.filter((item) => {
          const status = item.noteStatus
          return status.toLowerCase() === 'active'
        })
        break;
      case 'completed':
        newData = noteList.filter((item) => {
          const status = item.noteStatus
          return status.toLowerCase() ===  'completed'
        })
        break;
      case 'all':
        let sortedData = noteList.sort(function(a, b) { 
          const n1 = a.noteStatus
          const n2 = b.noteStatus
          
          return filters.indexOf(n2.toLowerCase()) - filters.indexOf(n1.toLowerCase());
        });        
        newData = sortedData
        break;
      default:
        newData = noteList
        break; 
    }

    return newData.map((item, key) => {
      return <tr key={key}><td>{item.noteTitle}</td><td>{item.noteStatus}</td></tr>
    })
  }


  ///// Movie data

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




    ///// Stocks data

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
import React, { useState } from "react";
import "./index.css";

const initialState = {
  noteTitle: '',
  noteStatus: '',
};

const filters = [ 'completed', 'active'];

function NotesApp() {
  const [{ noteTitle, noteStatus }, setNote] = useState(initialState);
  const [noteList, setNoteList] = useState([]);
  const [filter, setFilter] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote(prevState => ({ ...prevState, [name]: value }));
  }

  const addNote = () => {
    setFilter('')
    setNote({ ...initialState });
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
  return (
    <div className="layout-column align-items-center justify-content-start">
      <section className="layout-row align-items-center justify-content-center mt-30">
        <input data-testid="input-note-name" type="text" className="large mx-8"
          placeholder="Note Title" name="noteTitle" value={noteTitle} onChange={handleChange} />
        <input data-testid="input-note-status" name="noteStatus" type="text" className="large mx-8"
          placeholder="Note Status" value={noteStatus} onChange={handleChange} />
        <button onClick={addNote} className="" data-testid="submit-button" >Add Note</button>
      </section>

      <div className="mt-50">
        <ul className="tabs">
          <li className="tab-item slide-up-fade-in" data-testid="allButton" onClick={()=> checkFilter('all')}>All</li>
          <li className="tab-item slide-up-fade-in" data-testid="activeButton" onClick={()=> checkFilter('active')}>Active</li>
          <li className="tab-item slide-up-fade-in" data-testid="completedButton" onClick={()=> checkFilter('completed')}>Completed</li>
        </ul>
      </div>
      <div className="card w-40 pt-30 pb-8">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody data-testid="noteList">
            {filterNoteList()}
         </tbody>
        </table>
      </div>
    </div>
  );
}

export default NotesApp
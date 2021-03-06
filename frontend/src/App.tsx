import { useEffect, useState } from 'react';
import './App.css';
import './css/table.css';
import './css/header.css';
import moment from "moment";
import Search from "./search";


function  App() {
  const [events,setEvents] = useState([])
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const [filteredEvents,setFilteredEvents]=useState([] as any)
  const [careRecipients,setCareRecipients]=useState([])
  const eventUrl = `${process.env.REACT_APP_BACKEND_URL}/event`


  function getEvents(){
    console.log(eventUrl)
    fetch(eventUrl)
    .then(res => {
      if (!res.ok){
                throw Error("No access to database");
            }
      return res.json()})
    .then((res)=>{
      setEvents(res)
      console.log(res)
      return res
        })
    .then((events)=>{filterEvents(events,query as string)}
    )
  }

  function getCareRecipients(){
    fetch(eventUrl+'/careRecipient')
    .then(res => {
      if (!res.ok){
                throw Error("No access to database");
            }
      return res.json()})
    .then((res)=>{
      setCareRecipients(res)
        })
  }

  function isWordInEvent(word :string,event: any){
    for(const key in event){
      if(typeof event[key]==='string'){
        const value = event[key].toLowerCase()
        if (value.includes(word)){
          return true
        }
      }
    }
    return false
  }

  function filterEvents(events: any[],query: string){
    if (!query){
      setFilteredEvents(events)
    }
    else{
      setFilteredEvents(
          events.filter((event) => {
          const lowerCaseQuery= query.toLowerCase()
          const wordArray = lowerCaseQuery.split(' ')
          const boolArray: boolean[] = []
          for(const index in wordArray){
            boolArray.push(isWordInEvent(wordArray[index],event))
          }
          return boolArray.reduce((previousValue,currentValue)=> {return previousValue && currentValue})
        })
      )
    }
  }



  function changeTimeFormat(timestamp:string){
    const date = new Date(timestamp)
    return moment(date).format('YYYY-MM-DD HH:mm')
  }

  function replaceUnderscoreWithSpaces(sentence: string){
    const sentenceArray = sentence.split('_')
    return sentenceArray.join(' ')
  }



// At the first render
  useEffect(() => {
    getEvents()
    getCareRecipients()
    console.log(filteredEvents)
	}, []);

// When searchQuery is modified
  useEffect(() => {
    filterEvents(events,searchQuery)
	}, [searchQuery]);


  function eventDisplay(event: any){
    return(
      <tr key={(event.id)}>
        <th>{changeTimeFormat(event.timestamp)}</th>
        <th>{replaceUnderscoreWithSpaces(event.event_type)}</th>
        <th>{event.visit_id}</th>
        <th>{event.care_recipient_id}</th>
        <th>{event.caregiver_id}</th>
        <th>{event.payload.note}</th>
      </tr>
    )
  }

  
  function handleSelectChange(e: any){
    setSearchQuery(e.target.value)
  }


  return (
    <div>
      <div className='header'>
        <div className='header-container'>
          <label className='header-element'>Choose a care recipient:</label>
          <select className='header-element' name="careRecipient" onChange={handleSelectChange}>
              {careRecipients.map((idObject: any) => (
                  <option value={idObject.care_recipient_id}>{idObject.care_recipient_id}</option>
                ))}
          </select>
        </div>

        <div className='header-container'>
          <label className='header-element'>Or filter manualy on any field:</label>   
          <Search className='eheader-lement'
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}/>
        </div>
      </div>

    <div>
        <table className="content-table">
          <thead>
          <tr>
            <th>Time</th>
            <th>Event Type</th>
            <th>Visit</th>
            <th>Care Recipient</th>
            <th>Caregiver</th>
            <th>Notes</th>
          </tr>
          </thead>
          <tbody>
            {filteredEvents.map((event: any) => (eventDisplay(event)))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App;

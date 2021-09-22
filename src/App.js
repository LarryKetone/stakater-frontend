import './App.css';
import {useState,useEffect} from "react";
import moment from 'moment';
import axios from 'axios';
import { API_BASE_URL } from './config.js';

function App() {

  const [greeting, setGreeting] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [date, setDate] = useState("");

  useEffect(() => {

    setDate(moment().format('DD/MM/YYYY h:mm'));

    //console.log(API_BASE_URL+"/main");
    axios.get(API_BASE_URL+"/main")
    .then(res => {
      console.log(res.data);
      setIsLoaded(true);
      setGreeting(res.data);
  
    })
    .catch(error => {
      setIsLoaded(true);
      setError(error);
    }

    )
    
}, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <h1>{date} {greeting}</h1>

    );
  }
}

export default App;

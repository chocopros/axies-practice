import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardPeople from './components/CardPeople'

function App() {
  const [user, setUser] = useState()

  if(!user){

  }

  useEffect(()=> {
    const URL = 'https://randomuser.me/api/'
    axios.get(URL)
    .then(res => {setUser(res.data.results[0])}) //
    .catch(err => console.log(err.message))

  }, [])

  return (
    <div className="App">
      <CardPeople user={user} />
      <CardPeople user={user} />

    </div>
  )
}

export default App

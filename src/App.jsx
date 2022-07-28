import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState()

  useEffect(()=> {
    const URL = 'https://randomuser.me/api/'
    axios.get(URL)
    .then(res => {setUser(res.data.results[0])}) //
    .catch(err => console.log(err.message))

  }, [])

  return (
    <div className="App">
      <div className="card">
        <div className="card__img">
          <img src={user?.picture.large} alt="" />
        </div>
        <div className="card__body">
          <h2>{`${user?.name.title} ${user?.name.first} ${user?.name.last}`}</h2>
          <ul>
            <li><b>Cuntry: </b>{user?.gender}</li>
            <li><b>Gender: </b>{user?.gender}</li>
            <li><b>Age: </b>{user?.dob.age}</li>
            <li><b>Email: </b>{user?.email}</li>
            <li><b>Phone: </b>{user?.cell}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App

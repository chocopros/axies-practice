import React from 'react'

const CardPeople = ({user}) => {
  return (
      <div className="card">
          <div className="card__img">
              <img src={user?.picture.large} alt="" />
          </div>
          <div className="card__body">
              <h2>{`${user?.name.title} ${user?.name.first} ${user?.name.last}`}</h2>
              <ul>
                  <li><b>Country: </b>{user?.location.country}</li>
                  <li><b>Gender: </b>{user?.gender}</li>
                  <li><b>Age: </b>{user?.dob.age}</li>
                  <li><b>Email: </b>{user?.email}</li>
                  <li><b>Phone: </b>{user?.cell}</li>
              </ul>
          </div>
      </div>
  )
}

export default CardPeople
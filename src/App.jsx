import { useState } from 'react'
import './App.css'

function App() {
const [searchUser, setSearchUser]= useState('')
  const users = [
  {
      "id": "60d0fe4f5311236168a109f5",
      "title": "ms",
      "firstName": "Charlotte",
      "lastName": "Legrand",
      "picture": "https://randomuser.me/api/portraits/med/women/77.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109f6",
      "title": "miss",
      "firstName": "Madison",
      "lastName": "Ambrose",
      "picture": "https://randomuser.me/api/portraits/med/women/15.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109fa",
      "title": "ms",
      "firstName": "Ann",
      "lastName": "Mason",
      "picture": "https://randomuser.me/api/portraits/med/women/18.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109fb",
      "title": "mr",
      "firstName": "Sohan",
      "lastName": "Pierre",
      "picture": "https://randomuser.me/api/portraits/med/men/77.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109fc",
      "title": "mr",
      "firstName": "Gonzaga",
      "lastName": "Ribeiro",
      "picture": "https://randomuser.me/api/portraits/med/men/10.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109ff",
      "title": "mrs",
      "firstName": "Josefina",
      "lastName": "Calvo",
      "picture": "https://randomuser.me/api/portraits/med/women/3.jpg"
  },
  {
      "id": "60d0fe4f5311236168a10a00",
      "title": "mrs",
      "firstName": "Els",
      "lastName": "Ijsseldijk",
      "picture": "https://randomuser.me/api/portraits/med/women/75.jpg"
  },
  {
      "id": "60d0fe4f5311236168a10a01",
      "title": "mr",
      "firstName": "Jesus",
      "lastName": "Riley",
      "picture": "https://randomuser.me/api/portraits/med/men/45.jpg"
  },
  {
      "id": "60d0fe4f5311236168a10a03",
      "title": "mr",
      "firstName": "Andri",
      "lastName": "Leclerc",
      "picture": "https://randomuser.me/api/portraits/med/men/57.jpg"
  },
  {
      "id": "60d0fe4f5311236168a10a04",
      "title": "mr",
      "firstName": "Konsta",
      "lastName": "Manninen",
      "picture": "https://randomuser.me/api/portraits/med/men/24.jpg"
  }
]

const handleChange = (e)=>{
  e.preventDefault();
  setSearchUser(e.target.value);
}

  return (
    <div className='wrapper'>
    <input type='search'
    placeholder='Search by name...' 
    onChange={handleChange}/>
<div className="container">
   {users
   .filter(user =>{
    if(searchUser === ''){
      return user
    } else if (user.firstName.toLowerCase().includes(searchUser.toLowerCase())){
      return user;
    }
   }
  )
   .map((user, index) =>(
      <div key={index} className='box'>
        <div className="img"> 
         <img src={user.picture} />
         </div>
        <div className="text">
      <p>{user.id}</p>
      <h3>{user.title} {user.firstName} {user.lastName} </h3>
      </div>
      </div>
        ))}
        </div>
        </div>
 )

}

export default App

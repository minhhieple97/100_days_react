import React, { useState } from 'react'
import data from './data'
function App() {
  const [users, setUsers] = useState(data)
  return (
    <main>
      <div className='container'>
        <h3>{users.length} birthdays today</h3>
        <List className='users' users={users}></List>
        <button
          className='btn btn-pink'
          onClick={() => {
            setUsers([])
          }}
        >
          Clear All
        </button>
      </div>
    </main>
  )
}

const List = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return <Item key={user.id} user={user}></Item>
      })}
    </div>
  )
}

const Item = ({ user }) => {
  return (
    <div className='user'>
      <img className='user-avatar' src={user.image} alt='' />
      <div className='user-info'>
        <p className='user-name'>{user.name}</p>
        <p className='user-age'>{user.age} years</p>
      </div>
    </div>
  )
}

export default App

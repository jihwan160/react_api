import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'


function Daylist() {

const days = useFetch("http://localhost:3001/days")

  if (days.length === 0) {
    return <span>Loading...</span>
  }
  
  return (
    <div>
      <ul>
        {days.map(day => (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>day {day.day}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Daylist
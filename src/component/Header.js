import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <Link to='/'>
        <h2>영단어</h2>
      </Link>
      <Link to="/create_word">
        <button>단어 추가</button>
      </Link>
      <Link to="/create_day">
      <button>날짜 추가</button>

      </Link>
    </div>
  )
}

export default Header
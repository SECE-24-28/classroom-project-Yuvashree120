import React, { useContext } from 'react'

import Search from './Search'
import { Link } from 'react-router-dom'
import DataContext from './Context/DataContext'

const Home = () => {
      const {searchResult}=useContext(DataContext)
  return (
    <div>
      <Search/>
        {
        searchResult.map((post)=>
           <div key={post.id} className="mylist">
          <Link to={`/editpost/${post.id}`} className="LinkStyle">
             <h3>{post.title}</h3>
             <p>{post.datetime}</p>
             <p>{post.body}</p>
          </Link>
        <hr />
      
        </div>
     )
     }
    </div>
  )
}

export default Home
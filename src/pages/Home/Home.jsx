import React from 'react'
import './Home.css'
import Header from '../../components/Navbar/Header/Header'
import ExploreMenue from '../../components/ExploreMenue/ExploreMenue'
import { useState } from 'react'

const Home = () => {

    const [category,setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenue category={category}setCategory={setCategory}/>
    </div>
  )
}

export default Home

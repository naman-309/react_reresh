import React from 'react'
import About from './About'
import UserContext from '../context/UserContext'
import { useContext } from 'react'
const Home = () => {

    let studentData = useContext(UserContext)
    console.log(studentData)
    return (
        <div>
            This is  Home child
            <p>name from  home :{studentData.name}</p>

            <About></About>

        </div>
    )
}

export default Home

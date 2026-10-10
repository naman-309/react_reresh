import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'
import Cotact from './Cotact'
const About = () => {
    let studentData = useContext(UserContext)
    return (
        <div>
            <hr></hr>
            hello this is about component
            <p>email form about :{studentData.email}</p>
            {/* <p>present for  about : {studentData.present.toString()}</p> */}
            <p> p resent  form about : {studentData.present ? "Yes" : "No"}</p>
            <Cotact></Cotact>
        </div>
    )
}

export default About

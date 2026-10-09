import React from 'react'
import About from './About'
const Home = (props) => {

    return (
        <div>

            <h1>This is  Home child</h1>
            <p>Name: {props.data.name}</p>
            <p>Age: {props.data.age}</p>
            <About data={{ name: props.data.name, age: props.data.age }}></About>
        </div>
    )
}

export default Home


import React from 'react'

import { useContext } from 'react'
import UserContext from '../context/UserContext'
const Cotact = () => {
    let someData = useContext(UserContext)
    return (
        <div>
            <hr></hr>
            <p>hello this is contact component</p>
            <p> present form contact us :{someData.present ? "Yes" : "No"}</p>

        </div>
    )
}

export default Cotact

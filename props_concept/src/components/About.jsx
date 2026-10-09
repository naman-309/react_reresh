import React from 'react'

// Destructure 'data' instead of 'handel'
export default function About({ data }) {
    return (
        <div>
            <h1>This is About child</h1>
            {/* Access the name property directly from data */}
            <p>this is name  : {data.name}</p>
            <p>this is age  : {data.age}</p>
        </div>
    )
}

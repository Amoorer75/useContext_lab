import React, {useContext} from 'react'
import {AppContext} from '../App'
 
 const Green = () => {
const context = useContext(AppContext)
return (
    <div>
        <h1>{context}</h1>
        <h1 style={{color: 'green'}}>This is the Green Screen</h1>
    </div>
)
}

export default Green
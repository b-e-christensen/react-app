import React from "react";
import summer from '../images/summer.jpg'
import fall from '../images/fall.jpg'
import winter from '../images/winter.jpg'
import spring from '../images/spring.jpg'
// import '../App.css';

const styles = [
    {
        backgroundImage: `url(${summer})`,
        height: '200px',
        width: '200px',
        backgroundSize: 'cover',
    },
    {
        backgroundImage: `url(${fall})`,
        height: '200px',
        width: '200px',
        backgroundSize: 'cover',
    },
    {
        backgroundImage: `url(${winter})`,
        height: '200px',
        width: '200px',
        backgroundSize: 'cover',
    },
    {
        backgroundImage: `url(${spring})`,
        height: '200px',
        width: '200px',
        backgroundSize: 'cover',
    }
]

function Box({ index, hidden }) {

    return(

        <div value={index} key={index} className={hidden ? "world-box " : "world-box"} style={styles[Math.floor(Math.random() * 4)]}>
        <p>what it doooooo</p>
        <p>{Math.floor(Math.random() * 4)}</p>
        </div>
    )
}

export default Box;
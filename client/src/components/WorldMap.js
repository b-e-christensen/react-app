import React from "react";
import Box from './Box';
import '../App.css';
import dragscroll from 'dragscroll'

function WorldMap() {
    let world = []

    function worldMap() {
        for (let i = 0; i < 100; i++) {
            world.push(<Box />)
        }
    }

    worldMap()
    let index = -1
    const renderedWorld = world.map((item) => {
        index++
        if (index === 55) {
            return <Box index={index} />
        }
        return <Box index={index} hidden='true' />
    });

    return (
        <div className="world-container dragscroll">
            {renderedWorld}
        </div>
    );
}

export default WorldMap;
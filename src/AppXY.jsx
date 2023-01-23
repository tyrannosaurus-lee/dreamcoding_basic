import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
    // const [x, setX] = useState(0);
    // const [y, setY] = useState(0);
    const [position, setPosition] = useState({x:0, y:0});
    return (
        // on에 관련된 것은 event가 명확하기 때문에 event라기 보다는 e를 많이 쓴다.
        <div 
            className='container' 
            onPointerMove={(e) => {
                console.log(e.clientX, e.clientY);
                // setX(e.clientX);
                // setY(e.clientY);
                setPosition({x:e.clientX, y:e.clientY});
            }}
        >
            <div 
                className='pointer' 
                style={{transform:`translate(${position.x}px, ${position.y}px)`}} />
        </div>
    );
}
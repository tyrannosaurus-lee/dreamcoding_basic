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
                // setPosition({x:e.clientX, y:e.clientY});
                // 만약 수평으로만 이동이 가능하다면? : y를 이전 상태값인 prev.y를 사용한다.
                // 객체를 리턴해줄때는 소괄호()로 묶어줘야함.
                // 왜냐하면 객체를 나타내는 중괄호{}를 쓰면 이게 코드블럭인지 개체를 나타내는지 모름.
                setPosition((prev) => ({x:e.clientX, y:prev.y}));
            }}
        >
            <div 
                className='pointer' 
                style={{transform:`translate(${position.x}px, ${position.y}px)`}}
             />
        </div>
    );
}
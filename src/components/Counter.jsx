// import React from 'react';
import React, { useState } from 'react';

export default function Counter(){
    // let num = 0;
    const [count, setCount] = useState(0);
    return (
        <div className="counter">
            <span className="number">{count}</span>
            {/* 
                useState : UI와 밀접하게 관련있는 데이터는 
                state라는 곳에 보관해줘야 함.
                변경이 가능한 데이터고 변경이 될때마다 
                ui를 업데이트 해달라고 알려주기 위해서는 useState를 사용해야 함
            */}
            <button
                className="button"
                onClick={() => {
                    //count++;
                    //console.log(count);
                    setCount(count + 1);
                }}
            >
                Add +
            </button>
        </div>
    )
}
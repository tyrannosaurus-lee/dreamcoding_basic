import React from 'react';
/*
export default function AppWrap(){
    return (
        <div>
            <Navbar />
        </div>
    );
}
function Navbar(){
    return (
        <header style={{ backgroundColor: 'yellow' }}>
            <Avatar 
                image="https://www.splitshire.com/wp-content/uploads/2020/11/SplitShire-20-5034.jpg"
                name='Bob'
                size={200}
            />
        </header>
        
    );
}
*/

/* 
⬇️wrap component (high order component)
사용하는 곳에서 자유자재로 원하는걸 넣고 싶음
*/
export default function AppWrap(){
    return (
        <div>
            <Navbar>
                <Avatar 
                    image="https://www.splitshire.com/wp-content/uploads/2020/11/SplitShire-20-5034.jpg"
                    name='Bob'
                    size={200}
                />
                <p>안녕하세요</p>
            </Navbar>
            <Navbar>
                <p>안녕하세요</p>
            </Navbar>
        </div>
    );
}
function Navbar({children}){
    return <header style={{ backgroundColor: 'yellow' }}>{children}</header> 
}
function Avatar({ image, name, size }) {
    return (
        <div>
            <img 
                src={image}
                alt={`${name}`}
                width={size}
                height={size}
                style={{ borderRadius: '50%' }}
            />
        </div>
    )
}
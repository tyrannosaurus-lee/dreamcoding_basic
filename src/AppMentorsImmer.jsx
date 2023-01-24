import React, {useReducer} from 'react';
import {useImmer} from 'use-immer';

export default function AppMentorsImmer(){
    const [person, updatePerson] = useImmer(initialPerson);
    const handleUpdate = () => {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
        /*
        만약 person의 이름을 변경해야 한다면
        업데이트할때는 실제로 객체자체를 업데이트를 하는것처럼 보이지만 
        immer내부적으로는 새로운person이라는 객체를 만들어서 
        우리가 업데이트하는 부분만 변경해줌
        하지만 person을 변경해주는것이 아님
        */
        //updatePerson(person => person.name = '새로운이름!');
        /* person 안에 있는 mentor의 이름을 변경하는 것! */
        updatePerson(person => {
            const mentor = person.mentors.find(m=>m.name === prev);
            mentor.name = current;
        });
    }
    const handleAdd = () => {
        const name = prompt(`멘토의 이름은?`);
        const title = prompt(`멘토의 직함은?`);
        /*
        push
        새로운 객체를 만들고 중첩된걸 업데이트 해줄 필요가 없이 
        실제 객체를 바로 직접적으로 수정한 것처럼 사용할 수 있음
        */
        updatePerson(person => person.mentors.push({name, title}));
    }
    const handleDelete = () => {
        const name = prompt(`누구를 삭제하고 싶은가요?`);
        /* 
        delete
        person을 가져와서 mentor를 삭제해야하므로
        */
       const index = person.mentors.findIndex(m=> m.name === name);
       person.mentors.splice(index, 1);
    }
    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <p>{person.name}의 멘토는 : </p>
            <ul>
                {person.mentors.map((mentor, index) => (
                    <li key={index}>
                        {mentor.name} ({mentor.title})
                    </li>
                ))}
            </ul>
            <button onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
            <button onClick={handleDelete}>멘토 삭제하기</button>
            <button onClick={handleAdd}>멘토 추가하기</button>
        </div>
    )
}
const initialPerson = {
    name: '은혜',
    title: '프론트엔드 개발자',
    mentors: [
        {
            name: '차은우',
            title: '시니어개발자',
        },
        {
            name: '로운',
            title: '시니어개발자',
        },
    ],
}
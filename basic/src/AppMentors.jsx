import React, {useReducer} from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentor(){
    // const [person, setPerson] = useState(initialPerson);

    const [person, dispatch] = useReducer(personReducer, initialPerson);
    /* 
        person이라는 상태와 dispatch라는 함수를 받아와서
        useReducer라는걸 사용해줌

        useReducer는 personReducer라는게 정의되어 있고
        초기값은 initialPerson이다.

        useReducer가 useState와 다른점은 
        객체를 새롭게 만들어나갈 로직을 작성한 함수를 전달해줌
        초기값을 전달해주면 상태에 접근할수 있는 변수와 
        personReducer를 호출할수 있는 dispatch라는게 있음
        (setPerson을 이용해서 새로운person을 업데이트한것처럼)
        dispatch를 이용해서 원하는 action을 명령할 수 있음. 
    */
    const handleUpdate = () => {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
        dispatch({ type: 'updated', prev, current });
        /* 
        dispatch를 호출하면 useReducer가 자동으로 personReducer를 호출해줌
        호출할때는 person이라는 객체와 함께 dispatch에 전달할 action object({ type: 'updated', prev, current })를
        두번째 인자인 action으로 전달해줌
        */
    }
    const handleAdd = () => {
        const name = prompt(`멘토의 이름은?`);
        const title = prompt(`멘토의 직함은?`);
        dispatch({ type: 'added', name, title });
    }
    const handleDelete = () => {
        const name = prompt(`누구를 삭제하고 싶은가요?`);
        dispatch({ type: 'deleted', name });
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
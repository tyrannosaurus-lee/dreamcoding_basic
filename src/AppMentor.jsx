import React, {useState} from 'react';

export default function AppMentor(props){
    const [person, setPerson] = useState({
        name : '은혜',
        title: '프론트엔드 개발자',
        mentor:{
            name:'차은우',
            title:'시니어 프론트엔드 개발자',
        }
    });
    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <p>
                {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
            </p>
            <button
                onClick={() => {
                    const name = prompt(`what's your mentor's name?`);
                    // setPerson은 객체이므로 객체를 사용할것임.
                    // 기존의 person의 데이터에 접근하기보다는 이전것을 사용하고 싶음.
                    // 반환할때 ...person에 중괄호{}를 사용하니 코드블록인줄 알고 에러발생 -> 소괄호()로 꼭 묶어주자
                    //setPerson(person => {...person})

                    // mentor는 중첩객체임.
                    // mentor는 person에 있는 mentor를 낱개로 풀어서 key와 value를 복사해준 다음에
                    // 우리가 실제로 원하는건 mentor의 이름을 전달받은 이름으로 update해줄것임.
                    // key와 value의 이름이 똑같다면 하나로 축약가능
                    //setPerson((person) => ({...person, mentor:{...person.mentor, name:name} }));
                    
                    setPerson((person) => ({
                        ...person, 
                        mentor: {...person.mentor, name:name},
                    }));
                }}
            >
                멘토 이름 바꾸기
            </button>
            <button
                onClick={() => {
                    const title = prompt(`what's your mentor's title?`);
                    setPerson((person) => ({
                        ...person, 
                        mentor: {...person.mentor, title},
                    }));
                }}
            >
                멘토 타이틀 바꾸기
            </button>
        </div>
    )
}
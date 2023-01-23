import React, {useState} from 'react';

export default function AppMentor(){
    const [person, setPerson] = useState({
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
    });
    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <p>{person.name}의 멘토는 : </p>
            <ul>
                {person.mentors.map((mentor, index) => (
                    // 배열의 index를 key로 쓰는것은 비추천
                    <li key={index}>
                        {mentor.name} ({mentor.title})
                    </li>
                ))}
            </ul>
            <button
                onClick={() =>{
                    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
                    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
                    /*
                    리액트에서 사용하는 모든 state는 불변성을 유지해야 한다.

                    리액트에서 사용하는 상태의 객체나 배열의 내부 내용을 직접적으로 업데이트하면 안되고
                    변경이 발생한다면 객체와 배열의 전체적인 껍데기를 새로 만들어서 업데이트 해줘야 한다.

                    리액트에서는 object내부의 값을 변경해도 ui상에 업데이트되지 않음.
                    객체를 만들면 객체마다 고유한 참조(reference)값이 만들어짐
                    리액트는 새로운 참조값이 만들어져야지 업데이트된지 앎
                    그런데 똑같은 객체에서(참조값이 동일한 상태에서) 안의 내용을 아무리 수정해봤자 
                    리액트가 보기엔 동일한 객체로 간주해서 업데이트 해주지 않음
                    업데이트를 원한다면 전체적인 객체를 만들어서 새로운 참조값을 가질 수 있도록 해야함

                    ⬇️person이라는 값을 이용해서 새로운 객체를 만들고
                    map을 이용해서 새로운 배열을 만들어줌
                    */
                    setPerson(person => ({
                        ...person, 
                        mentors: person.mentors.map((mentor) => {
                            // 주어진 멘토의 이름이 변경하고자 하는 prev와 같다면 새롭게 만드는 객체를 반환하라.
                            if(mentor.name === prev) {
                                // 기존의 mentor에 있는 key와 value를 그대로 쓰고
                                // 업데이트할 이름은 current로 업데이트 해줄것임
                                return {...mentor, name: current };
                            }
                            // 이름이 동일한 객체가 아니라면 기존의 mentor들은 기존의 객체를 그대로 쓰면 됨
                            return mentor;
                        }),
                    }));
                }}
            >
                멘토의 이름을 바꾸기
            </button>
            <button
                onClick={() =>{
                    const name = prompt(`누구를 삭제하고 싶은가요?`);
                    setPerson(person => ({
                        ...person, 
                        // mentor를 돌면서 mentor의 이름이 우리가 입력받은 이름이 아닌것들만 mentor로 새롭게 지정해줌
                        mentors: person.mentors.filter((m) => m.name !== name),
                    }));
                }}
            >
                멘토 삭제하기
            </button>
            <button
                onClick={() =>{
                    const name = prompt(`멘토의 이름은?`);
                    const title = prompt(`멘토의 직함은?`);
                    setPerson(person => ({
                        ...person, 
                        mentors: [...person.mentors, {name, title}],
                    }));
                }}
            >
                멘토 추가하기
            </button>
        </div>
    )
}
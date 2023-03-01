/* 
    useReducer는 
    기존의 person과 어떤 action을 원하는지를 객체를 전달받아서 
    action의 type이 update, added, delete인지 판단해서 
    각각 해당하는 action에 필요한 data를 받아온다.
    그리고 똑같이 기존의 person을 새로운 객체로 업데이트 해주고 있음
*/
export default function personReducer(person, action) {
    switch(action.type){
        case 'updated' : {
            // 1. 각각 할당 버전
            // const prev = action.prev;
            // const current = action.current;

            // 2. 축약 버전 : 구조분해할당버전 (object destructuring)
            // 이전의 값과 현재의 값을 받아와서 action에 넣음
            const {prev, current} = action;

            return {
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
            };
        }
        case 'added': {
            const { name, title} = action;
            return {
                ...person, 
                mentors: [...person.mentors, {name, title}],
            };
        }
        case 'deleted': {
            return {
                ...person, 
                mentors: person.mentors.filter((m) => m.name !== action.name),
            } 
        }
        default: {
            throw Error(`알 수 없는 액션 타입이다 : ${action.type}`);
        }
    }
}
import { createContext, useState } from 'react';

// createContext를 이용해 context를 만든다
export const DarkModeContext = createContext();

/*
context를 만들땐 항상 provider도 만들어줘야함
데이터를 context에 담고 있다
provider는 데이터를 잘 가지고 보여주는 umbrella를 만든다 생각하면 됨
DarkModeProvider는 우산 컴포넌트임(밑에 있는 하위 컴포넌트들을 감싸줄 수 있는 부모우산컴포넌트)
children : 자식 컴포넌트를 받아옴
*/
export function DarkModeProvider({ children }) {
    // 다크모드인지 여부를 기억하는 것
    const [darkMode, setDarkMode] = useState(false); //초기값은 다크모드가 아님
    const toggleDarkMode = () => setDarkMode((mode) => !mode);
    /*
    내부적으로 우리context에 있는 provider를 쓰는데
    이걸 외부에서 편하게 쓰기 위해서 우산을 만들어줌
    DarkModeContext.Provider : 자식컴포넌트들을 위에서 만든 context에서 제공해주는 provider로 감싸면 됨
    자식컴포넌트와 공유하고싶은 데이터가 있다면 value에 지정해주면 된다.
    우리는 다크모드인지 토글링까지 자식컴포넌트에서 모두 활용하길 원하므로 
    다크모드인지 여부 확인할 수 있는 상태변수 darkMode와 
    이걸 토글링 할 수 있는 함수 toggelDarkMode까지 
    다 children에 제공해줄꺼임
    */
    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}
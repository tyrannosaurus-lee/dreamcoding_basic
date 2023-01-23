import './App.css';

function AppJSX() {
  const name ='은혜';
  const list = ['우유', '딸기', '바나나'];
  return (
    <>
      <h1 style={{fontSize:'40px'}}>{`Hello ${name}`}</h1>
      <ul>
        {list.map((item) => ( 
          // 객체를 리턴할때는 객체를 소괄호로 감싸준다.
          // 중괄호{}를 쓰고싶을땐 return을 써준다
          <li>{item}</li> 
        ))}
      </ul>
    </>
  );
}

export default AppJSX;

import './App.css';
import Avatar from './components/Avatar';
import Profile from './components/Profile';

function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert('버튼이 클릭됨');
  };
  return (
    <>
      {/* 
      <button onClick={(event) => {
        console.log(event);
        alert('버튼이 클릭됨');
      }}>버튼</button>
       */}
       <button onClick={handleClick}>버튼</button>
      <Avatar
        image="https://www.splitshire.com/wp-content/uploads/2020/11/SplitShire-20-5034.jpg"
        isNew = {true}
      />
      <Profile 
        image="https://www.splitshire.com/wp-content/uploads/2020/11/SplitShire-20-5034.jpg"
        name="Rina Lee"
        title="프론트엔드 개발자"
        isNew = {true}
      />
      <Profile 
        image="https://www.splitshire.com/wp-content/uploads/2020/10/SplitShire-20-9369.jpg"
        name="Anna Young"
        title="백엔드 개발자"
      />
      <Profile image="https://www.splitshire.com/wp-content/uploads/2020/09/SplitShire-20-09309.jpg"
        name="Bob Yu"
        title="인프라"
      />
    </>
  );
}

export default AppProfile;

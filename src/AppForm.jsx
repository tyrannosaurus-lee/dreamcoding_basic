import {useState} from 'react';

export default function AppForm(){
    /*
    사용자 관련된 정보 개별관리 ver.
    입력폼은 데이터 보여지는게(또는 이미 보여지고 있는게)
    우리가 리액트 컴포넌트에서 가지고 있는 상태와 똑같이 매칭이 되도록(타이밍이 딱 맞도록)
    만들어 주는 것이 중요하다.
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    */
    /* 
    사용자 관련된 정보 하나의 객체로 관리 ver.
    상태는 개별적으로 관리해줘도 되지만 
    연관된 데이터라면 객체로 관리해나가면 된다. 
    */
    const [form, setForm] = useState({name:'', email:''});
    const handleSubmit = (e) => {
        /* 
        Form에서 항상 refresh를 원하는게 아니라면 
        기존페이지 그대로 머물러야하기 때문에
        preventDefault를 꼭 해줘야함
        */
        e.preventDefault();
        console.log(form);
    }
    const handleChange = (e)=>{
        const {name, value} = e.target;
        /*
        이벤트에서 발생하는 타겟의 name과 value를 받아와서 
        setForm을 해줄건데
        기존의 form에 있는 데이터는 그대로 유지하고 (...form)
        현재 input이 변경되고 있는 name의 key에 지금 전달받은 value를 덮어 씌워줌
        */
        setForm({...form, [name]: value});
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">이름:</label>
            <input 
                type="text" 
                id='name' 
                name='name'
                /*
                사용자 관련된 정보 개별관리 ver.
                value={name} 
                onChange={(e) => {
                    setName(e.target.value);
                }}
                */
                value={form.name}
                onChange={handleChange}
            />
            <label htmlFor="email">이메일:</label>
            <input 
                type='email'
                id='email' 
                name='email'
                /*
                사용자 관련된 정보 하나의 객체로 관리 ver.
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                */
                value={form.email}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
        /*
        uncontrolled component : 통제되지 않는 컴포넌트
        form에 있는 input 데이터는 
        사용자가 바로 수정하고 눈으로 확인 가능하기 때문에 uncontrolled component라고 한다.
        그래서 리액트에서 추구하는 원칙과 어긋난다.
        리액트는 ui업데이트는 리액트의 상태로부터 발생되어야하기 때문이다
        그래서 form을 사용할때는 항상 상태를 이용해서 
        value는 상태값을 출력하고 onChange가 발생할때마다 상태를 업데이트를 해줘야 한다.
        */
    )
}
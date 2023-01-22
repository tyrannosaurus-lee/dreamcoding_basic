import React, {useState, useEffect} from 'react';

export default function Products () {
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);

    // 컴포넌트가 처음 등록되었을때 처리해야하는 일이 있다면 
    // component안에서 하면 무한루프에 빠짐 -> useEffect안에서 하기
    useEffect(() => {
        fetch('data/products.json')
            .then((res) => res.json())
            .then((data) => {
                console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
                setProducts(data);
            });
            // useEffect의 반환하는 콜백함수 등록
            // ⬇️이 콜백함수는 이 컴포넌트가 없어질때(화면에서 사라질때 Unmount될때 호출되는 함수)
            return ()=> {
                console.log('🧹깨끗하게 청소하는 일들을 합니다.')
            }
        }, []); // 딱 한번만 처리되어야 한다면 두번째 배열을 텅텅 비게 만들면 됨 
    return (
        <>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <article>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </article>
                    </li>
                ))}
            </ul>
            <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
        </>
    )
}
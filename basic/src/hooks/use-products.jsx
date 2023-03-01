import { useEffect, useState } from "react";

// 재사용 가능한 커스텀훅이라면 use로 사용하는 것이 스타일가이드임
export default function useProducts (salesOnly){
    const [loading, setLoading] = useState(false); //처음에는 로딩이 안되는채로 시작하니까 false
    const [error, setError] = useState(undefined);
    const [products, setProducts] = useState([]);

    // 컴포넌트가 처음 등록되었을때 처리해야하는 일이 있다면 
    // component안에서 하면 무한루프에 빠짐 -> useEffect안에서 하기
    useEffect(() => {
        // useEffect가 호출되었다는건 데이터 로딩을 위해 호출되었다는거니까 setLoading은 true
        setLoading(true);
        // fetch('data/products.json')
        // salesOnly가 되었다면 sale_을 붙여주고 아니라면 아무것도 붙이지 않고 products.json을 받아온다.
        fetch(`data/${salesOnly ? 'sale_' : ''}products.json`)
            .then((res) => res.json())
            .then((data) => {
                console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
                setProducts(data);
            })
            .catch((e)=> setError('에러가 발생했음!'))
            .finally(() => setLoading(false));
            // useEffect의 반환하는 콜백함수 등록
            // ⬇️이 콜백함수는 이 컴포넌트가 없어질때(화면에서 사라질때 Unmount될때 호출되는 함수)
            return () => {
                console.log('🧹깨끗하게 청소하는 일들을 합니다.');
            }
    //}, []); // 딱 한번만 처리되어야 한다면 두번째 배열을 텅텅 비게 만들면 됨 
    }, [salesOnly]); // salesOnly가 변경이 될때마다 useEffect가 다시 실행되어야 한다.

    return [loading, error, products];
}
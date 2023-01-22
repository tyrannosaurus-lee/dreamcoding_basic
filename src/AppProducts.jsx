import React, {useState} from 'react';
import './App.css';
import Products from './components/Products';

export default function AppProducts () {
    const [showProducts, setShowProducts] = useState(true);
    return (
        <div>
            {showProducts && <Products />}{/* showProducts이 true로 설정되어 있으면 Products를 보여준다 */}
            <button onClick={() => setShowProducts((show) => !show)}>Toggle</button>
        </div>
    )
}
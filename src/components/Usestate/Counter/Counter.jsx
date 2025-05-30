import { useEffect, useState } from 'react';
import "./Counter.css"

const Counter = () => {
    const [number, setNumber] = useState(0);

    let increment = () => {
        setNumber(num => num + 5)
    }

    let dicrement = () => {
        setNumber(num => num - 5)
    }

    useEffect(() => {
        console.log(`Текущее число ${number}`)
    }, [number])


    return (
        <div className='wrraper'>
            <div className="count">Текущее число {number}</div>
            <div className="buttons">
                <button onClick={increment} className="click-btn">Увеличить число на +5
                </button>
                <button onClick={dicrement} className=" click-btn dicrement">Уменьшить число на -5
                </button>
            </div>
        </div>
    );
};

export default Counter;
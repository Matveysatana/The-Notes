import { useState, useEffect } from "react"

export function useLocalStorage(key, initialValue = []) {
    const [data, setData] = useState(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(data));
    }, [key, data]);

    const saveData = (newData) => {
        setData(newData);
    };

    return [data, saveData];
}
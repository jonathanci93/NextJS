"use client";
import { useEffect, useState } from "react";

const Posts = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setItems(data);
        }
        fetchData();
    }, []);

    return (
        <div className="container m-auto flex my-20">
            <ul>
                {
                    items.map(item => (
                        <li key={item.id}>{item.id} - {item.name} ({item.username})</li>
                    ))
                }
            </ul>
        </div>
    );
}


export default Posts;
import React, {useEffect, useState} from 'react';
import './styles/global.scss'

const Abaut = () => {
    const [posts, setPosts] = useState([]); // Исправлено: setPosts

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((data) => setPosts(data)) // Исправлено: setPosts
            .catch((error) => console.error('Ошибка при загрузке данных', error));
    }, []);

    return (
        <div className='abaut'>
            {posts.map((post) => (
                <div className='post' key={post.id}> {/* Добавлен уникальный ключ для элемента списка */}
                    <h1>{post.userId}</h1>
                    <h1>{post.id}</h1>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};

export default Abaut;

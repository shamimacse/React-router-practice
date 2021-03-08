import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const frStyle = {
        border: '3px solid purple',
        margin: '20px',
        padding: '20px',
        backgroundColor:'yellow',
        borderRadius: '30px',
        width:'30'
        
    }
const {friendId} = useParams();

    const [friend, setFriend] = useState({})
    useEffect(() =>{
         const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
         fetch(url)
         .then(res => res.json())
         .then(data => setFriend(data))
    }, [])
    return (
        <div style={frStyle}>
            <p>this is friend details component: {friendId}</p>
            <h3>{friend.name}</h3>
            <p>email: {friend.email}</p>
            <p>phone: {friend.phone}</p>
            <p>website: {friend.website}</p>

        </div>
    );
};

export default FriendDetail;
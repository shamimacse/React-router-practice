import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name, email,id} = props.friend;
     const history = useHistory();
     const handleClick = (friendId) => {
         const url = `/friend/${friendId}`;
         history.push(url);
     }
    const friendStyle = {
        border: '2px solid purple',
        margin: '20px',
        padding: '20px',
        backgroundColor:'lightGray',
        borderRadius: '30px',
        width:'300px',
        float:'right'
    }
    return (
        <div style={friendStyle}>
            <h2> Name: {name} </h2>
            <p>email: {email}</p>
            <Link to={`/friend/${id}`}>show detail of {id}</Link>
            <br/>
            <button onClick={() => handleClick(id)} >Click me</button>
        </div>
    );
};

export default Friend;
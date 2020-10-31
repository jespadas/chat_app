import React from 'react';

import onlineIcon from '../../icons/online_icon.png';

import './TexContainer.css';

const TextContainer = ({ users }) => (
    <div className='textContainer'>
        <div>
            <h1>Realtime Chat Application</h1>
            <h2>Created with React, Express, Node and Socket.io <span role='img' aria-label='emoji'>❤️</span></h2>
            <h3>Try it now ! <span role='img' aria-label='emoji'>⬅️</span></h3>
        </div>
        {
            users ? (
                <div>
                    <h1>People currently chatting:</h1>
                    <div className='activeContainer'>
                        <h2>
                            {users.map(({name}) => (
                                <div key={name} className='activeItem'>
                                    {name}
                                    <img alt="online icon" src={onlineIcon} />
                                </div>
                            ))}
                        </h2>
                    </div>
                </div>
            ) :
            null
        } 
    </div>
);

export default TextContainer;
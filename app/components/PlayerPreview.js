import React from 'react';

export default function PlayerPreview({ username, avatar, children }) {
  return (
    <div>
      <div className="column">
        <img src={avatar} alt={'Avatar for' + username} />
        <h2 className="username">{username}</h2>
        {children}
        {/* зачем так? (children) */}
      </div>
    </div>
  );
}

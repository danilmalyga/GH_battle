import React from 'react';

export default function RepoGrid({ repos }) {
  return (
    <ul className="popular-list">
      {repos.map(({ name, owner, html_url, stargazers_count }, index) => (
        <li key={name} className="popular-item">
          <div className="popular-rank">#{index + 1}</div>
          <ul className="space-list-items">
            <li>
              <img className="avatar" src={owner.avatar_url} alt={'Avatar for' + owner.login} />
            </li>
            <li>
              <a href={html_url}>{name}</a>
            </li>
            <li>@{owner.login}</li>
            <li>{stargazers_count} start</li>
          </ul>
        </li>
      ))}
    </ul>
  );
}

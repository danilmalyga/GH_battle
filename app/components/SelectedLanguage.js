import React from 'react';

export default function SelectedLanguage(props) {
  const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className="languages">
      {languages.map((language, index) => (
        <li
          key={index}
          style={language === props.selectedLanguage ? { color: '#d0021b' } : null}
          onClick={props.onSelect.bind(null, language)}
        >
          {language}
        </li>
      ))}
    </ul>
  );
}

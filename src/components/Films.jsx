import React from 'react';

export const films = [
  {
    title: 'Дыхание мёртвого леса (официальный трейлер)',
    image: './images/films/DML.jpg',
    genre: ['драма'],
    trailer: (
      <div>
        <iframe
          src="https://player.vimeo.com/video/873367434?h=97e60a4ae7"
          width="1280"
          height="720"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    ),
  },
  {
    title: 'Панчер',
    image: './images/films/puncher.jpg',
    genre: ['драма', 'спортивный фильм'],
    trailer: <div></div>,
  },
];

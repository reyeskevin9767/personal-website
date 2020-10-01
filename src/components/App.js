import React from 'react';
import WebProjects from './WebProjects';

const jsProjects = [
  {
    title: 'E-comm Website',
    imgLink: '/images/ecom-project.png',
    url: 'https://e-comm-project.herokuapp.com/',
    view: 'https://github.com/reyeskevin9767/e-comm-store-project',
  },

  {
    title: 'Secret Message',
    imgLink: '/images/secret-message-project.png',
    url: 'https://secret-message-project-tan.vercel.app/',
    view: 'https://github.com/reyeskevin9767/secret-message-project',
  },
  {
    title: 'Create A Testing Framework',
    imgLink: '/images/testing-framework.png',
    url: 'https://github.com/reyeskevin9767/testing-framework-project',
    view: 'https://github.com/reyeskevin9767/testing-framework-project',
  },
  {
    title: 'Create File Runner Command ',
    imgLink: '/images/file-runner-project.png',
    url: 'https://github.com/reyeskevin9767/file-runner-command-project',
    view: 'https://github.com/reyeskevin9767/file-runner-command-project',
  },
  {
    title: 'Recreate ls Command',
    imgLink: '/images/recreate-ls-project.png',
    url: 'https://github.com/reyeskevin9767/recreate-ls-command-project',
    view: 'https://github.com/reyeskevin9767/recreate-ls-command-project',
  },
  {
    title: 'Maze Game',
    imgLink: '/images/maze-project.png',
    url: 'https://maze-project.vercel.app/',
    view: 'https://github.com/reyeskevin9767/maze-project',
  },
  {
    title: 'Movie Fight',
    imgLink: '/images/movie-fight-project.png',
    url: 'https://movie-fight-project.vercel.app/',
    view: 'https://github.com/reyeskevin9767/movie-fight-project'
  },
  {
    title: 'Timer',
    imgLink: '/images/timer-project.png',
    url: 'https://timer-project.vercel.app/',
    view: 'https://github.com/reyeskevin9767/timer-project'
  },
  {
    title: 'Senior Design Project 2019',
    imgLink: '/images/senior-project.png',
    url: 'https://kingsvilleconnection.herokuapp.com/',
    view: 'https://github.com/reyeskevin9767/Senior-Project-2019'
  },
];

const reactProjects = [
  {
    title: 'Stream Video With Redux',
    imgLink: '/images/stream-project.png',
    url: 'https://github.com/reyeskevin9767/seasons-project',
    view: 'https://github.com/reyeskevin9767/stream-video-w-redux-project',
  },
  {
    title: 'Translate With Context',
    imgLink: '/images/translate-project.png',
    url: 'https://translate-w-context-project.herokuapp.com/',
    view: 'https://github.com/reyeskevin9767/translate-w-context-project',
  },
  {
    title: 'Blog With Redux',
    imgLink: '/images/blog-project.png',
    url: 'https://blog-redux-project.herokuapp.com/',
    view: 'https://github.com/reyeskevin9767/blog-w-redux-project',
  },
  {
    title: 'Song With Redux',
    imgLink: '/images/secret-message-project.png',
    url: 'https://songs-w-redux-project.herokuapp.com/',
    view: 'https://github.com/reyeskevin9767/songs-w-redux-project',
  },
  {
    title: 'Videos With Hooks',
    imgLink: '/images/videos-project.png',
    url: 'https://videos-project.herokuapp.com/',
    view: 'https://github.com/reyeskevin9767/videos-w-hooks-projects',
  },
  {
    title: 'Widgets',
    imgLink: 'images/widgets-project.png',
    url: 'https://widgets-project.herokuapp.com/',
    view: 'https://github.com/reyeskevin9767/widgets-project',
  },
  {
    title: 'Videos',
    imgLink: '/images/videos-project.png',
    url: 'https://videos-project.herokuapp.com/',
    view: 'https://github.com/reyeskevin9767/videos-project',
  },
  {
    title: 'Pictures',
    imgLink: '/images/pictures-project.png',
    url: 'https://pics-project.herokuapp.com/',
    view: 'https://github.com/reyeskevin9767/pics-project',
  },
  {
    title: 'Seasons',
    imgLink: '/images/seasons-project.png',
    url: 'https://seasons-project.herokuapp.com/',
    view: 'https://github.com/reyeskevin9767/seasons-project',
  },
];

const pythonProjects = [
  {
    title: 'Scraping Quotes',
    imgLink: '/images/scraping-project.png',
    url: 'https://repl.it/@reyeskevin9767/scraping-quotes-project-#main.py',
    view: 'https://github.com/reyeskevin9767/scraping-quotes-project',
  },
  {
    title: 'Adventure Game',
    imgLink: '/images/adventure-project.png',
    url:
      'https://repl.it/@reyeskevin9767/adventure-game-project-3#adv_game/actions.py',
    view: 'https://github.com/reyeskevin9767/adventure-game-project',
  },
];

const App = () => {
  return (
    <div>
      <h2
        className="ui center aligned header"
        style={{ marginTop: '50px', marginBottom: '50px' }}
      >
        Kevin Reyes Portfolio
      </h2>
      <h2
        className="ui center aligned header"
        style={{ marginTop: '50px', marginBottom: '50px' }}
      >
        JavaScript Projects
      </h2>
      <div className="ui container">
        <WebProjects projects={jsProjects} />
      </div>
      <h2
        className="ui center aligned header"
        style={{ marginTop: '50px', marginBottom: '50px' }}
      >
        React Projects
      </h2>
      <div className="ui container">
        <WebProjects projects={reactProjects} />
      </div>
      <h2
        className="ui center aligned header"
        style={{ marginTop: '50px', marginBottom: '50px' }}
      >
        Python Projects
      </h2>
      <div className="ui container">
        <WebProjects projects={pythonProjects} />
      </div>
    </div>
  );
};

export default App;

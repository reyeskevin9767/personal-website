import React from 'react';
import JavaScriptProjects from './JavaScriptProjects';
import ecom from '../../public/images/ecom-project.png'

const jsProjectLinks = [
  {
    title: 'E-comm Website Project',
    imgLink: ecom,
    url: 'https://e-comm-project.herokuapp.com/',
  },
];

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: '50px' }}>
      <JavaScriptProjects projects={jsProjectLinks} />
    </div>
  );
};

export default App;

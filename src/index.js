import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  React.useEffect(() => {
    import('litMicrofrontend/my-element').then((module) => {
      const MyElement = module.default;
      const container = document.getElementById('microfrontend-container');
      const element = document.createElement('my-element');
      container.appendChild(element);
    });
  }, []);

  return (
    <div>
      <h1>Container App</h1>
      <div id="microfrontend-container"></div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import TwitchList from './TwitchList';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="title">
          <h2>Who's Streaming on Twitch Right Now?</h2>
          <h5>Created by Andrew Horn</h5>
        </div>
        <TwitchList/>
      </div>
    );
  }
};

export default App;

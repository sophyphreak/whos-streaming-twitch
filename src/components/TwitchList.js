import React from 'react';
import axios from 'axios';
import Twitch from './Twitch';

class TwitchList extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {
      jsons: {}
    };
    const twitches = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    this.populateJsons(twitches);
  };
    
  populateJsons (twitches) {
    twitches.forEach((twitch) => {
    let axiosUrl = 'https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/streams/' + twitch;
    
      axios
        .get(axiosUrl)
        .then(res => {
          if(res.data.stream) {
            let jsons = {};
            jsons[twitch] = [res.data.stream.game, res.data.stream.channel.status];
            jsons = Object.assign(jsons, this.state.jsons);
            this.setState({ jsons });
          } else {
            let jsons = {};
            jsons[twitch] = null;
            jsons = Object.assign(jsons, this.state.jsons);
            this.setState({ jsons });
          };
        })
        .catch(error => {
          console.log(error, twitch);
        });
    });
  };
  
  renderTwitches() {
    return Object.keys(this.state.jsons).map((key) => {
      try {
        return <Twitch json={this.state.jsons[key]} name={key}/>;
      } catch (e) {
        console.log(e);
        return undefined;
      }
    });
  };
  
  render() {
    return (
      <div className="twitch-list">
        {Object.keys(this.state.jsons).length === 8 ? this.renderTwitches() : Object.keys(this.state.jsons).length/8*100 + "% loaded"}
      </div>
    );
  }
};

export default TwitchList;
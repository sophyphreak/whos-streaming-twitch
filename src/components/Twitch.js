import React from 'react';

class Twitch extends React.Component {  
  renderTwitch() {
    let hyperlink = 'https://www.twitch.tv/' + this.props.name;
    
    if(this.props.json == null) {
      return (
        <div>
          <p><a href={hyperlink} target="_blank" rel="noopener noreferrer">{this.props.name}</a>--------- Offline for now</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>
            <a href={hyperlink} target="_blank" rel="noopener noreferrer">
              {this.props.name}
            </a>
            --------- {this.props.json[0]}: {this.props.json[1]}
          </p>
        </div>
      );
    }
  };
  

  
  render() {
    return (
      <div>
        {this.renderTwitch(this.props)}
      </div>
    );
  }
};

export default Twitch;
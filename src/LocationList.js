import React, { Component } from "react";

export default class LocationList extends Component {
  state = {
    locations: [
      { id: 1, name: "Nashville North" },
      { id: 2, name: "Nashville South" }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.locations.map(location => (
            <div key={location.id}>
              <li>{location.name}</li>
            </div>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

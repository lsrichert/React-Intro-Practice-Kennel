import React, { Component } from "react";
import Animal from "./Animal";

export default class AnimalList extends Component {
  state = {
    animals: [
      { id: 1, name: "Doodles", breed: "German Shepherd" },
      { id: 2, name: "Jack", breed: "Cocker Spaniel" },
      { id: 3, name: "Angus", breed: "Dalmation" },
      { id: 4, name: "Henley", breed: "Carolina Retriever" },
      { id: 5, name: "Derkins", breed: "Pug" },
      { id: 6, name: "Checkers", breed: "Bulldog" }
    ]
  };

  render() {
    return (
      <React.Fragment>
        {/* <Animal /> */}
        <ul>
          {this.state.animals.map(animal => (
            <div key={animal.id}>
              <li>{animal.name}</li>
            </div>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}
// import React, { Component } from "react";
// import Animal from "./Animal";

// export default class AnimalList extends Component {
//   render() {
//     return (
//       <React.Fragment>
//           {this.state.animals.map(animal => <Animal Key =
//           {animal.id} = animal}/>)}
//       </React.Fragment>
//     );
//   }
// }

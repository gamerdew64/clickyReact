import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters
  };

  removeCharacter = id => {
    // Filter this.state.characters for characters with an id not equal to the id being removed
    const characters = this.state.characters.filter(character => character.id !== id);
    // Set this.state.characters equal to the new characters array
    this.setState({ characters });
  };

  // Map over this.state.characters and render a CharacterCard component for each character object
  render() {
    return (
      <Wrapper>
        <Title>Horror Icons</Title>
        {this.state.characters.map(character => (
          <CharacterCard
            removeCharacter={this.removeCharacter}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            occupation={character.occupation}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

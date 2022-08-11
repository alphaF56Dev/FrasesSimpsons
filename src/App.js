import { useState } from "react";
import CharacterContainer from "./components/CharacterContainer";
import Container from "./components/Container";
import Header from "./components/Header";
import Welcome from "./components/Welcome";

function App() {
  const [characters, setCharacters] = useState(null);
  const reqApi = async () => {
    const api = await fetch("https://simpsons-quotes-api.herokuapp.com/quotes?count=3");
    const frase = await api.json();
    //console.log(frase);
    setCharacters(frase);
  };

  const removeApi = () => {
    setCharacters(null);
  }

  //console.log(characters);

  return (    
      <Container>
        <Header />
        {(!characters) ? 
          <Welcome reqApi={reqApi}/>
        :
          <CharacterContainer characters={characters} removeApi={removeApi} reqApi={reqApi}/>
        }        
      </Container>    
  );
}



export default App;

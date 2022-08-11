import styled from "styled-components";
import Character from "./Character";

export default function CharacterContainer(props){
    const { characters, removeApi, reqApi } = props;
    //console.log(characters);
    return(        
        <>
            <ContainerCharacter>
                {/*<p>Estamos desde CharacterContainer.js</p>*/}
                {characters.map((character, index) => (
                    <Character dataCharacter={character} key={index}/>
                ))}
            </ContainerCharacter>
            <ContainerButton>
                <Button onClick={removeApi}>Regresar</Button>
                <Button onClick={reqApi}>Cambiar frases</Button>
            </ContainerButton>
        </>
    );
}

const ContainerCharacter = styled.div`
    display: flex;
`;

const ContainerButton = styled.div`
    width: 100%;
    text-align: center;
`;

const Button = styled.button`
    width: 250px;
    background-color: #e76f51;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 18px;
    margin-top: 40px;
    transition: all 0.2 ease-out;

    &:hover{
        cursor: pointer;
        background-color: #1c0950;
    }
`;
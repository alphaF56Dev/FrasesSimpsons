import Logo from "../the-simpson.png";
import styled from "styled-components";

export default function Welcome(props){
    const {reqApi} = props;
    return(
        <ContentLogo>
          <WelcomeText>Bienvenido, para ver frase de los simpson has clic en la imagen</WelcomeText>
          <ImageLogo src={Logo} alt="Logo-simpsons" onClick={reqApi}/>
        </ContentLogo>
    );
}

const ImageLogo = styled.img`
  width: 430px;
  height: auto;

  &:hover{
    cursor: pointer;
  }
`;

const ContentLogo = styled.div`
  width: 100%;
  text-align: center;
`;

const WelcomeText = styled.p`
  color: #2a9d8f;
  //text-align: center;
  font-weight: 900;
  padding: 50px 0 10px 0;
  font-size: 25px;
`;
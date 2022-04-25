import { Container } from "./styles";

interface cardInterface {
    image: string;
    name: string;
    id: string;
    imgTy: string;
    type: string;
}

export function Cards({image, name, id, imgTy, type} : cardInterface){
  return (
    <Container type={type}>
        <div className="bgPokemon">
          <div className="imagePoke">

            <img src={image} alt="Fotos do pokemon" />
          </div>
        </div>

        <h1>{name}</h1>
        <h4>#{id}</h4>

        <div className="tyPoke">
          <img src={imgTy} alt="Tipo" />
          <span>{type}</span>
        </div>
        
    </Container>
  );
}

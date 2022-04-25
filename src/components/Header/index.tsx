import { Container } from "./styles";
import imgLogo from '../../assets/logo.png'

export function Header() {
    return (
        <Container>
            <div className="imgLogo">
                <img src={imgLogo} alt="Logo" />
            </div>
        </Container>
    )
}
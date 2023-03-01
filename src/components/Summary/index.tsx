import { Container } from "./styles";
import iconmeImg from '../../assets/Entradas.svg'
import outconmeImg from '../../assets/saida.svg'
import totalImg from '../../assets/Total.svg'

export function Summary(){
    return(
       <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={iconmeImg} alt="Entradas"/>
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outconmeImg} alt="Saídas"/>
                </header>
                <strong>-R$500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total"/>
                </header>
                <strong>R$500,00</strong>
            </div>
       </Container>
    );
}
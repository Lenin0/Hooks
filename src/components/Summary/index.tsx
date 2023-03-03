import { Container } from "./styles";
import iconmeImg from '../../assets/Entradas.svg'
import outconmeImg from '../../assets/saida.svg'
import totalImg from '../../assets/Total.svg'
import { useTransactions } from '../../hooks/useTransactions';

export function Summary(){
    const {transactions} = useTransactions()
    //Isso é para calcular os valores dos depósitos. Crio uma variável, uso o "reduce" para pecorrer por minhas transições e calcular um total. "acc"-> acumuleto
    //Lembrando que o "reduce é para pecorrer por minhas transições e calulcar um total e o ""acc" = acumeleto
    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit'){
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        }else{
            acc.withdraws += transaction.amount
            acc.total -= transaction.amount;
        }

        return acc;

    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })
    
    return(
       <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={iconmeImg} alt="Entradas"/>
                </header>
                <strong>
                    {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outconmeImg} alt="Saídas"/>
                </header>
                <strong>
                - {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(summary.withdraws)}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total"/>
                </header>
                <strong>
                {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(summary.total)}
                </strong>
            </div>
       </Container>
    );
}
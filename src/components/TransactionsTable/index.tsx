import { Container } from "./styles";
import { useEffect } from "react";
import { api } from "../../services/api";


export function TransactionsTable(){
    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    },[]);

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de Webesite</td>
                        <td className="deposito">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2023</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de Webesite</td>
                        <td className="retirada">- R$1.000</td>
                        <td>Casa</td>
                        <td>10/02/2023</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}
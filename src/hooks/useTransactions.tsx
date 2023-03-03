import {createContext, useState, useEffect, ReactNode, useContext} from 'react'
import {api} from '../services/api'

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createAt: string;
  }

//TransactionInput vai herdar todos os campos de Transactions, PORÉM, não vai herdar os campos de "ID" e nem "createAt". isso tudo porque estou Omitindo os dois, com esse "omit".
type TransactionInput = Omit <Transaction, 'id' | 'createAt'>;

//Esse metodo abaixo serve para selecionar os campos que eu quero do meu Transacitons, ao inves de omitir, eu seleciono os campos que eu quero.
//type TransactionInput = Pick<Transaction, 'title' | 'amount'| 'type'| 'category'>;

  interface TransactionsProviderProsp {
    children: ReactNode;

  }

  interface TransactionsContextData {
    //transacitions vai ser um array de transactions
    transactions : Transaction[];
    
    //CreateTransaction é função que vai receber por parametro uma "transaction" que é do tipo TransactionInput e ela vai devolver por padrão void.
    createTransaction: (transaction: TransactionInput) => Promise<void>;
  }

  //E o contexto agora tem o formato "TransactionsContextData"
  const TransactionsContext = createContext<TransactionsContextData>(
    
    //E tenho que forçar uma tipagem no typescript com o "as TransactionsContextData". dizendo que tem o formato que a gente quer.
    {} as TransactionsContextData
);

export function TransactionsProvider( {children}: TransactionsProviderProsp) {
      //Armazena um array de Transaction -> useState<Transaction[]>([]);
  const [transactions, setTransaction] = useState<Transaction[]>([]);
  

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransaction(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
        ...transactionInput,
        //adicionar o "createAt"
        createAt: new Date(),
    })
    const { transaction } = response.data;

    //coloca a nova transação, dentro do estado de transação.
    setTransaction([
        //"...transactions" => copiar todas as informações que já estão lá dentro, e adiciona a nova informação no final. isso é o conceito de imutabilidade. POrque não altera a informação orginal, que é o vetor "transactions". Cria um novo vetor de transação, adicionando a transação que eu quero no final ou no começo.
        ...transactions,
        transaction,
    ]);
  }

  return(
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
        { children }
    </TransactionsContext.Provider>
  )
}

export function useTransactions(){
  const context = useContext(TransactionsContext);
  // Esses hooks usam outros hooks do react. por ex: "useState, useEffct, useContext" e vários outros hooks do react.

  return context;
}
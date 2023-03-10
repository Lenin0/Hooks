import Modal from 'react-modal';
import incomeImg from '../../assets/Entradas.svg'
import outcomeImg from '../../assets/saida.svg'
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg'
import { FormEvent, useState} from 'react';
import { useTransactions } from '../../hooks/useTransactions';

interface NewModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewModalProps){
    const {createTransaction} = useTransactions();
    
    const [title, setTitle ] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

   async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

       await createTransaction({
            title,
            amount,
            category,
            type      
        })
        //Quando o modal fechar, ele vai começar com os valores dos campos iniciais por padrão
        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        //fecha o modal depois de completar o cadastro.
        onRequestClose();
    }

    
    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            
            >
                <button 
                    type='button' 
                    onClick={onRequestClose} 
                    className='react-modal-close'
                    >
                    <img src={closeImg} alt='Fechar modal'/>
                </button>
             
            
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input
                    placeholder='Título'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <input
                    type='number'
                    placeholder='Valor'
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />

            <TransactionTypeContainer>
                <RadioBox
                type='button'
                onClick={() => {setType('deposit');}}
                isActive={type === 'deposit'}
                activeColor="green"
                >
                    <img src={incomeImg} alt="Entrada"/>
                    <span>Entrada</span>
                </RadioBox>

                <RadioBox 
                type='button'
                onClick={() => {setType('withdraw');}}
                isActive={type === 'withdraw'}
                activeColor="red"
                >
                    <img src={outcomeImg} alt="Saída"/>
                    <span>Saída</span>
                </RadioBox>

            </TransactionTypeContainer>

                <input
                    placeholder='Categoria'
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />
                <button type='submit'>
                    cadastrar
                </button>


            </Container>
      </Modal>
    );
}
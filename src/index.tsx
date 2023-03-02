import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import {createServer, Model} from 'miragejs'


createServer({
  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Develope website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createAt: new Date('2023-02-12 21:30:00')
        },
        {
          id: 2,
          title: 'Viagem',
          type: 'withdraw',
          category: 'Viagem',
          amount: 3250,
          createAt: new Date('2023-02-16 15:20:00')
        },
      ],
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })

  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


import { Segment } from 'semantic-ui-react';
import './App.css';
import Home from './views/home/Home';
import Entregador from  './views/Entregador/FormEntregador';
import Produto from './views/produto/FormProduto';

function App() {

  return (

    <div className="App">
      
      < Produto />

      <div style={{marginTop: '6%'}}>
        <Segment vertical color='grey' size='tiny' textAlign='center'>
          &copy; 2023 - Projeto WEB III - IFPE Jaboatão dos Guararapes
        </Segment>
      </div>

    </div>
  );
}

export default App;


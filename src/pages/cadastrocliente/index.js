import './index.scss';
import Menu from '../../components/menu';
import { Link } from 'react-router-dom';

function Client() {
  return (
    <div className="CadastroClient">
      <Menu  selecionado='cliente'/>
      <section className='area-administrativa'>
        <div className='area-administrativa-cabe'>
          <p>Olá, que bom que você voltou!</p>

          <section> A </section>
        </div>

        <div className='secao2'>
          <h6>ÁREA ADMINISTRATIVA</h6>

          <h1>Controle de Clientes</h1>

          <section className='secao2-novocliente'>
            <h1>Novo Cliente</h1>

            <div className='secao2-inputs'>
              <b>Nome</b>
              <input type='text' placeholder='Adrian'/>
            </div>

            <div className='secao2-inputs'>
              <b>Email</b>
              <input type='email' placeholder='adrian@gmail.com'/>
            </div>

            <div className='secao2-inputs'>
              <b>Telefone</b>
              <input type='text' placeholder='(11) 95721-5544'/>
            </div>

            <div className='secao2-inputs'>
              <b>CPF</b>
              <input type='number' placeholder='586.458.756.08'/>
            </div>

            <div className='secao2-inputs'>
              <b>CNH</b>
              <input type='number' placeholder='345345245234'/>
            </div>

            <button>Salvar</button>
          </section>

            <section className='secao2-lista'>
              <h1>Lista de cliente</h1>

              <div className='secao2-inputs'>
                <b>Nome</b>

                <section className='inputcomlupa'>
                  <input type='text' placeholder='Adrian'/> 
                  <img src='/assets/images/lupa.svg'/>
                </section>
              </div>

              <div className='secao2-lista-titulos'>
                <b className='secao2-lista-Nome'>Nome</b>

                <b>CPF</b>

                <b>telefone</b>

                <b>Email</b>
              </div>

            </section>

            
        </div>
        
      </section>
    </div>
  );
}

export default Client;

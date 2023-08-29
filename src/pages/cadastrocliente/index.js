import './index.scss';
import Menu from '../../components/menu';
import { Link } from 'react-router-dom';

function Client() {
  return (
    <div className="CadastroClient">
          <section className='menu'>
            <div className='menu-logonome'>
              <img src='/assets/images/logo.svg'/>
              <h1>Elite<span>Wheels</span></h1>
            </div>

            <div className='menu-Links'>
              <Link><img src='/assets/images/'/> Home</Link>
              <Link><img src='/assets/images/'/> Clientes</Link>
              <Link><img src='/assets/images/'/> Veiculos</Link>
              <Link><img src='/assets/images/'/> Locação</Link>
            </div>
          </section>

      <section className='area-administrativa'>
        <div>
          <p>Olá, que bom que você voltou!</p>

          <section> A </section>
        </div>
      </section>
    </div>
  );
}

export default Client;

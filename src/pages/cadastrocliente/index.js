import './index.scss';
import Menu from '../../components/menu';
import { Link } from 'react-router-dom';

function Client() {
  return (
    <div className="CadastroClient">
      <Menu/>
      <section className='area-administrativa'>
        <div className='area-administrativa-cabe'>
          <p>Olá, que bom que você voltou!</p>

          <section> A </section>
        </div>
      </section>
    </div>
  );
}

export default Client;

import './index.scss';
import { Link } from 'react-router-dom';

export default function Menu(){

     return(
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

     )
}
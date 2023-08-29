import './index.scss';
import { Link } from 'react-router-dom';

export default function Menu(props){

    function selecionar(menu){
      if (menu == props.selecionado) return 'selecionado'
      else return '';
    }
    

     return(
        <section className='menu'>
            <div className='menu-logonome'>
              <img src='/assets/images/logo.svg'/>
              <h1>Elite<span>Wheels</span></h1>
            </div>

            <div className='menu-Links'>
              <Link className={selecionar('home')}><img src='/assets/images/casa.svg'/> Home</Link>
              <Link to='/' className={selecionar('cliente')}><img src='/assets/images/pessoinha.svg'/> Clientes</Link>
              <Link to='/addcarros' className={selecionar('carro')}><img src='/assets/images/carro.svg'/> Veiculos</Link>
              <Link className={selecionar('locação')}><img src='/assets/images/ic_outline-key.png'/> Locação</Link>
            </div>

        </section>

     )
}
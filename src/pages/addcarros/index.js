import './index.scss';
import Menu from '../../components/menu';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Veiculos() {
  const[tipos, setTipos] = useState([]);

  const[Modelo, setModelo] = useState('');
  const[Marca, setMarca] = useState('');
  const[ano, setAno] = useState(0);
  const[placa, setPlaca] = useState(0);

  const[erro, setErro] = useState();

  async function Salvar(){
    
    try{
      let veiculos ={
        idtipoveiculo: tipos,
        modelo: Modelo,
        marca: Marca,
        ano: ano,
        placa: placa
      }

      let r = await axios.post('http://localhost:5000/veiculo', veiculos)
    }
    catch{

    }
  }

  async function ListarTipos(){
    let r = await axios.get('http://localhost:5000/tipo')
    setTipos(r.data);
  }


  useEffect(() => {
    ListarTipos()
  }, [])


  return (
    <div className="CadastroVeiculo">
      <Menu selecionado='carro' />
      <section className='area-administrativa'>
        <div className='area-administrativa-cabe'>
          <p>Olá, que bom que você voltou!</p>

          <section> A </section>
        </div>

        <div className='secao2'>
          <h6>ÁREA ADMINISTRATIVA</h6>

          <h1>Controle de Veiculos</h1>

          <section className='secao2-novoveiculo'>
            <h1>Novo Veiculo</h1>

            <div className='secao2-inputs'>
              <b>Tipo</b>
              <select>
                <option>Selecione</option>
                {tipos.map(item => 
                  <option value={item.id}>{item.nm_tipo_carro}</option>
                )}
              </select>
            </div>

            <div className='secao2-inputs'>
              <b>Modelo</b>
              <input type='text' placeholder='Civc type r'/>
            </div>

            <div className='secao2-inputs'>
              <b>Marca</b>
              <input type='text' placeholder='Honda'/>
            </div>

            <div className='secao2-inputs'>
              <b>Ano</b>
              <input type='number' placeholder='2023'/>
            </div>

            <div className='secao2-inputs'>
              <b>Placa</b>
              <input type='number' placeholder='abc-123'/>
            </div>

            <button>Salvar</button>
          </section>

            <section className='secao2-lista'>
              <h1>Lista de cliente</h1>

              <div className='secao2-inputs'>
                <b>Modelo, marca, placa</b>

                <section className='inputcomlupa'>
                  <input type='text' placeholder='Civic'/> 
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

export default Veiculos;

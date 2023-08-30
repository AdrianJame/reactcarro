import './index.scss';
import Menu from '../../components/menu';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Veiculos() {
  const[tipos, setTipos] = useState([]);

  const[modelo, setModelo] = useState('');
  const[marca, setMarca] = useState('');
  const[ano, setAno] = useState('');
  const[placa, setPlaca] = useState('');
  const[tiposelecionado, setTiposelecionado] = useState('');

  const[erro, setErro] = useState('');

  async function Salvar(){
    
    try{
      let veiculos ={
        tipo: tiposelecionado,
        nome: modelo,
        fabricante: marca,
        ano: ano,
        placa: placa
      }

      let r = await axios.post('http://localhost:5000/veiculo', veiculos)


      setErro('Veiculo cadastrado')
    }
    catch(err){
      setErro(err.response.data.erro)
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
              <select value={tiposelecionado}  onChange={e => setTiposelecionado(e.target.value)}>
                <option>Selecione</option>
                {tipos.map(item => 
                  <option value={item.id_tipo_carro}>{item.nm_tipo_carro}</option>
                )}
              </select>
            </div>

            <div className='secao2-inputs'>
              <b>Modelo</b>
              <input type='text' placeholder='Civc type r' value={modelo} onChange={e => setModelo(e.target.value)}/>
            </div>

            <div className='secao2-inputs'>
              <b>Marca</b>
              <input type='text' placeholder='Honda' value={marca} onChange={e => setMarca(e.target.value)}/>
            </div>

            <div className='secao2-inputs'>
              <b>Ano</b>
              <input type='number' placeholder='2023' value={ano} onChange={e => setAno(e.target.value)}/>
            </div>

            <div className='secao2-inputs'>
              <b>Placa</b>
              <input type='text' placeholder='abc-123' value={placa} onChange={e => setPlaca(e.target.value)}/>
            </div>

            <div>
              <p>{erro}</p>
            </div>

            <button onClick={Salvar}>Salvar</button>
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

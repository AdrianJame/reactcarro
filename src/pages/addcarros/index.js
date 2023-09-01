import './index.scss';
import Menu from '../../components/menu';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function Veiculos() {
  const[tipos, setTipos] = useState([]);
  const[buscar, setBuscar] = useState([]);

  const[modelo, setModelo] = useState('');
  const[marca, setMarca] = useState('');
  const[ano, setAno] = useState('');
  const[placa, setPlaca] = useState('');
  const[tiposelecionado, setTiposelecionado] = useState('');

  const[id, setId] = useState(0);


  const[erro, setErro] = useState('');

  function alterarVeiculo(item) {
    setModelo(item.modelo);
    setPlaca(item.placa);
    setMarca(item.marca);
    setAno(item.ano);
    setTiposelecionado(item.idTipoVeiculo);
    setId(item.id);
  }

  async function Salvar(){
    
    try{
      let veiculos ={
        tipo: tiposelecionado,
        nome: modelo,
        fabricante: marca,
        ano: ano,
        placa: placa
      }

      if(id == 0){
        let r = await axios.post('http://localhost:5000/veiculo', veiculos)
        setErro('Veiculo cadastrado')
      }
      else{
        let r = await axios.post('http://localhost:5000/veiculo', veiculos)
        setErro('Veiculo cadastrado')
      }

      Buscarveiculos()
      Limpar()

    }
    catch(err){
      setErro(err.response.data.erro)
    }
  }

  async function Limpar(){
    setModelo('')
    setMarca('')
    setAno('')
    setPlaca('')
    setTiposelecionado(0)
    setId(0)
  }

  async function Deletar(id){
    confirmAlert({
      title: 'VEÍCULOS',
      message: 'Tem certeza que deseja remover?',
      buttons: [
        {
          label: 'Sim',
          onClick: async () => {
            let r = await axios.delete('http://localhost:5000/veiculo/' + id);
            alert('Veículo foi removido com sucesso');
            Buscarveiculos();
          }
        },
        {
          label: 'Não'
        }
      ]
    });
    
  } 


  async function ListarTipos(){
    let r = await axios.get('http://localhost:5000/tipo')
    setTipos(r.data);
  }


  useEffect(() => {
    ListarTipos()
  }, [])



  async function Buscarveiculos(){
    let r = await axios.get('http://localhost:5000/veiculo/tudo')
    setBuscar(r.data);
  }

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

            <button onClick={Salvar}>
                  {id == 0 ? 'Salvar' : 'Alterar'}
              </button>
          </section>

            <section className='secao2-lista'>
              <h1>Lista de cliente</h1>

              <div className='secao2-inputs'>
                <b>Modelo, marca, placa</b>

                <section className='inputcomlupa'>
                  <input type='text' placeholder='Civic'/> 
                  <button onClick={Buscarveiculos} className='inputcomlupa-button'>
                    <img src='/assets/images/lupa.svg'/>
                  </button>
                </section>
              </div>

              <div className='secao2-lista-titulos'>
                <b className='secao2-lista-Nome'>Modelo</b>

                <b>Marca</b>

                <b>Ano</b>

                <b>Tipo</b>

                <b>Placa</b>
              </div>

                  {buscar.map(item =>
                    <div className='buscarveiculo'>
                      <p className='p_nome'>{item.nm_modelo}</p>
                      <p>{item.nm_fabricante}</p>
                      <p>{item.nm_tipo_carro}</p>
                      <p>{item.nr_ano}</p>
                      <p>{item.ds_placa}</p>
                      <img onClick={() => alterarVeiculo(item)} src='/assets/images/editar.png'/>
                      <img onClick={() => Deletar(item.id)} src='/assets/images/lixeira.png'/>
                    </div>
                  )}
            </section>

            
        </div>
        
      </section>
    </div>
  );
}

export default Veiculos;

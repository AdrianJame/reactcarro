import './index.scss';
import Menu from '../../components/menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';



function Client() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [cnh, setCnh] = useState('');
  const [id, setId] = useState(0);
  const [erro, setErro] = useState('');
  const [buscar, setBuscar]= useState([])

  async function salvar(){
    try{
      let cliente = {
        nome: nome,
        email: email,
        telefone: telefone,
        cpf: cpf,
        cnh: cnh
      }

      if(id == 0){
        let r = await axios.post('http://localhost:5000/cliente', cliente);
        setErro('Cliente adicionado')
      }

      else{
        let r = await axios.put('http://localhost:5000/cliente/' + id, cliente)
        setErro('Cliente alterado')
      }

      Buscarcliente();
      Limpar()


    }

    catch(err){
      setErro(err.response.data.erro)
    }
  }

  async function Buscarcliente(){
    let r = await axios.get('http://localhost:5000/cliente');
    setBuscar(r.data);
  }

  async function alterarCliente(item){
      setNome(item.nm_cliente);
      setEmail(item.ds_email);
      setTelefone(item.ds_telefone);
      setCpf(item.ds_cpf);
      setCnh(item.ds_cnh)
      setId(item.id_cliente)
  }

  async function Limpar (){
    setNome('')
    setEmail('')
    setTelefone('')
    setCpf('')
    setCnh('')
    setId(0)
  }

  async function deletar(id){
    confirmAlert({
      title: 'VEÍCULOS',
      message: 'Tem certeza que deseja remover?',
      buttons: [
        {
          label: 'Sim',
          onClick: async () => {
            let r = await axios.delete('http://localhost:5000/cliente/' + id);
            alert('Cliente foi removido com sucesso');
            Buscarcliente();
          }
        },
        {
          label: 'Não'
        }
      ]
    });
  }



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
              <input type='text' placeholder='Adrian' value={nome} onChange={e => setNome(e.target.value)}/>
            </div>

            <div className='secao2-inputs'>
              <b>Email</b>
              <input type='email' placeholder='adrian@gmail.com' value={email} onChange={e => setEmail(e.target.value)}/>
            </div>

            <div className='secao2-inputs'>
              <b>Telefone</b>
              <input type='text' placeholder='(11) 95721-5544' value={telefone} onChange={e => setTelefone(e.target.value)}/>
            </div>

            <div className='secao2-inputs'>
              <b>CPF</b>
              <input type='number' placeholder='586.458.756.08' value={cpf} onChange={e => setCpf(e.target.value)}/>
            </div>

            <div className='secao2-inputs'>
              <b>CNH</b>
              <input type='number' placeholder='345345245234' value={cnh} onChange={e => setCnh(e.target.value)}/>
            </div>

            <div>
              <p>{erro}</p>
            </div>

            <button onClick={salvar}>
              {id == 0 ? 'Salvar' : 'Alterar'}
              </button>
          </section>

            <section className='secao2-lista'>
              <h1>Lista de cliente</h1>

              <div className='secao2-inputs'>
                <b>Nome</b>

                <section className='inputcomlupa'>
                  <input type='text' placeholder='Adrian'/> 
                  <img onClick={Buscarcliente} src='/assets/images/lupa.svg'/>
                </section>
              </div>

              <div className='secao2-lista-titulos'>
                <b className='secao2-lista-Nome'>Nome</b>

                <b>EMAIL</b>

                <b>CPF</b>

                <b>TELEFONE</b>

                <b>CNH</b>
              </div>
              {buscar.map(item =>
                    <div className='buscarveiculo'>
                      <p className='p_nome'>{item.nm_cliente}</p>
                      <p>{item.ds_email}</p>
                      
                      <p>{item.ds_cpf}</p>
                      <p className='p_telefone'>{item.ds_telefone}</p>
                      <p>{item.ds_cnh}</p>
                      <img onClick={()=> alterarCliente (item)} src='/assets/images/editar.png'/>
                      <img onClick={()=> deletar (item.id_cliente)}  src='/assets/images/lixeira.png'/>
                    </div>
                  )}

              

            </section>

            
        </div>
        
      </section>
    </div>
  );
}

export default Client;

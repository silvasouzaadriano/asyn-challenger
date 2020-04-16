import React, {useState, useEffect} from "react";
import { toast, ToastContainer } from 'react-toastify';

import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

import api from './api';

import arrowIcon from './assets/arrow_icon.png';



export default function App() {
  const [valor, setValor] = useState(0);
  const [fontColor, setFontColor] = useState('#2F80ED');
  const [fontStyle, setFontStyle] = useState('italic');
  const [fontWeight, setFontWeight] = useState('normal');
  const [postalCode, setPostalCode] = useState('');
  const [address, setAddress] = useState('');
  const [stateCode, setStateCode] = useState('');
  const [loadPostalCode, setLoadPostalCode] = useState('');
  

  useEffect(() => {
    setFontColor(fontColor);
    setFontStyle(fontStyle);
    setFontWeight(fontWeight)
  }, [fontColor, fontStyle, fontWeight])

  function increment(valor) {
    valor = valor + 1;
    setValor(valor);

    if (valor % 2 === 0) {
      setStyle('#2F80ED','italic','normal');
    } else {
      setStyle('#EB5757','normal','bold');
    }
  }

  function decrement(valor) {
    if (valor > 0) valor = valor - 1;
    setValor(valor);

    if (valor > 0) {
      if (valor % 2 === 0) {
        setStyle('#2F80ED','italic','normal');
      } else {
        setStyle('#EB5757','normal','bold');
      }
    } else {
      setStyle('#2F80ED','italic','normal');
    }

  }

  function setStyle(fontColor, fontStyle, fontWeight) {
    setFontColor(fontColor);
    setFontStyle(fontStyle);
    setFontWeight(fontWeight)      
  }

  function handleInputChange(e) {
    setLoadPostalCode(e.target.value);
  };

  async function handleSubmit(data) {
    try {
      if(data.cep) {
        const response = await api.get(`/${data.cep}/json/`);

        setPostalCode(response.data.cep);
        setAddress(response.data.logradouro);
        setStateCode(response.data.uf);
        setLoadPostalCode('');

      } else {    

        setPostalCode();
        setAddress();
        setStateCode();
        setLoadPostalCode('');
      }
    } catch (e) {
      toast.error('Por favor informe um CEP válido. Exemplo: 88058500 ou 88058-500');
      setLoadPostalCode('');
    }
  }

  return (
    <div className="App">
      <Container>
        <ToastContainer autoClose={3000} />
        <img src="https://computerworld.com.br/wp-content/uploads/2020/01/as-linguagens-de-programacao-2020.jpg" alt="imagem" />
        <p>Contador</p>
        <div className="valor"><div style={{color: fontColor, FontStyle: fontStyle, fontWeight: fontWeight}}>{valor}</div></div>
        <div className="botoes">
          <div className="ladoEsquerdo"></div>
          <div className="adicionar">
            <button onClick={() => increment(valor)}>Adicionar</button></div>
          <div className="remover"><button onClick={() => decrement(valor)}>Remover</button></div>
          <div className="ladoDireito"></div>
        </div>
        <Form onSubmit={handleSubmit}>
          <Input name="cep"
                 placeholder="Digite o cep"
                 value={loadPostalCode}
                 onChange={handleInputChange}
          />
          <button type="submit"><img src={arrowIcon} /><span>ENVIAR</span></button>
          
        </Form>
        <div className="dados">
          <label className="cep">CEP: <span>{postalCode}</span></label>
          <label className="logradouro">Logradouro: <span>{address}</span></label>
          <label className="uf">UF:  <span>{stateCode}</span></label>
        </div>
      </ Container>
    </div>
  );
}


/* layout proposto: https://www.figma.com/file/XMWLGAFZAg1ujcosnwyJwU/Untitled?node-id=0%3A1 */

// 1ª fase
// criar um contador inicializado em 0 e botões de incremento e decremento de valor

// 2ª fase
// achar uma imagem no google a sua escolha, adicionar a tela (logo acima ) e deixa-la com as bordas arredondadas
// sugerido: https://computerworld.com.br/wp-content/uploads/2020/01/as-linguagens-de-programacao-2020.jpg

// 3ª fase
// - Quando o número for impar, deve ficar vermelho e em negrito
// - Quando for par, deve ficar azul e itálico

// 4ª fase
// - Criar um input na tela que recebe uma string e um botão que envia o cep digitado no input e mostra o CEP, o logradouro e estado
// - viacep.com.br/ws/01001000/json/

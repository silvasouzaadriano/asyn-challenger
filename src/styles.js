import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';



export const Container = styled.div`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  img {
    margin-bottom: 30px;
    width: 100px;
    height: 100px;
    left: 110px;
    top: 60px;
    background: url(image.png);
    border-radius: 50px;
  }

  p {
    width: 83px;
    height: 23px;
    left: 119px;
    top: 130px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;

    color: #000000;
  }

  .valor {
    display: flex;
    align-items: center;
    width: 40px;
    height: 40px;
    left: 138px;
    top: 167px;
    background: #C4C4C4;
    border-radius: 20px;

    div {
      display: flex;
      align-items: center;
      width: 11px;
      height: 23px;
      margin: auto;

      font-family: Roboto;
      font-style: italic;
      font-weight: normal;
      font-size: 20px;
      line-height: 23px;
      color: #2F80ED;

    }
  }

  .botoes {
    display: flex;
    align-items: center;
    margin-top: 30px;

    .ladoEsquerdo {
      width: 10px;
      height: 100px;
      left: 15px;
      top: 238px;
      background: #2F80ED;
    }

    .adicionar {

      button {
        width: 100px;
        height: 100px;
        left: 28px;
        top: 238px;
        background: #E0E0E0;
        border-radius: 0px 5px 5px 0px;
        margin-right: 50px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
      }

      div {
        display: flex;
        margin-top: -65px;
        margin-left: 57px;
        width: 24px;
        height: 21px;
        left: 96px;
        top: 244px;
        background: #2F80ED;
        border: 1px solid #2F80ED;
        border-radius: 10px 20px;
      }      
    } 

    .ladoDireito {
      width: 10px;
      height: 100px;
      left: 294px;
      top: 238px;
      background: #EB5757;
      border-radius: 0px;
    }

    .remover {

      button {
        width: 100px;
        height: 100px;
        left: 191px;
        top: 238px;
        background: #E0E0E0;
        border-radius: 5px 0px 0px 5px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
      }

      div {
        display: flex;
        margin-top: -65px;
        margin-left: 5px;
        width: 24px;
        height: 21px;
        left: 96px;
        top: 244px;
        background: #EB5757;
        border: 1px solid #EB5757;
        border-radius: 10px 20px;
      }

    }

  }

  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 30px;
    input {
      background: #E5E5E5;
      width: 84px;
      height: 19px;
      left: 20px;
      top: 396px;
      margin-right: 20px;

      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      /* identical to box height */
      color: #000000;

      &::placeholder {
        color: #000000;
      }
    }
    
    

    button {
      display: flex;
      width: 95px;
      height: 40px;
      left: 221px;
      top: 380px;
      /* Purple 2 */
      background: #BB6BD9;
      border-radius: 30px;

      img {
        width: 15px;
        height: 15px;
        left: 236px;
        top: 392px;
        margin-top: 10px;
        background: #9B51E0;
        border-radius: 50px;
        
      }

      span {
        width: 46px;
        height: 15px;
        left: 261px;
        top: 393px;
        margin-top: 10px;
        margin-left: 10px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 15px;
        text-transform: uppercase;
        color: #F2F2F2;
      }
    }
    
  }

  .dados {
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-top: 30px;
    margin-right: 180px;

    .cep {
      height: 23px;
      left: 42px;
      top: 456px;

      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 23px;

      color: #000000;
    }

    .logradouro {
      height: 23px;
      left: 42px;
      top: 489px;

      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 23px;

      color: #000000;
    }

    .uf {
      height: 23px;
      left: 42px;
      top: 522px;

      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 23px;

      color: #000000;
    }
  }
`;




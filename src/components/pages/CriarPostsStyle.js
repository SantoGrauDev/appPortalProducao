import styled from "styled-components";

export const Container = styled.section`
  max-width: 500px;
  max-height: 550px;
  margin: 2% auto auto 30%;
  box-shadow: 0 0 1em #6c757d;
  background-color: #fff;
  border-radius: 10px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ConteudoTitulo = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const Titulo = styled.h1`
  color: #3e3e3e;
  font-size: 23px;
`;

export const AlertSuccess = styled.p`
  background-color: #d1e7dd;
  color: #0f5132;
  margin: 20px 0;
  border: 1px solid #badbcc;
  border-radius: 4px;
  padding: 7px;
`;

export const AlertDanger = styled.p`
  background-color: #f8d7da;
  color: #842029;
  margin: 20px 0;
  border: 1px solid #f5c2c7;
  border-radius: 4px;
  padding: 7px;
`;

export const ConteudoForm = styled.section`
  max-width: 960px;
  padding: 10px 30px 30px;
`;

export const Form = styled.form`
  margin: 0px auto;
`;

export const Label = styled.label`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 16px;
  resize: vertical;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 16px;
  resize: vertical;
`;

export const ButtonSuccess = styled.button`
  background-color: #fff;
  color: #198754;
  padding: 8px 12px;
  border: 1px solid #198754;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  :hover {
    background-color: #157347;
    color: #fff;
  }
`;

export const ButtonPost = styled.button`
  background-color: #fff;
  color: #198754;
  padding: 8px 12px;
  border: 1px solid #9b59b6;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  :hover {
    background-color: #9b59b6;
    color: #fff;
  }
`;

import styled from 'styled-components'

export const HomeStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const FormHome = styled.form`
  margin-top: 15px;

  width: 100%;
  max-width: 400px;

  display: flex;

  input {
    flex: 1;
    height: 40px;
    padding: 0 20px;

    background-color: #ededed;
    color: #444;

    border-radius: 4px;
    font-size: 20px;

    border: ${(props) => (props.withError ? '2px solid #C4314B' : 0)};
  }

  button {
    height: 40px;
    padding: 0 20px;
    margin-left: 10px;

    background-color: #2c974b;
    color: #ededed;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;

    border: 0;
    border-radius: 4px;

    transition: 0.2s all ease-in;
    cursor: pointer;

    &:hover {
      background-color: #79bd8c;
    }
  }
`

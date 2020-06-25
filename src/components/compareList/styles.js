import styled from 'styled-components'

export const CompareListStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 70vw;

  margin-top: 50px;

  .emptyRepository {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 10% 0;
    color: #939292;

    .iconEmpty {
      font-size: 48px;
    }
  }
`
export const Repository = styled.div`
  margin-top: 30px;
  width: 250px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #f5f5f5;
  border-radius: 4px;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .imgLogo {
      width: 70px;
    }

    strong {
      font-size: 22px;
      margin-top: 10px;
    }

    small {
      font-size: 18px;
      color: #393737;
    }
  }

  ul {
    list-style: none;
    li {
      &:not(small) {
        font-weight: bold;
      }

      padding: 12px 20px;

      small {
        font-size: 14px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(2n -1) {
        background-color: #c9c8c8;
      }
    }
  }

  footer {
    padding: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    button {
      padding: 5px 20px;

      border: 0;
      border-radius: 3px;
      color: #f5f5f5;
      font-weight: bold;
      letter-spacing: 1px;
      text-transform: uppercase;

      cursor: pointer;
      transition: 0.2s all linear;

      &:hover {
        transform: scale(1.01);
        opacity: 0.8;
      }
    }

    .removeBtn {
      background-color: #c4314b;
    }
    .updateBtn {
      background-color: #2c974b;
    }
  }
`

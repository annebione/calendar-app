import styled from 'styled-components'

export const HeaderMonth = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Helvetica', sans-serif;
  font-weight: 500;
`
export const Row = styled.div`
  flex: 3;

  &:nth-child(2) {
    text-align: center;
  }

  &:last-child {
    text-align: right;
  }

  h1 {
    font-size: 40px;
  }

  .fa {
    font-size: 55px;
    color: #437C90;
    opacity: 0.5;

    &:hover {
      color: #456990;
    }
  }
`
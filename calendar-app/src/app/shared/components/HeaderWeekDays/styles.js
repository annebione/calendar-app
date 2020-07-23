import styled from 'styled-components'

export const WeekDaysHeader = styled.header`
  font-family: 'Helvetica',sans-serif;
  font-weight: 500;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
  background-color: #437C90;
  color: #fff;
  border-bottom: 2px solid #456990;
  color: rgba(255, 255, 255, 0.8);
  padding: 5px 0;

  strong {
    flex: 1 0 14%;
    max-width: calc(100% / 7);
    text-align: center;
  }
`
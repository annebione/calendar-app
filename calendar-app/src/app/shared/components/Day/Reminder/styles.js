import styled from 'styled-components'

export const Tools = styled.div`
      position: absolute;
      top: 0;
      right: 0;
      visibility: hidden;
      background: rgba(0, 0, 0, 0.3);
      padding: 5px 3px;
      display: flex;
      justify-content: flex-end;
      z-index: 1;
  
      button {
        float: right;
        &.fa {
            color: #fff;
            font-size: 14px;
        }
      }
    `

export const Reminder = styled.article`
    color: #fff;
    position: relative;
    font-size: 12px;
    font-family: 'Helvetica', sans-serif;
    padding: 3px 5px;
    margin-bottom: 3px;
  
    &:hover {
      ${Tools} {
        visibility: visible;
      }
    }

    strong {
      display: block;
      word-wrap: break-word;
    }
`
  


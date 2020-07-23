import styled, { css } from 'styled-components'

const dayWidth = 12.6;


function createCSSForDifferentDays() {
    let styles = '';
  
    for (let i = 0; i < 8; i++) {
       styles += `
        &.first-index-${i} {
            margin-left: ${dayWidth * i}%;
         }
       `
    }
  
    return css`${styles}`;
  }
  

export const Day = styled.article`
    position: relative;
    flex: 1 0 ${dayWidth}%;
    max-width: 12.6%;
    min-height: 130px;
    padding: 10px;
    border-left: 1px solid #456990;
    border-bottom: 1px solid #456990;
    transition: 300ms background-color;
    font-family: 'Helvetica', sans-serif;
    ${createCSSForDifferentDays()}

    &:hover {
      background-color: #1313;
    }
`

export const NewReminderBtn = styled.button`
    cursor: pointer;
    margin-bottom: 10px;
    &::hover {
        opacity: 1
    }
`
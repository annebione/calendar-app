import styled from 'styled-components'

export const TextArea = styled.textarea`
  font-family: inherit;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  border: 2px solid #333;
  border-top: 0;
  border-left: 0;
  border-radius: 0; 
  padding: 3px 5px;
  margin: 0;
  outline: 0;
  
    &::placeholder {
      color: #fff;
    }
    
  
    &.color-picker {
      display: block;
      margin-top: 3px;
    }

    &.rc-time-picker-panel {
      font-family: Arial, Helvetica, sans-serif;
    }
`

export const SubmitBtn = styled.button`
  font-family: inherit;
  font-size: 13px;
  display: inline-block;
  padding: 5px 10px;
  background: rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid #333;
  border-right: 1px solid #333;
  color: #fff;
`

export const CancelBtn = styled.button`
  font-family: inherit;
  font-size: 13px;
  display: inline-block;
  padding: 5px 10px;
  background: rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid #333;
  border-right: 1px solid #333;
  color: #fff;
  margin-left: 5px;
`
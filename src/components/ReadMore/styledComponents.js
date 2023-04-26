import styled from 'styled-components'

export const ReadMoreCompleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  padding 20px;
  text-align: center;
`

export const ReactHooksHeading = styled.h1`
  font-family: 'Roboto';
`

export const MainParagraph = styled.p`
  margin: 20px;
`

export const MainHooksImage = styled.img`
  width: 100%;
  border-radius: 15px;
  @media all and (min-width: 768px) {
    width: 40%;
  }
`
export const ReadMoreButton = styled.button`
  background-color: #1f81ff;
  width: 150px;
  height: 50px;
  color: white;
  border: 0px;
  font-size: 20px;
  border-radius: 15px;
  cursor: pointer;
`

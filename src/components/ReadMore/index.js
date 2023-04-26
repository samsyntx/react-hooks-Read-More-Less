import {useState} from 'react'

import {
  ReadMoreCompleteContainer,
  ReactHooksHeading,
  MainParagraph,
  MainHooksImage,
  ReadMoreButton,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props

  const [isHideText, showText] = useState(true)

  const clickToChange = () => {
    showText(prevState => !prevState)
  }

  const TextToShow =
    isHideText === true
      ? reactHooksDescription.slice(0, 170)
      : reactHooksDescription

  return (
    <ReadMoreCompleteContainer>
      <ReactHooksHeading>React Hooks</ReactHooksHeading>
      <MainParagraph>Hooks are a new addition to React</MainParagraph>
      <MainHooksImage
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <MainParagraph>{TextToShow}</MainParagraph>
      <ReadMoreButton onClick={clickToChange} type="button">
        {isHideText ? 'Read More' : 'Read Less'}
      </ReadMoreButton>
    </ReadMoreCompleteContainer>
  )
}

export default ReadMore

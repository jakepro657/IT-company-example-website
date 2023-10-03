import styled from "styled-components";

interface PropsContentBlock {
    width: number;
}

interface FirstContainerProps {
    image: string;
}

const ContentBlock = styled.div<PropsContentBlock>`

  position: absolute;
  height: 100%;
  background-color: white;
  width: ${props => props.width}%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
const FirstContainer = styled.div<FirstContainerProps>`
  position: relative;

  &:before {
    border-radius: 64px 16px 64px 16px;
    content: "";
    background: rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
  }
  &:hover {
    transition: 0.2s ease-in-out;
    width: 30vw;
    button {
      display: flex;
      transition: 0.4s ease-in-out;
      @keyframes fadeInUp {
        0% {
          opacity: 0;
          transform: translateY(5px);
        }
        100% {
          opacity: 1;
          transform: translateY(0px);
        }
      }

      animation: fadeInUp 0.4s ease-in-out;
    }
  }

  transition: 0.4s ease-in-out;

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 24vw;
  height: 64vh;
  border: solid gray 2px;
  border-radius: 64px 16px 64px 16px;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

`
const FirstContainerWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContentTitle = styled.div`
  user-select: none;
  padding: 8px;
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
`
const ContentSubtitle = styled.div`
  user-select: none;
  color: gray;
  padding: 8px;
  width: 100%;
  text-align: center;
  font-size: 1.25rem;
`

const Title = styled.div`
  user-select: none;
  font-size: 3rem;
  color: white;
  align-self: center;
  z-index: 10;
`
const Subtitle = styled.div`
  user-select: none;
  font-size: 1.5rem;
  color: white;
  align-self: center;
  z-index: 10;
`

const StyledButton = styled.button`


  color: white;
  border: solid white;
  padding: 8px 64px 8px 64px;
  border-radius: 32px;
  bottom: 12vh;
  position: absolute;
  display: none;
  align-self: center;
  z-index: 10;

`

export default function FirstBlock() {
    return (
        <ContentBlock width={100}>
            <TitleContainer>
                <ContentTitle>더 나은 기술로, 더 나은 세상으로</ContentTitle>
                <ContentSubtitle>혁신적인 기술을 바탕으로 새로운 시작에 향합니다</ContentSubtitle>
            </TitleContainer>
            <FirstContainerWrap>
                <FirstContainer image={"/ai.jpg"}>
                    <Title>
                        AI모델 개발
                    </Title>
                    <Subtitle>
                        AI Model Dev
                    </Subtitle>
                    <StyledButton>더보기</StyledButton>
                </FirstContainer>
                <FirstContainer image={"/cloud.jpg"}>
                    <Title>
                        클라우드 개발
                    </Title>
                    <Subtitle>
                        Cloud Dev
                    </Subtitle>
                    <StyledButton>더보기</StyledButton>
                </FirstContainer>
                <FirstContainer image={"/light.jpg"}>
                    <Title>
                        전문도급
                    </Title>
                    <Subtitle>
                        Professional subcontract
                    </Subtitle>
                    <StyledButton>더보기</StyledButton>
                </FirstContainer>
            </FirstContainerWrap>
        </ContentBlock>
    )
}

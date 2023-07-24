import styled from "styled-components";

const ContentBlock = styled.div`
  font-family: KimjungchulGothic-Bold;

  &:before {
    content: "";
    background: rgba(0, 0, 0, 0.64);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -2;
  }
  user-select: none;
  position: absolute;
  height: 100%;
  left: ${props => props.full ? 0 : 50}%;
  transform: ${props => props.full ? "translateX(0)" : "translateX(-50%)"};
  width: ${props => props.width}%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
`


const FirstContainer = styled.div`

  //&:hover {
  //  transition: 0.2s ease-in-out;
  //  width: 28vw;
  //  height: 68vh;
  //  button {
  //    display: flex;
  //    transition: 0.2s ease-in-out;
  //    @keyframes fadeInUp {
  //      0% {
  //        opacity: 0;
  //        transform: translateY(10px);
  //      }
  //      100% {
  //        opacity: 1;
  //        transform: translateY(0);
  //      }
  //    }
  //
  //    animation: fadeInUp 0.5s ease-in-out;
  //  }
  //}
  
  //transition: 0.4s ease-in-out;
  position: relative;

  &:before {
    border-radius: 16px 64px 16px 64px;
    content: "";
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  margin-bottom: 16px;
  width: 32vh;
  height: 32vh;
  padding-bottom: 24px;
  border: white solid 6px;
  color: white;
  border-radius: 16px 64px 16px 64px;
  background-repeat: no-repeat;
  background-image: url(${props => props.image});
  background-position: center;
  background-size: calc(100% - 124px);
`

const FirstContainerWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 68vw;
  height: 72vh;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContentTitle = styled.div`

  user-select: none;
  padding: 8px;
  width: fit-content;
  height: fit-content;
  text-align: center;
  font-size: 2.5rem;
  color: white;
  border-radius: 32px;
`
const ContentSubtitle = styled.div`
  @supports (backdrop-filter: blur(5px)) {
    backdrop-filter: blur(5px);
  }
  user-select: none;
  color: white;
  padding: 8px;
  width: fit-content;
  height: fit-content;
  text-align: center;
  font-size: 1.25rem;
  border-radius: 32px;
`


export default function SecondBlock() {
    return (
        <ContentBlock full={"true"} width={100} image={'code.jpg'}>
            <TitleContainer>
                <ContentTitle>미래IT는 검증되었습니다</ContentTitle>
                <ContentSubtitle>이미 수많은 클라이언트분과 함께했습니다</ContentSubtitle>
            </TitleContainer>
            <FirstContainerWrap>
                <FirstContainer image={"1a.png"}>
                    아이템 컴퍼니
                </FirstContainer>
                <FirstContainer image={"2a.png"}>
                    스피드IT
                </FirstContainer>
                <FirstContainer image={"3a.png"}>
                    부트스트랩
                </FirstContainer>
                <FirstContainer image={"4a.png"}>
                    구글
                </FirstContainer>
                <FirstContainer image={"5a.png"}>
                    토스
                </FirstContainer>
                <FirstContainer image={"6a.avif"}>
                    삼성
                </FirstContainer>
                <FirstContainer image={"7a.jpg"}>
                    KT
                </FirstContainer>
                <FirstContainer image={"8a.png"}>
                    카카오
                </FirstContainer>
            </FirstContainerWrap>
        </ContentBlock>
    )
}

"use client"
import styled from "styled-components";

// const CustomImage = styled.div`
//   background-image: url("/dawn.jpg");
//   position: absolute;
//   top: 0;
//   height: 100vh;
//   width: 100%;
//   background-repeat: no-repeat;
//   background-size: cover;
// `
// const CustomVideo = styled.video`
//   position: absolute;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `
//

const StyledButton = styled.button`
  
  font-family: "Pretendard-Regular";
  
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  animation: fadeInUp 0.5s ease-in-out;
  color: white;
  border: solid white;
  padding: 8px 64px 8px 64px;
  border-radius: 32px;
  font-size: ${props => props.fontSize}rem;
  position: absolute;
  left: ${props => props.left}vw;
  top: ${props => props.top}vw;
  @media (min-width: 992px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /* 데스크톱 스타일 */
    background: transparent;
  }
`

const StyledDiv = styled.div`
  
  font-family: "Pretendard-Regular";
  
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  animation: fadeInUp 0.5s ease-in-out;
  user-select: none;
  font-size: ${props => props.fontSize}rem;
  position: absolute;
  left: ${props => props.left}vw;
  top: ${props => props.top}vw;
  color: white;
  @media (min-width: 992px) {
    height: 12vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /* 데스크톱 스타일 */
    background: transparent;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    /* 태블릿 스타일 */
  }
  @media (max-width: 767px) {
    /* 모바일 스타일 */
  }

`;


const VideoContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`;

const CustomVideo = styled.video`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function Background() {
    return (
        <VideoContainer>
            <CustomVideo autoPlay muted loop>
                <source src="/vision.mp4" type="video/mp4" />
            </CustomVideo>
            <StyledDiv fontSize={5} left={8} top={18}>
                혁신, 그 넘어.
            </StyledDiv>
            <StyledDiv fontSize={2} left={8} top={24}>
                새로운 미래를 만들다.
            </StyledDiv>
            <StyledButton fontSize={1} left={8} top={32}>
                둘러보기 >
            </StyledButton>
        </VideoContainer>
    );
};


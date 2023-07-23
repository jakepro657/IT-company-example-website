"use client"
import GNB from "@/components/GNB";
import Background from "@/components/Background";
import styled from "styled-components";
import './globals.css'
import Footer from "@/components/Footer";

const PageContainer = styled.div`
  min-height: 200vh; // Adjust based on your total content height
`;
const VideoContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`;
const ContentAfterVideo = styled.div`
  position: relative;
  height: 128vh; // Adjust based on your content after video
  background-color: rgba(0, 0, 0, 0.01);
`;

const ContentBlock = styled.div`
  font-family: Pretendard-Regular;
  position: absolute;
  height: 128vh;
  left: ${props => props.full ? 0 : 50}%;
  transform: ${props => props.full ? "translateX(0)" : "translateX(-50%)"};
  background-color: white;
  width: ${props => props.width}%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const ContentBlockHalf = styled.div`
  font-family: Pretendard-Regular;
  user-select: none;
  position: absolute;
  min-height: 100vh;
  left: ${props => props.left ? 0 : 50}%;
  right: ${props => props.left ? 50 : 0}%;
  background-color: white;
  width: ${props => props.width}%;
`

const FirstContainer = styled.div`
  display: flex;
  justify-content: center;width: 24vw;
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
  align-self: end;
  margin-bottom: 3rem;
`


export default function Home() {
    return (
        <PageContainer>
            <VideoContainer>
                <Background/>
                <GNB/>
            </VideoContainer>
            <ContentAfterVideo>
                <ContentBlock full={"true"} width={100}>
                    <TitleContainer>
                        <ContentTitle>더 나은 기술로, 너 나은 세상으로</ContentTitle>
                        <ContentSubtitle>혁신적인 기술을 바탕으로 새로운 시작에 향합니다</ContentSubtitle>
                    </TitleContainer>
                    <FirstContainerWrap>
                        <FirstContainer image={"/programming.png"}>
                            <Title>
                                신기술개발
                            </Title>
                        </FirstContainer>
                        <FirstContainer image={"/ai.jpg"}>
                            <Title>
                                AI모델 개발
                            </Title>
                        </FirstContainer>
                        <FirstContainer image={"/light.jpg"}>
                            <Title>
                                전문도급
                            </Title>
                        </FirstContainer>
                    </FirstContainerWrap>
                </ContentBlock>
            </ContentAfterVideo>
            <ContentAfterVideo>
                <ContentBlockHalf left={"false"} width={50}>
                </ContentBlockHalf>
            </ContentAfterVideo>
            <ContentAfterVideo>
                <ContentBlockHalf left={"true"} width={50}>
                </ContentBlockHalf>
            </ContentAfterVideo>
            <ContentAfterVideo>
                <ContentBlockHalf left={"false"} width={50}>
                </ContentBlockHalf>
            </ContentAfterVideo>
            <ContentAfterVideo>
                <ContentBlock full={"true"} width={100}>

                </ContentBlock>
            </ContentAfterVideo>
            <ContentAfterVideo>
                <ContentBlock full={"true"} width={100}>

                </ContentBlock>
            </ContentAfterVideo>
            <Footer/>
        </PageContainer>
    );
};


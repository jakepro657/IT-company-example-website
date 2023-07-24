"use client"
import GNB from "@/components/GNB";
import Background from "@/components/Background";
import styled from "styled-components";
import './globals.css'
import Footer from "@/components/Footer";
import FirstBlock from "@/components/FirstBlock";
import SecondBlock from "@/components/SecondBlock";

const PageContainer = styled.div`
  min-height: 200vh; // Adjust based on your total content height
`;
const VideoContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`;

const BlockContainer = styled.div`
  position: relative;
  height: 128vh; // Adjust based on your content after video
  background-color: rgba(0, 0, 0, 0.01);
`;

const ContentBlockHalf = styled.div`
  font-family: Pretendard-Regular;
  user-select: none;
  position: absolute;
  min-height: 100%;
  left: 50%;
  background-color: white;
  width: 50%;
`


const SecondContainer = styled.div`
    
`


export default function Home() {
    return (
        <PageContainer>
            <VideoContainer>
                <Background/>
                <GNB/>
            </VideoContainer>
            <BlockContainer>
                <FirstBlock/>
            </BlockContainer>
            <BlockContainer>
                <SecondBlock/>
            </BlockContainer>
            <Footer/>
        </PageContainer>
    );
};


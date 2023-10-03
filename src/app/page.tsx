"use client"
import GNB from "@/components/GNB";
import styled from "styled-components";
import './globals.css'
import Footer from "@/components/Footer";
import FirstBlock from "@/components/FirstBlock";
import SecondBlock from "@/components/SecondBlock";
import NoticeBlock from "@/components/NoticeBlock";
import Background from "@/components/Background";

interface BlockContainerProps {
    height: number;
}

const PageContainer = styled.div`
  font-family: 'LINESeedKR-Bd';

  min-height: 200vh; // Adjust based on your total content height
`;
const VideoContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`;

const BlockContainer = styled.div<BlockContainerProps>`
  position: relative;
  height: ${props => props.height}vh; // Adjust based on your content after video
  background-color: white;
`;

const ContentBlockHalf = styled.div`
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
            <BlockContainer height={128}>
                <FirstBlock/>
            </BlockContainer>
            <BlockContainer height={128}>
                <SecondBlock/>
            </BlockContainer>
            <BlockContainer height={48}>
                <NoticeBlock/>
            </BlockContainer>
            {/*<BlockContainer>*/}
            {/*</BlockContainer>*/}
            <Footer/>
        </PageContainer>
    );
};


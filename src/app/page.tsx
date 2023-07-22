"use client"
import GNB from "@/components/GNB";
import Background from "@/components/Background";
import styled from "styled-components";
import './globals.css'

const PageContainer = styled.div`
  min-height: 200vh;  // Adjust based on your total content height
`;
const VideoContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`;
const ContentAfterVideo = styled.div`
  height: 100vh;  // Adjust based on your content after video
  background: white;
`;

export default function Home() {
    return (
        <PageContainer>
            <VideoContainer>
                <Background />
                <GNB />
            </VideoContainer>
            <ContentAfterVideo>
                
            </ContentAfterVideo>
        </PageContainer>
    );
};


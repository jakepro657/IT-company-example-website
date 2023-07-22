"use client"
import React, {useState} from "react";
import styled from 'styled-components';


const Navbar = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10; // To keep navbar over the video
  /* Add your navbar styles */
`;

const UlRoot = styled.ul`
  font-family: "Pretendard-Regular";

  user-select: none;
  color: white;
  @media (min-width: 992px) {
    padding: 32px;
    /* 데스크톱 스타일 */
    display: flex;
    justify-content: space-evenly;
    background: transparent;


    ul {
      display: none;
      position: absolute;
      list-style-type: none;
      padding: 0;
    }

    li > ul > li {
      z-index: 10;
      margin-top: 12px;

      &:hover {
        color: gray;
      }
    }

    &:hover {
      background: white;
      transition: 0.4s ease-in-out;
      color: black;
      height: 32vh;

      li > ul {
        display: flex;
        flex-direction: column;
        color: darkgray;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    /* 태블릿 스타일 */
  }
  @media (max-width: 767px) {
    /* 모바일 스타일 */
  }

`;

export const GNB = () => {

    return (
        <Navbar>
            <UlRoot>
                <li>
                    회사소개
                    <ul>
                        <li>
                            소개
                        </li>
                        <li>
                            연혁
                        </li>
                        <li>
                            조직도
                        </li>
                        <li>
                            찾아오시는길
                        </li>
                    </ul>
                </li>
                <li>
                    사업안내
                    <ul>
                        <li>
                            신기술개발
                        </li>
                        <li>
                            전문도급
                        </li>
                    </ul>
                </li>
                <li>
                    서비스 분야
                    <ul>
                        <li>
                            클라우드 서비스
                        </li>
                        <li>
                            호스팅 서비스
                        </li>
                    </ul>
                </li>
                <li>
                    고객센터
                    <ul>
                        <li>
                            공지사항
                        </li>
                        <li>
                            문의
                        </li>
                    </ul>
                </li>
            </UlRoot>
        </Navbar>

    );
};

export default GNB;

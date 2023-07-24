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
  font-family: KimjungchulGothic-Bold;

  user-select: none;
  color: white;
  background: rgba(0, 0, 0, 0.2);

  @media (min-width: 992px) {
    padding: 32px;
    /* 데스크톱 스타일 */
    display: flex;
    justify-content: space-evenly;


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
        //color: gray;
        color: darkgray;
      }
    }

    &:hover {
      //background: white;
      background: rgba(0, 0, 0, 0.4);
      transition: 0.4s ease-in-out;
      //color: black;
      height: 32vh;

      li > ul {
        display: flex;
        flex-direction: column;
        //color: darkgray;
        color: white;
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

const InlineSpan = styled.span`
  display: flex;
  justify-content: space-evenly;
  svg {
    margin-right: 8px;
  }
`
export const GNB = () => {

    return (
        <Navbar>
            <UlRoot>
                <InlineSpan>
                    <svg
                        width="40"
                        height="25"
                        viewBox="0 0 75 70"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.7391 56.9863L1 44.6575L12.7391 33.1507L25.6927 20H36.8246H47.9565L25.6927 44.6575L47.9565 69.3151H25.6927L12.7391 56.9863Z"
                            fill="aquamarine"
                            stroke="aquamarine"
                        />
                        <path
                            d="M62.8587 20H55.7283L33 44H53.5L65 29.5H74V20H62.8587Z"
                            fill="aquamarine"
                            stroke="aquamarine"
                        />
                        <circle cx="37" cy="8" r="8" fill="aquamarine"/>
                    </svg>
                    <span>
                        MIRAE IT Corp.
                    </span>
                </InlineSpan>
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
                            AI모델 개발
                        </li>
                        <li>
                            클라우드 서비스
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

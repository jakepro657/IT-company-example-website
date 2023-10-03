import styled from "styled-components";


const StyledFooter = styled.footer`

  align-items: center;
  display: flex;
  justify-content: center;
  
  line-height: 2rem;
  
  
  font-size: 0.9rem;
  min-height: 32vh;
  color: darkgray;
`

const StyledDiv = styled.div`
  color: white;

  font-size: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;

`

const InlineDiv = styled.div`
  margin-inline: 2vw;
  user-select: none;
`

const RootContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

export default function Footer() {
    return (
        <RootContainer>
            <StyledDiv>
                <InlineDiv>
                    <svg
                        width="70"
                        height="60"
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
                </InlineDiv>
                <InlineDiv>
                    MIRAE IT Corp.
                </InlineDiv>
            </StyledDiv>

            <StyledFooter>
                <div>
                    서울특별시 강남구 미래로 1402 <br/>
                    사업자 번호 : 105615-52651 상호: 미래IT, 대표: 김유빈<br/>
                    고객센터:1544-0634 팩스:0505-200-6060 이메일:mirae@mirae.co.kr <br/>ⓒ 미래IT - 기업 홈페이지 샘플 All rights
                    reserved.
                </div>
            </StyledFooter>
        </RootContainer>
    )
}

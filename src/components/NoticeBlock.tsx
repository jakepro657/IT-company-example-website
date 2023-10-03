import styled from "styled-components";

const NoticeContainer = styled.div`
  
  justify-content: space-evenly;
  display: flex;
  text-align: start;
`

const Block = styled.div`
  padding-top: 64px;
  padding-inline: 128px;
  user-select: none;
  font-size: 1.75rem;
  width: 100%;
`

const NoticeContent = styled.div`
  padding-bottom: 16px;
  border-bottom: black solid;
`

const StyledUl = styled.div`
  padding: 16px;
  list-style: none;
  font-size: 1rem;
  line-height: 2.5rem;
  color: gray;
  
  li {
    display: flex;
    justify-content: space-between;
  }
  
  li > div {
    &:hover {
      //color: gray;
      color: rgba(0, 0, 0, 0.9);
    }
  }
`

const Border = styled.div`
  border: lightgray solid 1px;
  margin-top: 64px;
  height: 186px;
  align-self: center;
`

export default function NoticeBlock() {
    return (
        <NoticeContainer>
            <Block>
                <NoticeContent>공지사항</NoticeContent>
                <StyledUl>
                    <li>
                        <div>
                            사업확장 논의
                        </div>
                        <div>
                            2023.07.25
                        </div>
                    </li>
                    <li>
                        <div>
                            하반기 결산 안내
                        </div>
                        <div>
                            2023.07.25
                        </div>
                    </li>
                    <li>
                        <div>
                            채용공고
                        </div>
                        <div>
                            2023.07.25
                        </div>
                    </li>
                </StyledUl>
            </Block>
            <Border/>
            <Block>
                <NoticeContent>자주하는질문</NoticeContent>
                <StyledUl>
                    <li>
                        <div>
                            파트너쉽 계약 절차가 어떻게 되나요?
                        </div>
                        <div>
                            2023.07.25
                        </div>
                    </li>
                    <li>
                        <div>
                            전문도급 단가는 어떻게 되나요?
                        </div>
                        <div>
                            2023.07.25
                        </div>
                    </li>
                </StyledUl>
            </Block>
        </NoticeContainer>
    )
}

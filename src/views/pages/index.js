import styled from "styled-components";

import ContinueIcon from "../../assets/continue.png";

export default function pages() {
  return (
    <BoxWrapper>
      <TopWrapper>
        <RowWrapper>
          <NextSteps>Next Steps</NextSteps>
        </RowWrapper>
        <RowWrapper>
          <SubTitle>
            AspectAlgo<sup>TM</sup> Trading System V2.0
            <DownloadAgain>Download again</DownloadAgain>
          </SubTitle>
        </RowWrapper>
        <RowWrapper>
          Welcome to the AspectAlgo<sup>TM</sup> Academy Section, where you'll
          learn how to get started right away.
        </RowWrapper>
        <RowWrapper>
          <ContinueButton>
            <img src={ContinueIcon} />
            Continue
          </ContinueButton>
        </RowWrapper>
      </TopWrapper>
      <BoxWrapper>
        <RowWrapper>
          <Block>1. How To Get Started</Block>
        </RowWrapper>
        <RowWrapper>
          <Block>1.1 Introducing AspectAlgo</Block>
          <Block>2. Fundamentals</Block>
          <Block>2.1. XABCD & Wave Pattern</Block>
        </RowWrapper>
      </BoxWrapper>
    </BoxWrapper>
  );
}

const NextSteps = styled.p`
  margin: 0;
  margin-top: 30px;
  font-weight: 700;
  font-size: 48px;
`;

const SubTitle = styled.p`
  margin: 0;

  font-style: normal;
  font-weight: 700;
  font-size: 24px;
`;

const DownloadAgain = styled.span`
  font-size: 16px;

  margin-left: 15px;

  padding: 2px;
  padding-left: 10px;
  padding-right: 10px;

  color: #3e8d00;
  border: 2px solid #3e8d00;
  border-radius: 30px;

  font-weight: 500;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  width: 345px;
  height: 203.25px;

  background: #656565;
  border-radius: 3.75px;
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  /* height: 300px; */
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const ContinueButton = styled.button`
  margin: 15px;
  padding: 8px;
  padding-left: 12px;
  padding-right: 12px;

  border: none;
  border-radius: 8px;

  font-weight: 600;
  font-size: 20px;
  color: white;

  background-color: #6c63ff;

  cursor: pointer;

  img {
    width: 15px;
    margin-right: 5px;
  }

  &:hover {
  }
`;

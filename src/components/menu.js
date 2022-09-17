import styled from "styled-components";
import Logo from "Logo.png";

export default function Menu() {
  return (
    <>
      <img src={Logo} className="spectAlgo__logo" alt="logo" />
      <Wrapper>
        <li>
          1. How to get started
          <ul>
            <li>1.1 Introducing AspectAlgo</li>
          </ul>
        </li>
        <li>
          2. Fundamentals
          <ul>
            <li>2.1 XABCD & Wave Pattern</li>
            <li>2.2 Confluence Cluster</li>
            <li>2.3 Cumulative Delta</li>
            <li>2.4 Multiple Try Rule</li>
          </ul>
        </li>
        <li>
          3. Strategies
          <ul>
            <li>3.1 PRZ + Wave Pattern</li>
            <li>3.2 Wave Pattern + Cross</li>
            <li>3.3 Wave-Test-Continuation</li>
            <li>3.4 Level Bounce</li>
          </ul>
        </li>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.ul`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 15.4186px;
  line-height: 18px;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  list-style: none;
  ul,
  li {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

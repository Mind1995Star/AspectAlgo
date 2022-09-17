import styled from "styled-components";
import Logo from "Logo.png";
import image1 from "assets/1.png";
import image2 from "assets/2.png";
import image3 from "assets/3.png";
import image4 from "assets/4.png";
import image5 from "assets/5.png";
import image6 from "assets/6.png";
import image7 from "assets/7.png";
import image8 from "assets/8.png";
import image9 from "assets/9.png";
import image10 from "assets/10.png";
import image11 from "assets/11.png";

export default function Menu() {
  return (
    <>
      <img src={Logo} className="spectAlgo__logo" alt="logo" />
      <Wrapper>
        <li>
          <div>
            <img src={image1} />
            1. How to get started
          </div>
          <ul>
            <div>
              <img src={image2} />
              <li>1.1 Introducing AspectAlgo</li>
            </div>
          </ul>
        </li>
        <li>
          <div>
            <img src={image3} />
            2. Fundamentals
          </div>
          <ul>
            <div>
              <img src={image4} />
              <li>2.1 XABCD & Wave Pattern</li>
            </div>
            <div>
              <img src={image5} />
              <li>2.2 Confluence Cluster</li>
            </div>
            <div>
              <img src={image6} />
              <li>2.3 Cumulative Delta</li>
            </div>
            <div>
              <img src={image7} />
              <li>2.4 Multiple Try Rule</li>
            </div>
          </ul>
        </li>
        <li>
          <div>
            <img src={image8} />
            3. Strategies
          </div>
          <ul>
            <div>
              <img src={image9} />
              <li>3.1 PRZ + Wave Pattern</li>
            </div>
            <div>
              <img src={image10} />
              <li>3.2 Wave Pattern + Cross</li>
            </div>
            <div>
              <img src={image11} />
              <li>3.3 Wave-Test-Continuation</li>
            </div>
            <div>
              <img src={image7} />
              <li>3.4 Level Bounce</li>
            </div>
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
  div {
    display: flex;
  }
  img {
    width: 15px;
    margin-right: 5px;
  }
`;

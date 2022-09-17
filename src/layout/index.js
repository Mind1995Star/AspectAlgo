import React, { useState } from "react";
import styled from "styled-components";
import Menu from "components/menu";
import Background from "Background.jpg";
import { Route, Switch } from "react-router-dom";
import Pages from "views/pages";
import Ring from "assets/ring.png";
import User from "assets/user.png";
import ResIcon from "assets/res-icon.png";

export default function HelpLayout() {
  const [responsive_flag, setResFlag] = useState(0);
  return (
    <Layout>
      <Header>
        <div className="responsive_icon">
          <img src={ResIcon} onClick={() => setResFlag(!responsive_flag)} />
        </div>
        <div className="header_group">
          <div className="ring">
            <img src={Ring} />
          </div>
          <div className="user">
            <img src={User} />
          </div>
        </div>
      </Header>
      <SideBar flag={responsive_flag}>
        <Menu />
      </SideBar>
      <Content>
        <Switch>
          <Route path="/">
            <Pages />
          </Route>
        </Switch>
      </Content>
    </Layout>
  );
}

const Layout = styled.section`
  min-height: 100vh;
  boxing-size: border-box;
  position: relative;
`;

const SideBar = styled.aside`
  position: absolute;
  grid-area: sidebar;
  boxing-size: border-box;
  background-color: #151515;
  color: white;
  padding: 20px;
  height: 100vh;
  transition: all 0.2s;
  left: ${(p) => (!p.flag ? "-311px" : "0")};
`;

const Content = styled.section`
  grid-area: main;
  boxing-size: border-box;
  background-image: url(${Background});
  background-size: cover;
  color: white;
  text-align: center;
  height: 100vh;
`;

const Header = styled.header`
  grid-area: header;
  boxing-size: border-box;
  background-color: #151515;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
  .responsive_icon {
    display: flex;
    justify-content: center;
    padding-left: 10px;
  }
  .header_group {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    .ring {
      right: 0;
    }
  }
`;

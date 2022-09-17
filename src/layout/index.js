import styled from "styled-components";
import Menu from "components/menu";
import Background from "Background.jpg";
import { Route, Switch } from "react-router-dom";
import Pages from "views/pages";

export default function HelpLayout() {
  return (
    <Layout>
      <Header>Header</Header>
      <SideBar>
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
  display: grid;
  grid-template-areas:
    "sidebar header"
    "sidebar main"
    "sidebar main";
  grid-template-rows: 50px 1fr;
  grid-template-columns: 300px 1fr;
  min-height: 100vh;
  boxing-size: border-box;
`;

const SideBar = styled.aside`
  grid-area: sidebar;
  boxing-size: border-box;
  background-color: #151515;
  color: white;
  padding: 20px;
`;

const Content = styled.section`
  grid-area: main;
  boxing-size: border-box;
  background-image: url(${Background});
  background-size: cover;
  color: white;
  text-align: center;
`;

const Header = styled.header`
  grid-area: header;
  boxing-size: border-box;
  background-color: #151515;
`;

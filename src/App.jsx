import { styled, ThemeProvider, createGlobalStyle} from "styled-components";
import { Outlet } from "react-router-dom";
import { HiSearch } from "react-icons/hi";
import { CgBell } from "react-icons/cg";

const Header = styled.div`
  padding: 30px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header_Left = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 30px;
  font-weight: 700px;
`;

const Header_Right = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Iconset = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  width: 40px;
  height: 40px;
`;

const Button = styled.div`
  height: 32px; 
  padding-left: 16px; 
  padding-right: 16px; 
  display: flex;
  align-items: center;
  margin-left: 8px; 

  font-size: 16px; 
  border-radius: 16px; 
  border: none;
  outline: none;

  background-color: #212529;
  color: #FFF;
  font-weight: 700;
`;

const Topnav = () => {
  return (
    <>
      <Header>
        <Header_Left>
          velog
        </Header_Left>
        <Header_Right>
          <Iconset>
            <CgBell/>
          </Iconset>
          <Iconset>
            <HiSearch/>
          </Iconset>
          <Button>로그인</Button>
        </Header_Right>
      </Header>
    </>
  );
};

function App() {
  return (
    <>
      <Topnav />
      <Outlet />
    </>
  );
}

export default App;

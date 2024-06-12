import styled from "styled-components";
import theme from "../../global/styles/theme";

export const Container = styled.footer`
  padding : 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(theme.colors.MAIN_BLUE)};
  color: ${(theme.colors.WHITE)};
`
export const FooterCompanyRights = styled.div`
  display: flex;

  & > span > a {
    margin-left: 5px;
  }

  & > span > a:visited {
    color: ${(theme.colors.WHITE)};
  }

  & > span > a > svg{
    margin-right: 5px;
  }
`

export const FooterInfos = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
`
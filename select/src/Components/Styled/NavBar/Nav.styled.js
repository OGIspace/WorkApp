import styled from "styled-components";
import { device } from "../Device.size";

export const Nav = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10vh;
    @media ${device.tablet} {
    max-width: 768px;
    @media ${device.laptop} {
    max-width: 800px;
    @media ${device.desktop} {
    max-width: 1400px;
  }
}
  }
`
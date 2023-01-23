import styled from "styled-components";
import { device } from "../Device.size";

export const Footer = styled.div`
  flex: 0 0 auto;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
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
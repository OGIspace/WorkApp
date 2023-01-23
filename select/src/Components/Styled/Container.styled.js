import styled from "styled-components";
import { device } from "./Device.size";

export const Container = styled.div`
    max-width: 960px;
    margin-left: auto;
    margin-right: auto;
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
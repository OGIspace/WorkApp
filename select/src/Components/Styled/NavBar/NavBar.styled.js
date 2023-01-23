import styled from "styled-components";
import { device } from "./Device.size";

export const container = styled.div`
    width: 100%;
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
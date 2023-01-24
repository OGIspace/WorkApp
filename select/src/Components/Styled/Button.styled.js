import styled from "styled-components";
import { device } from "./Device.size";

export const Button = styled.button`
    align-items: center;
    align-content: center;
    margin-bottom: 90px;
    border-radius:  none;
    border: 10px solid white;
    background-color: #db3939;
    width: 75px;
    height: 75px;
    border-radius: 50px;
    cursor: pointer;
    margin: 0 0 90px;
    @media ${device.tablet} {
    max-width: 768px;
    margin: 0 0 200px;
  @media ${device.tablet} {
    max-width: 768px;
    margin: 0 0 80px;
    @media ${device.laptop} {
    max-width: 800px;
    @media ${device.desktop} {
    max-width: 1400px;
    margin: 0 80px 80px;
  }
 }
}
}
`
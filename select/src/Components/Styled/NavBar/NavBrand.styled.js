import styled from "styled-components";
import { device } from "../Device.size";

export const NavBrand = styled.div`
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");
  font-size: 30px;
  font-weight: 700;
  color: #ddd;
  font-family: "Poppins", sans-serif;
  
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

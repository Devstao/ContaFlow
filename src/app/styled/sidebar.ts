import { styled } from "@vue-styled-components/core";

const props = { width: String };
const SideBar = styled("div", props)`
  position: fixed; /* Fixa na lateral */
  top: 0;
  left: 0;
  width: ${(props) => props.width || "220px"};
  height: 100%; /* Altura da tela inteira */
  background: #333;
  color: white;
  padding-top: 20px;
  z-index: -1;

  transition: width 500ms;
`;

export default SideBar;

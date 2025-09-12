import { styled } from "@vue-styled-components/core";
const SideBarComponent = styled.div`
  position: fixed; /* Fixa na lateral */
  top: 0;
  left: 0;
  width: 220px; /* Largura da sidebar */
  height: 100vh; /* Altura da tela inteira */
  background: #333;
  color: white;
  padding-top: 20px;
  z-index: -1;
`;

export default SideBarComponent;

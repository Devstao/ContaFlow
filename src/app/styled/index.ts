import { styled } from "@vue-styled-components/core";
import { BButton } from "bootstrap-vue-next";
const props = { marginLeft: String };

const MainFrame = styled("div", props)`
  margin-top: 65px;
  margin-left: ${(props) => props.marginLeft || "220px"};
  padding: 20px;
  flex: 1;
  transition: margin-left 500ms;
  height: 100%;
  z-index: -2;
`;

const Button = styled(BButton)`
  background-color: var(--blue);
  color: var(--base3);
`;

export { Button, MainFrame };

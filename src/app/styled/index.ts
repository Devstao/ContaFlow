import { styled } from "@vue-styled-components/core";

const props = { marginLeft: String };

const MainFrame = styled("div", props)`
  margin-top: 65px;
  justify-content: center;
  margin-left: ${(props) => props.marginLeft || "220px"};
  padding: 20px;
  flex: 1;
  transition: margin-left 500ms;
  min-height: 100%;
`;

export default MainFrame;

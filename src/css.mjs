const css = className => `
div.${className} {
  padding: 0;
  margin: 0;
  line-height: 10px;
}
div.${className} > div {
  width: 10px;
  height: 10px;
  display: inline-block;
  border: 1px solid #333;
  box-sizing: border-box;
}
`;

export default css;

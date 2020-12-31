const css = className => `
html {
  height: 100%;
}
body {
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0f0f0f;
}
div.${className} {
  display: inline-block;
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

// This is how we override the default Ant design Theme

const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "primary-color": "#51BAF7",
      "@border-radius-base": "0px",
      "@heading-color": "#10152F",
      "@radio-button-checked-bg": "#51BAF7"
    }
  })
);

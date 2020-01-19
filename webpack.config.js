const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");

module.exports = webpackConfigEnv => {
  const defaultConfig = singleSpaDefaults({
    orgName: "polyglot-mf",
    projectName: "styleguide",
    webpackConfigEnv
  });

  return webpackMerge.smart(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    module: {
      rules: [
        {
          test: /\.css/,
          use: ["style-loader", "css-loader"]
        }
      ]
    }
  });
};

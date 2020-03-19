const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require("path");
const fs = require("fs");

process.on('exit', function (){
  if (fs.existsSync(".hot")) {
    fs.unlinkSync(".hot");
  }
});

if (process.argv.includes('--hot')) {
  new fs.writeFileSync(".hot", "");
}

module.exports = function() {
  return {
    mode: "development",
    entry: "./src/app.js",
    module: {
      rules: [
        // ... other rules
        {
          test: /\.vue$/,
          loader: "vue-loader"
        }
      ]
    },
    // Fix issue with requiring Vue Template Compiler.
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js"
      },
      extensions: ["*", ".js", ".vue", ".json"]
    },
    plugins: [
      // make sure to include the plugin!
      new VueLoaderPlugin(),
    ],
    output: {
      path: path.resolve(__dirname, "dist/"),
      publicPath: "/dist",
      filename: "bundle.js",
    },
  };
}();

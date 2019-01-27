var fs = require("fs");
let ws = fs.createWriteStream("css.snippets", { flags: "a" });

require.extensions[".css"] = function(module, filename) {
  module.exports = fs.readFileSync(filename, "utf8");
};

let filename = process.argv[2];

var file = require(`./${filename}`);
const css = require("css");

var obj = css.parse(file);

obj.stylesheet.rules.forEach(item => {
  if (item.type == "rule") {
    let selector = item.selectors[0];
    let cls = selector.substring(1).split(" ");
    ws.write(`snippet ${cls[0]} \n`);
    item.declarations.forEach(d => {
      ws.write(`${d.property}: ${d.value} \n`);
    });
    ws.write("endsnippet\n");
  }
});
console.log("CONVERSION COMPLETE.");
console.log(
  "Please don't forget to copy the css.snippets file to your snippets folder. Thanks."
);
ws.close();

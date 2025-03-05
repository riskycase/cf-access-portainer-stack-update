const path = require("path");

const buildEslintCommand = (filenames) =>
  `prettier --write ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" ")}`;

module.exports = {
  "*.{js,ts}": [buildEslintCommand],
};

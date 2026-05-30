const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "out");

const copyHtmlToSubdir = (name) => {
  // 先检查是否有 .html 文件
  const src = path.join(outDir, `${name}.html`);
  const destDir = path.join(outDir, name);
  const dest = path.join(destDir, "index.html");

  if (fs.existsSync(src) && !fs.existsSync(dest)) {
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    fs.copyFileSync(src, dest);
    console.log(`✓ Copied ${name}.html to ${name}/index.html`);
  }
};

console.log("Copying HTML files to subdirectories for GitHub Pages...");

copyHtmlToSubdir("about");
copyHtmlToSubdir("contact");
copyHtmlToSubdir("services");
copyHtmlToSubdir("system");
copyHtmlToSubdir("journey");

console.log("Done!");
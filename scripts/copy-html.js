const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "out");

// 确保 HTML 文件路径与 Next.js 静态导出匹配
const pages = ["about", "contact", "services", "system", "journey"];

pages.forEach((page) => {
  const htmlPath = path.join(outDir, `${page}.html`);
  const dirPath = path.join(outDir, page);
  const indexPath = path.join(dirPath, "index.html");

  // 如果有 page.html，复制到 page/index.html
  if (fs.existsSync(htmlPath)) {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    const content = fs.readFileSync(htmlPath, "utf8");
    fs.writeFileSync(indexPath, content);
    console.log(`✓ Copied ${page}.html → ${page}/index.html`);
  }
});

console.log("\nFiles in out directory:");
console.log(fs.readdirSync(outDir).filter(f => f.endsWith(".html")));

console.log("\nFiles in subdirectories:");
pages.forEach(page => {
  const dir = path.join(outDir, page);
  if (fs.existsSync(dir)) {
    console.log(`${page}/:`, fs.readdirSync(dir));
  }
});

console.log("\nDone!");
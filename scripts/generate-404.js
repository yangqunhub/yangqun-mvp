const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "out");

// 读取原始 404.html 内容
const notFoundPath = path.join(outDir, "404.html");
const notFoundContent = fs.readFileSync(notFoundPath, "utf8");

// 页面列表
const pages = ["about", "contact", "services", "system", "journey"];

// 为每个页面创建自定义 404.html
pages.forEach((page) => {
  const page404Path = path.join(outDir, `${page}/404.html`);
  fs.writeFileSync(page404Path, notFoundContent);
  console.log(`✓ Created ${page}/404.html`);
});

// 同时复制到根目录的各路径下
pages.forEach((page) => {
  const sourcePath = path.join(outDir, `${page}.html`);
  if (fs.existsSync(sourcePath)) {
    // 已经存在，不需要复制
  }
});

console.log("Done!");
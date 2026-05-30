import Link from "next/link";

const colors = {
  primary: "#8B7355",
  text: "#2D2A26",
  textSecondary: "#6B6560",
  surface: "#F5F0EB",
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: colors.surface, borderTop: "1px solid rgba(139,115,85,0.1)" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
          {/* 品牌 */}
          <div>
            <h3 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "1rem", color: colors.text }}>
              杨泽群
            </h3>
            <p style={{ fontSize: "0.875rem", lineHeight: "1.625", color: colors.textSecondary }}>
              健康复利导师 × 数字建造者<br />
              用系统思维管好你的健康、财富和习惯
            </p>
          </div>

          {/* 导航 */}
          <div>
            <h4 style={{ fontSize: "0.875rem", fontWeight: "600", marginBottom: "1rem", color: colors.text }}>
              导航
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <Link href="/" style={{ fontSize: "0.875rem", color: colors.textSecondary }}>首页</Link>
              <Link href="/about.html" style={{ fontSize: "0.875rem", color: colors.textSecondary }}>关于我</Link>
              <Link href="/system.html" style={{ fontSize: "0.875rem", color: colors.textSecondary }}>我的系统</Link>
              <Link href="/services.html" style={{ fontSize: "0.875rem", color: colors.textSecondary }}>服务流程</Link>
            </div>
          </div>

          {/* 联系 */}
          <div>
            <h4 style={{ fontSize: "0.875rem", fontWeight: "600", marginBottom: "1rem", color: colors.text }}>
              联系
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <a href="https://github.com/yangqunhub" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.875rem", color: colors.textSecondary }}>GitHub</a>
              <a href="mailto:1559383669@qq.com" style={{ fontSize: "0.875rem", color: colors.textSecondary }}>1559383669@qq.com</a>
              <span style={{ fontSize: "0.875rem", color: colors.textSecondary }}>公众号：羊群的进化论</span>
            </div>
          </div>
        </div>

        {/* 底部 */}
        <div style={{ marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid rgba(139,115,85,0.1)" }}>
          <p style={{ fontSize: "0.875rem", textAlign: "center", color: colors.textSecondary }}>
            © {currentYear} 杨泽群. 用系统构建人生。
          </p>
        </div>
      </div>
    </footer>
  );
}
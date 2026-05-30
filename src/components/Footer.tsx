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
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* 品牌 */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: colors.text }}>
              杨泽群
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
              健康复利导师 × 数字建造者<br />
              用系统思维管好你的健康、财富和习惯
            </p>
          </div>

          {/* 导航 */}
          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ color: colors.text }}>
              导航
            </h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm transition-colors" style={{ color: colors.textSecondary }}>
                首页
              </Link>
              <Link href="/about" className="text-sm transition-colors" style={{ color: colors.textSecondary }}>
                关于我
              </Link>
              <Link href="/system" className="text-sm transition-colors" style={{ color: colors.textSecondary }}>
                我的系统
              </Link>
              <Link href="/services" className="text-sm transition-colors" style={{ color: colors.textSecondary }}>
                服务流程
              </Link>
            </div>
          </div>

          {/* 联系 */}
          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ color: colors.text }}>
              联系
            </h4>
            <div className="flex flex-col gap-2">
              <a href="https://github.com/yangqunhub" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors" style={{ color: colors.textSecondary }}>
                GitHub
              </a>
              <a href="mailto:1559383669@qq.com" className="text-sm transition-colors" style={{ color: colors.textSecondary }}>
                1559383669@qq.com
              </a>
              <span className="text-sm" style={{ color: colors.textSecondary }}>
                公众号：羊群的进化论
              </span>
            </div>
          </div>
        </div>

        {/* 底部 */}
        <div className="mt-8 pt-8" style={{ borderTop: "1px solid rgba(139,115,85,0.1)" }}>
          <p className="text-sm text-center" style={{ color: colors.textSecondary }}>
            © {currentYear} 杨泽群. 用系统构建人生。
          </p>
        </div>
      </div>
    </footer>
  );
}
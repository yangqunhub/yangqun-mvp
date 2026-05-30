import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-surface)] border-t border-[rgba(139,115,85,0.1)]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* 品牌 */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4">
              杨泽群
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              健康复利导师 × 数字建造者<br />
              用系统思维管好你的健康、财富和习惯
            </p>
          </div>

          {/* 导航 */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text)] mb-4">
              导航
            </h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">
                首页
              </Link>
              <Link href="/about" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">
                关于我
              </Link>
              <Link href="/system" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">
                我的系统
              </Link>
              <Link href="/services" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">
                服务流程
              </Link>
            </div>
          </div>

          {/* 联系 */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text)] mb-4">
              联系
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/yangqunhub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
              >
                GitHub
              </a>
              <a
                href="mailto:1559383669@qq.com"
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
              >
                1559383669@qq.com
              </a>
              <span className="text-sm text-[var(--color-text-secondary)]">
                公众号：羊群的进化论
              </span>
            </div>
          </div>
        </div>

        {/* 底部 */}
        <div className="mt-8 pt-8 border-t border-[rgba(139,115,85,0.1)]">
          <p className="text-sm text-[var(--color-text-secondary)] text-center">
            © {currentYear} 杨泽群. 用系统构建人生。
          </p>
        </div>
      </div>
    </footer>
  );
}
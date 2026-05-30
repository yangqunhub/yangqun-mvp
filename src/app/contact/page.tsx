export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Hero */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
            联系方式
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)]">
            准备好开始了吗？联系我，让我们聊聊
          </p>
        </section>

        {/* 联系方式卡片 */}
        <div className="space-y-6">
          {/* 邮箱 */}
          <div className="glass p-6 md:p-8">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-[#8B7355]/10 flex items-center justify-center text-2xl flex-shrink-0">
                ✉️
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-1">邮箱</h3>
                <a
                  href="mailto:1559383669@qq.com"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  1559383669@qq.com
                </a>
              </div>
              <a
                href="mailto:1559383669@qq.com"
                className="px-6 py-3 glass text-sm font-medium text-[var(--color-text)] hover:bg-white/80 transition-all rounded-full"
              >
                发送邮件
              </a>
            </div>
          </div>

          {/* 公众号 */}
          <div className="glass p-6 md:p-8">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-[#6B8E5A]/10 flex items-center justify-center text-2xl flex-shrink-0">
                📱
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-1">公众号</h3>
                <p className="text-[var(--color-text-secondary)]">羊群的进化论</p>
              </div>
              <div className="px-6 py-3 glass text-sm text-center">
                <p className="text-[var(--color-text)]">二维码</p>
                <p className="text-xs text-[var(--color-text-secondary)]">待添加</p>
              </div>
            </div>
          </div>

          {/* GitHub */}
          <div className="glass p-6 md:p-8">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-[#5A7A8A]/10 flex items-center justify-center text-2xl flex-shrink-0">
                💻
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-1">GitHub</h3>
                <a
                  href="https://github.com/yangqunhub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  github.com/yangqunhub
                </a>
              </div>
              <a
                href="https://github.com/yangqunhub"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 glass text-sm font-medium text-[var(--color-text)] hover:bg-white/80 transition-all rounded-full"
              >
                访问主页
              </a>
            </div>
          </div>
        </div>

        {/* 提醒 */}
        <div className="mt-12 text-center">
          <div className="glass p-8">
            <p className="text-[var(--color-text-secondary)]">
              如果你有任何问题，或者想要了解更多关于服务的内容，欢迎随时联系我。
            </p>
            <p className="text-[var(--color-text-secondary)] mt-4">
              也可以先关注公众号，了解更多我的思考和实践。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
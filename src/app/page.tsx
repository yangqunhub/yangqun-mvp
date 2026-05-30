import Link from "next/link";

const serviceSteps = [
  {
    step: "01",
    title: "初诊咨询",
    description: "了解你的现状、痛点和目标，判断是否匹配",
    icon: "💬",
  },
  {
    step: "02",
    title: "全面评估",
    description: "从健康、财富、习惯等多维度深度诊断",
    icon: "🔍",
  },
  {
    step: "03",
    title: "方案设计",
    description: "基于评估结果，定制个性化系统方案",
    icon: "📐",
  },
  {
    step: "04",
    title: "数字交付",
    description: "用 AI 工具把方案变成你手机里的系统",
    icon: "💻",
  },
  {
    step: "05",
    title: "执行跟进",
    description: "灵活跟进节奏，建立及时反馈回路",
    icon: "🚀",
  },
];

const pillars = [
  {
    title: "健康支柱",
    subtitle: "身心复利的基础",
    description: "用食品科学管好肠道和炎症，用运动康复管好身体和疼痛，用正念管好情绪和注意力。",
    keywords: ["脑肠轴", "抗炎饮食", "运动康复", "正念"],
    color: "#6B8E5A",
  },
  {
    title: "财富支柱",
    subtitle: "长期复利的引擎",
    description: "用复利思维管好资产和习惯，建立投资纪律，从收支结构到资产配置全面规划。",
    keywords: ["复利思维", "资产配置", "定投纪律", "投资日志"],
    color: "#8B7355",
  },
  {
    title: "数字建造",
    subtitle: "系统落地的工具",
    description: "用 AI 工具把方案变成你手机里的系统，让复杂的健康管理变得简单可执行。",
    keywords: ["vibe coding", "健康追踪", "习惯打卡", "资产看板"],
    color: "#5A7A8A",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-background)] via-[var(--color-surface)] to-[var(--color-background)]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* 标签 */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass animate-fade-in">
            <span className="w-2 h-2 bg-[var(--color-secondary)] rounded-full animate-pulse" />
            <span className="text-sm text-[var(--color-text-secondary)]">正在服务真实客户</span>
          </div>

          {/* 主标题 */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--color-text)] mb-6 animate-fade-in-up">
            你好，我是杨泽群
          </h1>

          {/* 副标题 */}
          <h2 className="text-xl md:text-2xl text-[var(--color-primary)] font-medium mb-8 animate-fade-in-up delay-100">
            健康复利导师 × 数字建造者
          </h2>

          {/* 价值主张 */}
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-12 max-w-2xl mx-auto animate-fade-in-up delay-200">
            用食品科学管好你的身体，<br className="hidden md:block" />
            用复利思维管好你的资产，<br className="hidden md:block" />
            用 AI 工具管好你的系统。
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <Link
              href="/services"
              className="px-8 py-4 bg-[var(--color-primary)] text-white rounded-full font-medium hover:bg-[var(--color-primary-light)] transition-all hover:scale-105 shadow-lg shadow-[var(--color-primary)]/20"
            >
              了解服务流程
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 glass text-[var(--color-text)] rounded-full font-medium hover:bg-white/80 transition-all"
            >
              关于我
            </Link>
          </div>
        </div>

        {/* 滚动提示 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[var(--color-text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="py-20 px-6 bg-[var(--color-surface)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              我的服务流程
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
              不是给你一个方案就结束，而是帮你构建一套会自己运转的系统
            </p>
          </div>

          {/* 流程图 */}
          <div className="relative">
            {/* 连接线（桌面端） */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-primary)]/20 via-[var(--color-primary)]/40 to-[var(--color-primary)]/20" />

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {serviceSteps.map((item, index) => (
                <div
                  key={item.step}
                  className="relative group"
                >
                  <div className="glass p-6 hover:scale-105 transition-transform cursor-default">
                    {/* 步骤号 */}
                    <div className="absolute -top-3 left-6 px-3 py-1 glass text-xs font-medium text-[var(--color-primary)]">
                      {item.step}
                    </div>

                    {/* 图标 */}
                    <div className="text-4xl mb-4">{item.icon}</div>

                    {/* 标题 */}
                    <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                      {item.title}
                    </h3>

                    {/* 描述 */}
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 核心方法论 */}
          <div className="mt-16 text-center">
            <div className="inline-block glass px-8 py-4">
              <p className="text-lg md:text-xl text-[var(--color-text)]">
                <span className="text-[var(--color-primary)] font-semibold">核心理念：</span>
                构建反馈系统，而不是设定目标
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              三大支柱系统
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
              任何单一领域的人都没法跟你竞争，因为你的价值在跨领域的整合能力里
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="glass p-8 hover:scale-105 transition-transform cursor-default"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* 标题区域 */}
                <div className="mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                    style={{ backgroundColor: `${pillar.color}20` }}
                  >
                    {pillar.title === "健康支柱" ? "🌿" : pillar.title === "财富支柱" ? "💰" : "⚡"}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text)] mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {pillar.subtitle}
                  </p>
                </div>

                {/* 描述 */}
                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* 关键词标签 */}
                <div className="flex flex-wrap gap-2">
                  {pillar.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="px-3 py-1 text-xs rounded-full"
                      style={{
                        backgroundColor: `${pillar.color}15`,
                        color: pillar.color,
                      }}
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-background)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-6">
            准备好开始了吗？
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] mb-8">
            你的第一个案例，就是你自己。先把自己调理好，这是最硬核的信任背书。
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-[var(--color-primary)] text-white rounded-full font-medium hover:bg-[var(--color-primary-light)] transition-all hover:scale-105 shadow-lg shadow-[var(--color-primary)]/20"
          >
            联系我，开始咨询
          </Link>
        </div>
      </section>
    </div>
  );
}
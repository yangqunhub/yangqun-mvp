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

// 硬编码颜色
const colors = {
  primary: "#8B7355",
  primaryLight: "#A68B6A",
  secondary: "#6B8E5A",
  background: "#FDFBF8",
  surface: "#F5F0EB",
  text: "#2D2A26",
  textSecondary: "#6B6560",
};

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background, color: colors.text }}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom right, ${colors.background}, ${colors.surface}, ${colors.background})` }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* 标签 */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8" style={{ backgroundColor: "rgba(255, 255, 255, 0.7)", backdropFilter: "blur(20px)", borderRadius: "20px", border: "1px solid rgba(255, 255, 255, 0.3)" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: colors.secondary }} />
            <span className="text-sm" style={{ color: colors.textSecondary }}>正在服务真实客户</span>
          </div>

          {/* 主标题 */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6" style={{ color: colors.text }}>
            你好，我是杨泽群
          </h1>

          {/* 副标题 */}
          <h2 className="text-xl md:text-2xl font-medium mb-8" style={{ color: colors.primary }}>
            健康复利导师 × 数字建造者
          </h2>

          {/* 价值主张 */}
          <p className="text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto" style={{ color: colors.textSecondary }}>
            用食品科学管好你的身体，<br className="hidden md:block" />
            用复利思维管好你的资产，<br className="hidden md:block" />
            用 AI 工具管好你的系统。
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="px-8 py-4 rounded-full font-medium transition-all hover:scale-105"
              style={{ backgroundColor: colors.primary, color: "white", boxShadow: `0 8px 32px rgba(139, 115, 85, 0.2)` }}
            >
              了解服务流程
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 rounded-full font-medium transition-all"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.7)", backdropFilter: "blur(20px)", border: "1px solid rgba(255, 255, 255, 0.3)", borderRadius: "20px", color: colors.text }}
            >
              关于我
            </Link>
          </div>
        </div>

        {/* 滚动提示 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6" style={{ color: colors.textSecondary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="py-20 px-6" style={{ backgroundColor: colors.surface }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.text }}>
              我的服务流程
            </h2>
            <p className="max-w-xl mx-auto" style={{ color: colors.textSecondary }}>
              不是给你一个方案就结束，而是帮你构建一套会自己运转的系统
            </p>
          </div>

          {/* 流程图 */}
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {serviceSteps.map((item) => (
              <div key={item.step} className="p-6 transition-transform cursor-default hover:scale-105" style={{ backgroundColor: "rgba(255, 255, 255, 0.7)", backdropFilter: "blur(20px)", border: "1px solid rgba(255, 255, 255, 0.3)", borderRadius: "20px", boxShadow: "0 8px 32px rgba(139, 115, 85, 0.1)" }}>
                {/* 步骤号 */}
                <div className="absolute -top-3 left-6 px-3 py-1 text-xs font-medium" style={{ backgroundColor: "rgba(255, 255, 255, 0.7)", backdropFilter: "blur(20px)", border: "1px solid rgba(255, 255, 255, 0.3)", borderRadius: "12px", color: colors.primary }}>
                  {item.step}
                </div>

                {/* 图标 */}
                <div className="text-4xl mb-4">{item.icon}</div>

                {/* 标题 */}
                <h3 className="text-lg font-semibold mb-2" style={{ color: colors.text }}>
                  {item.title}
                </h3>

                {/* 描述 */}
                <p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* 核心方法论 */}
          <div className="mt-16 text-center">
            <div className="inline-block px-8 py-4" style={{ backgroundColor: "rgba(255, 255, 255, 0.7)", backdropFilter: "blur(20px)", border: "1px solid rgba(255, 255, 255, 0.3)", borderRadius: "20px" }}>
              <p className="text-lg md:text-xl" style={{ color: colors.text }}>
                <span className="font-semibold" style={{ color: colors.primary }}>核心理念：</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.text }}>
              三大支柱系统
            </h2>
            <p className="max-w-xl mx-auto" style={{ color: colors.textSecondary }}>
              任何单一领域的人都没法跟你竞争，因为你的价值在跨领域的整合能力里
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="p-8 transition-transform cursor-default hover:scale-105"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "20px",
                  boxShadow: "0 8px 32px rgba(139, 115, 85, 0.1)",
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                    style={{ backgroundColor: `${pillar.color}20` }}
                  >
                    {pillar.title === "健康支柱" ? "🌿" : pillar.title === "财富支柱" ? "💰" : "⚡"}
                  </div>
                  <h3 className="text-xl font-bold mb-1" style={{ color: colors.text }}>
                    {pillar.title}
                  </h3>
                  <p className="text-sm" style={{ color: colors.textSecondary }}>
                    {pillar.subtitle}
                  </p>
                </div>

                <p className="leading-relaxed mb-6" style={{ color: colors.textSecondary }}>
                  {pillar.description}
                </p>

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
      <section className="py-20 px-6" style={{ background: `linear-gradient(to bottom right, ${colors.surface}, ${colors.background})` }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.text }}>
            准备好开始了吗？
          </h2>
          <p className="text-lg mb-8" style={{ color: colors.textSecondary }}>
            你的第一个案例，就是你自己。先把自己调理好，这是最硬核的信任背书。
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-full font-medium transition-all hover:scale-105"
            style={{ backgroundColor: colors.primary, color: "white", boxShadow: `0 8px 32px rgba(139, 115, 85, 0.2)` }}
          >
            联系我，开始咨询
          </Link>
        </div>
      </section>
    </div>
  );
}
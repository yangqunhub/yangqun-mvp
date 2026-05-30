import Link from "next/link";

const colors = {
  primary: "#8B7355",
  primaryLight: "#A68B6A",
  secondary: "#6B8E5A",
  background: "#FDFBF8",
  surface: "#F5F0EB",
  text: "#2D2A26",
  textSecondary: "#6B6560",
};

const serviceSteps = [
  { step: "01", title: "初诊咨询", description: "了解你的现状、痛点和目标，判断是否匹配", icon: "💬" },
  { step: "02", title: "全面评估", description: "从健康、财富、习惯等多维度深度诊断", icon: "🔍" },
  { step: "03", title: "方案设计", description: "基于评估结果，定制个性化系统方案", icon: "📐" },
  { step: "04", title: "数字交付", description: "用 AI 工具把方案变成你手机里的系统", icon: "💻" },
  { step: "05", title: "执行跟进", description: "灵活跟进节奏，建立及时反馈回路", icon: "🚀" },
];

const pillars = [
  { title: "健康支柱", subtitle: "身心复利的基础", description: "用食品科学管好肠道和炎症，用运动康复管好身体和疼痛，用正念管好情绪和注意力。", keywords: ["脑肠轴", "抗炎饮食", "运动康复", "正念"], color: "#6B8E5A", emoji: "🌿" },
  { title: "财富支柱", subtitle: "长期复利的引擎", description: "用复利思维管好资产和习惯，建立投资纪律，从收支结构到资产配置全面规划。", keywords: ["复利思维", "资产配置", "定投纪律", "投资日志"], color: "#8B7355", emoji: "💰" },
  { title: "数字建造", subtitle: "系统落地的工具", description: "用 AI 工具把方案变成你手机里的系统，让复杂的健康管理变得简单可执行。", keywords: ["vibe coding", "健康追踪", "习惯打卡", "资产看板"], color: "#5A7A8A", emoji: "⚡" },
];

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: colors.background }}>
      {/* Hero */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "5rem 1.5rem", background: `linear-gradient(to bottom right, ${colors.background}, ${colors.surface}, ${colors.background})` }}>
        <div style={{ maxWidth: "56rem", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1rem", marginBottom: "2rem", background: "rgba(255,255,255,0.7)", backdropFilter: "blur(20px)", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.3)" }}>
            <span style={{ width: "0.5rem", height: "0.5rem", backgroundColor: colors.secondary, borderRadius: "50%", animation: "pulse 2s infinite" }} />
            <span style={{ fontSize: "0.875rem", color: colors.textSecondary }}>正在服务真实客户</span>
          </div>

          <h1 style={{ fontSize: "2.25rem", fontWeight: "700", marginBottom: "1.5rem", color: colors.text }}>
            你好，我是杨泽群
          </h1>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "500", marginBottom: "2rem", color: colors.primary }}>
            健康复利导师 × 数字建造者
          </h2>
          <p style={{ fontSize: "1.125rem", lineHeight: "1.625", marginBottom: "3rem", color: colors.textSecondary }}>
            用食品科学管好你的身体，<br />用复利思维管好你的资产，<br />用 AI 工具管好你的系统。
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center" }}>
            <Link href="/services.html" style={{ display: "inline-block", padding: "1rem 2rem", backgroundColor: colors.primary, color: "white", borderRadius: "9999px", fontWeight: "500", boxShadow: `0 8px 32px rgba(139,115,85,0.2)` }}>
              了解服务流程
            </Link>
            <Link href="/about.html" style={{ display: "inline-block", padding: "1rem 2rem", background: "rgba(255,255,255,0.7)", backdropFilter: "blur(20px)", color: colors.text, borderRadius: "9999px", fontWeight: "500", border: "1px solid rgba(255,255,255,0.3)" }}>
              关于我
            </Link>
          </div>
        </div>
      </section>

      {/* 服务流程 */}
      <section style={{ padding: "5rem 1.5rem", backgroundColor: colors.surface }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.875rem", fontWeight: "700", textAlign: "center", marginBottom: "1rem", color: colors.text }}>
            我的服务流程
          </h2>
          <p style={{ textAlign: "center", maxWidth: "36rem", margin: "0 auto 4rem", color: colors.textSecondary }}>
            不是给你一个方案就结束，而是帮你构建一套会自己运转的系统
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
            {serviceSteps.map((step) => (
              <div key={step.step} style={{ padding: "1.5rem", background: "rgba(255,255,255,0.7)", backdropFilter: "blur(20px)", borderRadius: "1.25rem", border: "1px solid rgba(255,255,255,0.3)", boxShadow: "0 8px 32px rgba(139,115,85,0.1)", position: "relative" }}>
                <div style={{ position: "absolute", top: "-0.75rem", left: "1.5rem", padding: "0.25rem 0.75rem", fontSize: "0.75rem", fontWeight: "500", background: "rgba(255,255,255,0.7)", backdropFilter: "blur(20px)", borderRadius: "12px", color: colors.primary }}>
                  {step.step}
                </div>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{step.icon}</div>
                <h3 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "0.5rem", color: colors.text }}>{step.title}</h3>
                <p style={{ fontSize: "0.875rem", color: colors.textSecondary }}>{step.description}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "4rem", textAlign: "center" }}>
            <div style={{ display: "inline-block", padding: "1rem 2rem", background: "rgba(255,255,255,0.7)", backdropFilter: "blur(20px)", borderRadius: "1.25rem", border: "1px solid rgba(255,255,255,0.3)" }}>
              <p style={{ fontSize: "1.125rem", color: colors.text }}>
                <span style={{ fontWeight: "600", color: colors.primary }}>核心理念：</span>
                构建反馈系统，而不是设定目标
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 三大支柱 */}
      <section style={{ padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.875rem", fontWeight: "700", textAlign: "center", marginBottom: "1rem", color: colors.text }}>
            三大支柱系统
          </h2>
          <p style={{ textAlign: "center", maxWidth: "36rem", margin: "0 auto 4rem", color: colors.textSecondary }}>
            任何单一领域的人都没法跟你竞争，因为你的价值在跨领域的整合能力里
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {pillars.map((pillar) => (
              <div key={pillar.title} style={{ padding: "2rem", background: "rgba(255,255,255,0.7)", backdropFilter: "blur(20px)", borderRadius: "1.25rem", border: "1px solid rgba(255,255,255,0.3)", boxShadow: "0 8px 32px rgba(139,115,85,0.1)" }}>
                <div style={{ marginBottom: "1.5rem" }}>
                  <div style={{ width: "3rem", height: "3rem", borderRadius: "1rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", marginBottom: "1rem", backgroundColor: `${pillar.color}20` }}>
                    {pillar.emoji}
                  </div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "0.25rem", color: colors.text }}>{pillar.title}</h3>
                  <p style={{ fontSize: "0.875rem", color: colors.textSecondary }}>{pillar.subtitle}</p>
                </div>
                <p style={{ color: colors.textSecondary, marginBottom: "1.5rem", lineHeight: "1.625" }}>{pillar.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {pillar.keywords.map((kw) => (
                    <span key={kw} style={{ padding: "0.25rem 0.75rem", fontSize: "0.75rem", borderRadius: "9999px", backgroundColor: `${pillar.color}15`, color: pillar.color }}>
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 1.5rem", background: `linear-gradient(to bottom right, ${colors.surface}, ${colors.background})` }}>
        <div style={{ maxWidth: "48rem", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.875rem", fontWeight: "700", marginBottom: "1.5rem", color: colors.text }}>
            准备好开始了吗？
          </h2>
          <p style={{ fontSize: "1.125rem", marginBottom: "2rem", color: colors.textSecondary }}>
            你的第一个案例，就是你自己。先把自己调理好，这是最硬核的信任背书。
          </p>
          <Link href="/contact.html" style={{ display: "inline-block", padding: "1rem 2.5rem", backgroundColor: colors.primary, color: "white", borderRadius: "9999px", fontWeight: "500", boxShadow: `0 8px 32px rgba(139,115,85,0.2)` }}>
            联系我，开始咨询
          </Link>
        </div>
      </section>
    </div>
  );
}
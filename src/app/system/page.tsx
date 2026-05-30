const healthDetails = {
  core: "用食品科学管好肠道和炎症，用运动康复管好身体和疼痛，用正念管好情绪和注意力",
  methods: [
    { name: "脑肠轴理论", desc: "肠道是第二大脑，通过调节肠道菌群改善情绪和认知" },
    { name: "抗炎饮食", desc: "用食品科学知识设计低炎症饮食方案" },
    { name: "运动康复", desc: "解决慢性疼痛和体态问题" },
    { name: "正念心理学", desc: "训练专注力和情绪调节能力" },
  ],
  practice: "自我复利实验：每天记录饮食、运动、睡眠、正念，用3个月时间系统调整身体状态",
};

const wealthDetails = {
  core: "用复利思维管好资产和习惯，建立投资纪律，从收支结构到资产配置全面规划",
  methods: [
    { name: "复利思维", desc: "一切增长都来自持续积累，不追求暴富" },
    { name: "资产配置", desc: "根据风险偏好和生命周期制定投资策略" },
    { name: "定投纪律", desc: "每月固定金额定投，不受市场波动影响" },
    { name: "投资日志", desc: "记录每次操作和情绪，建立行为反馈" },
  ],
  practice: "每月500元定投沪深300+中证500，已持续积累投资日志",
};

const digitalDetails = {
  core: "用 AI 工具把方案变成你手机里的系统，让复杂的健康管理变得简单可执行",
  methods: [
    { name: "vibe coding", desc: "用 AI 辅助编程，快速交付数字工具" },
    { name: "健康追踪", desc: "饮食/运动/睡眠数据记录与可视化" },
    { name: "习惯打卡", desc: "自定义习惯+连续打卡+数据导出" },
    { name: "资产看板", desc: "收支/储蓄/投资一体化仪表盘" },
  ],
  practice: "已开发营养追踪器、习惯打卡系统等可交付工具",
};

export default function SystemPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
            我的系统
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            三大支柱构建的复合增长系统，每一个支柱都是你长期复利的一部分
          </p>
        </section>

        {/* 健康支柱 */}
        <section className="mb-16">
          <div className="glass p-8 md:p-10">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-[#6B8E5A]/10 flex items-center justify-center text-3xl flex-shrink-0">
                🌿
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[var(--color-text)] mb-2">健康支柱</h2>
                <p className="text-sm text-[#6B8E5A] font-medium">身心复利的基础</p>
              </div>
            </div>

            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
              {healthDetails.core}
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {healthDetails.methods.map((item) => (
                <div key={item.name} className="p-4 rounded-xl bg-[#6B8E5A]/5">
                  <h4 className="font-semibold text-[var(--color-text)] mb-1">{item.name}</h4>
                  <p className="text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[var(--color-surface)]">
              <p className="text-sm text-[var(--color-text-secondary)]">
                <span className="font-semibold text-[var(--color-text)]">我的实践：</span>
                {healthDetails.practice}
              </p>
            </div>
          </div>
        </section>

        {/* 财富支柱 */}
        <section className="mb-16">
          <div className="glass p-8 md:p-10">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-[#8B7355]/10 flex items-center justify-center text-3xl flex-shrink-0">
                💰
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[var(--color-text)] mb-2">财富支柱</h2>
                <p className="text-sm text-[#8B7355] font-medium">长期复利的引擎</p>
              </div>
            </div>

            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
              {wealthDetails.core}
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {wealthDetails.methods.map((item) => (
                <div key={item.name} className="p-4 rounded-xl bg-[#8B7355]/5">
                  <h4 className="font-semibold text-[var(--color-text)] mb-1">{item.name}</h4>
                  <p className="text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[var(--color-surface)]">
              <p className="text-sm text-[var(--color-text-secondary)]">
                <span className="font-semibold text-[var(--color-text)]">我的实践：</span>
                {wealthDetails.practice}
              </p>
            </div>
          </div>
        </section>

        {/* 数字建造支柱 */}
        <section className="mb-16">
          <div className="glass p-8 md:p-10">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-[#5A7A8A]/10 flex items-center justify-center text-3xl flex-shrink-0">
                ⚡
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[var(--color-text)] mb-2">数字建造支柱</h2>
                <p className="text-sm text-[#5A7A8A] font-medium">系统落地的工具</p>
              </div>
            </div>

            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
              {digitalDetails.core}
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {digitalDetails.methods.map((item) => (
                <div key={item.name} className="p-4 rounded-xl bg-[#5A7A8A]/5">
                  <h4 className="font-semibold text-[var(--color-text)] mb-1">{item.name}</h4>
                  <p className="text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[var(--color-surface)]">
              <p className="text-sm text-[var(--color-text-secondary)]">
                <span className="font-semibold text-[var(--color-text)]">我的实践：</span>
                {digitalDetails.practice}
              </p>
            </div>
          </div>
        </section>

        {/* 核心理念 */}
        <section className="text-center">
          <div className="glass p-8 md:p-12">
            <p className="text-2xl md:text-3xl text-[var(--color-text)] font-medium">
              "构建系统，而不是设定目标。"
            </p>
            <p className="text-[var(--color-text-secondary)] mt-4">
              目标是你想去的地方。系统是你每天实际在做的事。
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
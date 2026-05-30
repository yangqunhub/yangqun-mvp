const serviceProcess = [
  {
    step: "01",
    title: "初诊咨询",
    subtitle: "免费 · 30分钟",
    description: "这是我们第一次正式沟通。我会了解你的现状、痛点和目标，判断我们是否匹配。",
    details: [
      "了解你的身体状态、饮食习惯、睡眠质量",
      "了解你的财务状况、消费习惯、投资经验",
      "了解你的习惯坚持情况、失败模式",
      "明确你的核心需求和期望目标",
    ],
    icon: "💬",
    color: "#6B8E5A",
  },
  {
    step: "02",
    title: "全面评估",
    subtitle: "深度诊断 · 1-2周",
    description: "基于初诊结果，我会从多个维度对你进行深度评估，建立你的个人档案。",
    details: [
      "健康维度：饮食结构分析、睡眠质量评估、精力水平追踪",
      "财富维度：收支结构分析、储蓄率诊断、投资认知评估",
      "习惯维度：现有习惯盘点、坚持失败模式识别、反馈机制诊断",
    ],
    icon: "🔍",
    color: "#8B7355",
  },
  {
    step: "03",
    title: "方案设计",
    subtitle: "个性化定制",
    description: "基于评估结果，我会为你设计一套个性化的系统方案，包括阶段目标和每日行动。",
    details: [
      "分阶段目标设定：里程碑 + 每日行动清单",
      "配套工具选型：健康追踪 / 资产看板 / 习惯打卡",
      "反馈机制设计：让进步可感知、可追踪",
    ],
    icon: "📐",
    color: "#5A7A8A",
  },
  {
    step: "04",
    title: "数字交付",
    subtitle: "系统上线 · 3-5天",
    description: "这是我的核心差异化能力——我会用 AI 工具把方案变成你手机里可以实际使用的系统。",
    details: [
      "健康追踪仪表盘：饮食/睡眠/体态数据可视化",
      "习惯打卡系统：自定义习惯 + 连续打卡 + 数据导出",
      "个人资产看板：收支/储蓄/投资一体化",
      "每日/每周复盘模板：让反馈及时可见",
    ],
    icon: "💻",
    color: "#7A5A8A",
  },
  {
    step: "05",
    title: "执行跟进",
    subtitle: "持续陪伴 · 灵活调整",
    description: "方案交付不是结束，而是开始。我会持续跟进你的执行情况，及时调整方案。",
    details: [
      "灵活跟进节奏：按需调整，不一刀切",
      "周期复盘与迭代：每周/每月回顾与优化",
      "及时反馈回路：让你时刻知道自己在进步",
    ],
    icon: "🚀",
    color: "#5A8A7A",
  },
];

const products = [
  {
    name: "入门营",
    duration: "4周",
    price: "¥999",
    description: "适合想要开始改变、尝试系统性调整的你",
    features: [
      "1次初诊咨询（60分钟）",
      "全面评估报告",
      "个性化方案设计",
      "基础数字工具配置",
      "4周跟进（每周1次）",
    ],
    color: "#6B8E5A",
  },
  {
    name: "深度陪伴",
    duration: "3个月",
    price: "¥2,980",
    description: "适合想要深入改变、建立长期习惯的你",
    features: [
      "1次深度初诊（90分钟）",
      "完整评估报告 + 个人档案",
      "分阶段方案设计",
      "全套数字工具定制",
      "3个月跟进（每两周1次）",
      "期间方案迭代优化",
    ],
    color: "#8B7355",
    highlight: true,
  },
  {
    name: "年费顾问",
    duration: "12个月",
    price: "¥9,800",
    description: "适合想要全面升级生命质量、长期陪伴的你",
    features: [
      "全年无限次咨询",
      "持续更新的评估报告",
      "动态迭代的系统方案",
      "全套高级数字工具",
      "优先响应 + 专属通道",
      "季度深度复盘",
      "个人品牌背书推荐",
    ],
    color: "#5A7A8A",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
            服务流程
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            不是给你一个方案就结束，而是帮你构建一套会自己运转的系统
          </p>
        </section>

        {/* 服务流程 */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-8">服务流程详解</h2>

          <div className="space-y-6">
            {serviceProcess.map((step, index) => (
              <div key={step.step} className="glass p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* 图标和步骤号 */}
                  <div className="flex items-center gap-4 md:flex-col md:items-center md:w-24">
                    <div className="text-4xl">{step.icon}</div>
                    <div className="md:hidden text-sm text-[var(--color-text-secondary)]">{step.subtitle}</div>
                    <div
                      className="hidden md:flex w-10 h-10 rounded-full items-center justify-center text-white font-bold text-sm"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.step}
                    </div>
                  </div>

                  {/* 内容 */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-[var(--color-text)]">{step.title}</h3>
                        <p className="text-sm text-[var(--color-text-secondary)] md:hidden">{step.subtitle}</p>
                      </div>
                      <div
                        className="hidden md:block px-4 py-1 rounded-full text-sm"
                        style={{ backgroundColor: `${step.color}15`, color: step.color }}
                      >
                        {step.subtitle}
                      </div>
                    </div>

                    <p className="text-[var(--color-text-secondary)] mb-4">{step.description}</p>

                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                          <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: step.color }} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 服务产品 */}
        <section>
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-8 text-center">服务产品</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.name}
                className={`glass p-6 ${product.highlight ? "ring-2 ring-[var(--color-primary)]" : ""}`}
              >
                {product.highlight && (
                  <div className="text-center mb-4">
                    <span className="inline-block px-3 py-1 bg-[var(--color-primary)] text-white text-xs rounded-full">
                      推荐
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">{product.name}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-4">{product.description}</p>
                  <div className="text-3xl font-bold" style={{ color: product.color }}>
                    {product.price}
                    <span className="text-sm font-normal text-[var(--color-text-secondary)]">/{product.duration}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: product.color }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-[var(--color-text-secondary)] mt-8">
            扫码联系，了解更多关于服务的细节 👇
          </p>
        </section>
      </div>
    </div>
  );
}
const milestones = [
  {
    year: "大一",
    season: "2026",
    title: "起点：完成第一个产品——你自己",
    items: [
      "自我复利实验：用「身+脑+肠+心」框架，给自己做3个月系统调整",
      "第一个数字工具：营养追踪器 / 习惯打卡器 / 资产看板（选一个）",
      "投资纪律建立：每月500元定投沪深300+中证500",
      "公众号启动：每周一篇，写实验过程和学到的东西",
    ],
    color: "#6B8E5A",
  },
  {
    year: "大二",
    season: "2026-2027",
    title: "积累：知识系统化 + 第一个外部客户",
    items: [
      "个人网站上线：展示你的框架、案例、写作",
      "注册营养师备考：系统学习营养学教材",
      "第一个免费客户：找一个有明确需求的人，服务2-3个月",
      "数字工具迭代：从单页面到多页面，能力升级",
    ],
    color: "#8B7355",
  },
  {
    year: "大三",
    season: "2027-2028",
    title: "突破：第一个付费产品 + 商业化验证",
    items: [
      "第一个付费产品：「4周身心复利入门营」，收费象征性",
      "服务流程标准化：入门营 / 深度陪伴 / 年费顾问三档",
      "案例积累：累计服务20+付费客户",
      "数字产品矩阵：至少3个可用工具上线",
    ],
    color: "#5A7A8A",
  },
  {
    year: "大四",
    season: "2028-2029",
    title: "毕业：验证闭环 + 方向确定",
    items: [
      "副业年收入5-10万：验证商业闭环",
      "个人品牌：网站 + 公众号 + 私域圈子",
      "毕业去向决策：全职创业 / 就业 / 读研",
      "深度复盘：写一篇「大学四年」的行业复盘",
    ],
    color: "#7A5A8A",
  },
];

export default function JourneyPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
            成长轨迹
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            从结果倒推过程，先定义毕业那天的你，再一步步拆回今天
          </p>
        </section>

        {/* 时间线 */}
        <section>
          <div className="relative">
            {/* 连接线 */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-primary)]/20 via-[var(--color-primary)]/40 to-[var(--color-primary)]/20" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative flex gap-8">
                  {/* 时间节点 */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-sm"
                      style={{ backgroundColor: milestone.color }}
                    >
                      {milestone.year}
                    </div>
                  </div>

                  {/* 内容卡片 */}
                  <div className="flex-1 glass p-6 md:p-8">
                    <div className="mb-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <h3 className="text-xl font-bold text-[var(--color-text)]">
                          {milestone.title}
                        </h3>
                        <span
                          className="text-sm px-3 py-1 rounded-full"
                          style={{ backgroundColor: `${milestone.color}15`, color: milestone.color }}
                        >
                          {milestone.season}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {milestone.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-[var(--color-text-secondary)]">
                          <svg
                            className="w-5 h-5 flex-shrink-0 mt-0.5"
                            style={{ color: milestone.color }}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 终点状态 */}
        <section className="mt-20">
          <div className="glass p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
              22岁的毕业状态
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="p-4 rounded-xl bg-[var(--color-surface)]">
                <p className="text-[var(--color-text-secondary)]">
                  <span className="font-semibold text-[var(--color-text)]">累计服务：</span>
                  付费客户 20+，深度年费客户 3-5
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--color-surface)]">
                <p className="text-[var(--color-text-secondary)]">
                  <span className="font-semibold text-[var(--color-text)]">副业收入：</span>
                  年收入 5-10 万
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--color-surface)]">
                <p className="text-[var(--color-text-secondary)]">
                  <span className="font-semibold text-[var(--color-text)]">个人品牌：</span>
                  网站 + 公众号 + 私域
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--color-surface)]">
                <p className="text-[var(--color-text-secondary)]">
                  <span className="font-semibold text-[var(--color-text)]">核心能力：</span>
                  食品科学 × 复利 × 数字建造
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-secondary)]/5">
              <p className="text-lg text-[var(--color-text)]">
                "杨泽群？他挺有意思的。学食品的，但用脑肠轴帮人调理身体，还懂投资和资产配置，能给你搭健康管理系统。不是那种割韭菜的——<strong>他自己就是第一个案例</strong>。"
              </p>
            </div>
          </div>
        </section>

        {/* 核心理念 */}
        <section className="mt-12 text-center">
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
export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
            关于我
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)]">
            一个正在构建"身心复利系统"的食品科学学生
          </p>
        </section>

        {/* 我的故事 */}
        <section className="mb-20">
          <div className="glass p-8 md:p-12">
            <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
              我的故事
            </h2>
            <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
              <p>
                我是杨泽群，华中农业大学食品科学与工程专业的学生。
              </p>
              <p>
                和大多数大学生一样，我曾经也走过一条"标准路径"——上课、考试、拿绩点。但慢慢地，我发现一个问题：这套系统给我们的反馈，几乎全都是结果反馈。考得好是成功，考得差是失败。我们被训练成了一种模式：等别人告诉我，我做得好不好。
              </p>
              <p>
                后来我开始做一件看起来没什么了不起的事：我给自己建了一个基于事物内在价值的价值评判系统。我去阅读，不是因为读完能考多少分，而是因为读完之后我的认知确实开阔了一点；我去锻炼，不是因为要练出什么身材，而是因为练完之后我的身体告诉我它更舒服了。
              </p>
              <p>
                慢慢地，我开始形成一个想法：为什么不能把这种"系统思维"带给更多人？
              </p>
              <p>
                于是我开始学习食品科学、运动康复、正念心理学、投资理财，还有数字工具建造。我发现，真正有价值的不在任何单一领域里，而在它们的交叉地带——这就是我现在的定位：<strong className="text-[var(--color-text)]">跨领域整合的健康复利顾问</strong>。
              </p>
            </div>
          </div>
        </section>

        {/* 我的三个标签 */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-8 text-center">
            我的三个标签
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#6B8E5A]/10 flex items-center justify-center text-3xl">
                🔬
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">食品科学家</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                科班出身，用食品科学管好肠道和炎症
              </p>
            </div>
            <div className="glass p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#8B7355]/10 flex items-center justify-center text-3xl">
                💰
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">复利规划师</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                用复利思维管好资产和习惯
              </p>
            </div>
            <div className="glass p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#5A7A8A]/10 flex items-center justify-center text-3xl">
                ⚡
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">数字建造者</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                用 AI 工具把系统变成你手机里的应用
              </p>
            </div>
          </div>
        </section>

        {/* 为什么是我 */}
        <section className="mb-20">
          <div className="glass p-8 md:p-12">
            <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
              为什么是我
            </h2>
            <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
              <p>
                传统营养师只会讲吃什么，传统健身教练只会讲怎么练，传统理财顾问只会讲怎么投，传统程序员只会写代码。
              </p>
              <p className="font-medium text-[var(--color-text)]">
                我：把四个打通。
              </p>
              <p>
                "我用食品科学管好你的肠道和炎症，用运动康复管好你的身体和疼痛，用正念管好你的情绪和注意力，用复利思维管好你的资产和习惯，用 AI 工具把这些全部变成你手机里的系统。"
              </p>
              <p>
                任何单一领域的人都没法跟我竞争，因为你的价值不在任何一个单一领域里，而在<strong className="text-[var(--color-primary)]">跨领域的整合能力</strong>里。
              </p>
            </div>
          </div>
        </section>

        {/* 核心信念 */}
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
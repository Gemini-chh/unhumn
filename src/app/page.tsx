const learningLogs = [
  {
    date: "Log 001",
    title: "Learning how AI tools think",
    text: "记录第一次理解提示词、上下文和模型输出之间的关系。",
  },
  {
    date: "Log 002",
    title: "Building a website from zero",
    text: "学习 Next.js、Tailwind CSS、组件结构和本地运行流程。",
  },
  {
    date: "Log 003",
    title: "Exploring visual AI workflows",
    text: "尝试用文字描述生成视觉作品，并整理自己的创作方法。",
  },
];

const projects = [
  {
    title: "AI Prompt Experiments",
    text: "A collection of prompt tests, workflows, and small discoveries.",
  },
  {
    title: "Personal Portfolio Website",
    text: "The first public home for my AI learning path and creative work.",
  },
  {
    title: "Creative AI Image Projects",
    text: "Visual experiments made with AI tools, references, and iteration.",
  },
];

const contacts = [
  { label: "Email", href: "mailto:hello@example.com", value: "hello@example.com" },
  { label: "GitHub", href: "https://github.com/yourname", value: "github.com/yourname" },
  { label: "Social", href: "https://example.com", value: "@yourhandle" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100">
      <header className="sticky top-0 z-10 border-b border-white/10 bg-[#050505]/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a className="font-mono text-sm font-semibold tracking-[0.28em]" href="#">
            UNHUMN
          </a>
          <div className="hidden items-center gap-6 text-sm text-zinc-400 sm:flex">
            <a className="transition hover:text-zinc-100" href="#about">
              About
            </a>
            <a className="transition hover:text-zinc-100" href="#learning">
              Learning
            </a>
            <a className="transition hover:text-zinc-100" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-zinc-100" href="#contact">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <section className="flex min-h-[72vh] flex-col justify-center border-b border-white/10 py-24">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.35em] text-zinc-500">
            Personal AI Lab / unhumn.cn
          </p>
          <h1 className="text-6xl font-semibold tracking-tight text-white sm:text-8xl">
            UNHUMN
          </h1>
          <p className="mt-6 max-w-2xl text-2xl leading-tight text-zinc-300">
            Building my AI portfolio from zero.
          </p>
          <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            一个记录 AI 学习、提示词实验、视觉创作与个人项目的作品集网站。
          </p>
        </section>

        <section id="about" className="grid gap-10 border-b border-white/10 py-20 md:grid-cols-[0.8fr_1.2fr]">
          <SectionLabel number="01" title="About" />
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              从零开始，把学习过程变成作品。
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
              我是一个正在从零学习 AI 创作与网站开发的人。这个网站会持续记录我的学习路线、提示词实验、视觉创作练习，以及逐步完成的个人项目。
            </p>
          </div>
        </section>

        <section id="learning" className="border-b border-white/10 py-20">
          <SectionLabel number="02" title="Learning Log" />
          <div className="mt-10 grid gap-4">
            {learningLogs.map((item) => (
              <article
                className="grid gap-4 border border-white/10 bg-white/[0.03] p-6 sm:grid-cols-[140px_1fr]"
                key={item.title}
              >
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-zinc-500">
                  {item.date}
                </p>
                <div>
                  <h3 className="text-xl font-medium text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-400">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="border-b border-white/10 py-20">
          <SectionLabel number="03" title="Projects" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <article
                className="min-h-56 border border-white/10 bg-zinc-950 p-6 transition hover:border-white/30"
                key={project.title}
              >
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-zinc-600">
                  Project
                </p>
                <h3 className="mt-8 text-2xl font-semibold tracking-tight text-white">
                  {project.title}
                </h3>
                <p className="mt-4 leading-7 text-zinc-400">{project.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="py-20">
          <SectionLabel number="04" title="Contact" />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {contacts.map((contact) => (
              <a
                className="border border-white/10 p-6 text-zinc-400 transition hover:border-white/30 hover:text-white"
                href={contact.href}
                key={contact.label}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-zinc-600">
                  {contact.label}
                </p>
                <p className="mt-4 break-words text-lg">{contact.value}</p>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center font-mono text-xs uppercase tracking-[0.24em] text-zinc-600">
        UNHUMN / Future domain: unhumn.cn
      </footer>
    </div>
  );
}

function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-xs text-zinc-600">{number}</span>
      <h2 className="font-mono text-sm uppercase tracking-[0.3em] text-zinc-400">
        {title}
      </h2>
    </div>
  );
}

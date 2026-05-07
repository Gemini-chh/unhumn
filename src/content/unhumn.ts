export type Language = "en" | "cn";

export const copy = {
  en: {
    nav: ["Archive", "Experiments", "About", "Signals"],
    intro: ["SOFT ARCHIVE OPENING", "A IS ABSENT", "THE SELF IS STILL FORMING"],
    reconstructing: "TEXT GENTLY REFORMING",
    hero: {
      title: "UNHUMN",
      lines: [
        "An archive of an unfinished human,",
        "learning how to understand the world",
        "and how to rebuild the self.",
      ],
    },
    enterArchive: "Enter Archive",
    about: {
      eyebrow: "The Missing Letter",
      title: "A is absent. The self is still forming.",
      lines: [
        "UNHUMN looks like Unhuman, but intentionally leaves out an “a”.",
        "The absence is not a mistake, and it is not a cold gesture.",
        "It is a breathing blank, a quiet proof of incompletion, and a trace of someone slowly learning to grow again.",
        "This is not a record of completion. It is a process of repair.",
        "Not an answer, but a way of understanding the world again.",
      ],
    },
    archive: {
      title: "Archive",
      lines: [
        "Some years, some images,",
        "some moments that have not been fully explained.",
        "They float like fragments of memory,",
        "and remain like quiet evidence:",
        "of seeing, feeling, losing, repairing,",
        "and slowly becoming the self.",
      ],
      items: [
        {
          year: "2021",
          title: "First Light",
          type: "Visual Diary",
          text: "A quiet beginning, trying to give shape to the weather inside.",
        },
        {
          year: "2022",
          title: "Soft Repair",
          type: "Image Study",
          text: "A slow practice of healing through blurred edges and warm light.",
        },
        {
          year: "2023",
          title: "Memory Index",
          type: "Archive System",
          text: "Fragments arranged into a slow map of becoming.",
        },
        {
          year: "2024",
          title: "Rebuilding Self",
          type: "Interface Poem",
          text: "A digital space where the self learns to breathe again.",
        },
      ],
    },
    experiments: {
      title: "Experiments",
      lines: [
        "A place for unresolved attempts:",
        "the movement of light, the edge of images,",
        "the breathing of interfaces, the echo of words.",
        "They are not final answers,",
        "but temporary ways of observing the world.",
      ],
      items: ["Motion", "Images", "Interface", "Writing", "Memory", "Self Repair"],
    },
    signals: {
      title: "Signals",
      lines: ["If you are also rebuilding a kind of light,", "meet me here."],
      items: [
        { label: "Email", value: "open.im@qq.com", href: "mailto:open.im@qq.com" },
        {
          label: "Xiaohongshu",
          value: "imroye",
          href: "https://www.xiaohongshu.com/user/profile/630b727e0000000012001b24",
        },
        { label: "Douyin", value: "imroye", href: "https://www.douyin.com/user/self" },
        { label: "WeChat", value: "opeicc" },
      ],
    },
  },
  cn: {
    nav: ["档案", "实验", "关于", "信号"],
    intro: ["柔软档案开启", "A 暂时缺席", "自我仍在形成"],
    reconstructing: "文字正在轻轻重组",
    hero: {
      title: "UNHUMN",
      lines: ["记录一个未完成的人类，", "如何理解世界，", "也如何重构自己。"],
    },
    enterArchive: "进入档案",
    about: {
      eyebrow: "缺失的字母",
      title: "A 缺席着，自我仍在形成。",
      lines: [
        "UNHUMN 就像非人类，却故意缺少一个 a。",
        "这个缺失不是错误，也不是冷酷的姿态。",
        "它是一处仍在呼吸的空白，是一段尚未完成的证据，是一个人试着重新生长的痕迹。",
        "这里记录的不是完整，而是修复的过程。",
        "不是答案，而是重新理解世界的方式。",
      ],
    },
    archive: {
      title: "档案",
      lines: [
        "一些年份，一些图像，",
        "一些尚未被完全解释的时刻。",
        "它们像记忆碎片一样漂浮，",
        "也像证据一样保存下来：",
        "关于观看、感受、失去、修复，",
        "以及一个人如何慢慢成为自己。",
      ],
      items: [
        {
          year: "2021",
          title: "第一束光",
          type: "视觉日记",
          text: "一次安静的开始，试着为内在的天气赋形。",
        },
        {
          year: "2022",
          title: "柔软修复",
          type: "图像实验",
          text: "通过模糊边缘与暖光，练习一种缓慢的愈合。",
        },
        {
          year: "2023",
          title: "记忆索引",
          type: "档案系统",
          text: "将碎片整理成一张关于成为自己的缓慢地图。",
        },
        {
          year: "2024",
          title: "重构自己",
          type: "界面诗",
          text: "一个让自我重新学会呼吸的数字空间。",
        },
      ],
    },
    experiments: {
      title: "实验",
      lines: [
        "这里存放一些尚未定型的尝试：",
        "光的运动，图像的边缘，",
        "界面的呼吸，文字的回声。",
        "它们不是最终答案，",
        "而是观察世界的临时方法。",
      ],
      items: ["运动", "图像", "界面", "写作", "记忆", "自我修复"],
    },
    signals: {
      title: "信号",
      lines: ["如果你也在重构某种光，", "欢迎与我相遇。"],
      items: [
        { label: "邮箱", value: "open.im@qq.com", href: "mailto:open.im@qq.com" },
        {
          label: "小红书",
          value: "imroye",
          href: "https://www.xiaohongshu.com/user/profile/630b727e0000000012001b24",
        },
        { label: "抖音", value: "imroye", href: "https://www.douyin.com/user/self" },
        { label: "微信", value: "opeicc" },
      ],
    },
  },
} as const;

export const navTargets = ["#archive", "#experiments", "#about", "#signals"];

/** Bilingual copy for applymaster page. Keys used with ApplymasterComponent.txt(key). */
export type PageLang = 'zh' | 'en';

export type Bilingual = { zh: string; en: string };

export const PAGE_I18N: Record<string, Bilingual> = {

  navHome: { zh: '首页', en: 'Home' },
  navUndergrad: { zh: '本科申请', en: 'Undergraduate' },
  navGrad: { zh: '硕士申请', en: "Master's" },
  navCareer: { zh: '求职辅导', en: 'Career' },
  navLogin: { zh: '学生登录', en: 'Student login' },
  loginPortal: { zh: '申请系统登录入口', en: 'Application portal sign-in' },
  loginBtn: { zh: 'Log In', en: 'Log In' },

  heroEyebrow: { zh: '研究生申请咨询', en: 'Graduate School Admissions Counseling' },
  heroL1: { zh: 'Michi：', en: 'Michi:' },
  heroL2: { zh: '顶尖研究生申请', en: 'PREMIER GRADUATE SCHOOL' },
  heroL3: { zh: '全程辅导服务', en: 'ADMISSIONS COUNSELING' },
  heroL4: { zh: '', en: 'SERVICES' },
  heroLeadBefore: { zh: 'Michi 为希望进入', en: 'Michi provides ' },
  heroLeadU: { zh: '高度选拔性研究生项目', en: 'graduate school admissions consulting' },
  heroLeadAfter: {
    zh: '的学生提供辅导，方向包括：MBA、法学院、医学院、博士、文学硕士等。',
    en: ' to students seeking admission to highly selective graduate programs, including: MBA, Law School, Medical School, Ph.D, MA.',
  },

  svcHeading: {
    zh: '面向高度选拔性项目的研究生申请辅导',
    en: 'Graduate Admissions Counseling for Highly Selective Programs',
  },
  svcIntro: {
    zh: '对研究生申请者，我们有一条基本原则：你必须清楚自己想读什么。我们不是人生教练，而是申请策略与执行上的专业伙伴。',
    en: 'Our one governing principle for graduate applicants? That’s easy. You must know what you wish to study. We are not a life coach!',
  },
  expandAll: { zh: '全部展开', en: 'Expand all' },
  collapseAll: { zh: '全部收起', en: 'Collapse all' },

  step1Label: { zh: '第一步', en: 'Step 1' },
  step1Title: { zh: '选校与项目清单', en: 'School & program list' },
  step1Lead: {
    zh: '在文书与截止日之前，先要搞清楚你要申请「哪里」。本阶段我们会与你一起——通常不止一次面谈——共同拟定目标院校与具体项目清单，使其贴合你的学业背景、职业方向、风险承受度与时间线，让你对后续文书、推荐人与标化选择都有清晰抓手。',
    en: 'Before essays and deadlines, you need a clear picture of where you are applying. In this step, we work with you—often over more than one working session—to co-develop a focused list of target graduate schools and concrete programs that fit your academic record, career direction, risk tolerance, and timeline. The goal is a plan you trust, so every later choice in essays, recommenders, and tests lines up with schools that truly make sense for you.',
  },
  step1d1t: { zh: '对齐目标与约束条件', en: 'Align on goals and constraints' },
  step1d1p: {
    zh: '先厘清专业领域、长短期职业目标、地区偏好、预算与奖学金需求，以及签证或家庭因素，避免只做「排名驱动」的空泛名单。',
    en: 'We start by clarifying your field, short- and long-term career aims, preferred regions, budget and scholarship needs, and any visa or family considerations. That context keeps the list honest and actionable—not a random wish list driven only by rankings.',
  },
  step1d2t: { zh: '搭建有梯度的项目组合', en: 'Build a balanced portfolio of programs' },
  step1d2p: {
    zh: '将项目分为冲刺、匹配与稳妥等层级，既不过度保守也不孤注一掷；结合你的个人画像讨论「平衡」意味着什么。',
    en: 'Together we group options into reach, match, and foundation tiers so you are neither selling yourself short nor setting an all-or-nothing application season. We discuss what “balance” means for your profile, not a generic template.',
  },
  step1d3t: { zh: '超越校名看项目', en: 'Compare programs beyond the name' },
  step1d3p: {
    zh: '对每一个重点候选项目，从课程设置、班级规模、师资与科研契合、就业支持、学制与典型去向等维度理解「你将要读的是什么」。',
    en: 'For each serious contender we look at curriculum structure, cohort size, faculty and research fit, career services, timelines, and typical outcomes—so you understand what you are signing up for, not just the brand on the diploma.',
  },
  step1d4t: { zh: '确定工作清单与下一步', en: 'Lock a working list and next steps' },
  step1d4p: {
    zh: '结束时你会带走书面工作清单（含主申与备选）、大致申请顺序，以及待核实事项：截止日、先修、标化与材料缺口等。',
    en: 'You leave Step 1 with a documented working list (usually including a primary set and alternates), rough application order, and a checklist of what to verify next—deadlines, prerequisites, tests, and any gaps to close before drafting materials.',
  },

  step2Label: { zh: '第二步', en: 'Step 2' },
  step2Title: { zh: '策略面谈', en: 'Strategy session' },
  step2Lead: {
    zh: '在一小时策略面谈中，我们将与研究生申请者一起完成：',
    en: 'During the one-hour Strategy Session with graduate school applicants, we:',
  },
  step2d1t: { zh: '梳理有说服力的叙事主线', en: 'Brainstorm a compelling narrative' },
  step2d1p: {
    zh: '如何向招生委呈现你的故事至关重要。我们会帮你聚焦「该讲什么、不该讲什么」，基于你至今的经历与证据。',
    en: 'How you position your story to graduate admissions committees is critical in the admissions process. We’ll help you zero in on what story you should be telling, based on your experiences to date, and what story you should not be telling.',
  },
  step2d2t: { zh: '标化与选课建议', en: 'Offer recommendations on testing and courses' },
  step2d2p: {
    zh: '建议考哪些、是否重考，以强化你在高度选拔项目中的竞争力；若仍在本科阶段，也会反馈选课如何更有利于目标研究生方向。',
    en: 'We’ll let you know which tests you should take (or take again) to optimize your case for admission to highly selective graduate programs. If you’re still in college, we’ll offer feedback on your course selection to better position you for admission to top graduate programs in your field of choice.',
  },
  step2d3t: { zh: '项目筛选', en: 'Program selection' },
  step2d3p: {
    zh: '结合简历、成绩单、标化等，明确哪些项目应重点争取、哪些应排除。',
    en: 'You’ll find out which programs you should have in your sights and which programs you should rule out based on your CV, college transcript, testing, and more.',
  },

  step3Label: { zh: '第三步', en: 'Step 3' },
  step3Title: { zh: '全程成果包', en: 'Deliverables · Full suite' },
  step3Lead: {
    zh: '在全程方案中，我们协助你系统优化至少三个研究生项目的申请材料，包括但不限于：',
    en: 'Through the Full Suite option, each graduate applicant receives assistance with everything that goes into optimizing their cases for admission to a minimum of three graduate programs, including:',
  },
  step3d1t: { zh: '个人陈述（SOP/PS）', en: 'Statement of purpose' },
  step3d1p: {
    zh: '协助打磨能打动招生委的叙事主线。',
    en: 'We’ll help you craft a narrative that will wow graduate admissions committees.',
  },
  step3d2t: { zh: '补充文书', en: 'Supplemental essays' },
  step3d2p: {
    zh: '针对不同项目的附加文书，展示真实兴趣与契合度——而不是简单堆砌教授或课程名字。',
    en: 'As each program has its own unique supplemental essays, we’ll help you showcase your interest in each particular program. And, no, dropping the names of professors or classes is not a genuine expression of interest.',
  },
  step3d3t: { zh: '简历重塑', en: 'Resumé redrafting' },
  step3d3p: {
    zh: '工作与研究经历的表述方式决定印象；我们帮你写出能讲故事的简历。',
    en: 'How you describe your work experiences and activities matters. We’ll help you craft a resumé that tells your story.',
  },
  step3d4t: { zh: '面试准备', en: 'Interview prep' },
  step3d4p: {
    zh: '一对一演练，让你能清晰、有感染力地讲述自己的故事。',
    en: 'We’ll prepare you to tell your story in a compelling way that inspires admissions committees to want to root for you.',
  },
  step3d5t: { zh: '推荐信与套磁', en: 'Letters of recommendation' },
  step3d5p: {
    zh: '避免「泛泛而要」的推荐信；我们帮你准备可转述给推荐人的要点，使推荐信更有力度。',
    en: 'Simply asking professors or employers for letters of recommendation is how graduate applicants end up with generic letters. We give our students stories that they then share with their professors and employers so their recommendations become more powerful.',
  },

  pkgTitle: { zh: '硕士申请 · 服务套餐一览', en: "Master's applications · Service packages" },
  pkgSub: {
    zh: '半 DIY 与全程服务两种路径，覆盖文书、表格、面试等核心环节 — 按你的自主程度与预算选择即可。',
    en: 'Semi-DIY and full-service tracks covering essays, forms, interviews, and more—choose what fits your independence level and budget.',
  },
  pkgH1: { zh: '服务内容', en: 'Service' },
  pkgH2: { zh: '半 DIY 服务（不包括填表）', en: 'Semi-DIY (no form filling)' },
  pkgH3: { zh: '全程服务（包括填表）', en: 'Full service (incl. forms)' },
  pkgR1a: { zh: '基础信息咨询', en: 'Basic advising' },
  pkgR1b: { zh: '可咨询至第2年4月1日', en: 'Through Apr 1 of year 2' },
  pkgR1c: { zh: '不限次数，随时答疑', en: 'Unlimited Q&A' },
  pkgR2a: { zh: '院校与专业选择建议', en: 'School & program guidance' },
  pkgR2b: { zh: '可推荐最多3个申请方向', en: 'Up to 3 directions' },
  pkgR2c: { zh: '不限方向，可动态调整', en: 'Unlimited; adjust as needed' },
  pkgR3a: { zh: '个人陈述 / 动机信（SOP/PS）', en: 'SOP / PS writing' },
  pkgR3b: { zh: '提供1–2篇母板，学生根据项目情况自己调整', en: '1–2 templates; you tailor' },
  pkgR3c: { zh: '老师协助深度修改至满意，不限篇数', en: 'Deep edits until satisfied; unlimited' },
  pkgR4a: { zh: '申请表格填写', en: 'Application forms' },
  pkgR4b: { zh: '不包括', en: 'Not included' },
  pkgR4c: { zh: '包括', en: 'Included' },
  pkgR5a: { zh: '补充文书（如奖学金等）', en: 'Supplemental essays' },
  pkgR5b: { zh: '协助修改4–6篇', en: 'Help edit 4–6' },
  pkgR5c: { zh: '不限篇数', en: 'Unlimited' },
  pkgR6a: { zh: '简历修改', en: 'Résumé / CV' },
  pkgR6b: { zh: '修改1份简历', en: 'One résumé' },
  pkgR6c: { zh: '提供至少2个版本，含求职简历', en: '≥2 versions incl. job CV' },
  pkgR7a: { zh: '推荐信 / 套磁邮件润色', en: 'LOR & outreach polish' },
  pkgR7b: { zh: '指导修改3–5封', en: 'Guide 3–5 letters' },
  pkgR7c: { zh: '不限封数，含推荐信撰写支持', en: 'Unlimited + drafting support' },
  pkgR8a: { zh: '模拟面试训练', en: 'Mock interviews' },
  pkgR8b: { zh: '可培训至第2年4月1日', en: 'Through Apr 1 of year 2' },
  pkgR8c: { zh: '不限次数，一对一针对性训练', en: 'Unlimited 1:1 coaching' },

  faqTitle: { zh: '常见问题', en: 'FAQ' },
  footTitle: { zh: '联系我们', en: 'Contact us' },
  footContact: { zh: '联系方式', en: 'Contact' },
  footWechat: { zh: '客服微信二维码', en: 'WeChat QR' },
  footOfficial: { zh: '公众号二维码', en: 'Official account QR' },
  footEmail: { zh: '邮件: info@michiacademy.com', en: 'Email: info@michiacademy.com' },

  faq1q: {
    zh: '申请美国硕士研究生的专业可以与大学所学的专业不同么？',
    en: 'Can my master’s major differ from my undergraduate major?',
  },
  faq1a: {
    zh: '可以，在任何大学硕士专业除某些及特别专业需要与学生本科专业有直接连贯性，一般专业通常来讲是可以与本科不同的。虽说本科学习的专业与硕士所学的专业通常来讲连贯性不是必须的，但是如果本科和硕士的专业存在连贯性会成为日后学习中一种优势。<br>举例：在美国医学专业是没有本科的，如果本科攻读生物类学科，那么部分交叉的知识架构会成为日后学习的助力。其次是学生可以获得更多加分点，招生官在对硕士的招收标准中本科专业也是考量因素的重要一环。',
    en: 'Usually yes. Many programs do not require the same field as your bachelor’s, though some specialized tracks expect continuity. Related coursework can still be an advantage. Example: U.S. medical schools expect strong science prep even without a “pre-med” undergraduate major.',
  },
  faq2q: {
    zh: '申请美国硕士研究生，能同时申请同一所学校的多个专业么？',
    en: 'Can I apply to multiple programs at the same university?',
  },
  faq2a: {
    zh: '可以，当学生选择专业的时候往往会出现对单一所学校的不同复数专业感兴趣，这个时候我们建议和鼓励学生同时申请这些有兴趣的专业，多点出击得到的回馈才能最大化。<br>但切记自己所定制的最主要目标，选择专业最主要不是种类丰富而是最适合自身的情况。',
    en: 'Often yes—if the school allows multiple applications. We encourage exploring several programs when it aligns with your goals, while keeping one clear primary target so choices stay coherent.',
  },
  faq3q: { zh: '申请美国硕士研究生应该考GMAT还是GRE？', en: 'Should I take the GMAT or GRE?' },
  faq3a: {
    zh: '最直接的回答为商科选择GMAT，文理科选择GRE <br>现在很多学校的专业对于GMAT或GRE一视同仁，最主要点在于学生在本科期间就要规划自己未来，尽早选择目标学校和专业是最明智的行动。根据目标学校的要求来选择需要考取的标准化考试类型是最保险的方法。',
    en: 'Traditionally GMAT for business and GRE for many other fields—but many programs accept either. Check each target program early and plan tests around those requirements.',
  },
  faq4q: {
    zh: '我的 GMAT 或 GRE 成绩很高，这样一定会被我理想的大学和专业录取么？',
    en: 'If my GMAT/GRE is very high, am I guaranteed admission?',
  },
  faq4a: {
    zh: '成绩高低并不是招生官看重的唯一条件，虽然成绩仍然是重要参考条件之一，但是校方的招生官会从多方面去考察学生，无论是学生提供的第三方推荐信或是学生的自我介绍信都是重要参考条件，更多考察点例如工作经验、学术背景、本科专业等都会成为决定的因素。',
    en: 'No. Scores matter but admissions is holistic: essays, recommendations, experience, academics, and fit all play a role.',
  },
  faq5q: { zh: '申请美国硕士研究生必须要工作经验么？ ', en: 'Is work experience required?' },
  faq5a: {
    zh: '不是，通常来讲一般专业是不强制要求学生拥有相关全职工作经验，但是工作经验会作为申请的重要加分点。<br>举例：MBA的申请中工作经验占有招生官考量因素的一大部分，因为专业的特殊需求，工作经验或许会成为申请中重要的一环。',
    en: 'Not for most programs, though it helps. MBA and some professional degrees often expect substantial experience.',
  },
  faq6q: { zh: '作为热门专业商科MBA申请注重哪些点？', en: 'What matters for competitive MBA applications?' },
  faq6a: {
    zh: '<b style="font-size: 20px;color:#003520">硬性条件 </b><br>每一个录取委员一定会先对学生的各项成绩进行考察.而GMAT就是能够反应你综合能力的考试.它在申请中可以说是你的第一步，在整一个申请中占了20%-40%的比重。 <br><br><b style="font-size: 20px;color:#003520">申请者的背景 </b><br>包括专业背景、任何专业在申请MBA时都是同一起跑线。不要认为自己不是出自名门大学，就抱有“自卑”心理，反而个人具有一定商业知识和经验会更好。 <br><br><b style="font-size: 20px;color:#003520">工作经历</b><br>申请MBA专业如果没有丰富的工作经验，等于失去了最具杀伤力的武器。如果学生想被top大学录取，工作经验至少需要2至5年。<br><br><b style="font-size: 20px;color:#003520">包装 </b><br>重点就是PS的包装和ESSAY的包装。成功申请MBA的案例中，其中会发现在他们ESSAY里面说的每一句话，所谈到的每一个经历，所解决的每一个问题都是体现着申请者的智慧所在。 <br><br><b style="font-size: 20px;color:#003520">学校的选择</b><br>根据自己的实际情况进行定位。在这里要提醒学生并不要目光集中在前30的商学院。<br><br><b style="font-size: 20px;color:#003520">MBA的学费问题</b><br>美国读MBA专业平均每年4万美元。但在美国，几乎每个人读MBA都有贷款，如果能够坚持生活，这类的贷款是可以在一年内还清的。当然读MBA投资回报率是相当高。每一位立志申请美国MBA的申请者，一定也要考虑到此问题。<br><br><b style="font-size: 20px;color:#003520">签证因素 </b><br>因为申请美国MBA大多是申请者自己自费或半自费，所以签证官很难相信他们有足够的经费过去美国留学。这就要讲求在签证时，要用到的策略了，坚信一点实事求是，过硬的申请背景会让学生一路无阻。 <br><br><b style="font-size: 20px;color:#003520">MBA学习目标问题</b><br>MBA专业不是单一的让学生去攻读一个学位，它是教会一个人如何面对社会，如何与人打交道，与资产打交道。培养的是将来某一企业的领导者。要学习如何改变看问题的角度，学习改变观念和意识。<br><br><b style="font-size: 20px;color:#003520">读MBA是留在美国还是回国的去向问题</b><br>这是许多申请者考虑的问题。回国内成功的机会并不比美国小，文化根深蒂固的差异，更多的申请者就在申读之前已经为自己回国发展做好了准备。<br><br><b style="font-size: 20px;color:#003520">国际化MBA申请战略 </b><br>世界各国其实有很多教育水平很高的商学院。如果学生的背景并没有其他美国申请人那么强力，可以考虑他国的MBA项目，由于MBA的专业特殊和全球性，申请泛用性很高，这样就要客观的去为自己选择正确的方向，而不是盲目的追逐大国名牌。 <br><br><b style="font-size: 20px;color:#003520">申请时机</b><br>第一第二第三轮哪一轮比较好，目前没有一个绝对的客观评价，根据自己的自身条件找到适合的申请时机才是最佳标准。',
    en: '<b style="font-size: 20px;color:#003520">Scores & rigor</b><br>GMAT/GRE and GPA open doors but rarely decide outcomes alone.<br><br><b style="font-size: 20px;color:#003520">Experience & impact</b><br>Top MBA programs expect clear professional growth, leadership signals, and impact stories.<br><br><b style="font-size: 20px;color:#003520">Essays & narrative</b><br>Coherent goals, school-specific fit, and authentic examples beat generic prestige chasing.<br><br><b style="font-size: 20px;color:#003520">School list & rounds</b><br>Build a realistic portfolio; round choice matters less than readiness and story quality.<br><br><b style="font-size: 20px;color:#003520">Financing & visa</b><br>Plan tuition, loans, and immigration paperwork early—especially for self-funded applicants.',
  },
  faq7q: { zh: '关于硕士生的选校该如何判断？ ', en: 'How should master’s applicants build a school list?' },
  faq7a: {
    zh: '在选校初期需要做出以下几点基本判断：<br><br><b style="font-size: 20px;color:#003520">专业排名vs 综合排名</b><br>综合排名高就是我们传统意义上说的名校，但是综排是针对本科生的。如果usnews.com查看研究生院校的专业排名，就会发现Grad school的排名是分专业的。很多 “普通” 学校都有自己的强势专业。如综合排名100名之外的亚利桑那大学，信息系统专业全美排名第三。而辛辛那提大学的艺术和建筑系完全可以与哥伦比亚大学、纽约大学相抗衡。名不见经传的北达科他大学的航天飞行专业在美处于绝对领先位置。专排、综排双高肯定是理想选择；如果不能两全，是选择综排高专业一般的项目，还是选择名气小专业强的项目？ <br><br><b style="font-size: 15px;color:#3B604F">专业排名高：学到真材实料、雇主口碑良好</b><br>如果要留美找工作，我们的建议是专业排名更重要。硕士项目是职业导向，关键是能得到优质的职业培训，学到专业知识。而专业排名高证明这个项目的师资、课程设置、毕业去向都更好。更重要的是，该学校项目在用人单位中肯定建立了良好的口碑，相关行业的校友资源也更优质，有利于在美国找工作。<br><b style="font-size: 15px;color:#3B604F">综合排名高：氛围好、资源多</b><br>首先，常青藤名校部分硕士专业可能和前三名比起来时略水，但学校名声在外项目也不会太差。名校的优势就在于综合院校资源多，校园氛围好；（其他院系）大牛多，可以通过校园活动培养优质人脉资源。当然，最重要的原因是能头顶名校光环，有利于回国发展。<br><br><b style="font-size: 20px;color:#003520">课程设置&具体方向  </b><br>从课程安排上就能看出这个项目是偏应用还是偏理论。比如哥大的TESOL项目要求两学期的practicum（教学实践），许多其他学校没有这样的实践课，就可能成为吸引学生的一个特色。不要一味看专业排名，课程设置要和适应自己的兴趣；具体方向的选择也要与自己的研究需求必须充分匹配。比如说，材料专业的申请者，如果去申请金属材料或是磁性材料等方向的话大部分学校都会有这样的分支，但是设置高分子材料这个小方向的学校会相对少一点，都知道西北大学的材料工程专业尤其好，但是是否有适合学生的专业更需要仔细考量，而不是大家一起去申请同一所学校。 <br><br><b style="font-size: 20px;color:#003520">地理环境&工作机会   </b><br>地理位置上，东、西海岸学校多，城市大，经济更发达，工作需求更多。而两边的职场也有不同侧重，东海岸以纽约为代表，金融业更发达；西海岸以硅谷为核心，IT也更发达。如果倾向硕士读完打算马上工作，选大城市资源多；如果专心学术，那乡村地区干扰少，更适合安静学术。 <br><br><b style="font-size: 20px;color:#003520">“自身条件”要满足“录取偏好”  </b><br>美国留学学校众多，每个学校的录取要求和录取偏好差异很大，且不同专业的研究生可能对申请者有非常细致的背景要求，而这些要求背后的素质一般是这所学校所重点强调的录取优势的取向。比如，对于申会计硕士的同学来说，一定要注意到有的学校的项目是招收非会计背景的学生，如University of North Carolina Chapel Hill和University of Wisconsin—Madison，这说明这两所学校重视会计学科专业交叉，那么其他专业突出优越的背景就会成为重点考量的素质；而有的学校严格要求招收本科是会计背景的同学如University of Notre Dame，则说明这所学校强调对会计本专业的深挖，那么本科会计背景的“纯度”就很重要。总之，“自身条件”要满足“录取偏好”才能提高命中率。 <br><br><b style="font-size: 20px;color:#003520">总结贴士① 删掉肯定不去的   </b><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;去掉那些负担不起的<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;去掉虽然合格但是校方不提供财政资助的学校<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;去掉那些不能满足个人需要的学校<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;去掉那些入学要求和学生的资格不符合的学校。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;把选择缩小到那些符合你个人和职业需要，能负担得起，并且也符合入学要求的学校，最后列出申请的大学名单。<br><br><b style="font-size: 20px;color:#003520">总结贴士② 做个数据对比表  </b><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;研究项目和设施，包括图书馆和电脑设施<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;系的规模(学生和教师)以及学校的规模<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;教师的资历<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学校的认证情况，如果适用的话，系科的认证情况<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对课程与论文的要求<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;完成学位需要的时间<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录取要求包括要求的考试成绩，学位以及本科平均成绩<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学费，杂费和书费等<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;是否提供财政资助<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;地点，住房选择，校园环境，气候和生活费用<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学校是否有国际学生服务以及其他所需要的服务',
    en: '<b style="font-size: 20px;color:#003520">Rankings: program vs overall</b><br>Graduate rankings are field-specific; a “lower-ranked” university may dominate your niche. Choose based on curriculum, outcomes, and geography—not badges alone.<br><br><b style="font-size: 15px;color:#3B604F">Strong program</b><br>Great for industry skills, recruiting, and employer networks in the U.S.<br><b style="font-size: 15px;color:#3B604F">Strong university brand</b><br>Broad resources and name recognition—often helpful if you plan to return home.<br><br><b style="font-size: 20px;color:#003520">Curriculum & track</b><br>Match courses, practica, and faculty to your goals—not only prestige.<br><br><b style="font-size: 20px;color:#003520">Location & careers</b><br>Coasts differ by industry clusters; cities help internships; quieter campuses help research focus.<br><br><b style="font-size: 20px;color:#003520">Fit with admissions preferences</b><br>Each program signals what it rewards (background depth vs cross-disciplinary breadth). Align your story with those signals.<br><br><b style="font-size: 20px;color:#003520">Prune, then compare</b><br>Remove schools that fail cost, fit, or eligibility tests; then compare the survivors on a simple matrix (faculty, courses, cost, outcomes, culture).',
  },
  faq8q: { zh: '关于硕士生的选择专业该如何判断？ ', en: 'How should I choose a master’s field?' },
  faq8a: {
    zh: '虽然硕士申请过程和本科申请无太大差异（如，写文书，求推荐信，考标准化考试），但不同之处是硕士申请要选专业并且不像本科那样转换度较高。那么究竟该如何决定申请什么专业？开始申请前，请考虑以下问题：<br><br><b style="font-size: 20px;color:#003520">为什么留学深造 </b><br>如果你只是为了逃避找工作，那么留学读硕士也许不是一个明智的决定。研究生学校费用贵、消耗时间较长，应该要把这金钱与时间用在在值得的事情上：留学深造是为了学习职业必备技能，未来从事理想的职业。 <br><br><b style="font-size: 20px;color:#003520">你的职业发展目标是什么</b><br>硕士项目本质就是为职业发展做准备，需要构思短期和长期目标。什么学位、项目最能达成目标？要从事该职业需要学习什么技能？要认真考虑，做好调查。 <br><br><b style="font-size: 20px;color:#003520">职业目标的确立</b><br>究生学院专业划分很细而且最短的项目也要学一年；至少要结合以上几点选出自己感兴趣和有前景并适合发展的专业，同时，要结合学生本科阶段学习的课程和实习、工作经历。许多学生有个误区：硕士专业必须和本科专业一致，但很多项目是允许转专业的，只要满足一些基本的要求（大部分需求会明确的在官方网站中）。但有一点是肯定的：本科课程/实习/工作经历要和你申请的专业密切相关，因为招生官会考量申请人的教育背景是否对口以及申请的动机是否端正。',
    en: 'Master’s programs demand a clear field choice.<br><br><b style="font-size: 20px;color:#003520">Purpose</b><br>Grad school is costly—make sure it advances a real career plan, not avoidance.<br><br><b style="font-size: 20px;color:#003520">Career goals</b><br>Define short- and long-term outcomes; pick degrees that teach the skills employers in that path expect.<br><br><b style="font-size: 20px;color:#003520">Alignment</b><br>You need not clone your undergraduate major, but coursework, internships, and narrative should credibly connect to the new field.',
  },
};

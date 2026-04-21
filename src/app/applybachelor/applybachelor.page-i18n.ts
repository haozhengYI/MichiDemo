import { BACHELOR_FAQ_I18N } from './applybachelor.faq-i18n';

/** Bilingual copy for applybachelor page (hero + phase services + FAQ). Nav/login stay Chinese in template. */
export type PageLang = 'zh' | 'en';

export type Bilingual = { zh: string; en: string };

export const PAGE_I18N: Record<string, Bilingual> = {
  heroEyebrow: { zh: '本科升学咨询', en: 'College Admissions Counseling' },
  heroL1: { zh: 'Michi：', en: 'Michi:' },
  heroL2: { zh: '顶尖本科申请辅导团队', en: 'The premier college counseling firm' },
  heroLeadBefore: { zh: '在 ', en: 'At ' },
  heroLeadMid: {
    zh: '，我们为希望获得',
    en: ', we provide college counseling to students seeking ',
  },
  heroLeadU: { zh: '常春藤盟校录取', en: 'admission to Ivy League colleges' },
  heroLeadAfter: {
    zh: '并进入其他高度选拔性大学的学生提供辅导。我们通过 Zoom、电话与邮件，为美国本土与全球各地的学生提供服务。',
    en: ' and other highly selective universities. Through Zoom, phone, and email, we work with students from across the United States and worldwide.',
  },

  phasePickerHeading: {
    zh: '针对不同申请阶段的本科升学辅导',
    en: 'College counseling tailored for each admissions phase',
  },
  phasePickerSub: { zh: '请选择您所处的申请阶段', en: 'Select your admissions phase' },

  card12L1: { zh: '12 年级', en: '12th Graders' },
  card12L2: { zh: '早申轮开始前', en: 'Before The Early Round' },
  cardTransfers: { zh: '转学申请', en: 'Transfers' },

  path12Early: {
    zh: '若家庭在孩子 12 年级、早申请（EA/ED）截止之前与我们联系，后续路径通常如下：',
    en: 'For families who first come to us when their children are seniors before the Early Action/Early Decision deadline, the path forward is as follows:',
  },
  pathTransfers: {
    zh: '若家庭希望以转学（transfer）身份争取录取并在此阶段寻求我们的帮助，路径通常如下：',
    en: 'For families who first come to us when their children are seeking to earn admission as transfer applicants, the path forward is as follows:',
  },

  expandAll: { zh: '全部展开', en: 'Expand all' },
  collapseAll: { zh: '全部收起', en: 'Collapse all' },
  collapseSectionAria: { zh: '收起此节', en: 'Collapse section' },

  stepLabel1: { zh: '第一步', en: 'Step 1' },
  stepLabel2: { zh: '第二步', en: 'Step 2' },
  stepLabel3: { zh: '第三步', en: 'Step 3' },

  earlyStep1Title: { zh: '15 分钟初步咨询', en: '15-minute consultation' },
  earlyStep1Lead: {
    zh: 'Michi 为家长与学生提供一次免费的 15 分钟电话咨询（国际家庭可选用 Zoom 音频），用于了解我们的本科升学辅导服务。',
    en: 'Michi offers a complimentary 15-minute consultation to parents and students via phone (or Zoom audio for international families) to learn about our college counseling services.',
  },
  earlyStep1RightTitle: { zh: '关于这通初步电话', en: 'The preliminary call' },
  earlyStep1RightText: {
    zh: '学生不必必须参加这通初步沟通。本次咨询旨在说明 Michi 如何帮助家庭应对高度选拔性的本科录取流程。',
    en: 'Students are not required to join the preliminary call. This consultation is about how Michi can help navigate the highly selective college admissions process.',
  },

  earlyStep2Title: { zh: 'PreMortem（预检面谈）', en: 'PreMortem' },
  earlyStep2Lead: {
    zh: '在与曾任顶尖院校招生官的同事进行的一小时 PreMortem 中，我们将：',
    en: 'During the one-hour PreMortem with a former elite college admissions officer, we:',
  },
  earlyStep2d1t: { zh: '通读并反馈 Common Application 全文', en: 'Review and offer feedback on full Common Application' },
  earlyStep2d1p: {
    zh: '我们会逐段审阅 Common Application 的每一部分，包括看似不起眼的栏目，指出哪些有效、哪些无效、需要如何调整，以及学生应如何重新定位自己的申请叙事。若主文书主题落在社区服务、体育、音乐、祖父母或旅行等常见套路上，通常需要推倒重来。若填写了社会安全号码，往往意味着将申请助学金——我们会一并指出这类信号。',
    en: 'We go through every section of The Common Application, including the seemingly insignificant parts, identifying what works, what doesn’t, what needs to change, and how students should reposition their cases for admission. If your child wrote about community service, sports, music, grandparents, or travel in their Personal Statement, it should be deleted. If your child included their social security number, it implies they’re applying for aid.',
  },
  earlyStep2d2t: { zh: '审阅并反馈至多 3 所学校的补充文书', en: 'Review and offer feedback on up to 3 college supplements' },
  earlyStep2d2p: {
    zh: '我们通常能完整过掉三所学校的补充文书，并就如何在补充材料中更有效展示兴趣提出建议，使其与主文书形成互补叙事。也会指出专业选择与故事线不一致、或漏勾关键项目意向等会影响录取几率的问题。',
    en: 'We can typically get through three complete supplements, offering insights on how students can more effectively demonstrate interest in their supplemental essays, ideally serving as critical complementary puzzle pieces to their Personal Statements. Or maybe they list majors that aren’t substantiated by their narratives. Or perhaps they don’t check that they’re interested in a particular program, which would increase their odds of admission.',
  },
  earlyStep2d3t: { zh: '就早申策略与常规申请名单给出建议', en: 'Offer recommendations on Early Action/Early Decision plan and Regular Decision list' },
  earlyStep2d3p: {
    zh: '若早申目标明显不切实际、浪费宝贵的早申机会，我们会直说；若高中与某校的“关系”被高估，我们会说明；若早申校需要调整，我们会给出应有的早申策略。',
    en: 'If your child is applying to an impossible dream in the Early round, effectively wasting their valuable Early card, we’ll say so. If your child’s high school doesn’t have as strong of a relationship with a college as you may think, we’ll say so. And if your child’s Early choice needs to be corrected, we’ll tell you what their Early strategy should be.',
  },

  earlyStep3Title: { zh: 'Michi 本科申请辅导套餐', en: 'Michi’s college admissions packages' },
  earlyStep3Lead: {
    zh: 'Michi 的套餐按申请季中实际辅导的院校数量计费，通常包含以下支持与交付成果：',
    en: 'Michi’s packages, which are based on the number of colleges families work with us on through the admissions process, include the following college admissions assistance and key deliverables:',
  },
  earlyStep3d1t: { zh: '为课程、标化与活动上的失误“打补丁”', en: 'Putting bandaids on course, testing, and extracurricular mistakes' },
  earlyStep3d1p: {
    zh: '12 年级才找到我们时，有些问题已无法挽回，但仍有不少可以在损害录取前修正。我们会补充能突出独特“钩子”的活动建议，并尽量纠正仍可调的课程与考试安排。例如：AP 统计通常不能算作 12 年级数学；中途停掉或更换外语也不理想；学生仍可通过校外课程弥补部分硬伤。',
    en: 'When families come to us during the final year of high school, there will be some mistakes we can’t correct. But there will be other mistakes we can correct — before they jeopardize their child’s case for admission. As such, we’ll brainstorm a few new activities for them to get involved in so they can better showcase a singular hook. And we’ll fix the course and testing mistakes we can. AP Statistics doesn’t count as senior-year math. Stopping or switching a foreign language isn’t good. Students can still enroll in courses outside their schools to address these errors.',
  },
  earlyStep3d2t: { zh: '推荐信素材的头脑风暴与打磨', en: 'Brainstorming and revising material for recommendations' },
  earlyStep3d2p: {
    zh: '我们不会把推荐信完全交给校内老师“自由发挥”——经验上那往往流于泛泛。我们会帮助学生准备可分享给顾问与任课教师的具体故事与要点；学生虽未必能看到终稿，但老师通常愿意用好我们提供的素材。',
    en: 'We don’t leave it to teachers and school counselors to write powerful letters of recommendation for our students. In our experience, when left on their own, school counselors and teachers write generic letters of recommendation. As such, we help our students prepare anecdotes that they then share with their counselors and teachers. While our students will never be privy to what these recommenders write, in our experience, counselors and teachers overwhelmingly want to help their students. So they’ll so often use what they’re given.',
  },
  earlyStep3d3t: { zh: '各类申请文书的头脑风暴与逐段修改', en: 'Brainstorming and revising material for college essays' },
  earlyStep3d3p: {
    zh: '若还以为只有一篇主文书，那就太天真了：高度选拔院校往往有多篇补充文书，且需要针对每所学校量身展示就读意愿。我们会逐篇、逐段打磨，使每篇文书都成为申请档案中的关键拼图。',
    en: 'Do you think there’s one admissions essay, the Personal Statement? That’s cute. There are tons of college admissions essays, and they’re all equally as important. Most highly selective universities have their own supplemental essays, many of which must be uniquely tailored to the respective institution to demonstrate a student’s commitment to attending. We brainstorm and revise every paragraph of every essay, with each essay serving as a critical puzzle piece in a student’s admissions file.',
  },
  earlyStep3d4t: { zh: '申请表非文书部分的填表与陷阱规避', en: 'Assistance with the non-essay portions of applications' },
  earlyStep3d4p: {
    zh: '申请表处处是“雷区”：例如填写社安号可能被视为要申助学金；漏填关键联系人会削弱你对某校的兴趣展示。我们会确保学生避免这类失误。',
    en: 'There are landmines throughout each college application. Including a social security number implies the student will apply for financial aid. Not listing significant points of contact undercuts a student’s efforts to demonstrate interest in the college to which they’re applying. We make sure that our students don’t make such mistakes.',
  },
  earlyStep3d5t: { zh: '面试准备', en: 'Interview prep' },
  earlyStep3d5p: {
    zh: '校友面试在顶尖录取中的权重已下降，但我们仍帮助学生练习如何在面试中脱颖而出、留下印象，并呈现其独特亮点。',
    en: 'While the alumni interview has become one of the least important components of the elite college admissions process, we prepare students to stand out, impress, and showcase their singular hook.',
  },

  trStep1Title: { zh: '15 分钟初步咨询', en: '15-minute consultation' },
  trStep1Lead: {
    zh: 'Michi 为家长与学生提供一次免费的 15 分钟电话咨询（国际家庭可选用 Zoom 音频），用于了解我们的本科升学辅导服务。',
    en: 'Michi offers a complimentary 15-minute consultation to parents and students via phone (or Zoom audio for international families) to learn about our college counseling services.',
  },
  trStep1RightTitle: { zh: '关于这通初步电话', en: 'The preliminary call' },
  trStep1RightText: {
    zh: '学生不必必须参加这通初步沟通。本次咨询旨在说明 Michi 如何帮助家庭应对高度选拔性的本科录取流程。',
    en: 'Students are not required to join the preliminary call. This consultation is about how Michi can help navigate the highly selective college admissions process.',
  },

  trStep2Title: { zh: 'PreMortem 或 PostMortem', en: 'PreMortem or PostMortem' },
  trStep2Lead: {
    zh: '在与曾任顶尖院校招生官的同事进行的一小时 PreMortem 或 PostMortem 中，我们会针对尚未提交的转学材料，或学生高中当年已提交的申请材料，集中指出问题所在：',
    en: 'During the one-hour PreMortem or PostMortem with a former elite college admissions officer, which is chock full of insights on what’s wrong on not-yet-submitted transfer applications or on the student’s applications submitted as a senior in high school, we:',
  },
  trStep2d1t: { zh: '对至多 3 份大学申请给出反馈', en: 'Offer feedback on up to 3 college applications' },
  trStep2d1p: {
    zh: '我们会通读学生已准备的转学申请，或其高中申请季提交的全套材料（含文书）。经验上，若高中时的错误未被点破，转学阶段往往会重复同样的失误——而高中材料在转学审阅中仍然重要。',
    en: 'We go through every section of either the transfer applications a student has prepared or the applications that a student submitted out of high school, including the admissions essays. In our experience, students make the same mistakes as transfer applicants that they did as high school applicants if those mistakes aren’t identified. And, yes, everything from high school still counts in the transfer round.',
  },
  trStep2d2t: { zh: '活动与“钩子”规划', en: 'Extracurricular hook and activities' },
  trStep2d2p: {
    zh: '顶尖院校并不寻找面面俱到的“全才”，而偏好某一维度极其突出的学生。我们会帮转学申请者在高中剩余时光与大学第一年继续打造可讲故事的活动线。',
    en: 'America’s highly selective universities do not seek to admit well-rounded students. Instead, they want singularly-talented students. As such, we’ll brainstorm ways for transfer applicants to stand out in their activities during the remainder of high school and the first year of college.',
  },
  trStep2d3t: { zh: '大学选课路径规划', en: 'Map out college coursework' },
  trStep2d3p: {
    zh: '我们会细化转学申请者大一应修的课程组合，以体现求知欲与学术好奇心。',
    en: 'We’ll fine-tune which courses transfer students should take during their first year of college to stand out as intellectually curious.',
  },
  trStep2d4t: { zh: '转学目标校名单搭建', en: 'Transfer college list-building' },
  trStep2d4p: {
    zh: '我们会明确转学阶段应重点瞄准哪些学校。除非是美国退伍军人，否则通常不应把普林斯顿当作现实主目标——在我们看来，该校对非退伍军人的转学名额极其有限。',
    en: 'We’ll identify which colleges a transfer applicant should be setting their sights on through the process. And, no, unless they’re a veteran of America’s military, it shouldn’t be Princeton since Princeton, in our view, admits a negligible number of non-veterans as transfers.',
  },

  trStep3Title: { zh: 'Michi 转学申请辅导套餐', en: 'Michi’s transfer admissions packages' },
  trStep3Lead: {
    zh: 'Michi 的转学套餐按转学申请季中实际辅导的院校数量计费，通常包含以下支持与交付成果：',
    en: 'Michi’s packages, which are based on the number of colleges families work with us on through the transfer admissions process, include the following college admissions assistance and key deliverables:',
  },
  trStep3d1t: { zh: '全程转学申请辅导与节奏把控', en: 'Transfer admissions guidance through the process' },
  trStep3d1p: {
    zh: '除确保学生在高中尾声与大学第一年选修合适课程、落实我们建议的差异化活动，并在目标校面前有效展示兴趣外，我们也在预约制的前提下提供答疑与陪伴：通常可在一两天内安排通话，并在合理时间内回复邮件。',
    en: 'Beyond ensuring that our transfer students are in all the right courses through the remainder of high school and the first year of college, pursuing the wonderfully weird extracurricular activities we explicitly recommend, and effectively demonstrating interest in the colleges to which they’ll ultimately apply, we’re here as needed for questions and hand-holding along the way. While all check-ins must be scheduled, we can always set up check-ins within a day or two of a request and write back to an email within a day or so.',
  },
  trStep3d2t: { zh: '课外活动执行层面的指导', en: 'Guidance with extracurricular pursuits' },
  trStep3d2p: {
    zh: '我们不会让学生与家长自己“憋”出一个能打动招生官的奇怪钩子；我们会直接给出希望学生参与的活动方向。但我们不会代学生去联络活动方——工作只在幕后完成。若有升学顾问声称可以代你打通关系，请快跑。',
    en: 'We don’t leave it to students and parents to come up with activities that showcase a wonderfully weird hook that will inspire admissions officers to root for them. We send them the activities we want them to get involved in during the remainder of high school and the first year of college. But, no, we don’t reach out to contacts at these activities on our students’ behalf. We work exclusively behind the scenes — and if a college counselor suggests they do otherwise, run!',
  },
  trStep3d3t: { zh: '推荐信素材的头脑风暴与打磨', en: 'Brainstorming and revising material for recommendations' },
  trStep3d3p: {
    zh: '教授与高中顾问若被“空口”索要推荐信，往往只能写出泛泛之作。我们会帮助学生准备可分享给教授与前高中顾问的具体素材；学生未必能看到终稿，但推荐人通常愿意用好这些内容。',
    en: 'We don’t leave it to professors and school counselors to write powerful letters of recommendation for our students. In our experience, when left on their own, professors and high school counselors write generic letters of recommendation. As such, we help our students prepare anecdotes that they then share with their professors and former high school counselors. While our students will never be privy to what these recommenders write, in our experience, professors and counselors overwhelmingly want to help their students. So they’ll so often use what they’re given.',
  },
  trStep3d4t: { zh: '转学文书的头脑风暴与逐段修改', en: 'Brainstorming and revising transfer essays' },
  trStep3d4p: {
    zh: '若还以为转学只要一篇个人陈述，同样太天真：各校往往有多篇补充文书，需要针对项目量身展示就读意愿。我们会逐篇打磨，使每篇文书成为转学档案中的关键拼图。',
    en: 'Do you think there’s one transfer admissions essay, the Personal Statement? That’s cute. There are tons of transfer admissions essays, and they’re all equally as important. Most highly selective universities have their own supplemental essays, many of which must be uniquely tailored to the respective institution to demonstrate a student’s commitment to attending. We brainstorm and revise every paragraph of every essay, with each essay serving as a critical puzzle piece in a student’s transfer admissions file.',
  },
  trStep3d5t: { zh: '申请表非文书部分的填表与陷阱规避', en: 'Assistance with non-essay portions of applications' },
  trStep3d5p: {
    zh: '申请表同样布满陷阱：对原就读院校表达负面情绪、随意填写社安号、漏填关键联系人等，都会伤害转学申请。我们会确保学生规避这些错误。',
    en: 'There are landmines throughout each college application. Expressing negative feelings toward the initial college a student attended. Including a social security number implies the student will apply for financial aid. Not listing significant points of contact undercuts a student’s efforts to demonstrate interest in the college to which they’re applying as a transfer. We make sure that our transfer students don’t make such mistakes.',
  },

  ...BACHELOR_FAQ_I18N,
};

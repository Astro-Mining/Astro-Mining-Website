// News & media stories. Media is shared; copy is provided per language.
// Body blocks: a string is a paragraph, { list: [...] } is a checklist
// (items may be strings or { term, text } pairs).
// The first item flagged `featured` is highlighted on the News page and in the
// site-wide "Latest News" popup. `cover.focus` is an optional CSS object-position
// used when a portrait cover is cropped into a landscape card.

const IMG = "/assets/images/news";
const VID = "/assets/video/news";

export const newsUi = {
  en: {
    crumb: "Media Centre",
    title: "News",
    subtitle: "Events, TV coverage, and press interviews from Astro Mining & Industrial.",
    featured: "Featured",
    readMore: "Read more",
    allNews: "All news",
    videos: "Videos",
    photos: "Photo gallery",
    photoCount: "photos",
    video: "Video",
    moreNews: "More news",
    viewPhoto: "View photo",
    close: "Close",
    previous: "Previous photo",
    next: "Next photo",
    popupEyebrow: "Latest News",
    popupTitle: "Astro at Egypt Mining Forum 2026",
    popupCta: "See photos & videos",
    popupHide: "Hide latest news",
    popupShow: "Show latest news"
  },
  ar: {
    crumb: "المركز الإعلامي",
    title: "الأخبار",
    subtitle: "فعاليات وتغطيات تلفزيونية وحوارات صحفية من أسترو للتعدين والصناعة.",
    featured: "خبر مميز",
    readMore: "اقرأ المزيد",
    allNews: "كل الأخبار",
    videos: "الفيديوهات",
    photos: "معرض الصور",
    photoCount: "صورة",
    video: "فيديو",
    moreNews: "أخبار أخرى",
    viewPhoto: "عرض الصورة",
    close: "إغلاق",
    previous: "الصورة السابقة",
    next: "الصورة التالية",
    popupEyebrow: "آخر الأخبار",
    popupTitle: "أسترو في منتدى مصر للتعدين 2026",
    popupCta: "شاهد الصور والفيديوهات",
    popupHide: "إخفاء آخر الأخبار",
    popupShow: "عرض آخر الأخبار"
  }
};

const forumDir = `${IMG}/egypt-mining-forum-2026`;
const forumPhotoAlts = [
  "Astro Mining and Industrial booth 2C34 at Egypt Mining Forum 2026",
  "Visitors at the Astro booth during Egypt Mining Forum 2026",
  "The Astro team at the company booth",
  "Entrance to Egypt Mining Forum 2026",
  "Visitors gathered at the Astro booth",
  "Delegates meeting the Astro team at the booth",
  "Astro team discussing minerals with an international visitor",
  "Business meeting at the Astro booth",
  "Visitors reviewing Astro mineral samples",
  "Discussions with visitors at the Astro booth",
  "Delegates at the Astro feldspar and iron oxide displays",
  "Gulf delegates visiting the Astro booth",
  "Visitors browsing Astro product information",
  "Meeting with partners at the Astro booth",
  "Astro team presenting calcium carbonate samples",
  "Eng. Hamada Hammam, Chairman of Astro Mining and Industrial, at the booth",
  "Gulf visitor in discussion at the Astro booth",
  "Senior delegates reviewing Astro materials",
  "Meetings at the Astro reception desk",
  "Astro team welcoming visitors",
  "Visitor reviewing the Astro product catalogue",
  "International visitor in discussion at the booth",
  "Visitor examining Astro mineral samples",
  "Visitor reading the Astro company brochure",
  "Silica sand display at the Astro booth",
  "Mineral samples on display, including limestone and silica sand",
  "Astro booth shelving with silica sand and limestone samples",
  "Astro Mining and Industrial branded banner",
  "Calcium carbonate sample on display",
  "Raw mineral sample on display",
  "Feldspar sample on display",
  "Astro kaolin product data sheet"
];

const forumGallery = forumPhotoAlts.map((alt, i) => ({
  src: `${forumDir}/forum-${String(i + 1).padStart(2, "0")}.jpg`,
  alt
}));

export const newsItems = [
  {
    slug: "egypt-mining-forum-2026",
    date: "2026-09-28",
    featured: true,
    cover: { ...forumGallery[0], width: 1794, height: 1196 },
    videos: [
      {
        src: `${VID}/forum-venue.mp4`,
        poster: `${forumDir}/poster-venue.jpg`,
        title: { en: "Egypt Mining Forum 2026 venue", ar: "مقر منتدى مصر للتعدين 2026" }
      },
      {
        src: `${VID}/forum-brochure.mp4`,
        poster: `${forumDir}/poster-brochure.jpg`,
        title: { en: "Astro product brochures at the forum", ar: "كتيبات منتجات أسترو في المنتدى" }
      },
      {
        src: `${VID}/forum-booth-chairman.mp4`,
        poster: `${forumDir}/poster-booth.jpg`,
        title: { en: "Moments from the Astro booth", ar: "لقطات من جناح أسترو" }
      }
    ],
    gallery: forumGallery,
    en: {
      category: "Events",
      title: "Astro Mining & Industrial Concludes a Successful Participation at Egypt Mining Forum 2026",
      excerpt:
        "Astro's booth 2C34 drew strong interest from companies, factories, and mining stakeholders at the forum in the New Administrative Capital.",
      body: [
        "Astro Mining & Industrial has concluded its participation in Egypt Mining Forum 2026, held at the St. Regis Almasa Hotel in the New Administrative Capital under the patronage of President Abdel Fattah El-Sisi, with broad participation from senior officials and leaders of the mining and industrial sectors at both local and international levels.",
        "Throughout the forum, the company's booth (2C34) drew strong turnout and wide interest from representatives of companies, factories, and mining-sector stakeholders. The Astro team showcased its leading mining solutions and advanced mineral products, and explored direct supply opportunities and strategic partnerships aimed at supporting and developing national and regional industries.",
        "During its participation, the company reaffirmed its ongoing commitment to delivering the highest quality standards across its products and to strengthening collaboration with partners to build sustainable solutions that meet the aspirations of the mining market."
      ]
    },
    ar: {
      category: "فعاليات",
      title: "أسترو للتعدين والصناعة تختتم مشاركة ناجحة في منتدى مصر للتعدين 2026",
      excerpt:
        "شهد جناح أسترو (2C34) إقبالاً كبيراً من ممثلي الشركات والمصانع والمهتمين بالقطاع التعديني خلال المنتدى بالعاصمة الإدارية الجديدة.",
      body: [
        "اختتمت شركة أسترو للتعدين والصناعة (Astro Mining & Industrial) مشاركتها في فعاليات منتدى مصر للتعدين 2026 (Egypt Mining Forum)، والذي أقيم في فندق سانت ريجيس الماسة بالعاصمة الإدارية الجديدة، تحت رعاية السيد رئيس الجمهورية عبد الفتاح السيسي بمشاركة واسعة من كبار المسؤولين ورواد قطاع التعدين والصناعة على المستويين المحلي والدولي.",
        "وخلال أيام المنتدى، شهد جناح الشركة (Booth 2C34) إقبالاً كبيراً واهتماماً واسعاً من ممثلي الشركات والمصانع والمهتمين بالقطاع التعديني؛ حيث استعرض فريق أسترو أبرز الحلول والمنتجات التعدينية المتطورة، إلى جانب بحث فرص التوريد المباشر والشراكات الإستراتيجية التي تهدف إلى دعم وتطوير الصناعات الوطنية والإقليمية.",
        "وأكدت الشركة خلال مشاركتها على التزامها المستمر بتوفير أعلى مستويات الجودة في منتجاتها، وتعزيز التعاون مع الشركاء لبناء حلول مستدامة تلبي تطلعات سوق التعدين."
      ]
    }
  },
  {
    slug: "ana-el-watan-al-hadath-interview",
    date: "2026-10",
    cover: {
      src: `${IMG}/ana-el-watan-al-hadath/ana-el-watan-statement.jpg`,
      alt: "Eng. Hamada Hammam on the Ana El Watan programme, Al Hadath channel",
      width: 1024,
      height: 1280,
      focus: "center 34%"
    },
    en: {
      category: "TV Interview",
      title: "Egypt's Mining Ores: Diverse Wealth and Global Distinction",
      excerpt:
        "On Al Hadath's “Ana El Watan”, Eng. Hamada Hammam discussed the diversity and quality of Egypt's mineral ores.",
      body: [
        "The programme “Ana El Watan”, presented by Aysar Al-Hamidi on Al Hadath channel, hosted Eng. Hamada Hammam, Chairman of Astro Mining & Industrial, in a televised interview on the diversity of ores and mineral wealth that Egypt possesses, and the natural resources and strengths that support the growth of the mining and industrial sector.",
        "During the interview, Eng. Hamada Hammam reviewed several of Egypt's most distinctive natural ores and the wide range of industries they serve, underlining the diversity, quality, and promising potential of Egypt's mineral wealth.",
        "The discussion also addressed the importance of the mining sector in supporting industry and maximising the value of natural resources by developing and upgrading ores to create added value and strengthen the competitiveness of Egyptian products."
      ]
    },
    ar: {
      category: "لقاء تلفزيوني",
      title: "خامات التعدين في مصر.. ثروات متنوعة وتميز عالمي",
      excerpt:
        "في برنامج «أنا الوطن» على قناة الحدث، تحدث المهندس حمادة همام عن تنوع وجودة الخامات التعدينية المصرية.",
      body: [
        "استضاف برنامج «أنا الوطن»، الذي يقدمه الإعلامي أيسر الحامدي على قناة الحدث، المهندس حمادة همام، رئيس مجلس إدارة أسترو للتعدين والصناعة، في لقاء تليفزيوني تناول خلاله تنوع الخامات والثروات التعدينية التي تزخر بها مصر، وما تتميز به من موارد طبيعية ومقومات تدعم نمو قطاع التعدين والصناعة.",
        "وخلال اللقاء، استعرض المهندس حمادة همام عددًا من أبرز الخامات الطبيعية التي تتميز بها مصر، إلى جانب المجالات المتنوعة التي تدخل فيها هذه الخامات، مؤكدًا ما تتمتع به الثروة المعدنية المصرية من تنوع وجودة وإمكانات واعدة.",
        "كما تناول اللقاء أهمية قطاع التعدين في دعم الصناعة وتعظيم الاستفادة من الموارد الطبيعية، من خلال تطوير الخامات والاستفادة منها بما يحقق قيمة مضافة ويدعم تنافسية المنتجات المصرية."
      ]
    }
  },
  {
    slug: "al-nahar-tv-coverage",
    date: "2026-09",
    cover: {
      src: `${IMG}/al-nahar-coverage/al-nahar-interview.jpg`,
      alt: "Eng. Hamada Hammam interviewed by Al Nahar TV at the Astro booth",
      width: 1280,
      height: 720
    },
    leadVideo: {
      src: `${VID}/al-nahar-coverage.mp4`,
      poster: `${IMG}/al-nahar-coverage/poster.jpg`,
      title: { en: "Al Nahar TV coverage of Astro at Egypt Mining Forum", ar: "تغطية قناة النهار لمشاركة أسترو في منتدى مصر للتعدين" }
    },
    en: {
      category: "TV Coverage",
      title: "Al Nahar TV Covers Astro Mining & Industrial's Participation at Egypt Mining Forum",
      excerpt:
        "Al Nahar TV spotlighted Astro's participation at Egypt Mining Forum, including an exclusive interview on the company's strategic vision.",
      body: [
        "Al Nahar satellite channel shone a spotlight on Astro Mining & Industrial's active participation at Egypt Mining Forum, which was attended and guided by President Abdel Fattah El-Sisi, as part of the company's continued efforts to support the national economy and develop Egypt's mining sector.",
        "During the media coverage and an exclusive interview with the channel, the company presented its strategic vision for developing the sector and harnessing the nation's mineral wealth, relying on the latest technologies in prospecting and exploration to enhance the value of natural resources and open new horizons for sustainable investment."
      ]
    },
    ar: {
      category: "تغطية تلفزيونية",
      title: "تغطية قناة \"النهار\" لمشاركة \"أسترو للتعدين والصناعة\" في منتدى مصر للتعدين",
      excerpt:
        "سلطت قناة النهار الضوء على مشاركة أسترو في منتدى مصر للتعدين، مع لقاء خاص حول رؤية الشركة الإستراتيجية.",
      body: [
        "في إطار جهودها المستمرة لدعم الاقتصاد القومي وتطوير قطاع التعدين المصري، سلطت قناة \"النهار\" الفضائية الضوء على المشاركة الفاعلة لشركة أسترو للتعدين والصناعة (Astro Mining & Industrial) في فعاليات منتدى مصر للتعدين (Egypt Mining Forum)، والذي حظي بحضور وتوجيهات سيادة الرئيس عبد الفتاح السيسي.",
        "خلال التغطية الإعلامية واللقاء الخاص مع القناة، استعرضت الشركة رؤيتها الإستراتيجية في تطوير القطاع واستغلال الثروات المعدنية للوطن، مع الاعتماد على أحدث التقنيات الحديثة في مجالات التنقيب والاستكشاف، بما يعزز قيمة الموارد الطبيعية ويفتح آفاقاً جديدة للاستثمار المستدام."
      ]
    }
  },
  {
    slug: "al-mussawar-interview",
    date: "2026-07-19",
    cover: {
      src: `${IMG}/al-mussawar-interview/al-mussawar-feature.jpg`,
      alt: "Al Mussawar magazine feature on Astro Mining and Industrial",
      width: 1047,
      height: 1280,
      focus: "center top"
    },
    link: {
      href: "https://almussawar.darelhilal.com/News/3271175.aspx",
      label: { en: "Read the full interview", ar: "تابع تفاصيل الحوار الشامل" }
    },
    en: {
      category: "Press Interview",
      title: "An In-Depth Conversation on the Present and Future of Mining: Chairman Eng. Hamada Hammam Speaks to Al Mussawar",
      excerpt:
        "A wide-ranging interview on added value, AI in mining, youth empowerment, and sustainable development.",
      body: [
        "Continuing Astro Mining & Industrial's active media engagement, Chairman Eng. Hamada Hammam gave a comprehensive interview to the long-established Al Mussawar magazine.",
        "The conversation explored the company's national vision and how the mining sector can help shape a sustainable economic future, focusing on our core themes:",
        {
          list: [
            {
              term: "Added value and technology",
              text: "Astro's strategy for integrating artificial intelligence and modern technologies to maximise the value of Egypt's mineral wealth."
            },
            {
              term: "Building the future with youth",
              text: "A renewed commitment to investing in young talent, granting them full authority to lead projects in the field and developing a new generation of experts."
            },
            {
              term: "Sustainable development",
              text: "How the company balances production efficiency and support for the national economy with community development."
            }
          ]
        }
      ]
    },
    ar: {
      category: "حوار صحفي",
      title: "حوار ممتد حول حاضر ومستقبل التعدين.. م/ حمادة همام رئيس مجلس الإدارة في ضيافة مجلة \"المصور\" العريقة",
      excerpt:
        "حوار شامل حول القيمة المضافة والذكاء الاصطناعي في التعدين وتمكين الشباب والتنمية المستدامة.",
      body: [
        "استمراراً للمشاركة الإعلامية الفعّالة لشركة أسترو للتعدين والصناعة، أجرى المهندس حمادة همام، رئيس مجلس الإدارة، حواراً شاملاً مع مجلة \"المصور\".",
        "شهد اللقاء نقاشاً عميقاً حول الرؤية الوطنية للشركة وكيف يسهم قطاع التعدين في صياغة مستقبل اقتصادي مستدام، مع التركيز على محاورنا الأساسية:",
        {
          list: [
            {
              term: "القيمة المضافة والتكنولوجيا",
              text: "استراتيجية \"أسترو\" في دمج الذكاء الاصطناعي والتقنيات الحديثة لتعظيم الاستفادة من ثروات مصر التعدينية."
            },
            {
              term: "بناء المستقبل بالشباب",
              text: "تجديد العهد بالاستثمار في الكوادر البشرية الشابة، ومنحهم الصلاحيات الكاملة لقيادة المشاريع ميدانياً وتطوير جيل جديد من الخبراء."
            },
            {
              term: "التنمية المستدامة",
              text: "كيف توازن الشركة بين كفاءة الإنتاج ودعم الاقتصاد الوطني وبين التنمية المجتمعية."
            }
          ]
        }
      ]
    }
  },
  {
    slug: "rose-el-youssef-interview",
    date: "2026-06-26",
    cover: {
      src: `${IMG}/rose-el-youssef-interview/chairman-hamada-hammam.jpg`,
      alt: "Eng. Hamada Hammam, Chairman of Astro Mining and Industrial",
      width: 1333,
      height: 2000,
      focus: "center 18%"
    },
    link: {
      href: "https://www.rosaelyoussef.com/1410116",
      label: { en: "Read the full interview", ar: "اقرأ الحوار كاملاً" }
    },
    en: {
      category: "Press Interview",
      title: "A Strategic Vision to Turn Egypt's Mineral Wealth into Added Value: Chairman Eng. Hamada Hammam in an Exclusive Interview with Rose El Youssef",
      excerpt:
        "Chairman Eng. Hamada Hammam discusses AI-driven exploration, national projects, and empowering young talent.",
      body: [
        "To highlight the achievements and ambitions of Astro Mining & Industrial in mineral exploration, Chairman Eng. Hamada Hammam gave a prominent interview to the long-established Rose El Youssef.",
        "The interview covered several key themes, most notably:",
        {
          list: [
            "The company's vision for advancing exploration using the latest technologies and artificial intelligence.",
            "Current and future projects that contribute to supporting the national economy.",
            "Promising opportunities in the mineral wealth sector and the challenges that have been overcome."
          ]
        },
        "The Chairman stressed that investing in human capital is the company's core driver of success, emphasising:",
        {
          list: [
            {
              term: "Empowering young talent",
              text: "Giving them direct leadership responsibilities and authority on sites and projects, reflecting the company's belief in their innovative energy."
            },
            {
              term: "The company's technology vision",
              text: "Advancing exploration operations and building a new generation of mining experts."
            }
          ]
        }
      ]
    },
    ar: {
      category: "حوار صحفي",
      title: "رؤية استراتيجية لتحويل ثروات مصر التعدينية إلى قيمة مضافة.. م/ حمادة همام رئيس مجلس الإدارة في حوار خاص مع \"روز اليوسف\"",
      excerpt:
        "المهندس حمادة همام يتحدث عن تطوير التنقيب بالذكاء الاصطناعي والمشروعات الوطنية وتمكين الكوادر الشابة.",
      body: [
        "في إطار تسليط الضوء على إنجازات وتطلعات شركة أسترو للتعدين والصناعة في قطاع التنقيب عن المعادن، أجرى المهندس حمادة همام رئيس مجلس الإدارة لقاءً صحفياً بارزاً مع \"روز اليوسف\" العريقة.",
        "تناول اللقاء محاور هامة أبرزها:",
        {
          list: [
            "رؤية الشركة لتطوير عمليات التنقيب باستخدام أحدث التكنولوجيات والذكاء الاصطناعي.",
            "المشروعات الحالية والمستقبلية التي تساهم في دعم الاقتصاد الوطني.",
            "الفرص الواعدة في قطاع الثروة المعدنية والتحديات التي تم التغلب عليها."
          ]
        },
        "وقد ركز السيد رئيس مجلس الإدارة في حديثه على أن الاستثمار في رأس المال البشري هو محرك النجاح الأساسي للشركة، مؤكداً على:",
        {
          list: [
            {
              term: "تمكين الكوادر الشابة",
              text: "ومنحهم مسؤوليات وصلاحيات قيادية مباشرة في المواقع والمشاريع لإيمان الشركة بطاقاتهم الابتكارية."
            },
            {
              term: "رؤية الشركة التقنية",
              text: "لتطوير عمليات التنقيب وبناء جيل جديد من الخبراء في قطاع التعدين."
            }
          ]
        }
      ]
    }
  }
];

export const featuredNews = newsItems.find((item) => item.featured) ?? newsItems[0];

export function getNewsItem(slug) {
  return newsItems.find((item) => item.slug === slug);
}

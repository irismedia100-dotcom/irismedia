export type Language = 'en' | 'ar';

export const TRANSLATIONS = {
  en: {
    nav: {
      work: 'WORK',
      services: 'SERVICES',
      about: 'ABOUT',
      contact: 'CONTACT',
      talk: "LET'S TALK",
      langSwitch: 'العربية'
    },
    hero: {
      pill: 'IRIS MEDIA PRODUCTION // LUXURY VISUAL AGENCY',
      titleWords: ["WE", "DON'T", "JUST", "SHOOT", "—", "WE", "CRAFT", "MOMENTS."],
      subtitle: 'Luxury visuals for spaces that speak: hotels, resorts, Nile cruises & iconic destinations.',
      exploreReel: 'EXPLORE REEL',
      scrollToExplore: 'SCROLL TO EXPLORE',
      statsProjects: '100+ Luxury Visuals',
      statsSpeed: 'Same-Day Edit & Delivery',
      statsTarget: 'Hotels & Cruises'
    },
    portfolio: {
      badge: '// SELECTED WORKS & REELS',
      title: 'FEATURED PRODUCTION',
      categories: {
        ALL: 'ALL',
        'Hospitality & Tourism': 'Hospitality & Tourism',
        'Events & Luxury': 'Events & Luxury',
        'Drone & Aerial': 'Drone & Aerial',
        'Post-Production': 'Post-Production'
      },
      watchInstagram: 'WATCH ON INSTAGRAM',
      viewReel: 'VIEW REEL ON INSTAGRAM'
    },
    services: {
      badge: '// OUR CORE SERVICES',
      title: 'WHAT WE DO BEST',
      items: [
        {
          id: 'hospitality-tourism',
          number: '01',
          title: 'Hospitality & Tourism Production',
          subtitle: 'Customized marketing solutions for resorts, hotels, and Nile cruises highlighting beauty, quality, and subtle details.',
          deliverables: [
            'Resort & Five-Star Hotel Films',
            'Nile Cruise & Maritime Cinematography',
            'Spatial & Interior Detail Coverage',
            'High-End Tourism Promotional Campaigns',
            'Luxury Lifestyle Visual Marketing'
          ],
          highlight: 'Deep understanding of the luxury sector, creating visual marketing that speaks for iconic destinations.'
        },
        {
          id: 'event-luxury-coverage',
          number: '02',
          title: 'Event & Luxury Coverage (Same-Day Edit)',
          subtitle: 'Live coverage of major conferences, New Year celebrations, and private galas with Same-Day Edit (SDE) capability.',
          deliverables: [
            'Same-Day Edit (SDE) Delivery During Event',
            'Major Conferences & Summits',
            'New Year & Festive Celebrations',
            'VIP & Private Luxury Parties',
            'High-Energy Social Reels'
          ],
          highlight: 'Speed & professionalism — editing and publishing high-quality live coverage in record time.'
        },
        {
          id: 'drone-aerial',
          number: '03',
          title: 'Drone & Aerial Cinematography',
          subtitle: 'Capturing breathtaking aerial scenes with the latest drone technology to add a fantastical dimension.',
          deliverables: [
            '4K Aerial Landscape Cinematography',
            'Architectural & Resort Fly-Throughs',
            'Nile Cruise & Coastal Tracking',
            'Licensed & Precision Drone Operation',
            'Dynamic Cinematic Aerial Angle Shots'
          ],
          highlight: 'Showcasing scenery, landscapes, and architecture from unconventional, unforgettable angles.'
        },
        {
          id: 'post-production-editing',
          number: '04',
          title: 'Post-Production & Editing Studio',
          subtitle: 'The true studio where the story takes shape through editing, cinematic color grading, and sound design.',
          deliverables: [
            'Cinematic Editing & Pacing',
            'Bespoke Color Grading & LUTs',
            'Visual Effects (VFX) & Compositing',
            'Custom Music & Sound Design Selection',
            '4K Master Delivery for Social & Broadcast'
          ],
          highlight: '"Behind every cinematic scene is a timeline filled with creative decisions."'
        }
      ]
    },
    about: {
      badge: '// ABOUT US — OUR STORY & VISION',
      headingMain: "SOME STORIES DON'T NEED WORDS...",
      headingItalic: 'THEY JUST NEED',
      headingEnd: 'THE RIGHT FRAME.',
      storyP1: "At IRIS Media Production, we believe that some stories don't need words... they just need the right frame.",
      storyP2: 'We are a media and visual production agency specializing in creating cinematic content and luxury visual marketing. Our company was founded to be the bridge connecting clients\' vision with stunning visual reality, relying on global filming and editing technologies.',
      storyP3: 'We always strive to transform ordinary events and moments into captivating visual experiences that leave an exceptional and lasting impression on the audience.',
      diffBadge: '// WHAT SETS US APART',
      differentiators: [
        {
          title: 'CINEMATIC PRECISION',
          desc: 'Treating every project as a work of art — from camera angles & lighting to final color science.'
        },
        {
          title: 'SAME DAY EDIT (SDE)',
          desc: 'Speed & professionalism — offering same-day editing and live delivery during major events.'
        },
        {
          title: 'LUXURY SECTOR EXPERTISE',
          desc: 'Deep mastery in showcasing hotels, resorts, and Nile cruises reflecting elegance and prestige.'
        }
      ],
      mottoBadge: '// OUR MOTTO & PHILOSOPHY',
      mottoQuote: '"Behind every cinematic scene is a timeline filled with creative decisions... and this is precisely where the story takes its final form."',
      mottoAuthor: '— IRIS MEDIA PRODUCTION CREATIVE TEAM'
    },
    contact: {
      badge: '// START A CINEMATIC COLLABORATION',
      title: 'READY TO BRING YOUR VISION TO LIFE?',
      subtitle: 'Let\'s discuss your upcoming commercial campaign, brand film, or creative concept. We respond within 24 hours.',
      nameLabel: 'YOUR NAME *',
      phoneLabel: 'PHONE / WHATSAPP NUMBER *',
      emailLabel: 'YOUR EMAIL *',
      serviceLabel: 'SERVICE REQUIRED',
      scopeLabel: 'PROJECT SCOPE & DETAILS',
      submitBtn: 'SUBMIT INQUIRY',
      transmitting: 'TRANSMITTING...',
      successTitle: 'MESSAGE TRANSMITTED',
      successDesc: 'Thank you for reaching out to IRIS Media Production. Our executive producer will review your project details and contact you shortly.',
      sendAnother: 'SEND ANOTHER MESSAGE',
      directChannels: '// DIRECT CHANNELS',
      instagramLabel: 'INSTAGRAM REELS',
      whatsappTitle: 'WHATSAPP & PHONE',
      emailTitle: 'OFFICIAL EMAIL',
      location: 'LOCATION: LUXOR / MIDDLE EAST & GLOBAL',
      timezone: 'TIMEZONE: UTC+3 / ACTIVE PRODUCTION',
      backToTop: 'BACK TO TOP',
      rights: 'ALL RIGHTS RESERVED.'
    }
  },
  ar: {
    nav: {
      work: 'الأعمال',
      services: 'الخدمات',
      about: 'من نحن',
      contact: 'تواصل معنا',
      talk: 'تواصل معنا',
      langSwitch: 'English'
    },
    hero: {
      pill: 'آيريس للإنتاج الإعلامي // وكالة الإنتاج البصري الفاخر',
      titleWords: ["نحن", "لا", "نصوّر", "فحسب", "—", "بل", "نصنع", "اللحظات."],
      subtitle: 'إنتاج بصري فاخر للمساحات الناطقة: الفنادق، المنتجات، الفنادق العائمة، والوجهات الأيقونية.',
      exploreReel: 'استكشف الأعمال',
      scrollToExplore: 'اسحب للتصفح',
      statsProjects: '+100 إنتاج بصري فاخر',
      statsSpeed: 'التعديل والتسليم بنفس اليوم',
      statsTarget: 'فنادق ورحلات عائمة'
    },
    portfolio: {
      badge: '// أحدث الأعمال والإنتاجات',
      title: 'معرض الأعمال السينمائية',
      categories: {
        ALL: 'الكل',
        'Hospitality & Tourism': 'الضيافة والسياحة',
        'Events & Luxury': 'الفعاليات الفاخرة',
        'Drone & Aerial': 'التصوير الجوي',
        'Post-Production': 'المونتاج والتلوين'
      },
      watchInstagram: 'شاهد على إنستجرام',
      viewReel: 'مشاهدة الفيديو على إنستجرام'
    },
    services: {
      badge: '// خدماتنا الرئيسية',
      title: 'ما نبرع في تقديمه',
      items: [
        {
          id: 'hospitality-tourism',
          number: '01',
          title: 'إنتاج قطاع الضيافة والسياحة',
          subtitle: 'نقدم حلولاً تسويقية مخصصة لقطاع السياحة تتضمن التصوير السينمائي للمنتجعات والفنادق والفنادق العائمة (Nile Cruises).',
          deliverables: [
            'أفلام الفنادق والمنتجعات 5 نجوم',
            'التصوير البحري والفنادق العائمة',
            'تغطية التفاصيل المعمارية والداخلية',
            'حملات ترويجية سياحية فاخرة',
            'تسويق بصري لنمط الحياة الفاخر'
          ],
          highlight: 'فهم عميق لقطاع الفخامة لإبراز جمال المكان والتفاصيل الدقيقة التي تجذب الزوار من مختلف دول العالم.'
        },
        {
          id: 'event-luxury-coverage',
          number: '02',
          title: 'تغطية الفعاليات والمناسبات (Same-Day Edit)',
          subtitle: 'تغطية شاملة وحية للمؤتمرات الكبرى، احتفالات رأس السنة، والحفلات الخاصة مع تقنية التعديل والتسليم الفوري.',
          deliverables: [
            'التسليم والمونتاج المباشر بنفس اليوم (SDE)',
            'تغطية المؤتمرات والقمم الكبرى',
            'احتفالات رأس السنة والمناسبات الفاخرة',
            'الحفلات الخاصة وكبار الشخصيات (VIP)',
            'مقاطع فيديو سينمائية سريعة لمنصات التواصل'
          ],
          highlight: 'سرعة واحترافية عالية تتيح لعملائنا تغطية حية وفعالة ونشر المقاطع بأعلى جودة أثناء الفعالية.'
        },
        {
          id: 'drone-aerial',
          number: '03',
          title: 'التصوير الجوي والسينمائي بالدرون',
          subtitle: 'استخدام أحدث تقنيات الطائرات بدون طيار (Drone) لتقاط مشاهد جوية ساحرة تضيف بعداً خيالياً وتبرز المعالم.',
          deliverables: [
            'تصوير جوي سينمائي بدقة 4K للمناظر الطبيعية',
            'جولات جوية دقيقة بداخل المنتجات والمعمار',
            'تتبع الفنادق العائمة والشواطئ',
            'تشغيل مرخص واحترافي للطائرات',
            'لقطات جوية سينمائية من زوايا غير تقليدية'
          ],
          highlight: 'إبراز المناظر الطبيعية والمعمارية من زوايا استثنائية لا تُنسى.'
        },
        {
          id: 'post-production-editing',
          number: '04',
          title: 'استوديو المونتاج والتعديل السينمائي',
          subtitle: 'المحتدف الحقيقي حيث تتبلور القصة؛ ويشمل المونتاج الاحترافي، التلوين السينمائي، والمؤثرات البصرية والصوتية.',
          deliverables: [
            'مونتاج وسرد قصصي سينمائي',
            'تلوين سينمائي احترافي (Color Grading)',
            'مؤثرات بصرية (VFX) وتركيب مشاهد',
            'اختيار الموسيقى والمؤثرات الصوتية الخاصة',
            'تصدير ماستر 4K جاهز للعرض والمنصات'
          ],
          highlight: '"وراء كل مشهد سينمائي شريط زمني مليء بالقرارات الإبداعية... وهنا تحديداً تتشكل القصة."'
        }
      ]
    },
    about: {
      badge: '// عن الشركة — قصتنا ورؤيتنا',
      headingMain: 'بعض القصص لا تحتاج إلى كلمات...',
      headingItalic: 'بل تحتاج فقط',
      headingEnd: 'الكادر المناسب.',
      storyP1: 'في آيريس للإنتاج الإعلامي (IRIS Media Production)، نؤمن أن بعض القصص لا تحتاج إلى كلمات... بل تحتاج الكادر المناسب.',
      storyP2: 'نحن وكالة إنتاج إعلامي وبصري متخصصة في خلق المحتوى السينمائي والتسويق البصري الفاخر. تأسست شركتنا لتكون الجسر بين رؤية العملاء والواقع البصري المبهر، معتمدين على أحدث تقنيات التصوير والمونتاج العالمية.',
      storyP3: 'نسعى دائماً لتحويل الأحداث واللحظات العادية إلى تجارب بصرية ساحرة تترك انطباعاً استثنائياً وخالداً لدى الجمهور.',
      diffBadge: '// ما الذي يميزنا؟',
      differentiators: [
        {
          title: 'الدقة السينمائية',
          desc: 'نتعامل مع كل مشروع كعمل فني مستقل — بدءاً من تخطيط الزوايا والإضاءة وصولاً للتلوين النهائي.'
        },
        {
          title: 'التعديل بنفس اليوم (SDE)',
          desc: 'السرعة والاحترافية — تقديم خدمة التعديل والتسليم بنفس اليوم لتوفير تغطية حية وفعالة.'
        },
        {
          title: 'الخبرة في القطاع الفاخر',
          desc: 'نملك خبرة واسعة في إبراز تفاصيل الفنادق والمنتجعات والجولات السياحية بأسلوب يفيض بالفخامة.'
        }
      ],
      mottoBadge: '// شعارنا وفلسفتنا',
      mottoQuote: '"وراء كل مشهد سينمائي شريط زمني مليء بالقرارات الإبداعية... وهنا تحديداً تتشكل القصة في صورتها النهائية."',
      mottoAuthor: '— فريق الإبداع في آيريس للإنتاج الإعلامي'
    },
    contact: {
      badge: '// ابدأ تعاوناً سينمائياً',
      title: 'هل أنت جاهز لتحويل رؤيتك إلى واقع بصري؟',
      subtitle: 'تواصل معنا لمناقشة مشروعك القادم، حملتك الإعلانية، أو فكرتك الإبداعية. نرد خلال 24 ساعة.',
      nameLabel: 'الاسم الكريم *',
      phoneLabel: 'رقم الهاتف / واتساب *',
      emailLabel: 'البريد الإلكتروني *',
      serviceLabel: 'الخدمة المطلوبة',
      scopeLabel: 'تفاصيل ونطاق المشروع',
      submitBtn: 'إرسال الطلب',
      transmitting: 'جاري الإرسال...',
      successTitle: 'تم إرسال الرسالة بنجاح',
      successDesc: 'شكراً لتواصلك مع آيريس للإنتاج الإعلامي. سيقوم المنتج التنفيذي بمراجعة تفاصيل مشروعك والتواصل معك قريباً.',
      sendAnother: 'إرسال رسالة أخرى',
      directChannels: '// قنوات التواصل المباشر',
      instagramLabel: 'إنستجرام ريلز',
      whatsappTitle: 'واتساب وهاتف الشركة',
      emailTitle: 'البريد الرسمي',
      location: 'الموقع: الأقصر / الشرق الأوسط وعالمياً',
      timezone: 'التوقيت: غرينتش+3 / إنتاج نشط',
      backToTop: 'العودة للأعلى',
      rights: 'جميع الحقوق محفوظة.'
    }
  }
};

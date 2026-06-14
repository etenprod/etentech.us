  document.addEventListener('DOMContentLoaded', () => {
  const translations = {
    uk: {
      'nav.home': 'ГОЛОВНА',
      'nav.services': 'ПОСЛУГИ',
      'nav.faq': 'ПИТАННЯ',
      'nav.contact': 'НАПИСАТИ НАМ',
      'case.back': 'Назад до портфоліо',
      'case.meta.scope': 'Формат',
      'case.meta.result': 'Результат',
      'case.overview.label': 'Огляд',
      'case.challenges.label': 'Задачі',
      'case.challenges.title': 'Що потрібно було вирішити',
      'case.solutions.label': 'Рішення',
      'case.solutions.title': 'Що ми змінили',
      'case.results.label': 'Результати',
      'case.results.title': 'Вимірюваний вплив сайту',
      'case.related.label': 'Ще',
      'case.related.title': 'Інші проєкти',

      'hero.leftTitle': 'МAРКЕТИНГ<br>ЯК СИСТЕМА,<br>А НЕ ВИПАДКОВІСТЬ',
      'hero.leftDesc': 'Ми будуємо цілісні рішення, де кожен елемент працює на спільний результат.',
      'hero.rightTitle': 'КРЕАТИВНА<br>МАРКЕТИНГОВА<br>АГЕНЦІЯ',
      'hero.rightDesc': 'Ми створюємо бренди, що <span>виділяються</span> та маркетинг,<br>який приносить <span>результат</span>',
      'footer.agency': 'МАРКЕТИНГОВА АГЕНЦІЯ',
      'hero.years': 'роки досвіду',
      'hero.projects': 'успішних проєктів',

      'featured.eyebrow': 'ПРОЄКТИ',
      'featured.title': '<span>Як ми допомагаємо</span><br>зростати',
      'featured.button': 'Дивитись всі',
      'featured.nav.strategy': 'Стратегія',
      'featured.nav.ads': 'Реклама',
      'featured.project1.hero': 'Каталог плитки та матеріалів',
      'featured.project1.copy': 'Головна сторінка, колекції, каталог і швидкий шлях до запиту ціни.',
      'featured.project1.metricLabel': 'Зручність каталогу',
      'featured.project1.category': 'E-commerce каталог',
      'featured.project1.title': 'Probouw Store',
      'featured.project1.service': 'CATALOGUE - FILTERS',
      'featured.project1.description': 'Зручний шлях від колекцій до запиту ціни',
      'featured.project2.hero': 'Атмосферний сайт ресторану',
      'featured.project2.copy': 'Меню, події, галерея і бронювання столика в єдиному візуальному стилі.',
      'featured.project2.metricLabel': 'Бронювання',
      'featured.project2.category': 'Restaurant website',
      'featured.project2.title': 'Kolyba Restaurant',
      'featured.project2.service': 'WEBSITE - MENU',
      'featured.project2.description': 'Атмосферна подача ресторану та бронювання',
      'featured.project3.hero': 'Платформа обміну валют і crypto',
      'featured.project3.copy': 'Live rates, калькулятор, заявка на обмін, офіси та FAQ в одному інтерфейсі.',
      'featured.project3.metricLabel': 'Заявки на обмін',
      'featured.project3.category': 'Fintech platform',
      'featured.project3.title': 'Monex Exchange',
      'featured.project3.service': 'UI - EXCHANGE FLOW',
      'featured.project3.description': 'Темний fintech-інтерфейс для заявок на обмін',
      'featured.project4.hero': 'Лендінг для ремонту вікон',
      'featured.project4.copy': 'Біль клієнта, послуги, переваги, процес, відгуки і сильний контактний блок.',
      'featured.project4.metricLabel': 'Звернення клієнтів',
      'featured.project4.category': 'Service landing',
      'featured.project4.title': 'OknaNiko',
      'featured.project4.service': 'LANDING - TRUST',
      'featured.project4.description': 'Продаючий лендінг для швидких звернень',

      'portfolio.kicker': 'ПОРТФОЛІО',
      'portfolio.title': 'Останні проєкти',
      'portfolio.desc': 'Вибрані системи, кампанії і цифрові точки дотику для сервісних брендів.',
      'portfolio.cta.note': 'Є ідея для проєкту?',
      'portfolio.cta.button': 'Обговорити проєкт',
      'portfolio.project4.hero': 'Лендінгова система для експертних послуг',
      'portfolio.project4.copy': 'Структура оферу, блоки довіри і спокійний шлях до консультації.',
      'portfolio.project4.metric': 'Якісні ліди',
      'portfolio.project4.category': 'Лендінг',
      'portfolio.project4.title': 'Експертна практика',
      'portfolio.project4.service': 'Сайт - Копірайтинг - Аналітика',
      'portfolio.project4.desc': 'Перекладаємо експертність у сторінку, яка пояснює цінність і веде до звернення',
      'portfolio.project5.hero': 'Візуальне оновлення локального бренду',
      'portfolio.project5.copy': 'Чистіша айдентика, системні шаблони для соцмереж і креативи.',
      'portfolio.project5.metric': 'Впізнаваність',
      'portfolio.project5.category': 'Брендинг',
      'portfolio.project5.title': 'Локальний ритейл',
      'portfolio.project5.service': 'Айдентика - Соцмережі - Запуск',
      'portfolio.project5.desc': 'Допомагаємо бренду стати впізнаваним у кожній точці контакту',
      'portfolio.project6.hero': 'Рекламна воронка для стабільних запитів',
      'portfolio.project6.copy': 'Тести кампаній, сегменти аудиторії і щотижнева оптимізація.',
      'portfolio.project6.metric': 'Обсяг запитів',
      'portfolio.project6.category': 'Реклама',
      'portfolio.project6.title': 'Сервісна кампанія',
      'portfolio.project6.service': 'Таргет - Креатив - Аналітика',
      'portfolio.project6.desc': 'Будуємо повторюваний шлях залучення від повідомлення до запиту',

      'services.kicker': 'ПОСЛУГИ',
      'services.title': 'Маркетинг,<br>що працює системно.',
      'services.desc': 'Бренд, контент, реклама й аналітика - в одній системі.',
      'services.weDo': 'Що входить:',
      'services.strategy.title': 'Стратегія',
      'services.strategy.text': 'Допомагаємо бізнесу зрозуміти, куди рухатись далі: що розвивати, на чому зосередитись і як залучати клієнтів у довгостроковій перспективі.',
      'services.smm.title': 'SMM',
      'services.smm.text': 'Ведемо соцмережі зрозуміло, регулярно і з фокусом на звернення.',
      'services.smm.item1': 'Контент-стратегія',
      'services.smm.item2': 'Пости, сторіс і візуали',
      'services.smm.item3': 'Планування і регулярність',
      'services.smm.item4': 'Аналіз реакцій аудиторії',
      'services.ads.title': 'Реклама',
      'services.ads.text': 'Запускаємо та оптимізуємо рекламу з фокусом на звернення й продажі. Працюємо з тестами, цифрами та реальними результатами.',
      'services.digital.title': 'Digital',
      'services.digital.text': 'Поєднуємо сайт, рекламу й аналітику в один шлях клієнта.',
      'services.digital.item1': 'Лендінги і структура сайту',
      'services.digital.item2': 'Запуск реклами',
      'services.digital.item3': 'Аналітика і гіпотези',
      'services.digital.item4': 'Креативи для кампаній',
      'services.branding.title': 'Брендинг',
      'services.branding.text': 'Створюємо образ бренду, який легко впізнати і якому довіряють.',
      'services.branding.item1': 'Позиціонування і тон бренду',
      'services.branding.item2': 'Логотип і айдентика',
      'services.branding.item3': 'Візуальна система',
      'services.branding.item4': 'Бренд-гайд',

      'consult.note1': 'Забагато варіантів?',
      'consult.note2': 'Не знаєте, що обрати?',
      'consult.title': 'Напишіть нам',
      'consult.text': 'Обговоримо ваш бізнес, задачі і підкажемо, з чого краще почати. Це безкоштовно.',
      'consult.button': 'Обговорити безкоштовно',
      'consult.free': '0₴',

      'startProject.kicker': 'ЗРОБІМО ЦЕ',
      'startProject.title': '<span>Готові</span><br>почати?',
      'startProject.contact': 'Контактна інформація',
      'startProject.name': "Ваше ім'я",
      'startProject.email': 'Бізнес email',
      'startProject.project': 'Розкажіть про ваш проєкт',
      'startProject.budget': 'Бюджет *',
      'startProject.select': 'Оберіть...',
      'startProject.budget1': 'від $400',
      'startProject.budget2': 'від $1000',
      'startProject.budget3': 'від $1500',
      'startProject.help': 'Чим можемо допомогти *',
      'startProject.branding': 'Брендинг',
      'startProject.site': 'Сайт',
      'startProject.submit': 'Відправити заявку',
      'startProject.success': "Заявку відправлено. Ми скоро зв'яжемось з вами.",
      'startProject.localSend': 'Для локального перегляду відкриється поштовий клієнт. На опублікованому сайті заявка піде напряму на email.',

      'pricing.kicker': 'ПРАЙС',
      'pricing.title': 'Формати співпраці',
      'pricing.button': 'Обрати пакет',
      'pricing.start.title': 'START',
      'pricing.start.desc': 'від $400',
      'pricing.start.item1': 'Лендінг до 5 сторінок',
      'pricing.start.item2': 'Адаптивний дизайн',
      'pricing.start.item3': 'Базове SEO',
      'pricing.start.item4': 'Контактна форма',
      'pricing.start.item5': 'Термін: 7-10 днів',
      'pricing.start.price': 'від $400',
      'pricing.growth.title': 'BUSINESS',
      'pricing.growth.desc': 'від $1000',
      'pricing.growth.item1': 'До 10 сторінок',
      'pricing.growth.item2': 'Індивідуальний дизайн',
      'pricing.growth.item3': 'SEO + аналітика',
      'pricing.growth.item4': 'Форма заявки',
      'pricing.growth.item5': 'Адмін-панель',
      'pricing.growth.item6': 'Термін: 14-21 день',
      'pricing.growth.price': 'від $1000',
      'pricing.full.title': 'PRO',
      'pricing.full.desc': 'від $1500',
      'pricing.full.item1': 'Необмежена кількість сторінок',
      'pricing.full.item2': 'Розширений бізнес-функціонал',
      'pricing.full.item3': 'Інтеграції: WhatsApp, Telegram, CRM',
      'pricing.full.item4': 'Розширена аналітика',
      'pricing.full.item5': 'Термін: 21-30 днів',
      'pricing.full.item6': 'Підтримка запуску',
      'pricing.full.price': 'від $1500',

      'faq.kicker': 'ПИТАННЯ',
      'faq.title': 'Питання,<br>які ставлять найчастіше.',
      'faq.desc': 'Коротко про послуги, формат роботи та співпрацю.',
      'faq.q1': 'Скільки коштують наші послуги?',
      'faq.a1': 'Вартість залежить від задач, обсягу робіт та цілей бізнесу. Після короткого обговорення ми пропонуємо індивідуальний формат і бюджет.',
      'faq.q2': 'Як швидко можна побачити результат?',
      'faq.a2': 'Перші зміни зазвичай видно вже в перші 1-2 місяці. Стабільний ріст - це система й робота на дистанції.',
      'faq.q3': 'Які послуги можна замовити окремо?',
      'faq.a3': 'Окремо можна замовити стратегію, SMM-ведення, запуск реклами або брендинг.',
      'faq.q4': 'З чого починається співпраця?',
      'faq.a4': 'Починаємо з короткого знайомства та брифу: цілі, продукт, аудиторія, бюджет і очікування.',
      'faq.q5': 'Чи працюєте ви з малим бізнесом?',
      'faq.a5': 'Так. Ми підбираємо реалістичний формат і пріоритети, щоб результат відчувався в продажах.',
      'faq.q6': 'Чим ви відрізняєтесь від інших агенцій?',
      'faq.a6': 'Ми не "робимо разово", а вибудовуємо систему: цілі → стратегія → контент → тести → аналітика.',

      'footer.title': 'THERE ARE NO LIMITS<br>TO PERFECTION',
      'footer.meta': 'МАРКЕТИНГОВА АГЕНЦІЯ',
      'footer.terms': 'УМОВИ & ПОЛОЖЕННЯ',
      'footer.privacy': 'ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ',
      'footer.cta': 'ПОЧАТИ<br>РОЗМОВУ'
    },

    en: {
      'nav.home': 'HOME',
      'nav.services': 'SERVICES',
      'nav.faq': 'FAQ',
      'nav.contact': 'WRITE TO US',
      'case.back': 'Back to portfolio',
      'case.meta.scope': 'Scope',
      'case.meta.result': 'Result',
      'case.overview.label': 'Overview',
      'case.challenges.label': 'Challenges',
      'case.challenges.title': 'What had to be solved',
      'case.solutions.label': 'Solutions',
      'case.solutions.title': 'What we changed',
      'case.results.label': 'Results',
      'case.results.title': 'Measurable website impact',
      'case.related.label': 'Related',
      'case.related.title': 'More projects',

      'hero.leftTitle': 'MARKETING<br>AS A SYSTEM,<br>NOT A COINCIDENCE',
      'hero.leftDesc': 'We build complete solutions where every element works toward one shared result.',
      'hero.rightTitle': 'CREATIVE<br>MARKETING<br>AGENCY',
      'hero.rightDesc': 'We create brands that <span>stand out</span> and marketing<br>that delivers <span>results</span>',
      'footer.agency': 'MARKETING AGENCY',
      'hero.years': 'years of experience',
      'hero.projects': 'successful projects',

      'featured.eyebrow': 'FEATURED PROJECTS',
      'featured.title': '<span>How we helped</span><br>other succeed',
      'featured.button': 'See all projects',
      'featured.nav.strategy': 'Strategy',
      'featured.nav.ads': 'Ads',
      'featured.project1.hero': 'Tile and materials catalogue',
      'featured.project1.copy': 'Homepage, collections, catalogue, and a fast path to quote requests.',
      'featured.project1.metricLabel': 'Catalogue Usability',
      'featured.project1.category': 'E-commerce catalogue',
      'featured.project1.title': 'Probouw Store',
      'featured.project1.service': 'CATALOGUE - FILTERS',
      'featured.project1.description': 'A clear path from collections to quote requests',
      'featured.project2.hero': 'Atmospheric restaurant website',
      'featured.project2.copy': 'Menu, private events, gallery, and table booking in one visual style.',
      'featured.project2.metricLabel': 'Table Bookings',
      'featured.project2.category': 'Restaurant website',
      'featured.project2.title': 'Kolyba Restaurant',
      'featured.project2.service': 'WEBSITE - MENU',
      'featured.project2.description': 'A warm restaurant story with booking flow',
      'featured.project3.hero': 'Crypto and cash exchange platform',
      'featured.project3.copy': 'Live rates, exchange calculator, request form, offices, and FAQ in one interface.',
      'featured.project3.metricLabel': 'Exchange Requests',
      'featured.project3.category': 'Fintech platform',
      'featured.project3.title': 'Monex Exchange',
      'featured.project3.service': 'UI - EXCHANGE FLOW',
      'featured.project3.description': 'A dark fintech interface for exchange requests',
      'featured.project4.hero': 'Landing page for window repair',
      'featured.project4.copy': 'Customer pains, services, benefits, process, reviews, and a strong contact block.',
      'featured.project4.metricLabel': 'Client Requests',
      'featured.project4.category': 'Service landing',
      'featured.project4.title': 'OknaNiko',
      'featured.project4.service': 'LANDING - TRUST',
      'featured.project4.description': 'A conversion-focused page for fast client calls',

      'portfolio.kicker': 'PORTFOLIO',
      'portfolio.title': 'Latest Projects',
      'portfolio.desc': 'Selected systems, campaigns, and digital touchpoints built for service brands.',
      'portfolio.cta.note': 'Have a project idea?',
      'portfolio.cta.button': "Let's get started",
      'portfolio.project4.hero': 'Landing system for expert services',
      'portfolio.project4.copy': 'Offer structure, trust blocks, and a calmer path to consultation.',
      'portfolio.project4.metric': 'Qualified Leads',
      'portfolio.project4.category': 'Landing',
      'portfolio.project4.title': 'Expert Practice',
      'portfolio.project4.service': 'Website - Copy - Analytics',
      'portfolio.project4.desc': 'Turning expertise into a page that explains value clearly and moves people to contact',
      'portfolio.project5.hero': 'Visual refresh for a local brand',
      'portfolio.project5.copy': 'A cleaner identity, consistent social templates, and launch creatives.',
      'portfolio.project5.metric': 'Brand Recall',
      'portfolio.project5.category': 'Branding',
      'portfolio.project5.title': 'Local Retail',
      'portfolio.project5.service': 'Identity - Social - Launch',
      'portfolio.project5.desc': 'Making the brand easier to recognize across every touchpoint',
      'portfolio.project6.hero': 'Ad funnel for recurring requests',
      'portfolio.project6.copy': 'Campaign tests, audience segments, and weekly optimization rhythm.',
      'portfolio.project6.metric': 'Request Volume',
      'portfolio.project6.category': 'Advertising',
      'portfolio.project6.title': 'Service Campaign',
      'portfolio.project6.service': 'Target - Creative - Analytics',
      'portfolio.project6.desc': 'Building a repeatable acquisition flow from message to request',

      'services.kicker': 'SERVICES',
      'services.title': 'Marketing<br>that works as a system.',
      'services.desc': 'Brand, content, ads, and analytics - connected in one flow.',
      'services.weDo': 'We do:',
      'services.strategy.title': 'Strategy',
      'services.strategy.text': 'We help businesses understand where to move next: what to develop, what to focus on, and how to attract clients long term.',
      'services.smm.title': 'SMM',
      'services.smm.text': 'We run social media clearly, consistently, and focused on leads.',
      'services.smm.item1': 'Content strategy',
      'services.smm.item2': 'Posts, stories, visuals',
      'services.smm.item3': 'Planning and consistency',
      'services.smm.item4': 'Audience reaction analysis',
      'services.ads.title': 'Advertising',
      'services.ads.text': 'We launch and optimize ads with a focus on leads and sales. We work with tests, numbers, and real results.',
      'services.digital.title': 'Digital',
      'services.digital.text': 'We connect website, ads, and analytics into one client path.',
      'services.digital.item1': 'Landing pages and site structure',
      'services.digital.item2': 'Ad launch',
      'services.digital.item3': 'Analytics and hypotheses',
      'services.digital.item4': 'Campaign creatives',
      'services.branding.title': 'Branding',
      'services.branding.text': 'We build a brand image people recognize, remember, and trust.',
      'services.branding.item1': 'Positioning and tone',
      'services.branding.item2': 'Logo and identity',
      'services.branding.item3': 'Visual system',
      'services.branding.item4': 'Brand guide',

      'consult.note1': 'Too many options?',
      'consult.note2': 'No idea what to pick?',
      'consult.title': 'Text us',
      'consult.text': 'We will discuss your business, goals, and suggest where to start. It is free.',
      'consult.button': 'Discuss for free',
      'consult.free': 'FREE',

      'startProject.kicker': "LET'S MAKE IT HAPPEN",
      'startProject.title': '<span>Ready to</span><br>get started',
      'startProject.contact': 'Contact information',
      'startProject.name': 'Full name',
      'startProject.email': 'Business email',
      'startProject.project': 'Tell us about your project',
      'startProject.budget': 'Budget *',
      'startProject.select': 'Select...',
      'startProject.budget1': 'Up to $700',
      'startProject.budget2': '$700 - $1500',
      'startProject.budget3': '$1500+',
      'startProject.help': 'How can we help you *',
      'startProject.branding': 'Branding',
      'startProject.site': 'Website',
      'startProject.submit': 'Send request',
      'startProject.success': 'Request sent. We will contact you soon.',
      'startProject.localSend': 'For local preview, your email client will open. On the published site, the request is sent directly to email.',

      'pricing.kicker': 'PRICING',
      'pricing.title': 'Collaboration formats',
      'pricing.button': 'Choose package',
      'pricing.start.title': 'START',
      'pricing.start.desc': 'from $700',
      'pricing.start.item1': 'Landing site up to 5 pages',
      'pricing.start.item2': 'Responsive design',
      'pricing.start.item3': 'Basic SEO',
      'pricing.start.item4': 'Contact form',
      'pricing.start.item5': 'Timeline: 7-10 days',
      'pricing.start.price': 'from $700',
      'pricing.growth.title': 'BUSINESS',
      'pricing.growth.desc': 'from $1500',
      'pricing.growth.item1': 'Up to 10 pages',
      'pricing.growth.item2': 'Custom design',
      'pricing.growth.item3': 'SEO + analytics',
      'pricing.growth.item4': 'Lead form',
      'pricing.growth.item5': 'Admin panel',
      'pricing.growth.item6': 'Timeline: 14-21 days',
      'pricing.growth.price': 'from $1500',
      'pricing.full.title': 'PRO',
      'pricing.full.desc': 'from $2000',
      'pricing.full.item1': 'Unlimited pages',
      'pricing.full.item2': 'Advanced business functionality',
      'pricing.full.item3': 'Integrations: WhatsApp, Telegram, CRM',
      'pricing.full.item4': 'Advanced analytics',
      'pricing.full.item5': 'Timeline: 21-30 days',
      'pricing.full.item6': 'Launch support',
      'pricing.full.price': 'from $2000',

      'faq.kicker': 'FAQ',
      'faq.title': 'Questions<br>we get most often.',
      'faq.desc': 'Short answers about services, workflow, and collaboration.',
      'faq.q1': 'How much do your services cost?',
      'faq.a1': 'The cost depends on the goals, scope of work, and business needs. After a short discussion, we offer a custom format and budget.',
      'faq.q2': 'How fast can we see results?',
      'faq.a2': 'The first changes are usually visible within the first 1–2 months. Stable growth comes from a clear system and consistent work.',
      'faq.q3': 'Which services can be ordered separately?',
      'faq.a3': 'You can order strategy, SMM management, advertising launch, or branding separately.',
      'faq.q4': 'How does cooperation start?',
      'faq.a4': 'We start with a short introduction and brief: goals, product, audience, budget, and expectations.',
      'faq.q5': 'Do you work with small businesses?',
      'faq.a5': 'Yes. We choose a realistic format and priorities so the result can be felt in sales.',
      'faq.q6': 'How are you different from other agencies?',
      'faq.a6': 'We do not just create one-off pieces. We build a system: goals → strategy → content → testing → analytics.',

      'footer.title': 'THERE ARE NO LIMITS<br>TO PERFECTION',
      'footer.meta': 'MARKETING AGENCY',
      'footer.terms': 'TERMS & CONDITIONS',
      'footer.privacy': 'PRIVACY POLICY',
      'footer.cta': 'START<br>A CONVERSATION'
    }
  };

  const projectCases = {
    probouw: {
      accent: '#d91f26',
      title: { uk: 'Probouw Store', en: 'Probouw Store' },
      category: { uk: 'E-commerce каталог', en: 'E-commerce catalogue' },
      intro: {
        uk: 'Структурували каталог плитки та матеріалів так, щоб клієнт швидше знаходив колекції, розумів асортимент і переходив до запиту ціни.',
        en: 'We structured a tile and materials catalogue so customers can find collections faster, understand the range, and move toward a quote request.'
      },
      scope: { uk: 'Каталог - фільтри - запит ціни', en: 'Catalogue - Filters - Quote flow' },
      result: '+42%',
      overview: {
        uk: 'Проєкту потрібна була зрозуміла магазинна логіка: головна сторінка, категорії, колекції, товарні блоки та контактний шлях без зайвих кроків. Ми зібрали сторінки в систему, де візуальний вибір матеріалів поєднаний з простим сценарієм звернення.',
        en: 'The project needed a clear store logic: homepage, categories, collections, product blocks, and a contact path without extra friction. We connected visual material browsing with a simple enquiry flow.'
      },
      challenges: {
        uk: ['Показати великий асортимент без перевантаження.', 'Зробити шлях до запиту ціни помітним.', 'Зберегти чистий вигляд каталогу на мобільних.'],
        en: ['Show a large catalogue without visual overload.', 'Make the quote request path easy to notice.', 'Keep the catalogue clean on mobile screens.']
      },
      solutions: {
        uk: ['Побудували зрозумілу ієрархію категорій і колекцій.', 'Винесли ключові дії поруч із товарними блоками.', 'Адаптували картки, фільтри та превʼю під швидкий перегляд.'],
        en: ['Built a clear hierarchy for categories and collections.', 'Placed key actions close to product blocks.', 'Adapted cards, filters, and previews for fast browsing.']
      },
      results: {
        uk: ['Швидший вибір колекцій', 'Зрозуміліший каталог', 'Менше кроків до запиту'],
        en: ['Faster collection browsing', 'Clearer catalogue structure', 'Fewer steps to enquiry']
      },
      images: [
        'images/sites/probouw/1920w light.png',
        'images/sites/probouw/600-380w light.png',
        'images/sites/probouw/600-380.png'
      ],
      gallery: [
        { type: 'scene-split', images: ['images/sites/probouw/1920w light-1.png', 'images/sites/probouw/600-380w light.png'] },
        { type: 'scene-angle', images: ['images/sites/probouw/600-380.png', 'images/sites/probouw/1920w light.png', 'images/sites/probouw/600-380w light.png'] },
        { type: 'scene-stack', images: ['images/sites/probouw/1920w light.png', 'images/sites/probouw/600-380w light.png'] },
        { type: 'scene-mobile', images: ['images/sites/probouw/600-380.png', 'images/sites/probouw/600-380w light.png'] }
      ]
    },
    kolyba: {
      accent: '#c70000',
      title: { uk: 'Kolyba Restaurant', en: 'Kolyba Restaurant' },
      category: { uk: 'Сайт ресторану', en: 'Restaurant website' },
      intro: {
        uk: 'Атмосферний сайт ресторану, де меню, події, доставка і бронювання зібрані в одну спокійну та виразну подачу.',
        en: 'An atmospheric restaurant website where menu, events, delivery, and booking are brought into one warm and expressive experience.'
      },
      scope: { uk: 'Сайт - меню - бронювання', en: 'Website - Menu - Booking' },
      result: '+58%',
      overview: {
        uk: 'Головне завдання полягало в тому, щоб передати характер закладу і не втратити практичність. Сторінка мала одночасно створювати настрій, показувати пропозиції та вести гостя до бронювання.',
        en: 'The main goal was to express the restaurant character without losing practical clarity. The page had to create mood, present offers, and guide guests toward booking.'
      },
      challenges: {
        uk: ['Поєднати атмосферу ресторану з функціональністю.', 'Зробити меню і події легкими для перегляду.', 'Не заховати бронювання серед контенту.'],
        en: ['Balance restaurant atmosphere with functionality.', 'Make menu and events easy to browse.', 'Keep booking visible inside rich content.']
      },
      solutions: {
        uk: ['Зібрали сторінки навколо сильного першого екрану.', 'Додали окремі сценарії для меню, подій і доставки.', 'Посилили заклики до бронювання в ключових місцях.'],
        en: ['Built the pages around a strong first screen.', 'Added separate paths for menu, events, and delivery.', 'Reinforced booking calls in key sections.']
      },
      results: {
        uk: ['Більше бронювань', 'Ясніша структура меню', 'Сильніша атмосфера бренду'],
        en: ['More table bookings', 'Clearer menu structure', 'Stronger brand atmosphere']
      },
      images: [
        'images/sites/kolyba/600-380w-1.png',
        'images/sites/kolyba/Site Kolyba_Menu.png',
        'images/sites/kolyba/600-380w.png'
      ],
      gallery: [
        { type: 'scene-split', images: ['images/sites/kolyba/1920w.png', 'images/sites/kolyba/Site Kolyba_Menu.png'] },
        { type: 'scene-angle', images: ['images/sites/kolyba/600-380w-1.png', 'images/sites/kolyba/600-380w.png', 'images/sites/kolyba/Site Kolyba_Menu.png'] },
        { type: 'scene-stack', images: ['images/sites/kolyba/Site Kolyba_Menu.png', 'images/sites/kolyba/600-380w.png'] },
        { type: 'scene-mobile', images: ['images/sites/kolyba/600-380w-1.png', 'images/sites/kolyba/600-380w.png'] }
      ]
    },
    monex: {
      accent: '#c89a57',
      title: { uk: 'Monex Exchange', en: 'Monex Exchange' },
      category: { uk: 'Fintech платформа', en: 'Fintech platform' },
      intro: {
        uk: 'Інтерфейс для обміну валют і crypto з live-курсами, калькулятором, заявкою та зрозумілим шляхом до офісів і FAQ.',
        en: 'An exchange interface for cash and crypto with live rates, calculator, request flow, offices, and FAQ in one clear path.'
      },
      scope: { uk: 'UI - калькулятор - заявки', en: 'UI - Calculator - Requests' },
      result: '+36%',
      overview: {
        uk: 'Для фінансового сервісу важливо швидко зняти напругу: показати курс, пояснити дію і дати просту форму звернення. Ми зробили темний інтерфейс з акцентом на швидкий розрахунок і довіру.',
        en: 'For a finance service, the interface needs to reduce hesitation quickly: show rates, explain the action, and provide a simple request form. We built a dark UI focused on fast calculation and trust.'
      },
      challenges: {
        uk: ['Показати багато даних без відчуття складності.', 'Зробити калькулятор центральним сценарієм.', 'Підтримати довіру через структуру і FAQ.'],
        en: ['Show a lot of data without making it feel complex.', 'Make the calculator the central interaction.', 'Support trust through structure and FAQ.']
      },
      solutions: {
        uk: ['Винесли курси та обмін у перший сценарій.', 'Скоротили шлях від розрахунку до заявки.', 'Додали зрозумілі блоки офісів, умов і відповідей.'],
        en: ['Placed rates and exchange flow upfront.', 'Shortened the path from calculation to request.', 'Added clear office, terms, and FAQ blocks.']
      },
      results: {
        uk: ['Швидший шлях до заявки', 'Зрозумілий обмінний сценарій', 'Більше довіри до сервісу'],
        en: ['Faster request path', 'Clear exchange scenario', 'More trust in the service']
      },
      images: [
        'images/sites/monex/[LIGHT] Landing Page (WIDE).png',
        'images/sites/monex/[LIGHT] Landing Page (768-300).png'
      ],
      gallery: [
        { type: 'scene-split', images: ['images/sites/monex/[LIGHT] Landing Page (WIDE).png', 'images/sites/monex/[LIGHT] Landing Page (768-300).png'] },
        { type: 'scene-angle', images: ['images/sites/monex/[LIGHT] Landing Page (768-300).png', 'images/sites/monex/[LIGHT] Landing Page (WIDE).png'] },
        { type: 'scene-stack', images: ['images/sites/monex/[LIGHT] Landing Page (WIDE).png', 'images/sites/monex/[LIGHT] Landing Page (768-300).png'] }
      ]
    },
    oknaniko: {
      accent: '#3572ff',
      title: { uk: 'OknaNiko', en: 'OknaNiko' },
      category: { uk: 'Сервісний лендінг', en: 'Service landing' },
      intro: {
        uk: 'Лендінг для ремонту вікон, який швидко пояснює проблему, показує довіру та веде користувача до звернення.',
        en: 'A landing page for window repair that quickly explains the problem, builds trust, and guides users toward contact.'
      },
      scope: { uk: 'Лендінг - довіра - заявки', en: 'Landing - Trust - Requests' },
      result: '+64%',
      overview: {
        uk: 'Сторінка мала працювати для швидкого рішення: людина відчуває проблему, бачить сервіс, перевіряє довіру і залишає заявку. Ми зібрали цей шлях в одну пряму структуру з сильним першим екраном.',
        en: 'The page needed to work for a quick decision: users recognize the problem, see the service, check trust signals, and contact the business. We shaped that into one direct flow with a strong hero.'
      },
      challenges: {
        uk: ['Одразу пояснити, яку проблему вирішує сервіс.', 'Показати переваги без довгого читання.', 'Зробити мобільну версію такою ж зручною.'],
        en: ['Explain the service problem immediately.', 'Show benefits without long reading.', 'Make mobile just as convenient.']
      },
      solutions: {
        uk: ['Побудували перший екран навколо болю клієнта.', 'Додали блоки переваг, процесу і відгуків.', 'Винесли контактні дії в помітні місця сторінки.'],
        en: ['Built the hero around the customer pain point.', 'Added benefits, process, and review sections.', 'Placed contact actions in highly visible areas.']
      },
      results: {
        uk: ['Більше звернень', 'Коротший шлях до контакту', 'Краща мобільна подача'],
        en: ['More client requests', 'Shorter path to contact', 'Better mobile experience']
      },
      images: [
        'images/sites/oknaniko/OknaNiko Desktop 1920.png',
        'images/sites/oknaniko/OknaNiko Mobile 375.png'
      ],
      gallery: [
        { type: 'scene-split', images: ['images/sites/oknaniko/OknaNiko Desktop 1920.png', 'images/sites/oknaniko/OknaNiko Mobile 375.png'] },
        { type: 'scene-angle', images: ['images/sites/oknaniko/OknaNiko Desktop 1920.png', 'images/sites/oknaniko/OknaNiko Mobile 375.png'] },
        { type: 'scene-mobile', images: ['images/sites/oknaniko/OknaNiko Mobile 375.png', 'images/sites/oknaniko/OknaNiko Desktop 1920.png'] }
      ]
    }
  };

  const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');

        if (!targetId || targetId === '#') return;

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  };

  const initAccordion = () => {
    const faqItems = document.querySelectorAll('.faqItem');

    faqItems.forEach(item => {
      const btn = item.querySelector('.faqBtn');
      if (!btn) return;

      btn.addEventListener('click', () => {
        const isOpen = item.getAttribute('data-open') === 'true';
        item.setAttribute('data-open', String(!isOpen));
        btn.setAttribute('aria-expanded', String(!isOpen));
      });
    });
  };

  const initRevealBlocks = () => {
    const blocks = document.querySelectorAll('#services, .consultBlock, #pricing, #faq, .startProject');

    if (!blocks.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });

    blocks.forEach(block => {
      block.classList.add('revealBlock');
      observer.observe(block);
    });
  };

  const initMobileMenu = () => {
    const header = document.querySelector('.header');
    const burger = document.querySelector('.header__burger');
    const drawer = document.querySelector('.header__drawer');

    if (!burger || !header) return;

    const toggleMenu = (forceClose = false) => {
      let isNowOpen;

      if (forceClose) {
        header.classList.remove('is-open');
        isNowOpen = false;
      } else {
        isNowOpen = header.classList.toggle('is-open');
      }

      burger.setAttribute('aria-expanded', String(isNowOpen));
      if (drawer) drawer.setAttribute('aria-hidden', String(!isNowOpen));
    };

    burger.addEventListener('click', () => toggleMenu());

    header.querySelectorAll('.header__drawer a').forEach(link => {
      link.addEventListener('click', () => toggleMenu(true));
    });
  };

  const initFeaturedProjects = () => {
    const section = document.querySelector('.featuredProjects');
    const stage = document.querySelector('[data-featured-projects]');

    if (!section || !stage) return;

    const projects = [
      {
        slug: 'probouw',
        accent: '#d91f26',
        accentSoft: '#f1c27d',
        metric: '+42%',
        image: 'images/sites/previews/probouw.webp',
        key: 'featured.project1'
      },
      {
        slug: 'kolyba',
        accent: '#c70000',
        accentSoft: '#f1c27d',
        metric: '+58%',
        image: 'images/sites/previews/kolyba.webp',
        key: 'featured.project2'
      },
      {
        slug: 'monex',
        accent: '#c89a57',
        accentSoft: '#e01818',
        metric: '+36%',
        image: 'images/sites/previews/monex.webp',
        key: 'featured.project3'
      },
      {
        slug: 'oknaniko',
        accent: '#3572ff',
        accentSoft: '#ff8a3d',
        metric: '+64%',
        image: 'images/sites/previews/oknaniko.webp',
        key: 'featured.project4'
      }
    ];

    const fields = {
      hero: stage.querySelector('[data-project-hero]'),
      copy: stage.querySelector('[data-project-copy]'),
      metric: stage.querySelector('[data-project-metric]'),
      metricLabel: stage.querySelector('[data-project-metric-label]'),
      category: stage.querySelector('[data-project-category]'),
      title: stage.querySelector('[data-project-title]'),
      service: stage.querySelector('[data-project-service]'),
      description: stage.querySelector('[data-project-description]'),
      image: stage.querySelector('[data-project-image]')
    };

    let activeIndex = 0;

    const getActiveDictionary = () => {
      const currentLang = localStorage.getItem('siteLang') || document.documentElement.lang || 'en';
      return translations[currentLang === 'uk' ? 'uk' : 'en'];
    };

    const renderProject = (index) => {
      const project = projects[index];
      const dictionary = getActiveDictionary();

      stage.style.setProperty('--project-accent', project.accent);
      stage.style.setProperty('--project-accent-soft', project.accentSoft);

      Object.keys(fields).forEach(key => {
        if (!fields[key]) return;

        if (key === 'metric') {
          fields[key].textContent = project.metric;
          return;
        }

        if (key === 'image') {
          fields[key].src = project.image;
          fields[key].alt = dictionary[`${project.key}.title`] || '';
          return;
        }

        fields[key].textContent = dictionary[`${project.key}.${key}`] || '';
      });
    };

    const changeProject = (direction) => {
      activeIndex = (activeIndex + direction + projects.length) % projects.length;
      stage.classList.remove('is-changing');
      void stage.offsetWidth;
      stage.classList.add('is-changing');
      renderProject(activeIndex);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section.classList.add('is-visible');
          observer.unobserve(section);
        }
      });
    }, { threshold: 0.28 });

    const prevButton = section.querySelector('[data-project-prev]');
    const nextButton = section.querySelector('[data-project-next]');

    if (prevButton) prevButton.addEventListener('click', () => changeProject(-1));
    if (nextButton) nextButton.addEventListener('click', () => changeProject(1));
    window.addEventListener('siteLangChanged', () => renderProject(activeIndex));

    renderProject(activeIndex);
    observer.observe(section);
  };

  const detectInitialLang = () => {
    const savedLang = localStorage.getItem('siteLang');

    if (savedLang === 'uk' || savedLang === 'en') {
      return savedLang;
    }

    const browserLang = navigator.language || navigator.userLanguage || '';

    if (browserLang.toLowerCase().startsWith('uk')) {
      return 'uk';
    }

    return 'en';
  };

  const initCustomSelects = () => {
    const selects = document.querySelectorAll('[data-custom-select]');

    if (!selects.length) return;

    const closeAll = (except = null) => {
      selects.forEach(select => {
        if (select !== except) {
          select.classList.remove('is-open');
          select.querySelector('[data-custom-select-button]')?.setAttribute('aria-expanded', 'false');
        }
      });
    };

    const syncButtonText = (select) => {
      const nativeSelect = select.parentElement?.querySelector('.startProject__nativeSelect');
      const trigger = select.querySelector('[data-custom-select-button]');
      const activeOption = select.querySelector(`button[data-value="${nativeSelect?.value || ''}"]`);

      if (trigger && activeOption) {
        trigger.textContent = activeOption.textContent;
      } else if (trigger && nativeSelect && !nativeSelect.value) {
        const currentLang = localStorage.getItem('siteLang') || document.documentElement.lang || 'en';
        trigger.textContent = translations[currentLang === 'uk' ? 'uk' : 'en']['startProject.select'];
      }
    };

    selects.forEach(select => {
      const trigger = select.querySelector('[data-custom-select-button]');
      const menu = select.querySelector('[data-custom-select-menu]');
      const nativeSelect = select.parentElement?.querySelector('.startProject__nativeSelect');

      if (!trigger || !menu || !nativeSelect) return;

      trigger.addEventListener('click', () => {
        const isOpen = select.classList.toggle('is-open');
        closeAll(select);
        trigger.setAttribute('aria-expanded', String(isOpen));
      });

      menu.querySelectorAll('button[data-value]').forEach(option => {
        option.addEventListener('click', () => {
          nativeSelect.value = option.dataset.value || '';
          menu.querySelectorAll('button').forEach(item => item.classList.remove('is-active'));
          option.classList.add('is-active');
          syncButtonText(select);
          select.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
        });
      });
    });

    document.addEventListener('click', (event) => {
      if (!event.target.closest('[data-custom-select]')) {
        closeAll();
      }
    });

    window.addEventListener('siteLangChanged', () => {
      selects.forEach(syncButtonText);
    });
  };

  const initStartProjectForm = () => {
    const form = document.querySelector('.startProject__form');
    const status = document.querySelector('[data-form-status]');
    const params = new URLSearchParams(window.location.search);

    if (status && params.get('sent') === '1') {
      status.classList.add('is-visible');
    }

    if (!form || window.location.protocol !== 'file:') return;

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const help = formData.getAll('help').join(', ') || '-';
      const budgetSelect = form.querySelector('.startProject__nativeSelect');
      const budgetText = budgetSelect?.selectedOptions?.[0]?.textContent || '-';
      const subject = 'New request from Eten Tech website';
      const body = [
        `Name: ${formData.get('name') || '-'}`,
        `Email: ${formData.get('email') || '-'}`,
        `Budget: ${budgetText}`,
        `Help: ${help}`,
        '',
        `Project:`,
        formData.get('project') || '-'
      ].join('\n');

      if (status) {
        const currentLang = localStorage.getItem('siteLang') || document.documentElement.lang || 'en';
        status.textContent = translations[currentLang === 'uk' ? 'uk' : 'en']['startProject.localSend'];
        status.classList.add('is-visible');
      }

      window.location.href = `mailto:etenprod@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  };

  const initPortfolioScrollReveal = () => {
    const projects = document.querySelectorAll('.portfolioProject, .portfolioCta');

    if (!projects.length) return;

    const revealProject = (project) => {
      project.classList.add('is-visible');
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          revealProject(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px 38% 0px',
      threshold: 0.01
    });

    projects.forEach(project => observer.observe(project));

    requestAnimationFrame(() => {
      projects.forEach(project => {
        const rect = project.getBoundingClientRect();

        if (rect.top < window.innerHeight * 1.18) {
          revealProject(project);
          observer.unobserve(project);
        }
      });
    });
  };

  const initProjectDetailPage = () => {
    const page = document.querySelector('.projectPage');
    if (!page) return;

    const params = new URLSearchParams(window.location.search);
    const slug = projectCases[params.get('project')] ? params.get('project') : 'probouw';
    const project = projectCases[slug];
    let hasRendered = false;

    const setText = (selector, value) => {
      const element = document.querySelector(selector);
      if (element) element.textContent = value || '';
    };

    const renderList = (selector, items = []) => {
      const list = document.querySelector(selector);
      if (!list) return;
      list.innerHTML = items.map(item => `<li>${item}</li>`).join('');
    };

    const render = () => {
      const lang = localStorage.getItem('siteLang') === 'uk' ? 'uk' : 'en';

      document.title = `Eten Tech - ${project.title[lang]}`;
      page.style.setProperty('--case-accent', project.accent);

      setText('[data-case-category]', project.category[lang]);
      setText('[data-case-title]', project.title[lang]);
      setText('[data-case-intro]', project.intro[lang]);
      setText('[data-case-scope]', project.scope[lang]);
      setText('[data-case-result]', project.result);
      setText('[data-case-overview]', project.overview[lang]);
      renderList('[data-case-challenges]', project.challenges[lang]);
      renderList('[data-case-solutions]', project.solutions[lang]);

      const heroImage = document.querySelector('[data-case-hero-image]');
      if (heroImage) {
        heroImage.src = project.images[0];
        heroImage.alt = project.title[lang];
      }

      const results = document.querySelector('[data-case-results]');
      if (results) {
        results.innerHTML = project.results[lang].map((item, index) => (
          `<article><strong>${index === 0 ? project.result : `0${index + 1}`}</strong><span>${item}</span></article>`
        )).join('');
      }

      const gallery = document.querySelector('[data-case-gallery]');
      if (gallery) {
        const galleryItems = project.gallery || project.images.map(src => ({ type: 'wide', images: [src] }));

        gallery.innerHTML = galleryItems.map((item, index) => {
          const type = item.type || 'wide';
          const images = item.images || [];

          if (type.startsWith('scene-')) {
            return `<figure class="caseGallery__item caseGallery__item--scene caseGallery__item--${type}">
              ${images.map((src, imageIndex) => (
                `<div class="caseBrowser">
                  <div class="caseBrowser__top"><span></span><span></span><span></span></div>
                  <img alt="${project.title[lang]} screenshot ${index + 1}.${imageIndex + 1}" loading="lazy" src="${src}"/>
                </div>`
              )).join('')}
            </figure>`;
          }

          if (type === 'pair') {
            return `<figure class="caseGallery__item caseGallery__item--pair">
              ${images.map((src, imageIndex) => (
                `<div class="caseBrowser">
                  <div class="caseBrowser__top"><span></span><span></span><span></span></div>
                  <img alt="${project.title[lang]} screenshot ${index + 1}.${imageIndex + 1}" loading="lazy" src="${src}"/>
                </div>`
              )).join('')}
            </figure>`;
          }

          return `<figure class="caseGallery__item caseGallery__item--${type}">
            <div class="caseBrowser">
              <div class="caseBrowser__top"><span></span><span></span><span></span></div>
              <img alt="${project.title[lang]} screenshot ${index + 1}" loading="${index === 0 ? 'eager' : 'lazy'}" src="${images[0]}"/>
            </div>
          </figure>`;
        }).join('');

        if (hasRendered) {
          gallery.querySelectorAll('.caseGallery__item').forEach(item => item.classList.add('is-visible'));
        }
      }

      const related = document.querySelector('[data-case-related]');
      if (related) {
        const relatedProjects = Object.entries(projectCases)
          .filter(([key]) => key !== slug)
          .slice(0, 2);

        related.innerHTML = relatedProjects.map(([key, item]) => (
          `<a class="caseRelated__card" href="project.html?project=${key}">
            <img alt="${item.title[lang]}" src="${item.images[0]}" loading="lazy"/>
            <span>${item.category[lang]}</span>
            <strong>${item.title[lang]}</strong>
          </a>`
        )).join('');
      }

      hasRendered = true;
    };

    render();
    window.addEventListener('siteLangChanged', render);

    const blocks = document.querySelectorAll('.caseHero__copy, .caseHero__visual, .caseSection, .caseGallery__item, .caseResults, .caseRelated, .caseCta');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px 18% 0px',
      threshold: 0.04
    });

    blocks.forEach(block => observer.observe(block));
  };

  const setLang = (lang) => {
    const selectedLang = lang === 'uk' ? 'uk' : 'en';
    const dictionary = translations[selectedLang];

    document.documentElement.lang = selectedLang;
    localStorage.setItem('siteLang', selectedLang);

    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');

      if (dictionary[key]) {
        element.innerHTML = dictionary[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');

      if (dictionary[key]) {
        element.setAttribute('placeholder', dictionary[key]);
      }
    });

    document.querySelectorAll('[data-lang-current]').forEach(label => {
      label.textContent = selectedLang === 'uk' ? 'ua' : 'en';
    });

    document.querySelectorAll('[data-lang-toggle]').forEach(button => {
      button.setAttribute(
        'aria-label',
        selectedLang === 'uk' ? 'Open language menu' : 'Відкрити меню мови'
      );
    });

    document.querySelectorAll('[data-lang-option]').forEach(option => {
      const optionLang = option.dataset.langOption === 'uk' ? 'uk' : 'en';
      option.classList.toggle('is-active', optionLang === selectedLang);
      option.hidden = optionLang === selectedLang;
    });

    window.dispatchEvent(new CustomEvent('siteLangChanged', {
      detail: { lang: selectedLang }
    }));
  };

  const initLanguageSwitcher = () => {
    const langSelects = document.querySelectorAll('[data-lang-select]');

    setLang(detectInitialLang());

    const closeAll = (except = null) => {
      langSelects.forEach(select => {
        if (select === except) return;
        select.classList.remove('is-open');
        select.querySelector('[data-lang-toggle]')?.setAttribute('aria-expanded', 'false');
      });
    };

    langSelects.forEach(select => {
      const trigger = select.querySelector('[data-lang-toggle]');

      if (!trigger) return;

      trigger.addEventListener('click', (event) => {
        event.stopPropagation();
        const isOpen = select.classList.toggle('is-open');
        closeAll(select);
        trigger.setAttribute('aria-expanded', String(isOpen));
      });

      select.querySelectorAll('[data-lang-option]').forEach(option => {
        option.addEventListener('click', (event) => {
          event.stopPropagation();
          setLang(option.dataset.langOption === 'uk' ? 'uk' : 'en');
          select.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
        });
      });
    });

    document.addEventListener('click', () => closeAll());
  };

  initSmoothScroll();
  initAccordion();
  initRevealBlocks();
  initMobileMenu();
  initFeaturedProjects();
  initCustomSelects();
  initStartProjectForm();
  initPortfolioScrollReveal();
  initProjectDetailPage();
  initLanguageSwitcher();
});

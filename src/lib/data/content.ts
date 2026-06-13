export const brand = {
	name: 'UpSale AI',
	tagline: 'Прогнозируйте спрос. Оптимизируйте запасы. Растите выручку.',
	description:
		'Платформа на базе ИИ для прогнозирования спроса и оптимизации запасов с нативной интеграцией 1С:УТ 11 и подключением к другим ERP, магазинам и маркетплейсам.'
} as const;

export const navLinks = [
	{ label: 'Платформа', href: '#platform' },
	{ label: 'Интеграции', href: '#integrations' },
	{ label: 'Архитектура', href: '#architecture' },
	{ label: 'ИИ-движок', href: '#ai-engine' },
	{ label: 'Результаты', href: '#results' },
	{ label: 'Контакты', href: '#contact' }
] as const;

export const ui = {
	requestDemo: 'Связаться',
	explorePlatform: 'Изучить платформу',
	contactSales: 'Связаться с отделом продаж',
	closeMenu: 'Закрыть меню',
	openMenu: 'Открыть меню',
	mainNav: 'Основная навигация',
	allRightsReserved: 'Все права защищены.',
	live: 'Онлайн',
	forecast: 'Прогноз',
	actual: 'Факт',
	stable: 'Стабильно'
} as const;

export const hero = {
	badge: 'Интеграция с 1С:УТ 11 из коробки',
	title: 'Трансформируйте прогнозирование продаж',
	titleAccent: 'с помощью ИИ',
	subtitle:
		'Подключайте 1С:Управление торговлей 11 за дни, а не месяцы — и прогнозируйте спрос, оптимизируйте запасы с помощью машинного обучения и объяснимого ИИ.',
	dashboard: {
		analytics: 'Аналитика',
		intelligence: 'Аналитика спроса',
		revenueTrend: 'Динамика выручки — 12 недель'
	}
} as const;

export const sections = {
	problem: {
		eyebrow: 'Вызов',
		title: 'Цена неопределённости',
		subtitle:
			'Ритейл и дистрибуция теряют миллионы из-за несогласованности запасов. Традиционное прогнозирование не успевает за сложностью современного спроса.'
	},
	features: {
		eyebrow: 'Платформа',
		title: 'Всё для прогнозирования и оптимизации',
		subtitle:
			'Полный стек аналитики — от данных 1С:УТ 11 и других источников до управляемых и объяснимых решений по запасам.'
	},
	integrations: {
		eyebrow: 'Интеграции',
		title: 'Нативная связка с 1С:УТ 11',
		subtitle:
			'Готовый коннектор для 1С:Управление торговлей 11 — и открытая архитектура для подключения других ERP, интернет-магазинов и маркетплейсов.',
		connectorsTitle: 'И другие системы — без привязки к одному вендору'
	},
	architecture: {
		eyebrow: 'Архитектура',
		title: 'Создано для enterprise-масштаба',
		subtitle:
			'Модульный конвейер от загрузки данных до управляемых бизнес-решений — для on-premise и облачного развёртывания.',
		techTitle: 'Технологический стек',
		techSubtitle: 'Проверенные в продакшене компоненты для задач ритейл-прогнозирования',
		apiLatency: 'Задержка API (p95)',
		modelRegistry: 'Реестр моделей',
		skuCoverage: 'Покрытие SKU',
		uptime: 'Доступность системы — за 90 дней'
	},
	ai: {
		eyebrow: 'ИИ-движок',
		title: 'Продвинутое ML-прогнозирование',
		subtitle:
			'Глобальные панельные модели с residual-обучением по SKU, walk-forward валидацией и полной объяснимостью через SHAP.',
		modelPerformance: 'Качество модели',
		walkForward: 'Метрики walk-forward валидации',
		forecastVsActual: 'Прогноз vs факт',
		understandPrediction: 'Понимайте каждый прогноз',
		shapSubtitle: 'Важность признаков SHAP — драйверы прогноза SKU #4821',
		shapNote:
			'На базе SHAP — каждый прогноз сопровождается атрибуцией по признакам для прозрачного аудита.'
	},
	governance: {
		eyebrow: 'Управление',
		title: 'Решения ИИ под контролем человека',
		subtitle:
			'Маршрутизация по уровню уверенности обеспечивает баланс между скоростью автоматизации и экспертной оценкой.',
		auditTitle: 'Полный аудит каждого решения',
		auditDescription:
			'Каждый прогноз, одобрение и переопределение фиксируются с версией модели, оценкой уверенности и SHAP-контекстом.'
	},
	results: {
		eyebrow: 'Эффект',
		title: 'Измеримый бизнес-результат',
		subtitle:
			'Реальные показатели после внедрения ИИ-прогнозирования в ритейле и дистрибуции.',
		techTitle: 'Технологический стек',
		techSubtitle: 'Проверенные production-ready инструменты'
	},
	cta: {
		title: 'Обсудим внедрение UpSale AI?',
		subtitle: 'Вопросы по платформе, демо и сотрудничеству — напишите в удобный канал.'
	}
} as const;

export const contacts = [
	{
		label: 'ВКонтакте',
		href: 'https://vk.com/yamemik',
		icon: 'vk' as const,
		handle: 'yamemik'
	},
	{
		label: 'GitHub',
		href: 'https://github.com/Yamemik',
		icon: 'github' as const,
		handle: 'Yamemik'
	},
	{
		label: 'Email',
		href: 'mailto:kuancarlos@mail.ru',
		icon: 'mail' as const,
		handle: 'kuancarlos@mail.ru'
	},
	{
		label: 'Telegram',
		href: 'https://t.me/kukakobi',
		icon: 'telegram' as const,
		handle: '@kukakobi'
	}
] as const;

export const problems = [
	{
		title: 'Дефицит товара',
		description:
			'Потеря выручки, когда спрос резко растёт, а полки пустеют до прихода поставки.',
		icon: 'package-x'
	},
	{
		title: 'Избыточные запасы',
		description:
			'Капитал заморожен в неликвидных остатках, что снижает маржу и эффективность склада.',
		icon: 'warehouse'
	},
	{
		title: 'Ошибки прогноза',
		description:
			'Табличные модели не учитывают сезонность, промо и сдвиги спроса по портфелю SKU.',
		icon: 'trending-down'
	},
	{
		title: 'Ручное планирование',
		description:
			'Аналитики тратят дни на сверку данных вместо стратегических решений по запасам.',
		icon: 'clipboard-list'
	},
	{
		title: 'Медленные решения',
		description: 'Пока готовятся отчёты, рыночные условия уже меняются.',
		icon: 'clock'
	},
	{
		title: 'Слабая видимость спроса',
		description:
			'Разрозненные данные по магазинам и каналам скрывают реальные сигналы спроса.',
		icon: 'eye-off'
	}
] as const;

export const features = [
	{
		title: 'Прогнозирование спроса',
		description:
			'Гибридные global + residual ML-модели дают точные многошаговые прогнозы по всему каталогу SKU.',
		icon: 'line-chart'
	},
	{
		title: 'Оптимизация запасов',
		description:
			'Автоматические рекомендации по заказам балансируют уровень сервиса, издержки хранения и сроки поставки.',
		icon: 'boxes'
	},
	{
		title: 'Объяснимый ИИ',
		description:
			'SHAP показывает, какие факторы определяют каждый прогноз — без «чёрных ящиков».',
		icon: 'brain'
	},
	{
		title: 'Слой управления',
		description:
			'Маршрутизация по уверенности гарантирует нужный уровень человеческого контроля для критичных решений.',
		icon: 'shield-check'
	},
	{
		title: '1С:УТ 11 из коробки',
		description:
			'Готовый OData-коннектор для 1С:Управление торговлей 11: продажи, остатки, номенклатура и заказы — без ручной выгрузки.',
		icon: 'plug'
	},
	{
		title: 'Аналитическая панель',
		description:
			'KPI в реальном времени, метрики моделей и детальная аналитика в едином интерфейсе.',
		icon: 'layout-dashboard'
	}
] as const;

export const architectureLayers = [
	{ label: 'Источники данных', description: '1С:УТ 11 (OData), магазины, маркетплейсы' },
	{ label: 'API-слой', description: 'REST-эндпоинты FastAPI' },
	{ label: 'Движок прогнозирования', description: 'CatBoost · LightGBM · Hybrid' },
	{ label: 'Движок оптимизации', description: 'Заказы · сценарное планирование' },
	{ label: 'Слой управления', description: 'Маршрутизация · аудит' },
	{ label: 'Бизнес-панель', description: 'Аналитический UI на SvelteKit' }
] as const;

export const techBadges = [
	'1С:УТ 11',
	'OData',
	'FastAPI',
	'PostgreSQL',
	'CatBoost',
	'LightGBM',
	'SHAP',
	'Docker'
] as const;

export const integrationPrimary = {
	badge: 'Основная интеграция',
	title: '1С:Управление торговлей 11',
	subtitle: 'Готовый коннектор — развёртывание за дни',
	description:
		'UpSale AI напрямую подключается к вашей базе 1С:УТ 11 через стандартный OData-сервис. Продажи, остатки, номенклатура и цены синхронизируются автоматически — данные для прогнозирования всегда актуальны, без ручных выгрузок в Excel.',
	protocol: 'OData / HTTP-сервисы 1С',
	syncMode: 'Плановая и событийная синхронизация',
	dataTitle: 'Синхронизируемые данные'
} as const;

export const integrationDataEntities = [
	'Продажи и отгрузки',
	'Остатки и доступность',
	'Номенклатура и характеристики',
	'Цены и скидки',
	'Заказы поставщикам',
	'Промоакции и маркетинг'
] as const;

export const integrationConnectors = [
	{
		title: 'Другие конфигурации 1С',
		description:
			'Универсальный OData-коннектор для 1С:ERP, 1С:Розница, 1С:Комплексная автоматизация и кастомных доработок.',
		examples: '1С:ERP · 1С:Розница · 1С:КА',
		icon: 'database'
	},
	{
		title: 'Интернет-магазины',
		description:
			'Подключение e-commerce платформ для учёта онлайн-продаж в едином прогнозе спроса по всем каналам.',
		examples: 'Bitrix · OpenCart · WooCommerce · custom',
		icon: 'store'
	},
	{
		title: 'Маркетплейсы',
		description:
			'Импорт заказов и остатков с Wildberries, Ozon, Яндекс Маркет и других площадок.',
		examples: 'WB · Ozon · Яндекс Маркет',
		icon: 'shopping-bag'
	},
	{
		title: 'REST API и CSV',
		description:
			'Открытый API и файловые пайплайны для WMS, TMS, BI-систем и любых внешних источников данных.',
		examples: 'REST · CSV · SFTP',
		icon: 'link'
	}
] as const;

export const aiCapabilities = [
	{
		title: 'Автовыбор модели',
		description: 'Walk-forward валидация автоматически выбирает лучшую модель для сегмента SKU.',
		icon: 'git-branch'
	},
	{
		title: 'Инженерия признаков',
		description: 'Лаги, сезонность, промо и сегментация спроса — из коробки.',
		icon: 'wrench'
	},
	{
		title: 'Оценка уверенности',
		description: 'Каждый прогноз сопровождается калиброванной оценкой уверенности для governance.',
		icon: 'gauge'
	},
	{
		title: 'Прогноз спроса',
		description: 'Рекурсивное многошаговое прогнозирование с global panel embeddings по SKU.',
		icon: 'target'
	},
	{
		title: 'Непрерывное обучение',
		description: 'Мониторинг дрифта запускает переобучение при сдвиге распределений данных.',
		icon: 'refresh-cw'
	}
] as const;

export const modelKpis = [
	{ label: 'WAPE', value: '8.4%', trend: '−2.1%' },
	{ label: 'MAPE', value: '11.2%', trend: '−1.8%' },
	{ label: 'Смещение', value: '0.3%', trend: 'Стабильно' }
] as const;

export const shapDrivers = [
	{ feature: 'Исторический спрос', impact: 0.42 },
	{ feature: 'Промоакции', impact: 0.28 },
	{ feature: 'Сезонность', impact: 0.19 },
	{ feature: 'День недели', impact: -0.12 },
	{ feature: 'Уровень запасов', impact: -0.08 }
] as const;

export const governanceFlows = [
	{
		level: 'Высокая уверенность',
		action: 'Автоодобрение',
		description: 'Прогнозы выше порога применяются автоматически в процессах планирования.',
		color: 'emerald',
		threshold: '> 85%'
	},
	{
		level: 'Средняя уверенность',
		action: 'Проверка аналитиком',
		description: 'Отправляется на быструю валидацию аналитиком перед действиями по запасам.',
		color: 'amber',
		threshold: '60–85%'
	},
	{
		level: 'Низкая уверенность',
		action: 'Ручная валидация',
		description: 'Передаётся планировщикам с полным SHAP-контекстом для принятия решения.',
		color: 'rose',
		threshold: '< 60%'
	}
] as const;

export const metrics = [
	{ value: 15, prefix: '+', suffix: '%', label: 'Точность прогноза', description: 'к базовым методам' },
	{ value: 30, prefix: '−', suffix: '%', label: 'Затраты на запасы', description: 'снижение издержек хранения' },
	{ value: 25, prefix: '−', suffix: '%', label: 'Дефицит товара', description: 'меньше out-of-stock' },
	{ value: 10, prefix: '', suffix: '×', label: 'Скорость планирования', description: 'быстрее циклы решений' }
] as const;

export const techStack = [
	{ name: 'Python', category: 'Среда' },
	{ name: 'FastAPI', category: 'API' },
	{ name: 'PostgreSQL', category: 'База данных' },
	{ name: 'Docker', category: 'Развёртывание' },
	{ name: 'CatBoost', category: 'ML' },
	{ name: 'LightGBM', category: 'ML' },
	{ name: 'SHAP', category: 'Объяснимость' },
	{ name: '1С:УТ 11', category: 'Интеграция' },
	{ name: 'OData', category: 'Интеграция' },
	{ name: 'REST API', category: 'Интеграция' }
] as const;

export const heroMetrics = [
	{ label: 'Прогноз продаж', value: '12 480', change: '+8,2%', positive: true },
	{ label: 'Здоровье запасов', value: '94%', change: 'Оптимально', positive: true },
	{ label: 'Уверенность', value: '87%', change: 'Высокая', positive: true },
	{ label: 'Динамика выручки', value: '₽180 млн', change: '+12,5%', positive: true }
] as const;

export const seo = {
	ogTitle: 'UpSale AI — ИИ-прогнозирование с интеграцией 1С:УТ 11',
	twitterTitle: 'UpSale AI — ИИ-прогнозирование с интеграцией 1С:УТ 11'
} as const;

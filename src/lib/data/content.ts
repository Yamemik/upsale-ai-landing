export const brand = {
	name: 'UpSale AI',
	tagline: 'Predict Demand. Optimize Inventory. Drive Growth.',
	description:
		'AI-powered demand forecasting, inventory optimization, and intelligent decision support for modern retail and distribution businesses.'
} as const;

export const navLinks = [
	{ label: 'Platform', href: '#platform' },
	{ label: 'Architecture', href: '#architecture' },
	{ label: 'AI Engine', href: '#ai-engine' },
	{ label: 'Results', href: '#results' },
	{ label: 'Contact', href: '#contact' }
] as const;

export const problems = [
	{
		title: 'Stockouts',
		description: 'Lost revenue when demand spikes and shelves go empty before replenishment arrives.',
		icon: 'package-x'
	},
	{
		title: 'Overstocking',
		description: 'Capital tied up in slow-moving inventory that erodes margins and warehouse efficiency.',
		icon: 'warehouse'
	},
	{
		title: 'Forecast Errors',
		description: 'Spreadsheet models miss seasonality, promotions, and demand shifts across SKU portfolios.',
		icon: 'trending-down'
	},
	{
		title: 'Manual Planning',
		description: 'Analysts spend days reconciling data instead of making strategic inventory decisions.',
		icon: 'clipboard-list'
	},
	{
		title: 'Slow Decision-Making',
		description: 'By the time reports are ready, market conditions have already changed.',
		icon: 'clock'
	},
	{
		title: 'Poor Demand Visibility',
		description: 'Fragmented data across stores and channels hides true demand signals.',
		icon: 'eye-off'
	}
] as const;

export const features = [
	{
		title: 'Demand Forecasting',
		description:
			'Hybrid global + residual ML models deliver accurate multi-horizon forecasts across your entire SKU catalog.',
		icon: 'line-chart'
	},
	{
		title: 'Inventory Optimization',
		description:
			'Automated reorder recommendations balance service levels with carrying costs and lead times.',
		icon: 'boxes'
	},
	{
		title: 'Explainable AI',
		description:
			'SHAP feature importance reveals exactly which factors drive each prediction — no black boxes.',
		icon: 'brain'
	},
	{
		title: 'Governance Layer',
		description:
			'Confidence-based routing ensures high-stakes decisions get the right level of human oversight.',
		icon: 'shield-check'
	},
	{
		title: 'ERP Integration',
		description:
			'Native connectors for 1C Enterprise OData, REST APIs, and CSV pipelines for seamless data flow.',
		icon: 'plug'
	},
	{
		title: 'Analytics Dashboard',
		description:
			'Real-time KPIs, model performance metrics, and drill-down intelligence in a unified workspace.',
		icon: 'layout-dashboard'
	}
] as const;

export const architectureLayers = [
	{ label: 'Data Sources', description: 'Sales, inventory, promotions, ERP' },
	{ label: 'API Layer', description: 'FastAPI REST endpoints' },
	{ label: 'Forecasting Engine', description: 'CatBoost · LightGBM · Hybrid' },
	{ label: 'Optimization Engine', description: 'Reorder · scenario planning' },
	{ label: 'Governance Layer', description: 'Confidence routing · audit' },
	{ label: 'Business Dashboard', description: 'SvelteKit analytics UI' }
] as const;

export const techBadges = [
	'FastAPI',
	'PostgreSQL',
	'CatBoost',
	'LightGBM',
	'SHAP',
	'Docker'
] as const;

export const aiCapabilities = [
	{
		title: 'Automated Model Selection',
		description: 'Walk-forward validation picks the best model per SKU segment automatically.',
		icon: 'git-branch'
	},
	{
		title: 'Feature Engineering',
		description: 'Lag features, seasonality, promotions, and demand segmentation built in.',
		icon: 'wrench'
	},
	{
		title: 'Confidence Scoring',
		description: 'Every prediction ships with a calibrated confidence score for governance routing.',
		icon: 'gauge'
	},
	{
		title: 'Demand Prediction',
		description: 'Recursive multi-step forecasting with global panel embeddings across SKUs.',
		icon: 'target'
	},
	{
		title: 'Continuous Learning',
		description: 'Drift monitoring triggers retraining when data distributions shift.',
		icon: 'refresh-cw'
	}
] as const;

export const shapDrivers = [
	{ feature: 'Historical Demand', impact: 0.42 },
	{ feature: 'Promotions', impact: 0.28 },
	{ feature: 'Seasonality', impact: 0.19 },
	{ feature: 'Day of Week', impact: -0.12 },
	{ feature: 'Inventory Levels', impact: -0.08 }
] as const;

export const governanceFlows = [
	{
		level: 'High Confidence',
		action: 'Auto Approval',
		description: 'Predictions above threshold are applied automatically to planning workflows.',
		color: 'emerald',
		threshold: '> 85%'
	},
	{
		level: 'Medium Confidence',
		action: 'Analyst Review',
		description: 'Flagged for quick analyst validation before inventory actions execute.',
		color: 'amber',
		threshold: '60–85%'
	},
	{
		level: 'Low Confidence',
		action: 'Manual Validation',
		description: 'Routed to planners with full SHAP context for human decision-making.',
		color: 'rose',
		threshold: '< 60%'
	}
] as const;

export const metrics = [
	{ value: 15, prefix: '+', suffix: '%', label: 'Forecast Accuracy', description: 'vs. baseline methods' },
	{ value: 30, prefix: '-', suffix: '%', label: 'Inventory Costs', description: 'carrying cost reduction' },
	{ value: 25, prefix: '-', suffix: '%', label: 'Stockouts', description: 'fewer out-of-stock events' },
	{ value: 10, prefix: '', suffix: 'x', label: 'Planning Speed', description: 'faster decision cycles' }
] as const;

export const techStack = [
	{ name: 'Python', category: 'Runtime' },
	{ name: 'FastAPI', category: 'API' },
	{ name: 'PostgreSQL', category: 'Database' },
	{ name: 'Docker', category: 'Deployment' },
	{ name: 'CatBoost', category: 'ML' },
	{ name: 'LightGBM', category: 'ML' },
	{ name: 'SHAP', category: 'Explainability' },
	{ name: 'REST API', category: 'Integration' }
] as const;

export const heroMetrics = [
	{ label: 'Sales Forecast', value: '12,480', change: '+8.2%', positive: true },
	{ label: 'Inventory Health', value: '94%', change: 'Optimal', positive: true },
	{ label: 'Confidence Score', value: '87%', change: 'High', positive: true },
	{ label: 'Revenue Trend', value: '$2.4M', change: '+12.5%', positive: true }
] as const;

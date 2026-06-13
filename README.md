# UpSale AI — Landing Page

Premium marketing site for [UpSale AI](https://github.com) — an AI-powered demand forecasting and inventory optimization platform.

## Tech Stack

- **SvelteKit** + TypeScript
- **Tailwind CSS** v4
- **@lucide/svelte** icons
- **@humanspeak/svelte-motion** animations
- **@sveltejs/adapter-static** for GitHub Pages

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

### User/organization site (`username.github.io`)

Push to `main`. The included GitHub Actions workflow builds and deploys automatically.

### Project site (`username.github.io/repo-name`)

Set repository variable or edit the workflow:

```yaml
env:
  BASE_PATH: /upsale-ai-landing
```

Then build with:

```bash
BASE_PATH=/upsale-ai-landing npm run build
```

In **Settings → Pages**, set source to **GitHub Actions**.

## Project Structure

```text
src/
├── routes/
│   └── +page.svelte
├── lib/
│   ├── components/
│   │   ├── Navbar.svelte
│   │   ├── Hero.svelte
│   │   ├── ProblemSection.svelte
│   │   ├── FeaturesSection.svelte
│   │   ├── ArchitectureSection.svelte
│   │   ├── AISection.svelte
│   │   ├── GovernanceSection.svelte
│   │   ├── MetricsSection.svelte
│   │   ├── CTASection.svelte
│   │   └── Footer.svelte
│   └── data/
│       └── content.ts
└── app.html
```

## License

MIT

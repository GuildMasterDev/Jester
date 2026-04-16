# Jester — Entertainment Resource Directory

A curated directory of entertainment resources: memes, comedy clubs, jokes, and local entertainment. Ships as both a modern **Electron desktop app** and a **self-contained PWA** that runs in any browser and works offline.

## Live demo

https://guildmasterdev.github.io/Jester

The web build is a single `web/index.html` (inline CSS + JS, no bundlers, no runtime dependencies). Installable as a PWA on desktop and mobile.

## Features

- **Memes & Humor** — Reddit, 9GAG, Imgur, Know Your Meme, Imgflip, and more
- **Comedy Clubs** — curated venues across New York, LA, Chicago, SF, Boston, Austin, Seattle, Denver, Atlanta, and Portland
- **Jokes** — APIs and communities (JokeAPI, icanhazdadjoke, r/Jokes) plus a random built-in joke generator
- **Local Entertainment** — Fandango, Ticketmaster, StubHub, Eventbrite, Bandsintown, Broadway.com, and more
- **Dark / light theme** — defaults to dark, persisted to `localStorage`
- **Cross-category search** — filters every resource by name, description, city, or category
- **Offline-ready PWA** — versioned cache-first service worker (`jester-v1`)
- **External links open in a new tab / default browser**

## Quick start — Web

Just open `web/index.html` in a browser, or visit the [live demo](https://guildmasterdev.github.io/Jester). No build step.

To serve locally over HTTP (recommended so the service worker registers):

```bash
npx serve web
# or
python3 -m http.server --directory web 8080
```

## Quick start — Desktop (Electron)

```bash
git clone https://github.com/guildmasterdev/Jester.git
cd Jester
npm install
npm start
```

### Development

```bash
npm run dev            # Electron with --dev flag
npm run lint           # node --check on every src/**/*.js
```

### Build distributables

```bash
npm run dist           # electron-builder for current platform
```

Targets are configured in `package.json` for macOS (`public.app-category.entertainment`), Windows (NSIS), and Linux (AppImage).

## PWA

The web build is a full Progressive Web App:

- **Manifest** — `web/manifest.json` (purple `#9333ea` theme, dark `#0a0a0f` background, 192/512 icons, maskable variant)
- **Service worker** — `web/sw.js`, cache-first with a versioned `jester-v1` cache and navigation fallback to `index.html`
- **Installable** — "Add to Home Screen" on iOS/Android, "Install Jester" in Chromium/Edge
- **Offline** — once the first load is cached, the app works with no network

## Tech stack

- **Electron 41** with `contextIsolation`, `sandbox`, and `nodeIntegration: false`
- **electron-builder 26** for packaging
- **Vanilla JS, HTML5, CSS3** — no frameworks, no bundler, no runtime dependencies
- **GitHub Pages** via `actions/deploy-pages@v4`
- **GitHub Actions CI** — `node --check` on every JS file in `src/` plus manifest/SW validation

## Project layout

```
.
├── src/              # Electron main, preload, renderer, and index.html
├── web/              # Self-contained PWA (deployed to GitHub Pages)
│   ├── index.html    # All CSS and JS inline
│   ├── manifest.json
│   ├── sw.js
│   └── icons/
├── resources/        # App icons for electron-builder (icns, ico, PNGs)
├── assets/           # Runtime icon used by Electron BrowserWindow
└── .github/workflows # CI and Pages deploy
```

## License

MIT — see [LICENSE](LICENSE).

## Author

GuildMaster Development

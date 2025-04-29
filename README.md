# Open Price Action Docs


## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```

├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
|   |   |   |——{language}
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## Translation ProcessSection 

➤ Go to `/astro.config.mjs`

add language locales & sidebar translation

➤ Go to `src/content/{language}/`

Copy the article and translate the language in the corresponding language folder

➤ Go to `src/content/{language}/index.mdx`

translation index Pages
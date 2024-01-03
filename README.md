# Simple Monorepo Starter Pack

## Apps

- [`apps/web`](apps/web): Next js
- [`apps/api`](apps/api): api with Express

## Tech Stack 💻

- **Express JS:**[docs](https://nextjs.org)
- **Next JS:**[docs](https://expressjs.com)
- **Shadcn UI:**[docs](https://ui.shadcn.com)

## Setup

```bash
npm install -g pnpm
```

### Run Docker for Database (optional)

```bash
docker-compose up -d
```

### Install dependencies

```bash
pnpm install
```

## Available scripts

### Run apps

```bash
#run dev all
pnpm dev

#run build all
pnpm build

#run start all
pnpm start

#run on 1 apps
pnpm <workspace> <command>

#more script check on :
- [`package.json`](package.json)
```
### Format Prettier All

```bash
pnpm format

# Simple Weather App

## ⚠️ Important

API calls have a **_1s timeout_** by default, for UI showcase purposes.

If you wish to remove it, just comment out code in `api/weather/handlers.ts` at lines [38-43].

## 🚀 How to run

1. Copy `.env.example` into `.env`, otherwise ENV validation will fail and throw an Error.
```sh
cp .env.example .env
```
2. Install dependencies.
```sh
pnpm i
```
3. Run dev server.
```sh
pnpm dev
```

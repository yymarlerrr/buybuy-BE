## 專案簡介

利用 NestJS 開發的後端 API，提供前端使用，主要使用 SheetDB 作為資料庫，並使用 Google Sheet 作為訂單管理。

## 專案架構

```bash
├── src
│   ├── main.ts
│   ├── app.module.ts
│   └── api
│       ├── order
│       │   ├── order.controller.ts
│       │   ├── order.module.ts
│       │   ├── order.service.ts
│       │   └── dto
│       │       └── create-order.dto.ts
│       └── user
│           ├── user.controller.ts
│           ├── user.module.ts
│           ├── user.service.ts
│           └── dto
│               └── create-user.dto.ts
├── package.json
├── package-lock.json
├── .env
├── .gitignore
├── README.md
├── .prettierrc.json
├── eslint.config.mjs
├── nest-cli.json
├── tsconfig.json
├── tsconfig.build.json
├── node_modules
├── dist
```

## Project setup

```bash
$ npm ci
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## env 設定

```bash
PORT=3001
USER_SHEETDB_URL = "https://sheetdb.io/api/v1/v405cupumvutv";
ORDER_SHEETDB_URL = "https://sheetdb.io/api/v1/gyrq3n0lee40i";
```

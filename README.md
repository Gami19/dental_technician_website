# dental_technician_website

デンタル ラボ AQUA の公開サイトです。  
Next.js App Router で実装し、静的出力した成果物を Cloudflare Pages へデプロイする前提で運用します。

## 概要

- 公開用のコーポレートサイト
- `/` `/about` `/products` `/contact` を提供
- 管理サイト `admin_dental_technician_website` の公開 API を参照して、お知らせ・画像・本文データを表示
- Cloudflare Pages へ `out/` をデプロイ

## 技術スタック

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui
- Cloudflare Pages

## 関連リポジトリ / サービス

- 公開サイト: `dental_technician_website`
- 管理サイト: `admin_dental_technician_website`
- 公開サイトは管理サイトの API を利用します

主な参照先:

- お知らせ: `/api/announcements/public`
- 画像: `/api/images/public`
- 本文: `/api/content/public`
- 問い合わせ送信: `/api/contact`

## ディレクトリ構成

```text
app/                 Next.js App Router
components/          画面用コンポーネント
lib/                 API クライアントやユーティリティ
scripts/             ビルド補助スクリプト
out/                 `next build` 後の静的出力先
```

## セットアップ

前提:

- Node.js 22 以上を推奨
- npm

インストール:

```bash
npm install
```

開発サーバー起動:

```bash
npm run dev
```

デフォルトでは `http://localhost:4000` で起動します。

## 環境変数

公開サイト側では、管理サイト API の URL を `NEXT_PUBLIC_ADMIN_API_URL` に設定します。

`.env` または `.env.local`:

```dotenv
NEXT_PUBLIC_ADMIN_API_URL="https://admin-dental-technician-website.k-ikegami-15.workers.dev"
```

ローカル開発で管理サイトもローカル起動する場合の例:

```dotenv
NEXT_PUBLIC_ADMIN_API_URL="http://localhost:3000"
```

補足:

- `NEXT_PUBLIC_` 付きの値はクライアントバンドルに埋め込まれます
- 変更後は `npm run dev` の再起動が必要です
- 管理サイト側では `ALLOWED_ORIGINS` に公開サイトの origin を含める必要があります

## 利用可能なスクリプト

```bash
npm run dev
npm run build
npm run start
npm run lint
```

役割:

- `npm run dev`: ローカル開発サーバーを起動
- `npm run build`: 静的サイトをビルドし、`out/_headers` も生成
- `npm run start`: Next.js の本番サーバーを起動
- `npm run lint`: ESLint を実行

## Cloudflare Pages デプロイ

このプロジェクトは `next.config.ts` で `output: 'export'` を有効化しています。

```3:5:next.config.ts
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
};
```

そのため、ビルド後の `out/` を Pages に公開します。

Cloudflare Pages の設定例:

- Build command: `npm run build`
- Build output directory: `out`

補足:

- 現在の運用前提は Cloudflare Pages です
- Workers 用の `wrangler.jsonc` は Pages デプロイでは不要です
- `_headers` は `scripts/write-static-headers.mjs` で生成しています

## `_headers` 生成

ビルド時に `scripts/write-static-headers.mjs` が `out/_headers` を生成します。

```13:20:scripts/write-static-headers.mjs
const headersContent = `/*
  X-Content-Type-Options: nosniff
  Content-Security-Policy: frame-ancestors 'self' ${adminOrigin}
`;

const outDir = join(process.cwd(), "out");
const headersPath = join(outDir, "_headers");
```

目的:

- `X-Content-Type-Options: nosniff`
- preview iframe 用の `Content-Security-Policy: frame-ancestors`

管理サイトの origin は `NEXT_PUBLIC_ADMIN_API_URL` から算出されます。

## SEO

実装済みの主な項目:

- `metadataBase`
- site-wide canonical
- `/about` `/products` `/contact` の個別 canonical
- `robots.txt`
- `sitemap.xml`

`output: 'export'` 構成のため、`app/robots.ts` と `app/sitemap.ts` では `force-static` を指定しています。

## 開発時の注意

- 管理サイト API が CORS ホワイトリスト方式です
- ローカル公開サイトからデプロイ済み管理 API を叩く場合、管理サイト側の `ALLOWED_ORIGINS` に `http://localhost:4000` が必要です
- `NEXT_PUBLIC_ADMIN_API_URL` が未設定または不正だと、公開データ取得や問い合わせ送信が失敗します

## トラブルシューティング

### `Failed to fetch` が出る

主な確認項目:

- `NEXT_PUBLIC_ADMIN_API_URL` が正しいか
- 開発サーバーを再起動したか
- 管理サイト側 `ALLOWED_ORIGINS` に公開サイト origin が含まれているか
- 管理サイト API がデプロイ済みで正常に応答しているか

### Cloudflare Pages で `sitemap.xml` / `robots.txt` の build error が出る

`app/sitemap.ts` と `app/robots.ts` に `export const dynamic = 'force-static'` が必要です。

## メモ

- 公開ドメインは `https://dentallab-aqua.com`
- `.pages.dev` 側は重複コンテンツ対策のため最終的に本番ドメインへ寄せる想定です

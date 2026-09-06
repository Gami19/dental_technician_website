import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const defaultAdminUrl = "http://localhost:3000";
const configuredAdminUrl = process.env.NEXT_PUBLIC_ADMIN_API_URL || defaultAdminUrl;
const adminOrigin = new URL(configuredAdminUrl).origin;

const headersContent = `/*
  X-Content-Type-Options: nosniff
  Content-Security-Policy: frame-ancestors 'self' ${adminOrigin}
`;

const outDir = join(process.cwd(), "out");
const headersPath = join(outDir, "_headers");

await mkdir(outDir, { recursive: true });
await writeFile(headersPath, headersContent, "utf8");

console.log(`Wrote ${headersPath}`);

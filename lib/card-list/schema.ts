import { z } from 'zod'
import {
  CARD_ICON_NAMES,
  DEFAULT_CARD_ICON,
  isCardIconName,
  resolveCardIconName,
  type CardIconName,
} from './icons'

/** 0枚時のセクション表示（admin で選択） */
export const EMPTY_SECTION_MODES = ['heading', 'hide'] as const
export type EmptySectionMode = (typeof EMPTY_SECTION_MODES)[number]
export const DEFAULT_EMPTY_SECTION_MODE: EmptySectionMode = 'heading'

export const CARD_LIST_KINDS = [
  'feature-grid',
  'icon-list',
  'numbered-steps',
  'equipment',
] as const
export type CardListKind = (typeof CARD_LIST_KINDS)[number]

/** セクション識別子（page.section） */
export const CARD_LIST_SECTION_IDS = [
  'home.features',
  'home.cadcam',
  'products.reasons',
  'products.telescope',
  'products.flow',
  'about.equipment',
] as const
export type CardListSectionId = (typeof CARD_LIST_SECTION_IDS)[number]

export const CARD_LIST_LIMITS = {
  minItems: 0,
  maxItemsByKind: {
    'feature-grid': 6,
    'icon-list': 8,
    'numbered-steps': 8,
    equipment: 12,
  } satisfies Record<CardListKind, number>,
  maxIdLength: 64,
  maxTitleLength: 120,
  maxTextLength: 2000,
  maxProductLength: 200,
  maxImageKeyLength: 64,
  /** items JSON 文字列の上限（バイトではなく UTF-16 length 近似） */
  maxJsonLength: 50_000,
  /** imageKey: 先頭英小文字、以降英小文字・数字・アンダースコア */
  imageKeyPattern: /^[a-z][a-z0-9_]{0,63}$/,
} as const

const iconSchema = z
  .string()
  .refine((v): v is CardIconName => isCardIconName(v), {
    message: '許可されていないアイコン名です',
  })

const idSchema = z
  .string()
  .min(1)
  .max(CARD_LIST_LIMITS.maxIdLength)
  .regex(/^[a-zA-Z0-9_-]+$/, 'id は英数字・_- のみ')

const titleSchema = z.string().max(CARD_LIST_LIMITS.maxTitleLength)
const textSchema = z.string().max(CARD_LIST_LIMITS.maxTextLength)
const productSchema = z.string().max(CARD_LIST_LIMITS.maxProductLength)
const imageKeySchema = z
  .string()
  .max(CARD_LIST_LIMITS.maxImageKeyLength)
  .regex(CARD_LIST_LIMITS.imageKeyPattern, 'imageKey の形式が不正です')

/** feature-grid / numbered-steps 共通 */
export const featureCardItemSchema = z
  .object({
    id: idSchema,
    icon: iconSchema,
    title: titleSchema,
    description: textSchema,
  })
  .strict()

export type FeatureCardItem = z.infer<typeof featureCardItemSchema>

/** icon-list（cadcam points / telescope structure） */
export const iconListItemSchema = z
  .object({
    id: idSchema,
    icon: iconSchema,
    title: titleSchema,
    text: textSchema,
  })
  .strict()

export type IconListItem = z.infer<typeof iconListItemSchema>

/** equipment */
export const equipmentCardItemSchema = z
  .object({
    id: idSchema,
    icon: iconSchema,
    title: titleSchema,
    product: productSchema,
    description: textSchema,
    imageKey: imageKeySchema,
  })
  .strict()

export type EquipmentCardItem = z.infer<typeof equipmentCardItemSchema>

export type CardItem = FeatureCardItem | IconListItem | EquipmentCardItem

export const emptySectionModeSchema = z.enum(EMPTY_SECTION_MODES)

function itemsArraySchema<T extends z.ZodTypeAny>(item: T, max: number) {
  return z.array(item).min(CARD_LIST_LIMITS.minItems).max(max)
}

export const featureGridItemsSchema = itemsArraySchema(
  featureCardItemSchema,
  CARD_LIST_LIMITS.maxItemsByKind['feature-grid']
)
export const iconListItemsSchema = itemsArraySchema(
  iconListItemSchema,
  CARD_LIST_LIMITS.maxItemsByKind['icon-list']
)
export const numberedStepsItemsSchema = itemsArraySchema(
  featureCardItemSchema,
  CARD_LIST_LIMITS.maxItemsByKind['numbered-steps']
)
export const equipmentItemsSchema = itemsArraySchema(
  equipmentCardItemSchema,
  CARD_LIST_LIMITS.maxItemsByKind.equipment
)

export type CardListSectionConfig = {
  id: CardListSectionId
  kind: CardListKind
  /** page_contents の items キー（full key） */
  itemsKey: string
  /** page_contents の empty_mode キー（full key） */
  emptyModeKey: string
  label: string
}

export const CARD_LIST_SECTIONS: readonly CardListSectionConfig[] = [
  {
    id: 'home.features',
    kind: 'feature-grid',
    itemsKey: 'home.features.items',
    emptyModeKey: 'home.features.empty_mode',
    label: '強み',
  },
  {
    id: 'home.cadcam',
    kind: 'icon-list',
    itemsKey: 'home.cadcam.items',
    emptyModeKey: 'home.cadcam.empty_mode',
    label: 'CAD/CAM ポイント',
  },
  {
    id: 'products.reasons',
    kind: 'feature-grid',
    itemsKey: 'products.reasons.items',
    emptyModeKey: 'products.reasons.empty_mode',
    label: '選ばれる理由',
  },
  {
    id: 'products.telescope',
    kind: 'icon-list',
    itemsKey: 'products.telescope.items',
    emptyModeKey: 'products.telescope.empty_mode',
    label: '基本構造と仕組み',
  },
  {
    id: 'products.flow',
    kind: 'numbered-steps',
    itemsKey: 'products.flow.items',
    emptyModeKey: 'products.flow.empty_mode',
    label: '製作の流れ',
  },
  {
    id: 'about.equipment',
    kind: 'equipment',
    itemsKey: 'about.equipment.items',
    emptyModeKey: 'about.equipment.empty_mode',
    label: '設備紹介',
  },
] as const

export const CARD_LIST_SECTION_BY_ID: Record<
  CardListSectionId,
  CardListSectionConfig
> = Object.fromEntries(CARD_LIST_SECTIONS.map((s) => [s.id, s])) as Record<
  CardListSectionId,
  CardListSectionConfig
>

export function getItemsSchemaForKind(kind: CardListKind) {
  switch (kind) {
    case 'feature-grid':
      return featureGridItemsSchema
    case 'icon-list':
      return iconListItemsSchema
    case 'numbered-steps':
      return numberedStepsItemsSchema
    case 'equipment':
      return equipmentItemsSchema
  }
}

export function createCardItemId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID().replace(/-/g, '').slice(0, 16)
  }
  return `c${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`
}

/** write 用: JSON 文字列を厳密検証 */
export function parseItemsJsonForWrite(
  kind: CardListKind,
  raw: string
):
  | { ok: true; items: CardItem[] }
  | { ok: false; error: string } {
  if (raw.length > CARD_LIST_LIMITS.maxJsonLength) {
    return { ok: false, error: 'items JSON が大きすぎます' }
  }
  let parsed: unknown
  try {
    parsed = JSON.parse(raw)
  } catch {
    return { ok: false, error: 'items JSON のパースに失敗しました' }
  }
  if (!Array.isArray(parsed)) {
    return { ok: false, error: 'items は配列である必要があります' }
  }
  // prototype pollution 対策: 素の要素だけを再構築してから検証
  const plain = parsed.map((entry) => {
    if (!entry || typeof entry !== 'object' || Array.isArray(entry)) {
      return entry
    }
    return { ...(entry as Record<string, unknown>) }
  })
  const schema = getItemsSchemaForKind(kind)
  const result = schema.safeParse(plain)
  if (!result.success) {
    return {
      ok: false,
      error: result.error.issues.map((i) => i.message).join('; ') || '検証失敗',
    }
  }
  return { ok: true, items: result.data as CardItem[] }
}

/** write 用: empty_mode */
export function parseEmptyModeForWrite(
  raw: string
):
  | { ok: true; mode: EmptySectionMode }
  | { ok: false; error: string } {
  const result = emptySectionModeSchema.safeParse(raw)
  if (!result.success) {
    return { ok: false, error: 'empty_mode は heading または hide です' }
  }
  return { ok: true, mode: result.data }
}

export function serializeItems(items: CardItem[]): string {
  return JSON.stringify(items)
}

/**
 * read 用: 壊れていても落とさず、可能な範囲でサニタイズ。
 * 完全失敗時は null（呼び出し側でデフォルト/旧キーへ）。
 */
export function parseItemsJsonForRead(
  kind: CardListKind,
  raw: string | undefined | null
): CardItem[] | null {
  if (raw == null || raw === '') return null
  if (raw.length > CARD_LIST_LIMITS.maxJsonLength) return null
  let parsed: unknown
  try {
    parsed = JSON.parse(raw)
  } catch {
    return null
  }
  if (!Array.isArray(parsed)) return null

  const max = CARD_LIST_LIMITS.maxItemsByKind[kind]
  const sliced = parsed.slice(0, max)
  const sanitized: CardItem[] = []

  for (const entry of sliced) {
    if (!entry || typeof entry !== 'object' || Array.isArray(entry)) continue
    const o = { ...(entry as Record<string, unknown>) }
    const id =
      typeof o.id === 'string' && o.id.length > 0
        ? o.id.slice(0, CARD_LIST_LIMITS.maxIdLength)
        : createCardItemId()
    const icon = resolveCardIconName(o.icon)
    const title =
      typeof o.title === 'string'
        ? o.title.slice(0, CARD_LIST_LIMITS.maxTitleLength)
        : ''

    if (kind === 'icon-list') {
      const text =
        typeof o.text === 'string'
          ? o.text.slice(0, CARD_LIST_LIMITS.maxTextLength)
          : typeof o.description === 'string'
            ? o.description.slice(0, CARD_LIST_LIMITS.maxTextLength)
            : ''
      sanitized.push({ id, icon, title, text })
      continue
    }

    if (kind === 'equipment') {
      const product =
        typeof o.product === 'string'
          ? o.product.slice(0, CARD_LIST_LIMITS.maxProductLength)
          : ''
      const description =
        typeof o.description === 'string'
          ? o.description.slice(0, CARD_LIST_LIMITS.maxTextLength)
          : ''
      const imageKeyRaw = typeof o.imageKey === 'string' ? o.imageKey : ''
      const imageKey = CARD_LIST_LIMITS.imageKeyPattern.test(imageKeyRaw)
        ? imageKeyRaw.slice(0, CARD_LIST_LIMITS.maxImageKeyLength)
        : 'about_equipment_cad'
      sanitized.push({ id, icon, title, product, description, imageKey })
      continue
    }

    const description =
      typeof o.description === 'string'
        ? o.description.slice(0, CARD_LIST_LIMITS.maxTextLength)
        : typeof o.text === 'string'
          ? o.text.slice(0, CARD_LIST_LIMITS.maxTextLength)
          : ''
    sanitized.push({ id, icon, title, description })
  }

  return sanitized
}

export function parseEmptyModeForRead(
  raw: string | undefined | null
): EmptySectionMode {
  if (raw === 'hide' || raw === 'heading') return raw
  return DEFAULT_EMPTY_SECTION_MODE
}

export { CARD_ICON_NAMES, DEFAULT_CARD_ICON, type CardIconName }

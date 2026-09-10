/**
 * カードアイコン許可リスト（lucide-react の export 名）。
 * 描画時は必ずこのリスト経由でコンポーネント解決すること（動的 import / eval 禁止）。
 */

/** 現行サイトで使用中 + 業務サイト向けに広げた許可リスト */
export const CARD_ICON_NAMES = [
  // 現行使用
  'Award',
  'Users',
  'Cpu',
  'Microscope',
  'Wrench',
  'Clock',
  'Monitor',
  'Cog',
  'CheckCircle',
  'MapPin',
  'Phone',
  'Mail',
  'CreditCard',
  'Send',
  // 拡張（技術・医療・品質・ビジネス）
  'Activity',
  'BadgeCheck',
  'BarChart3',
  'Binary',
  'Boxes',
  'Brain',
  'Building2',
  'Calendar',
  'Camera',
  'CircuitBoard',
  'Cloud',
  'Code',
  'Component',
  'Database',
  'Eye',
  'Factory',
  'FileText',
  'FlaskConical',
  'Gauge',
  'Gem',
  'Grid3x3',
  'Hammer',
  'Hand',
  'Heart',
  'HeartPulse',
  'Image',
  'Key',
  'Layers',
  'LayoutGrid',
  'Lightbulb',
  'Lock',
  'Package',
  'Pencil',
  'Rocket',
  'Scan',
  'Settings',
  'Shield',
  'ShieldCheck',
  'Sparkles',
  'Star',
  'Stethoscope',
  'Syringe',
  'Target',
  'Terminal',
  'TrendingUp',
  'Truck',
  'Wifi',
  'Zap',
] as const

export type CardIconName = (typeof CARD_ICON_NAMES)[number]

export const CARD_ICON_NAME_SET: ReadonlySet<string> = new Set(CARD_ICON_NAMES)

export const DEFAULT_CARD_ICON: CardIconName = 'Award'

export function isCardIconName(value: unknown): value is CardIconName {
  return typeof value === 'string' && CARD_ICON_NAME_SET.has(value)
}

/** 未知アイコンはデフォルトに落とす（read 時） */
export function resolveCardIconName(value: unknown): CardIconName {
  return isCardIconName(value) ? value : DEFAULT_CARD_ICON
}

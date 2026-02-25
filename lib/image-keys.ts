/**
 * 画像の key 一覧。管理サイトと同じ key を使用する。
 * 新規追加時はこの配列に追加する。
 */
export const IMAGE_KEYS = [
  'hero_slide_1',
  'hero_slide_2',
  'hero_slide_3',
  'home_cadcam',
  'about_greeting',
  'about_equipment_cad',
  'about_equipment_cam',
  'about_equipment_scanner',
  'about_equipment_meter',
  'about_equipment_furnace',
  'about_equipment_quality',
  'products_telescope',
] as const

export type ImageKey = (typeof IMAGE_KEYS)[number]

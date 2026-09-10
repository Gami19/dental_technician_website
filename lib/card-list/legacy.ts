import { DEFAULT_ITEMS_BY_SECTION } from './defaults'
import {
  CARD_LIST_SECTION_BY_ID,
  parseEmptyModeForRead,
  parseItemsJsonForRead,
  type CardItem,
  type CardListSectionId,
  type EmptySectionMode,
  type EquipmentCardItem,
  type FeatureCardItem,
  type IconListItem,
} from './schema'

export type CardListResolveSource = 'items' | 'legacy' | 'default'

export type ResolvedCardList = {
  sectionId: CardListSectionId
  items: CardItem[]
  emptyMode: EmptySectionMode
  /** items が空のときセクションを描画するか（emptyMode に基づく） */
  showSection: boolean
  /** 見出しブロックだけ出すか（items 空かつ emptyMode === heading） */
  showHeadingOnly: boolean
  source: CardListResolveSource
}

function get(
  content: Record<string, string>,
  key: string
): string | undefined {
  const v = content[key]
  return v === undefined ? undefined : v
}

function legacyFeatureGrid(
  content: Record<string, string>,
  pairs: { titleKey: string; descKey: string; icon: FeatureCardItem['icon']; id: string }[]
): FeatureCardItem[] | null {
  const items: FeatureCardItem[] = []
  for (const p of pairs) {
    const title = get(content, p.titleKey)
    const description = get(content, p.descKey)
    if (title === undefined && description === undefined) continue
    items.push({
      id: p.id,
      icon: p.icon,
      title: title ?? '',
      description: description ?? '',
    })
  }
  return items.length > 0 ? items : null
}

function legacyIconList(
  content: Record<string, string>,
  pairs: { titleKey: string; textKey: string; icon: IconListItem['icon']; id: string }[]
): IconListItem[] | null {
  const items: IconListItem[] = []
  for (const p of pairs) {
    const title = get(content, p.titleKey)
    const text = get(content, p.textKey)
    if (title === undefined && text === undefined) continue
    items.push({
      id: p.id,
      icon: p.icon,
      title: title ?? '',
      text: text ?? '',
    })
  }
  return items.length > 0 ? items : null
}

function legacyEquipment(
  content: Record<string, string>
): EquipmentCardItem[] | null {
  const imageKeys = [
    'about_equipment_cad',
    'about_equipment_cam',
    'about_equipment_scanner',
    'about_equipment_meter',
    'about_equipment_furnace',
    'about_equipment_quality',
  ] as const
  const items: EquipmentCardItem[] = []
  for (let n = 1; n <= 6; n++) {
    const title = get(content, `about.equipment.equipment${n}_title`)
    const product = get(content, `about.equipment.equipment${n}_product`)
    const description = get(
      content,
      `about.equipment.equipment${n}_description`
    )
    if (
      title === undefined &&
      product === undefined &&
      description === undefined
    ) {
      continue
    }
    items.push({
      id: `legacy-equipment-${n}`,
      icon: 'Monitor',
      title: title ?? '',
      product: product ?? '',
      description: description ?? '',
      imageKey: imageKeys[n - 1],
    })
  }
  return items.length > 0 ? items : null
}

/** 旧スロットキーから items 相当を復元（items 未設定時の互換） */
export function normalizeLegacyCardItems(
  sectionId: CardListSectionId,
  content: Record<string, string>
): CardItem[] | null {
  switch (sectionId) {
    case 'home.features':
      return legacyFeatureGrid(content, [
        {
          id: 'legacy-home-features-1',
          titleKey: 'home.features.feature1_title',
          descKey: 'home.features.feature1_description',
          icon: 'Award',
        },
        {
          id: 'legacy-home-features-2',
          titleKey: 'home.features.feature2_title',
          descKey: 'home.features.feature2_description',
          icon: 'Users',
        },
        {
          id: 'legacy-home-features-3',
          titleKey: 'home.features.feature3_title',
          descKey: 'home.features.feature3_description',
          icon: 'Cpu',
        },
      ])
    case 'home.cadcam':
      return legacyIconList(content, [
        {
          id: 'legacy-home-cadcam-1',
          titleKey: 'home.cadcam.point1_title',
          textKey: 'home.cadcam.point1_text',
          icon: 'Microscope',
        },
        {
          id: 'legacy-home-cadcam-2',
          titleKey: 'home.cadcam.point2_title',
          textKey: 'home.cadcam.point2_text',
          icon: 'Wrench',
        },
        {
          id: 'legacy-home-cadcam-3',
          titleKey: 'home.cadcam.point3_title',
          textKey: 'home.cadcam.point3_text',
          icon: 'Clock',
        },
      ])
    case 'products.reasons':
      return legacyFeatureGrid(content, [
        {
          id: 'legacy-products-reasons-1',
          titleKey: 'products.reasons.reason1_title',
          descKey: 'products.reasons.reason1_text',
          icon: 'Award',
        },
        {
          id: 'legacy-products-reasons-2',
          titleKey: 'products.reasons.reason2_title',
          descKey: 'products.reasons.reason2_text',
          icon: 'Monitor',
        },
        {
          id: 'legacy-products-reasons-3',
          titleKey: 'products.reasons.reason3_title',
          descKey: 'products.reasons.reason3_text',
          icon: 'Clock',
        },
      ])
    case 'products.telescope':
      return legacyIconList(content, [
        {
          id: 'legacy-products-telescope-1',
          titleKey: 'products.telescope.inner_cap_title',
          textKey: 'products.telescope.inner_cap_desc',
          icon: 'Cog',
        },
        {
          id: 'legacy-products-telescope-2',
          titleKey: 'products.telescope.outer_cap_title',
          textKey: 'products.telescope.outer_cap_desc',
          icon: 'Cog',
        },
        {
          id: 'legacy-products-telescope-3',
          titleKey: 'products.telescope.precision_title',
          textKey: 'products.telescope.precision_desc',
          icon: 'Microscope',
        },
      ])
    case 'products.flow':
      return legacyFeatureGrid(content, [
        {
          id: 'legacy-products-flow-1',
          titleKey: 'products.flow.step1_title',
          descKey: 'products.flow.step1_desc',
          icon: 'Monitor',
        },
        {
          id: 'legacy-products-flow-2',
          titleKey: 'products.flow.step2_title',
          descKey: 'products.flow.step2_desc',
          icon: 'Cog',
        },
        {
          id: 'legacy-products-flow-3',
          titleKey: 'products.flow.step3_title',
          descKey: 'products.flow.step3_desc',
          icon: 'Microscope',
        },
        {
          id: 'legacy-products-flow-4',
          titleKey: 'products.flow.step4_title',
          descKey: 'products.flow.step4_desc',
          icon: 'CheckCircle',
        },
      ])
    case 'about.equipment':
      return legacyEquipment(content)
  }
}

/**
 * content map からカードリストを解決する。
 * 優先順: items JSON → 旧キー → コードデフォルト
 *
 * 注意: items キーが存在する（空配列 JSON `[]` 含む）場合は旧キーへフォールバックしない。
 * 0枚は意図的な状態として扱う。
 */
export function resolveCardList(
  sectionId: CardListSectionId,
  content: Record<string, string>
): ResolvedCardList {
  const config = CARD_LIST_SECTION_BY_ID[sectionId]
  const emptyMode = parseEmptyModeForRead(content[config.emptyModeKey])

  const rawItems = content[config.itemsKey]
  // 空文字は未設定（CONTENT_KEY_SPECS デフォルト）扱い → 旧キー互換へ
  if (rawItems !== undefined && rawItems !== '') {
    const parsed = parseItemsJsonForRead(config.kind, rawItems)
    if (parsed !== null) {
      const items = parsed
      const isEmpty = items.length === 0
      return {
        sectionId,
        items,
        emptyMode,
        showSection: !isEmpty || emptyMode === 'heading',
        showHeadingOnly: isEmpty && emptyMode === 'heading',
        source: 'items',
      }
    }
    // JSON 破損時は旧キー → デフォルトへ
  }

  const legacy = normalizeLegacyCardItems(sectionId, content)
  if (legacy) {
    const isEmpty = legacy.length === 0
    return {
      sectionId,
      items: legacy,
      emptyMode,
      showSection: !isEmpty || emptyMode === 'heading',
      showHeadingOnly: isEmpty && emptyMode === 'heading',
      source: 'legacy',
    }
  }

  const defaults = DEFAULT_ITEMS_BY_SECTION[sectionId]
  return {
    sectionId,
    items: defaults,
    emptyMode,
    showSection: true,
    showHeadingOnly: false,
    source: 'default',
  }
}

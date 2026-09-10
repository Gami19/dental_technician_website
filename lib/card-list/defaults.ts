import { createCardItemId } from './schema'
import type {
  CardItem,
  CardListSectionId,
  EquipmentCardItem,
  FeatureCardItem,
  IconListItem,
} from './schema'

function fid(): string {
  return createCardItemId()
}

export const DEFAULT_HOME_FEATURES: FeatureCardItem[] = [
  {
    id: 'home-features-1',
    icon: 'Award',
    title: '希少な技術力',
    description:
      '国内でも製作者がほとんどいないテレスコープ義歯の専門ラボとして、豊富な経験と実績を誇ります。',
  },
  {
    id: 'home-features-2',
    icon: 'Users',
    title: 'インプラントに代わる選択肢',
    description:
      '外科手術を伴わない、患者様への負担が少ない補綴治療をご提案。より多くの患者様に適用可能です。',
  },
  {
    id: 'home-features-3',
    icon: 'Cpu',
    title: 'デジタル技工への対応',
    description:
      'IOS（口腔内スキャナー）データに対応し、CAD/CAMで高精度な技工物を製作いたします。',
  },
]

export const DEFAULT_HOME_CADCAM_POINTS: IconListItem[] = [
  {
    id: 'home-cadcam-1',
    icon: 'Microscope',
    title: '精密設計',
    text: '3Dデータによる詳細な解析と設計',
  },
  {
    id: 'home-cadcam-2',
    icon: 'Wrench',
    title: '高精度加工',
    text: 'ミクロン単位での切削加工技術',
  },
  {
    id: 'home-cadcam-3',
    icon: 'Clock',
    title: '短納期対応',
    text: 'デジタル化により製作期間を大幅短縮',
  },
]

export const DEFAULT_PRODUCTS_REASONS: FeatureCardItem[] = [
  {
    id: 'products-reasons-1',
    icon: 'Award',
    title: '圧倒的な精度と適合性',
    description:
      'CAD（歯科設計ソフト）による精密な設計プロセスと、CAM（切削機械）によるミクロン単位の加工技術を組み合わせ、完璧な適合性を実現します。',
  },
  {
    id: 'products-reasons-2',
    icon: 'Monitor',
    title: 'IOSデータに完全対応',
    description:
      '口腔内スキャナーからのデータ受付が可能で、デジタルワークフローの利便性を最大限に活用できます。従来の印象採得の手間を大幅に削減します。',
  },
  {
    id: 'products-reasons-3',
    icon: 'Clock',
    title: '豊富な経験と実績',
    description:
      'これまで数多くのテレスコープ義歯を手掛け、難症例にも対応してきた実績があります。常に最新技術を取り入れ、品質向上に努めています。',
  },
]

export const DEFAULT_PRODUCTS_TELESCOPE: IconListItem[] = [
  {
    id: 'products-telescope-1',
    icon: 'Cog',
    title: '内冠（インナーキャップ）',
    text: '残存歯に装着する内側の冠',
  },
  {
    id: 'products-telescope-2',
    icon: 'Cog',
    title: '外冠（アウターキャップ）',
    text: '義歯と一体化された外側の冠',
  },
  {
    id: 'products-telescope-3',
    icon: 'Microscope',
    title: '精密嵌合',
    text: '二つの冠の精密な嵌合により確実な固定を実現',
  },
]

export const DEFAULT_PRODUCTS_FLOW: FeatureCardItem[] = [
  {
    id: 'products-flow-1',
    icon: 'Monitor',
    title: 'ご依頼・データ送付',
    description:
      'IOSデータまたは印象をお送りください。オンラインでの受付も可能です。',
  },
  {
    id: 'products-flow-2',
    icon: 'Cog',
    title: 'CAD設計',
    description:
      '3Dデータによる詳細な解析と精密な設計を行います。必要に応じて設計内容をご確認いただきます。',
  },
  {
    id: 'products-flow-3',
    icon: 'Microscope',
    title: 'CAM製作',
    description:
      '最新の切削機械により、ミクロン単位の精度で加工を行います。品質管理も徹底しています。',
  },
  {
    id: 'products-flow-4',
    icon: 'CheckCircle',
    title: '最終チェック・納品',
    description:
      '厳格な品質チェックを経て納品いたします。アフターサポートも充実しています。',
  },
]

export const DEFAULT_ABOUT_EQUIPMENT: EquipmentCardItem[] = [
  {
    id: 'about-equipment-1',
    icon: 'Monitor',
    title: 'CADソフトウェア',
    product: 'exocad DentalCAD',
    description:
      '業界標準のCADソフトウェアで、精密な設計を行います。テレスコープ義歯の複雑な構造も正確に設計可能です。',
    imageKey: 'about_equipment_cad',
  },
  {
    id: 'about-equipment-2',
    icon: 'Monitor',
    title: 'CAM（切削機）',
    product: 'Roland DWX-52DCi',
    description:
      '高精度5軸切削機により、ミクロン単位の精密加工を実現。チタンからジルコニアまで、あらゆる材料に対応します。',
    imageKey: 'about_equipment_cam',
  },
  {
    id: 'about-equipment-3',
    icon: 'Monitor',
    title: '3Dスキャナー',
    product: '3Shape E4',
    description:
      '高解像度3Dスキャナーで、印象の精密なデジタル化を行います。IOSデータとの統合により、完全デジタルワークフローを実現。',
    imageKey: 'about_equipment_scanner',
  },
  {
    id: 'about-equipment-4',
    icon: 'Monitor',
    title: '測定機器',
    product: 'デジタルマイクロメーター',
    description:
      '完成した技工物の精度を厳密にチェック。設計値との誤差をμm単位で検証し、品質を保証します。',
    imageKey: 'about_equipment_meter',
  },
  {
    id: 'about-equipment-5',
    icon: 'Monitor',
    title: '焼成炉',
    product: 'Programat P700',
    description:
      'セラミックの焼成に最適化された高精度炉。プログラム制御により、安定した品質を実現します。',
    imageKey: 'about_equipment_furnace',
  },
  {
    id: 'about-equipment-6',
    icon: 'Monitor',
    title: '品質管理システム',
    product: 'デジタル記録システム',
    description:
      '全ての製作工程をデジタル記録。トレーサビリティを確保し、継続的な品質改善を実現します。',
    imageKey: 'about_equipment_quality',
  },
]

export const DEFAULT_ITEMS_BY_SECTION: Record<CardListSectionId, CardItem[]> = {
  'home.features': DEFAULT_HOME_FEATURES,
  'home.cadcam': DEFAULT_HOME_CADCAM_POINTS,
  'products.reasons': DEFAULT_PRODUCTS_REASONS,
  'products.telescope': DEFAULT_PRODUCTS_TELESCOPE,
  'products.flow': DEFAULT_PRODUCTS_FLOW,
  'about.equipment': DEFAULT_ABOUT_EQUIPMENT,
}

/** 新規カード追加時の空テンプレート */
export function createBlankCardItem(
  sectionId: CardListSectionId
): CardItem {
  const id = fid()
  switch (sectionId) {
    case 'home.cadcam':
    case 'products.telescope':
      return { id, icon: 'Award', title: '', text: '' }
    case 'about.equipment':
      return {
        id,
        icon: 'Monitor',
        title: '',
        product: '',
        description: '',
        imageKey: 'about_equipment_cad',
      }
    default:
      return { id, icon: 'Award', title: '', description: '' }
  }
}

'use client'

import type { LucideIcon, LucideProps } from 'lucide-react'
import {
  Activity,
  Award,
  BadgeCheck,
  BarChart3,
  Binary,
  Boxes,
  Brain,
  Building2,
  Calendar,
  Camera,
  CheckCircle,
  CircuitBoard,
  Clock,
  Cloud,
  Code,
  Cog,
  Component,
  Cpu,
  CreditCard,
  Database,
  Eye,
  Factory,
  FileText,
  FlaskConical,
  Gauge,
  Gem,
  Grid3x3,
  Hammer,
  Hand,
  Heart,
  HeartPulse,
  Image,
  Key,
  Layers,
  LayoutGrid,
  Lightbulb,
  Lock,
  Mail,
  MapPin,
  Microscope,
  Monitor,
  Package,
  Pencil,
  Phone,
  Rocket,
  Scan,
  Send,
  Settings,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Syringe,
  Target,
  Terminal,
  TrendingUp,
  Truck,
  Users,
  Wifi,
  Wrench,
  Zap,
} from 'lucide-react'
import {
  DEFAULT_CARD_ICON,
  type CardIconName,
  resolveCardIconName,
} from '@/lib/card-list'

/**
 * 許可リスト名 → lucide コンポーネント。
 * ここに無い名前は描画しない（resolveCardIconName でデフォルトへ）。
 */
export const CARD_ICON_MAP: Record<CardIconName, LucideIcon> = {
  Activity,
  Award,
  BadgeCheck,
  BarChart3,
  Binary,
  Boxes,
  Brain,
  Building2,
  Calendar,
  Camera,
  CheckCircle,
  CircuitBoard,
  Clock,
  Cloud,
  Code,
  Cog,
  Component,
  Cpu,
  CreditCard,
  Database,
  Eye,
  Factory,
  FileText,
  FlaskConical,
  Gauge,
  Gem,
  Grid3x3,
  Hammer,
  Hand,
  Heart,
  HeartPulse,
  Image,
  Key,
  Layers,
  LayoutGrid,
  Lightbulb,
  Lock,
  Mail,
  MapPin,
  Microscope,
  Monitor,
  Package,
  Pencil,
  Phone,
  Rocket,
  Scan,
  Send,
  Settings,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Syringe,
  Target,
  Terminal,
  TrendingUp,
  Truck,
  Users,
  Wifi,
  Wrench,
  Zap,
}

export function CardIcon({
  name,
  ...props
}: { name: string } & LucideProps) {
  const resolved = resolveCardIconName(name)
  const Icon = CARD_ICON_MAP[resolved] ?? CARD_ICON_MAP[DEFAULT_CARD_ICON]
  return <Icon {...props} />
}

/** feature-grid の列数クラス */
export function featureGridClassName(count: number): string {
  if (count <= 1) return 'grid grid-cols-1 gap-8'
  if (count === 2) return 'grid grid-cols-1 md:grid-cols-2 gap-8'
  if (count === 3) return 'grid grid-cols-1 md:grid-cols-3 gap-8'
  if (count === 4) return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
  return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
}

/** equipment グリッド */
export function equipmentGridClassName(count: number): string {
  if (count <= 1) return 'grid grid-cols-1 gap-8'
  if (count === 2) return 'grid grid-cols-1 md:grid-cols-2 gap-8'
  return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
}

export function stepNumberLabel(index: number): string {
  return String(index + 1).padStart(2, '0')
}

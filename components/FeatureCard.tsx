import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  titlePreviewKey?: string;
  descriptionPreviewKey?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  className = "",
  titlePreviewKey,
  descriptionPreviewKey,
}: FeatureCardProps) {
  return (
    <div className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow ${className}`}>
      <div className="text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900" data-preview-key={titlePreviewKey}>
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed" data-preview-key={descriptionPreviewKey}>
        {description}
      </p>
    </div>
  );
}
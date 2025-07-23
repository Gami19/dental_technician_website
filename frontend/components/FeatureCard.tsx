import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({ icon, title, description, className = "" }: FeatureCardProps) {
  return (
    <div className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow ${className}`}>
      <div className="text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
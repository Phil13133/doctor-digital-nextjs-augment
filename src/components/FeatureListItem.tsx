import React from 'react';
import { CheckIcon } from '@/components/icons';

interface FeatureListItemProps {
  title: string;
  description: string;
}

const FeatureListItem: React.FC<FeatureListItemProps> = ({ title, description }) => {
  return (
    <div className="flex items-start mb-6">
      <div className="bg-brand-200 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
        <CheckIcon size={16} color="#ffffff" />
      </div>
      <div>
        <p className="font-bold mb-1">{title}</p>
        <p className="text-text-light">{description}</p>
      </div>
    </div>
  );
};

export default FeatureListItem;

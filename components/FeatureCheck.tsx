import { FiCheck } from 'react-icons/fi';

export type FeatureCheckProps = {
  label: string;
  className?: string;
};

export const FeatureCheck = ({
  label,
  className = '',
}: FeatureCheckProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <FiCheck className="h-5 w-5 text-success" />
      <span>{label}</span>
    </div>
  );
};

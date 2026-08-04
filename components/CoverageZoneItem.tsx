import { FiMapPin } from 'react-icons/fi';

export type CoverageZoneItemProps = {
  name: string;
  sectors: string;
};

export const CoverageZoneItem = ({
  name,
  sectors,
}: CoverageZoneItemProps) => {
  return (
    <li className="flex items-start gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <FiMapPin className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-base font-bold text-dark">{name}</h3>
        <p className="mt-1 text-sm text-muted">{sectors}</p>
      </div>
    </li>
  );
};

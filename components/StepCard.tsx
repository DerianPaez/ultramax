export type StepCardProps = {
  number: number;
  title: string;
  description: string;
};

export const StepCard = ({
  number,
  title,
  description,
}: StepCardProps) => {
  return (
    <div className="flex flex-col gap-6 items-center text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-xl font-extrabold text-primary shadow-lg shadow-black/10 hover:scale-105 transition-transform duration-200">
        {number}
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm leading-6 text-white/70 max-w-xs">{description}</p>
      </div>
    </div>
  );
};

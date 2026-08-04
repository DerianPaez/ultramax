import { FiChevronDown } from 'react-icons/fi';

export type FaqItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

export const FaqItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: FaqItemProps) => {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 transition-all duration-200 hover:border-primary/30">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 text-left cursor-pointer focus:outline-none"
      >
        <span className="text-base font-bold text-dark sm:text-lg">
          {question}
        </span>
        <span className="flex h-7 items-center">
          <FiChevronDown
            className={`h-5 w-5 text-muted transition-transform duration-200 ${
              isOpen ? 'rotate-180 text-primary' : 'rotate-0'
            }`}
          />
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-6 text-muted pr-4 sm:text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

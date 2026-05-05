import { cn } from "@sglara/cn";

type ButtonProps = {
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  disabled,
  onClick,
  children,
  className,
}) => {
  return (
    <button
      type="button"
      className={cn(
        "bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 cursor-pointer",
        disabled && "opacity-50 pointer-events-none",
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

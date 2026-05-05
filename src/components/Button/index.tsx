import { cn } from "@sglara/cn";

type ButtonProps = {
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  disabled,
  onClick,
  children,
}) => {
  return (
    <button
      className={cn(
        "bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600",
        disabled && "opacity-50 cursor-not-allowed",
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

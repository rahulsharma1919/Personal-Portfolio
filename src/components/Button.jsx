import { twMerge } from "tailwind-merge";
import { Download } from "lucide-react";

const Button = ({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={twMerge(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border bg-background p-2 px-6 text-center font-semibold",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-white transition-all duration-300 group-hover:scale-[100.8]"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          Download CV
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-1 text-black opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>Download CV</span>
        <Download className="size-5" />
      </div>
    </button>
  );
};

export default Button;

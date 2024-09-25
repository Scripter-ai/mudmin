import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/ultis"; // Utility to combine class names

const buttonVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#ffffff] border-2 border-[#FFFFFF] rounded-md text-[#000000] hover:text-[#ffffff] hover:border-[#ED6A4C] hover:bg-[#ED6A4C] text-sm font-regular",
        secondary:
          "bg-[#1A1A1A] border-2 border-[#1A1A1A] rounded-md text-[#FFFFFF] hover:text-[#ffffff] hover:border-[#ED6A4C] hover:bg-[#ED6A4C] text-sm font-regular",  
        outline:
          "bg-transparent border-2 border-[#02C5D1] rounded-md text-[#02C5D1] hover:text-[#ffffff] hover:border-[#02C5D1] hover:bg-[#02C5D1] text-sm font-regular",  
        destructive:
          "bg-red-500 text-white hover:bg-red-300 rounded-md",
      },
      size: {
        default: "px-4 py-2",
        sm: "px-2 py-1",
        md: "px-3 py-1.5",
        lg: "px-4 py-2",
        xl: "p-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: React.ReactNode; // Adding the `icon` prop
  iconPosition?: "left" | "right"; // Icon can be on the left or right
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, icon, iconPosition = "left", asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {icon && iconPosition === "left" && (
          <span className="mr-2">{icon}</span> 
        )}
        {children}
        {icon && iconPosition === "right" && (
          <span className="ml-2">{icon}</span> 
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };

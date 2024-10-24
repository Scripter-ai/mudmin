import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/ultis"; 

const buttonVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#ffffff] border-2 border-[#FFFFFF] rounded-full text-[#000000] hover:text-[#ffffff] hover:border-[#007236] hover:bg-[#007236] text-sm font-regular",
        secondary:
          "bg-[#007236] border-2 border-[#007236] rounded-full text-[#FFFFFF] hover:text-[#000000] hover:border-[#BFD730] hover:bg-[#BFD730] text-sm font-regular",
        tabs:
          "bg-[#BFD730] border-2 border-[#BFD730] rounded-full text-[#000000] hover:text-[#000000] hover:border-[#FFFFFF] hover:bg-[#FFFFFF] text-sm font-regular",    
        dark:
          "bg-[#001231] border-2 border-[#001231] rounded-full text-[#FFFFFF] hover:text-[#000000] hover:border-[#001231] hover:bg-transparent text-sm font-regular",    
        outline: 
          "bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-[#335343] text-sm font-regular",
        solid: 
          "bg-white text-[#335343] rounded-full hover:bg-[#BFD730] hover:text-[#001231] text-sm font-regular",
        destructive:
          "bg-red-500 text-white hover:bg-red-300 rounded-full",
        gethelp:
          "bg-[#0E0C22] border-2 border-[#0E0C22] rounded-full text-[#FFFFFF] hover:text-[#FFFFFF] hover:border-[#0E0C22] hover:bg-[#0E0C22] text-sm font-regular",  
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

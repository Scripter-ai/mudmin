import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/ultis"; // Utility to combine class names
import { CancelSquareIcon } from "../icon/icons";
import { Button } from "../ui/button";

const modalVariants = cva(
  "fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 transition-opacity", // Overlay styles
  {
    variants: {
      size: {
        sm: "max-w-sm p-4",
        md: "max-w-md p-6",
        lg: "max-w-lg p-8",
        xl: "max-w-xl p-10",
      },
      rounded: {
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
      },
    },
    defaultVariants: {
      size: "md",
      rounded: "md",
    },
  }
);

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof modalVariants> {
  open: boolean;
  onClose: () => void;
  asChild?: boolean;
  children: React.ReactNode;
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ className, size, rounded, open, onClose, asChild = false, children, ...props }, ref) => {
    if (!open) return null; // Don't render modal if it's not open

    const Comp = asChild ? Slot : "div";

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>

        {/* The overlay */}
        <Comp
          className={cn(modalVariants({ size, rounded, className }), "bg-white relative", "shadow-lg")}
          ref={ref}
          onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
          {...props}
        >

          {/* Close Button */}
          <Button 
            className="absolute top-2 right-2 p-1"
            variant="default" 
            size="sm"
            icon={<CancelSquareIcon />} 
            iconPosition="left"
            aria-label="Close Modal"
            onClick={onClose}
          >
            Test
          </Button>

          {/* Modal Content */}
          {children}
        </Comp>
      </div>
    );
  }
);

Modal.displayName = "Modal";

export { Modal };

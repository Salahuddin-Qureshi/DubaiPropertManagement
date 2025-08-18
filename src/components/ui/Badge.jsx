import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-neutral-100 text-neutral-900",
        secondary: "bg-secondary-100 text-secondary-900",
        destructive: "bg-red-100 text-red-900",
        outline: "text-neutral-700 border border-neutral-300",
        success: "bg-green-100 text-green-900",
        warning: "bg-yellow-100 text-yellow-900",
        info: "bg-blue-100 text-blue-900",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Badge = React.forwardRef(({ className, variant, ...props }, ref) => (
  <div ref={ref} className={cn(badgeVariants({ variant }), className)} {...props} />
));

Badge.displayName = "Badge";

export { Badge, badgeVariants };

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const avatarVariants = cva(" flex h-10 w-10 shrink-0 overflow-hidden rounded-full", {
  variants: {
    variant: {
      default: " flex w-[30px] h-[30px] rounded-[50px] bg-[#F7F8F8]/[0.5] p-[8px] justify-center items-center",
      police: " flex w-[36px] h-[36px]  rounded-[35px] border-[2px] border-[#C92F11] p-[8px] "
    },
    size: {
      xl: "h-24 w-24 shrink-0",
      lg: "h-16 w-16 shrink-0",
      md: "h-9 w-9",
      sm: "h-6 w-6"
    }
  }
});

export type AvatarItemsProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> &
  React.ComponentPropsWithRef<typeof AvatarPrimitive.Root> &
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> &
  VariantProps<typeof avatarVariants> & {
    asChild?: boolean;
  };

const Avatar = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Root>, AvatarItemsProps>(
  ({ className, variant, size, ...props }, ref) => (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(avatarVariants({ variant, size, className }))}
      {...props}
    />
  )
);
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image ref={ref} className={cn("aspect-square size-[36px]", className)} {...props} />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };

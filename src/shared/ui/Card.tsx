import { forwardRef } from "react";

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

// 카드 컴포넌트
export const Card = forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
    {...props}
  />
));

Card.displayName = 'Card';

interface CardHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

// 카드 헤더 컴포넌트
export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
));

CardHeader.displayName = 'CardHeader';

interface CardTitleProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

// 카드 제목 컴포넌트
export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
    {...props}
  />
));

CardTitle.displayName = 'CardTitle';

interface CardContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

// 카드 내용 컴포넌트
export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
));

CardContent.displayName = 'CardContent';
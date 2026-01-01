import React from 'react';

interface GoldFoilProps {
  children: React.ReactNode;
  className?: string;
  component?: React.ElementType;
}

const GoldFoil: React.FC<GoldFoilProps> = ({ 
  children, 
  className = '', 
  component: Component = 'span' 
}) => {
  // We use an arbitrary value for the gradient to ensure the specific gold luxe stops are preserved
  // while using the Tailwind animation utility defined in index.html
  const goldGradientClass = "bg-[linear-gradient(to_right,#b45309_0%,#d97706_20%,#fcd34d_40%,#fffbeb_50%,#fcd34d_60%,#d97706_80%,#b45309_100%)]";
  
  return (
    <Component 
      className={`
        ${goldGradientClass} 
        bg-[length:200%_auto] 
        bg-clip-text 
        text-transparent 
        animate-shimmer 
        font-serif 
        font-bold 
        tracking-wide 
        ${className}
      `}
    >
      {children}
    </Component>
  );
};

export default GoldFoil;
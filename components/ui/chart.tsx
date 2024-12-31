import React from 'react';

export const ChartContainer = ({ children, config }: { children: React.ReactNode, config: any }) => {
  return (
    <div className="chart-container">
      {children}
    </div>
  );
};

export const ChartTooltip = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="chart-tooltip">
      {children}
    </div>
  );
};

export const ChartTooltipContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="chart-tooltip-content">
      {children}
    </div>
  );
};

export const ChartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
};
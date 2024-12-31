import React from 'react';

export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex flex-col border bg-white px-2 py-4">
      {children}
    </div>
  );
};

export const CardHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-4">
      {children}
    </div>
  );
};

export const CardTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-sm font-semibold text-[#101828]">
      {children}
    </h2>
  );
};

export const CardDescription = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-sm font-semibold">
      {children}
    </p>
  );
};

export const CardContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export const CardFooter = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-4 text-red-600">
      {children}
    </div>
  );
};
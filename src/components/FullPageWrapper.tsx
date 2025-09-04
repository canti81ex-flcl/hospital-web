import React from 'react';

interface FullPageWrapperProps {
  children: React.ReactNode;
}

export default function FullPageWrapper({ children }: FullPageWrapperProps) {
  return <>{children}</>;
}

import React from 'react';
export type HOC = <P>(Component: React.ComponentType<P>) => React.ComponentType<P>;

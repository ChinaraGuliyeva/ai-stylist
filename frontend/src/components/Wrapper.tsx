import React, { type ReactNode } from 'react';

export const Wrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="my-3">
            {children}
        </div>
    );
};
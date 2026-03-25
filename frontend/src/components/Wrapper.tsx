import type React from "react";
import type { ReactNode } from "react";

export const Wrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
	return <div className="wrapper my-5">{children}</div>;
};

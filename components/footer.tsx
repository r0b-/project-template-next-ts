import * as React from "react";

export interface IFooterProps {
    children?: any;
}

export default ({children}: IFooterProps) => (
    <footer>
        <div>Copyright {new Date().getFullYear()}</div>
        {children}
    </footer>
);

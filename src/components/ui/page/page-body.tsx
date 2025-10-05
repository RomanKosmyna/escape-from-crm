import React from "react";

interface PageBodyProps {
    children: React.ReactNode;
}

const PageBody = ({ children }: PageBodyProps) => {
    return (
        <div className="w-full h-screen pt-16 px-6 bg-white dark:bg-black">
            {children}
        </div>
    );
};

export default PageBody;

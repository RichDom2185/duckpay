import React from "react";

type Props = {
  children: React.ReactNode;
};

const Page: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col gap-y-16 justify-center items-center px-6 py-4 max-w-5xl mx-auto h-screen">
      {children}
    </div>
  );
};

export default Page;

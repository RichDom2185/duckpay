import clsx from "clsx";
import React from "react";

type Props = {
  children: React.ReactNode;
  bodyClassName?: string;
  title?: string;
};

const Card: React.FC<Props> = ({ children, bodyClassName, title }) => {
  return (
    <div className="card bg-neutral text-neutral-content w-96">
      <div
        className={clsx("card-body items-center text-center", bodyClassName)}
      >
        {title && <h2 className="card-title">{title}</h2>}
        {children}
      </div>
    </div>
  );
};

export default Card;

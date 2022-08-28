import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <div className="w-full text-center my-4">
      <h2 className="w-full text-3xl">{title}</h2>
      {subtitle && <h3>{subtitle}</h3>}
    </div>
  );
};

export default Header;

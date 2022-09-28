import React from "react";
import { routes } from "../../constants/routes";
import NavigationItem from "../Home/NavigationItem";

const HeaderSection = () => {
  return (
    <div className="w-screen flex justify-end px-10">
      {routes.map((linkItem) => (
        <NavigationItem link={linkItem.link} title={linkItem.title} />
      ))}
    </div>
  );
};

export default HeaderSection;

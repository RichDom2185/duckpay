import { Icon } from "@iconify/react";
import React from "react";
import duckpay from "../../assets/duck-transparent-bg.png";
import ThemeSelector from "./common/buttons/ThemeSelector";

const Menu: React.FC = () => {
  return (
    <>
      <div className="sticky top-8 mt-8 z-50">
        <div className="text-center">
          <div className="fixed left-8 top-8">
            <ul className="menu menu-horizontal bg-base-200 rounded-box shadow-xl text-xl">
              <li>
                <a className="tooltip tooltip-bottom" data-tip="Duckpay">
                  <img src={duckpay} alt="duckpay" className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
          <ul className="menu menu-horizontal bg-base-200 rounded-box shadow-xl text-xl">
            <li>
              <a className="tooltip tooltip-bottom" data-tip="Scan">
                <Icon icon="tabler:qrcode" />
              </a>
            </li>
            <li>
              <a className="tooltip tooltip-bottom" data-tip="Key">
                <Icon icon="tabler:key" />
              </a>
            </li>
          </ul>
        </div>
        <div className="fixed right-8 top-8">
          <ThemeSelector />
        </div>
      </div>
    </>
  );
};

export default Menu;

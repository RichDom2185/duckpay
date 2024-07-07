import { Icon } from "@iconify/react";
import ThemeSelector from "./common/buttons/ThemeSelector";
import { useModal } from "./common/hooks/hooks";
import { EnterKeyModal } from "./modals/EnterKeyModal";
import { GenerateKeyModal } from "./modals/GenerateKeyModal";
import { QRScannerModal } from "./modals/QRScannerModal";
import { Token } from "../types/types";
import duckpay from "../../assets/duck-transparent-bg.png";

interface MenuProps {
  tokens: Token[];
}

const Menu: React.FC<MenuProps> = ({ tokens }) => {
  const {
    isOpen: isGenerateKeyModalOpen,
    openModal: openGenerateKeyModal,
    closeModal: closeGenerateKeyModal,
  } = useModal();

  const {
    isOpen: isEnterKeyModalOpen,
    openModal: openEnterKeyModal,
    closeModal: closeEnterKeyModal,
  } = useModal();

  const {
    isOpen: isQRScannerModalOpen,
    setIsOpen: setIsQRScannerModalOpen,
    openModal: openQRScannerModal,
    closeModal: closeQRScannerModal,
  } = useModal();

  const openKeyModal = () => {
    if (tokens.length === 0) {
      openEnterKeyModal();
    } else {
      openGenerateKeyModal();
    }
  };

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
              <a className="tooltip tooltip-bottom" data-tip="Split">
                <Icon className="-rotate-90" icon="tabler:arrows-split" />
              </a>
            </li>
            <li>
              <a
                className="tooltip tooltip-bottom"
                data-tip="Scan"
                onClick={openQRScannerModal}
              >
                <Icon icon="tabler:qrcode" />
              </a>
            </li>
            <li>
              <a
                className="tooltip tooltip-bottom"
                data-tip="Key"
                onClick={openKeyModal}
              >
                <Icon icon="tabler:key" />
              </a>
            </li>
          </ul>
        </div>
        <div className="fixed right-8 top-8">
          <ThemeSelector />
        </div>
      </div>

      {/* Modals */}
      <QRScannerModal
        setIsOpen={setIsQRScannerModalOpen}
        isOpen={isQRScannerModalOpen}
        onClose={closeQRScannerModal}
      />
      <GenerateKeyModal
        isOpen={isGenerateKeyModalOpen}
        onClose={closeGenerateKeyModal}
      />
      <EnterKeyModal
        isOpen={isEnterKeyModalOpen}
        onClose={closeEnterKeyModal}
      />
    </>
  );
};

export default Menu;

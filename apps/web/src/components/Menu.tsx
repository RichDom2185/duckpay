import { Icon } from "@iconify/react";
import { useModal } from "./common/hooks/hooks";
import { EnterKeyModal } from "./modals/EnterKeyModal";
import { GenerateKeyModal } from "./modals/GenerateKeyModal";
import { QRScannerModal } from "./modals/QRScannerModal";

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
      <div className="mt-8 sticky top-8 text-center">
        <ul className="menu menu-horizontal bg-base-200 rounded-box shadow-xl">
          <li>
            <a className="tooltip" data-tip="Split">
              <Icon className="h-5 w-5 -rotate-90" icon="tabler:arrows-split" />
            </a>
          </li>
          <li>
            <a className="tooltip" data-tip="Scan" onClick={openQRScannerModal}>
              <Icon className="h-5 w-5" icon="tabler:qrcode" />
            </a>
          </li>
          <li>
            <a className="tooltip" data-tip="Key" onClick={openKeyModal}>
              <Icon className="h-5 w-5" icon="tabler:key" />
            </a>
          </li>
        </ul>
      </div>

      {/* Modals */}
      <QRScannerModal
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

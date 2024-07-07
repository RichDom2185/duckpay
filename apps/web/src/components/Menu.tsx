import { Icon } from "@iconify/react";
import clsx from "clsx";
import React, { useCallback } from "react";
import duckpay from "../../assets/duck-transparent-bg.png";
import { SplitActions } from "../redux/slices/splitSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import ThemeSelector from "./common/buttons/ThemeSelector";
import { useModal } from "./common/hooks/hooks";
import { DuckModal } from "./modals/DuckModal";
import { EnterKeyModal } from "./modals/EnterKeyModal";
import { GenerateKeyModal } from "./modals/GenerateKeyModal";
import { QRScannerModal } from "./modals/QRScannerModal";

const Menu: React.FC = () => {
  const dispatch = useAppDispatch();
  const isSplitMode = useAppSelector((state) => state.split.isSplitMode);

  const toggleSplitMode = useCallback(() => {
    dispatch(SplitActions.toggleSplitMode());
  }, [dispatch]);

  const tokens = useAppSelector((state) => state.session.tokens) ?? [];
  const {
    isOpen: isGenerateKeyModalOpen,
    openModal: openGenerateKeyModal,
    closeModal: closeGenerateKeyModal
  } = useModal();

  const {
    isOpen: isEnterKeyModalOpen,
    openModal: openEnterKeyModal,
    closeModal: closeEnterKeyModal
  } = useModal();

  const {
    isOpen: isQRScannerModalOpen,
    openModal: openQRScannerModal,
    closeModal: closeQRScannerModal
  } = useModal();

  const {
    isOpen: isDuckModalOpen,
    openModal: openDuckModal,
    closeModal: closeDuckModal
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
                <a
                  className="tooltip tooltip-bottom"
                  data-tip="Duckpay"
                  onClick={openDuckModal}
                >
                  <img src={duckpay} alt="duckpay" className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
          <ul className="menu menu-horizontal bg-base-200 rounded-box shadow-xl text-xl">
            <li>
              <a
                className={clsx(
                  "tooltip tooltip-bottom",
                  isSplitMode && "bg-primary text-primary-content"
                )}
                data-tip="Split"
                onClick={toggleSplitMode}
              >
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
      <DuckModal isOpen={isDuckModalOpen} onClose={closeDuckModal} />
    </>
  );
};

export default Menu;

import { useModal } from "./common/hooks/hooks";
import { GenerateKeyModal } from "./modals/GenerateKeyModal";
import { EnterKeyModal } from "./modals/EnterKeyModal";

const NavBar: React.FC = () => {
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

  return (
    <>
      <div className="flex justify-center items-center">
        <ul className="menu menu-horizontal bg-base-200 rounded-box mt-8">
          <li>
            <a className="tooltip" data-tip="Split">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M16 3h5v5M8 3H3v5" />
                  <path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3m12 6l6-6" />
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a className="tooltip" data-tip="Scan">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  fill="currentColor"
                  d="M3 7.039V3h4.039v1H4v3.039zM3 21v-4.038h1V20h3.039v1zm13.962 0v-1H20v-3.038h1V21zM20 7.039V4h-3.038V3H21v4.039zm-3.058 9.903h1.212v1.212h-1.212zm0-2.423h1.212v1.212h-1.212zm-1.211 1.212h1.211v1.211h-1.211zm-1.212 1.211h1.212v1.212h-1.212zm-1.211-1.211h1.211v1.211h-1.211zm2.423-2.423h1.211v1.211h-1.211zm-1.212 1.211h1.212v1.212h-1.212zm-1.211-1.211h1.211v1.211h-1.211zm4.846-7.462v4.846h-4.846V5.846zm-7.462 7.462v4.846H5.846v-4.846zm0-7.462v4.846H5.846V5.846zM9.808 17.27v-3.077H6.73v3.077zm0-7.461V6.73H6.73v3.077zm7.461 0V6.73h-3.077v3.077z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              className="tooltip"
              data-tip="Key"
              onClick={openGenerateKeyModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1-4.069 0l-.301-.301l-6.558 6.558a2 2 0 0 1-1.239.578L5.172 21H4a1 1 0 0 1-.993-.883L3 20v-1.172a2 2 0 0 1 .467-1.284l.119-.13L4 17h2v-2h2v-2l2.144-2.144l-.301-.301a2.877 2.877 0 0 1 0-4.069l2.643-2.643a2.877 2.877 0 0 1 4.069 0M15 9h.01"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              className="tooltip"
              data-tip="Dummy button"
              onClick={openEnterKeyModal}
            >
              enter key
            </a>
          </li>
        </ul>
      </div>

      {/* Modals */}
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

export default NavBar;

import React from "react";
import { Draggable, Droppable } from "react-drag-and-drop";
import { useModal } from "./common/hooks/hooks";
import QrCodeModal from "./modals/QrCodeModal";

interface TokenProps {
  tokenId: string;
  tokenAmount: string;
}

interface DropData {
  token: string;
}

const Token: React.FC<TokenProps> = ({ tokenId, tokenAmount }) => {
  console.log(`Token [ID: ${tokenId}, Amount: ${tokenAmount}]`);

  const { isOpen, openModal, closeModal } = useModal();

  const onDrop = (data: DropData) => {
    const parsedData = JSON.parse(data.token);
    console.log(
      `Dropped from [ID: ${parsedData.tokenId}, Amount: ${parsedData.tokenAmount}] to [ID: ${tokenId}, Amount: ${tokenAmount}]`
    );
  };

  return (
    <>
      <Droppable types={["token"]} onDrop={onDrop} style={{ margin: "0.5rem" }}>
        <Draggable
          type="token"
          data={JSON.stringify({ tokenId: tokenId, tokenAmount: tokenAmount })}
        >
          <div
            onClick={openModal}
            className="w-32 h-32 bg-slate-400 flex items-center justify-center text-white text-3xl font-bold rounded shadow-lg"
          >
            {tokenAmount}
          </div>
        </Draggable>
      </Droppable>
      <QrCodeModal tokenId={tokenId} isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

export default Token;

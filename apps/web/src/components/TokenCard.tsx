import React, { useState } from "react";
import { Draggable, Droppable } from "react-drag-and-drop";
import MergeModal from "./modals/MergeModal";
import { useModal } from "./common/hooks/hooks";
import QrCodeModal from "./modals/QrCodeModal";
import { Token } from "../types/types";

interface TokenCardProps {
  token: Token;
}

interface DropData {
  token: string;
}

const TokenCard: React.FC<TokenCardProps> = ({ token }) => {
  console.log(
    `Token [accountId: ${token.accountId}, tokenId: ${token.id}, Amount: ${token.amount}]`
  );
  const [mergeModalOpen, setMergeModalOpen] = useState(false);
  const [droppedTokenAmount, setDroppedTokenAmount] = useState("");
  const [droppedTokenId, setDroppedTokenId] = useState("");

  const { isOpen, openModal, closeModal } = useModal();

  const onDrop = (data: DropData) => {
    const token = JSON.parse(data.token);
    console.log(
      `Dropped from [ID: ${token.tokenId}, Amount: ${token.tokenAmount}]`
    );
    setDroppedTokenAmount(token.tokenAmount);
    setDroppedTokenId(token.tokenId);
    setMergeModalOpen(true);
  };

  return (
    <>
      <Droppable types={["token"]} onDrop={onDrop} style={{ margin: "0.5rem" }}>
        <Draggable
          type="token"
          data={JSON.stringify({
            tokenId: token.id,
            tokenAmount: token.amount,
          })}
        >
          <div
            onClick={openModal}
            className="w-32 h-32 bg-slate-400 flex items-center justify-center text-white text-3xl font-bold rounded shadow-lg"
          >
            {token.amount}
          </div>
        </Draggable>
      </Droppable>
      <QrCodeModal token={token} isOpen={isOpen} onClose={closeModal} />
      <MergeModal
        isOpen={mergeModalOpen}
        onClose={() => setMergeModalOpen(false)}
        tokenAmount1={token.amount.toString()}
        tokenAmount2={droppedTokenAmount}
        tokenId1={token.id}
        tokenId2={droppedTokenId}
      />
    </>
  );
};

export default TokenCard;

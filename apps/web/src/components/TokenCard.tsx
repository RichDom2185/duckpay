import React, { useState } from "react";
import { Draggable, Droppable } from "react-drag-and-drop";
import MergeModal from "./modals/MergeModal";

interface TokenCardProps {
  accountId: string;
  tokenId: string;
  tokenAmount: string;
}

interface DropData {
  token: string;
}

const TokenCard: React.FC<TokenCardProps> = ({
  accountId,
  tokenId,
  tokenAmount,
}) => {
  console.log(`Token [accountId: ${accountId}, tokenId: ${tokenId}, Amount: ${tokenAmount}]`);
  const [mergeModalOpen, setMergeModalOpen] = useState(false);
  const [droppedTokenAmount, setDroppedTokenAmount] = useState("");
  const [droppedTokenId, setDroppedTokenId] = useState("");

  const onDrop = (data: DropData) => {
    const parsedData = JSON.parse(data.token);
    console.log(`Dropped from [ID: ${parsedData.tokenId}, Amount: ${parsedData.tokenAmount}] to [ID: ${tokenId}, Amount: ${tokenAmount}]`);
    setDroppedTokenAmount(parsedData.tokenAmount);
    setDroppedTokenId(parsedData.tokenId);
    setMergeModalOpen(true);
  };

  return (
    <>
      <Droppable types={["token"]} onDrop={onDrop} style={{ margin: "0.5rem" }}>
        <Draggable
          type="token"
          data={JSON.stringify({ tokenId: tokenId, tokenAmount: tokenAmount })}
        >
          <div className="w-32 h-32 bg-slate-400 flex items-center justify-center text-white text-3xl font-bold rounded shadow-lg cursor-pointer">
            {tokenAmount}
          </div>
        </Draggable>
      </Droppable>
      <MergeModal
        isOpen={mergeModalOpen}
        onClose={() => setMergeModalOpen(false)}
        tokenAmount1={tokenAmount}
        tokenAmount2={droppedTokenAmount}
        tokenId1={tokenId}
        tokenId2={droppedTokenId}
      />
    </>
  );
};

export default TokenCard;
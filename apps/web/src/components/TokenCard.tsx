import clsx from "clsx";
import React, { useState } from "react";
import { Draggable, Droppable } from "react-drag-and-drop";
import duckpay from "../../assets/duck-transparent-bg.png";
import { SplitActions } from "../redux/slices/splitSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { Token } from "../types/types";
import { useModal } from "./common/hooks/hooks";
import MergeModal from "./modals/MergeModal";
import QrCodeModal from "./modals/QrCodeModal";

interface TokenCardProps {
  token: Token;
}

interface DropData {
  token: string;
}

const TokenCard: React.FC<TokenCardProps> = ({ token }) => {
  const [mergeModalOpen, setMergeModalOpen] = useState(false);
  const [droppedTokenAmount, setDroppedTokenAmount] = useState("");
  const [droppedTokenId, setDroppedTokenId] = useState("");

  const { isOpen, openModal, closeModal } = useModal();

  const dispatch = useAppDispatch();
  const isSplitMode = useAppSelector((state) => state.split.isSplitMode);

  const onDrop = (data: DropData) => {
    const token = JSON.parse(data.token);
    console.log(
      `Dropped from [ID: ${token.tokenId}, Amount: ${token.tokenAmount}]`
    );
    setDroppedTokenAmount(token.tokenAmount);
    setDroppedTokenId(token.tokenId);
    setMergeModalOpen(true);
  };

  const handleClick = () => {
    if (isSplitMode) {
      dispatch(
        SplitActions.openSplitModal({
          tokenId: token.id,
          tokenAmount: token.amount
        })
      );
    } else {
      openModal();
    }
  };

  return (
    <>
      <Droppable types={["token"]} onDrop={onDrop} style={{ margin: "0.5rem" }}>
        <Draggable
          type="token"
          data={JSON.stringify({
            tokenId: token.id,
            tokenAmount: token.amount
          })}
        >
          <div
            onClick={handleClick}
            className={clsx(
              "card bg-base-100 image-full w-64 h-32 shadow-x shadow-lg transition-transform duration-200 ease-in-out hover:scale-105",
              isSplitMode && "cursor-pointer"
            )}
          >
            <div
              onClick={openModal}
              className="card bg-base-100 image-full w-64 h-32 shadow-x shadow-lg transition-transform duration-200 ease-in-out hover:scale-105"
            >
              <figure>
                <img
                  src={duckpay}
                  alt="Duck Pay"
                  className="opacity-50 translate-x-12 saturate-0"
                />
              </figure>
              <div className="card-body">
                <p className="card-title text-4xl font-bold">${token.amount}</p>
              </div>
            </div>
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

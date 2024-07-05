import React from "react";
import { Draggable, Droppable } from "react-drag-and-drop";

interface TokenProps {
  tokenValue: string;
  tokenId: string;
}

interface DropData {
  token: string;
}

const Token: React.FC<TokenProps> = ({ tokenId, tokenValue }) => {
  console.log(`Token [ID: ${tokenId}, Value: ${tokenValue}]`);
  const onDrop = (data: DropData) => {
    const parsedData = JSON.parse(data.token);
    console.log(
      `Dropped from [ID: ${parsedData.tokenId}, Value: ${parsedData.tokenValue}] to [ID: ${tokenId}, Value: ${tokenValue}]`,
    );
  };

  return (
    <Droppable
      types={["token"]}
      onDrop={onDrop}
      style={{ margin: "0.5rem" }}
    >
      <Draggable
        type="token"
        data={JSON.stringify({ tokenId: tokenId, tokenValue: tokenValue })}
      >
        <div className="w-32 h-32 bg-slate-400 flex items-center justify-center text-white text-3xl font-bold rounded shadow-lg">
          {tokenValue}
        </div>
      </Draggable>
    </Droppable>
  );
};

export default Token;

import { CustomQRCode } from "custom-qr-code/react";
import React from "react";
import duck from "../../assets/duck-transparent-bg.png";

interface QrCodeGeneratorProps {
  data: string;
}

const QrCodeGenerator: React.FC<QrCodeGeneratorProps> = ({ data }) => {
  return (
    <div className="flex justify-center p-4">
      <CustomQRCode
        className="qr-code"
        style={{ margin: "0 auto" }}
        containerProps={{ "aria-label": "Dynamic QR Code" }}
        width={300}
        height={300}
        type="svg"
        data={data}
        image={duck}
        dotsOptions={{
          color: "#4267B2",
          gradient: {
            type: "radial",
            colorStops: [
              { offset: 0, color: "#1E00FF" },
              { offset: 5, color: "#4267B2" }
            ]
          },
          type: "extra-rounded"
        }}
        cornersSquareOptions={{
          color: "#00BFFF",
          type: "extra-rounded"
        }}
        cornersDotOptions={{
          color: "#0038E0",
          type: "dot"
        }}
        backgroundOptions={{
          color: "#000000"
        }}
        imageOptions={{
          crossOrigin: "anonymous",
          margin: 5
        }}
      />
    </div>
  );
};

export default QrCodeGenerator;

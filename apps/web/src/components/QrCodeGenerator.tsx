import React from 'react';
import duck from '../assets/images/duck-transparent-bg.png';
import { CustomQRCode } from 'custom-qr-code/react';

interface QrCodeGeneratorProps {
  data: string;  // QR data passed as a prop
}

const QrCodeGenerator: React.FC<QrCodeGeneratorProps> = ({ data }) => {
  return (
    <div className="flex justify-center p-4 bg-base-200">
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
              colorStops: [{ offset: 0, color: '#1E00FF' }, { offset: 5, color: '#00FFFF' }]
            },
            type: "extra-rounded",
          }}
        cornersSquareOptions={
            {
                color: "#00BFFF",
                type: "extra-rounded",
            }
        }
        cornersDotOptions={
            {
                color: "#ffffff",
            }
        }
        backgroundOptions={{
          color: "#ffffff",
        }}
        imageOptions={{
          crossOrigin: "anonymous",
          margin: 5,
        }}
      />
    </div>
  );
};

export default QrCodeGenerator;

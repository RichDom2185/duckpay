interface TokenValueLabelProps {
  amount: number;
  currency: string;
}

const TokenValueLabel: React.FC<TokenValueLabelProps> = ({
  amount,
  currency,
}) => {
  return (
    <div className="flex items-center space-x-2 justify-center bg-base-200 pb-4">
      <span className="text-3xl font-bold" style={{ color: "#4267B2" }}>
        {amount}
      </span>
      <span className="text-xl" style={{ color: "#4267B2" }}>
        {currency}
      </span>
    </div>
  );
};

export default TokenValueLabel;

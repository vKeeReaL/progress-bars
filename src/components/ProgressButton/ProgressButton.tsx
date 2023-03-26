import React, { FC } from "react";
import useDataStore from "../../stores/useDataStore";

const ProgressButton: FC<{ value: number }> = function ({ value }) {
  const setActionAmount = useDataStore((state) => state.setActionAmount);
  const buttonText = value > 0 ? `+${value}` : value;

  const handleClick = () => setActionAmount(value);

  return (
    <button key={value} type="button" onClick={handleClick}>
      {buttonText}
    </button>
  );
};

export default ProgressButton;

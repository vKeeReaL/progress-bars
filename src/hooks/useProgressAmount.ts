import { useEffect, useState } from "react";
import useDataStore from "../stores/useDataStore";

const useProgressAmount = (id, amount) => {
  const { actionAmount, selectedBar } = useDataStore();
  const [progressAmount, setProgressAmount] = useState(amount);

  const checkPositiveAmount = (a, b) => (a + b <= 0 ? 0 : a + b);

  useEffect(() => {
    if (id === selectedBar) {
      setProgressAmount((prevState) =>
        checkPositiveAmount(prevState, actionAmount),
      );
    }
  }, [amount, actionAmount]);

  return progressAmount;
};

export default useProgressAmount;

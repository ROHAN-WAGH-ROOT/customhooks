import { useEffect, useState } from "react";

export const useNumber = (num = 0) => {
  const [number, setNumber] = useState(0);
  let isNegativeNumber = false;
  useEffect(() => {
    setNumber(num + 5);
  }, [num]);
  isNegativeNumber = number <= 0;

  return [number, isNegativeNumber];
};

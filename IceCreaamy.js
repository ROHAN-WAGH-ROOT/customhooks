import { useEffect, useState } from "react";

export const useCreame = (flavour) => {
  const [scoop, setScoop] = useState(flavour);
  useEffect(() => {
    switch (flavour) {
      case "chocolate":
        setScoop("excellent ...");
        break;
      case "vanilla":
        setScoop("good...");
        break;
      case "butter-scoatch":
        setScoop("galiya...");
        break;
    }
  });

  return [scoop, flavour];
};

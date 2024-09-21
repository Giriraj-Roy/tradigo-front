import { useContext } from "react";
import { ChartContext } from "../contexts/ChartContext";

const useCurrentCoin = () => {
  const context = useContext(ChartContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default useCurrentCoin;

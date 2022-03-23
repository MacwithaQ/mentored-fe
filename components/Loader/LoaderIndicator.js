import { MotiView } from "@motify/components";
import * as React from "react";

const LoadingIndicator = ({ size }) => {
  return (
    <MotiView
      form={{ width: size, height: size, borderRadius: size / 2 }}
      animate={{
        width: size + 150,
        height: size + 150,
        borderRadius: (size + 150) / 2,
      }}
      transition={{
        type: "timing",
        duration: 500,
        loop: true,
        // repeat: Infinity,
      }}
      style={{
        width: size - 50,
        height: size - 50,
        borderRadius: size / 2,
        borderWidth: size / 10,
        borderColor: "#57A0D7",
        shadowColor: "#57A0D7",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 10,
      }}
    />
  );
};
export default LoadingIndicator;

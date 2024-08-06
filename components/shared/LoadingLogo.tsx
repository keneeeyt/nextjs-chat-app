import React from "react";
import Image from "next/image";

type Props = {
  size?: number;
};

const LoadingLogo = ({size=40}: Props) => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={size}
        height={size}
        className="duration-800 animate-spin"
      />
    </div>
  );
};

export default LoadingLogo;

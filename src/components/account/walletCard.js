import React from "react";

export default function WalletCard(props) {
  return (
    <div
      className={`rounded-md p-4 space-y-3 border-2 ${
        props.currentWallet === props.wallet.type
          ? "border-primary"
          : "border-gray-300"
      } cursor-pointer hover:shadow-dark`}
      onClick={()=>{props.onClick(props.wallet.type)}}
    >
      <div className="w-full px-2">
        <img
          src={`/assets/images/wallet/${props.wallet.image}.png`}
          className="w-full h-16"
        />
      </div>
      <div className="w-full text-sm text-gray-500">
        {props.wallet.description}
      </div>
    </div>
  );
}

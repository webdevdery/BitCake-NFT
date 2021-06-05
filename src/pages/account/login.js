import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect, useHistory} from 'react-router';
import WalletCard from '../../components/account/walletCard';
import CustomButton from '../../components/common/Button';
import {login} from '../../redux/auth/action';
import {userSelector} from '../../redux/auth/selector';

export default function LoginPage() {
  const [currentWallet, setcurrentWallet] = useState('MetaMask');
  const walletCards = [
    {
      type: 'MetaMask',
      image: `MetaMask-logo`,
      description:
        "A browser extension with great flexibility. The web's most popular wallet",
    },
    {
      type: 'Trust Wallet',
      image: `Trust Wallet-logo`,
      description:
        "A browser extension with great flexibility. The web's most popular wallet",
    },
    {
      type: 'CoinBase',
      image: `CoinBase-logo`,
      description:
        "A browser extension with great flexibility. The web's most popular wallet",
    },
  ];
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  if (user.address) return <Redirect to="/account/profile" />;

  return (
    <div className="max-w-2xl h-trow mx-auto mt-20">
      <div className="w-full text-center  text-4xl">
        Sign in to your wallet.
      </div>

      <div className="w-full flex justify-center my-16">
        <img
          src={`/assets/images/wallet/${currentWallet}.png`}
          className={'w-40 h-40'}
        />
      </div>

      <CustomButton
        label="Sign in"
        styled="solid"
        className="w-40 h-12 text-xl"
        onClick={async () => {
          if (typeof window.ethereum !== 'undefined') {
            console.log('MetaMask is installed!');

            dispatch(login());
          } else {
            alert('You should install MetaMask!');
          }
        }}
      />

      <div className="w-full text-3xl font-janeroeb mt-16">
        Available Wallets
      </div>

      <div className="w-full grid grid-cols-3 gap-4 mt-8">
        {walletCards.map((walletCard, cardIndex) => (
          <WalletCard
            key={cardIndex}
            wallet={walletCard}
            currentWallet={currentWallet}
            onClick={(walletType) => {
              setcurrentWallet(walletType);
            }}
          />
        ))}
      </div>
    </div>
  );
}

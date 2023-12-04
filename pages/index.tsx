import { ConnectWallet, useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const contractAddress = "0x2c9F16B88F3AA7b4eCA45115eDedE00172c9E44f";
  const address = useAddress();
  const router = useRouter();
  const { contract } = useContract(contractAddress);
  // const { data, isLoading, error } = useContractRead(contract, "getTodo", []);

  return (
    <main >
      
      <ConnectWallet
              dropdownPosition={{
                side: "bottom",
                align: "center",
              }}
            />
            {
              address ? (
                <div>
                  <button onClick={() => router.push("/retailer")}>Retailer</button>
                  <button onClick={() => router.push("/customer")}>Customer</button>
                  <button onClick={() => router.push("/manufacturer")}>Manufacturer</button>
                </div>
              ): null
            }
    </main>
  );
};

export default Home;

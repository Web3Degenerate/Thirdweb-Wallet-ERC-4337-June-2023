// import { ConnectWallet } from "@thirdweb-dev/react";
// import Image from "next/image";

import { ConnectWallet, useAddress, useContract } from "@thirdweb-dev/react";

// import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import { Container } from "@chakra-ui/react";
import { NFT_ADDRESS } from "../constant/addresses";

// import Navbar from '../components/Navbar'

//Added early, built out at 17:05: https://youtu.be/-RNQ5GoghGY?si=VnB8vP_ggia48Xv2&t=1025
const Home: NextPage = () => {

  const { contract } = useContract(NFT_ADDRESS)

  return (
    <>
      {/* <Navbar /> */}
      <Container maxW={"1200px"}>
        <h1>Load Landing Page Here.</h1>
      </Container>
    </>
  );
};

export default Home;

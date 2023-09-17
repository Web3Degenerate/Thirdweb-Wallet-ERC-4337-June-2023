// import { ConnectWallet } from "@thirdweb-dev/react";
// import Image from "next/image";

import { useContract, useMetadata } from "@thirdweb-dev/react";

// import styles from "../styles/Home.module.css";
import { NextPage } from "next";

import { NFT_ADDRESS } from "../constant/addresses";

import { Box, Container, Flex, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";

import NFTCard from "../components/NFTCard";

// import Navbar from '../components/Navbar'

//Added early, built out at 17:05: https://youtu.be/-RNQ5GoghGY?si=VnB8vP_ggia48Xv2&t=1025
const Home: NextPage = () => {

  const { contract } = useContract(NFT_ADDRESS)

  const { data: metadata, isLoading: loadingMetadata } = useMetadata(contract);
  const collectionImage = metadata?.image;
  const collectionName = metadata?.name;

  return (
    <>
      {/* <Navbar /> */}
      <Container maxW={"1200px"}>
        
        {loadingMetadata ? (
          <Flex h={"90vh"} direction={"column"} justifyContent={"center"} alignItems={"center"}>
            <Spinner />
          </Flex>
        ) : (


        <Container maxW={"1200px"}>
            <Box
              backgroundImage={`url(${collectionImage})`}
              h={"75vh"}
              p={8}
              borderRadius={8}
            >
                <Heading>{collectionName}</Heading>

            </Box>

            <SimpleGrid columns={2} spacing={10} my={10}>
              <NFTCard tokenId={"0"} />
              <NFTCard tokenId={"1"} />
              <NFTCard tokenId={"2"} />
              <NFTCard tokenId={"3"} />
            </SimpleGrid>

        </Container>
        )}


      </Container>
    </>
  );
};

export default Home;

//Created at (23:08): https://youtu.be/-RNQ5GoghGY?si=N4Mlmx633nvdhFtu&t=1388
import { Box, Button, Card, Container, Flex, Heading, SimpleGrid, Text, Input, useToast } from "@chakra-ui/react";
import { MediaRenderer, Web3Button, useAddress, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import { NFT_ADDRESS } from "../../constant/addresses";
import React from "react";
import { useRouter } from "next/router";
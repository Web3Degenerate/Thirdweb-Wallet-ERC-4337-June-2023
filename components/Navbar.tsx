//Added (13:17): https://youtu.be/-RNQ5GoghGY?si=QrE6Jb9YPnqkhaEb&t=797
// Built out login by (17:06)
import { Avatar, Container, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { ConnectWallet, useAddress, useDisconnect } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Navbar() {
    const address = useAddress();
    const disconnect = useDisconnect();

    return (
        <Container maxW={"1200px"} py={5}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
                {/* <Text fontWeight={"bold"}>NFT Collection</Text> */}
                <h2 style={{fontWeight:"bold"}}>NFT Collection</h2>
                {!address ? (
                    <ConnectWallet 
                        className={styles.walletButton}
                        // btnTitle="Sign In"
                        theme="dark"
                    />
                ) : (
                    <Menu>
                        <MenuButton>
                            <Avatar size={"sm"} src={`https://avatars.dicebear.com/api/avataaars/${address}.svg`} />
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                                <Link href={`/profile/${address}`}>
                                    Profile
                                </Link>
                            </MenuItem>

                            <MenuItem onClick={disconnect}>Sign Out</MenuItem>
                                                       
                        </MenuList>
                    </Menu>
                )}
            </Flex>
      </Container>
    )
}
// src/pages/index.tsx
import type { NextPage } from 'next'
import Head from 'next/head'
import { VStack, Heading, Box, LinkOverlay, LinkBox} from "@chakra-ui/layout"
import {Text, Button, Flex} from '@chakra-ui/react'
import { useState, useEffect} from 'react'
import {ethers} from "ethers"
import HFT from "../components/HFT";
import img from "../pages/a.png"


declare let window:any

const Home: NextPage = () => {
  const [balance, setBalance] = useState<string | undefined>()
  const [currentAccount, setCurrentAccount] = useState<string | undefined>()
  const [chainId, setChainId] = useState<number | undefined>()
  const [chainname, setChainName] = useState<string | undefined>()


  useEffect(() => {
    //get ETH balance and network info only when having currentAccount 
    if(!currentAccount || !ethers.utils.isAddress(currentAccount)) return

    //client side code
    if(!window.ethereum) {
      console.log("please install MetaMask")
      return
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    provider.getBalance(currentAccount).then((result)=>{
      setBalance(ethers.utils.formatEther(result))
    }).catch((e)=>console.log(e))

    provider.getNetwork().then((result)=>{
      setChainId(result.chainId)
      setChainName(result.name)
    }).catch((e)=>console.log(e))

  },[currentAccount])

  //click connect
  const onClickConnect = () => {
    //client side code
    if(!window.ethereum) {
      console.log("please install MetaMask")
      return
    }
    //we can do it using ethers.js
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    provider.send("eth_requestAccounts", [])
    .then((accounts)=>{
      if(accounts.length>0) setCurrentAccount(accounts[0])
    }).catch((e)=>console.log(e))

  }

  //click disconnect
  const onClickDisconnect = () => {
    console.log("onClickDisConnect")
    setBalance(undefined)
    setCurrentAccount(undefined)
  }

  return (
    <>
    


      <Head color={'blue'}>
        <title>djt DAPP</title>
      </Head>
   

      <Flex justifyContent="center" >
    

        <Heading as="h3" my={4}>NFT Dapp </Heading>
      </Flex>

      <VStack color={'blue'}>
        <Box  my={4}>
        {currentAccount  
          ? <Button type="button" onClick={onClickDisconnect}>
                账户:{currentAccount}
            </Button>
          : <Button type="button"  onClick={onClickConnect}>
                 连接Metamask
              </Button>
        }
        </Box>
   

        {currentAccount  
          ?<Box mb={0} p={4}   borderRadius="lg">
              <Heading my={4}  textAlign='center'>
                账户信息
              </Heading>
              <Text textAlign='center'>
                当前用户的ETH余额 : {balance}
              </Text>
              <Text textAlign='center'>
                区块链信息: 区块链id {chainId} 名字 {chainname}
              </Text>
            </Box>

            :<></>
        }

        <Box  mb={0} p={4} >
          <Heading my={4} textAlign='center' color="red">
            铸造NFT
          </Heading>
          <Text >
            合约地址:  0xD362f709DEB9190DCE78669d13A71cE74E137599
          </Text>


          <HFT
              contractAddress='0xD362f709DEB9190DCE78669d13A71cE74E137599'
              currentAccount={currentAccount}
          />
        </Box>



      </VStack>
    </>
  )
}

export default Home

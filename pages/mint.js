import {
  HStack,
  Stack,
  Box,
  Button,
  useColorModeValue,
  Heading,
  Link,
  Text,
  Icon
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { connect } from '../redux/blockchain/blockchainActions'
import { fetchData } from '../redux/data/dataActions'
import { CheckIcon } from '@chakra-ui/icons'

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input

const Page = () => {
  const dispatch = useDispatch()
  const blockchain = useSelector(state => state.blockchain)
  const data = useSelector(state => state.data)
  const [claimingNft, setClaimingNft] = useState(false)
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`)
  const [mintAmount, setMintAmount] = useState(1)
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: '',
    SCAN_LINK: '',
    NETWORK: {
      NAME: '',
      SYMBOL: '',
      ID: 0
    },
    NFT_NAME: '',
    SYMBOL: '',
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: '',
    MARKETPLACE_LINK: '',
    SHOW_BACKGROUND: false
  })

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST
    let gasLimit = CONFIG.GAS_LIMIT
    let totalCostWei = String(cost * mintAmount)
    let totalGasLimit = String(gasLimit * mintAmount)
    console.log('Cost: ', totalCostWei)
    console.log('Gas limit: ', totalGasLimit)
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`)
    setClaimingNft(true)
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei
      })
      .once('error', err => {
        console.log(err)
        setFeedback('Sorry, something went wrong try again later.')
        setClaimingNft(false)
      })
      .then(receipt => {
        console.log(receipt)
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        )
        setClaimingNft(false)
        dispatch(fetchData(blockchain.account))
      })
  }

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1
    if (newMintAmount < 1) {
      newMintAmount = 1
    }
    setMintAmount(newMintAmount)
  }

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1
    if (newMintAmount > 10) {
      newMintAmount = 10
    }
    setMintAmount(newMintAmount)
  }

  const getData = () => {
    if (blockchain.account !== '' && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account))
    }
  }

  const getConfig = async () => {
    const configResponse = await fetch('/config/config.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
    const config = await configResponse.json()
    SET_CONFIG(config)
  }

  useEffect(() => {
    getConfig()
  })

  useEffect(() => {
    getData()
  }, [blockchain.account])

  return (
    <Layout>
      <Stack direction="column" align="center" justifyContent="center">
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={20}
          mb={6}
          align="center"
          justifyContent="center"
        >
          {/* <p>
            {' '}
            The minting station will be made available once a mint date has been
            anounced.{' '}
          </p> */}
          <Heading size="md" mb={6}>
            Whitelisted Addresses Only.
          </Heading>
          <Heading size="sm" mb={6}>
            Public Sale Jan 18th, 2022.
          </Heading>
          <Heading mb={2}>
            {data.totalSupply} / {CONFIG.MAX_SUPPLY}
          </Heading>
          <Link href={CONFIG.SCAN_LINK} target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={CheckIcon} />}
            >
              {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
            </Button>
          </Link>

          {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
            <>
              <Text
                style={{ textAlign: 'center', color: 'var(--accent-text)' }}
              >
                The sale has ended.
              </Text>
              <Text
                style={{ textAlign: 'center', color: 'var(--accent-text)' }}
                as="sub"
              >
                You can still find {CONFIG.NFT_NAME} on
              </Text>
              <Link target={'_blank'} href={CONFIG.MARKETPLACE_LINK}>
                {CONFIG.MARKETPLACE}
              </Link>
            </>
          ) : (
            <>
              <Text>
                1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{' '}
                {CONFIG.NETWORK.SYMBOL}.
              </Text>
              <Text as="sub">Excluding gas fees.</Text>
              {blockchain.account === '' ||
              blockchain.smartContract === null ? (
                <Stack ai={'center'} jc={'center'}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'var(--accent-text)'
                    }}
                  >
                    Connect to the {CONFIG.NETWORK.NAME} network
                  </Text>
                  <Button
                    onClick={e => {
                      e.preventDefault()
                      dispatch(connect())
                      getData()
                    }}
                  >
                    CONNECT
                  </Button>
                  {blockchain.errorMsg !== '' ? (
                    <>
                      <Text
                        style={{
                          textAlign: 'center',
                          color: 'var(--accent-text)'
                        }}
                      >
                        {blockchain.errorMsg}
                      </Text>
                    </>
                  ) : null}
                </Stack>
              ) : (
                <>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'var(--accent-text)'
                    }}
                  >
                  {feedback}
                  </Text>
                  <Box align="center" justifyContent="center">
                    <HStack spacing="24px" p={5} 
                    justifyContent="center"
                    alignItems="center"
                    >
                      <Button
                        style={{ lineHeight: 0.4 }}
                        disabled={claimingNft ? 1 : 0}
                        onClick={e => {
                          e.preventDefault()
                          decrementMintAmount()
                        }}
                      >
                      -
                      </Button>
                      <Text
                        style={{
                          textAlign: 'center',
                          color: 'var(--accent-text)'
                        }}
                      >
                        {mintAmount}
                      </Text>
                      <Button
                        disabled={claimingNft ? 1 : 0}
                        onClick={e => {
                          e.preventDefault()
                          incrementMintAmount()
                        }}
                      >
                        +
                      </Button>
                    </HStack>
                  </Box>
                  <Stack ai={'center'} jc={'center'} fd={'row'}>
                    <Button
                      disabled={claimingNft ? 1 : 0}
                      onClick={e => {
                        e.preventDefault()
                        claimNFTs()
                        getData()
                      }}
                    >
                      {claimingNft ? 'BUSY' : 'BUY'}
                    </Button>
                  </Stack>
                </>
              )}
            </>
          )}
        </Box>
      </Stack>
    </Layout>
  )
}

export default Page

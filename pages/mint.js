import {
  Stack,
  Box,
  useColorModeValue,
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import React from 'react'

const Page = () => {

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
          <p>
            {' '}
            PRE-SALE: March 25th At 5PM EST {' '}
          </p>
          {/* <Heading size="md" mb={6}>
            WhiteList Only
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
          )} */}
        </Box>
      </Stack>
    </Layout>
  )
}

export default Page

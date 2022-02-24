import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
// import WalletConnectProvider from '@walletconnect/web3-provider'
// import { providers } from 'ethers'
// import { useCallback, useEffect, useReducer } from 'react'
// import WalletLink from 'walletlink'
// import Web3Modal from 'web3modal'
// import { ellipseAddress, getChainData } from '../lib/utilities'

// const INFURA_ID = '7f7bbfa41ab34bf1899cedfb64d96190'

// const providerOptions = {
//   walletconnect: {
//     package: WalletConnectProvider, // required
//     options: {
//       infuraId: INFURA_ID // required
//     }
//   },
//   'custom-walletlink': {
//     display: {
//       logo: 'https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0',
//       name: 'Coinbase',
//       description: 'Connect to Coinbase Wallet (not Coinbase App)'
//     },
//     options: {
//       appName: 'Coinbase', // Your app name
//       networkUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
//       chainId: 1
//     },
//     package: WalletLink,
//     connector: async (_, options) => {
//       const { appName, networkUrl, chainId } = options
//       const walletLink = new WalletLink({
//         appName
//       })
//       const provider = walletLink.makeWeb3Provider(networkUrl, chainId)
//       await provider.enable()
//       return provider
//     }
//   }
// }

// let web3Modal
// if (typeof window !== 'undefined') {
//   web3Modal = new Web3Modal({
//     network: 'mainnet', // optional
//     cacheProvider: true,
//     providerOptions // required
//   })
// }

// type StateType = {
//   provider?: any
//   web3Provider?: any
//   address?: string
//   chainId?: number
// }

// type ActionType =
//   | {
//       type: 'SET_WEB3_PROVIDER'
//       provider?: StateType['provider']
//       web3Provider?: StateType['web3Provider']
//       address?: StateType['address']
//       chainId?: StateType['chainId']
//     }
//   | {
//       type: 'SET_ADDRESS'
//       address?: StateType['address']
//     }
//   | {
//       type: 'SET_CHAIN_ID'
//       chainId?: StateType['chainId']
//     }
//   | {
//       type: 'RESET_WEB3_PROVIDER'
//     }

// const initialState: StateType = {
//   provider: null,
//   web3Provider: null,
//   address: null,
//   chainId: null
// }

// function reducer(state: StateType, action: ActionType): StateType {
//   switch (action.type) {
//     case 'SET_WEB3_PROVIDER':
//       return {
//         ...state,
//         provider: action.provider,
//         web3Provider: action.web3Provider,
//         address: action.address,
//         chainId: action.chainId
//       }
//     case 'SET_ADDRESS':
//       return {
//         ...state,
//         address: action.address
//       }
//     case 'SET_CHAIN_ID':
//       return {
//         ...state,
//         chainId: action.chainId
//       }
//     case 'RESET_WEB3_PROVIDER':
//       return initialState
//     default:
//       throw new Error()
//   }
// }

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

//   const [state, dispatch] = useReducer(reducer, initialState)
//   const { provider, web3Provider, address, chainId } = state

//   const connect = useCallback(async function () {
//     // This is the initial `provider` that is returned when
//     // using web3Modal to connect. Can be MetaMask or WalletConnect.
//     const provider = await web3Modal.connect()

//     // We plug the initial `provider` into ethers.js and get back
//     // a Web3Provider. This will add on methods from ethers.js and
//     // event listeners such as `.on()` will be different.
//     const web3Provider = new providers.Web3Provider(provider)

//     const signer = web3Provider.getSigner()
//     const address = await signer.getAddress()

//     const network = await web3Provider.getNetwork()

//     dispatch({
//       type: 'SET_WEB3_PROVIDER',
//       provider,
//       web3Provider,
//       address,
//       chainId: network.chainId
//     })
//   }, [])

//   const disconnect = useCallback(
//     async function () {
//       await web3Modal.clearCachedProvider()
//       if (provider?.disconnect && typeof provider.disconnect === 'function') {
//         await provider.disconnect()
//       }
//       dispatch({
//         type: 'RESET_WEB3_PROVIDER'
//       })
//     },
//     [provider]
//   )

//   // Auto connect to the cached provider
//   useEffect(() => {
//     if (web3Modal.cachedProvider) {
//       connect()
//     }
//   }, [connect])

//   // A `provider` should come with EIP-1193 events. We'll listen for those events
//   // here so that when a user switches accounts or networks, we can update the
//   // local React state with that new information.
//   useEffect(() => {
//     if (provider?.on) {
//       const handleAccountsChanged = (accounts: string[]) => {
//         // eslint-disable-next-line no-console
//         console.log('accountsChanged', accounts)
//         dispatch({
//           type: 'SET_ADDRESS',
//           address: accounts[0]
//         })
//       }

//       // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
//       const handleChainChanged = (_hexChainId: string) => {
//         window.location.reload()
//       }

//       const handleDisconnect = (error: { code: number; message: string }) => {
//         // eslint-disable-next-line no-console
//         console.log('disconnect', error)
//         disconnect()
//       }

//       provider.on('accountsChanged', handleAccountsChanged)
//       provider.on('chainChanged', handleChainChanged)
//       provider.on('disconnect', handleDisconnect)

//       // Subscription Cleanup
//       return () => {
//         if (provider.removeListener) {
//           provider.removeListener('accountsChanged', handleAccountsChanged)
//           provider.removeListener('chainChanged', handleChainChanged)
//           provider.removeListener('disconnect', handleDisconnect)
//         }
//       }
//     }
//   }, [provider, disconnect])

//   const chainData = getChainData(chainId)

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.xl"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center">
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
           ml={170}
        >
          <LinkItem 
          _target="_blank"
          href="/mint" path={path}>
            Mint
          </LinkItem>
          <LinkItem 
          _target="_blank"
          href="/roadmaps" path={path}>
            Roadmap
          </LinkItem>

          <LinkItem 
          _target="_blank"
          href="/soxialgames" path={path}>
            The Soxial Games
          </LinkItem>
          <LinkItem 
          _target="_blank"
          href="/faqs" path={path}>
            FAQs
          </LinkItem>

          <LinkItem 
          _target="_blank"
          href="/team" path={path}>
            Team
          </LinkItem>

          <LinkItem
          _target="_blank"
          href="/whitelist" path={path}>
            Whitelist
          </LinkItem>

          {/* <Box
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              _hover={{
                background: 'white',
                color: 'teal.500'
              }}
              borderRadius="lg"
               p={1.5}
              // mb={6}
              align="center"
              justifyContent="center"
            >
              {chainData ? (
                <p> Etheruem </p>

              ) : (
                <Text
                  colorScheme="teal"
                  _hover={{
                    background: 'white',
                    color: 'teal.500'
                  }}
                >
                  Wrong Network
                </Text>
              )}
            </Box> */}

            {/* <Box
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              _hover={{
                background: 'white',
                color: 'teal.500'
              }}
              borderRadius="lg"
               p={1.5}
              // mb={6}
              align="center"
              justifyContent="center"
              // width="25%"
              // height="10%"
            >
              {web3Provider ? (
                <Text>{ellipseAddress(address)}</Text>
              ) : (
                <Button onClick={connect}>Connect</Button>
              )}
            </Box> */}
        </Stack>

        <Box flex={1} align="right">
          {/* <Stack direction={{ base: 'column', md: 'row' }} alignItems="center"> */}
            <ThemeToggleButton />  
          {/* </Stack> */}

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/mint" passHref>
                  <MenuItem as={Link}>Mint</MenuItem>
                </NextLink>
                <NextLink href="/roadmaps" passHref>
                  <MenuItem as={Link}>Roadmap</MenuItem>
                </NextLink>
                <NextLink href="/soxialgames" passHref>
                  <MenuItem as={Link}>The Soxial Games</MenuItem>
                </NextLink>
                <NextLink href="/team" passHref>
                  <MenuItem as={Link}>Team</MenuItem>
                </NextLink >
                <NextLink href="/faqs" passHref>
                <MenuItem as={Link}>
                  FAQs
                </MenuItem>
                </NextLink>
                <NextLink href="/whitelist" passHref>
                <MenuItem as={Link}>
                  Whitelist
                </MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar

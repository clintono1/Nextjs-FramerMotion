import supportedChains from './chains'
import { IChainData } from './types'


export function getChainData(chainId?: number): IChainData {
  if (!chainId) {
    return null
  }
  const chainData = supportedChains.filter(
    (chain: any) => chain.chain_id === chainId
  )[0]

  if (!chainData) {
     return
  }
  else{
  }

  const API_KEY = '7f7bbfa41ab34bf1899cedfb64d96190'

  if (
    chainData.rpc_url.includes('infura.io') &&
    chainData.rpc_url.includes('%API_KEY%') &&
    API_KEY
  ) {
    const rpcUrl = chainData.rpc_url.replace('%API_KEY%', API_KEY)

    return {
      ...chainData,
      rpc_url: rpcUrl,
    }
  }

  return chainData
}

export function ellipseAddress(address = '', width = 5): string {
  if (!address) {
    return ''
  }
  return `${address.slice(0, width)}...${address.slice(-width)}`
}

export function networkStatus(network): string {
  if(!network){
    return "Wrong Network"
  }

}
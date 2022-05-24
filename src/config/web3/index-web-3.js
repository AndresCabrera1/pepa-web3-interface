import { Web3 } from "web3/dist/web3.min"
import { InjectedConnector } from "web3-react/dist/connectors"

const connector = new InjectedConnector({supportedNetworks:[4]}) 

const getLibrary = (provider) => {
    return new Web3(provider)
}

export {InjectedConnector, getLibrary}
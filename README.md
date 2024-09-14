# SDSP: Blockchain-Based Secured Data Sharing Platform

Welcome to the SDSP repository! This project aims to facilitate the secure and transparent sharing of genomic data using blockchain technology. This README provides instructions for setting up the development environment, running the project, and understanding its components. Please refer to the following paper for the architecture of SDSP: [IEEE Document 10577693](https://ieeexplore.ieee.org/document/10577693).

## Table of Contents

1. [Project Overview](#project-overview)
2. [Setup Instructions](#setup-instructions)
   1. [Prerequisites](#prerequisites)
   2. [Ganache Network](#ganache-network)
   3. [Hyperledger Besu Network](#hyperledger-besu-network)
   4. [MetaMask](#metamask)
3. [JavaScript Code](#javascript-code)
   1. [Changes for Hyperledger Besu](#changes-for-hyperledger-besu)
4. [Integrate Web3.storage in Your Project](#integrate-web3storage-in-your-project)
5. [Smart Contracts](#smart-contracts)
6. [Usage](#usage)
7. [Contributing](#contributing)
8. [License](#license)

## Project Overview

SDSP is a patient-centric consent management system designed for sharing genomic data. The platform enables patients to control how their genomic data is shared and used within precision oncology initiatives. It allows patients to make informed decisions and modify their consent at any time through dynamic informed consent. SDSP also integrates a decentralized access control mechanism to establish a robust and patient-centric framework.

Key components include:

1. **Local Blockchain Network**: A local blockchain network setup using Ganache for initial testing.
2. **MetaMask Integration**: MetaMask for managing accounts and transactions.
3. **JavaScript Frontend**: JavaScript code for the frontend web pages.
4. **Smart Contracts**: Smart contracts for managing consent and access control on the blockchain.
5. **IPFS**: Use of IPFS (InterPlanetary File System) to store data.
6. **Hyperledger Besu Network**: An Ethereum-compatible blockchain platform for more extensive testing and deployment after initial tests with Ganache.

## Setup Instructions

### Prerequisites

- **Node.js**: Ensure Node.js is installed to run JavaScript webpages.
- **Ganache or Hyperledger Besu**: Choose between setting up a local blockchain using Ganache or deploying a more extensive network using Hyperledger Besu.
- **Remix IDE**: Online or desktop IDE for compiling, deploying, and testing smart contracts.
- **MetaMask**: Browser extension for managing blockchain accounts and transactions.

### Ganache Network

1. **Install Ganache**: Download and install Ganache from the [official website](https://www.trufflesuite.com/ganache).
2. **Start Ganache**: Open Ganache and create a new workspace. This will start a local Ethereum blockchain with pre-funded accounts.
3. **Note the Network Details**: Make a note of the RPC server URL (usually `http://127.0.0.1:7545`) and port number.
4. **Configure the Network Settings**:
   - Number of Accounts: `20`
   - Gas Limit: `999999999999999`
   - Gas Price: `200`
   - Hard Fork: `Muir Glacier`

### Hyperledger Besu Network

After initial testing on Ganache, you can deploy the project to a more extensive Hyperledger Besu network.

1. **Install Hyperledger Besu**: Follow the installation instructions on the [Hyperledger Besu documentation page](https://besu.hyperledger.org/en/stable/HowTo/Get-Started/Installation/).
2. **Start Besu**: Follow the setup instructions to start a new Besu network and configure it according to the SDSP project requirements.

### MetaMask

1. **Install MetaMask**: Add the MetaMask extension to your browser from the [MetaMask website](https://metamask.io/).
2. **Create or Import an Account**: Follow the instructions to create a new wallet or import an existing one.
3. **Connect to Ganache or Hyperledger Besu**:
   - Open MetaMask and click on the network dropdown at the top of the MetaMask window.
   - Select **Custom RPC** and enter the RPC server URL from either Ganache or Hyperledger Besu.
   - Save the network settings.

## JavaScript Code

The JavaScript code for the webpages is located in the `webpages/` directory. This code handles the user interface and interacts with the blockchain.

### Installation

1. **Install Dependencies**: Navigate to the `webpages/` directory and run:
    ```bash
    npm install
    ```

2. **Run the Web Server**: Start the local development server with:
    ```bash
    npm start
    ```

### Changes for Hyperledger Besu

To connect the frontend JavaScript code to Hyperledger Besu, make the following changes:

1. **Update the RPC URL**:  
   Modify the connection URL in your JavaScript files to point to the Besu RPC endpoint:
   ```javascript
   const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));

<div align=center> 
<img src="https://avatars.githubusercontent.com/u/88427645?s=200&v=4" style="border-radius:10px">
</div>

<center> Starter Kits 快速构建 DAPP </center>

<center> An Polygon Starter Kit Tutorial containing React, @web3-react, Infura. </center>
<div align=center> <a href="https://docs.matic.network/docs/develop/getting-started"> Developer Docs</a> - <a href="https://polygon-tutorial.soildstake.net"> Tutorial </a></div>    


基于区块链, IPFS, react的在线NFT铸造平台

一。 项目介绍 这个系统是基于基于区块链, IPFS, react的在线NFT铸造平台。利用IPFS的远程上传将图片保存在云端，输入的NFT的基本信息和上传的头像等数据通过ERC 721合约编译部署后生成的对象被保存在区块链中。 被铸造的NFT可以被查询在前端显示；仍可在IPFS远程云端的固定的URL查看。

项目使用技术：solidity+IPFS+React

二。 项目启动


## 0. 环境配置 

### Requirements 

#### 安装 ganache 
```javascripts
Download Package from https://www.trufflesuite.com/ganache
```

#### 快速开始

下载依赖 npm install
配置网络和hardhat 
(1)按照.env创建配置文件
<img src="https://github.com/weima12345-abc/NFT_React/blob/main/Project_IMG/1.png" width="600" alt="npm start">
(2)编写并部署合约：
```javascripts
npx hardhat run scripts/deploy_MyNFT.js --network localhost 
```
(3)运行本地私链后：
```javascripts
npx hardhat node 
```
记得要在这里替换掉自己的网络。 
<img src="https://github.com/weima12345-abc/NFT_React/blob/main/Project_IMG/2.png" width="600" alt="npm start">
(4) 部署合约，可以得到HFT.json文件，部署完成后可以看到abi和合约地址，与remix在线编译平台一样。
```javascripts
npx hardhat run scripts/deploy_MyNFT.js --network localhost
npx hardhat node 
```
 (5)在index.tsx中将合约地址替换成自己的合约地址 
 <img src="https://github.com/weima12345-abc/NFT_React/blob/main/Project_IMG3.png" width="600" alt="npm start">
 (6)替换私钥
 <img src="https://github.com/weima12345-abc/NFT_React/blob/main/Project_IMG/4.png" width="600" alt="npm start">
  (7)启动前端项目 Cd 进入rear文件夹，终端输入：
  ```javascripts
 npm run dev 
```
(npx 来自 npm 5.2+ 或更高版本, 查看 npm 旧版本的说明)

然后打开
  ```javascripts
http://localhost:3000/
```
查看你的应用。
#### 运行结果截图

<img src="https://github.com/weima12345-abc/NFT_React/blob/main/Project_IMG/5.png" width="600" alt="npm start">
<img src="https://github.com/weima12345-abc/NFT_React/blob/main/Project_IMG/6.png" width="600" alt="npm start">
<img src="https://github.com/weima12345-abc/NFT_React/blob/main/Project_IMG/7.png" width="600" alt="npm start">
<img src="https://github.com/weima12345-abc/NFT_React/blob/main/Project_IMG/8.png" width="600" alt="npm start">




#### 项目架构


```javascripts
{YOUR_PROJECT_NAME}
├── README.md
├── node_modules
├── package.json
|
└── src
	├── App.css
	├── App.js
	├── App.test.js
	├── abi
	│   ├── HFTABI.tsx
	│   
	├── components
	│   ├── HFTABI.tsx
	│   │   
	│   ├── header.tsx
	│   │   
	│   ├
	│   └── layou.tsx
	│      
	├── pages
	│   ├── api
	│   │    ├── hello.ts
	|   |
	│   │── _app.tsx  
	|   |  
	|   |       
	│   ├── documents.tsx
	│   │   
	│   |
	│   └── index.tsx
```

##### truffle-config.js  
```javascripts
const mnemonic = process.env.MNEMONIC;
const HDWalletProvider = require("@truffle/hdwallet-provider");


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,     
      network_id: "*" // Match any network id
    },
    polygon: {
      provider: new HDWalletProvider(mnemonic, process.env.POLYGON_RPC),
      network_id: 137,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    mumbai: {
      provider: new HDWalletProvider(mnemonic, process.env.POLYGON_MUMBAI_RPC),
      network_id: 8001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    }
```

其中
Dapp文件夹是Web应用前端，Rear文件夹是智能合约部署的后端

<!-- - `src` 客户端 DAPP 目录
- `src/contracts` 用来存放编写的`智能合约(smart contract)`，同时 truffle 的 contract 目录指向
- `src/abi` 用来存放编译后的 abi 文件
- `hooks/index.js` 初始化 `@web3-react` 中的 `Provider` 的请求钩子 -->
# NFT_React
基于区块链, IPFS, react的在线NFT铸造平台

一。 项目介绍
这个系统是基于基于区块链, IPFS, react的在线NFT铸造平台。利用IPFS的远程上传将图片保存在云端，输入的NFT的基本信息和上传的头像等数据通过ERC 721合约编译部署后生成的对象被保存在区块链中。
被铸造的NFT可以被查询在前端显示；仍可在IPFS远程云端的固定的URL查看。

项目使用技术：solidity+IPFS+React

二。 项目启动

1. 下载依赖 npm install
2. 配置网络和hardhat
(1)按照.env创建配置文件
(2)编写并部署合约：npx hardhat run scripts/deploy_MyNFT.js --network localhost
(3)运行本地私链后npx hardhat node，记得要在这里替换掉自己的网络。
(4)npx hardhat run scripts/deploy_MyNFT.js --network localhost 部署合约，可以得到HFT.json文件，部署完成后可以看到abi和合约地址，与remix在线编译平台一样。
(5)在index.tsx中将合约地址替换成自己的合约地址
(6)替换私钥
(7)启动前端项目
Cd 进入rear文件夹，终端输入npm run dev ,然后本地端口3000打开！

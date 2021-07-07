import glob from 'glob';
import { promises } from 'fs';

var eth$1 = {
	color: "#29292E",
	isCurated: true,
	name: "Ethereum"
};
var defaultOverrides = {
	eth: eth$1,
	"0xaa6e8127831c9de45ae56bb1b0d4d4da6e5665bd": {
	color: "#29292E",
	isCurated: true,
	name: "2x Leveraged ETH",
	symbol: "ETH2XFLI"
},
	"0xE41d2489571d322189246DaFA5ebDe1F4699F498": {
	color: "#29292E",
	isCurated: true,
	name: "0x"
},
	"0x111111111117dc0aa78b770fa6a738034120c302": {
	color: "#21324D",
	isCurated: true,
	name: "1inch"
},
	"0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9": {
	color: "#7285B2",
	isCurated: true,
	name: "Aave",
	symbol: "AAVE"
},
	"0xba3D9687Cf50fE253cd2e1cFeEdE1d6787344Ed5": {
	color: "#7285B2",
	name: "Aave v1 AAVE",
	shadowColor: "#7285B2",
	symbol: "aAAVE"
},
	"0xE1BA0FB44CCb0D11b80F92f4f8Ed94CA3fF51D00": {
	color: "#FF5000",
	name: "Aave v1 BAT",
	shadowColor: "#7285B2",
	symbol: "aBAT"
},
	"0x6Ee0f7BB50a54AB5253dA0667B0Dc2ee526C30a8": {
	color: "#F3BA2F",
	name: "Aave v1 BUSD",
	shadowColor: "#7285B2",
	symbol: "aBUSD"
},
	"0xfC1E690f61EFd961294b3e1Ce3313fBD8aa4f85d": {
	color: "#F0B340",
	name: "Aave v1 DAI",
	shadowColor: "#7285B2",
	symbol: "aDAI"
},
	"0x712DB54daA836B53Ef1EcBb9c6ba3b9Efb073F40": {
	color: "#25292E",
	name: "Aave v1 ENJ",
	shadowColor: "#7285B2",
	symbol: "aENJ"
},
	"0x3a3A65aAb0dd2A17E3F1947bA16138cd37d08c04": {
	color: "#25292E",
	name: "Aave v1 ETH",
	shadowColor: "#7285B2",
	symbol: "aETH"
},
	"0x9D91BE44C06d373a8a226E1f3b146956083803eB": {
	color: "#31CB9E",
	name: "Aave v1 KNC",
	shadowColor: "#7285B2",
	symbol: "aKNC"
},
	"0x7D2D3688Df45Ce7C552E19c27e007673da9204B8": {
	color: "#109FCA",
	name: "Aave v1 LEND",
	shadowColor: "#7285B2",
	symbol: "aLEND"
},
	"0xA64BD6C70Cb9051F6A9ba1F163Fdc07E0DfB5F84": {
	color: "#1A56F0",
	name: "Aave v1 LINK",
	shadowColor: "#7285B2",
	symbol: "aLINK"
},
	"0x6FCE4A401B6B80ACe52baAefE4421Bd188e76F6f": {
	color: "#FF2D55",
	name: "Aave v1 MANA",
	shadowColor: "#7285B2",
	symbol: "aMANA"
},
	"0x7deB5e830be29F91E298ba5FF1356BB7f8146998": {
	color: "#1AAB9B",
	name: "Aave v1 MKR",
	shadowColor: "#7285B2",
	symbol: "aMKR"
},
	"0x69948cC03f478B95283F7dbf1CE764d0fc7EC54C": {
	color: "#00224D",
	name: "Aave v1 REN",
	shadowColor: "#7285B2",
	symbol: "aREN"
},
	"0x71010A9D003445aC60C4e6A7017c1E89A477B438": {
	color: "#25292E",
	name: "Aave v1 REP",
	shadowColor: "#7285B2",
	symbol: "aREP"
},
	"0x328C4c80BC7aCa0834Db37e6600A6c49E12Da4DE": {
	color: "#25292E",
	name: "Aave v1 SNX",
	shadowColor: "#7285B2",
	symbol: "aSNX"
},
	"0x625aE63000f46200499120B906716420bd059240": {
	color: "#25292E",
	name: "Aave v1 sUSD",
	shadowColor: "#7285B2",
	symbol: "aSUSD"
},
	"0x4DA9b813057D04BAef4e5800E36083717b4a0341": {
	color: "#002868",
	name: "Aave v1 TUSD",
	shadowColor: "#7285B2",
	symbol: "aTUSD"
},
	"0xB124541127A0A657f056D9Dd06188c4F1b0e5aab": {
	color: "#FD017A",
	name: "Aave v1 UNI",
	shadowColor: "#7285B2",
	symbol: "aUNI"
},
	"0x9bA00D6856a4eDF4665BcA2C2309936572473B7E": {
	color: "#2775CA",
	name: "Aave v1 USDC",
	shadowColor: "#7285B2",
	symbol: "aUSDC"
},
	"0x71fc860F7D3A592A4a98740e39dB31d25db65ae8": {
	color: "#22A079",
	name: "Aave v1 USDT",
	shadowColor: "#7285B2",
	symbol: "aUSDT"
},
	"0xFC4B8ED459e00e5400be803A9BB3954234FD50e3": {
	color: "#FF9900",
	name: "Aave v1 WBTC",
	shadowColor: "#7285B2",
	symbol: "aWBTC"
},
	"0x12e51E77DAAA58aA0E9247db7510Ea4B46F9bEAd": {
	color: "#0072F6",
	name: "Aave v1 YFI",
	shadowColor: "#7285B2",
	symbol: "aYFI"
},
	"0x6Fb0855c404E09c47C3fBCA25f08d4E41f9F062f": {
	color: "#25292E",
	name: "Aave v1 ZRX",
	shadowColor: "#7285B2",
	symbol: "aZRX"
},
	"0xFFC97d72E13E01096502Cb8Eb52dEe56f74DAD7B": {
	color: "#7285B2",
	name: "Aave AAVE",
	shadowColor: "#7285B2",
	symbol: "aAAVE"
},
	"0x05Ec93c0365baAeAbF7AefFb0972ea7ECdD39CF1": {
	color: "#FF5000",
	name: "Aave BAT",
	shadowColor: "#7285B2",
	symbol: "aBAT"
},
	"0xA361718326c15715591c299427c62086F69923D9": {
	color: "#F3BA2F",
	name: "Aave BUSD",
	shadowColor: "#7285B2",
	symbol: "aBUSD"
},
	"0x028171bCA77440897B824Ca71D1c56caC55b68A3": {
	color: "#F0B340",
	name: "Aave DAI",
	shadowColor: "#7285B2",
	symbol: "aDAI"
},
	"0xaC6Df26a590F08dcC95D5a4705ae8abbc88509Ef": {
	color: "#25292E",
	name: "Aave ENJ",
	shadowColor: "#7285B2",
	symbol: "aENJ"
},
	"0x030bA81f1c18d280636F32af80b9AAd02Cf0854e": {
	color: "#25292E",
	name: "Aave WETH",
	shadowColor: "#7285B2",
	symbol: "aWETH"
},
	"0x39C6b3e42d6A679d7D776778Fe880BC9487C2EDA": {
	color: "#31CB9E",
	name: "Aave KNC",
	shadowColor: "#7285B2",
	symbol: "aKNC"
},
	"0xa06bC25B5805d5F8d82847D191Cb4Af5A3e873E0": {
	color: "#1A56F0",
	name: "Aave LINK",
	shadowColor: "#7285B2",
	symbol: "aLINK"
},
	"0xa685a61171bb30d4072B338c80Cb7b2c865c873E": {
	color: "#FF2D55",
	name: "Aave MANA",
	shadowColor: "#7285B2",
	symbol: "aMANA"
},
	"0xc713e5E149D5D0715DcD1c156a020976e7E56B88": {
	color: "#1AAB9B",
	name: "Aave MKR",
	shadowColor: "#7285B2",
	symbol: "aMKR"
},
	"0xCC12AbE4ff81c9378D670De1b57F8e0Dd228D77a": {
	color: "#00224D",
	name: "Aave REN",
	shadowColor: "#7285B2",
	symbol: "aREN"
},
	"0x35f6B052C598d933D69A4EEC4D04c73A191fE6c2": {
	color: "#25292E",
	name: "Aave SNX",
	shadowColor: "#7285B2",
	symbol: "aSNX"
},
	"0x6C5024Cd4F8A59110119C56f8933403A539555EB": {
	color: "#25292E",
	name: "Aave sUSD",
	shadowColor: "#7285B2",
	symbol: "aSUSD"
},
	"0x101cc05f4A51C0319f570d5E146a8C625198e636": {
	color: "#002868",
	name: "Aave TUSD",
	shadowColor: "#7285B2",
	symbol: "aTUSD"
},
	"0xB9D7CB55f463405CDfBe4E90a6D2Df01C2B92BF1": {
	color: "#FD017A",
	name: "Aave UNI",
	shadowColor: "#7285B2",
	symbol: "aUNI"
},
	"0xBcca60bB61934080951369a648Fb03DF4F96263C": {
	color: "#2775CA",
	name: "Aave USDC",
	shadowColor: "#7285B2",
	symbol: "aUSDC"
},
	"0x3Ed3B47Dd13EC9a98b44e6204A523E766B225811": {
	color: "#22A079",
	name: "Aave USDT",
	shadowColor: "#7285B2",
	symbol: "aUSDT"
},
	"0x9ff58f4fFB29fA2266Ab25e75e2A8b3503311656": {
	color: "#FF9900",
	name: "Aave WBTC",
	shadowColor: "#7285B2",
	symbol: "aWBTC"
},
	"0x5165d24277cD063F5ac44Efd447B27025e888f37": {
	color: "#0072F6",
	name: "Aave YFI",
	shadowColor: "#7285B2",
	symbol: "aYFI"
},
	"0xDf7FF54aAcAcbFf42dfe29DD6144A69b629f8C9e": {
	color: "#25292E",
	name: "Aave ZRX",
	shadowColor: "#7285B2",
	symbol: "aZRX"
},
	"0xff20817765cb7f73d4bde2e66e067e58d11095c2": {
	color: "#D9327C",
	isCurated: true,
	name: "Amp"
},
	"0xd46ba6d942050d489dbd938a2c909a5d5039a161": {
	color: "#25292E",
	isCurated: true,
	name: "Ampleforth"
},
	"0xa117000000f279d81a1d3cc75430faa017fa5a2e": {
	color: "#06BCE5",
	isCurated: true,
	name: "Aragon"
},
	"0x221657776846890989a759BA2973e427DfF5C9bB": {
	color: "#25292E",
	isCurated: true,
	name: "Augur"
},
	"0xba100000625a3754423978a60c9317c58a424e3d": {
	isCurated: true,
	name: "Balancer",
	symbol: "BAL"
},
	"0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C": {
	color: "#00224D",
	isCurated: true,
	name: "Bancor"
},
	"0x68a118ef45063051eac49c7e647ce5ace48a68a5": {
	color: "#00ADD5",
	isCurated: true,
	name: "Based Money",
	symbol: "$BASED"
},
	"0x0D8775F648430679A709E98d2b0Cb6250d2887EF": {
	color: "#FF5000",
	isCurated: true,
	name: "Basic Attention Token"
},
	"0x107c4504cd79C5d2696Ea0030a8dD4e92601B82e": {
	color: "#6067F1",
	isCurated: true,
	name: "Bloom"
},
	"0x514910771AF9Ca656af840dff83E8264EcF986CA": {
	color: "#1A56F0",
	isCurated: true,
	name: "Chainlink"
},
	"0x41e5560054824eA6B0732E656E3Ad64E20e94E45": {
	color: "#3AB03E",
	isCurated: true,
	name: "Civic"
},
	"0xc00e94cb662c3520282e6f5717214004a7f26888": {
	color: "#00D395",
	isCurated: true,
	name: "Compound",
	shadowColor: "#25292E"
},
	"0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e": {
	color: "#9669ED",
	isCurated: true,
	name: "Compound BAT",
	symbol: "cBAT"
},
	"0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643": {
	color: "#9669ED",
	isCurated: true,
	name: "Compound DAI",
	symbol: "cDAI"
},
	"0xF5DCe57282A584D2746FaF1593d3121Fcac444dC": {
	color: "#9669ED",
	name: "Compound SAI",
	symbol: "cSAI"
},
	"0x39aa39c021dfbae8fac545936693ac917d5e7563": {
	color: "#9669ED",
	isCurated: true,
	name: "Compound USDC",
	symbol: "cUSDC"
},
	"0xc11b1268c1a384e55c48c2391d8d480264a3a7f4": {
	color: "#9669ED",
	isCurated: true,
	name: "Compound WBTC",
	symbol: "cWBTC"
},
	"0xD533a949740bb3306d119CC777fa900bA034cd52": {
	isCurated: true,
	name: "Curve DAO Token",
	symbol: "CRV"
},
	"0xB4272071eCAdd69d933AdcD19cA99fe80664fc08": {
	color: "#CE0E2D",
	isCurated: true,
	name: "CryptoFranc"
},
	"0x6b175474e89094c44da98b954eedeac495271d0f": {
	color: "#F0B340",
	isCurated: true,
	name: "Dai"
},
	"0x543Ff227F64Aa17eA132Bf9886cAb5DB55DCAddf": {
	color: "#25292E",
	isCurated: true,
	name: "DAOstack"
},
	"0x0F5D2fB29fb7d3CFeE444a200298f468908cC942": {
	color: "#FF2D55",
	isCurated: true,
	name: "Decentraland"
},
	"0xe0b7927c4af23765cb51314a0e0521a9645f0e2a": {
	color: "#E0A83A",
	isCurated: true,
	name: "DigixDAO"
},
	"0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b": {
	color: "#8150E6",
	isCurated: true,
	name: "DefiPulse Index"
},
	"0x4f3AfEC4E5a3F2A6a1A411DEF7D7dFe50eE057bF": {
	color: "#E0A83A",
	isCurated: true,
	name: "Digix Gold"
},
	"0xC0F9bD5Fa5698B6505F643900FFA515Ea5dF54A9": {
	color: "#F7518B",
	isCurated: true,
	name: "Donut"
},
	"0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c": {
	color: "#7866D5",
	isCurated: true,
	name: "Enjin"
},
	"0x80fB784B7eD66730e8b1DBd9820aFD29931aab03": {
	color: "#109FCA",
	name: "EthLend",
	symbol: "LEND"
},
	"0x956f47f50a910163d8bf957cf5846d573e7f87ca": {
	color: "#22996E",
	isCurated: true,
	name: "Fei USD"
},
	"0x4946Fcea7C692606e8908002e55A582af44AC121": {
	color: "#D79C93",
	isCurated: true,
	name: "FOAM"
},
	"0x35bd01fc9d6d5d81ca9e055db88dc49aa2c699a8": {
	isCurated: true,
	isVerified: true,
	name: "Friends With Benefits Pro",
	symbol: "FWB"
},
	"0x7d91e637589ec3bb54d8213a9e92dc6e8d12da91": {
	isVerified: false,
	name: "Friends With Benefits (Old)",
	symbol: "FWB (Old)"
},
	"0x493c57c4763932315a328269e1adad09653b9081": {
	color: "#0F6AD7",
	name: "Fulcrum DAI",
	symbol: "iDAI"
},
	"0x14094949152eddbfcd073717200da82fed8dc960": {
	color: "#0F6AD7",
	name: "Fulcrum DAI",
	symbol: "iSAI"
},
	"0xf013406a0b1d544238083df0b93ad0d2cbe0f65f": {
	color: "#0F6AD7",
	name: "Fulcrum USDC",
	symbol: "iUSDC"
},
	"0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b": {
	color: "#E40057",
	isCurated: true,
	name: "FunFair"
},
	"0x6810e776880C02933D47DB1b9fc05908e5386b96": {
	color: "#00A6C4",
	isCurated: true,
	name: "Gnosis"
},
	"0xa74476443119A942dE498590Fe1f2454d7D4aC0d": {
	color: "#002D64",
	isCurated: true,
	name: "Golem"
},
	"0xc944e90c64b2c07662a292be6244bdf05cda44a7": {
	color: "#4068C3",
	isCurated: true,
	name: "The Graph"
},
	"0x12B19D3e2ccc14Da04FAe33e63652ce469b3F2FD": {
	color: "#53B7E8",
	isCurated: true,
	name: "Grid+"
},
	"0x2b591e99afe9f32eaa6214f7b7629768c40eeb39": {
	color: "#FF47A9",
	isCurated: true,
	name: "HEX",
	shadowColor: "#FF9355"
},
	"0x6c6EE5e31d828De241282B9606C8e98Ea48526E2": {
	color: "#8834FF",
	isCurated: true,
	name: "Holo",
	symbol: "HOT"
},
	"0x607F4C5BB672230e8672085532f7e901544a7375": {
	color: "#EBBC2F",
	isCurated: true,
	name: "iExec"
},
	"0x0954906da0bf32d5479e25f46056d22f08464cab": {
	color: "#75533A",
	isCurated: true,
	name: "Index"
},
	"0xfa5047c9c78b8877af97bdcb85db743fd7313d4a": {
	color: "#25292E",
	isCurated: true,
	name: "KeeperDAO"
},
	"0x93ED3FBe21207Ec2E8f2d3c3de6e058Cb73Bc04d": {
	color: "#838285",
	isCurated: true,
	name: "Kleros"
},
	"0xdd974D5C2e2928deA5F71b9825b8b646686BD200": {
	color: "#31CB9E",
	isCurated: true,
	name: "Kyber"
},
	"0x58b6A8A3302369DAEc383334672404Ee733aB239": {
	color: "#03E082",
	isCurated: true,
	name: "Livepeer"
},
	"0xA4e8C3Ec456107eA67d3075bF9e3DF3A75823DB0": {
	color: "#4BC0C8",
	isCurated: true,
	name: "Loom"
},
	"0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD": {
	color: "#005FFF",
	isCurated: true,
	name: "Loopring"
},
	"0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2": {
	color: "#1AAB9B",
	isCurated: true,
	name: "Maker"
},
	"0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0": {
	color: "#2891F9",
	isCurated: true,
	name: "Matic"
},
	"0xec67005c4E498Ec7f55E092bd1d35cbC47C91892": {
	color: "#00224D",
	isCurated: true,
	name: "Melon"
},
	"0xaAAf91D9b90dF800Df4F55c205fd6989c977E73a": {
	color: "#25292E",
	isCurated: true,
	name: "Monolith"
},
	"0xB62132e35a6c13ee1EE0f84dC5d40bad8d815206": {
	color: "#2891F9",
	isCurated: true,
	name: "Nexo"
},
	"0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671": {
	color: "#25292E",
	isCurated: true,
	name: "Numeraire"
},
	"0x45804880de22913dafe09f4980848ece6ecbaf78": {
	color: "#CBB10E",
	isCurated: true,
	name: "Paxos Gold"
},
	"0x8E870D67F660D95d5be530380D0eC0bd388289E1": {
	color: "#4EAD46",
	isCurated: true,
	name: "Paxos Standard"
},
	"0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5": {
	color: "#0FB200",
	isCurated: true,
	name: "Pickle Finance"
},
	"0xe3818504c1b32bf1557b16c238b2e01fd3149c17": {
	color: "#00BFFF",
	name: "Pillar"
},
	"0x6758B7d441a9739b98552B373703d8d3d14f9e62": {
	color: "#5332A0",
	isCurated: true,
	name: "POA",
	symbol: "POA20"
},
	"0x0cec1a9154ff802e7934fc916ed7ca50bde6844e": {
	color: "#6E3AF3",
	isCurated: true,
	name: "PoolTogether"
},
	"0x49d716dfe60b37379010a75329ae09428f17118d": {
	color: "#6E3AF3",
	name: "PoolTogether Dai"
},
	"0x03ab458634910aad20ef5f1c8ee96f1d6ac54919": {
	color: "#1FC9A8",
	isCurated: true,
	name: "Rai Reflex Index",
	shadowColor: "#559889"
},
	"0x255Aa6DF07540Cb5d3d297f0D0D4D84cb52bc8e6": {
	color: "#25292E",
	isCurated: true,
	name: "Raiden"
},
	"0xfca59cd816ab1ead66534d82bc21e7515ce441cf": {
	color: "#F876F2",
	isCurated: true,
	name: "Rarible"
},
	"0x408e41876cCCDC0F92210600ef50372656052a38": {
	color: "#00224D",
	isCurated: true,
	name: "Ren"
},
	"0xB4EFd85c19999D84251304bDA99E90B92300Bd93": {
	color: "#FF626D",
	isCurated: true,
	name: "Rocket Pool"
},
	"0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359": {
	color: "#F0B340",
	name: "Sai",
	symbol: "SAI"
},
	"0x06f65b8cfcb13a9fe37d836fe9708da38ecb29b2": {
	color: "#1CD100",
	isCurated: true,
	name: "Saint Fame"
},
	"0x4156D3342D5c385a87D264F90653733592000581": {
	color: "#03DBA9",
	isCurated: true,
	name: "SALT"
},
	"0x42d6622deCe394b54999Fbd73D108123806f6a18": {
	color: "#FF3B81",
	isCurated: true,
	name: "SpankChain"
},
	"0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84": {
	color: "#56A0DD",
	isCurated: true,
	name: "Staked Ether",
	shadowColor: "#FF884D",
	symbol: "stETH"
},
	"0x744d70FDBE2Ba4CF95131626614a1763DF805B9E": {
	color: "#4360DF",
	isCurated: true,
	name: "Status"
},
	"0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC": {
	color: "#2683FF",
	isCurated: true,
	name: "Storj"
},
	"0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f": {
	color: "#211580",
	isCurated: true,
	name: "Synthetix"
},
	"0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb": {
	color: "#53B267",
	isCurated: true,
	name: "Synthetix ETH"
},
	"0x57ab1ec28d129707052df4df418d58a2d46d5f51": {
	color: "#25292E",
	isCurated: true,
	name: "Synthetix USD"
},
	"0xdac17f958d2ee523a2206206994597c13d831ec7": {
	color: "#22A079",
	isCurated: true,
	name: "Tether"
},
	"0xc7283b66eb1eb5fb86327f08e1b5816b0720212b": {
	color: "#178DD0",
	isCurated: true,
	name: "Tribe"
},
	"0x0000000000085d4780b73119b644ae5ecd22b376": {
	color: "#002868",
	isCurated: true,
	name: "TrueUSD"
},
	"0x4c19596f5aaff459fa38b0f7ed92f11ae6543784": {
	name: "TrustToken",
	symbol: "TRU"
},
	"0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828": {
	color: "#FF4A4A",
	isCurated: true,
	name: "UMA"
},
	"0x1f9840a85d5af5bf1d1762f925bdaddc4201f984": {
	color: "#FD017A",
	isCurated: true,
	name: "Uniswap",
	shadowColor: "#FDB8DA"
},
	"0x23B608675a2B2fB1890d3ABBd85c5775c51691d5": {
	color: "#E15EE5",
	isCurated: true,
	name: "Unisocks"
},
	"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48": {
	color: "#2775CA",
	isCurated: true,
	name: "USD Coin"
},
	"0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599": {
	color: "#FF9900",
	isCurated: true,
	name: "Wrapped Bitcoin"
},
	"0x09fE5f0236F0Ea5D930197DCE254d77B04128075": {
	color: "#FF8FE5",
	isCurated: true,
	name: "Wrapped CryptoKitties"
},
	"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2": {
	color: "#25292E",
	name: "Wrapped Ether"
},
	"0x5dbcf33d8c2e976c6b560249878e6f1491bca25c": {
	color: "#0072F6",
	name: "Y Curve Vault",
	isCurated: true,
	symbol: "yUSD"
},
	"0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e": {
	color: "#0072F6",
	isCurated: true,
	name: "yearn.finance"
},
	"0x0aacfbec6a24756c20d41914f2caba817c0d8521": {
	color: "#B2364F",
	isCurated: true,
	name: "YAM",
	shadowColor: "#D09AAC",
	symbol: "YAM"
},
	"0x0e2298E3B3390e3b945a5456fBf59eCc3f55DA16": {
	color: "#B2364F",
	name: "YAMv1",
	shadowColor: "#D09AAC",
	symbol: "YAMv1"
},
	"0xaba8cac6866b83ae4eec97dd07ed254282f6ad8a": {
	color: "#B2364F",
	name: "YAMv2",
	shadowColor: "#D09AAC",
	symbol: "YAMv2"
},
	"0x69bbc3f8787d573f1bbdd0a5f40c7ba0aee9bcc9": {
	color: "#393939",
	name: "Yup",
	shadowColor: "#BFBEBE",
	symbol: "YUP"
}
};

const getOverrides = async () => {
    const overrides = {};
    const overrideFiles = glob.sync('tokens/**/*.json');
    for (const overrideFile of overrideFiles) {
        const rawOverride = JSON.parse(await promises.readFile(overrideFile, 'utf-8'));
        /**
         * Each override is indexed by its address, i.e.:
         *
         * { '0x123...': { color: ... }, ... }
         */
        const { address, ...overrideData } = rawOverride;
        overrides[address] = overrideData;
    }
    return {
        ...defaultOverrides,
        ...overrides,
    };
};

const write = async () => {
    const overrides = await getOverrides();
    const serialized = JSON.stringify(overrides, null, 2);
    /**
     * Copy to src/output for exporting.
     */
    await promises.writeFile('src/data/rainbow-overrides.json', serialized);
};

var eth = {
	isCurated: true,
	isVerified: true,
	name: "[TEST-100] Ethereum",
	symbol: "ETH"
};
var rainbowOverrides = {
	eth: eth,
	"0xaa6e8127831c9de45ae56bb1b0d4d4da6e5665bd": {
	color: "#29292E",
	isCurated: true,
	name: "2x Leveraged ETH",
	symbol: "ETH2XFLI"
},
	"0xE41d2489571d322189246DaFA5ebDe1F4699F498": {
	color: "#29292E",
	isCurated: true,
	name: "0x"
},
	"0x111111111117dc0aa78b770fa6a738034120c302": {
	color: "#21324D",
	isCurated: true,
	name: "1inch"
},
	"0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9": {
	color: "#7285B2",
	isCurated: true,
	name: "[TEST] Aave",
	symbol: "AAVE"
},
	"0xba3D9687Cf50fE253cd2e1cFeEdE1d6787344Ed5": {
	color: "#7285B2",
	name: "Aave v1 AAVE",
	shadowColor: "#7285B2",
	symbol: "aAAVE"
},
	"0xE1BA0FB44CCb0D11b80F92f4f8Ed94CA3fF51D00": {
	color: "#FF5000",
	name: "Aave v1 BAT",
	shadowColor: "#7285B2",
	symbol: "aBAT"
},
	"0x6Ee0f7BB50a54AB5253dA0667B0Dc2ee526C30a8": {
	color: "#F3BA2F",
	name: "Aave v1 BUSD",
	shadowColor: "#7285B2",
	symbol: "aBUSD"
},
	"0xfC1E690f61EFd961294b3e1Ce3313fBD8aa4f85d": {
	color: "#F0B340",
	name: "Aave v1 DAI",
	shadowColor: "#7285B2",
	symbol: "aDAI"
},
	"0x712DB54daA836B53Ef1EcBb9c6ba3b9Efb073F40": {
	color: "#25292E",
	name: "Aave v1 ENJ",
	shadowColor: "#7285B2",
	symbol: "aENJ"
},
	"0x3a3A65aAb0dd2A17E3F1947bA16138cd37d08c04": {
	color: "#25292E",
	name: "Aave v1 ETH",
	shadowColor: "#7285B2",
	symbol: "aETH"
},
	"0x9D91BE44C06d373a8a226E1f3b146956083803eB": {
	color: "#31CB9E",
	name: "Aave v1 KNC",
	shadowColor: "#7285B2",
	symbol: "aKNC"
},
	"0x7D2D3688Df45Ce7C552E19c27e007673da9204B8": {
	color: "#109FCA",
	name: "Aave v1 LEND",
	shadowColor: "#7285B2",
	symbol: "aLEND"
},
	"0xA64BD6C70Cb9051F6A9ba1F163Fdc07E0DfB5F84": {
	color: "#1A56F0",
	name: "Aave v1 LINK",
	shadowColor: "#7285B2",
	symbol: "aLINK"
},
	"0x6FCE4A401B6B80ACe52baAefE4421Bd188e76F6f": {
	color: "#FF2D55",
	name: "Aave v1 MANA",
	shadowColor: "#7285B2",
	symbol: "aMANA"
},
	"0x7deB5e830be29F91E298ba5FF1356BB7f8146998": {
	color: "#1AAB9B",
	name: "Aave v1 MKR",
	shadowColor: "#7285B2",
	symbol: "aMKR"
},
	"0x69948cC03f478B95283F7dbf1CE764d0fc7EC54C": {
	color: "#00224D",
	name: "Aave v1 REN",
	shadowColor: "#7285B2",
	symbol: "aREN"
},
	"0x71010A9D003445aC60C4e6A7017c1E89A477B438": {
	color: "#25292E",
	name: "Aave v1 REP",
	shadowColor: "#7285B2",
	symbol: "aREP"
},
	"0x328C4c80BC7aCa0834Db37e6600A6c49E12Da4DE": {
	color: "#25292E",
	name: "Aave v1 SNX",
	shadowColor: "#7285B2",
	symbol: "aSNX"
},
	"0x625aE63000f46200499120B906716420bd059240": {
	color: "#25292E",
	name: "Aave v1 sUSD",
	shadowColor: "#7285B2",
	symbol: "aSUSD"
},
	"0x4DA9b813057D04BAef4e5800E36083717b4a0341": {
	color: "#002868",
	name: "Aave v1 TUSD",
	shadowColor: "#7285B2",
	symbol: "aTUSD"
},
	"0xB124541127A0A657f056D9Dd06188c4F1b0e5aab": {
	color: "#FD017A",
	name: "Aave v1 UNI",
	shadowColor: "#7285B2",
	symbol: "aUNI"
},
	"0x9bA00D6856a4eDF4665BcA2C2309936572473B7E": {
	color: "#2775CA",
	name: "Aave v1 USDC",
	shadowColor: "#7285B2",
	symbol: "aUSDC"
},
	"0x71fc860F7D3A592A4a98740e39dB31d25db65ae8": {
	color: "#22A079",
	name: "Aave v1 USDT",
	shadowColor: "#7285B2",
	symbol: "aUSDT"
},
	"0xFC4B8ED459e00e5400be803A9BB3954234FD50e3": {
	color: "#FF9900",
	name: "Aave v1 WBTC",
	shadowColor: "#7285B2",
	symbol: "aWBTC"
},
	"0x12e51E77DAAA58aA0E9247db7510Ea4B46F9bEAd": {
	color: "#0072F6",
	name: "Aave v1 YFI",
	shadowColor: "#7285B2",
	symbol: "aYFI"
},
	"0x6Fb0855c404E09c47C3fBCA25f08d4E41f9F062f": {
	color: "#25292E",
	name: "Aave v1 ZRX",
	shadowColor: "#7285B2",
	symbol: "aZRX"
},
	"0xFFC97d72E13E01096502Cb8Eb52dEe56f74DAD7B": {
	color: "#7285B2",
	name: "Aave AAVE",
	shadowColor: "#7285B2",
	symbol: "aAAVE"
},
	"0x05Ec93c0365baAeAbF7AefFb0972ea7ECdD39CF1": {
	color: "#FF5000",
	name: "Aave BAT",
	shadowColor: "#7285B2",
	symbol: "aBAT"
},
	"0xA361718326c15715591c299427c62086F69923D9": {
	color: "#F3BA2F",
	name: "Aave BUSD",
	shadowColor: "#7285B2",
	symbol: "aBUSD"
},
	"0x028171bCA77440897B824Ca71D1c56caC55b68A3": {
	color: "#F0B340",
	name: "Aave DAI",
	shadowColor: "#7285B2",
	symbol: "aDAI"
},
	"0xaC6Df26a590F08dcC95D5a4705ae8abbc88509Ef": {
	color: "#25292E",
	name: "Aave ENJ",
	shadowColor: "#7285B2",
	symbol: "aENJ"
},
	"0x030bA81f1c18d280636F32af80b9AAd02Cf0854e": {
	color: "#25292E",
	name: "Aave WETH",
	shadowColor: "#7285B2",
	symbol: "aWETH"
},
	"0x39C6b3e42d6A679d7D776778Fe880BC9487C2EDA": {
	color: "#31CB9E",
	name: "Aave KNC",
	shadowColor: "#7285B2",
	symbol: "aKNC"
},
	"0xa06bC25B5805d5F8d82847D191Cb4Af5A3e873E0": {
	color: "#1A56F0",
	name: "Aave LINK",
	shadowColor: "#7285B2",
	symbol: "aLINK"
},
	"0xa685a61171bb30d4072B338c80Cb7b2c865c873E": {
	color: "#FF2D55",
	name: "Aave MANA",
	shadowColor: "#7285B2",
	symbol: "aMANA"
},
	"0xc713e5E149D5D0715DcD1c156a020976e7E56B88": {
	color: "#1AAB9B",
	name: "Aave MKR",
	shadowColor: "#7285B2",
	symbol: "aMKR"
},
	"0xCC12AbE4ff81c9378D670De1b57F8e0Dd228D77a": {
	color: "#00224D",
	name: "Aave REN",
	shadowColor: "#7285B2",
	symbol: "aREN"
},
	"0x35f6B052C598d933D69A4EEC4D04c73A191fE6c2": {
	color: "#25292E",
	name: "Aave SNX",
	shadowColor: "#7285B2",
	symbol: "aSNX"
},
	"0x6C5024Cd4F8A59110119C56f8933403A539555EB": {
	color: "#25292E",
	name: "Aave sUSD",
	shadowColor: "#7285B2",
	symbol: "aSUSD"
},
	"0x101cc05f4A51C0319f570d5E146a8C625198e636": {
	color: "#002868",
	name: "Aave TUSD",
	shadowColor: "#7285B2",
	symbol: "aTUSD"
},
	"0xB9D7CB55f463405CDfBe4E90a6D2Df01C2B92BF1": {
	color: "#FD017A",
	name: "Aave UNI",
	shadowColor: "#7285B2",
	symbol: "aUNI"
},
	"0xBcca60bB61934080951369a648Fb03DF4F96263C": {
	color: "#2775CA",
	name: "Aave USDC",
	shadowColor: "#7285B2",
	symbol: "aUSDC"
},
	"0x3Ed3B47Dd13EC9a98b44e6204A523E766B225811": {
	color: "#22A079",
	name: "Aave USDT",
	shadowColor: "#7285B2",
	symbol: "aUSDT"
},
	"0x9ff58f4fFB29fA2266Ab25e75e2A8b3503311656": {
	color: "#FF9900",
	name: "Aave WBTC",
	shadowColor: "#7285B2",
	symbol: "aWBTC"
},
	"0x5165d24277cD063F5ac44Efd447B27025e888f37": {
	color: "#0072F6",
	name: "Aave YFI",
	shadowColor: "#7285B2",
	symbol: "aYFI"
},
	"0xDf7FF54aAcAcbFf42dfe29DD6144A69b629f8C9e": {
	color: "#25292E",
	name: "Aave ZRX",
	shadowColor: "#7285B2",
	symbol: "aZRX"
},
	"0xff20817765cb7f73d4bde2e66e067e58d11095c2": {
	color: "#D9327C",
	isCurated: true,
	name: "Amp"
},
	"0xd46ba6d942050d489dbd938a2c909a5d5039a161": {
	color: "#25292E",
	isCurated: true,
	name: "Ampleforth"
},
	"0xa117000000f279d81a1d3cc75430faa017fa5a2e": {
	color: "#06BCE5",
	isCurated: true,
	name: "Aragon"
},
	"0x221657776846890989a759BA2973e427DfF5C9bB": {
	color: "#25292E",
	isCurated: true,
	name: "Augur"
},
	"0xba100000625a3754423978a60c9317c58a424e3d": {
	isCurated: true,
	name: "Balancer",
	symbol: "BAL"
},
	"0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C": {
	color: "#00224D",
	isCurated: true,
	name: "Bancor"
},
	"0x68a118ef45063051eac49c7e647ce5ace48a68a5": {
	color: "#00ADD5",
	isCurated: true,
	name: "Based Money",
	symbol: "$BASED"
},
	"0x0D8775F648430679A709E98d2b0Cb6250d2887EF": {
	color: "#FF5000",
	isCurated: true,
	name: "Basic Attention Token"
},
	"0x107c4504cd79C5d2696Ea0030a8dD4e92601B82e": {
	color: "#6067F1",
	isCurated: true,
	name: "Bloom"
},
	"0x514910771AF9Ca656af840dff83E8264EcF986CA": {
	color: "#1A56F0",
	isCurated: true,
	name: "Chainlink"
},
	"0x41e5560054824eA6B0732E656E3Ad64E20e94E45": {
	color: "#3AB03E",
	isCurated: true,
	name: "Civic"
},
	"0xc00e94cb662c3520282e6f5717214004a7f26888": {
	color: "#00D395",
	isCurated: true,
	name: "Compound",
	shadowColor: "#25292E"
},
	"0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e": {
	color: "#9669ED",
	isCurated: true,
	name: "Compound BAT",
	symbol: "cBAT"
},
	"0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643": {
	color: "#9669ED",
	isCurated: true,
	name: "Compound DAI",
	symbol: "cDAI"
},
	"0xF5DCe57282A584D2746FaF1593d3121Fcac444dC": {
	color: "#9669ED",
	name: "Compound SAI",
	symbol: "cSAI"
},
	"0x39aa39c021dfbae8fac545936693ac917d5e7563": {
	color: "#9669ED",
	isCurated: true,
	name: "Compound USDC",
	symbol: "cUSDC"
},
	"0xc11b1268c1a384e55c48c2391d8d480264a3a7f4": {
	color: "#9669ED",
	isCurated: true,
	name: "Compound WBTC",
	symbol: "cWBTC"
},
	"0xD533a949740bb3306d119CC777fa900bA034cd52": {
	isCurated: true,
	name: "Curve DAO Token",
	symbol: "CRV"
},
	"0xB4272071eCAdd69d933AdcD19cA99fe80664fc08": {
	color: "#CE0E2D",
	isCurated: true,
	name: "CryptoFranc"
},
	"0x6b175474e89094c44da98b954eedeac495271d0f": {
	color: "#042069",
	isCurated: true,
	name: "[TEST-12345] Dai"
},
	"0x543Ff227F64Aa17eA132Bf9886cAb5DB55DCAddf": {
	color: "#25292E",
	isCurated: true,
	name: "DAOstack"
},
	"0x0F5D2fB29fb7d3CFeE444a200298f468908cC942": {
	color: "#FF2D55",
	isCurated: true,
	name: "Decentraland"
},
	"0xe0b7927c4af23765cb51314a0e0521a9645f0e2a": {
	color: "#E0A83A",
	isCurated: true,
	name: "DigixDAO"
},
	"0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b": {
	color: "#8150E6",
	isCurated: true,
	name: "DefiPulse Index"
},
	"0x4f3AfEC4E5a3F2A6a1A411DEF7D7dFe50eE057bF": {
	color: "#E0A83A",
	isCurated: true,
	name: "Digix Gold"
},
	"0xC0F9bD5Fa5698B6505F643900FFA515Ea5dF54A9": {
	color: "#F7518B",
	isCurated: true,
	name: "Donut"
},
	"0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c": {
	color: "#7866D5",
	isCurated: true,
	name: "Enjin"
},
	"0x80fB784B7eD66730e8b1DBd9820aFD29931aab03": {
	color: "#109FCA",
	name: "EthLend",
	symbol: "LEND"
},
	"0x956f47f50a910163d8bf957cf5846d573e7f87ca": {
	color: "#22996E",
	isCurated: true,
	name: "Fei USD"
},
	"0x4946Fcea7C692606e8908002e55A582af44AC121": {
	color: "#D79C93",
	isCurated: true,
	name: "FOAM"
},
	"0x35bd01fc9d6d5d81ca9e055db88dc49aa2c699a8": {
	isCurated: true,
	isVerified: true,
	name: "Friends With Benefits Pro",
	symbol: "FWB"
},
	"0x7d91e637589ec3bb54d8213a9e92dc6e8d12da91": {
	isVerified: false,
	name: "Friends With Benefits (Old)",
	symbol: "FWB (Old)"
},
	"0x493c57c4763932315a328269e1adad09653b9081": {
	color: "#0F6AD7",
	name: "Fulcrum DAI",
	symbol: "iDAI"
},
	"0x14094949152eddbfcd073717200da82fed8dc960": {
	color: "#0F6AD7",
	name: "Fulcrum DAI",
	symbol: "iSAI"
},
	"0xf013406a0b1d544238083df0b93ad0d2cbe0f65f": {
	color: "#0F6AD7",
	name: "Fulcrum USDC",
	symbol: "iUSDC"
},
	"0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b": {
	color: "#E40057",
	isCurated: true,
	name: "FunFair"
},
	"0x6810e776880C02933D47DB1b9fc05908e5386b96": {
	color: "#00A6C4",
	isCurated: true,
	name: "Gnosis"
},
	"0xa74476443119A942dE498590Fe1f2454d7D4aC0d": {
	color: "#002D64",
	isCurated: true,
	name: "Golem"
},
	"0xc944e90c64b2c07662a292be6244bdf05cda44a7": {
	color: "#4068C3",
	isCurated: true,
	name: "The Graph"
},
	"0x12B19D3e2ccc14Da04FAe33e63652ce469b3F2FD": {
	color: "#53B7E8",
	isCurated: true,
	name: "Grid+"
},
	"0x2b591e99afe9f32eaa6214f7b7629768c40eeb39": {
	color: "#FF47A9",
	isCurated: true,
	name: "HEX",
	shadowColor: "#FF9355"
},
	"0x6c6EE5e31d828De241282B9606C8e98Ea48526E2": {
	color: "#8834FF",
	isCurated: true,
	name: "Holo",
	symbol: "HOT"
},
	"0x607F4C5BB672230e8672085532f7e901544a7375": {
	color: "#EBBC2F",
	isCurated: true,
	name: "iExec"
},
	"0x0954906da0bf32d5479e25f46056d22f08464cab": {
	color: "#75533A",
	isCurated: true,
	name: "Index"
},
	"0xfa5047c9c78b8877af97bdcb85db743fd7313d4a": {
	color: "#25292E",
	isCurated: true,
	name: "KeeperDAO"
},
	"0x93ED3FBe21207Ec2E8f2d3c3de6e058Cb73Bc04d": {
	color: "#838285",
	isCurated: true,
	name: "Kleros"
},
	"0xdd974D5C2e2928deA5F71b9825b8b646686BD200": {
	color: "#31CB9E",
	isCurated: true,
	name: "Kyber"
},
	"0x58b6A8A3302369DAEc383334672404Ee733aB239": {
	color: "#03E082",
	isCurated: true,
	name: "Livepeer"
},
	"0xA4e8C3Ec456107eA67d3075bF9e3DF3A75823DB0": {
	color: "#4BC0C8",
	isCurated: true,
	name: "Loom"
},
	"0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD": {
	color: "#005FFF",
	isCurated: true,
	name: "Loopring"
},
	"0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2": {
	color: "#1AAB9B",
	isCurated: true,
	name: "Maker"
},
	"0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0": {
	color: "#2891F9",
	isCurated: true,
	name: "Matic"
},
	"0xec67005c4E498Ec7f55E092bd1d35cbC47C91892": {
	color: "#00224D",
	isCurated: true,
	name: "Melon"
},
	"0xaAAf91D9b90dF800Df4F55c205fd6989c977E73a": {
	color: "#25292E",
	isCurated: true,
	name: "Monolith"
},
	"0xB62132e35a6c13ee1EE0f84dC5d40bad8d815206": {
	color: "#2891F9",
	isCurated: true,
	name: "Nexo"
},
	"0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671": {
	color: "#25292E",
	isCurated: true,
	name: "Numeraire"
},
	"0x45804880de22913dafe09f4980848ece6ecbaf78": {
	color: "#CBB10E",
	isCurated: true,
	name: "Paxos Gold"
},
	"0x8E870D67F660D95d5be530380D0eC0bd388289E1": {
	color: "#4EAD46",
	isCurated: true,
	name: "Paxos Standard"
},
	"0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5": {
	color: "#0FB200",
	isCurated: true,
	name: "Pickle Finance"
},
	"0xe3818504c1b32bf1557b16c238b2e01fd3149c17": {
	color: "#00BFFF",
	name: "Pillar"
},
	"0x6758B7d441a9739b98552B373703d8d3d14f9e62": {
	color: "#5332A0",
	isCurated: true,
	name: "POA",
	symbol: "POA20"
},
	"0x0cec1a9154ff802e7934fc916ed7ca50bde6844e": {
	color: "#6E3AF3",
	isCurated: true,
	name: "PoolTogether"
},
	"0x49d716dfe60b37379010a75329ae09428f17118d": {
	color: "#6E3AF3",
	name: "PoolTogether Dai"
},
	"0x03ab458634910aad20ef5f1c8ee96f1d6ac54919": {
	color: "#1FC9A8",
	isCurated: true,
	name: "Rai Reflex Index",
	shadowColor: "#559889"
},
	"0x255Aa6DF07540Cb5d3d297f0D0D4D84cb52bc8e6": {
	color: "#25292E",
	isCurated: true,
	name: "Raiden"
},
	"0xfca59cd816ab1ead66534d82bc21e7515ce441cf": {
	color: "#F876F2",
	isCurated: true,
	name: "Rarible"
},
	"0x408e41876cCCDC0F92210600ef50372656052a38": {
	color: "#00224D",
	isCurated: true,
	name: "Ren"
},
	"0xB4EFd85c19999D84251304bDA99E90B92300Bd93": {
	color: "#FF626D",
	isCurated: true,
	name: "Rocket Pool"
},
	"0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359": {
	color: "#F0B340",
	name: "Sai",
	symbol: "SAI"
},
	"0x06f65b8cfcb13a9fe37d836fe9708da38ecb29b2": {
	color: "#1CD100",
	isCurated: true,
	name: "Saint Fame"
},
	"0x4156D3342D5c385a87D264F90653733592000581": {
	color: "#03DBA9",
	isCurated: true,
	name: "SALT"
},
	"0x42d6622deCe394b54999Fbd73D108123806f6a18": {
	color: "#FF3B81",
	isCurated: true,
	name: "SpankChain"
},
	"0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84": {
	color: "#56A0DD",
	isCurated: true,
	name: "Staked Ether",
	shadowColor: "#FF884D",
	symbol: "stETH"
},
	"0x744d70FDBE2Ba4CF95131626614a1763DF805B9E": {
	color: "#4360DF",
	isCurated: true,
	name: "Status"
},
	"0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC": {
	color: "#2683FF",
	isCurated: true,
	name: "Storj"
},
	"0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f": {
	color: "#211580",
	isCurated: true,
	name: "Synthetix"
},
	"0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb": {
	color: "#53B267",
	isCurated: true,
	name: "Synthetix ETH"
},
	"0x57ab1ec28d129707052df4df418d58a2d46d5f51": {
	color: "#25292E",
	isCurated: true,
	name: "Synthetix USD"
},
	"0xdac17f958d2ee523a2206206994597c13d831ec7": {
	color: "#22A079",
	isCurated: true,
	name: "Tether"
},
	"0xc7283b66eb1eb5fb86327f08e1b5816b0720212b": {
	color: "#178DD0",
	isCurated: true,
	name: "Tribe"
},
	"0x0000000000085d4780b73119b644ae5ecd22b376": {
	color: "#002868",
	isCurated: true,
	name: "TrueUSD"
},
	"0x4c19596f5aaff459fa38b0f7ed92f11ae6543784": {
	name: "TrustToken",
	symbol: "TRU"
},
	"0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828": {
	color: "#FF4A4A",
	isCurated: true,
	name: "UMA"
},
	"0x1f9840a85d5af5bf1d1762f925bdaddc4201f984": {
	color: "#FD017A",
	isCurated: true,
	name: "Uniswap",
	shadowColor: "#FDB8DA"
},
	"0x23B608675a2B2fB1890d3ABBd85c5775c51691d5": {
	color: "#E15EE5",
	isCurated: true,
	name: "Unisocks"
},
	"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48": {
	color: "#2775CA",
	isCurated: true,
	name: "USD Coin"
},
	"0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599": {
	color: "#FF9900",
	isCurated: true,
	name: "Wrapped Bitcoin"
},
	"0x09fE5f0236F0Ea5D930197DCE254d77B04128075": {
	color: "#FF8FE5",
	isCurated: true,
	name: "Wrapped CryptoKitties"
},
	"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2": {
	color: "#25292E",
	name: "Wrapped Ether"
},
	"0x5dbcf33d8c2e976c6b560249878e6f1491bca25c": {
	color: "#0072F6",
	name: "Y Curve Vault",
	isCurated: true,
	symbol: "yUSD"
},
	"0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e": {
	color: "#0072F6",
	isCurated: true,
	name: "yearn.finance"
},
	"0x0aacfbec6a24756c20d41914f2caba817c0d8521": {
	color: "#B2364F",
	isCurated: true,
	name: "YAM",
	shadowColor: "#D09AAC",
	symbol: "YAM"
},
	"0x0e2298E3B3390e3b945a5456fBf59eCc3f55DA16": {
	color: "#B2364F",
	name: "YAMv1",
	shadowColor: "#D09AAC",
	symbol: "YAMv1"
},
	"0xaba8cac6866b83ae4eec97dd07ed254282f6ad8a": {
	color: "#B2364F",
	name: "YAMv2",
	shadowColor: "#D09AAC",
	symbol: "YAMv2"
},
	"0x69bbc3f8787d573f1bbdd0a5f40c7ba0aee9bcc9": {
	color: "#393939",
	name: "Yup",
	shadowColor: "#BFBEBE",
	symbol: "YUP"
}
};

export { rainbowOverrides as OFFLINE_TOKEN_OVERRIDES, defaultOverrides, getOverrides, write };
export default {};
//# sourceMappingURL=rainbow-overrides.mjs.map

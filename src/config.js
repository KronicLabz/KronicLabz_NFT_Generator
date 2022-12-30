const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Open SeaHorses";
const description = "Remember to replace this description";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 2000, // Define how much % you want from secondary market sales 2000 = 10%
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 200,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 10,
    layersOrder: [
      { name: "Background" },
      { name: "Seahorse" },
      { name: "Headwear" },
      { name: "Mouth" },
      { name: "Eyes" },
      { name: "Misc" },
    ],
  },
  {
    growEditionSizeTo: 11,
    layersOrder: [
      { name: "Background" },
      { name: "1of1" },
    ],
  },
  {
    growEditionSizeTo: 500,
    layersOrder: [
      { name: "Background" },
      { name: "Seahorse" },
      { name: "Clothing" },
      { name: "Mouth" },
      { name: "Eyes" },
    ],
  },
  {
    growEditionSizeTo: 501,
    layersOrder: [
      { name: "Background" },
      { name: "1of1" },
    ],
  },
  {
    growEditionSizeTo: 502,
    layersOrder: [
      { name: "Background" },
      { name: "1of1" },
    ],
  },
  {
    growEditionSizeTo: 503,
    layersOrder: [
      { name: "Background" },
      { name: "1of1" },
    ],
  },
  {
    growEditionSizeTo: 700,
    layersOrder: [
      { name: "Background" },
      { name: "Seahorse" },
      { name: "Clothing" },
      { name: "Headwear" },
      { name: "Mouth" },
      { name: "Eyes" },
    ],
  },
  {
    growEditionSizeTo: 701,
    layersOrder: [
      { name: "Background" },
      { name: "1of1" },
    ],
  },
  {
    growEditionSizeTo: 702,
    layersOrder: [
      { name: "Background" },
      { name: "1of1" },
    ],
  },
  {
    growEditionSizeTo: 1100,
    layersOrder: [
      { name: "Background" },
      { name: "Seahorse" },
      { name: "Clothing" },
      { name: "Headwear" },
      { name: "Mouth" },
      { name: "Eyes" },
    ],
  },
  {
    growEditionSizeTo: 1101,
    layersOrder: [
      { name: "Background" },
      { name: "1of1" },
    ],
  },
  {
    growEditionSizeTo: 1102,
    layersOrder: [
      { name: "Background" },
      { name: "1of1" },
    ],
  },
  {
    growEditionSizeTo: 2000,
    layersOrder: [
      { name: "Background" },
      { name: "Seahorse" },
      { name: "Clothing" },
      { name: "Headwear" },
      { name: "Mouth" },
      { name: "Eyes" },
    ],
  },
  {
    growEditionSizeTo: 2001,
    layersOrder: [
      { name: "Background" },
      { name: "1of1" },
    ],
  },
  {
    growEditionSizeTo: 2002,
    layersOrder: [
      { name: "Background" },
      { name: "1of1" },
    ],
  },
  {
    growEditionSizeTo: 2003,
    layersOrder: [
      { name: "Background" },
      { name: "1of1" },
    ],
  },
  {
    growEditionSizeTo: 2004,
    layersOrder: [
      { name: "Background" },
      { name: "1of1" },
    ],
  },
  {
    growEditionSizeTo: 2005,
    layersOrder: [
      { name: "Background" },
      { name: "1of1" },
    ],
  },
  {
    growEditionSizeTo: 2006,
    layersOrder: [
      { name: "Background" },
      { name: "1of1" },
    ],
  },
  {
    growEditionSizeTo: 2007,
    layersOrder: [
      { name: "Background" },
      { name: "1of1" },
    ],
  },
  {
    growEditionSizeTo: 2008,
    layersOrder: [
      { name: "Background" },
      { name: "1of1" },
    ],
  },
  {
    growEditionSizeTo: 2009,
    layersOrder: [
      { name: "Background" },
      { name: "1of1" },
    ],
  },
  {
    growEditionSizeTo: 2010,
    layersOrder: [
      { name: "Background" },
      { name: "1of1" },
    ],
  },
]

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 350,
  height: 350,
  smoothing: true,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 200,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 5 / 150,
};

const background = {
  generate: true,
  brightness: "100%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 20000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "MIXED", // ASC, DESC, MIXED
  repeat: 0,
  quality: 200,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
}
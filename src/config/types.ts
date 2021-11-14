type Phase = {
  start: number;
  duration: number;
  rewards: number[];
};

export type AppConfig = {
  fleek: {
    key: string;
    secret: string;
  };
  port: string;
  subgraphURL: string;
  mocksEnabled: boolean;
  mongodbURL: string;
  pools: string[];
  coinGecko: {
    tokenEquivalent: Record<
      string,
      {
        network: string;
        address: string;
      }
    >;
  };
  phases: {
    trading: Phase;
    liquidity: Phase;
    staking: Phase;
  };
  jwt: {
    secret: string;
  };
  privateKey: string;
  contracts: {
    lockedStaking: string;
    unlockedStaking: string;
    tradingRewards: string;
  };
};

export type Network = 'testnet';

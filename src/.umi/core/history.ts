// @ts-nocheck
import { createHashHistory, History } from '/Users/zski7n803/javapros/com-horsecoder-common-intelligentServiceEngineerLab-chinaInternetScienceConference-umi-website/node_modules/.pnpm/@umijs+runtime@3.4.1_react@16.14.0/node_modules/@umijs/runtime';

let options = {
  "basename": "/"
};
if ((<any>window).routerBase) {
  options.basename = (<any>window).routerBase;
}

// remove initial history because of ssr
let history: History = process.env.__IS_SERVER ? null : createHashHistory(options);
export const createHistory = (hotReload = false) => {
  if (!hotReload) {
    history = createHashHistory(options);
  }

  return history;
};

export { history };

import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * dispatch WEB状态更新
 */
export interface FlowOnJumpHomepageParams {
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowOnJumpHomepageResults {
}

/**
 * 跳转到首页
 * @com.horsecoder.common.intelligentServiceEngineerLab.chinaInternetScienceConference.umi.website/generalLayout/FLOW_ON_JUMP_HOMEPAGE
 */
export const flowOnJumpHomepage = async (params: FlowOnJumpHomepageParams): Promise<FlowOnJumpHomepageResults> => {
  return run('@com.horsecoder.common.intelligentServiceEngineerLab.chinaInternetScienceConference.umi.website/generalLayout/FLOW_ON_JUMP_HOMEPAGE', { ...params });
};

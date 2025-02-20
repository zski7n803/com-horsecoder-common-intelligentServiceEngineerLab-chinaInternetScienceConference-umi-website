import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * dispatch WEB状态更新
 */
export interface FlowOnHomeButtonClickParams {
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowOnHomeButtonClickResults {
}

/**
 * 首页按钮点击
 * @com.horsecoder.common.intelligentServiceEngineerLab.chinaInternetScienceConference.umi.website/generalLayout/FLOW_ON_HOME_BUTTON_CLICK
 */
export const flowOnHomeButtonClick = async (params: FlowOnHomeButtonClickParams): Promise<FlowOnHomeButtonClickResults> => {
  return run('@com.horsecoder.common.intelligentServiceEngineerLab.chinaInternetScienceConference.umi.website/generalLayout/FLOW_ON_HOME_BUTTON_CLICK', { ...params });
};

import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * dispatch WEB状态更新
 */
export interface FlowOnClickOnRelevantDownloadLinkJumpParams {
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickOnRelevantDownloadLinkJumpResults {
}

/**
 * 点击相关下载跳转
 * @com.horsecoder.common.intelligentServiceEngineerLab.chinaInternetScienceConference.umi.website/relatedDownloadComponent/FLOW_ON_CLICK_ON_RELEVANT_DOWNLOAD_LINK_JUMP
 */
export const flowOnClickOnRelevantDownloadLinkJump = async (params: FlowOnClickOnRelevantDownloadLinkJumpParams): Promise<FlowOnClickOnRelevantDownloadLinkJumpResults> => {
  return run('@com.horsecoder.common.intelligentServiceEngineerLab.chinaInternetScienceConference.umi.website/relatedDownloadComponent/FLOW_ON_CLICK_ON_RELEVANT_DOWNLOAD_LINK_JUMP', { ...params });
};

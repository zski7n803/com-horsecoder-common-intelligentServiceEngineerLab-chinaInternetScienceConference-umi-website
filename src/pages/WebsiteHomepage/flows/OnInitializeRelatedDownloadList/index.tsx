import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * dispatch WEB状态更新
 * setter 页面设置器
 */
export interface FlowOnInitializeRelatedDownloadListParams {
  dispatch: any;
  setter: any;
}

/**
 * 出参明细:
 */
export interface FlowOnInitializeRelatedDownloadListResults {
}

/**
 * 初始化相关下载列表
 * @com.horsecoder.common.intelligentServiceEngineerLab.chinaInternetScienceConference.umi.website/websiteHomepage/FLOW_ON_INITIALIZE_RELATED_DOWNLOAD_LIST
 */
export const flowOnInitializeRelatedDownloadList = async (params: FlowOnInitializeRelatedDownloadListParams): Promise<FlowOnInitializeRelatedDownloadListResults> => {
  return run('@com.horsecoder.common.intelligentServiceEngineerLab.chinaInternetScienceConference.umi.website/websiteHomepage/FLOW_ON_INITIALIZE_RELATED_DOWNLOAD_LIST', { ...params });
};

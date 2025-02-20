import type { RichTextWebsite } from '@/types/com.horsecoder.common.intelligentServiceEngineerLab.chinaInternetScienceConference.websiteInformation/sys/RichTextWebsite';

/**
 * 入参明细:
 * setter 页面设置器
 * richTextListForWebsites 网站富文本列表
 */
export interface FlowCodeSetRelatedDownloadListParams {
  setter: any;
  richTextListForWebsites: RichTextWebsite[];
}

/**
 * 出参明细:
 */
export interface FlowCodeSetRelatedDownloadListResults {
}

/**
 * 设置数据:相关下载列表
 * FLOW_NODE_SET_RELATED_DOWNLOAD_LIST
 * 唯一id: WebsiteHomepage/FLOW_CODE_SET_RELATED_DOWNLOAD_LIST
 */
export const flowCodeSetRelatedDownloadList = async (params: FlowCodeSetRelatedDownloadListParams): Promise<FlowCodeSetRelatedDownloadListResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  const { richTextListForWebsites } = params;
  setter.setRelatedDownloadList(richTextListForWebsites);  // 结束流程
  return {}
};

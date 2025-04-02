
/**
 * 入参明细:
 */
export interface FlowCodeOnInitializeRelatedDownloadListParams {
}

/**
 * 出参明细:
 * type 类型
 * name 名称
 */
export interface FlowCodeOnInitializeRelatedDownloadListResults {
  type: string;
  name?: string;
}

/**
 * 初始化相关下载列表
 * FLOW_NODE_ON_INITIALIZE_RELATED_DOWNLOAD_LIST
 * 唯一id: WebsiteHomepage/FLOW_CODE_ON_INITIALIZE_RELATED_DOWNLOAD_LIST
 */
export const flowCodeOnInitializeRelatedDownloadList = async (params: FlowCodeOnInitializeRelatedDownloadListParams): Promise<FlowCodeOnInitializeRelatedDownloadListResults> => {
  // 初始化流程出参
  let type;
  let name;
  // TODO：开始流程
  type="相关下载"

  // 结束流程
  return {
    type,
    name,
  }
};

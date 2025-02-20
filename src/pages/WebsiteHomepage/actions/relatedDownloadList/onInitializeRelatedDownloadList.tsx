import { flowOnInitializeRelatedDownloadList } from '../../flows/OnInitializeRelatedDownloadList';
import type { Dispatch } from 'umi';
import type { Setter } from '../../setter';

/**
 * 初始化相关下载列表
 * 唯一id: websiteHomepage-onInitializeRelatedDownloadList
 */
export const onInitializeRelatedDownloadList = (
  setter: Setter,
  dispatch: Dispatch,
) => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnInitializeRelatedDownloadList({ setter, dispatch }).then((result) => {
    // console.log(result);
  }).catch((err) => {
    console.error(err);
  });
  /*
   * end
   */
  /*
   * 自定义代码区域
   * [YOUR CODE HERE]
   */


  /*
   * [END OF YOUR CODE]
   */
};

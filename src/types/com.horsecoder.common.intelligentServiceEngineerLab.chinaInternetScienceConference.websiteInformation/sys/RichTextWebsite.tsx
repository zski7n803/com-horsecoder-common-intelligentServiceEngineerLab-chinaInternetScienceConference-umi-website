
/**
 * 网站富文本
 */
export type RichTextWebsite = {

  /**
   * 网站富文本ID
   */
  readonly id: string;

  /**
   * 类型
   */
  type: string;

  /**
   * 内容
   */
  content: string;

  /**
   * 标题
   */
  title: string;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}

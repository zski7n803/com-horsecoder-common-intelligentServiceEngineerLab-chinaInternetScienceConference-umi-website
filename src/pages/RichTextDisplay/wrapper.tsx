import React, { useMemo, useEffect, useState } from 'react';
import type { RichTextDisplayWrapperProps } from './types';
import { onInitializeRichTextDisplayContent } from './actions';
import type { Setter } from './setter';
import RichTextDisplayPage from './index';
import { useDispatch } from 'umi';


/**
 * 组件逻辑: 富文本展示
 */
const RichTextDisplayWrapper: React.FC<RichTextDisplayWrapperProps> = () => {
  /*
   * 前置代码数据区域
   * 自定义代码区域
   * [YOUR CODE HERE]
   */


  /*
   * [END OF YOUR CODE]
   */
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  const dispatch = useDispatch();
  // 内部可变数据: 富文本内容(richTextContent)
  const [richTextContent, setRichTextContent] = useState<string | undefined>(undefined);
  const setter: Setter = useMemo(() => { return { setRichTextContent };}, []);

  // 组件richTextDisplay数据变化触发的交互入口：初始化富文本展示内容
  useEffect(() => onInitializeRichTextDisplayContent(setter, dispatch), [setter, dispatch]);


  /*
   * end
   */

  /*
   * 获取父组件传值
   * 定义当前组件数据
   * 定义静态变量
   * 获取组件redux数据
   * 获取组件挂载模型数据
   * 获取组件挂载流程数据
   * 装配子组件数据
   * 自定义代码区域
   * [YOUR CODE HERE]
   */


  /*
   * [END OF YOUR CODE]
   */
  return (
    <RichTextDisplayPage 
      richTextContent={richTextContent}
      setRichTextContent={setRichTextContent}
    />
  );
};

export default RichTextDisplayWrapper;

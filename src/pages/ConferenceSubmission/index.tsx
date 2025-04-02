import React from 'react';
import qRCode from '@/assets/qRCode.png';
import styles from './index.less';
import type { ConferenceSubmissionProps } from './types';

/**
 * 组件布局: 会议投稿
 */
const ConferenceSubmissionPage: React.FC<ConferenceSubmissionProps> = () => {

  return (
    <>
      <div
        className={styles.div}
      >
        <div
          className={styles.divDiv0}
        >
          <div
            className={styles.divDiv0Div0}
          >
            <div
              className={styles.divDiv0Div0Div0}
            >
              <div
                className={styles.divDiv0Div0Div0Div0}
              >
                <div
                  className={styles.divDiv0Div0Div0Div0Div0}
                >
                  <div
                    className={styles.divDiv0Div0Div0Div0Div0Div0}
                  >
                    <h1
                      className={styles.divDiv0Div0Div0Div0Div0Div0H20}
                    >
                      网络科学与工程论坛征稿通知
                    </h1>
                    <h2
                      className={styles.divDiv0Div0Div0Div0Div0Div0H31}
                    >
                      (第一轮)
                    </h2>
                  </div>
                  <div
                    className={styles.divDiv0Div0Div0Div0Div0Div1}
                  >
                    <p
                      className={styles.divDiv0Div0Div0Div0Div0Div1P0}
                    >
                      {`　　由中国工业与应用数学学会主办，武汉大学、中国工业与应用数学学会复杂网络与复杂系统专委会承办，湖北国家应用数学中心、武汉数学与智能研究院、武汉大学复杂网络中心、中国指挥与控制学会网络科学与工程专委会、湖北省工业与应用数学学会、武汉计算机软件工程学会协办的第二十一届网络科学与工程论坛将于2025年4月18-20日在湖北武汉光谷潮漫凯瑞国际酒店召开。`}
                    </p>
                    <p
                      className={styles.divDiv0Div0Div0Div0Div0Div1P1}
                    >
                      {`　　本次论坛旨在为复杂网络与复杂系统及其相关领域的学者与技术人员提供一个学术交流平台，展示网络科学与工程最新理论与技术成果。感谢各位同行对网络科学与工程论坛的支持！本次论坛将采取大会报告和分组报告的形式进行交流。现将会议的有关事项通知如下：`}
                    </p>
                    <h2
                      className={styles.bigger_h2}
                    >
                      {`一、会议主题包括（不限于）：`}
                    </h2>
                    <p
                      className={styles.divDiv0Div0Div0Div0Div0Div1P3}
                    >
                      1. 复杂网络建模、结构与功能分析；<br/>
                      2. 复杂网络控制与优化；<br/>
                      3. 复杂网络上的动力学：同步、传播、博弈等；<br/>
                      4. 社会、经济、技术网络等网络分析；<br/>
                      5. 生物网络、系统生物学、生物动力系统等；<br/>
                      6. 分数阶网络、高阶网络与动力学分析；<br/>
                      7. 群体智能与人类行为动力学；<br/>
                      8. 多智能体系统与具身智能；<br/>
                      9. 网络安全基础理论及应用；<br/>
                      10. 复杂网络与大数据分析、人工智能计算、图网络机器学习；<br/>
                      11. 复杂网络应用：链路预测与推荐算法、交通、路由等；<br/>
                      12. 复杂系统与人工智能以及其他学科的交叉研究等。
                    </p>
                    <h2
                      className={styles.bigger_h2}
                    >
                      {`二、会议投稿`}
                    </h2>
                    <p
                      className={styles.divDiv0Div0Div0Div0Div0Div1P5}
                    >
                      1. 请作者在2025年3月1日前通过
                      <a href={"https://s.csiam.org.cn"}
                         style={{color: "blue"}}>中国工业与应用数学学会投稿系统(https://s.csiam.org.cn)</a>
                      ，选择<b>CNetSci 2025作者工作区</b>直接投稿，提交论文摘要和PDF文件（准备好您的论文题目和摘要和论文PDF文件（包括长摘要），报告人的姓名、单位、联系信息）。
                    </p>
                    <p
                      className={styles.divDiv0Div0Div0Div0Div0Div1P6}
                    >
                      {`　　会议接受英文或中文稿件，但同一篇论文不得同时提交英文版和中文版。所有的论文投稿、评审需要通过在线会议论文管理系统进行。在提交论文前，请在投稿系统首页进行用户注册登录。`}
                    </p>
                    <p
                      className={styles.divDiv0Div0Div0Div0Div0Div1P7}
                    >
                      <span className={styles.dl}>登录后即可进行会议论文投稿:</span><br/>
                      （1）准备好您的论文题目和摘要，报告人的姓名、单位、联系信息；<br/>
                      （2）选择一个您要提交的论文语种；<br/>
                      （3）确定所属方向；<br/>
                      （4）填入所需信息并上载 PDF 文件（包括长摘要）。
                    </p>
                    <p
                      className={styles.divDiv0Div0Div0Div0Div0Div1P8}
                    >
                      每篇成功提交的论文大会都会分配唯一的论文编号（论文 ID），当您在会务邮箱（<a
                      style={{color: "blue"}}>cnetsci2025@163.com</a>）联系我们时请指明您的论文编号。
                    </p>
                    <h2
                      className={styles.bigger_h2}
                    >
                      {`三、注册方式`}
                    </h2>
                    <p
                      className={styles.divDiv0Div0Div0Div0Div0Div1P10}
                    >
                      请各位参会人员访问<a href={"https://s.csiam.org.cn"}
                                           style={{color: "blue"}}>中国工业与应用数学学会投稿系统(https://s.csiam.org.cn)</a>
                      ，登录后选择<u>CNetSci2025(第二十一届中国网络科学论坛，武汉，2025年4月18 - 20日)</u>进行注册。<br/>
                      <b>【注册说明】</b><br/>
                    </p>
                    <p
                      className={styles.divDiv0Div0Div0Div0Div0Div1P11}
                    >
                      <div className={styles.sfbz}>
                      1. 论文作者提交论文摘要后，即可在系统内进行注册交费。<br/>
                      2. 没有论文的参会者，也需在系统内注册交费。<br/>
                      3. 会议注册费收费标准:<br/>
                      </div>
                      <table>
                        <tbody>
                        <tr>
                          <th></th>
                          <th>2025年4月3日前</th>
                          <th>2025年4月3日后</th>
                          <th>会议现场注册</th>
                        </tr>
                        <tr>
                          <td>教师</td>
                          <td>¥1400元 (CSIAM教师会员1300元)</td>
                          <td>¥1600元 (CSIAM教师会员1500元)</td>
                          <td>¥1600元</td>
                        </tr>
                        <tr>
                          <td>学生</td>
                          <td>¥700元 (CSIAM学生会员650元)</td>
                          <td>¥800元 (CSIAM学生会员750元)</td>
                          <td>¥800元</td>

                        </tr>
                        </tbody>
                      </table>
                    </p>
                    <p
                      className={styles.divDiv0Div0Div0Div0Div0Div1P10}
                    >
                      4. 注册成为中国工业与应用数学学会个人会员，可享受注册费减免优惠（请保证注册个人会员使用的邮箱与会议注册系统的注册邮箱一致），
                      <a href={"https://member.csiam.org.cn"}>点击此处</a> 申请成为学会个人会员。<br/>
                    </p>
                    <p
                      className={styles.divDiv0Div0Div0Div0Div0Div1P10}
                    >
                      5. 会议注册回执在线填写（扫描下面二维码）：<br/>
                    </p>
                    <img
                      className={styles.divDiv0Div0Div0Div0Div0Div1Img12}
                      src={qRCode}
                      alt=""
                    />
                    <p
                      className={styles.divDiv0Div0Div0Div0Div0Div1P13}
                    >
                      <b>【缴费说明】</b>
                    </p>
                    <p className={styles.payway}>
                      1.注册费缴纳方式包括：注册系统在线交费、银行汇款、现场交费。</p>
                    <p className={styles.payway}>
                      ①
                      注册系统在线交费：通过会议注册系统在线交费（推荐交费方式，无错付风险和避免现场缴费拥挤）。在线支付可选：微信支付、网上银行（银联在线、银行卡、支付宝支付）。在系统注册的时候选在线支付，会自动跳转到收银界面，用以上方式支付即可，支付成功后，支付状态一栏会自动更新为“已支付”。若必须使用公务卡，建议先将公务卡绑定微信或支付宝，直接进行在线支付，或报到现场刷卡。
                      </p>
                    <p className={styles.payway}>
                      ②银行汇款（不支持支付宝对公转账）请于会前汇入：</p>

                    <p className={styles.bankway}>
                      账户名：中国工业与应用数学学会<br/>
                      账号：01090334600120105034670<br/>
                      开户行：北京银行清华园支行汇款<br/>
                      附言务必注明：<b>cnetsci2025+姓名+PIN（会议注册系统分配的5位数字代码）</b>。
                    </p>
                    <p className={styles.tips}>
                      <b><u>特别提示</u></b>：由于支付宝对公转账不显示汇款人及附言等信息，请勿用支付宝对公转账。汇款前务必在系统完成注册，提交单位名称、税号，以便开票，多位参会代表批量汇款请联系会务组说明开票的详细需求。
                    </p>
                    <p className={styles.payway}>③ 现场交费：会议报到时缴费，可使用微信、支付宝或刷卡。</p>
                    <h2
                      className={styles.bigger_h2}
                    >
                      {`四、重要时间节点`}
                    </h2>
                    <p
                      className={styles.divDiv0Div0Div0Div0Div0Div1P15}
                    >
                      <b>会议报告投稿提交截止日期：<u><a style={{color:"red"}}> 2025 年 3 月 1 日 24 : 00</a></u><br/>
                      报告接受以及参会通知日期：<u><a style={{color: "red"}}> 2025 年 3 月 23 日 24 : 00</a></u><br/>
                      会议在线注册缴费截止日期：<u><a style={{color:"red"}}> 2025 年 4 月 3 日 24 : 00</a></u><br/></b>
                    </p>
                    <h2
                      className={styles.bigger_h2}
                    >
                      {`五、会务组联系方式`}
                    </h2>
                    <p
                      className={styles.divDiv0Div0Div0Div0Div0Div1P17}
                    >
                      白老师：手机号18181984809，微信号yyw_55255<br/>
                      田老师：手机号15271177770（微信号同手机号）<br/>
                      会议网站：cnsf2025.whu.edu.cn<br/>
                      会务邮箱：cnetsci2025@163.com<br/>
                    </p>
                    <div
                      className={styles.divDiv0Div0Div0Div0Div0Div1Div18}
                    >
                      <p
                        className={styles.divDiv0Div0Div0Div0Div0Div1Div18P0}
                      >
                        中国工业与应用数学学会复杂网络与复杂系统专委会<br/></p>
                      <p
                        className={styles.divDiv0Div0Div0Div0Div0Div1Div18P0}
                      >
                        武汉计算机软件工程学会</p>
                      <p
                        className={styles.divDiv0Div0Div0Div0Div0Div1Div18P0}
                      >
                        2025年1月20日</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConferenceSubmissionPage;

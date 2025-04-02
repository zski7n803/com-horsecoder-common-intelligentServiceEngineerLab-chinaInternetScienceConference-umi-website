import React from 'react';
import styles from './index.less';
import type { MeetingRegistrationProps } from './types';
import qRCode from "@/assets/qRCode.png";

/**
 * 组件布局: 会议注册
 */
const MeetingRegistrationPage: React.FC<MeetingRegistrationProps> = () => {

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
            <h2
              className={styles.divDiv0Div0H20}
            >
              {`会议注册`}
            </h2>
            <p
              className={styles.divDiv0Div0Div0Div0Div0Div1P1}
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
              5. 请参会人员务必于2025年4月5日前扫描下方二维码并填写参会回执:<br/>
            </p>
            <img
              className={styles.divDiv0Div0Div0Div0Div0Div1Img12}
              src={qRCode}
              alt=""
            />
            <p
              className={styles.divDiv0Div0Div0Div0Div0Div1P10}
            >
              6.食宿及交通：请参会人员自行提前预定酒店。组委会推荐武汉光谷潮漫凯瑞国际酒店（罗经理
              17671437472）、全季酒店（武汉光谷创业街店）（周经理
              18672376616）、武汉丽顿酒店（光谷店）（侯经理18907178850）和锦江都城酒店（武汉华科大光谷创业街店）（皮经理18872340613）4家酒店住宿。<br/>
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
              开户行：北京银行清华园支行<br/>
              汇款附言务必注明：<b>cnetsci2025+姓名+PIN（会议注册系统分配的5位数字代码）</b>。
            </p>
            <p className={styles.tips}>
              <b><u>特别提示</u></b>：由于支付宝对公转账不显示汇款人及附言等信息，请勿用支付宝对公转账。汇款前务必在系统完成注册，提交单位名称、税号，以便开票，多位参会代表批量汇款请联系会务组说明开票的详细需求。
            </p>
            <p className={styles.payway}>③ 现场交费：会议报到时缴费，可使用微信、支付宝或刷卡。</p>
          </div>
        </div>
      </div>

</>
);
};

export default MeetingRegistrationPage;

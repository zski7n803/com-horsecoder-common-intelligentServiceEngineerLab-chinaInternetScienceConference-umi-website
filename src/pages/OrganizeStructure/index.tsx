import React from 'react';
import styles from './index.less';
import type { OrganizeStructureProps } from './types';

/**
 * 组件布局: 组织结构
 */
const OrganizeStructurePage: React.FC<OrganizeStructureProps> = () => {

  return (
    <>
    <div className={styles.container}>
        <div className={styles.date_location}>

        <h1>第二十一届网络科学与工程论坛</h1>
        <h2>The 21th Networks Science & Technology Forum in 2025</h2>
        <p>2025 年 4 月 18 日 - 20 日 中国·武汉</p>

        <div className={styles.section}>
            <h2>主办单位</h2>
            <ul>
                <li>中国工业与应用数学学会</li>
            </ul>
        </div>

        <div className={styles.section}>
            <h2>承办单位</h2>
            <ul>
                <li>武汉大学</li>
                <li>中国工业与应用数学学会复杂网络与复杂系统专委会</li>
            </ul>
        </div>

        <div className={styles.section}>
            <h2>协办单位</h2>
            <ul>
                <li>湖北国家应用数学中心</li>
                <li>武汉数学与智能研究院</li>
                <li>武汉大学复杂网络中心</li>
                <li>中国指挥与控制学会网络科学与工程专委会</li>
                <li>湖北省工业与应用数学学会</li>
                <li>武汉计算机软件工程学会</li>
            </ul>
        </div>

        </div>

        <div className={styles.section}>
            <h2 className={styles.bigger_h2}>一、 会议主题</h2>
            <p>本次论坛旨在为复杂网络与复杂系统及其相关领域的学者与技术人员提供一个学术交流平台，展示网络科学最新理论与技术成果。本次论坛将采取大会报告和分组报告的形式进行交流。感谢各位同行对网络科学论坛的支持！</p>
            <p>会议主题包括（不限于）： </p>
            <ul className={styles.huanhang_ul}>
                <li>1. 复杂网络建模、结构与功能分析；</li>
                <li>2. 复杂网络控制与优化；</li>
                <li>3. 复杂网络上的动力学：同步、传播、博弈等；</li>
                <li>4. 社会、经济、技术网络等网络分析；</li>
                <li>5. 生物网络、系统生物学、生物动力系统等；</li>
                <li>6. 分数阶网络、高阶网络与动力学分析；</li>
                <li>7. 群体智能与人类行为动力学；</li>
                <li>8. 多智能体系统与具身智能；</li>
                <li>9. 网络安全基础理论及应用；</li>
                <li>10. 复杂网络与大数据分析、人工智能计算、图网络机器学习；</li>
                <li>11. 复杂网络应用：链路预测与推荐算法、交通、路由等；</li>
                <li>12. 复杂系统与 AI 和其他学科的交叉及其应用等。</li>
            </ul>
        </div>

        <div className={styles.section}>
            <h2 className={styles.bigger_h2}>二、 会议组织机构</h2>
            <ul>
                <li><strong>大会荣誉主席:</strong>
                    <ul className={styles.huanhang_ul}>
                        <li>郭 雷（中国科学院数学与系统科学研究院）</li>
                        <li>张平文（武汉大学）</li>
                        <li>陈关荣（香港城市大学）</li>
                        <li>汪小帆（上海应用技术大学）</li>
                    </ul>
                </li>
                <li><strong>大会主席:</strong>
                    <ul className={styles.huanhang_ul}>
                        <li>李 翔（复旦大学）</li>
                        <li>吕金虎（北京航空航天大学）</li>
                        <li>杨志坚（武汉大学）</li>
                    </ul>
                </li>
                <li><strong>大会顾问：</strong>
                    <ul className={styles.flex_container}>
                        <li>曹进德（东南大学）</li>
                        <li>方锦清（中国原子能科学研究院）</li>
                        <li>陆君安（武汉大学）</li>
                        <li>汪秉宏（中国科学与技术大学）</li>
                        <li>史定华（上海大学）</li>
                    </ul>
                </li>
                <li><strong>大会副主席:</strong>
                    <ul className={styles.flex_container}>
                        <li>狄增如（北京师范大学）</li>
                        <li>蒋国平（南京邮电大学）</li>
                        <li>林 伟（复旦大学）</li>
                        <li>李 兵 (武汉大学)</li>
                        <li>沈 浩（中国传媒大学）</li>
                        <li>虞文武（东南大学）</li>
                        <li>严 钢（同济大学）</li>
                        <li>刘志新（中国科学院数学与系统科学研究院）</li>
                        <li>王 琳（上海交通大学）</li>
                    </ul>
                </li>
                <li><strong>程序委员会</strong>
                    <ul className={styles.no_huanhang_ul}>
                        <li><strong>程序委员会主席:</strong>
                            <ul className={styles.flex_container}>
                                <li>谭少林（中关村实验室）</li>
                                <li>杜 博（武汉大学）</li>
                            </ul>
                        </li>
                        <li><strong>程序委员会副主席:</strong>
                            <ul className={styles.flex_container}>
                                <li>吕琳媛（中国科技大学）</li>
                                <li>王 薇(北京航空航天大学)</li>
                                <li>刘 洋（浙江师范大学）</li>
                                <li>吴晓群(深圳大学)</li>
                                <li>于永光（北京交通大学）</li>
                                <li>夏承遗（天津工业大学）</li>
                            </ul>
                        </li>
                        <li><strong>程序委员会委员 :</strong>
                            <ul className={styles.flex_container}>
                                <li>包海波（西南大学）</li>
                                <li>曹进德（东南大学）</li>
                                <li>陈 飞（南开大学）</li>
                                <li>陈关荣（香港城市大学）</li>
                                <li>陈含爽（安徽大学）</li>
                                <li>陈建芮（陕西师范大学）</li>
                                <li>陈 姚（西南财经大学）</li>
                                <li>陈增强（南开大学）</li>
                                <li>狄增如（北京师范大学）</li>
                                <li>董高高（江苏大学）</li>
                                <li>段志生（北京大学）</li>
                                <li>樊 瑛（北京师范大学）</li>
                                <li>范正平（中山大学）</li>
                                <li>方锦清（中国原子能科学研究院）</li>
                                <li>丰建文（深圳大学）</li>
                                <li>高忠科（天津大学）</li>
                                <li>谷海波（北京航空航天大学）</li>
                                <li>韩定定（华东师范大学）</li>
                                <li>韩筱璞（杭州师范大学）</li>
                                <li>和望利（华东理工大学）</li>
                                <li>胡鸿翔（杭州电子科技大学）</li>
                                <li>黄子罡（西安交通大学）</li>
                                <li>纪 鹏（复旦大学）</li>
                                <li>贾 韬（西南大学）</li>
                                <li>贾 强（江苏大学）</li>
                                <li>蒋国平（南京邮电大学）</li>
                                <li>靳 祯（山西大学）</li>
                                <li>李 兵（武汉大学）</li>
                                <li>李 聪（复旦大学）</li>
                                <li>李 翔（复旦大学）</li>
                                <li>李 智（西安电子科技大学）</li>
                                <li>廖 好（深圳大学）</li>
                                <li>林 伟（复旦大学）</li>
                                <li>刘 闯（杭州师范大学）</li>
                                <li>刘 慧（华中科技大学）</li>
                                <li>刘建国（上海财经大学）</li>
                                <li>刘 杰（武汉纺织大学）</li>
                                <li>刘克新（北京航空航天大学）</li>
                                <li>刘润然（杭州师范大学）</li>
                                <li>刘小洋（江苏师范大学）</li>
                                <li>刘 洋（浙江师范大学）</li>
                                <li>刘志新（中科院数学与系统科学研究院）</li>
                                <li>刘智伟（华中科技大学）</li>
                                <li>陆君安（武汉大学）</li>
                                <li>卢剑权（东南大学）</li>
                                <li>关治洪（华中科技大学）</li>
                                <li>吕金虎（北京航空航天大学）</li>
                                <li>吕琳媛（中国科技大学）</li>
                                <li>荣智海（电子科技大学）</li>
                                <li>申传胜（安庆师范大学）</li>
                                <li>沈 浩（中国传媒大学）</li>
                                <li>刘忠信（南开大学）</li>
                                <li>孙 梅（江苏大学）</li>
                                <li>孙伟刚（杭州电子科技大学）</li>
                                <li>孙永征（中国矿业大学）</li>
                                <li>孙媛媛（大连理工大学）</li>
                                <li>谭少林（中关村实验室）</li>
                                <li>汤龙坤（华侨大学）</li>
                                <li>唐 漾（华东理工大学）</li>
                                <li>唐 明（华东师范大学）</li>
                                <li>汪小帆（上海应用技术大学）</li>
                                <li>王 琳（上海交通大学）</li>
                                <li>王 沛（河南大学）</li>
                                <li>王燕舞（华中科技大学）</li>
                                <li>王 震（西北工业大学）</li>
                                <li>王晓玲（南京邮电大学）</li>
                                <li>温广辉（东南大学）</li>
                                <li>吴嘉靖（中山大学）</li>
                                <li>吴建设（西安电子科技大学）</li>
                                <li>吴 江（武汉大学）</li>
                                <li>吴 俊（北京师范大学）</li>
                                <li>吴晓群（深圳大学）</li>
                                <li>夏承遗（天津工业大学）</li>
                                <li>夏永祥（杭州电子科技大学）</li>
                                <li>项林英（天津工业大学）</li>
                                <li>肖 敏（南京邮电大学）</li>
                                <li>熊文军（西南财经大学）</li>
                                <li>许小可（北京师范大学）</li>
                                <li>宣 琦（浙江工业大学）</li>
                                <li>严 钢（同济大学）</li>
                                <li>杨 文（华东理工大学）</li>
                                <li>杨鑫松（四川大学）</li>
                                <li>杨旭华（浙江工业大学）</li>
                                <li>于永光（北京交通大学）</li>
                                <li>虞文武（东南大学）</li>
                                <li>张海峰（安徽大学）</li>
                                <li>张季谦（安徽师范大学）</li>
                                <li>张子柯（浙江大学）</li>
                                <li>张毅超（同济大学）</li>
                                <li>章忠志（复旦大学）</li>
                                <li>郑志刚（华侨大学）</li>
                                <li>周 进（上海大学）</li>
                                <li>周 进（武汉大学）</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><strong>组织委员会主席</strong>
                    <ul className={styles.flex_container}>
                        <li>吴 江(武汉大学)</li>
                        <li>周 进（武汉大学）</li>
                    </ul>
                </li>
                <li><strong>组织委员会委员：</strong>
                    <ul className={styles.flex_container}>
                        <li>王 健（武汉大学）</li>
                        <li>王 翀（武汉大学）</li>
                        <li>赵小刚（武汉大学）</li>
                        <li>白文玉（武汉大学）</li>
                    </ul>
                </li>
            </ul>
        </div>

    </div>
    </>
  );
};

export default OrganizeStructurePage;

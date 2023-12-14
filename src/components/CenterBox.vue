<template>
    <div class="centerBox">
        <div class="baseBox centerMainBox1" style="height:65%">
            <div class="baseBoxLeft left">
                <div class="boxTitle">气象数据监测</div>
                <img src="../img/left.png" alt="">
                <table class="equipment_table env_table">
                    <tr>
                        <td>指标</td>
                        <td>标准值</td>
                        <td>当前值</td>
                        <td>预警</td>
                    </tr>
                    <tr>
                        <td>温度</td>
                        <td>18～20℃</td>
                        <td>9℃</td>
                        <td>正常</td>
                    </tr>
                    <tr>
                        <td>湿度</td>
                        <td>40%～60%</td>
                        <td>52%</td>
                        <td>正常</td>
                    </tr>
                    <tr>
                        <td>风速</td>
                        <td>0m/s~4m/s</td>
                        <td>2m/s</td>
                        <td>正常</td>
                    </tr>
                    <tr>
                        <td>降水</td>
                        <td>2mm~4mm</td>
                        <td>0mm</td>
                        <td style="color:red">偏低</td>
                    </tr>
                </table>
                <div style="width:95%;height:50%;margin-left:2.5%" id="wind"></div>
            </div>
            <!-- <div class="baseBoxRight right"> //暂时不使用
                <ul class="plant" style="width: 60%" >
                    <li>
                        <a class="jumps" href="">
                            <div>
                                <span>茶园种植面积(m)</span>
                                <img src="../img/qqzmj.png" alt="">
                            </div>
                            <p class="">350000</p>
                            <span class="spans3"></span>
                        </a>
                    </li>
                    <li>
                        <a class="jumps" href="">
                            <div>
                                <span>产值(亿元)</span>
                                <img src="../img/ccc2.png" alt="">
                            </div>
                            <p class="">180</p>
                            <span class="spans2" style="background: #499BFF;"></span>
                        </a>
                    </li>
                    <li>
                        <a class="jumps" href="">
                            <div>
                                <span>产量(吨)</span>
                                <img src="../img/ccc.png" alt="">
                            </div>
                            <p class="">82000</p>
                            <span class="spans3" style="background: #F2CE43;"></span>
                        </a>
                    </li>
                    <li>
                        <a class="jumps" href="./teaGarden.html">
                            <div class="clear plantTop ">
                                <span class="flexLeft">茶园(个)</span>
                                <img class="flexright" src="../img/cy.png" alt="">
                            </div>

                            <p class=" plantNum1">3207</p>
                            <span class="spans0"></span>
                        </a>
                    </li>
                    <li>
                        <a class="jumps" href="./Tea-enterprises.html">
                            <div class="clear plantTop ">
                                <span class="flexLeft">茶企(个)</span>
                                <img class="flexright" src="../img/cq.png" alt="">
                            </div>
                            <p class=" plantNum1">157</p>
                            <span class="spans1"></span>
                        </a>
                    </li>
                    <li>
                        <a class="jumps" href="./teaPeasant.html">
                            <div>
                                <span>茶农(人)</span>
                                <img src="../img/cn.png" alt="">
                            </div>
                            <p class="">360000</p>
                            <span class="spans2"></span>
                        </a>
                    </li>

                </ul>
            </div> -->
        </div>

        <div class="baseBox centerMainBox2" style="height:30%;">
            <img src="../img/down.png" alt="">
            <div class="boxTitle2" style="width:26%">统计数据</div>
            <div class="csbaseBox1">
                <ul class="baseDatas">
                    <li class="left ">
                        <a href="https://gitee.com/iGaoWei/big-data-view" style="color: #0efcff">
                            <div class="borderRight "></div>
                            <span>积水区信息</span>
                        </a>
                    </li>
                    <li class="left">
                        <a href="https://gitee.com/iGaoWei/big-data-view" style="color: #0efcff">
                            <div class="borderRight "></div>
                            <span>积水位置</span>
                        </a>
                    </li>
                    <li class="left">
                        <a href="https://gitee.com/iGaoWei/big-data-view" style="color: #0efcff">
                            <div class="borderRight "></div>
                            <span>负责人</span>
                        </a>
                    </li>
                </ul>

                <table class="tableDetalis" style="color: #00ddfe">
                    <tr>
                        <td>深度</td>
                        <td>面积</td>
                        <td>等级</td>
                        <td></td>
                        <td>园区</td>
                        <td>具体位置</td>
                        <td>姓名</td>
                        <td>联系方式</td>

                    </tr>
                    <tr>
                        <td>10cm</td>
                        <td>10cm</td>
                        <td>XXX</td>
                        <td></td>
                        <td>荷园</td>
                        <td>商业街100m</td>
                        <td>刘新武</td>
                        <td>15654</td>

                    </tr>
                    <tr>
                        <td>20cm</td>
                        <td>企业</td>
                        <td>380m</td>
                        <td>XXX</td>
                        <td>荷园</td>
                        <td>6200m</td>
                        <td>张方</td>
                        <td>12656</td>

                    </tr>
                    <tr>
                        <td>33cm</td>
                        <td>合作社</td>
                        <td>510m</td>
                        <td>XXX</td>
                        <td>荷园</td>
                        <td>5800m</td>
                        <td>李小维</td>
                        <td>12656</td>

                    </tr>
                    <tr>
                        <td>40cm</td>
                        <td>个人</td>
                        <td>17m</td>
                        <td>XXX</td>
                        <td>荷园</td>
                        <td>30000m</td>
                        <td>王骁骁</td>
                        <td>12656</td>
                        <td>111</td>
                    </tr>
                </table>

            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>

</style>
  
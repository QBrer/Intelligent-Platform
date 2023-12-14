<template>
            <div class="leftBox" style="width:22%;">
                <div class="baseBox baseBox1" style="margin-bottom:15px;height:40%">
                    <img src="../img/right.png" alt="">
                    <div class="csbaseBox1">
                        <div class="boxTitle">视频监控设备</div>
                        <ul class="boxLis">
                            <li class="left active">积水区监控</li>
                            <li class="left">周边监控</li>
                            <li class="left">仿真</li>
                        </ul>
                        <div class="content1">
                            <ul>
                                <li style="display: block;" class="contList">
                                    <!-- 四个角描边 stat -->
                                    <div class="leftTopLine1"></div>
                                    <div class="leftTopLine2"></div>
                                    <div class="rightTopLine1"></div>
                                    <div class="rightTopLine2"></div>
                                    <div class="leftBottomLine1"></div>
                                    <div class="leftBottomLine2"></div>
                                    <div class="rightBottomLine1"></div>
                                    <div class="rightBottomLine2"></div>

                                    <div class="boxVideo">
                                        <video class="video-js vjs-big-play-centered" data-setup='{}' controls>
                                            <source src="https://www.bilibili.com/video/BV1H94y177H8/" type="application/x-mpegURL">
                                        </video>
                                    </div>
                                </li>
                                <li class="contList">
                                    <!-- 四个角描边 stat -->
                                    <div class="leftTopLine1"></div>
                                    <div class="leftTopLine2"></div>
                                    <div class="rightTopLine1"></div>
                                    <div class="rightTopLine2"></div>
                                    <div class="leftBottomLine1"></div>
                                    <div class="leftBottomLine2"></div>
                                    <div class="rightBottomLine1"></div>
                                    <div class="rightBottomLine2"></div>

                                    <div class="boxVideo">
                                        <video class="video-js vjs-big-play-centered" data-setup='{}' controls>
                                            <source src="http://hls01open.ys7.com/openlive/cf40f99cc9cb4a23bd52e0b2119b534c.m3u8" type="application/x-mpegURL">
                                        </video>
                                    </div>
                                </li>
                                <li class="contList">
                                    <!-- 四个角描边 stat -->
                                    <div class="leftTopLine1"></div>
                                    <div class="leftTopLine2"></div>
                                    <div class="rightTopLine1"></div>
                                    <div class="rightTopLine2"></div>
                                    <div class="leftBottomLine1"></div>
                                    <div class="leftBottomLine2"></div>
                                    <div class="rightBottomLine1"></div>
                                    <div class="rightBottomLine2"></div>

                                    <div class="boxVideo">
                                        <video
                                            src="#"
                                            controls="controls">
                                            your browser does not support the video tag
                                        </video>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div class="baseBox baseBox2" style="margin-bottom:15px;height:29.5%">
                    <img src="../img/right2.png" alt="">
                    <!-- 四个角描边 end -->
                    <div class="boxTitle2">热度分析</div>
                    <div class="boxRader" id="Progress"></div>
                </div>
                <div class="baseBox baseBox3" style="height:28.9%">
                    <img src="../img/right3.png" alt="">
                    <!-- 四个角描边 end -->
                    <div class="boxTitle2">缓冲区分析</div>
                    <div class="boxRader" id="mains"></div>
                </div>

            </div>
</template>


<script>

</script>
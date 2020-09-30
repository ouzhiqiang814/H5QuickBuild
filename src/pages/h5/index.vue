<template>
    <div class="h5">
        <div class='h5-header'>
            <div class="header">
                <div class="h5-flex">
                    <el-row>
                        <el-col :span="6"><img src="../../common/images/main/logo_02.png" alt=""></el-col>
                        <el-col :span="12">
                        <ul>
                            <li>模板首页</li>
                            <li class='active'>我的H5</li>
                            <li>素材库</li>
                        </ul>
                        </el-col>
                        <el-col :span="6" class='right'>
                            <div class='login' @click="enterlogin">登录</div>
                        </el-col>
                    </el-row>
                </div>
               
                <el-row>
                    <el-col :span='24'>
                        <div class='h5-bg'></div>
                    </el-col>
                    <!-- <img src="http://hnh5.scrm.host:10580/gallery141/201905/2206091680.png" alt=""> -->
                </el-row>
                 <el-row>
                    <el-col :span='24'>
                        <div class='h5-title'>
                            快捷的体验，全闭环一站式服务
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class='h5-body'>
            <div class='tab'>
                <el-tabs v-model="activeName" @tab-click="handleClick" class="tab-body">
                    <el-tab-pane label="用户管理" name="first">
                        <span slot="label" class='tab-box'>
                            <i class="el-icon-basketball"></i> 
                            <div class='tab-title'>全部</div> 
                        </span>
                    </el-tab-pane>
                    <el-tab-pane label="配置管理" name="second">
                        <span slot="label" class='tab-box'>
                            <i class="el-icon-pie-chart"></i> 
                            <div class='tab-title'>已发布</div> 
                        </span>
                    </el-tab-pane>
                    <el-tab-pane label="角色管理" name="third">
                        <span slot="label" class='tab-box'>
                            <i class="el-icon-circle-check"></i> 
                            <div class='tab-title'>未发布</div> 
                        </span>
                    </el-tab-pane>
                    <el-tab-pane label="定时任务补偿" name="fourth">
                        <span slot="label" class='tab-box'>
                            <i class="el-icon-circle-plus-outline"></i> 
                            <div class='tab-title'>有修改</div> 
                        </span>
                    </el-tab-pane>
                    <el-tab-pane label="定时任务补偿" name="fier">
                        <span slot="label" class='tab-box'>
                            <i class="el-icon-circle-close"></i> 
                            <div class='tab-title'>已下线</div> 
                        </span>
                    </el-tab-pane>
                </el-tabs>
            </div> 
            <div class="tab-item">
                <div class='mode'>
                    <el-row gutter="60">
                        <el-col :span="6">
                            <el-card :body-style="{ padding: '0px' }" class="mode-card first">
                                <div class='moban'>
                                    <i class="el-icon-crop"></i> 
                                    <div>模版创建</div>
                                </div>
                                <div class='addmoban'>
                                    <i class="el-icon-folder-add"></i> 
                                    <div>空白模版</div>
                                </div>
                            </el-card>
                        </el-col>
                        <el-col :span="6" v-for="(item,index) in 11" :key='index'>
                            <el-card :body-style="{ padding: '0px' }" class="mode-card">
                                <img src="https://xmimgbch.kerlala.com/pics/1909077382.png" class="image">
                                <div class="mode-bg">
                                    <div>
                                        <div class='mode-bg-item'>
                                            <i class="el-icon-edit"></i>
                                            <p>编辑</p>
                                        </div>
                                        <div class='mode-bg-item'>
                                            <i class="el-icon-view"></i>
                                            <p>预览</p>
                                        </div>
                                        <div class='mode-bg-item'>
                                            <i class="el-icon-picture-outline"></i>
                                            <p>数据</p>
                                        </div>
                                    </div>
                                </div>
                                <div style="padding: 14px;">
                                    <span class="title">新年理财季</span>
                                    <!-- <el-button type="text" class="button">立即制作</el-button> -->
                                    <div class='time'>2020-09-24 14:32:12</div>
                                </div>
                                <div class="item-setting">
                                    <el-row>
                                        <el-col :span='6'>
                                            <el-link :underline="false" type="info">复制</el-link>
                                        </el-col>
                                        <el-col :span='6'>
                                            <el-link :underline="false" type="info">删除</el-link>
                                        </el-col>
                                        <el-col :span='6'>
                                            <el-link :underline="false" type="info">设置</el-link>
                                        </el-col>
                                        <el-col :span='6'>
                                            <el-link :underline="false" type="info">发布</el-link>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-card>
                        </el-col>
                                
                    </el-row>
                </div>    
            </div> 
        </div>
        <div class='h5-foot'>
            <el-pagination
                background
                layout="prev, pager, next"
                :page-size="11"
                :total="11">
            </el-pagination>
         </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            activeName: 'first'
        }
    },
    methods: {
        handleClick() {

        },
        enterlogin() {

        }
    }
}
</script>

<style lang="scss">
    $small-font: 14px;
    $moddle-font: 16px;
    $max-font: 18px;
    $h-font: 30px;
    $box-width: 1200px;
    .h5{
        background: #eff2f5;
        padding-top: 55px;
        .h5-flex{
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 105;
            background: #fff;
        }
        .h5-header {
            width: 100%;
            position: relative;
            .header{
                
                background: #fff;
                z-index: 100;
                width: 100%;
                img{
                    margin-left: 106px;
                    margin-top: 10px;
                    width: 123px;
                    // height: 52px;
                }
                ul{
                    overflow: hidden;
                    margin-bottom: 0;
                    li{
                        float: left;
                        padding: 10px 25px;
                        font-size: $moddle-font;
                        font-family: PingFang SC;
                        font-weight: 500;
                        color: rgba(0,0,0,.65);
                        line-height: 35px;
                        cursor: pointer;
                        &:hover{ 
                            background: #008AFF;
                            color: #fff; 
                        }
                    }
                    .active{
                        background: #008AFF;
                        color: #fff; 
                    }
                }
                .right{
                    text-align: right;
                    .login{
                        display: inline-block;
                        width: 108px;
                        
                        background: #fff;
                        border-radius: 4px;
                        text-align: center;
                        font-size: $small-font;
                        font-family: PingFang SC;
                        font-weight: 500;
                        color: #008AFF;
                        line-height: 29px;
                        margin: 10px 112px 0 0;
                        padding: 2px 0;
                        cursor: pointer;
                    }
                }
            }
            .h5-bg{
                width: 100%;
                height: 127px;
                background-image: url('http://hnh5.scrm.host:10580/gallery141/201905/2206091680.png');
                // background-size: 100% 100%;
                background-position: center center;
                background-size:contain; 
            }
            .h5-title{
                width: 100%;
                height: 210px;
                text-align: center;
                color: #333;
                font-size: 32px;
                font-weight: 700;
                padding-top: 70px;
            }
        }
        .h5-body{
            position: relative;
            background: #eff2f5;
            .tab{
                
                background: #fff;
                text-align: center;
                height: 77px;
                .tab-body{
                    display: inline-block;
                    .el-tabs__nav-wrap::after{
                        background-color: transparent !important;
                    }
                    i{
                        font-size: 36px;
                    }
                    .tab-title{
                        font-size: $max-font; 
                        position: relative;
                        top: -10px;
                    }
                }
                .tab-box{
                    display: inline-block;
                    width: 204px;
                    padding: 0 75px;
                    height: 76px;
                    
                }
                
            }
            .tab-item{
                width: 1200px;
                margin: 40px auto 0;
                .first{
                    padding: 15px;
                    text-align: center;
                    color: #657ea8;
                    i{
                        font-size: 24px;
                    }
                    div{
                        font-size: $moddle-font;
                        font-weight: 700;
                    }
                }
                
                .mode{
                    margin-top: 25px;
                    .moban{
                        height: 333px;
                        border: 1px dashed #c1cadc;
                        padding: 140px 70px;
                    }
                    .addmoban{
                            height: 107px;
                            border: 1px dashed #c1cadc;
                            padding: 24px 70px;
                            margin-top: 10px;
                    }
                    .mode-card{
                        cursor: pointer;
                        position: relative;
                        margin-bottom: 50px;
                        .mode-bg{
                            
                            position: absolute;
                            display: flex;
                            background: rgba(0,0,0,.5);
                            top: 0;
                            left: 0;
                            right: 0;
                            z-index: 100;
                            height: 344px;
                            align-items: center;
                            justify-content: center;
                            opacity: 0;
                            transition: all .3s;
                            div{
                                text-align: center;
                            }
                            i{
                                font-weight: 400;
                                font-size: 28px;
                                
                            }
                            p{
                                margin-bottom: 0;
                                
                                font-size: $small-font;
                                font-family: PingFang SC;
                                font-weight: 400;
                               
                            }
                        }
                    
                        &:hover{
                            box-shadow: 0 2px 20px 0 rgba(0, 0, 0, .2);
                            .mode-bg{
                                opacity: 1;
                            }   
                        }
                        .mode-bg-item{
                            margin: 30px;
                            width: 65px;
                            height: 65px;
                            text-align: center;
                            background: #FFFFFF;
                            color: #657ea8;
                            padding: 10px;
                            border-radius: 50%;
                        }
                    }
                    span.title{
                        font-size: $moddle-font;
                        font-family: PingFang SC;
                        font-weight: 500;
                        color: #343434;
                    }
                    .time {
                        color: #949494;
                        font-family: PingFang SC;
                        font-size: $small-font;
                        margin: 5px 0;
                    }
                    
                    .bottom {
                        
                        line-height: 12px;
                    }

                    .button {
                        margin-top: 8px;
                        padding: 0;
                        float: right;
                    }

                    .image {
                        width: 100%;
                        height: 344px;
                        display: block;
                    }

                    .clearfix:before,
                    .clearfix:after {
                        display: table;
                        content: "";
                    }
                    
                    .clearfix:after {
                        clear: both;
                    }
                    .item-setting{
                        margin: 0 20px;
                        padding: 15px 0 15px;
                        text-align: center;
                        border-top: 1px solid #efefef; 
                    }
                }
            }
        }
        .h5-foot{
            position: relative;
            text-align: center;
            padding: 0 0 30px;
            background: #eff2f5;
        }
    }
</style>

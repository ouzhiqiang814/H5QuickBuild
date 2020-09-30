<template>
    <div class='main'>
        <!-- <el-container> -->
           
            <div class='main-header'>
                <div class="header">
                    <el-row>
                        <el-col :span="6"><img src="../../common/images/main/logo_01.png" alt=""></el-col>
                        <el-col :span="12">
                           <ul>
                               <li>模板首页</li>
                               <li>我的H5</li>
                               <li>素材库</li>
                           </ul>
                        </el-col>
                        <el-col :span="6" class='right'>
                            <div class='login' @click="enterlogin">登录</div>
                        </el-col>
                    </el-row>
                </div>
               
                <swiper class="swiper-container swi-con" ref="mySwiper" :options="swiperOptions">
                    <swiper-slide class="swiper-slide flat relative hidden" v-for="(page, i) in 4" :key="i">
                        <!-- <img height='615' src="../../common/images/main/banner.png" alt=""> -->
                        <div class='sw-img'></div>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>

            <div class='main-body'>
                <div class='bg'></div>
                <div class="body-box">
                    <div class="nav">
                        <el-row>
                            <el-col :span="8">
                                <div class="max-box">
                                    <div class="box-card one">
                                        <div class='card-head'>
                                            <img src="../../common/images/main/icon_01.png" alt="">
                                            <p>银行业务</p>
                                        </div>
                                        <div v-for="o in 9" :key="o" class="card-item">
                                            {{'列表内容 ' + o }}
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class="max-box">
                                    <div class="box-card two">
                                        <div class='card-head'>
                                            <img src="../../common/images/main/icon_02.png" alt="">
                                            <p>节假日</p>
                                        </div>
                                        <div v-for="o in 9" :key="o" class="card-item">
                                            {{'列表内容 ' + o }}
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class="max-box">
                                    <div class="box-card tree">
                                        <div class='card-head'>
                                            <img src="../../common/images/main/icon_03.png" alt="">
                                            <p>H5风格</p>
                                        </div>
                                        <div v-for="o in 4" :key="o" class="card-item">
                                            {{'列表内容 ' + o }}
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="content">
                        <div class='divider'>
                            <small>Template Display</small>
                            <h4>
                                模板展示
                            </h4>
                        </div>
                        <div class='btn'>
                            <span :class="btnActive == '0' ? 'active' : ''" @click="changebtn('0')"><i class="el-icon-picture-outline-round"></i> H5</span>
                            <span :class="btnActive == '1' ? 'active' : ''" @click="changebtn('1')"><i class="el-icon-picture-outline"></i> 长图文</span>
                        </div>
                        <div class='mode'>
                            <el-row gutter="30">
                                <el-col :span="6" v-for="(item,index) in 8" :key='index'>
                                     <el-card :body-style="{ padding: '0px' }" class="mode-card">
                                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                                        <div class="mode-bg">
                                            <div>
                                                <img src="../../common/images/main/icon_yl.png" alt="">
                                                <p>点击预览</p>
                                            </div>
                                        </div>
                                        <div style="padding: 14px;">
                                            <span class="title">小白卡（青春版）</span><el-button type="text" class="button">立即制作</el-button>
                                        </div>
                                    </el-card>
                                </el-col>
                                
                            </el-row>
                        </div>
                    </div>
                </div>
            </div>
            <div class='main-foot'>
                <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
                </el-pagination>

            </div>
            <!-- 登录弹框 -->
            <el-dialog
                :visible.sync="dialogVisible"
                width="50%"
                :before-close="handleClose">
                <el-row>
                    <el-col :span='12'>
                        <div class='login-left'>
                            <img class='logo' src="../../common/images/main/logo_02.png" alt="">
                            <br>
                            <img src="../../common/images/main/dl_pic.png" alt="">
                        </div>
                        
                    </el-col>
                    <el-col :span='12'>
                        <div class="login-right">
                            <h3>欢迎登录</h3>
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="账号" prop="pass">
                                    <el-input type="password" size='small' v-model="ruleForm.pass" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="密码" prop="checkPass">
                                    <el-input type="password" size='small'  v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-row>
                                    <el-col :span='18'>
                                         <el-form-item label="验证码" prop="age">
                                            <el-input size='small'  v-model.number="ruleForm.age"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span='6'>
                                        <div class='yanzheng'>
                                            <el-button size='small' type="primary" @click="onSubmit">验证码</el-button>
                                        </div>   
                                    </el-col>
                                </el-row>
                               
                                <el-form-item>
                                    <el-button class="submitbtn" size='small' type="primary" @click="onSubmit">登录</el-button>
                                </el-form-item>
                            </el-form>

                        </div>
                    </el-col>
                </el-row>
            </el-dialog>
    </div>
</template>

<script>
export default {
    data(){
        return{
            activeIndex: '1',
            btnActive: '', // 选中按钮
            dialogVisible: false, // 是否显示弹框
            ruleForm: {},
            rules: {}
        }
    },
    methods: {
        // 登录页面选中
        enterlogin() {
            this.dialogVisible = true
        },
        // 选中按钮
        changebtn(val) {
            if (val == this.btnActive) {
                this.btnActive = ''
                return
            }
            this.btnActive = val
        }
    }
}
</script>

<style lang="scss" >
    $small-font: 14px;
    $moddle-font: 16px;
    $max-font: 18px;
    $h-font: 30px;
    $box-width: 1200px;
    .main{
        // box-sizing: border-box;
        .el-header{
            position: relative;
        }
       
    }
    .main-header {
        width: 100%;
        position: relative;
        .header{
            position:absolute;
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
                li{
                    float: left;
                    margin-top: 15px;
                    margin-right: 50px;
                    font-size: $moddle-font;
                    font-family: PingFang SC;
                    font-weight: 500;
                    color: #FFFFFF;
                    line-height: 35px;
                    cursor: pointer;
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
        .sw-img{
            height: 615px;
            width: 100%;
            background-image: url('../../common/images/main/banner.png');
            background-position: center center;
            background-size:cover; 
        }
    }
    .main-body{
        position: relative;
        .bg{
            position: absolute;
            z-index: 101;
            top: -320px;
            width: 100%;
            height: 600px;
            background-image: url('../../common/images/main/bg_gd.png');
            // background-size: 100% 100%;
            background-position: center center;
            background-size:cover; 
        }
        .max-box{
            padding: $max-font;
        }
        .body-box{
            position: relative;
            top: -140px;
            width: $box-width;
            margin: 0 auto;
            z-index: 102;
        }
        
        .box-card{
            background-position: center center;
            background-size: 100% 100%;
            background-repeat: no-repeat;

            padding: 40px 55px;
            height: 280px;
            .card-head{
                text-align: center;
                img{
                    height: 62px;
                }
                p{
                    margin-top: 10px;
                    font-size: $max-font;
                    font-family: PingFang SC;
                    font-weight: 600;
                    color: #343434;
                }
            }
            .card-item{
                float: left;
                width: 33.3333333333%;
                font-size: $small-font;
                padding: 5px 0;
                font-family: PingFang SC;
                font-weight: 600;
                cursor: pointer;
                color: #6A788E;
                &:hover{
                    color: #008AFF;
                }
            }
        }
        .one{
            background-image: url('../../common/images/main/pic_01.png');
        }
        .two{
            background-image: url('../../common/images/main/pic_02.png');
        }
        .tree{
            background-image: url('../../common/images/main/pic_03.png');
        }
        .content{
            margin-top: 30px;
            padding: 0 30px;
            .divider{
                text-align: center;
                small{
                    font-size: $moddle-font;
                    font-family: PingFang SC;
                    font-weight: 600;
                    color: #CCD0D6;
                }
                h4{               
                    font-size: $h-font;
                    font-family: PingFang SC;
                    font-weight: 600;
                    color: #343434;
                }
            }
            .btn{
                img{
                    height: 20px;
                    vertical-align: text-top;
                }
                
                span{
                    display: inline-block;
                    text-align: center;
                    width: 120px;
                    height: 34px;
                    background: #FFFFFF;
                    border: 1px solid #D1D1D1;
                    border-radius: 4px;
                    line-height: 32px;
                    font-size: 14px;
                    font-family: PingFang SC;
                    font-weight: 500;
                    color: #9A9A9A;
                    margin-right: 28px;
                    cursor: pointer;
                    &:hover{
                        border: 1px solid #008AFF;
                        color: #008AFF;
                    }
                }
                .active{
                    border: 1px solid #008AFF;
                    color: #008AFF;
                }
            }
            .mode{
                margin-top: 25px;
                .mode-card{
                    cursor: pointer;
                    position: relative;
                    margin-bottom: 30px;
                    .mode-bg{
                        
                        position: absolute;
                        display: flex;
                        background: rgba(0,0,0,.5);
                        top: 0;
                        left: 0;
                        right: 0;
                        z-index: 100;
                        height: 380px;
                        align-items: center;
                        justify-content: center;
                        opacity: 0;
                        transition: all .3s;
                        div{
                            text-align: center;
                        }
                        p{
                            margin-top: 10px;
                            font-size: $moddle-font;
                            font-family: PingFang SC;
                            font-weight: 400;
                            color: #FFFFFF;
                        }
                    }
                   
                    &:hover{
                        .mode-bg{
                            opacity: 1;
                        }
                    }
                }
                span.title{
                    font-size: $max-font;
                    font-family: PingFang SC;
                    font-weight: 500;
                    color: #343434;
                }
                time {
                    font-size: 13px;
                    color: #999;
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
                    height: 380px;
                    display: block;
                }

                .clearfix:before,
                .clearfix:after {
                    display: table;
                    content: "";
                }
                
                .clearfix:after {
                    clear: both
                }
            }
        }
    }
    .main-foot{
        position: relative;
        text-align: center;
        top: -100px;
    }
    .login-left{
        padding: 20px;
        .logo{
            position: relative;
            top: -46px;
        }
    }
    .login-right{
        position: relative;
        padding: 20px;
        .yanzheng{
            padding: 3px 0 0 10px;
        }
        .submitbtn{
            width: 70%;
        }
        h3{
            position: relative;
            top: -30px;
            margin-left: 30px;
            font-size: 28px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #343434;
        }
    }
</style>

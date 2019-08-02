<template>
  <div class="footer clearfix">
    <div class="footer-fl fl">
      <div class="fl-top">
        <span>关于我们</span>
        <span>圆通官网</span>
        <span>开放平台技术交流QQ群：782393227</span>
      </div>
      <div class="fl-bottom">圆通科技版权所有2015-2020 圆通速递版权所有 All Right Reserved</div>
    </div>
    <div class="footer-rt fr">
      <div class="ft-bottom">联系方式：95554 / 021-69777888</div>
      <div class="bottom-icon">
        <ul class="qr-wrapper">
          <li>
            <div class="icon-img alipay"></div>
            <div class="pop-modal pop-modal-top">
              <img src="../../assets/images/qr-alipay.3e39fdf.jpg" alt />
            </div>
          </li>
          <li>
            <div class="icon-img weibo"></div>
            <div class></div>
          </li>
          <li>
            <div class="icon-img wechat"></div>
            <div class="pop-modal pop-modal-top">
              <img src="../../assets/images/qr-wechat.2f83b89.jpg" alt />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'bottom-footer',
  props: {

  },
  data() {
    return {

    };
  },
  methods: {

  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../styles/variables";
.footer {
  height: 184px;
  .footer-fl,
  .footer-rt {
    margin-top: 60px;
    font-size: 14px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(89, 80, 98, 1);
  }
  .footer-rt {
    text-align: right;
    .bottom-icon .icon-img {
      width: 24px;
      height: 24px;
      margin-left: 32px;
    }
    .bottom-icon .icon-img.wechat {
      background: url('../../assets/images/icon_wechat@2x.png') no-repeat;
      background-size: 24px 24px;
    }
    .bottom-icon .icon-img.wechat:hover {
      background: url('../../assets/images/icon_wechat_hover@2x.png') no-repeat;
      background-size: 24px 24px;
    }

     .bottom-icon .icon-img.weibo {
      background: url('../../assets/images/icon_weibo@2x.png') no-repeat;
      background-size: 24px 24px;
    }
    .bottom-icon .icon-img.weibo:hover {
      background: url('../../assets/images/icon_weibo_hover@2x.png') no-repeat;
      background-size: 24px 24px;
    }

     .bottom-icon .icon-img.alipay {
      background: url('../../assets/images/icon_alipay@2x.png') no-repeat;
      background-size: 24px 24px;
    }
    .bottom-icon .icon-img.alipay:hover {
      background: url('../../assets/images/icon_alipay_hover@2x.png') no-repeat;
      background-size: 24px 24px;
    }
  }
  .ft-bottom {
    margin-bottom: 24px;
  }
  .bottom-icon {
    .qr-wrapper {
      li {
        float: right;
        position: relative;
      }
      li .icon-img:hover {
        cursor: pointer;
      }
      li:hover .pop-modal {
        display: block;
        cursor: pointer;
      }
      .pop-modal {
        z-index: 1000;
        position: absolute;
        left: 81%;
        margin-right: 50%;
        background-color: #fff;
        font-size: 12px;
        color: #636363;
        border-radius: 8px;
        cursor: default;
        -webkit-box-shadow: 1px 0 2px 2px rgba(0, 0, 0, 0.1);
        box-shadow: 1px 0 2px 2px rgba(0, 0, 0, 0.1);
        padding: 10px 18px 4px;
        margin-left: -64px;
        display: none;
        img {
          width: 82px;
          height: 82px;
          display: block;
          margin-bottom: 4px;
        }
      }
      .pop-modal:after {
        content: "";
        display: block;
        width: 0;
        height: 0;
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        border-color: transparent;
        border-style: solid;
      }
      .pop-modal-top {
        bottom: 118%;
        margin-bottom: 14px;
      }
      .pop-modal-top:after {
        bottom: -14px;
        border-width: 15px 10px 0;
        border-top-color: #ffffff;
      }
    }
  }
  .fl-top {
    height: 20px;
    line-height: 20px;
    margin-bottom: 24px;
    span {
      margin-right: 44px;
    }
  }
}
</style>

<template>
  <div class="login-privacy-policy">
    <div class="main">
      <div class="agree">
        <div class="agree-title">隐私条款</div>
        <div class="agree-items">
          <div class="agree-item">
            <div class="p">
              在使用服务前，请您务必仔细阅读并透彻理解本协议全部内容，在确认充分理解并同意后使用服务。您开始使用服务，即表示您已经同意本隐私政策。
            </div>
          </div>
          <div class="agree-item">
            <div class="p">
              1、保护用户个人信息是一项基本原则，我们将会采取合理的措施保护用户的个人信息。除法律法规规定的情形外，未经用户许可我们不会向第三方公开、透漏个人信息。软件对相关信息采用专业加密存储与传输方式，保障用户个人信息安全，如果您选择同意使用服务，
              即表示您认可并接受服务条款及其可能随时更新的内容。
            </div>
            <div class="p">
              2、我们将会使用您的以下功能：WIFI网络、蜂窝通信网络、手机基站数据、位置信息，如果您禁止软件使用以上相关服务和功能，您将自行承担不能获得或享用相应服务的后果。
            </div>
            <div class="p">
              3、为了能够让定位服务更精确，可能会收集并处理有关您实际所在位置信息（例如移动设备发送的GPS信号），WI-FI接入点和
              基站位置信息。我们将对上述信息实施技术保护措施，以最大程度保护这些信息不被第三方非法获得，同时，您可以自行选择拒绝我们基于技术必要性
              收集的这些信息，并自行承担不能获得或享用相应服务的后果。
            </div>
            <div class="p">
              4、在您使用我们的产品或服务的过程中，我们可能：需要您提供个人信息，如姓名、身份证号、电话号码、联系地址等以及注册或申请服务时需要
              的其它类似个人信息；您对我们的产品和服务使用即表明您同意我们对这些信息的收集和合理使用。您可以自行选择拒绝、放弃使用相关产品或服务。
            </div>
            <div class="p">
              5、由于您的自身行为或不可抗力等情形，导致上述可能涉及您隐私或您认为是私人信息的内容发生被泄露、批漏，或被第三方获取、使用、转让等情形的，均由您自行承担不利后果，我们对此不承担任何责任。
            </div>
            <div class="p">6、我们拥有对上述条款的最终解释权。</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.login-privacy-policy {
  background-color: #fff;
  padding: $spacing;
  color: $color-text;
  font-size: 32rpx;
  line-height: 1.4;
  .agree-title {
    text-align: center;
    margin-bottom: $spacing;
    font-size: 36rpx;
    font-weight: 700;
    color: $color-title;
  }
  .agree-item {
    margin-bottom: 20rpx;
    .p {
      margin-bottom: 12rpx;
      text-indent: 2em;
    }
  }
}
</style>

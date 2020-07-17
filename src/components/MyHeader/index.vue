<template>
  <div class="my-header">
    <header>
      <div class="content-wrap w flex justify-between align-items">
        <div class="logo flex align-items justify-center">
          <span>LOGO</span>
        </div>
        <ul class="flex right-wrap align-items justify-center">
          <li>
            <i class="iconfont icon-shezhi" style="font-size: 20px;"></i>
          </li>
          <li>
            <i class="iconfont icon-lingsheng" style="font-size: 20px;"></i>
          </li>
          <li class="flex align-items justify-center">
            <span>Log out</span>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Myheader",
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.my-header header {
  background-color: #fff;
  font-size: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  .content-wrap {
    height: 100px;
    .logo {
      cursor: pointer;
      width: 105px;
      height: 30px;
      color: #fff;
      background: #f92525;
    }
    .right-wrap > li {
      cursor: pointer;
    }
    .right-wrap > li:nth-child(2) {
      margin: 0 25px 0 10px;
    }
    .right-wrap > li:nth-child(-n + 2) {
      color: #676a6c;
    }
    .right-wrap > li:nth-child(3) {
      height: 42px;
      width: 110px;
      background: #f92525;
      color: #fff;
    }
  }
}
</style>
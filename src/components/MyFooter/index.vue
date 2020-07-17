<template>
  <footer>
    <div class="w flex">
      <div class="logo flex align-items justify-center">
        <span>LOGO</span>
      </div>
      <!-- 链接 -->
      <div class="link-wrap flex">
        <ul class="link-item">
          <li>FSDFEFFW</li>
          <li>CHANELS</li>
          <li>OVERLEW</li>
          <li>KDFHKDSFAL</li>
        </ul>
        <ul class="link-item">
          <li>DFSDFAS</li>
          <li>new</li>
          <li>SDFSDF</li>
          <li>FSDF</li>
        </ul>
        <ul class="link-item">
          <li>DFASDFD</li>
          <li>FDFASDF</li>
          <li>FDFSDFS</li>
          <li>DFASDFSAD</li>
        </ul>
        <ul class="link-item">
          <li>GFFEFWF</li>
          <li>EREREF</li>
          <li>VDVSD</li>
          <li>GEWEDF</li>
        </ul>
        <ul class="link-item">
          <li>GFFEFWF</li>
          <li>EREREF</li>
          <li>VDVSD</li>
          <li>GEWEDF</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
footer {
  padding-top: 80px;
  margin-top: 53px;
  height: 250px;
  background: #202124;
  .logo {
    margin-right: 80px;
    cursor: pointer;
    width: 105px;
    height: 30px;
    color: #fff;
    background: #f92525;
  }
  .link-wrap {
    color: #fff;
    font-size: 13px;
    .link-item{
      cursor: pointer;
      margin-right: 80px;
      >li{
        height: 30px;
      }
    }
  }
}
</style>
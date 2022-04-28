<template>
  <div class="footer-container">
    <div class="content">
      <div class="logo"></div>
      <div class="info">
        <div class="about">
          <h2 class="header">About us</h2>
          <p>Company</p>
          <p>Security</p>
          <p>Address</p>
        </div>
        <div class="contact">
          <h2 class="header">Contact us</h2>
          <p>Email</p>
          <p>WhatsApp</p>
          <p>Slack</p>
        </div>
        <div class="support">
          <h2 class="header">Support</h2>
          <p>Email</p>
        </div>
      </div>
    </div>
    <div class="courtesy">
      <p>All rights reserved ajo cc 2022</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooteR',
}
</script>

<style scoped>
.footer-container {
  background-color: #fdf86bbd;
}
.content {
  border-bottom: 1px solid rgb(192, 192, 192, 0.3);
  margin: 0 4rem 0 4rem;
  padding: 68px 0 86px 0;
  display: flex;
  justify-content: center;
  align-content: center;
  column-gap: 433px;
}
.logo {
  background-image: url(~assets/images/bird-logo.svg);
  width: 131px;
  height: 60.97px;
}
.info {
  display: flex;
  column-gap: 50px;
}
.courtesy {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 23px;
  padding-bottom: 13px;
  font-size: 14px;
  line-height: 36px;
  font-family: 'Cereal Light';
  font-weight: 300;
}
.header {
  font-size: 18px;
  line-height: 36px;
  margin-bottom: 1rem;
  font-family: 'Cereal Bold';
  font-family: 700;
}
.info p {
  margin-bottom: 0.5rem;
  font-size: 15px;
  line-height: 36px;
  font-family: 'Cereal Light';
  font-weight: 300;
}
</style>

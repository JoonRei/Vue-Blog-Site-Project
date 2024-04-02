<template>
  <div class="homepage">
    <div class="div">
      <div class="text-wrapper">BLOG.</div>
      <div class="text-wrapper-2">HEY THERE,</div>
      <p class="i-AM-JUNREY">
        <span class="span">I AM </span>
        <span class="text-wrapper-3">JUNREY MANRIQUEZ</span>
      </p>
      <div class="flexcontainer">
        <p class="text">
          <span class="text-wrapper-4">
            Welcome to my site! <br />
          </span>
        </p>
        <p class="text" style="width: max-content;">
          <span class="text-wrapper-4">Join me on this journey as I explore the world and <br> connect with fellow
            adventurers like you.</span>
        </p>
      </div>
      <nav class="navigation">
        <a href="#" class="nav-link-active">Home</a>
        <a href="#" class="nav-link">About</a>
        <a href="#" class="nav-link">Gallery</a>
        <a href="#" class="nav-link">Events</a>
        <a href="#" class="nav-link">Hobbies</a>
      </nav>
      <div class="me">
        <img class="clip-path-group" alt="Clip path group"
          src="https://c.animaapp.com/DNcWC3Ue/img/clip-path-group.png" />
      </div>
      <div class="overlap">
        <div class="text-wrapper-10">ABOUT ME</div>
      </div>
      <div class="overlap-2">
        <img class="facebook" alt="Facebook" src="https://c.animaapp.com/DNcWC3Ue/img/facebook@2x.png" />
        <img class="instagram-circle" alt="Instagram circle"
          src="https://c.animaapp.com/DNcWC3Ue/img/instagram-circle@2x.png" />
        <img class="linkedin-circled" alt="Linkedin circled"
          src="https://c.animaapp.com/DNcWC3Ue/img/linkedin-circled@2x.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage",
};
</script>

<style>
.homepage {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.homepage .div {
  background-color: #ffffff;
  max-width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: 1600px;
}

.homepage .text-wrapper {
  color: #000000;
  font-family: "Inter", Helvetica;
  font-size: 40px;
  font-weight: 400;
  left: 102px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 47px;
  white-space: nowrap;
}

.homepage .text-wrapper-2 {
  color: #000000;
  font-family: "Inter", Helvetica;
  font-size: 45px;
  font-weight: 700;
  left: 102px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 266px;
  white-space: nowrap;
}

.homepage .i-AM-JUNREY {
  color: transparent;
  font-family: "Inter", Helvetica;
  font-size: 45px;
  font-weight: 700;
  left: 102px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 326px;
  white-space: nowrap;
}

.homepage .span {
  color: #000000;
}

.homepage .text-wrapper-3 {
  color: #2675be;
}

.homepage .flexcontainer {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 58px;
  left: 102px;
  position: absolute;
  top: 400px;
  width: 275px;
}

.homepage .text {
  align-self: stretch;
  color: #000000;
  font-family: "Inter", Helvetica;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
}

.homepage .text-wrapper-4 {
  color: #000000;
  font-family: "Inter", Helvetica;
  font-size: 20px;
  font-weight: 100;
  letter-spacing: 0;
}

.homepage .navigation {
  display: flex;
  gap: 50px;
  position: absolute;
  top: 65px;
  left: 980px;
}

.homepage .nav-link {
  color: #000000;
  font-family: "Inter", Helvetica;
  font-size: 20px;
  font-weight: 400;
  text-decoration: none;
}
.nav-link-active {
  color: #2675BE;
  font-family: "Inter", Helvetica;
  font-size: 20px;
  font-weight: 400;
  text-decoration: none;

}

.homepage .me {
  position: absolute;
  top: 175px;
  right: 0;
}

.homepage .clip-path-group {
  height: 850px;
  width: 720px;
}

.homepage .overlap {
  background-color: #2675be;
  border-radius: 50px;
  height: 50px;
  left: 102px;
  position: absolute;
  top: 520px;
  width: 181px;
}

.homepage .text-wrapper-10 {
  color: #ffffff;
  font-family: "Inter", Helvetica;
  font-size: 20px;
  font-weight: 700;
  left: 37px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 12px;
  white-space: nowrap;
  cursor: pointer;
}

.homepage .overlap-2 {
  height: 46px;
  left: 94px;
  position: absolute;
  top: 918px;
  width: 131px;
}

.homepage .facebook {
  height: 46px;
  left: 0;
  position: absolute;
  top: 0;
  width: 66px;
}

.homepage .instagram-circle {
  height: 46px;
  left: 63px;
  position: absolute;
  top: 0;
  width: 68px;
}

.homepage .linkedin-circled {
  height: 46px;
  left: 130px;
  position: absolute;
  top: 0px;
  width: 66px;
}
</style>

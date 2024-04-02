<template>
  <div class="gallery-page">
    <div class="div">
      <div class="text-wrapper">BLOG.</div>
      <nav class="navigation">
        <a href="#" class="nav-link">Home</a>
        <a href="#" class="nav-link">About</a>
        <a href="#" class="nav-link-active">Gallery</a>
        <a href="#" class="nav-link">Events</a>
        <a href="#" class="nav-link">Hobbies</a>
      </nav>
      <p class="p">Step into my Gallery Page! Discover captivating moments.</p>
      <div class="text-wrapper-7">GALLERY</div>
      <img class="element" alt="Element" src="https://c.animaapp.com/fBBs2Neq/img/134-1@2x.png" />
        <img class="img" alt="Element" src="https://c.animaapp.com/fBBs2Neq/img/184-1@2x.png" />
        <img class="element-2" alt="Element" src="https://c.animaapp.com/fBBs2Neq/img/206-1@2x.png" />
        <img class="element-3" alt="Element" src="https://c.animaapp.com/fBBs2Neq/img/1000000141-1@2x.png" />
        <img class="element-4" alt="Element" src="https://c.animaapp.com/fBBs2Neq/img/1000000155-1@2x.png" />
        <img class="element-5" alt="Element" src="https://c.animaapp.com/fBBs2Neq/img/1000000197-1@2x.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleryPage",
};
</script>

<style>
.gallery-page {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.gallery-page .div {
  background-color: #ffffff;
  height: 1223px;
  position: relative;
  width: 1440px;
}

.gallery-page .text-wrapper {
  color: #000000;
  font-family: "Inter", Helvetica;
  font-size: 40px;
  font-weight: 600;
  left: 102px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 47px;
  white-space: nowrap;
}

.gallery-page .navigation {
  display: flex;
  gap: 50px;
  position: absolute;
  top: 59px;
  right: 102px;
}

.gallery-page .nav-link {
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

.gallery-page .p {
  color: #000000a6;
  font-family: "Inter", Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: 102px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 253px;
  white-space: nowrap;
}

.gallery-page .text-wrapper-7 {
  color: #000000a6;
  font-family: "Inter", Helvetica;
  font-size: 32px;
  font-weight: 500;
  left: 102px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 199px;
  width: 143px;
}

.gallery-page .element {
  height: 311px;
  left: 147px;
  object-fit: cover;
  position: absolute;
  top: 363px;
  width: 330px;
}

.gallery-page .img {
  height: 311px;
  left: 563px;
  object-fit: cover;
  position: absolute;
  top: 363px;
  width: 330px;
}

.gallery-page .element-2 {
  height: 311px;
  left: 979px;
  position: absolute;
  top: 363px;
  width: 330px;
}

.gallery-page .element-3 {
  height: 311px;
  left: 142px;
  object-fit: cover;
  position: absolute;
  top: 784px;
  width: 330px;
}

.gallery-page .element-4 {
  height: 314px;
  left: 558px;
  object-fit: cover;
  position: absolute;
  top: 784px;
  width: 330px;
}

.gallery-page .element-5 {
  height: 314px;
  left: 974px;
  object-fit: cover;
  position: absolute;
  top: 784px;
  width: 330px;
}

</style>

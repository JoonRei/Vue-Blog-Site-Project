<template>
  <main class="main-container">
    <header class="header">
      <h1 class="logo">BLOG.</h1>
      <nav class="navigation">
        <a href="#" class="nav-link">Home</a>
        <a href="#" class="nav-link-active">About</a>
        <a href="#" class="nav-link">Gallery</a>
        <a href="#" class="nav-link">Events</a>
        <a href="#" class="nav-link">Hobbies</a>
      </nav>
    </header>
    <section class="about-section">
      <h2 class="section-title">ABOUT ME</h2>
      <div class="about-content">
        <div class="vertical-line"></div>
        <p class="about-text">
          Hi there! I'm Junrey. I love trying new things and having fun. Whether it's exploring nature, traveling to new places, or taking photos, I'm always up for an adventure.
          <br /><br />
          I enjoy meeting new people and being kind to others. My goal is to make the world a better place and enjoy every moment along the way.
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.main-container {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 69px 60px;
  flex-direction: column;
}

@media (max-width: 991px) {
  .main-container {
    padding: 0 20px;
  }
}

.header {
  display: flex;
  width: 100%;
  max-width: 1195px;
  gap: 20px;
  color: #000;
  white-space: nowrap;
  align-items: center;
}

@media (max-width: 991px) {
  .header {
    max-width: 100%;
    flex-wrap: wrap;
    white-space: initial;
  }
}

.logo {
  flex-grow: 1;
  font: 600 40px Inter, sans-serif;
}

.navigation {
  display: flex;
  gap: 50px;
  position: absolute;
  top: 65px;
  left: 980px;
}

@media (max-width: 991px) {
  .navigation {
    flex-wrap: wrap;
    white-space: initial;
  }
}

.nav-link {
  font-family: "Inter", Helvetica;
  font-size: 20px;
  font-weight: 400;
  text-decoration: none;
  color: #000000;
}

.nav-link-active {
  color: #2675BE;
  font-family: "Inter", Helvetica;
  font-size: 20px;
  font-weight: 400;
  text-decoration: none;
}

.about-section {
  align-self: center;
  display: flex;
  margin-top: 240px;
  width: 100%;
  max-width: 1019px;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.65);
}

@media (max-width: 991px) {
  .about-section {
    max-width: 100%;
    margin-top: 40px;
  }
}

.section-title {
  font: 500 32px Inter, sans-serif;
}

@media (max-width: 991px) {
  .section-title {
    max-width: 100%;
  }
}

.about-content {
  display: flex;
  margin-top: 46px;
  gap: 20px;
  font-size: 36px;
  font-weight: 400;
}

@media (max-width: 991px) {
  .about-content {
    flex-wrap: wrap;
    margin-top: 40px;
  }
}

.vertical-line {
  box-shadow: 8px 8px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #2675be;
  align-self: start;
  width: 11px;
  height: 250px;
}

@media (max-width: 991px) {
  .vertical-line {
    display: none;
  }
}

.about-text {
  font-family: Inter, sans-serif;
  flex-grow: 1;
}

@media (max-width: 991px) {
  .about-text {
    max-width: 100%;
  }
}
</style>
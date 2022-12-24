<script setup lang="ts">
const TITLE = "Micro Frontend";
const DESCRIPTION = "Micro Frontend with Vite";
</script>

<template>
  <div class="container">
    <div class="notification is-primary">
      This container is <strong>centered</strong> on desktop and larger
      viewports.
    </div>
    <section class="hero is-medium is-link">
      <div class="hero-body">
        <p class="title">{{ TITLE }}</p>
        <p class="subtitle">{{ DESCRIPTION }}</p>
      </div>
    </section>
    <section class="section px-0">
      <div class="cards-wrapper">
        <div class="card" v-for="_ of 8">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="https://bulma.io/images/placeholders/1280x960.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img
                    src="https://bulma.io/images/placeholders/96x96.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">John Smith</p>
                <p class="subtitle is-6">@johnsmith</p>
              </div>
            </div>

            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
              <a href="#">#responsive</a>
              <br />
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.cards-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 32px;
}
</style>

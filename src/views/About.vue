<template>
  <div class="logo">
      <img src="../../src/assets/images/logo.png" alt="Engage"/>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link> |
      <router-link :to="{ name: 'Animals' }">Animals</router-link>
  </div>
  <div class="about">
    <h1>This is an about page</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa massa, ullamcorper a eros vel, venenatis pellentesque lectus. Aliquam pharetra dui in ipsum volutpat malesuada. Donec ut enim iaculis, blandit ipsum ac, aliquam arcu. Nulla porta eros enim, sed pellentesque neque molestie sed. Quisque fringilla arcu nec felis ultricies aliquet. Morbi fermentum leo justo, a laoreet mi facilisis nec. In in nunc sed nulla molestie pretium. Proin varius varius aliquet. Vestibulum ac semper erat. Nulla odio magna, bibendum vel velit in, porta tristique sapien. Integer at ex vel metus accumsan mollis. Maecenas vulputate dapibus enim ut ultrices. Nunc pellentesque feugiat lectus, quis interdum est sollicitudin sit amet.
    </p>
  </div>
</template>

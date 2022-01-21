<template>
  <div class="row">
    <h1>Albums list</h1>
    <div class="row">
      <div class="col-md-3">
        <div class="form-inline">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="search"
        />
        <button
          class="search-button"
          @click="filterAlbum"
        >
          Search
        </button>
        </div>
      </div>
    </div>
    <div class="col-md-6" v-for="album in albums" :key="album.collectionId">
      <div class="thumbnail">
        <img :src="album.albumImage" alt="image" />
        <div class="caption">
          <h3>{{ album.collectionName }}</h3>
          <p class="font-weight-bold">Price {{ album.price }}</p>
        </div>
      </div>
    </div>
  </div>


  
</template>

<script>
import axios from "axios";
export default {
  name: "ReaderBases",
  data() {
    return {
      albums: [],
      search: "",
    };
  },
  mounted() {
    this.readSongs();
  },
  methods: {
    async readSongs() {
      const res = await axios.get(`http://localhost:3000/albums/`);
      this.albums = res.data;
    },
    async filterAlbum() {
      const res = await axios.get(
        `http://localhost:3000/albums/${this.search}`
      );
      this.albums = res.data;
    },
  },
};
</script>

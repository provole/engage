<template>
  <div class="logo">
     <img :src="require(`../../assets/images/logo.png`)" >
  </div>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Animals' }">Animals</router-link>
  </div>


 <router-view />
 <div class="">
        <div v-for="animal in animals" :key="animal.id" class="item_list">
            <router-link :to="{ name: 'AnimalDetails', params: {id: animal.id }}">
                <div class="item_wrapper">
                    <div class="item_list--thumb">
                        <img :src="require(`../../assets/images/${animal.img}`)" >
                    </div>
                    <div class="item_list--info">
                        <div class="item_list--wrapper">
                            <p class="item_list--name">{{animal.title}}</p>
                            <p class="item_list--breed">{{animal.details}}</p>
                            <p class="item_list--age">{{animal.age}} old</p>
                            <p class="item_list--location">{{animal.location}}</p>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            animals: []
        }
    },
    mounted(){
        fetch('http://localhost:3000/animals')
            .then(res => res.json())
            .then(data => this.animals = data)
            .catch(err => console.log(err.message))
    }
}
</script>
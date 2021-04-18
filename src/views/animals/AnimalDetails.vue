<template>
    <div v-if="animal">
        <div class="animal_detail">
            <div class="btn-back">
                <button @click="back" class=""></button>
            </div>
            <div class="btn-enquire">
                <a href="#" class="btn btn-red">Enquire</a>
            </div>
            <div class="animal_detail--thumb">
                <img :src="require(`../../assets/images/${animal.img}`)" >
            </div>
            <div class="animal_detail--wrapper">
                <div class="animal-description">
                    <h1>{{ animal.title }}</h1>
                    <p>{{ animal.details }} / <span>{{ animal.age }} old</span></p>
                </div>
                <div class="animal-location">
                    <p class="item_list--location">{{animal.location}}</p>
                </div>
            </div>
            <div class="animal_detail--owner">
                <div class="owner-description">
                    <div class="owner-thumb">
                       <img src="../../../src/assets/images/wb.png" alt="Engage"/>
                    </div>
                    <div class="owner-name">
                        <p>
                            Will Blackmore <br />
                            <span>Owner</span>
                        </p>
                    </div>
                </div>
                <div class="date-posted">
                    <p>
                        14th April
                    </p>
                </div>
            </div>
            <div class="animal_detail--description">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quas quaerat. Voluptatum saepe quae cum voluptatem vel possimus, cupiditate consequuntur soluta adipisci, explicabo molestiae! Quia modi repellat obcaecati quod ullam temporibus reprehenderit, unde, natus, eveniet consequuntur fugit dolorum? Rerum ad, soluta vitae vero, possimus quisquam repellendus nobis
                </p>
            </div>
            
        </div>
        
        
    </div>
    
</template>
<script>

export default {
    props: ['id'],
    methods: {
        back() {
            this.$router.go(-1)
        }
    },
    data() {
        return {
            animal: null
        }
    },
    mounted(){
        fetch('http://localhost:3000/animals/' + this.id)
            .then(res => res.json())
            .then(data => this.animal = data)
            .catch(err => console.log(err.message))
    }
}


</script>
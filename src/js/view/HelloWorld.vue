<template>
    <div id="app">
        <template v-if="! is_created">
            <input v-model="name_1" placeholder="Character 1"/>
            <input v-model="name_2" placeholder="Character 2"/>
            <button @click="createCharacters()">
                Create Characters
            </button>
        </template>
        <template v-else>
            <p>
                Character 1: {{ char_1.name }} => HP: {{ char_1.hit_points }}
            </p>
            <p>
                Character 2: {{ char_2.name }} => HP: {{ char_2.hit_points }}
            </p>
            <p>Turn: {{ turn.name }}</p>
        </template>
        <div v-if="death !== null">
            {{ death.name }} has died.
        </div>
    </div>
</template>

<script>
    import Character from '../game/character';

    export default {
        name: 'HelloWorld',
        data() {
            return {
                is_created: false,
                name_1: null,
                name_2: null,
                char_1: null,
                char_2: null,
                turn: null,
                death: null,
            }
        },
        watch: {
            is_created() {
                if(this.is_created) {
                    if(this.char_1.init() > this.char_2.init()) {
                        this.turn = this.char_1;
                    }
                    else {
                        this.turn = this.char_2;
                    }
                }
            },
        },
        methods: {
            createCharacters(){
                this.char_1 = new Character({name: this.name_1});
                this.char_2 = new Character({name: this.name_2});
                this.is_created = true;
            }
        },
        mounted() {
            EventBus.listen('defeated', (character) => {
                this.death = character;
            })
        }
    }
</script>
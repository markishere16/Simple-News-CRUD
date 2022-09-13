<template>
<div>

    <b-container style="width:1000px">

        <b-row>
            <b-col class="px-0">
                <b-button v-b-toggle.collapse-1 variant="success" @click="editHandler()">
                    <b-icon :icon="toggleEdit == true ? 'save' : 'pencil'"></b-icon>
                    {{toggleEdit == true ? 'Save' : 'Edit'}}

                </b-button>
            </b-col>
            <b-col>
                <div class="text-end">
                    <b-button v-b-toggle.collapse-1 variant="primary" @click="$emit('closePreview')">
                        <b-icon icon="arrow-left"></b-icon>
                        Go back
                    </b-button>
                </div>
            </b-col>
        </b-row>

        <hr>
        <div v-if="!toggleEdit">
            <b-row class="text-center m-auto" style="width:80%">
                <h2>{{news.title}}</h2>
                <p>{{moment(new Date(news.date)).format("MMMM D, YYYY, hh:mm a")}}</p>
            </b-row>

            <b-row class="mt-3">
                <div v-html="news.content"></div>
            </b-row>

        </div>

        <b-row v-if="toggleEdit">
            <formNews :news="news" :type="'edit'" v-on:closeEdit="toggleEdit = false" />
        </b-row>

    </b-container>

</div>
</template>

<script>
import formNews from './formNews.vue'
import moment from 'moment';
export default {
    props: ['news'],
    data() {
        return {
            toggleEdit: false,
        }
    },
    components: {
        formNews
    },
    methods: {
        moment() {
            return moment();
        },
        editHandler() {
            this.toggleEdit = true;
        
            if(this.toggleEdit == true) {
                document.getElementById('saveNews').click();
                this.toggleEdit = false;
            }
          
        }

    }
}
</script>

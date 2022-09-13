<template>
<div>
    <b-card>
        <b-form @submit.prevent="submitForm">
            <b-form-group label="Title">
                <b-form-input v-model="form.title" type="text" placeholder="Enter News title" required></b-form-input>
            </b-form-group>

            <b-form-group label="Content" class="my-2">
                <vue-editor v-model="form.content"></vue-editor>
            </b-form-group>

            <b-form-group label="Date">
                <b-form-input v-model="form.date" type="datetime-local" placeholder="Enter News Content" required></b-form-input>
            </b-form-group>

            <div class="text-end mt-3">
                <b-button type="submit" variant="primary" id="saveNews">
                    <b-icon icon="save"></b-icon>
                    Save
                </b-button>
            </div>
        </b-form>
    </b-card>

</div>
</template>

<script>
import {
    VueEditor
} from "vue2-editor";

import moment from 'moment';
export default {
    props: ['type', 'news'],
    data() {
        return {
            form: {
                id: null,
                title: "",
                content: "",
                date:   moment(new Date()).format("YYYY-MM-DD hh:mm")
            },
        }
    },
    mounted() {
        if (this.type == 'edit') {
            this.form = this.news
        } else {
            this.resetForm();
        }
    },
    components: {
        VueEditor,
    },
    methods: {

        resetForm() {
            this.form = {
                id: null,
                title: "",
                content: "",
                date:   moment(new Date()).format("YYYY-MM-DD hh:mm")
            };
        },
        submitForm() {
            if (this.type == 'edit') {
                this.$store.dispatch('updateNews',{vm : this, news:  this.form});
                this.$emit('closeEdit')
              
            } else {
                let newsList = this.$store.getters.get_news;
                this.form.id = newsList.length == 0 ? 1 : newsList[newsList.length - 1].id++;
                this.$store.dispatch('insertNews',{vm : this, news:  this.form});
                this.resetForm();
                document.getElementById('create_news').click();
            }
            this.$emit('closeModal')
        }
    },
}
</script>

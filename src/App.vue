<template>
<div>
    <b-navbar type="dark" variant="success">
        <b-container fluid class="d-flex justify-content-space-between flex-wrap" >
            <span class="navbar-brand "> <b>News Application <br> by: Mark Joshua Elimar R. Mandigma</b> </span>
            <h4 class="text-white"> 
            <br>
            <a  class="text-white" target="_blank" href="https://www.youtube.com/watch?v=5suWZ4UXdeA&ab_channel=markjoshuaMandigma">Video Demo</a>
            </h4>
        </b-container>
    </b-navbar>

    <main class="mt-5">
        <b-container v-if="!isPreview">
            <b-row>
                <b-col >
                    <h2>Simple News App</h2>
                </b-col>
                <b-col>
                    <div class="text-end" v-if="$store.getters.get_news.length >0">
                        <b-button v-b-toggle.collapse-1 variant="primary" id="create_news">
                            <b-icon icon="plus"></b-icon>
                            Create News
                        </b-button>
                    </div>
                </b-col>
            </b-row>
            <hr>

            <b-collapse id="collapse-1" class="mt-2">
                <!-- Component for adding news wrap with collapse -->
                <formNews :type="'add'" />
            </b-collapse>


            <b-row class="mt-2">

                <!-- Loop for News Item Components -->

                <b-col lg="6" md="12" sm="12" class="mt-3" v-for="(news, i) in $store.getters.get_news" :key="i">
                    <NewsItem :news="news" v-on:open_modal="open_modal" v-on:previewNews="previewNews" :key="i"/>
                </b-col>
            
            </b-row>
         

            <!-- This will show if there is no news -->
            <showEmptyNews v-if="$store.getters.get_news.length ==0"/>




            <!-- Modal for Updating News and Deleting News -->
            <b-modal :size="type=='edit' ? 'xl' : 'xs'" ref="my-modal" hide-footer :title="type == 'edit' ? 'Update News' : 'Delete News'">
                <formNews v-if="type=='edit'" :type="type" :news="selectedNews" v-on:closeModal="closeModal" />
                <deleteNews v-else :news="selectedNews" v-on:closeModal="closeModal" />
            </b-modal>



        </b-container>



        <!-- Preview News Component-->
        <previewNews v-if="isPreview" :news="selectedNews" v-on:closePreview="isPreview=false"/>


    </main>

</div>
</template>

<script>
import NewsItem from './components/newsItem.vue'
import formNews from './components/formNews.vue'
import deleteNews from './components/deleteNews.vue'
import previewNews from './components/previewNews.vue'
import showEmptyNews from './components/showEmptyNews.vue'
export default {
    data() {
        return {
            form: {
                id: null,
                title: "",
                content: "",
                date: new Date().toISOString().slice(0, 10)
            },
            selectedNews: null,
            type: 'edit',
            isPreview: false,
        };
    },
    components: {
        formNews,
        NewsItem,
        deleteNews,
        previewNews,
        showEmptyNews
    },
    methods: {
        previewNews(news) {
            this.selectedNews = news;
            this.isPreview = true;
        },
        open_modal(news, type) {
            this.type = type;
            this.selectedNews = news;
            this.$refs['my-modal'].show();
        },
        closeModal() {
            this.$refs['my-modal'].hide()
        },
    },
    mounted() {
        this.$store.dispatch('initNews');
    }

}
</script>

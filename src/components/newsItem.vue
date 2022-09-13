<template>
<b-card no-body class="h-100" >
    <div class="dropdown dropdown-right">
        <b-dropdown size="lg" variant="link" toggle-class="text-decoration-none" no-caret>
            <template #button-content>
                <b-icon icon="three-dots-vertical"></b-icon>
            </template>
            <b-dropdown-item href="#" @click="$emit('open_modal',news,'edit')">Edit</b-dropdown-item>
            <b-dropdown-item href="#" @click="$emit('open_modal',news,'delete')"> Delete</b-dropdown-item>
        </b-dropdown>
    </div>
    <b-row no-gutters class="h-100">
        <b-col md="5" class="bg-success p-0 cursor-pointer" role='button' @click="$emit('previewNews',news)">

            <div class="text-white d-flex justify-content-center" style="height:100%;align-items: center;" :style="backgroundOverLay(news.id)">
                <div class="text-center">
                    <h1 >{{moment('day')}}</h1>
                    <h6>{{moment('month')}}</h6>

                </div>
            </div>
        </b-col>
        <b-col md="7" >
            <b-card-body :title="news.title" @click="$emit('previewNews',news)" role='button'>
                <b-card-text>
                    <div v-text="stripHtml(news.content)"></div>
                    <a href="#" @click="$emit('previewNews',news)" >Read more</a>
                </b-card-text>
                <small style="position: absolute; bottom: 5px;" class="text-muted">
                    {{ moment('complete')}}

                    <br>
                    
                    
                </small>
        
            </b-card-body>
        </b-col>
    </b-row>
</b-card>
</template>

<script>

import moment from 'moment';
export default {
    props: ['news'],

    methods: {
     
        moment(type) {

          if(type == 'complete') {
            return moment(this.news.date).format("MMMM D, YYYY, hh:mm a");
          }
          if(type == 'month') {
            return moment(this.news.date).format("MMMM");
          }
          if(type == 'day') {
            return moment(this.news.date).format("D");
          }
           
        },


        stripHtml(html) {
          
            let tmp = document.createElement("DIV");
            tmp.innerHTML = html;

            var example =  tmp.textContent || tmp.innerText || "";
            var result;
            
            result = example.slice(0, 155) + '...';
            return result;
        },
        backgroundOverLay(id) {
            return `
            background-image: linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url(${'https://picsum.photos/400/400/?image='+ id})
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            color: #fff;
            height: 100%`;

        },
    },


}
</script>

<style scoped>

.card-title {
  width: 95%;
}

.dropdown-right {
    position: absolute;
    right: 0;

}

.bg-overlay {
    /* background: linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)); */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    color: #fff;
    height: 450px;
    padding-top: 50px;
}
</style>

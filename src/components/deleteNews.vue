<template>
<div>
    <div>

      <b-card>
        Are you sure you want to delete <b>{{news.title}}</b> ?
      </b-card>

        <div class="d-flex justify-content-end">

            <div class="mt-3">
                <b-button type="button" variant="secondary" @click="$emit('closeModal')">Cancel</b-button>
            </div>

            <div class="mt-3 px-2">
                <b-button type="button" variant="primary" @click="deleteNews">Yes</b-button>
            </div>

        </div>

    </div>

</div>
</template>

<script>

export default {
    props: ['news'],
 
 
    methods: {

        deleteNews() {

            this.$store.dispatch('deleteNews', {
                vm: this,
                news_id: this.news.id
            });

            this.$emit('closeModal')
        }
    },
}
</script>

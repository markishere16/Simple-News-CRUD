<template >
     <div class="text-center">
                    <h1 style="font-size: 350px !important;">
                        <b-icon icon="newspaper"></b-icon>
                    </h1>
                    <h1>No News Available!</h1>
                    <p>Starting adding news, click the button bellow to add news</p>
                    <div class="text-center">
                        <b-button v-b-toggle.collapse-1 variant="primary" id="create_news">
                            <b-icon icon="plus"></b-icon>
                            Create News
                        </b-button>
                    </div>

                </div>
</template>
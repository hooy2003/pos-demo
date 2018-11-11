<template>
    <div class="card-class card-class-a js-card-class-a"
         >
        <div class="content" @click.self="clickCard()">
            <Icon type="ios-folder" size="20" color="#56baed"></Icon>
            <h3>{{cardName}}</h3>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'CardA',
        props: ['cardName'],
        methods: {
            clickCard: function() {
                this.$emit('card-on-click', this.cardName);
                $('.js-card-class-a').removeClass('active');
                $('.js-card-class-b').removeClass('active');
                $('.js-card-class-c').removeClass('active');
                $(this.$el).addClass('active');
            },
        }
    }
</script>
<style lang="scss">
</style>

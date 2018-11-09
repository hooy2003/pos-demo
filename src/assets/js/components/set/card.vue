<template>
    <div class="card-class card-class-a js-card-class-a"
         >
        <div class="content" @click.self="clickCard()">
            <Icon type="md-print"></Icon>
            <h3>{{className}}</h3>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'CardA',
        props: ['className'],
        methods: {
            clickCard: function() {
                this.$emit('class-on-click', this.className);
                $('.js-card-class-a').removeClass('active');
                $(this.$el).addClass('active');
            },
        }
    }
</script>
<style lang="scss">
    .card-class {
        border: 1px solid #dcdee2;
        border-color: #e8eaec;
        background: #fff;
        font-size: 14px;
        position: relative;
        cursor: pointer;
        transition: all .2s ease-in-out;
        .content {
            padding: 16px;
        }
        h3 {
            display: inline-block;
        }
        &::after {
            content: '>';
            display: block;
            position:absolute;
            right: 10px;
            top: 15px;
        }
        &.active {
             background: red;
        }
    }
</style>

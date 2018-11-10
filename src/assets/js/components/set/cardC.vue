<template>
    <div class="card-class card-class-c js-card-class-c"
         >
        <div class="content" @click.self="clickCard()">
            <Icon type="md-print"></Icon>
            <h3>{{cardName}}</h3>
            <Input v-model="cardName"
                   @on-click="addedName()"
                   class="hide"
                   placeholder="Something"
                   icon="ios-checkmark-circle"></Input>
            <Dropdown trigger="click"
                @on-click="handleDropDownClick($event)"
            >
                <a href="javascript:void(0)">
                    <Icon type="md-create"></Icon>
                </a>
                <DropdownMenu slot="list">
                    <DropdownItem name="edit"><Icon type="ios-add-circle"></Icon>編輯名稱</DropdownItem>
                    <DropdownItem name="copy"><Icon type="md-copy"></Icon>複製項目</DropdownItem>
                    <DropdownItem name="delete"><Icon type="ios-add-circle"></Icon>刪除項目</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'CardC',
        props: ['cardName'],
        methods: {
            clickCard: function() {
                this.$emit('card-on-click', this.cardName);
                $('.js-card-class-b:not(.B-class)').removeClass('active');
                $('.js-card-class-c').removeClass('active');
                $(this.$el).addClass('active');
            },
            handleDropDownClick: function ($event) {
                // https://github.com/iview/iview/issues/493
                if ($event == "edit") {
                    $(this.$el).find('h3').addClass('hide');
                    $(this.$el).find('.ivu-input-wrapper').removeClass('hide');
                }
                if ($event == "delete") {
                    this.$emit('class-delete', this.cardName);   
                    return;                
                }
            },
            addedName () {
                $(this.$el).find('.ivu-input-wrapper').addClass('hide');
                $(this.$el).find('h3').removeClass('hide');
            }
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
            &.hide {
                display: none;
            }
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

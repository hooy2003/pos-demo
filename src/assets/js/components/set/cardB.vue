<template>
    <div class="card-class card-class-b js-card-class-b"
         >
        <div class="content" @click.self="clickCard()">
            <Icon type="md-print"></Icon>
            <h3>{{cloneCardName}}</h3>
            <Input v-model="cloneCardName"
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
        name: 'CardB',
        props: ['cardName'],
        data() {
            return {
                // 無須通知父組件 madeFrom 異動資訊
                innerCardcardName: this.cardName,
            }
        },
        computed: {
            cloneCardName : {
                get: function() {
                    console.log('in card b');
                    return this.cardName;
                },
                set: function(newValue) {
                    //把input值傳給父
                    console.log('in cardB newValue', newValue);
                    this.$emit('card-change-name', newValue);
                    return this.cardName;
                }
            },
        },

        methods: {
            clickCard: function() {
                this.$emit('card-on-click', this.cardName);
                $('.js-card-class-b').removeClass('active');
                $('.js-card-class-c').removeClass('active');
                $(this.$el).addClass('active');
            },
            handleDropDownClick: function (name) {
                // https://github.com/iview/iview/issues/493
                if (name == "edit") {
                    $(this.$el).find('h3').addClass('hide');
                    $(this.$el).find('.ivu-input-wrapper').removeClass('hide');
                }
                if (name == "delete") {
                    this.$emit('card-delete', this.cardName);
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

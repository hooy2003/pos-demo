<template>
    <div class="card-class js-card-class-c"
         @click="clickCard()">
        <div class="content">
            <Icon type="md-print"></Icon>
            <h3>{{className}}</h3>
            <Input v-model="className"
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
        props: ['className'],
        methods: {
            clickCard: function() {
                this.$emit('class-on-click', this.className);
                $('.js-card-class-c').removeClass('active');
                $(this.$el).addClass('active');
            },
            handleDropDownClick: function (name) {
                // https://github.com/iview/iview/issues/493
                if (name == "edit") {
                    console.log(name);
                    console.log($(this.$el).find('h3'));
                    $(this.$el).find('h3').addClass('hide');
                    $(this.$el).find('.ivu-input-wrapper').removeClass('hide');
                }
                 if (name == "delete") {
                    console.log('cardC', name);
                    this.$emit('class-delete', this.className);   
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
        border-radius: 4px;
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

<template>
    <section class="content">
        <Row>
            <Col span="6">
                <div class="title">餐點
                    <Dropdown trigger="click">
                        <a href="javascript:void(0)">
                            <Icon type="md-create"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem><Icon type="ios-add-circle"></Icon>新增廚房聯規則</DropdownItem>
                            <DropdownItem><Icon type="ios-add-circle"></Icon>新增標籤貼紙規則</DropdownItem>
                            <DropdownItem><Icon type="ios-add-circle"></Icon>新增客戶聯規則</DropdownItem>
                            <DropdownItem><Icon type="md-create"></Icon>編輯出單名稱</DropdownItem>
                            <DropdownItem><Icon type="md-copy"></Icon>複製此出單機</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div style="margin-bottom:40px"></div>
                <div class="union">
                    <CardA v-for="(item, index) in setClass"
                           :class-name="item"
                           @class-on-click="setClassOnClick"
                    >
                    </CardA>
                </div>
            </Col>
            <Col span="6">
                <div class="title">櫃檯出單機
                    <Dropdown trigger="click">
                        <a href="javascript:void(0)">
                            <Icon type="md-create"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem><Icon type="ios-add-circle"></Icon>新增廚房聯規則</DropdownItem>
                            <DropdownItem><Icon type="ios-add-circle"></Icon>新增標籤貼紙規則</DropdownItem>
                            <DropdownItem><Icon type="ios-add-circle"></Icon>新增客戶聯規則</DropdownItem>
                            <DropdownItem><Icon type="md-create"></Icon>編輯出單名稱</DropdownItem>
                            <DropdownItem><Icon type="md-copy"></Icon>複製此出單機</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div class="union">
                    <h4>類別</h4>
                    <CardB v-for="(item, index) in currentSetSubClass"
                           :class-name="item"
                           @class-on-click="setSubClassOnClick"
                    >
                    </CardB>
                    </CardA>
                    <h4>項目</h4>
                    <CardB v-for="(item, index) in currentSetItem"
                           :class-name="item" 
                    >
                    </CardB>
                </div>
            </Col>
            <Col span="6">
                <div class="title">{{currentSetSubClassName}}
                    <Dropdown trigger="click">
                        <a href="javascript:void(0)">
                            <Icon type="md-create"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem><Icon type="ios-add-circle"></Icon>新增廚房規則</DropdownItem>
                            <DropdownItem><Icon type="ios-add-circle"></Icon>新增標籤貼紙規則</DropdownItem>
                            <DropdownItem><Icon type="ios-add-circle"></Icon>新增客戶聯規則</DropdownItem>
                            <DropdownItem><Icon type="md-create"></Icon>編輯出單名稱</DropdownItem>
                            <DropdownItem><Icon type="md-copy"></Icon>複製此出單機</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div class="union">
                    <h4>項目</h4>                    
                    <CardC v-for="(item, index) in currentSetSubItemClass"
                           :class-name="item" 
                           @class-delete="deleteCard($event, index)"
                    >
                    </CardC>
                    <div @click="addNewCard($event)"
                         class="add-new-card"
                         >
                         <Icon type="ios-add" /></Icon>新增項目
                    <div>
                </div>
            </Col>
            <Col span="6">
                <div class="title">餐點名
                    <Dropdown trigger="click">
                        <a href="javascript:void(0)">
                            <Icon type="md-create"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem><Icon type="ios-add-circle"></Icon>新增廚房聯規則</DropdownItem>
                            <DropdownItem><Icon type="ios-add-circle"></Icon>新增標籤貼紙規則</DropdownItem>
                            <DropdownItem><Icon type="ios-add-circle"></Icon>新增客戶聯規則</DropdownItem>
                            <DropdownItem><Icon type="md-create"></Icon>編輯出單名稱</DropdownItem>
                            <DropdownItem><Icon type="md-copy"></Icon>複製此出單機</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </Col>
        </Row>        
    </section>
</template>
<script>
import { mapGetters } from 'vuex';
import CardA from './card.vue';
import CardB from './cardB.vue';
import CardC from './cardC.vue';

// let WebHelper = require('../../utils/wehelper');


  export default {
    components: {
        CardA, 
        CardB,
        CardC,
    },
    data() {
        return {
            currentSetSubClass: [],
            currentSetSubClassName: '無',
            currentSetItem: [],
            currentSetItemName: '無',
            currentSetSubItemClass: []
        }
    },
    mounted: function() {

        // 找 setClass中第一個name 來當初始值
        console.log('mounted1');        
        console.log('mounted2');
    },
    computed: {
      ...mapGetters([
        'User',
        'setClass',
        'setSubClass',
        'setItem',
        'rules'
      ]),
    },
    // 改进vue的初始化数据调用时机 --
    // https://www.jianshu.com/p/2048f1a66c33
    methods: {
        setClassOnClick: function(setClass) {
            console.log('setClassOnClick', setClass);
            this.changeSetSubClass(setClass);
            this.changeSetItem(setClass);
        },
        setSubClassOnClick: function(setSubClass) {
            console.log('setSubClassOnClick', setSubClass);
            this.currentSetSubClassName = setSubClass;
            this.changeSetSubItem(setSubClass);
        },

        changeSetSubClass: function(setClass) {
            let setSubClassName = _.partial(_.map, _, 'name');
            this.currentSetSubClass = setSubClassName( _.filter(this.setSubClass, {types: setClass} ) );
        },
        changeSetItem: function(setClass) {

            let filterArray =  _.filter(this.setItem, {types: setClass} );
            this.currentSetItem = filterArray[0].name;

            console.log(' this.currentSetItem',  this.currentSetItem);
        },
        changeSetSubItem: function(setSubClass) {

            console.log('changeSetSubItem');

            let filterArray =  _.filter(this.setItem, {types: setSubClass} );
            this.currentSetSubItemClass = filterArray[0].name;

        },

        addNewCard: function($event) {
            // 如果沒有su 類別的話?
            // 1108 正確版本
            let currentType = this.currentSetSubClassName;
            console.log('currentType', currentType);

            //find object in list
            let result = $.map(this.setItem, function(item, index) {
            return item.types
            }).indexOf(currentType);
            console.log(result);

            // vuex 控制 陣列
            let cloneItem = this.setItem;
            cloneItem[result].name.push('新項目');

            this.$store.commit({
                type: 'addCard',
                newArray: cloneItem,
            });
            console.log('addNewCard~~');
            console.log(this.setItem);
        },
        deleteCard: function($event, index) {
            console.log(this);
            console.log(this.$el);
            // this.currentSetSubItemClass = _.remove(this.currentSetSubItemClass, function(n) {
            //     return n !== $event;
            // });
            this.currentSetSubItemClass.splice(index, 1);

            // let setSubItemName = _.partial(_.map, _, 'name');
            // let cloneItem = setSubItemName( _.filter(this.setItem, {name: $event} ) );
            // cloneItem.splice(index, 1);

            this.$store.commit({
                type: 'deleteCard',
                newArray: cloneItem,
            });

            console.log('deleteCard~~');
            console.log(this.setItem);
        }
    }
  }
</script>

<style lang="scss">
    .add-new-card {
        width: 200px;
        text-align: center;
        list-style: none;
        cursor: pointer;
        height: 50px;
        transition: all .2s ease;
        position: relative;
        .ivu-icon {
            font-size: 50px
        }
    }
</style>

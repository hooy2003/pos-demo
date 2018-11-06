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
                            <DropdownItem><Icon type="ios-add-circle"></Icon>新增廚房聯規則</DropdownItem>
                            <DropdownItem><Icon type="ios-add-circle"></Icon>新增標籤貼紙規則</DropdownItem>
                            <DropdownItem><Icon type="ios-add-circle"></Icon>新增客戶聯規則</DropdownItem>
                            <DropdownItem><Icon type="md-create"></Icon>編輯出單名稱</DropdownItem>
                            <DropdownItem><Icon type="md-copy"></Icon>複製此出單機</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div class="union">
                    <h4>項目</h4>                    
                    <CardC v-for="(item, index) in currentCuisineclass"
                           :class-name="item" 
                    >
                    </CardC>
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
            currentCuisineclass: []
        }
    },
    mounted: function() {

        // 找 setClass中第一個name 來當初始值
        console.log('mounted1');
        // let fakesetClass =[ "沙拉類", "串炸類", "海鮮類", "牛肉類" ];
        // let firstsetSubClassName = fakesetClass[0];
        // let setSubClassName = _.partial(_.map, _, 'name');
        // this.currentsetSubClass = setSubClassName( _.filter(this.setSubClass, {types: firstsetSubClassName} ) );
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
    // watch: {
    //     currentSetSubClass: function() {
    //         console.log('ddd');            
    //     }
    // },
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
            this.changeCuisineclass(setSubClass);
        },

        changeSetSubClass: function(setClass) {
            let setSubClassName = _.partial(_.map, _, 'name');
            this.currentSetSubClass = setSubClassName( _.filter(this.setSubClass, {types: setClass} ) );
        },
        changeSetItem: function(setClass) {
            let setItemName = _.partial(_.map, _, 'name');
            this.currentSetItem = setItemName( _.filter(this.setItem, {types: setClass} ) );
        },
        changeCuisineclass: function(setSubClass) {
            console.log('changeCuisineclass');
            let cuisineClassName = _.partial(_.map, _, 'name');
            this.currentCuisineclass = cuisineClassName( _.filter(this.setItem, {types: setSubClass} ) );
        }
    }
  }
</script>
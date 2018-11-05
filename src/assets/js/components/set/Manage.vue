<template>
    <section class="content">
        <Row>
            <Col span="6">
                <div class="title">餐點管理
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
                    <CardA v-for="(item, index) in mealclass"
                           :class-name="item"
                           @class-on-click="mealClassOnClick"
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
                    <CardB v-for="(item, index) in currentFoodClass"
                           :class-name="item"
                           @class-on-click="foodClassOnClick"
                    >
                    </CardB>
                    </CardA>
                    <h4>項目</h4>
                    <CardB v-for="(item, index) in currentCookbookclass"
                           :class-name="item" 
                    >
                    </CardB>
                </div>
            </Col>
            <Col span="6">
                <div class="title">和牛區
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
            <Col span="6"></Col>
        </Row>        
    </section>
</template>
<script>
import { mapGetters } from 'vuex';
import CardA from './card.vue';
import CardB from './cardB.vue';

  export default {
    components: {
        CardA, 
        CardB,
    },
    data() {
        return {
            currentFoodClass: [],
            currentCookbookclass: [],
            currentCuisineclass: []
        }
    },
    mounted: function() {

        // 找 mealclass中第一個name 來當初始值
        console.log('mounted1');
        // let fakeMealClass =[ "沙拉類", "串炸類", "海鮮類", "牛肉類" ];
        // let firstFoodClassName = fakeMealClass[0];
        // let foodClassName = _.partial(_.map, _, 'name');
        // this.currentFoodClass = foodClassName( _.filter(this.foodclass, {types: firstFoodClassName} ) );
        console.log('mounted2');
    },
    computed: {
      ...mapGetters([
        'User',
        'mealclass',
        'foodclass',
        'cookbookclass',
        'rules'
      ]),
    },
    // watch: {
    //     currentFoodClass: function() {
    //         console.log('ddd');            
    //     }
    // },
    // 改进vue的初始化数据调用时机 --
    // https://www.jianshu.com/p/2048f1a66c33
    methods: {
        mealClassOnClick: function(mealClass) {
            console.log('mealClassOnClick', mealClass);
            this.changeFoodClass(mealClass);
            this.changeCookbookclass(mealClass);
        },
        foodClassOnClick: function(foodClass) {
            console.log('foodClassOnClick', foodClass);
            this.changeCuisineclass(foodClass);
        },

        changeFoodClass: function(mealClass) {
            let foodClassName = _.partial(_.map, _, 'name');
            this.currentFoodClass = foodClassName( _.filter(this.foodclass, {types: mealClass} ) );
        },
        changeCookbookclass: function(mealClass) {
            let cookBookClassName = _.partial(_.map, _, 'name');
            this.currentCookbookclass = cookBookClassName( _.filter(this.cookbookclass, {types: mealClass} ) );
        },
        changeCuisineclass: function(foodClass) {
            let cuisineClassName = _.partial(_.map, _, 'name');
            this.currentCuisineclass = cuisineClassName( _.filter(this.cookbookclass, {types: foodClass} ) );
        }
    }
  }
</script>
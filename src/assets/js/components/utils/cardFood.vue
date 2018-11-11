<template>
    <div class="card-food"
         >
        <div class="content">
            <div class="right">
               <img src="https://fakeimg.pl/300x300/?text=FakeImg">
            </div>
            <div class="left">
                <div class="input-wrap">
                    <p>商品名稱</p>
                    <Input v-model="value" placeholder="Enter something..."></Input>
                </div>
                <div class="input-wrap">
                    <p>價位</p>
                    <Input v-model="value2" placeholder="Enter something..."></Input>
                </div>
                <div class="input-wrap">
                    <p>單位</p>
                    <Input v-model="value3">
                        <Select v-model="select3" slot="append" style="width: 70px">
                            <Option value="com">條</Option>
                            <Option value="org">顆</Option>
                            <Option value="io">盒</Option>
                        </Select>
                    </Input>
                </div>
            </div>      
        </div>
    </div>
</template>
<script>
    export default {
        name: 'CardFood',
        props: ['cardName'],
        data() {
            return {
                value: '招牌總會',
                value2: 280,
                value3: 8,
                select3: 'com'
            }
        },
        methods: {
        }
    }
</script>
<style lang="scss">
    .card-food {
        &::after {
            content: '';
            background-color: rgba(0, 0, 0, 0.1);
            height: 1px;
            width: 94%;
            display: block;
            margin: 0 auto;
        }
        .content {
            display: flex;
            padding: 35px 20px 20px 20px;
            box-sizing: border-box;
        }
        .right {
            flex-basis: 25%;
            width: 30%;
            img {
                width: 100%;
                max-width: 150px;
            }
        }
        .left {
            flex: 1;
            padding-left: 20px;
            .input-wrap {
                display: flex;
                margin-bottom: 10px;
                p {
                    width: 70px;
                    text-align: right;
                    line-height: 32px;
                    margin-right: 8px;
                }
            }
            .ivu-input-wrapper {
                width: 100%;
                flex: 1;
            }
        }
    }
</style>

<template>
    <div class="wrap">
        <h3 class="title">经乱离后天恩流夜郎忆旧游书怀赠江夏韦太守良宰</h3>
        <p class="author">李白</p>
        <div class="text">天上白玉京</div>
        <div class="text">十二楼五城</div>
        <div class="text">仙人抚我顶</div>
        <div class="text">结发受长生</div>
        <img class="pugy" src="./src/assets/image/480_380.gif" alt="">
        <img class="pugy" src="./src/assets/image/lazy.jpg" alt="">
        <div>
            <button @click="addImg">添加图片</button>
        </div>
        <div id="wall">
            <img v-for="(item,index) in img_list" :key="index" src="item.zyl" class="zhuyilong">
        </div>
    </div>
</template>
<script>
    export default {
        data:{
            img_list:[]
        },
        methods:{
            addImg(){
                const zyl = require("@/assets/image/zyl.png");
                let item = {zyl};
                this.img_list.push(item);
            }
        }
    }
</script>
<style lang="less">
    .wrap{
        width: 800px;
        min-height: 400px;
        margin: 0 auto;
        text-align: center;
        .title{
            color: red;
        }
        .author{
            color: forestgreen;
            margin-bottom: 20px;
        }
        .text{
            line-height: 32px;
            font-size: 20px;
            color: #409EFF;
        }
        .pugy{
            width: 100px;
            height: 100px;
            transform: translateX(10px);
        }
        #wall {
            &:after{
                display: block;
                content: "";
                clear: both;
            }
            width: 150px;
            height: 100px;
            float: left;
            margin-left: 10px;
            margin-bottom: 10px;
        }
    }
</style>
<template>
    <div class='wrapper'>
        <div class="content">
            <ul>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
                <li>hah</li>
            </ul>    

        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'Category',
    data(){
        return{
            scroll:null
        }
    },
    mounted(){
        this.scroll=new BScroll(document.querySelector('.wrapper'),{
            //probeType:1,不监听  2 监听但是不监听惯性划出  3 都监听
            probeType:3
        })
        //和事件监听是一样的，传入一个位置的参数，然后获取实时位置
        this.scroll.on('scroll',(position)=>{
            console.log(position);
            
        })
    }
}
</script>

<style>
    .wrapper{
        background-color: red;
        width: 100px;
        height: 300px;
        overflow: hidden;
    }
</style>
<template>
    <div class="mainVisual contentWrap">
        <div class="mainVisualTitleWrap">
            <div class="mainVisualTitle">{{menuStore.menuList[2].menuName}}</div>
        </div>

       <div class="careerWrap">
          <ul v-for="(group, groupIdx) in careerGroup" :key="groupIdx">
            <li class="careerTit">{{ group.title }}</li>
            <li v-for="(item, listIdx) in group.list" :key="listIdx">
              <div class="careerName">{{ item.careerName }}</div>
              <div class="careerData">({{ item.date }})</div>
              <div class="careerDesc">· 작업 내용 :<br class="showInlineM"> {{ item.desc }}</div>
              <div class="careerDesc">· 기여도 : {{ item.lev }}</div>
              <a class="ui basic button" :href="item.link" target="_blank">
                페이지 바로가기 <i class="xi-share"></i>
              </a>
              <template v-if="item.link2">
                <a class="ui basic button" :href="item.link2" target="_blank">
                  페이지 바로가기 <i class="xi-share"></i>
                </a>
              </template>
              <template v-if="item.link3">
                <a class="ui basic button" :href="item.link3" target="_blank">
                  페이지 바로가기 <i class="xi-share"></i>
                </a>
              </template>
              <template v-if="item.link4">
                <a class="ui basic button" :href="item.link4" target="_blank">
                  페이지 바로가기 <i class="xi-share"></i>
                </a>
              </template>
              <template v-if="item.link5">
                <a class="ui basic button" :href="item.link5" target="_blank">
                  페이지 바로가기 <i class="xi-share"></i>
                </a>
              </template>
              <template v-if="item.link6">
                <a class="ui basic button" :href="item.link6" target="_blank">
                  페이지 바로가기 <i class="xi-share"></i>
                </a>
              </template>
            </li>
          </ul>
       </div>
    </div>  
</template>

<script setup>

import { ref, onMounted } from 'vue'
import axios from 'axios'

const careerGroup = ref([])
onMounted(async () => {

    const params = new URLSearchParams(window.location.search);
    let type = params.get("type");
    //console.log(type)
  try {
      let res;
      if(type == "resume"){
          res = await axios.get('data/careerData_resume.json')
      }else{
          res = await axios.get('data/careerData.json')
      }
    careerGroup.value = res.data
  } catch (error) {
    console.error('에러:', error)
  }
})

// onMounted(() => {
//   axios.get('/data/careerData.json')
//   .then(res => {
//     careerGroup.value = res.data
//   })
//   .catch(error => {
//     console.error('에러 발생:', error)
//   })
// })

import { useClkMenuStore } from '@/stores/menuList'  // pinia
const menuStore = useClkMenuStore();

</script>

<template>
    <div class="mainVisual contentWrap">
        <div class="mainVisualTitleWrap">
            <div class="mainVisualTitle">{{menuStore.menuList[1].menuName}}</div>
        </div>
        <ul class="skillWrap">
            <li v-for="item in skillList" :key="item.list">
              <div class="skillNum">{{item.skillNum}}</div>
              <div class="skillName">{{item.skillName}}</div>
              <div class="skillIcon"><img :src="item.icon" alt=""></div>
              <div class="well">{{item.well}}</div>
            </li>
        </ul>
    </div>
</template>

<script setup>

import { useClkMenuStore } from '@/stores/menuList'  // pinia
const menuStore = useClkMenuStore();


import { ref, onMounted } from 'vue'
import axios from 'axios'

const skillList = ref([])
onMounted(async () => {
  try {
    const res = await axios.get('/data/skillData.json')
    skillList.value = res.data
  } catch (error) {
   console.error('Error loading skill data:', error);
  }
})

</script>

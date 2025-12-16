<template>
  <div class="pageOutWrap">
    <div class="header">
        <div class="topLine">
            <i class="mainTitle">{{menuStore.myCareer}}</i>
        </div>

        <div class="gnbWrap">
            <router-link 
            :to="item.path" v-for="item in menuStore.menuList" :key="item.menuName"
            active-class="on"
            >{{item.menuName}}
            </router-link>
        </div>
    </div>
    
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>

    <div class="footer">
        <div class="contentWrap">
            <span>Copyright 2025. 강채영 All rights reserved.</span>
            <span>이 포트폴리오는 Vue.js로 제작되었습니다.</span>
        </div>
    </div>
</div>
</template>

<script setup>

// import { ref } from 'vue'
import { useClkMenuStore } from '@/stores/menuList'  // pinia
const menuStore = useClkMenuStore();
// menuStore.setClk();

</script>
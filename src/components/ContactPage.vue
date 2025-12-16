<template>
    <div class="mainVisual contentWrap contactPage">
        <div class="mainVisualTitleWrap">
            <div class="mainVisualTitle">{{menuStore.menuList[3].menuName}}</div>
        </div>

        <div class="ct">
            <div class="ui card">
                <div class="image">
                    <img class="backImg" src="img/myImg2.jpg">
                    <img class="mainImg" src="img/myImg2.jpg">
                </div>
                <div class="content">
                    <div class="header">강채영</div>
                    <div class="meta">
                        <span class="date">1996. 07. 19.</span>
                    </div>
                    <div class="description">
                        제 포트폴리오를 봐주셔서 감사합니다!<br>
                        이 페이지는 Vue.js를 사용해 직접 구현한<br class="showInlineM"> 결과물입니다.<br>
                        작지만 컴포넌트 구조와 페이지 흐름에 대해<br class="showInlineM"> 많이 고민하며 만들었습니다.<br>
                        궁금한 점이나 제안하고 싶은 내용이<br class="showInlineM"> 있으시다면, 언제든지 연락 주세요 :)
                    </div>
                </div>
                <div class="extra content">
                    <i class="user icon"></i>
                    010.3096.9590 / kcy9590@daum.net
                </div>
            </div>

            <div class="ui circular buttons">
                <div class="resume ui button" @click="popOpen">이 페이지에 쓰인 기능 보기</div>
            </div>

            <div class="popWrap" :class="{on : popOn}">
                <div class="popCont">
                    <i class="xi-close btnClosePopup" @click="popClose"></i>
                    <div class="popDesc">Router 이용해 페이지 이동</div>
                    <div class="popDesc">Pinia 이용해 메뉴명 설정</div>
                    <div class="popDesc">Axios 이용해 skill 및 projects 리스트 설정</div>
                    <div class="popDesc">fomantic ui 이용해 버튼 디자인</div>
                </div>
            </div>
		</div>
    </div>  
</template>

<script setup>

import { useClkMenuStore } from '@/stores/menuList'  // pinia
import { ref } from 'vue';
const menuStore = useClkMenuStore();

const popOn = ref(false);
const popOpen = () => {
   popOn.value = true;
}
const popClose = () => {
   popOn.value = false;
}

</script>

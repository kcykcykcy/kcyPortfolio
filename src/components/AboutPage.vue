<template>
    <div class="mainVisual contentWrap">
        <div class="mainVisualTitleWrap">
            <div class="mainVisualTitle">{{menuStore.menuList[0].menuName}}</div>
            <div class="mainVisualDesc">
                안녕하세요! 프론트엔드 개발자 <span class="bold">강채영</span>입니다.<br>
                매일 조금씩 성장하며, <span class="bold">어제보다 나은<br class="showInlineM"> 오늘이 되자</span>는
                마음으로<br class="showInlinePc"> 즐겁게 일하고 있습니다!
            </div>
        </div>
        <div class="mainVisualCont">
            <div class="myIntroduce">
                <div class="row">
                    <div class="topItem">Name</div>
                    <div class="botItem">강채영</div>
                </div>
                <div class="row">
                    <div class="topItem">Birth</div>
                    <div class="botItem">1996. 07. 19. (만 29세)</div>
                </div>
                <div class="row">
                    <div class="topItem">Career</div>
                    <div class="botItem">
                        소프트엠 프론트엔드 개발 및 퍼블리싱(주임)<br class="showInlineM"> / 2022.07.-2025.10.
                    </div>
                </div>
                <div class="row">
                    <div class="topItem">Education</div>
                    <div class="botItem">
                        · 하이미디어컴퓨터학원 안양점 웹퍼블리셔 양성반 수료 / 2022.06.<br>
                        · 명지대학교 디지털미디어학과 졸업 / 2019.08.<br>
                        · 안산고등학교 졸업 / 2014.02.
                    </div>
                </div>
                <div class="row">
                    <div class="topItem">Contact</div>
                    <div class="botItem">· 010.3096.9590<br>· kcy9590@daum.net</div>
                </div>
                <div class="ui circular buttons">
                    <a href="https://www.notion.so/1a11058a92d180f29612f742103d22c9?source=copy_link" target="_blank" class="resume ui button">강채영 이력서</a>
                </div>
            </div>
            <div class="myImg"><img src="img/myImg.jpg" alt=""></div>
        </div>
    </div>
</template>

<script setup>

import { useClkMenuStore } from '@/stores/menuList'  // pinia
const menuStore = useClkMenuStore();

</script>

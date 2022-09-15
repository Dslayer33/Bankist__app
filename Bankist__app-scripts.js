'use strict';
let logIn=document.querySelector('.body__block');
let worldTransfers=document.querySelector('.body__block2');
let reBonus=document.querySelector('.body__block3');
let questions=document.querySelector('.body__block4');
let shadowBlock=document.querySelector('.body__shadow-block'); 
let shadowBlockImg=document.querySelector('.shadow__block-img'); 
let shadowBlock2=document.querySelector('.body__shadow-block2'); 
let shadowBlockImg2=document.querySelector('.shadow__block2-img'); 
let shadowBlock3=document.querySelector('.body__shadow-block3'); 
let shadowBlockImg3=document.querySelector('.shadow__block3-img');
let shadowBlock4=document.querySelector('.body__shadow-block4'); 
let shadowBlockImg4=document.querySelector('.shadow__block4-img');
let headerName=document.querySelector( '.header__name');
let menuList=document.querySelector( '.menu__list');
let headerNameShadow=document.querySelector( '.header__shadowname');
let menuListShadow=document.querySelector( '.menu__shadowlist');
let shadowMenu=document.querySelector( '.header__shadowmenu-box');
let shadowImg=document.querySelector( '.shadow__img');
let listItem1=document.querySelector( '.list__item1');
let listItem2=document.querySelector( '.list__item2');
let shadowlistItem1=document.querySelector( '.shadowlist__item1');
let shadowlistItem2=document.querySelector( '.shadowlist__item2');
let shadowBlockUser=document.querySelector( '.shadow__block-user');
let shadowBlockPIN=document.querySelector( '.shadow__block-pin');


let AccConstruct=function(User,PIN){
this.User=User;
this.PIN=PIN;
};
let accaunt1=new AccConstruct('user1','0000');
let accaunt2=new AccConstruct('user2','1111');



logIn.addEventListener('click',function(e){
e.preventDefault();
e.stopPropagation();
shadowBlock.style.cssText='display: block';
logIn.style.cssText='display: none';
worldTransfers.style.cssText='display: none';
reBonus.style.cssText='display: none';
questions.style.cssText='display: none';
});

shadowBlockImg.addEventListener('click',function(e1){
e1.preventDefault();
e1.stopPropagation();
shadowBlock.style.cssText='display: none';
logIn.style.cssText='display: flex';
worldTransfers.style.cssText='display: flex';
reBonus.style.cssText='display: flex';
questions.style.cssText='display: flex';
});

worldTransfers.addEventListener('click',function(e2){
    e2.preventDefault();
    e2.stopPropagation();
    shadowBlock2.style.cssText='display: block';
     logIn.style.cssText='display: none';
     worldTransfers.style.cssText='display: none';
     reBonus.style.cssText='display: none';
     questions.style.cssText='display: none';
});

shadowBlockImg2.addEventListener('click',function(e3){
    e3.preventDefault();
    e3.stopPropagation();
    shadowBlock2.style.cssText='display: none';
    logIn.style.cssText='display: flex';
    worldTransfers.style.cssText='display: flex';
    reBonus.style.cssText='display: flex';
    questions.style.cssText='display: flex';
});

reBonus.addEventListener('click',function(e4){
    e4.preventDefault();
    e4.stopPropagation();
    shadowBlock3.style.cssText='display: block';
    logIn.style.cssText='display: none';
    worldTransfers.style.cssText='display: none';
    reBonus.style.cssText='display: none';
    questions.style.cssText='display: none';
});

shadowBlockImg3.addEventListener('click',function(e5){
    e5.preventDefault();
    e5.stopPropagation();
    shadowBlock3.style.cssText='display: none';
    logIn.style.cssText='display: flex';
    worldTransfers.style.cssText='display: flex';
    reBonus.style.cssText='display: flex';
    questions.style.cssText='display: flex';
});

questions.addEventListener('click',function(e6){
    e6.preventDefault();
    e6.stopPropagation();
    shadowBlock4.style.cssText='display: block';
    logIn.style.cssText='display: none';
    worldTransfers.style.cssText='display: none';
    reBonus.style.cssText='display: none';
    questions.style.cssText='display: none';
});

shadowBlockImg4.addEventListener('click',function(e7){
    e7.preventDefault();
    e7.stopPropagation();
    shadowBlock4.style.cssText='display: none';
    logIn.style.cssText='display: flex';
    worldTransfers.style.cssText='display: flex';
    reBonus.style.cssText='display: flex';
    questions.style.cssText='display: flex';
});

headerName.addEventListener('click',function(e8){
    e8.preventDefault();
    e8.stopPropagation();
menuList.style.cssText='display: flex';
menuList.style.animationName='onAnimation';
menuList.style.animationDuration='3s';
menuList.style.backfaceVisibility='hidden';
});

headerName.addEventListener('dblclick',function(e9){
    e9.preventDefault();
    e9.stopPropagation();
menuList.style.cssText='display: none';
});



headerNameShadow.addEventListener('click',function(e10){
    e10.preventDefault();
    e10.stopPropagation();
headerNameShadow.style.cssText='display: none';  
shadowMenu.style.cssText='display: inline';
menuListShadow.style.cssText='display: flex';
menuListShadow.style.animationName='onAnimation';
menuListShadow.style.animationDuration='3s';
menuListShadow.style.backfaceVisibility='hidden';
});

shadowImg.addEventListener('click',function(e11){
    e11.preventDefault();
    e11.stopPropagation();
shadowMenu.style.cssText='display: none';
menuListShadow.style.cssText='display: none';
headerNameShadow.style.cssText='display: inline';
});


listItem1.addEventListener('click',function(e12){
    e12.preventDefault();
    e12.stopPropagation();
menuList.style.cssText='display: none';
shadowBlockUser.textContent='User:user1';
shadowBlockPIN.textContent='PIN:0000';
});

listItem2.addEventListener('click',function(e13){
    e13.preventDefault();
    e13.stopPropagation();
menuList.style.cssText='display: none';
shadowBlockUser.textContent='User:user2';
shadowBlockPIN.textContent='PIN:1111';
});

shadowlistItem1.addEventListener('click',function(e14){
    e14.preventDefault();
    e14.stopPropagation();
shadowBlockUser.textContent='User:user1';
shadowBlockPIN.textContent='PIN:0000';
});

shadowlistItem2.addEventListener('click',function(e15){
    e15.preventDefault();
    e15.stopPropagation();
shadowBlockUser.textContent='User:user2';
shadowBlockPIN.textContent='PIN:1111';
});
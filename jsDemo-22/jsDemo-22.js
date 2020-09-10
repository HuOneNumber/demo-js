/*
 * @Author: your name
 * @Date: 2020-09-10 17:42:16
 * @LastEditTime: 2020-09-11 01:36:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsDemo_22\jsDemo-22.js
 */
/**
 * @description: 对参数内的dom节点进行动画演示
 * @param {Array} arr 存储按照不同遍历顺序的dom 
 */
function animate(arr) {
  clearInterval(timer);
  for (let i= 0; i< arr.length; i++) {
    arr[i].style.background = '#fff'
  }
  let i = 0;
  timer = setInterval( function () {
    if(i === arr.length){
      clearInterval(timer)
    }
    if(i < arr.length){
      if (i == 0) {
        arr[i].style.background = 'red'
      }else {
        arr[i-1].style.background = '#fff'
        arr[i].style.background = 'red'
      }
      i++;
    }
  }, 300);
}
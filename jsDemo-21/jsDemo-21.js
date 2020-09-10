/*
 * @Author: your name
 * @Date: 2020-09-10 11:28:20
 * @LastEditTime: 2020-09-10 17:35:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsDemo-21\jsDemo-21.js
 */

/**
 * @description: 将输入的内容渲染后，添加到指定的元素内
 * @param {dom} inputDom  输入数据的节点
 * @param {dom} outputDom 输出数据的节点
 * @param {Array} arr 存储用户输入的内容
 */
function tag_enqueue(inputDom,outputDom,arr) {
  let inputElement = inputDom.value;
  if (!inputElement.trim()) return;
  for (let i = 0; i < arr.length; i++) {
    if (inputElement === arr[i]) {
      alert("出现了重复的"+inputElement+",请重新输入");
      inputDom.value = '';
      return;
    }
  }
  arr.push(inputElement);
  if (arr.length <= 10) {
    let li = document.createElement('li');
    li.innerText = inputElement;
    outputDom.insertBefore(li,outputDom.firstChild);
    inputDom.value = '';
  }else {
    outputDom.removeChild(outputDom.lastChild);
    let li = document.createElement('li');
    arr.shift();
    li.innerText = inputElement;
    outputDom.insertBefore(li,outputDom.firstChild);
    inputDom.value = '';
  }
}
/**
 * @description: 将输入的内容渲染后，添加到指定的元素内
 * @param {dom} inputDom  输入数据的节点
 * @param {dom} outputDom 输出数据的节点
 */
function hobby_enqueue(inputDom,outputDom,arr) {
  let inputElement = inputDom.value;
  if (!inputElement.trim()) return;
  //输入数据转换为字符串
  let inputElementArr = inputElement.split("/");
  //重复判断
  let tmp=[];
  for (var i = 0; i < inputElementArr.length; i++) {
    if(tmp.indexOf(inputElementArr[i])==-1){
      tmp.push(inputElementArr[i]);
    }
  }
  inputElementArr = tmp;
  //个数超出判断
  let overIndex = inputElementArr.length - 10;
  if (overIndex > 0) {
    alert('兴趣爱好大于10个，最先录入的已删除')
    inputElementArr.splice(0,overIndex)
  } 
  for (let i = 0; i < inputElementArr.length; i++) {
    let li = document.createElement('li');
    li.innerText =inputElementArr[i]
    outputDom.append(li);
    inputDom.value = '';
  }
}



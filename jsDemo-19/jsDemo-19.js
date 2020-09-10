let ul = document.getElementsByClassName("queue")[0];
//存储元素高度
let arr = [];
//左侧入事件
document.querySelector(".enqueue-left").onclick = function(){
  let inputNumber = document.querySelector('input').value;
  if( isLegal(inputNumber) ){
    isOver();
    let li = document.createElement('li');
    arr.push(inputNumber)
    li.style.height = inputNumber*2 +'px';
    ul.insertBefore(li,ul.firstChild)
  }else{
    alert('请输入10-100以内的整数');
  }
  document.querySelector('input').value = '';
}
//右侧入事件
document.querySelector(".enqueue-right").onclick = function(){
  let inputNumber = document.querySelector('input').value;
  if( isLegal(inputNumber) ){
    isOver();
    let li = document.createElement('li');
    arr.push(inputNumber)
    li.style.height = inputNumber*2 +'px';
    ul.appendChild(li);
  }else{
    alert('请输入10-100以内的数字');
  }
  document.querySelector('input').value = '';
}
//左侧出事件
document.querySelector(".dequeue-left").onclick = function(){
  ul.removeChild( ul.firstChild ); 
}
//右侧出事件
document.querySelector(".dequeue-right").onclick = function(){
  ul.removeChild(ul.lastChild);
}
//队列元素事件 事件委托方式
ul.addEventListener('click', function(e) {
  if(e.target.tagName.toLowerCase() === 'li') {
    ul.removeChild(e.target)
  }
})

//输入合法性验证
function isLegal(input){
  let reg = /^(?:[1-9]\d|100)$/; 
    return reg.test(input);    
}

// 判断元素个数是否超出
function isOver() {
  let lis = document.querySelectorAll('li');
  if (lis.length >= 60) {
    alert("已经大于60个元素了");
  }
}

//排序事件
document.querySelector(".sort").onclick = function(){
  for(let i = 0; i < arr.length - 1; i++) {
  var flag = true;
    for(let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        flag = false;
      }
    }
    if (flag) {
      break;
    }
  }
  let lis = document.querySelectorAll("li");
  for (let i = 0; i < arr.length; i++) {
    lis[i].style.height = arr[i]*2 + 'px'; 
    
  }
}

let ul = document.getElementsByClassName("queue")[0];
//左侧入事件
document.querySelector(".enqueue-left").onclick = function(){
  let inputNumber = document.querySelector('input').value;
  if(isLegal(inputNumber)){
    let li = document.createElement('li');
    li.innerText = inputNumber;
    ul.insertBefore(li,ul.firstChild)
  }else{
    alert('请输入两位以内的整数');
  }
  document.querySelector('input').value = '';
}

//右侧入事件
document.querySelector(".enqueue-right").onclick = function(){
  let inputNumber = document.querySelector('input').value;
  if(isLegal(inputNumber)){
    let li = document.createElement('li');
    li.innerText = inputNumber;
    ul.appendChild(li);
  }else{
    alert('请输入两位以内的数字');
  }
  document.querySelector('input').value = '';
}

//左侧出事件
document.querySelector(".dequeue-left").onclick = function(){
  alert('已移除元素'+ ul.firstChild.innerText)
  ul.removeChild( ul.firstChild );
}

//右侧出事件
document.querySelector(".dequeue-right").onclick = function(){
  alert('已移除元素'+ ul.lastChild.innerText)
  ul.removeChild( ul.lastChild );
}

//队列元素事件 事件委托方式
document.querySelector("ul").addEventListener('click', function(e) {
  if(e.target.tagName.toLowerCase() === 'li') {
    alert('已移除元素'+ e.target.innerText)
    ul.removeChild(e.target)
  }
})

 //输入合法性验证
function isLegal(input){
  let reg = /^\d{1,2}$/; 
  return reg.test(input);    
}

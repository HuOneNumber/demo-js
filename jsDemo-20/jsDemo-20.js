let ul = document.getElementsByClassName("queue")[0];
//存储元素的值
var arr = [];
//左侧入事件
document.querySelector(".enqueue-left").onclick = function(){
  let inputElement = document.querySelector('textarea').value;
  let li = document.createElement('li');
  arr.push(inputElement);
  li.innerText = inputElement;
  ul.insertBefore(li,ul.firstChild)
  document.querySelector('textarea').value = '';
}

//右侧入事件
document.querySelector(".enqueue-right").onclick = function(){
  let inputElement = document.querySelector('textarea').value;
  let li = document.createElement('li');
  arr.push(inputElement);
  li.innerText = inputElement;
  ul.appendChild(li);
  document.querySelector('textarea').value = '';
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
//查询事件
document.querySelector('.search').onclick = function(){
  let lis = document.querySelectorAll('li');
  let searchText = document.querySelector("input").value;
  for (let i = 0; i < arr.length; i++) {
    lis[i].style.backgroundColor = "red";
    var reg = new RegExp(searchText);
    if (reg.test(lis[i].innerText)){
      lis[i].style.backgroundColor = "yellow";
    }
  }
}

//队列元素事件 事件委托方式
document.querySelector("ul").addEventListener('click', function(e) {
  if(e.target.tagName.toLowerCase() === 'li') {
    alert('已移除元素'+ e.target.innerText)
    ul.removeChild(e.target)
  }
})

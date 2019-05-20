'use strict'
    
// 現在のページのURLを取得する
window.onload = function() {//DOMツリー構築完了後
  const nowUrl = (location.href);
  const index = nowUrl.indexOf('%E6%8C%81%E3%81%A1%E7%89%A9');
  const page2url = nowUrl.indexOf('%E6%9C%80%E9%81%A9%E5%8C%96%E3%83%A1%E3%83%A2');
  const nav1 = document.getElementById('nav1');
  const nav2 = document.getElementById('nav2');
  const nav3 = document.getElementById('nav3');
  if(index !== -1){
    //検索したい文字が見つからなかった場合は「-1」
    nav1.classList.add("nowurl");
  }else if(page2url !== -1){
    nav2.classList.add("nowurl");
  }else{
    nav3.classList.add("nowurl");
  }
}

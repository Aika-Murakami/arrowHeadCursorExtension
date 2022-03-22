"use strict"

// 拡張機能のID
var extensionId = chrome.runtime.id;

const img = [
  "chrome-extension://"+extensionId+"/img/cursor1.png",
  "chrome-extension://"+extensionId+"/img/cursor2.png",
  "chrome-extension://"+extensionId+"/img/cursor3.png",
  "chrome-extension://"+extensionId+"/img/cursor4.png",
  "chrome-extension://"+extensionId+"/img/cursor5.png",
  "chrome-extension://"+extensionId+"/img/cursor6.png",
  "chrome-extension://"+extensionId+"/img/cursor7.png"
  ];

var bodyElem = document.getElementsByTagName('body');

// 0~6まででランダムな数を変数に入れる
var min = 0;
var max = 6;
var randomNumber = Math.floor( Math.random() * (max + 1 - min) ) + min ;

// カーソルの画像を指定
bodyElem[0].style.cursor = 'url('+img[randomNumber]+'), auto'


//ドキュメントスタイルの取得
var sheets = document.styleSheets
var sheet = sheets[sheets.length - 1];

//スタイルルールの追加
sheet.insertRule(
  '.body::hover { cursor: url('+img[randomNumber]+'), auto }',
  sheet.cssRules.length
);

// ==UserScript==
// @name         Bing Wallpaper for Baidu
// @author       Yugle
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Set Bing wallpaper on baidu.com
// @match        *.baidu.com/
// @note         Version 0.1    Bing Wallpaper for Baidu
// @icon         https://cn.bing.com/favicon.ico
// ==/UserScript==
 
(function (){
	"use strict";
 
	const bingImgUrl = "https://area.sinaapp.com/bingImg/"
	var bingImgMethod = "url({bingImgUrl})"
 
	document.body.style.backgroundImage = bingImgMethod
	document.body.style.backgroundImage = "url(https://area.sinaapp.com/bingImg/)"
 
	let centerBox = document.getElementById("s_top_wrap")
	centerBox.style.opacity = 0.1
	document.getElementById("s_top_wrap").style.opacity = 0.1
 
	let leftDiv = document.getElementById("s-top-left")
	let leftAList = leftDiv.children
	for (let i = 0; i < leftAList.length; i++) {
		let leftA = leftAList[i]
		let leftAChilden = leftA.children
		if(leftAChilden != []){
			for (let j = 0; j < leftAChilden.length; j++){
				leftAChilden[j].style.color = "white"
			}
		}
		leftAList[i].style.color = "white"
	}
 
	let weatherSpanList = document.getElementsByClassName("show-weather")[0].children
	for (let i = 0; i < weatherSpanList.length; i++) {
		let weatherSpan = weatherSpanList[i].lastChild
		if(weatherSpan != null)
		weatherSpan.style.color = "white"
	}
 
	document.getElementById("s-usersetting-top").style.color = "white"
	document.getElementById("s-top-username").lastChild.style.color = "white"
 
})();
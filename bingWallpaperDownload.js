// ==UserScript==
// @name         必应壁纸下载
// @author       Yugle
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  必应壁纸下载：点击必应首页右下ⓘ符号即可下载当前必应壁纸
// @match        *.bing.com/*
// @note         Version 1.0    必应壁纸下载
// @icon         https://img2.baidu.com/it/u=1596561636,4277282949&fm=26&fmt=auto&gp=0.jpg
// ==/UserScript==

(function (){
	"use strict";
	var infoA = document.getElementById("sh_cp");
	infoA.addEventListener("click", refreshDownloadButton);

	function getImgUrl(){
		var background = document.getElementById("bgLink");
		imgUrl = background.href;
		
		return imgUrl;
	};

	var currentUrl = "https://cn.bing.com/"
	var imgUrl = getImgUrl();

	var nextButton = document.getElementById("sh_igr");
	
	function refreshDownloadButton(){
		if(nextButton.hasAttribute("aria-disabled") == false){
			var backgroundDiv = document.getElementById("bgDiv");
			var style = backgroundDiv.getAttribute("style").split(";");

			var backgroundImg;
			style.forEach(function (value){
				if(value.indexOf("background-image") != -1){
					backgroundImg = value.split('"')[1]
				}
			});

			imgUrl = currentUrl + backgroundImg.replace("/", "");
		}

		var currentBackgroundImg = infoA.getAttribute("title")
		infoA.setAttribute("download", currentBackgroundImg);

		infoA.setAttribute("href", imgUrl)
	}
})();

!function e(t,n,o){function r(c,a){if(!n[c]){if(!t[c]){var d="function"==typeof require&&require;if(!a&&d)return d(c,!0);if(i)return i(c,!0);var l=new Error("Cannot find module '"+c+"'");throw l.code="MODULE_NOT_FOUND",l}var s=n[c]={exports:{}};t[c][0].call(s.exports,function(e){var n=t[c][1][e];return r(n?n:e)},s,s.exports,e,t,n,o)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<o.length;c++)r(o[c]);return r}({1:[function(e,t,n){$(document).ready(function(){function e(){c.classList.add("open-chat-panel")}function t(){c.classList.remove("open-chat-panel")}function n(){sidePanelContact.classList.add("open-contact-panel")}function o(){sidePanelContact.classList.remove("open-contact-panel")}function r(){u.classList.toggle("remove-cookies-panel")}var i=document.getElementById("mainPanel"),c=document.getElementById("sidePanel"),a=document.getElementById("removePanel"),d=document.getElementById("removeContactPanel"),l=document.getElementById("mainContactPanel"),s=document.getElementById("sideContactPanel"),m=document.getElementById("btnCookies"),u=document.getElementById("panelCookies"),f=new Hammer(i);new Hammer(c),new Hammer(l),new Hammer(s),new Hammer(btnBlock);f.on("swiperight",e),f.on("swiperight",n),f.on("swiperight",offBlock),i.addEventListener("click",e),a.addEventListener("click",t),l.addEventListener("click",n),d.addEventListener("click",o),m.addEventListener("click",r)}),window.twttr=function(e,t,n){var o,r=e.getElementsByTagName(t)[0],i=window.twttr||{};return e.getElementById(n)?i:(o=e.createElement(t),o.id=n,o.src="https://platform.twitter.com/widgets.js",r.parentNode.insertBefore(o,r),i._e=[],i.ready=function(e){i._e.push(e)},i)}(document,"script","twitter-wjs")},{}]},{},[1]);
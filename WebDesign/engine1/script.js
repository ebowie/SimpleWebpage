// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 7.1
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_blast(p,i,l){var e=jQuery;var h=e(this);var a=p.distance||1;l=l;var f=e("<div>").addClass("ws_effect ws_blast");var c=e("<div>").addClass("ws_zoom").appendTo(f);var j=e("<div>").addClass("ws_parts").appendTo(f);l.css({overflow:"visible"}).append(f);f.css({position:"absolute",left:0,top:0,width:"100%",height:"100%","z-index":8});var d=p.cols;var o=p.rows;var k=[];var b=[];function g(t,q,r,s){if(p.support.transform&&p.support.transition){if(typeof q.left==="number"||typeof q.top==="number"){q.transform="translate3d("+(typeof q.left==="number"?q.left:0)+"px,"+(typeof q.top==="number"?q.top:0)+"px,0)"}delete q.left;delete q.top;if(r){q.transition="all "+r+"ms ease-in-out"}else{q.transition=""}t.css(q);if(s){t.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){s();t.off("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd")})}}else{delete q.transfrom;delete q.transition;if(r){t.animate(q,{queue:false,duration:p.duration,complete:s?s:0})}else{t.stop(1).css(q)}}}function m(q){var v=Math.max((p.width||f.width())/(p.height||f.height())||3,3);d=d||Math.round(v<1?3:3*v);o=o||Math.round(v<1?3/v:3);for(var t=0;t<d*o;t++){var u=t%d;var s=Math.floor(t/d);e([b[t]=document.createElement("div"),k[t]=document.createElement("div")]).css({position:"absolute",overflow:"hidden"}).appendTo(j).append(e("<img>").css({position:"absolute"}))}k=e(k);b=e(b);n(k,q);n(b,q,true);var r={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"};c.css(r).append(e("<img>").css(r))}function n(s,t,r,q,v,y){var u=f.width();var w=f.height();var x={left:e(window).scrollLeft(),top:e(window).scrollTop(),width:e(window).width(),height:e(window).height()};e(s).each(function(E){var D=E%d;var B=Math.floor(E/d);if(r){var H=a*u*(2*Math.random()-1)+u/2;var F=a*w*(2*Math.random()-1)+w/2;var G=f.offset();G.left+=H;G.top+=F;if(G.left<x.left){H-=G.left+x.left}if(G.top<x.top){F-=G.top+x.top}var C=(x.left+x.width)-G.left-u/d;if(0>C){H+=C}var A=(x.top+x.height)-G.top-w/o;if(0>A){F+=A}}else{var H=u*D/d;var F=w*B/o}e(this).find("img").css({left:-(u*D/d)+t.marginLeft,top:-(w*B/o)+t.marginTop,width:t.width,height:t.height});var z={left:H,top:F,width:u/d,height:w/o};if(v){e.extend(z,v)}if(q){g(e(this),z,p.duration,(E===0&&y)?y:0)}else{g(e(this),z)}})}this.go=function(r,u){var v=e(i[u]),q={width:v.width(),height:v.height(),marginTop:parseFloat(v.css("marginTop")),marginLeft:parseFloat(v.css("marginLeft"))};if(!k.length){m(q)}k.find("img").attr("src",i.get(u).src);g(k,{opacity:1,zIndex:3});b.find("img").attr("src",i.get(r).src);g(b,{opacity:0,zIndex:2});c.find("img").attr("src",i.get(u).src);g(c.find("img"),{transform:"scale(1)"});f.show();var t=l.find(".ws_list");if(p.fadeOut){t.fadeOut(p.duration)}n(b,q,false,true,{opacity:1});n(k,q,true,true,{opacity:0},function(){h.trigger("effectEnd");f.hide()});g(c.find("img"),{transform:"scale(2)"},p.duration,0);var s=b;b=k;k=s}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 7.1
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"blast",prev:"",next:"",duration:20*100,delay:20*100,width:644,height:300,autoPlay:true,autoPlayVideo:false,playPause:true,stopOnHover:false,loop:false,bullets:1,caption:true,captionEffect:"parallax",controls:true,responsive:1,fullScreen:false,gestures:2,onBeforeStep:0,images:0});
(self.webpackChunkbano_textile=self.webpackChunkbano_textile||[]).push([[439],{8322:function(e,t,a){var n,o=a(2122).default,l=a(7424).default,r=a(6690).default,i=a(9728).default,u=a(6115).default,s=a(1655).default,c=a(6389).default,y=a(4704).default,p=Object.create,f=Object.defineProperty,d=Object.getOwnPropertyDescriptor,h=Object.getOwnPropertyNames,v=Object.getPrototypeOf,P=Object.prototype.hasOwnProperty,g=function(e,t,a,n){if(t&&"object"===typeof t||"function"===typeof t){var o,l=y(h(t));try{var r=function(){var l=o.value;P.call(e,l)||l===a||f(e,l,{get:function(){return t[l]},enumerable:!(n=d(t,l))||n.enumerable})};for(l.s();!(o=l.n()).done;)r()}catch(i){l.e(i)}finally{l.f()}}return e},m=function(e,t,a){return function(e,t,a){t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a}(e,"symbol"!==typeof t?t+"":t,a),a},b={};!function(e,t){for(var a in t)f(e,a,{get:t[a],enumerable:!0})}(b,{default:function(){return R}}),e.exports=(n=b,g(f({},"__esModule",{value:!0}),n));var k=function(e,t,a){return a=null!=e?p(v(e)):{},g(!t&&e&&e.__esModule?a:f(a,"default",{value:e,enumerable:!0}),e)}(a(2791)),w=a(135),T=a(365),C="YT",E=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,D=/user\/([a-zA-Z0-9_-]+)\/?/,O=/youtube-nocookie\.com/,R=function(e){"use strict";s(a,e);var t=c(a);function a(){var e;return r(this,a),e=t.apply(this,arguments),m(u(e),"callPlayer",w.callPlayer),m(u(e),"parsePlaylist",(function(t){if(t instanceof Array)return{listType:"playlist",playlist:t.map(e.getID).join(",")};if(E.test(t)){var a=t.match(E);return{listType:"playlist",list:l(a,2)[1].replace(/^UC/,"UU")}}if(D.test(t)){var n=t.match(D);return{listType:"user_uploads",list:l(n,2)[1]}}return{}})),m(u(e),"onStateChange",(function(t){var a=t.data,n=e.props,o=n.onPlay,l=n.onPause,r=n.onBuffer,i=n.onBufferEnd,u=n.onEnded,s=n.onReady,c=n.loop,y=n.config,p=y.playerVars,f=y.onUnstarted,d=window.YT.PlayerState,h=d.UNSTARTED,v=d.PLAYING,P=d.PAUSED,g=d.BUFFERING,m=d.ENDED,b=d.CUED;if(a===h&&f(),a===v&&(o(),i()),a===P&&l(),a===g&&r(),a===m){var k=!!e.callPlayer("getPlaylist");c&&!k&&(p.start?e.seekTo(p.start):e.play()),u()}a===b&&s()})),m(u(e),"mute",(function(){e.callPlayer("mute")})),m(u(e),"unmute",(function(){e.callPlayer("unMute")})),m(u(e),"ref",(function(t){e.container=t})),e}return i(a,[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"getID",value:function(e){return!e||e instanceof Array||E.test(e)?null:e.match(T.MATCH_URL_YOUTUBE)[1]}},{key:"load",value:function(e,t){var a=this,n=this.props,l=n.playing,r=n.muted,i=n.playsinline,u=n.controls,s=n.loop,c=n.config,y=n.onError,p=c.playerVars,f=c.embedOptions,d=this.getID(e);if(t)return E.test(e)||D.test(e)||e instanceof Array?void this.player.loadPlaylist(this.parsePlaylist(e)):void this.player.cueVideoById({videoId:d,startSeconds:(0,w.parseStartTime)(e)||p.start,endSeconds:(0,w.parseEndTime)(e)||p.end});(0,w.getSDK)("https://www.youtube.com/iframe_api",C,"onYouTubeIframeAPIReady",(function(e){return e.loaded})).then((function(t){a.container&&(a.player=new t.Player(a.container,o({width:"100%",height:"100%",videoId:d,playerVars:o(o({autoplay:l?1:0,mute:r?1:0,controls:u?1:0,start:(0,w.parseStartTime)(e),end:(0,w.parseEndTime)(e),origin:window.location.origin,playsinline:i?1:0},a.parsePlaylist(e)),p),events:{onReady:function(){s&&a.player.setLoop(!0),a.props.onReady()},onPlaybackRateChange:function(e){return a.props.onPlaybackRateChange(e.data)},onPlaybackQualityChange:function(e){return a.props.onPlaybackQualityChange(e)},onStateChange:a.onStateChange,onError:function(e){return y(e.data)}},host:O.test(e)?"https://www.youtube-nocookie.com":void 0},f)))}),y),f.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer\u2019s callback props instead, eg onReady, onPlay, onPause")}},{key:"play",value:function(){this.callPlayer("playVideo")}},{key:"pause",value:function(){this.callPlayer("pauseVideo")}},{key:"stop",value:function(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}},{key:"seekTo",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.callPlayer("seekTo",e),t||this.props.playing||this.pause()}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",100*e)}},{key:"setPlaybackRate",value:function(e){this.callPlayer("setPlaybackRate",e)}},{key:"setLoop",value:function(e){this.callPlayer("setLoop",e)}},{key:"getDuration",value:function(){return this.callPlayer("getDuration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("getCurrentTime")}},{key:"getSecondsLoaded",value:function(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}},{key:"render",value:function(){var e={width:"100%",height:"100%",display:this.props.display};return k.default.createElement("div",{style:e},k.default.createElement("div",{ref:this.ref}))}}]),a}(k.Component);m(R,"displayName","YouTube"),m(R,"canPlay",T.canPlay.youtube)}}]);
//# sourceMappingURL=reactPlayerYouTube.c0a1180c.chunk.js.map
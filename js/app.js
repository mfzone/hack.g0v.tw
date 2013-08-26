(function(){"use strict";var e="undefined"!=typeof window?window:global;if("function"!=typeof e.require){var t={},n={},r=function(e,t){return{}.hasOwnProperty.call(e,t)},i=function(e,t){var n,r,i=[];n=/^\.\.?(\/|$)/.test(t)?[e,t].join("/").split("/"):t.split("/");for(var o=0,a=n.length;a>o;o++)r=n[o],".."===r?i.pop():"."!==r&&""!==r&&i.push(r);return i.join("/")},o=function(e){return e.split("/").slice(0,-1).join("/")},a=function(t){return function(n){var r=o(t),a=i(r,n);return e.require(a)}},s=function(e,t){var r={id:e,exports:{}};t(r.exports,a(e),r);var i=n[e]=r.exports;return i},l=function(e){var o=i(e,".");if(r(n,o))return n[o];if(r(t,o))return s(o,t[o]);var a=i(o,"./index");if(r(n,a))return n[a];if(r(t,a))return s(a,t[a]);throw Error('Cannot find module "'+e+'"')},c=function(e,n){if("object"==typeof e)for(var i in e)r(e,i)&&(t[i]=e[i]);else t[e]=n};e.require=l,e.require.define=c,e.require.register=c,e.require.brunch=!0}})(),function(){angular.module("scroll",[]).value("$anchorScroll",angular.noop),angular.module("app",["ui","partials","app.controllers","irc.g0v.tw","hub.g0v.tw","ui.state","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider","$locationProvider"].concat(function(e,t,n){return e.state("authz",{url:"/authz/{request}",templateUrl:"/partials/authz.html",controller:"AuthzCtrl"}).state("about",{url:"/about",templateUrl:"/partials/about.html"}).state("irc",{url:"/irc",onEnter:function(){return $("body").addClass("hide-overflow")},onExit:function(){return $("body").removeClass("hide-overflow")}}).state("irc.log",{url:"/log"}).state("project",{url:"/project",templateUrl:"/partials/project.html",controller:"ProjectCtrl"}).state("project.detail",{url:"/{projectName}"}).state("people",{url:"/people",templateUrl:"/partials/people.html",controller:"PeopleCtrl"}).state("tag",{url:"/tag/{tag}",templateUrl:"/partials/tag.html",controller:"TagControl"}).state("hack",{url:"/{hackId}",templateUrl:"/partials/hack.html",controller:"HackFolderCtrl",onEnter:function(){return $("body").addClass("hide-overflow")},onExit:function(){return $("body").removeClass("hide-overflow")}}).state("hack.doc",{url:"/{docId}"}),t.otherwise("/g0v-hackath4n"),n.html5Mode(!0)})).run(["$rootScope","$state","$stateParams","$location"].concat(function(e,t,n,r){return e.$state=t,e.$stateParam=n,e.go=function(e){return r.path(e)},e._build=window.global.config.BUILD,e.$on("$stateChangeSuccess",function(e,t){var n;return n=t.name,"undefined"!=typeof window&&null!==window?"function"==typeof window.ga?window.ga("send","pageview",{page:r.$$url,title:n}):void 0:void 0}),e.safeApply=function(e,t){var n;return n=e.$root.$$phase,"$apply"===n||"$digest"===n?"function"==typeof t?t():void 0:e.$apply(t)}}))}.call(this),function(){function e(e,t){var n={}.hasOwnProperty;for(var r in t)n.call(t,r)&&(e[r]=t[r]);return e}function t(e,t){for(var n=-1,r=t.length>>>0;r>++n;)if(e===t[n]&&n in t)return!0;return!1}var n="".replace,r=[].slice;angular.module("app.controllers",["ui.state","ngCookies"]).controller({AppCtrl:["$scope","$state","$rootScope","$timeout"].concat(function(e,t,n,r){return e.$watch("$state.current.name",function(t){return"irc"===t?e.ircEnabled=!0:void 0}),r(function(){return n.hideGithubRibbon=!0},1e4)})}).controller({HackFolderCtrl:["$scope","$state","$cookies","HackFolder"].concat(function(t,n,r,i){var o;return e(t,{hasViewMode:function(e){return e.match(/g(doc|present|draw)/)},sortableOptions:{update:function(){return"undefined"!=typeof console&&null!==console?console.log("notyetupdated"):void 0}},iframes:i.iframes,docs:i.docs,tree:i.tree,godoc:function(e){var n;return"_blank"===(null!=(n=e.opts)?n.target:void 0)?(window.open(e.url,e.id),!0):e.url.match(/(https?:)?\/\/[^/]*(github|facebook)\.com/)?(window.open(e.url,e.id),!0):t.go("/"+t.hackId+"/"+decodeURIComponent(e.id))},open:function(e){return window.open(e.url,e.id),!1},activate:i.activate,saveBtn:void 0,saveModalOpts:{dialogFade:!0},saveModalOpen:!1,showSaveModal:function(e,n,i){return t.saveModalOpen=e,i&&(t.saveBtn=$(i.target)),n&&(r.savebtn="consumed",t.saveBtn)?t.saveBtn.fadeOut(1e3):void 0},showSaveBtn:function(){return"consumed"!==r.savebtn},HackFolder:i,iframeCallback:function(e){return function(r){return t.$apply(function(){return"undefined"!=typeof console&&null!==console&&console.log("iframecb",r,e),n.current.title=e.title+" – hack.g0v.tw",e.noiframe="fail"===r?!0:!1,"unsure"===r?e.iframeunsure=!0:void 0})}},debug:function(e){return"undefined"!=typeof console&&null!==console?console.log(e,this):void 0},reload:function(e){return i.getIndex(e,!0,function(){})}}),t.$watch("hackId",function(e){return i.getIndex(e,!1,function(){var e,r;return t.$watch("docId",function(e){return e?i.activate(e):void 0}),!t.docId&&(e=null!=(r=i.docs[0])?r.id:void 0)?n.transitionTo("hack.doc",{docId:e,hackId:t.hackId}):void 0})}),t.hackId=(o=n.params.hackId)?o:"g0v-hackath4n",t.$watch("$state.params.docId",function(e){return e?t.docId=encodeURIComponent(encodeURIComponent(e)):void 0})})}).directive("resize",["$window"].concat(function(e){return function(t,n){var r;return r=function(){return t.width=e.innerWidth,t.height=e.innerHeight,t.contentHeight=e.innerHeight-$(n).offset().top},angular.element(e).bind("resize",function(){return t.$apply(r)}),r()}})).directive("ngxIframe",["$parse"].concat(function(e){return{link:function(t,n,r){var i,o,a;return i=e(r.ngxIframe)(t),o=function(e,t){var n;return n=!function(){try{return"about:blank"==e.location}catch(t){}}(),t&&$.browser.mozilla?i("unsure"):i(n?"ok":"fail")},$(n).load(function(){return clearTimeout(a),o(this.contentWindow,!0)}),a=setTimeout(function(){return o(n[0].contentWindow)},5e3)}}})).directive("ngxNoclick",function(){return function(e,t){return $(t).click(function(e){return e.preventDefault(),!1})}}).directive("ngxClickMeta",["$parse"].concat(function(e){return{link:function(t,n,r){var i,o;return i=e(r.ngxClickMeta),o=navigator.appVersion.match(/Win/)?function(e){return e.ctrlKey}:function(e){return e.metaKey},$(n).click(function(e){return o(e)&&!i(t)?(e.preventDefault(),!1):void 0})}}})).directive("ngxFinal",function(){return function(e,t){return $(t).click(function(e){return e.stopPropagation()})}}).directive("scrollbar",["$window"].concat(function(e){return function(t){var n;return n=function(){var n;return n=$(".index"),t.hasScrollbar=n.get(0).scrollHeight>e.innerHeight-$(".navbar").height()},angular.element(e).bind("resize",function(){return t.$apply(n)}),t.$watch("docs",n),n()}})).factory({HackFolder:["$http"].concat(function(i){var o,a,s,l,c;return o={},a=[],s=[],c={iframes:o,docs:a,tree:s,activate:function(e,n){function r(e){return e.id}var i,l,c,u,p,h,d,f,g,m,v;for(null==n&&(n=!1),l=function(){var t,n,r,o=[];for(t=0,r=(n=a).length;r>t;++t)i=n[t],i.id===e&&o.push(i);return o}()[0],c=l.type,u=0,h=(p=s).length;h>u;++u)d=p[u],(f=null!=d?null!=(g=d.children)?g.map(r):void 0:void 0)&&t(e,f)&&(d.expand=!0);return m=n?"edit":"view",v=function(){var t;switch(t=[c],!1){case"gdoc"!==t[0]:return"https://docs.google.com/document/d/"+e+"/"+m+"?pli=1&overridemobile=true";case"gsheet"!==t[0]:return"https://docs.google.com/spreadsheet/ccc?key="+e;case"gpresent"!==t[0]:return"https://docs.google.com/presentation/d/"+e+"/"+m;case"gdraw"!==t[0]:return"https://docs.google.com/drawings/d/"+e+"/"+m;case"gsheet"!==t[0]:return"https://docs.google.com/spreadsheet/ccc?key="+e;case"hackpad"!==t[0]:return"https://"+(null!=(t=l.site)?t:"")+"hackpad.com/"+e;case"ethercalc"!==t[0]:return"https://ethercalc.org/"+e;case"url"!==t[0]:return decodeURIComponent(decodeURIComponent(e));default:return""}}(),l.hashtag&&(v+=l.hashtag),(f=o[e])?(f.src=v,f.mode=m,f):o[e]={src:v,doc:l,mode:m}},getIndex:function(e,t,n){var r,o,s=this;return l!==e||t?(r=0,o=function(){return i.get("https://www.ethercalc.org/_/"+e+"/csv").error(function(){return++r>3?void 0:setTimeout(o,1e3)}).success(function(t){return l=e,a.length=0,s.loadCsv(t,n)})},o()):n(a)},loadCsv:function(t,i){function o(){try{return JSON.parse(null!=$?$:"{}")}catch(e){}}function l(){var e;switch(e=[y],!1){case void 0!==e[0]:return h||w&&(h=w,w=null),{title:w,type:"dummy",id:"dummy"};case!(D=/^https?:\/\/www\.ethercalc\.(?:com|org)\/(.*)/.exec(e[0])):return{type:"ethercalc",id:D[1]};case!(D=/https:\/\/docs\.google\.com\/document\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gdoc",id:D[1]};case!(D=/https:\/\/docs\.google\.com\/spreadsheet\/ccc\?key=([^\/?&]+)/.exec(e[0])):return{type:"gsheet",id:D[1]};case!(D=/https:\/\/docs\.google\.com\/drawings\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gdraw",id:D[1]};case!(D=/https:\/\/docs\.google\.com\/presentation\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gpresent",id:D[1]};case!(D=/https?:\/\/(\w+\.)?hackpad\.com\/(?:.*?-)?([\w]+)(\#.*)?$/.exec(e[0])):return{type:"hackpad",site:D[1],id:D[2]};case!(D=/^(https?:\/\/[^\/]+)/.exec(e[0])):return{type:"url",id:encodeURIComponent(encodeURIComponent(y)),icon:"http://g.etfv.co/"+D[1]};default:return"undefined"!=typeof console&&null!==console?console.log("unrecognized",y):void 0}}function u(e){return e.length}function p(e){var t,n,i,o,a;return t=e.match(/^(.*?)(?::(.*))?$/),n=t[0],i=t[1],o=t[2],a=r.call(t,3),{content:i,"class":null!=o?o:"warning"}}var h,d,f,g,m,v,_,b,y,w,$,x,k,C,E,j,P,D,T,S,A,M,F,O;for(t=n.call(t,/^\"?#.*\n/gm,""),f=[],g=0,v=(m=t.split(/\n/)).length;v>g;++g)_=m[g],_&&(b=_.split(/,/),y=b[0],w=b[1],$=b[2],x=b[3],k=r.call(b,4),w=n.call(w,/^"|"$/g,""),$&&($=n.call($,/^"|"$/g,"")),$&&($=$.replace(/""/g,'"')),x&&(x=n.call(x,/^"|"$/g,"")),b=y.match(/^"?(\s*)(\S+?)?(#\S+?)?\s*"?$/),C=b[0],E=b[1],y=b[2],j=b[3],P=e({hashtag:j,url:y,title:w,indent:E.length,opts:o()},l()),"dummy"!==P.type||null!=(b=P.title)&&b.length?f.push(e(e({icon:"/img/"+P.type+".png"},P),{tags:(null!=(b=null!=(T=P.opts)?T.tags:void 0)?b:[]).concat((null!=(b=null!=x?x.split(","):void 0)?b:[]).filter(u).map(p))})):f.push(null));for(d=f,a.splice.apply(a,[0,a.length].concat(r.call(d.filter(function(e){return null!=e})))),S=0,f=[],g=0,v=(m=a).length;v>g;++g)M=g,P=m[g],M>0&&P.indent?(F=a[S],O=null!=(b=F.children)?b:F.children=[],O.push(P),f.push(null)):(S=M,f.push(P));return A=f,A=A.filter(function(e){return null!=e}),A=A.map(function(e){var t,n;return e.children&&(e.expand=null!=(t=null!=(n=e.opts)?n.expand:void 0)?t:5>e.children.length),e}),s.splice.apply(s,[0,s.length].concat(r.call(A))),c.folderTitle=h,i(a)}}})})}.call(this),function(){var e=function(t){var n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=function(e){var t=e.replace(/(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(Z|\w{3})/,function(e,t,r,i,o,a,s){return i+" "+n[r-1]+" "+t+" "+o+":"+a+":"+s+" GMT"});return new Date(Date.parse(t))},i=function(e,n){t.isFunction(n)||console.error("pred must be a function");var r=-1;return t.each(e,function(e,t){return n(t,e)?(r=e,!1):void 0}),r},o=function(e,n){return t.isFunction(n)||console.error("eq must be a function"),t.grep(e,function(t,r){var o=i(e.slice(0,r),function(e){return n(e,t)});return 0>o})},a=function(e){if(e){var t=e.match(/^((http|https):\/\/github\.com\/([^\/]+)\/([^\/]+))(\/.*)?$/);return t?{url:t[1],owner:t[3],repo:t[4],name:t[3]+"/"+t[4]}:null}},s=function(e,t){var n=e.match(/^(((http|https):\/\/(api\.github\.com)(:[0-9]+)?)(\/.*)?)$/),r=n[2];window.global.config.GITHUB_API_PROXY&&(r=window.global.config.GITHUB_API_PROXY);for(var i=n[6]?n[6]:"";n=i.match(/^([^{}]*)({(\/([^\/{}]+))})(.*)$/);)i=n[1],t&&t[n[4]]&&(i+="/",i+=t[n[4]]),i+=n[5];return r+=i},l={},c=function(e,n){l[e]||(l[e]=n,t.getJSON(e,n))},u=function(){},p={},h={},d={updated_at_desc:function(e,t){var n=r(h[t].updated_at),i=r(h[e].updated_at);return(n>i)-(i>n)}},f=function(e){var n=p[e];n&&c(s(n.issues_url),function(n){t.each(n,function(t,n){n.key=e+"#"+n.number,n.repo=e.split("/")[1],h[n.key]=n}),u()})};return{add_repository:function(e,t){var n=a(e);n&&c(s("https://api.github.com/repos{/owner}{/repo}",n),function(e){e.has_issues&&(e.name_zh=t,p[e.full_name]=e,f(e.full_name))})},set_on_update:function(e){u=e},get_issues:function(e){var n=Object.keys(h).sort(d.updated_at_desc);return e&&e.by_project&&"all"!=e.by_project&&(n=t.grep(n,function(t){return t.split("/")[1].split("#")[0]==e.by_project})),e&&e.by_labels&&e.by_labels.length>0&&(n=t.grep(n,function(n){var r=t.grep(e.by_labels,function(e){return i(h[n].labels,function(t){return t.name==e})>=0});return r.length==e.by_labels.length})),t.map(n,function(e){return h[e]})},get_labels:function(n){delete n.by_labels;var r=e.get_issues(n),i=o(t.map(r,function(e){return e.labels}),function(e,t){return e.name==t.name}).sort(function(e,t){var n=e&&e.name||"",r=t&&t.name||"";return n.localeCompare(r)});return i},get_repositories:function(){var e=Object.keys(p).sort(function(e,t){var n=p[e].name||"",r=p[t].name||"";return n.localeCompare(r)});return t.map(e,function(e){return p[e]})}}}(jQuery);angular.module("github",[]).controller("IssueCtrl",["$scope","Hub",function(t,n){t.opt_project="all",t.$watch("opt_project",function(){t.setPage()}),t.set_project=function(e){t.opt_project=e},t.opt_labels=[],t.$watch("opt_labels",function(){t.setPage()}),t.projects=[],t.issues=[],t.numPerPage=5,t.currentPage=1,t.setPage=function(){var n={by_project:t.opt_project,by_labels:t.opt_labels},r=e.get_issues(n),i=e.get_labels(n),o=function(e,t){var n=e&&e.name||"",r=t&&t.name||"";return n.localeCompare(r)},a=$.map(window.global.config.G0V_LABELS,function(e){return e.kind="g0v",e.text=e.zh?e.name+": "+e.zh:e.name,e}).sort(o),s=$.map($.grep(i,function(e){return 0>$.inArray(e.name,$.map(a,function(e){return e.name}))}),function(e){return e.kind="other",e.text=e.name,e}).sort(o);t.labels=a.concat(s),t.numPages=Math.ceil(r.length/t.numPerPage);var l=(t.currentPage-1)*t.numPerPage;t.issues=r.slice(l,l+t.numPerPage)},t.$watch("currentPage",t.setPage),e.set_on_update(function(){t.projects=e.get_repositories(),t.setPage()}),t.label_css_classes=function(e){var t=[],n=parseInt(e.color,16),r=(16711680&n)>>16,i=(65280&n)>>8,o=255&n,a=.375*r+.5*i+.125*o;return a>140?t.push("light"):t.push("dark"),t},t.$on("event:hub-ready",function(){t.firebase_projects=n.projects,t.$watch("firebase_projects.length",function(){angular.forEach(t.firebase_projects,function(t){t.repository&&e.add_repository(t.repository.url,t.name_zh)})})}),t.$watch("labels",function(){t.labels.length&&setTimeout(function(){$(".issues-label-filter select").trigger("chosen:updated")},500)})}])}.call(this),function(){function e(e,t){var n={}.hasOwnProperty;for(var r in t)n.call(t,r)&&(e[r]=t[r]);return e}function t(e,t){for(var n=-1,r=t.length>>>0;r>++n;)if(e===t[n]&&n in t)return!0;return!1}function n(e,t,n){function r(e,t,o){var s,l,c,u,p,h,d,f;if(null==e||null==t)return e===t;if(e.__placeholder__||t.__placeholder__)return!0;if(e===t)return 0!==e||1/e==1/t;if(s=i.call(e),i.call(t)!=s)return!1;switch(s){case"[object String]":return e==t+"";case"[object Number]":return e!=+e?t!=+t:0==e?1/e==1/t:e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object RegExp]":return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase}if("object"!=typeof e||"object"!=typeof t)return!1;for(l=o.length;l--;)if(o[l]==e)return!0;if(o.push(e),c=0,u=!0,"[object Array]"==s){if(p=e.length,h=t.length,first){switch(n){case"===":u=p===h;break;case"<==":u=h>=p;break;case"<<=":u=h>p}c=p,first=!1}else u=p===h,c=p;if(u)for(;c--&&(u=c in e==c in t&&r(e[c],t[c],o)););}else{if("constructor"in e!="constructor"in t||e.constructor!=t.constructor)return!1;for(d in e)if(a(e,d)&&(c++,!(u=a(t,d)&&r(e[d],t[d],o))))break;if(u){f=0;for(d in t)a(t,d)&&++f;first?u="<<="===n?f>c:"<=="===n?f>=c:c===f:(first=!1,u=c===f)}}return o.pop(),u}var i={}.toString,o={}.hasOwnProperty,a=function(e,t){return o.call(e,t)};return first=!0,r(e,t,[])}angular.module("hub.g0v.tw",["ui.state","firebase","github"]).config(["$httpProvider"].concat(function(e){var t,n;return e.defaults.useXDomain=!0,n=(t=e.defaults.headers.common)["X-Requested-With"],delete t["X-Requested-With"],n})).controller({AuthzCtrl:["$scope","$window","$state","Hub"].concat(function(e,t,n,r){return e.$on("event:auth-logout",function(){return e.safeApply(e,function(){return"function"==typeof e.cleanup?e.cleanup():void 0})}),e.$on("event:auth-login",function(i,o){var a;return a=o.user,e.$apply(function(){var e,i;return e=r.root.child("following/"+a.username),i=r.root.child("authz/"+n.params.request),e.once("value",function(e){var o;return o=e.val(),i.once("value",function(e){var s,l,c;return s=e.val(),l=null!=(c=r.authUser.email)?c:null!=(c=r.authUser.emails)?c[0]:void 0,i.update({avatar:a.avatar,username:a.username,following:o,email:l,displayName:null!=(c=a.displayName)?c:a.username},function(e){var r;return e?console.log(e):(r=s.uri)?t.location.href=r+"/"+n.params.request:void 0})})})})})})}).controller({TagControl:["$scope","$state","$location","Hub"].concat(function(t,n,r,i){return t.$watch("$state.params.tag",function(e){return t.tag=e,t.loadDisqus(e)}),e(t,{toggle_tag:function(e){var t;return t=angular.element(e.srcElement),"none"===t.parent().next().css("display")?t.parent().next().css("display","block"):t.parent().next().css("display","none")},gotag:function(e){return t.go("/tag/"+encodeURIComponent(e))},projects:i.projects,people:i.people,loadDisqus:function(e){var t;if("localhost"!==r.host())return window.disqus_shortname="g0vhub",window.disqus_identifier=encodeURIComponent("tag-"+e),window.disqus_url="http://hack.g0v.tw/tag/"+e,window.disqus_title="g0v.tw 》 tag  》"+e,"undefined"!=typeof DISQUS&&DISQUS.reset({reload:!0,config:function(){var e;return e=this.page,e.disqus_title=window.disqus_title,e.disqus_identifier=window.disqus_identifier,e.disqus_url=window.disqus_url,e}}),t=document.getElementById("disqusCommentScript"),t&&(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).removeChild(t),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="http://angularjs.disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)}(),angular.element(document.getElementById("disqus_thread")).html("")}})})}).controller({ProjectCtrl:["$scope","$state","$location","$http","$timeout","Hub","angularFire"].concat(function(n,r,i,o,a,s,l){return n.$on("event:hub-ready",function(){return a(function(){return n.safeApply(n,function(){var e,t,r,i,o,a;for(t=[],r=0,o=(i=s.projects).length;o>r;++r)a=i[r],a.thumbnail&&t.push(a);return e=t,n.featured=e[Math.floor(Math.random()*e.length)]})})}),e(n,{avatarFor:function(e){var t,n;return null!=(t=null!=(n=s.people.getByName(e))?n.avatar:void 0)?t:"http://avatars.io/github/"+e},people:s.people,projects:s.projects,opts:{},remove_tag:function(e,t){var n;return e.keywords=function(){var r,i,o,a=[];for(r=0,o=(i=e.keywords).length;o>r;++r)n=i[r],n!==t&&a.push(n);return a}()},add_tag:function(e){return null==e.keywords&&(e.keywords=[]),t(n.opts.newtag,e.keywords)||e.keywords.push(n.opts.newtag),n.opts.newtag="",!1},addfromURL:function(t,r){var i;return t||(t=prompt("Enter github user/repo with g0v.json","")),i="https://api.github.com/repos/"+t+"/contents/g0v.json",o.get(i).error(function(e){var t;return null!=e&&(t=e.message),n.opts.warning=null!=t?t:"unknown error"}).success(function(t){var i;return i=JSON.parse(Base64.decode(null!=t?t.content:void 0)),e(n.project,i),"function"==typeof r?r():void 0})},newProject:function(){return n.opts.isnew=!0,n.opts.editMode=!0,n.project&&("function"==typeof n.cleanup&&n.cleanup(),delete n.project,r.transitionTo("project",{})),n.project={}},checkProject:function(e,t){var r;return n.opts.warning=null,r=t.filter(function(t){return!e[t]}),r.length>0&&(n.opts.warning="g0v.json 無法符合格式，缺少了 "+r.join(", ")+" 關鍵字"),n.opts.warning},saveNew:function(e){var t,a,l,c,u;return e.github?angular.element(".github-url").val().match(/^https?:\/\/github.com\/.*[a-zA-Z\d]\/.*[a-zA-Z\d]/)?s.loginUser?(t=e.github.split("/"),a=t[0],a=t[1],a=t[2],l=t[3],c=t[4],u="https://api.github.com/repos/"+l+"/"+c+"/contents/",o.get(u).error(function(e){var t;return null!=e&&(t=e.message),n.opts.warning=null!=t?t:"unknown error"}).success(function(e){var t,i,o,a,u,p;for(t=!1,i=null,o=0,a=e.length;a>o;++o)u=e[o],p=u.name,p.toLowerCase().match("g0v.json")&&(t=!0,i=u);return t?n.addfromURL(l+"/"+c,function(){var e,t;return e=n.project,n.checkProject(e,["name","keywords","description","description_zh","homepage"]),(t=n.opts.warning)?t:(s.root.child("projects/"+e.name).set((e.created_by=s.loginUser.username,e)),r.transitionTo("project.detail",{projectName:e.name}))}):n.opts.warning="Github 專案底下請放入 g0v.json"})):(alert("請先進行登入動作"),i.path("/people")):n.opts.warning="Github 網址不符合格式":n.opts.warning="Github 網址不可為空"}}),n.$watch("$state.params.projectName",function(e){var t;if(e)return n.projectName=e,n.opts.editMode=!1,"function"==typeof n.cleanup&&n.cleanup(),t=l(s.root.child("projects/"+e),n,"project",{}),t.then(function(e){return n.cleanup=e})})})}).controller({PeopleCtrl:["$scope","$state","Hub","angularFire"].concat(function(r,i,o,a){return e(r,{gotag:function(e){return r.go("/tag/"+encodeURIComponent(e))},togglePerson:function(e){return r.showPerson=r.showPerson===e?null:e},remove_tag:function(e,t){var n;return e.tags=function(){var r,i,o,a=[];for(r=0,o=(i=e.tags).length;o>r;++r)n=i[r],n!==t&&a.push(n);return a}()},add_tag:function(e,n){var i;return null==e.tags&&(e.tags=[]),i=null!=n?n:r.newtag,t(i,e.tags)||e.tags.push(i),n||(r.newtag=""),!1},follow_person:function(e){return t(e,r.following)||r.following.push(e),r.followlist[e]=1},unfollow_person:function(e){var t,n,i,o,a,s;for(t=[],n=0,o=(i=r.following).length;o>n;++n)a=i[n],a!==e&&t.push(a);return r.following=t,s=(i=r.followlist)[e],delete i[e],s},projects:o.projects,filteredpeople:o.filteredpeople,people:o.people,auth:o.auth,hub:o,setUsername:o.setUsername,loginAndMerge:o.loginAndMerge,loginAndLink:o.loginAndLink}),r.$on("event:auth-login",function(e,t){var n;return n=t.user,r.safeApply(r,function(){var e,t;return r.toSetUsername=!1,e=a(o.root.child("people/"+n.username),r,"user",{}),t=a(o.root.child("following/"+n.username),r,"following",[]),r.$watch("following",function(e){var t;return r.followlist=function(){var n,r,i,o={};for(n=0,i=(r=null!=e?e:[]).length;i>n;++n)t=r[n],o[t]=!0;return o}()}),t.then(function(e){var t;return(t=r.cleanup)?r.cleanup=function(){return t(),e()}:void 0}),e.then(function(e){var t;return r.safeApply(r),(t=r.cleanup)?r.cleanup=function(){return t(),e()}:void 0})})}),r.$on("event:auth-logout",function(){return r.safeApply(r,function(){return"function"==typeof r.cleanup&&r.cleanup(),delete r.user,r.toSetUsername=!1})}),r.$on("event:auth-userNameRequired",function(e,t){var n,i;return n=t.existing,i=t.username,r.safeApply(r,function(){return r.toSetUsername=!0,r.usernameInUse=n,r.newUsername=i})}),r.$watch("hub.inited",function(e){var t;if(e)return t=function(e){var t,n,i,o,a,s,l,c;if(e){t={};for(n in e)if(i=e[n],o=i.tags)for(a=0,s=o.length;s>a;++a)l=o[a],null==t[l]&&(t[l]=0),t[l]++;return r.tagcloud=function(){var e,n=[];for(l in e=t)c=e[l],c>1&&n.push({tag:l,count:c});return n}().sort(function(e,t){return t.count-e.count})}},o.people.length&&t(r.people),setTimeout(function(){return r.$watch("people",r.safeApply(r,function(){return t}))},100)}),r.$watch("search",function(){n(r.search,void 0,"===")||(r.filteredpeople=r.people)}),o.loginUser?r.$emit("event:auth-login",{user:o.loginUser}):void 0})}).factory({Hub:["$http","angularFireCollection","$rootScope"].concat(function(t,n,r){var i,o,a,s,l,c,u,p;return i=window.global.config.FIREBASE,o={},a=new Firebase(i),s=function(){return r.$broadcast("event:hub-ready"),o.inited=!0},l=n(a.child("people").limit(50)),c=n(a.child("people")),u=n(a.child("projects"),s),p=function(e,t,n){return e=e.replace(/\./g,","),a.child("people/"+e).once("value",function(i){var o;return o=i.val(),(t||o)&&r.$broadcast("event:auth-userNameRequired",{existing:o,username:e}),o?void 0:"function"==typeof n?n():void 0})},o.setUsername=function(e){return o.authUser?p(e,!1,function(){var t,n,i,s,l;return t={tags:[],username:e},t.auth=(n={},n[o.authUser.provider+""]={id:(i=o.authUser).id,username:null!=(s=i.username)?s:""},n),o.authUser.displayName&&(t.displayName=o.authUser.displayName),t.avatar=function(){var e;switch(e=[o.authUser.provider],!1){case"github"!==e[0]:return o.authUser.avatar_url;case"twitter"!==e[0]:return"http://avatars.io/twitter/"+o.authUser.username;case"persona"!==e[0]:return"http://avatars.io/gravatar/"+o.authUser.hash;default:return"http://avatars.io/"+o.authUser.provider+"/"+o.authUser.id}}(),l=a,l.child("auth-map/"+o.authUser.provider+"/"+o.authUser.id).set({username:e}),l.child("people/"+e).set(t),a.child("people/"+e).once("value",function(e){return o.loginUser=e.val(),r.$broadcast("event:auth-login",{user:o.loginUser})})}):void 0},o.loginAndMerge=function(e){var t,n;return t=function(e){var t,n,i,s;return t=o.authUser,n=a.child("people/"+e+"/auth").update((i={},i[t.provider+""]={id:t.id,username:null!=(s=t.username)?s:""},i)),a.auth(t.firebaseAuthToken,function(){return a.child("auth-map/"+t.provider+"/"+t.id).set({username:e}),r.$broadcast("event:auth-login",{user:o.loginUser})})},n=new FirebaseSimpleLogin(a,function(e,n){return e&&console.log(e),n?a.child("auth-map/"+n.provider+"/"+n.id).once("value",function(e){var n,r;return null!=(n=e.val())&&(r=n.username,n)?t(r):void 0}):void 0}),n.login(e)},o.loginAndLink=function(e){return o.authLink=o.authUser,o.authLinkUser=o.loginUser,o.auth.login(e)},o.auth=new FirebaseSimpleLogin(a,function(e,t){return e?console.log(e):t?(o.authUser=t,a.child("auth-map/"+t.provider+"/"+t.id).once("value",function(e){var n,i,s,l,c;return!o.authLink&&null!=(n=e.val())&&(i=n.username,n)?(s=a.child("people/"+i),s.once("value",function(e){return o.loginUser=e.val(),o.loginUser?r.$broadcast("event:auth-login",{user:o.loginUser}):p(i,!0)})):(l=o.authLink)?(i=o.authLinkUser.username,a.child("auth-map/"+t.provider+"/"+t.id).set({username:i}),a.auth(l.firebaseAuthToken,function(){var e,n;return a.child("people/"+i+"/auth").update((e={},e[t.provider+""]={id:t.id,username:null!=(n=t.username)?n:""},e)),e=o.authLink,delete o.authLink,e})):(null==(n=o.authUser).username&&(n.username=null!=(n=o.authUser.email)?null!=(c=n.split("@"))?c[0]:void 0:void 0),p(o.authUser.username,!0))})):r.$broadcast("event:auth-logout")}),e(o,{root:a,people:c,projects:u,filteredpeople:l})})})}.call(this),function(){angular.module("irc.g0v.tw",["ui.state"]).controller({IRC:["$scope","$state"].concat(function(e,t){return e.$watch("$state.current.name",function(n){switch(n){case"irc":e.ircEnabled=!0;break;case"irc.log":e.irclogEnabled=!0}return e.ircActive=t.includes("irc")})})})}.call(this),function(){var e={};e.exports={BUILD:"git-0b58e59",FIREBASE:"https://g0vhub.firebaseio.com",GITHUB_API_PROXY:"http://utcr.org:8080",G0V_LABELS:[{color:"5CC2D6",name:"datainput",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"資料輸入"},{color:"F2800D",name:"translation",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"翻譯"},{color:"C7F53D",name:"OCR",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"OCR/圖文辨識"},{color:"F53D3D",name:"research",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"研究"},{color:"40BF40",name:"drawing",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"繪圖"},{color:"2EB88A",name:"parser",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"爬資料"},{color:"FFE14D",name:"bitesized",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"小工作"},{color:"3399CC",name:"doc",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"文件（技術）"},{color:"000000",name:"devops",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"維運"},{color:"8040BF",name:"promote",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"宣傳"},{color:"CC66CC",name:"writing",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"文案"}]},window.global||(window.global={}),window.global.config=e.exports}.call(this),function(){angular.element(document).ready(function(){return angular.bootstrap(document,["app"])})}.call(this);
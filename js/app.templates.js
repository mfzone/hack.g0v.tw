angular.module("app.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("partials/about.html","<div class=\"about\"><h1>Welcome to g0v Hackfoldr</h1><p>g0v hackfoldr 是你的黑客公事包，用一個網址就可以和夥伴們分享所有的專案文件！ :D</p><h2>為你的 g0v 專案製作 hackfoldr</h2><h3>建立 hackfoldr</h3><ol><li>想好專案英文網址名稱（例如：your-project-name）</li><li>在瀏覽器網址列輸入「hackfoldr.org/(你的專案的英文網址名稱)」</li></ol><p>恭喜！你已經建立自己的 hackfoldr 了！</p><h3>自訂 hackfoldr</h3><ol><li>點左上 home 圖案旁文字連結，會自動在新分頁打開 ethercalc</li><li>在 B2 格子中輸入本 hackfoldr 名稱（通常是中文）</li><li>接著從第3行開始，可以增加你想收集的網址</li><li>輸入格式為：在 B3 中輸入第一份文件名稱，A3 格子中輸入第一份文件網址</li><li>以此類推，把所有文件的顯示名稱和網址都輸入進去</li><li>切回「hackfoldr.org/(你的專案的英文網址名稱)」這個瀏覽器分頁</li><li>按 F5 / Ctrl + R 重新整理頁面</li></ol><p>恭喜！你已經打造出屬於自己的 hackfoldr 了！</p><h3>hackfoldr 進階用法</h3><ol><li>第3欄的格子為參數設定，常用的有：\'{\"expand\":true} 為資料夾預設展開、false為關；\'{\"target\":\"_blank\"} 為此連結開啟新視窗</li><li>第4欄的格子為註解，主要有三種型別：warning、important、issue，打法為 \'註解:型別</li><li>第1欄的格子網址多空一格會成為子目錄，例：A3為\'www.example.com，A4為\' www.google.com，則A3變為資料夾，A4為A3子目錄</li></ol><p>註：使用 ethercalc 不需登入，編輯後即自動存檔。如果想修改 ethercalc 試算表的名稱，直接開新的 etherclac.org 網址後，將舊試算表的內容剪貼過來即可。</p><h3>最後...</h3><ol><li>到該次黑客松的相關文件中，分享你的 hackfoldr 網址</li><li>start social hacking! :D</li></ol><h3>使用 Google Spreadsheet 管理 hackfoldr</h3><p>在某些特殊情況下，ethercalc 管理後台「無須登入、人人可編輯」的特色，會影響協作進度。此時可考慮在初期「發散式」的連結收集後，轉向「收歛式」，改用 Google Spreadsheet 後端，來限定某些具編輯權限的人。方式如下:</p><ol><li>開一個 Google 試算表，選「File (檔案)」>「Publish to the web... (發布到網頁上)」再按「Start publishing (開始發佈)」、「OK (確定)」。</li><li>取得發佈網址，例如:<blockquote><a href=\"https://docs.google.com/spreadsheets/d/1Wbk0HiD4yRVus3qXzA2d8a7LmZ3wYWCSWWdGD39sWsU/pubhtml\">https://docs.google.com/spreadsheets/d/1Wbk0HiD4yRVus3qXzA2d8a7LmZ3wYWCSWWdGD39sWsU/pubhtml</a></blockquote></li><li>在 /d/ 後面，直到下個斜線為止的文數字就是試算表的 ID，放到 hackfoldr.org/ 後面即為文件夾網址，例如:<blockquote><a href=\"http://hackfoldr.org/1Wbk0HiD4yRVus3qXzA2d8a7LmZ3wYWCSWWdGD39sWsU\">http://hackfoldr.org/1Wbk0HiD4yRVus3qXzA2d8a7LmZ3wYWCSWWdGD39sWsU</a></blockquote></li><li>如有需要，可運用 bit.ly 等服務自訂短網址。</li></ol><p>試算表內的格式和 ethercalc 相同，但目前不支援空白行，第一個空白行以下的資料將被忽略。</p><h2>關於</h2><h3>g0v hackfoldr</h3><p>g0v hackfoldr 是經過客製的 hackfoldr，它能夠：</p><ul><li>囊括相關網址<ul><li>把參加 g0v 黑客松所需的連結，整合在導覽列中，讓你隨時取用</li><li>用 etherclac.org 試算表，設定你的文件清單</li></ul></li><li>預覽文件<ul><li>在預覽窗格中直接打開 hackpad 或 google docs</li><li>打開 google docs 時預設為非編輯模式，避免編輯者過多時產生的問題</li><li>點擊文件清單的空白處或邊緣，可以收合側邊欄，擁有更多空間</li></ul></li><li>登錄自己<ul><li>Hub 簽到處可以用現成的 Github / Twitter / Facebook 帳號登入 g0v，或者也可以用 email 登入 g0v</li><li>登入後別忘了替自己貼標籤，讓大家知道什麼樣的專案可以找上你</li><li>如果打算參加某次黑客松，記得加上當次黑客松的標籤（例如：「hackath3n」），讓大家知道你會出現，實體或遠距都可以</li></ul></li><li>與同好交流<ul><li>在黑客列表右上方的搜尋框輸入關鍵字，即可馬上找到趣味相投的人</li><li>點選任一個標籤，除了可以列出擁有同樣標籤的人之外，同時可以進入該標籤的 disqus 討論區，和同好們交流意見</li></ul></li></ul><p>g0v hackfoldr 當然也是開源專案，原始碼在<a href=\"https://github.com/g0v/hack.g0v.tw\">github</a></p><h3>hackfoldr</h3><p>hackfoldr 是 clkao 為了 g0v 黑客松活動而開發的開源專案，原始碼也在<a href=\"https://github.com/hackfoldr/hackfoldr\">github</a></p></div>");
$templateCache.put("partials/authz.html","<div class=\"h1\">authz request</div>");
$templateCache.put("partials/hack.html","<div resize=\"resize\" ng-cloak=\"ng-cloak\" class=\"hackfolder\"><div ng-class=\"{collapsed: collapsed, scrollbar: hasScrollbar, index_show: sidebar}\" ng-click=\"collapsed=!collapsed\" ng-style=\"{height: contentHeight}\" scrollbar=\"scrollbar\" class=\"index\"><div class=\"hackid\"><i class=\"icon-home\"></i>&nbsp;<a ng-href=\"http://ethercalc.org/{{hackId}}\" target=\"_blank\" ngx-final=\"ngx-final\" class=\"indexlink expanded-content\">{{HackFolder.folderTitle || hackId}}</a><small class=\"visible-desktop\">{{ {\"true\": \"&#x25C2;\", \"false\": \"&#x25B8;\"}[!collapsed] }}</small></div><ul ui-sortable=\"sortableOptions\" ng-model=\"tree\" class=\"wrap\"><li ng-repeat=\"doc in tree\" ng-title=\"{{doc.title || doc.id}}\" ngx-noclick=\"ngx-noclick\" ng-class=\"{active: doc.id == docId}\"><div ng-include=\"\'partials/hackitem.html\'\" class=\"entry\"></div><ul ng-show=\"doc.children &amp;&amp; doc.expand\" ui-sortable=\"sortableOptions\" ng-model=\"doc.children\" ng-animate=\"\'fade\'\"><li ng-repeat=\"doc in doc.children | filter:doc.tagFilter:tags\" ng-title=\"{{doc.title || doc.id}}\" ngx-noclick=\"ngx-noclick\" ng-class=\"{active: doc.id == docId}\"><div ng-include=\"\'partials/hackitem.html\'\" class=\"entry\"></div></li></ul></li></ul></div><div ng-style=\"{height: contentHeight}\" class=\"pad-container\"><div class=\"navbar navbar-inverse navbar-fixed-top hidden-desktop\"><div class=\"navbar-inner\"><div class=\"container\"><a ng-click=\"toggleSidebar()\" class=\"btn btn-navbar\"><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></a><div id=\"brand\" ng-bind=\"$state.current.title\" href=\"#\"></div></div></div></div><article ng-show=\"showIndex\" ng-include=\"\'partials/hackindex.html\'\" class=\"pad\"></article><article ng-repeat=\"(key, iframe) in iframes\" ng-show=\"docId == key\" ng-if=\"docId == key || iframe.doc.type != \'video\'\" class=\"pad\"><span ng-show=\"hasViewMode(iframe.doc.type) &amp;&amp; iframe.mode != \'edit\'\" ng-click=\"activate(iframe.doc.id, true)\" class=\"docmode\">edit</span><span ng-show=\"(iframe.doc.type==\'hackpad\') &amp;&amp; showSaveBtn()\" ng-click=\"showSaveModal(true,false,$event)\" class=\"docmode\">save / 存檔</span><div modal=\"saveModalOpen\" close=\"showSaveModal(false)\" options=\"saveModalOpts\"><div class=\"modal-header\"><h3 id=\"saveModalLabel\">歡迎來到二十一世紀</h3></div><div class=\"modal-body\"><p>在這個時代，存檔是不需要的。</p><p>你所要做的就是把你想要寫的東西寫上去，別人就能看到了。若有同時在編輯同份文件的人，他甚至會看到你打的字一個接一個的出現。</p><p>如果不能理解的話，你可以把他當成是自動存檔，只是你的任何編輯都會隨時被自動存檔到網站上。</p><p>總而言之，歡迎來到二十一世紀。</p></div><div class=\"modal-footer\"><button ng-click=\"showSaveModal(false,true)\" class=\"btn-primary\">我瞭解了</button><span>|</span><button ng-click=\"showSaveModal(false)\" class=\"btn\">我不管，我就是要存檔</button></div></div><div ng-if=\"iframe.doc.iframeunsure\" class=\"noiframe unsure\">按以下連結，可開啟到新頁籤:<br/><span class=\"link\"><img ng-src=\"{{iframe.doc.icon}}\" title=\"{{iframe.doc.title || iframe.doc.id}}\"/><a ng-href=\"{{iframe.src}}\" target=\"{{iframe.doc.id}}\">{{iframe.src}}</a></span><div ng-click=\"iframe.doc.iframeunsure = false\" class=\"icon icon-close\">&#x274c;</div></div><div ng-if=\"iframe.doc.noiframe\" class=\"noiframe\">按以下連結，可開啟到新頁籤:<br/><span class=\"link\"><img ng-src=\"{{iframe.doc.icon}}\" title=\"{{iframe.doc.title || iframe.doc.id}}\"/><a ng-href=\"{{iframe.src}}\" target=\"{{iframe.doc.id}}\">{{iframe.src}}</a></span></div><iframe ng-if=\"iframe.doc.opts.bar &amp;&amp; iframe.doc.opts.enable_bar[iframe.doc.type]\" src=\"{{barframeSrc(iframe.doc)}}\" style=\"position: fixed; z-index: 99; background: black\" width=\"100%\" height=\"36px\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" frameborder=\"0\" class=\"bar\"></iframe><iframe ng-show=\"!iframe.doc.noiframe\" ng-src=\"{{iframe.src}}\" ngx-iframe=\"iframeCallback(iframe.doc)\" class=\"embed\"></iframe></article></div></div>");
$templateCache.put("partials/hackindex.html","<div class=\"hackindex\"><div class=\"search-label\">Search:</div><input ng-model=\"indexSearch\" placeholder=\"搜尋關鍵字..\"/><article ng-repeat=\"doc in (indexDocs || docs) | filter:indexSearch\" class=\"index-item\"><h2 class=\"title\">{{doc.title || doc.id}}</h2><p class=\"summary\">{{ doc.summary }}</p></article></div>");
$templateCache.put("partials/hackitem.html","<span ng-if=\"doc.type == \'dummy\'\" ng-click=\"doc.expand=!doc.expand\" tooltip=\"{{ {\'true\': (doc.title || doc.id), \'false\': \'\'}[!!collapsed] }}\" tooltip-placement=\"right\" tooltip-trigger=\"hover\" title=\"{{ {\'true\': (doc.title || doc.id), \'false\': \'\'}[!!collapsed] }}\" tooltip-append-to-body=\"true\" tooltip-animation=\"false\" ng-class=\"{haschildren: doc.children}\" class=\"link\"><img src=\"/img/folder.png\"/><span class=\"expanded-content\">{{doc.title || doc.id}}</span></span><a ng-click=\"godoc(doc)\" ngx-click-meta=\"open(doc)\" ngx-final=\"ngx-final\" ng-if=\"doc.type != \'dummy\'\" tooltip=\"{{ {\'true\': (doc.title || doc.id), \'false\': \'\'}[!!collapsed] }}\" tooltip-placement=\"right\" tooltip-trigger=\"hover\" title=\"{{ {\'true\': (doc.title || doc.id), \'false\': \'\'}[!!collapsed] }}\" tooltip-append-to-body=\"true\" tooltip-animation=\"false\" ng-class=\"{haschildren: doc.children}\" class=\"link\"><img ng-src=\"{{doc.icon}}\"/><span class=\"expanded-content\">{{doc.title || doc.id}}</span><span ng-show=\"doc.tagFilter\" class=\"expanded-content\">[{{doc.tagFilter}}]</span><span ng-repeat=\"tag in doc.tags\" class=\"label label-{{tag.class}}\">{{tag.content}}</span></a><span ng-if=\"doc.children\" ng-class=\"{collapsed: !doc.expand}\" ng-click=\"doc.expand=!doc.expand\" title=\"{{ {\'true\': (doc.title || doc.id), \'false\': \'\'}[!!collapsed] }}\" class=\"collapser\">{{ {\"true\": \"&#x25B8;\", \"false\": \"&#x25BE;\"}[!doc.expand] }}</span>");
$templateCache.put("partials/home.html","<div class=\"home\"><section class=\"page-header\"><h1 class=\"project-name\">來黑客松吧！</h1><h3 class=\"project-tagline\">不要問為什麼沒有人做這個，先承認你就是「沒有人」！</h3><a href=\"http://g0v.tw/zh-TW/actrecord.html\" class=\"btn btn-large\">過往活動</a><a href=\"/g0v-hackath16n\" class=\"btn btn-large\">當期黑客松 2015/10/24</a><a href=\"http://g0v.tw/zh-TW/join.html\" class=\"btn btn-large\">參加指南</a></section><section class=\"main-content\"><p>Hi!</p><p>這裡是 g0v 大黑客松的協作入口站，有當期黑客松資訊，以及過往協作紀錄資料。累積了 2012 年底以來每次百人黑客松的共筆、錄影、及各項成果。</p><h3><a id=\"立即行動\" href=\"#%E9%80%99%E8%A3%8F%E6%9C%83%E6%9C%89%E4%BB%80%E9%BA%BC\" aria-hidden=\"true\" class=\"anchor\"><span class=\"octicon octicon-link\"></span></a>立即行動</h3><p>希望 g0v 社群能量持續嗎？你可以報名參加黑客松貢獻一己之力，或捐款贊助每兩個月一次的百人大松 :)</p></section><section class=\"main-content text-center\"><a href=\"http://g0v-jothon.kktix.cc/events/g0v-hackath16n\" class=\"btn btn-success btn-large\">報名當期黑客松 (10/12 開放)</a><a href=\"http://g0v-jothon.kktix.cc/events/g0v-dathon\" class=\"btn btn-info btn-large\">捐款支持源碼大明神</a><!--iframe(class=\"kktix\",src=\"https://kktix.com/tickets_widget?slug=g0v-dathon\",frameborder=\"0\",height=\"420\",width=\"100%\",vspace=\"0\",hspace=\"0\",marginheight=\"5\",marginwidth=\"5\",scrolling=\"auto\",allowtransparency=\"true\")--></section></div>");
$templateCache.put("partials/irc.html","<iframe ng-if=\"ircEnabled\" ng-show=\"$state.current.name == \'irc\'\" ng-src=\"https://kiwiirc.com/client/irc.freenode.net/#g0v.tw\"></iframe><iframe ng-if=\"irclogEnabled\" ng-show=\"$state.current.name == \'irc.log\'\" ng-src=\"http://logbot.g0v.tw/channel/g0v.tw/today\"></iframe>");
$templateCache.put("partials/nav.html","<ul class=\"nav\"><li><a ng-href=\"/\">揪松網</a></li><li class=\"dropdown-split-right dropdown\"><a class=\"dropdown-toggle\">各期黑客松<i class=\"icon-caret-down\"></i></a><ul role=\"menu\" aria-labelledby=\"projects\" class=\"dropdown-menu pull-right\"><li><a ng-href=\"/g0v-hackath12n\">選舉罷免/20150214</a></li><li><a ng-href=\"/g0v-hackath11n\">開放報禁/20141220</a></li><li><a ng-href=\"/g0v-hackath10n\">資料科學/20140830</a></li><li><a ng-href=\"/g0v-hackath9n\">還我土地/20140621</a></li><li><a ng-href=\"/g0v-hackath8n\">解除戒嚴/20140419</a></li><li><a ng-href=\"/g0v-hackath7n\">自由時代/20140222</a></li><li><a ng-href=\"/g0v-hackath6n\">勞動基準/20131221</a></li><li><a ng-href=\"/g0v-hackath5n\">美麗島/20131020</a></li><li><a ng-href=\"/g0v-hackath4n\">國民大會/20130810</a></li><li><a ng-href=\"/g0v-hackath3n\">客廳工廠/20130606</a></li><li><a ng-href=\"/g0v-hackath2n\">九大建設/20130323</a></li><li><a href=\"https://hackpad.com/lIoCjaeMWzC\">公地放領/20130127</a></li><li><a href=\"https://hackpad.com/ul6fMthof2S\">動員戡亂/20121201</a></li><li><a target=\"_blank\" href=\"https://www.google.com/calendar/embed?src=cpcf6iv5pt9l6gl2ue3svo63e8%40group.calendar.google.com&amp;ctz=Asia/Taipei\">社群行事曆</a></li></ul></li><li class=\"dropdown\"><a class=\"dropdown-toggle\">長期專案<i class=\"icon-caret-down\"></i></a><ul role=\"menu\" aria-labelledby=\"projects\" class=\"dropdown-menu pull-right\"><li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng-href=\"/projectpool\">g0v專案池</a></li><li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng-href=\"/meta\">社群基礎建設</a></li><li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng-href=\"/g0v-ly\">立法院專案</a></li><li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng-href=\"/3du\">萌典</a></li><li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng-href=\"/don-democracy\">動民主家族</a></li><li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng-href=\"/g0vwelfare\">福利請聽</a></li><li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng-href=\"/kuansim\">鄉民關心你</a></li><li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng-href=\"/tisa\">服貿協議</a></li><li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng-href=\"/g0v-cy\">開放政治獻金</a></li><li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng-href=\"/g0v-summit2014\">2014 summit</a></li></ul></li><li class=\"dropdown\"><a class=\"dropdown-toggle\">協作<i class=\"icon-caret-down\"></i></a><ul role=\"menu\" aria-labelledby=\"projects\" class=\"dropdown-menu pull-right\"><li role=\"presentation\"><a target=\"_blank\" role=\"menuitem\" tabindex=\"-1\" ng-href=\"/project\">專案列表</a></li><li role=\"presentation\"><a target=\"_blank\" href=\"https://github.com/g0v\">github 動態</a></li><li role=\"presentation\"><a target=\"_blank\" href=\"https://g0v.hackpad.com/\">hackpad 共筆動態</a></li><li role=\"presentation\"><a target=\"_blank\" href=\"https://drive.google.com/folderview?id=0B0NsS2a-Qx8ZN19uV1p6YWd6TXc#\">google drive 動態</a></li></ul></li><li class=\"dropdown\"><a class=\"dropdown-toggle\">討論<i class=\"icon-caret-down\"></i></a><ul role=\"menu\" aria-labelledby=\"projects\" class=\"dropdown-menu pull-right\"><li role=\"presentation\"><a target=\"_blank\" role=\"menuitem\" tabindex=\"-1\" ng-href=\"/irc\">IRC 聊天室</a></li><li role=\"presentation\"><a target=\"_blank\" href=\"http://logbot.g0v.tw/\">IRC 聊天紀錄</a></li><li role=\"presentation\"><a target=\"_blank\" href=\"https://groups.google.com/forum/#!forum/g0v-general\">googlegroups 論壇</a></li><li role=\"presentation\"><a target=\"_blank\" href=\"http://community.g0v.tw\">新後勤中心</a></li></ul></li><li class=\"dropdown\"><a class=\"dropdown-toggle\">資源<i class=\"icon-caret-down\"></i></a><ul role=\"menu\" aria-labelledby=\"projects\" class=\"dropdown-menu pull-right\"><li role=\"presentation\"><a target=\"_blank\" href=\"http://data.g0v.tw/\">資料集</a></li><li role=\"presentation\"><a target=\"_blank\" href=\"http://g0v.github.io/moc-license-center/index.html\">g0v 授權中心</a></li><li role=\"presentation\"><a target=\"_blank\" href=\"http://g0v.github.io/moc-license-center/software.html\">g0v 軟體中心</a></li></ul></li><li><a target=\"_blank\" href=\"http://g0v.github.io/leve1up/\">新手上路<span class=\"label label-important\">看過來</span></a></li></ul>");
$templateCache.put("partials/people.html","<div ng-cloak=\"ng-cloak\" class=\"row-fluid people people-layout\"><div id=\"left-block\" class=\"span4\"><div ng-show=\"user\" class=\"self\"><h2 class=\"displayName\">{{user.displayName}}</h2><!--.name {{user.username}}--><img ng-src=\"{{ user.avatar }}?size=large\" width=\"210\" class=\"img-polaroid m-top-1\"/><form class=\"m-top-1\"><fieldset><label>關鍵字</label><span ng-repeat=\"tag in user.tags\" ng-click=\"gotag(tag)\" ng-mouseenter=\"toremove=1\" ng-mouseleave=\"toremove=0\" class=\"label tag\">{{tag}}<a ng-show=\"toremove\" ng-click=\"remove_tag(user, tag)\"><i class=\"icon-remove\"></i></a></span><div class=\"input-append m-top-p1\"><input ng-model=\"newtag\" class=\"tag\"/><button type=\"submit\" ng-click=\"add_tag(user)\" class=\"btn\">新增關鍵字</button></div><label>自我介紹</label><textarea id=\"bio-input\" ng-model=\"user.bio\"></textarea></fieldset></form><h4>連結帳號</h4><ul class=\"services unstyled\"><li ng-repeat=\"provider in [\'facebook\', \'twitter\', \'github\']\" class=\"m-bottom-1\"><a ng-href=\"http://{{provider}}.com/{{user.auth[provider].username}}\" ng-show=\"user.auth[provider]\" class=\"btn btn-block btn-primary disabled\"><i class=\"icon-{{provider}}\"></i>&nbsp; {{user.auth[provider].username}}</a><a ng-click=\"loginAndLink(provider)\" ng-show=\"!user.auth[provider]\" class=\"btn btn-block\"><i class=\"icon-{{provider}}\"></i>&nbsp; {{provider}}</a></li></ul></div><div ng-show=\"toSetUsername\" class=\"set-username m-top-1\"><h4>設定 G0V 使用者名稱</h4><form class=\"m-top-1\"><fieldset><div class=\"input-append\"><input id=\"set-username-input\" ng-model=\"newUsername\"/><button type=\"submit\" ng-click=\"setUsername(newUsername)\" class=\"btn\">設定</button></div></fieldset></form><div ng-show=\"usernameInUse\" class=\"alert alert-error\">已有 G0V 成員使用此名稱，請選擇其他使用者名稱<ul><li ng-repeat=\"(provider, auth) in usernameInUse.auth\"><a ng-click=\"loginAndMerge(provider)\" class=\"btn\"><i class=\"icon-{{provider}}\"></i>&nbsp; {{provider}}:{{auth.username}}</a></li></ul></div></div><div id=\"login-block\" ng-show=\"!user &amp;&amp; !toSetUsername\" class=\"p-all-p1\"><h3>登入 G0V</h3><div class=\"well\"><button type=\"button\" ng-click=\"auth.login(\'facebook\', { rememberMe: true, scope: \'email, user_likes\' })\" class=\"btn btn-block\"><i class=\"icon-facebook icon-large\"></i>&nbsp; 使用 facebook 登入</button><button type=\"button\" ng-click=\"auth.login(\'github\', { rememberMe: true })\" class=\"btn btn-block\"><i class=\"icon-github icon-large\"></i>&nbsp; 使用 github 登入</button><button type=\"button\" ng-click=\"auth.login(\'persona\', { rememberMe: true })\" class=\"btn btn-block\"><i class=\"icon-envelope icon-large\"></i>&nbsp; 使用 Email 登入</button></div></div><div id=\"logout-block\" ng-show=\"user || toSetUsername\" class=\"p-all-p1\"><p><button id=\"logout-link\" ng-click=\"auth.logout()\" class=\"btn btn-block\">登出 G0V</button></p></div></div><div id=\"right-block\" class=\"span8 p-all-p1\"><form class=\"form-search\"><div class=\"m-top-1\"></div><input ng-model=\"search\" placeholder=\"搜尋關鍵字或人名…\" class=\"search-query\"/></form><div class=\"tag-cate-list\"><div ng-repeat=\"cate in tagCategorizations\" class=\"tag-ctae-list__cate\"><div class=\"tag-cate-list__cate__label\"><a ng-class=\"[\'btn\', cate.class]\">{{ cate.name }}</a></div><div class=\"tag-cate-list__cate__tags row\"><span ng-repeat=\"tag in cate.tags\" class=\"label\"><span ng-click=\"$parent.$parent.search = tag\" ng-mouseenter=\"toadd=1\" ng-mouseleave=\"toadd=0\" class=\"tag\"><i ng-class=\"{transparent: !toadd}\" ng-click=\"add_tag(user, tag)\" ngx-final=\"ngx-final\" class=\"icon-plus\"></i>{{tag}}<span class=\"badge badge-info font-se\">{{ tagcloudMap[tag] }}</span></span></span></div></div><div><a ng-click=\"displayTagList = !displayTagList\" class=\"tag-cate-list__toggle-cate-list btn btn-danger\">顯示所有標籤</a></div></div><div ng-show=\"displayTagList\" class=\"taglist row\"><span ng-repeat=\"entry in tagcloud\" class=\"label\"><span ng-click=\"$parent.search = entry.tag\" ng-mouseenter=\"toadd=1\" ng-mouseleave=\"toadd=0\" class=\"tag\"><i ng-class=\"{transparent: !toadd}\" ng-click=\"add_tag(user, entry.tag)\" ngx-final=\"ngx-final\" class=\"icon-plus\"></i>{{entry.tag}}<span class=\"badge badge-info font-se\">{{entry.count}}</span></span></span><span style=\"-webkit-flex:100 1 auto\">&nbsp;</span></div><div class=\"people-list\"><div ng-class=\"{\'show-detail\': showPerson == person}\" ng-repeat=\"person in filteredpeople | filter:search\" ng-click=\"togglePerson(person)\" class=\"person ng-class:{{person.status}};\"><div ng-mouseenter=\"tofollow=1\" ng-mouseleave=\"tofollow=0\" class=\"avatar\"><img ng-src=\"{{person.avatar}}?size=medium\" class=\"img-polaroid\"/><i ng-show=\"followlist[person.$id]\" ng-click=\"unfollow_person(person.$id)\" ngx-final=\"ngx-final\" class=\"icon-star-empty\"></i><i ng-show=\"followlist[person.$id] || tofollow\" ng-click=\"follow_person(person.$id)\" ngx-final=\"ngx-final\" class=\"icon-star\"></i></div><div style=\"font-size:13px;\" class=\"person-name\">{{person.$id}}</div><div ng-show=\"person == showPerson\" class=\"person-detail\"><div class=\"person-tag\"><span ng-repeat=\"tag in person.tags\" ng-class=\"{ \'label-success\': tag == \'hackath3n\' }\" ng-click=\"gotag(tag)\" class=\"label tag\">{{tag}}</span></div><div ng-class=\"{\'person-bio-empty\': !person.bio}\" class=\"person-bio\">{{person.bio || \"( 尚未填好自我介紹 )\"}}</div><div class=\"person-contact\"><span class=\"label label-info\">聯絡資訊</span><a ng-repeat=\"provider in [\'facebook\', \'twitter\', \'github\']\" ng-show=\"person.auth[provider]\" ng-href=\"http://{{provider}}.com/{{person.auth[provider].username || person.auth[provider].id}}\" target=\"_blank\" class=\"btn\"><i class=\"contact-icon icon-large icon-{{provider}}\"></i>{{person.auth[provider].username || provider.charAt(0).toUpperCase() + provider.slice(1)}}</a></div></div></div></div></div></div>");
$templateCache.put("partials/project.edit.html","<div ng-if=\"!opts.isnew\"><h3>editing</h3><a ng-click=\"opts.editMode=0\" class=\"btn\">Done</a></div><div><h3 ng-if=\"opts.isnew\">新增專案</h3><form class=\"m-top-1\"><div ng-if=\"opts.warning\" ng-bind=\"opts.warning\" class=\"alert alert-error\"></div><fieldset ng-if=\"opts.isnew\"><label>Github Project</label><input ng-model=\"project[\'github\']\" pattern=\"^https://github.com/.*[a-zA-Zd]/.*[a-zA-Zd]\" class=\"github-url\"/><span class=\"help-block\">輸入 github project url ex, https://github.com/g0v/new_project</span></fieldset><fieldset ng-show=\"opts.isnew\"><input type=\"submit\" value=\"新增\" ng-click=\"saveNew(project)\"/></fieldset></form></div>");
$templateCache.put("partials/project.html","<div class=\"container\"><div class=\"row projects-title\"><div class=\"span7\"><h1>開發中專案</h1><input type=\"text\" placeholder=\"搜尋專案（名稱、網址、需求…）\" ng-model=\"search\" class=\"search-query\"/></div><div class=\"span5 create-project\"></div></div><div class=\"row\"><div class=\"span8\"><article ng-if=\"opts.isnew\" ng-include=\"\'partials/project.edit.html\'\" class=\"mod-project new\"></article><article ng-show=\"projects.length == 0\" class=\"projects-loading\"><div class=\"loading-indicator\"></div></article><article ng-show=\"projects.length != 0 &amp;&amp; (projects | filter:search).length === 0\" class=\"mod-project project-not-found\"><h2>找不到您關心的議題？</h2><a ng-click=\"newProject()\" class=\"btn btn-success btn-large\"><i class=\"icon-plus\"></i>立刻新增專案！</a></article><article ng-repeat=\"project in projects | filter:search\" class=\"mod-project\"><h2><a href=\"javascript:\">{{project.name_zh || project.name}}</a><small ng-show=\"project.projects\">&nbsp;隸屬&nbsp;<a href=\"javascript:\" ng-repeat=\"pname in project.projects\">{{pname}}&nbsp;</a></small></h2><p>{{ project.description_zh }}</p><dl class=\"dl-horizontal mod-project-meta\"><dt ng-show=\"project.homepage\">專案網址</dt><dd ng-show=\"project.homepage\"><a ng-href=\"{{project.homepage}}\">{{project.homepage}}</a></dd><dt>專案連結</dt><dd><div class=\"mod-project-links\"><ul><li ng-show=\"project.homepage\"><a ng-href=\"{{project.homepage}}\" target=\"_blank\"><i class=\"icon-link\"></i>&nbsp;\n網站</a></li><li ng-show=\"project.document\"><a ng-href=\"{{project.document}}\" target=\"_blank\"><i class=\"icon-hackfoldr\"></i>&nbsp;\n文件</a></li><li ng-show=\"project.repository\"><a href=\"{{project.repository.url}}\" target=\"_blank\"><i class=\"icon-github\"></i>&nbsp;\n程式源碼</a></li><li ng-show=\"project.video\"><a href=\"{{project.video}}\" target=\"_blank\"><i class=\"icon-youtube\"></i>&nbsp;\n5分鐘瞭解影片</a></li><li ng-show=\"project.trello\"><a href=\"{{project.trello}}\" target=\"_blank\"><i class=\"icon-trello\"></i>&nbsp;\n專案控管</a></li></ul></div></dd><dt class=\"inline\">專案進度</dt><dd class=\"inline\"><span ng-class=\"\'label-\' + project.status\" class=\"label\">{{ project.status }}</span></dd><dt class=\"inline\">專案需求</dt><dd class=\"inline-last\"><span ng-repeat=\"need in project.needs\" class=\"label label-important\">{{ need }}&nbsp;</span></dd><dt ng-if=\"project.author\">協調者</dt><dd ng-if=\"project.author\"><span data-toggle=\"tooltip\" title=\"{{project.author}}\" class=\"avatar-link\"><img ng-src=\"{{avatarFor(project.author)}}\" class=\"avatar\"/></span></dd><dt ng-if=\"project.contributors\">參與者</dt><dd ng-if=\"project.contributors\"><span data-toggle=\"tooltip\" title=\"{{user}}\" ng-repeat=\"user in project.contributors\" class=\"avatar-link\"><img ng-src=\"{{avatarFor(user)}}\" class=\"avatar\"/>&nbsp;</span></dd></dl></article><!--.paginationul\n  li.disabled\n    span «\n  li.active\n    span 1\n  li\n    a(href=\'#\') 2\n  li\n    a(href=\'#\') 3\n  li\n    a(href=\'#\') 4\n  li\n    a(href=\'#\') 5\n  li\n    a(href=\'#\') Next--></div><div class=\"span4\"><section ng-controller=\"IssueCtrl\" class=\"mod-issues\"><!--div.issues-filter.btn-group.pull-righta(href=\'#\',data-toggle=\'dropdown\').btn.btn-mini.dropdown-toggle easy\n  span.caret\nul.dropdown-menu\n  li: a(href=\'#\') all\n  li.divider\n  li: a(href=\'javascript://\') easy\n  li: a(href=\'javascript://\') medium\n  li: a(href=\'javascript://\') hard--><div class=\"issues-filter btn-group pull-right\"><a href=\"javascript://\" data-toggle=\"dropdown\" class=\"btn btn-mini dropdown-toggle\">Project: {{opt_project}}&nbsp;<span class=\"caret\"></span></a><ul class=\"dropdown-menu\"><li><a ng-click=\"set_project(\'all\')\"><dl class=\"dl-horizontal\"><dt></dt><dd>all projects</dd></dl></a></li><li class=\"divider\"></li><li ng-repeat=\"project in projects\"><a ng-click=\"set_project(project.name)\"><dl class=\"dl-horizontal\"><dt><span class=\"label label-info\">{{project.name}}</span></dt><dd>{{project.name_zh || project.name}}&nbsp;</dd></dl></a></li></ul></div><h2>想要幫忙？</h2><p>底下是一些各專案的任務清單，您可以幫忙的事項，歡迎跳坑。請先申請 github 帳號，開始加入討論 :)</p><div class=\"issues-label-filter\"><select data-placeholder=\"Filter by Labels…\" multiple=\"multiple\" ng-model=\"opt_labels\" ng-options=\"label.name as label.text group by label.kind for label in labels\"></select><script>$(\".issues-label-filter select\").chosen({width: \"100%\"});</script></div><table class=\"table table-condensed table-hover\"><tbody><!--trtd\n  span.avatar-link(data-toggle=\'tooltip\', title=\'{{project.author}}\').pull-right\n    img.avatar(ng-src=\'{{avatarFor(\"clkao\")}}\')\n  a(href=\'\') people registry: improve load time\n  br\n  span.label.label-info hack.g0v.tw\n  span.label.label-important writer--><!--trtd\n  a(href=\'\') mobile safari main-content scrollbar not visible\n  br\n  span.label.label-info hack.g0v.tw\n  span.label.label-important programmer\n  span.label.label-important design--><!--trtd\n  span.avatar-link(data-toggle=\'tooltip\', title=\'{{project.author}}\').pull-right\n    img.avatar(ng-src=\'{{avatarFor(\"clkao\")}}\')\n  a(href=\'\') integrated chat service\n  br\n  span.label.label-info 22k\n  span.label.label-important programmer\n  span.label.label-important writer--><tr ng-show=\"issues.length === 0\" class=\"issues-loading\"><td><div class=\"loading-indicator\"></div></td></tr><tr ng-repeat=\"issue in issues\" ng-show=\"issue.title\"><td><span ng-show=\"issue.assignee\" data-toggle=\"tooltip\" title=\"{{issue.assignee.login}}\" class=\"avatar-link pull-right\"><!--img.avatar(ng-src=\'{{avatarFor(issue.assignee.login)}}\')--><img ng-src=\"{{issue.assignee.avatar_url}}\" class=\"avatar\"/></span><a href=\"{{issue.html_url}}\" target=\"_blank\">{{issue.title}}</a><br/><span class=\"badge badge-info\">{{issue.repo}}</span>&nbsp;<span ng-repeat=\"label in issue.labels\" ng-class=\"label_css_classes(label)\" ng-style=\"{\'background-color\':\'#\'+label.color}\" class=\"label\">{{label.name}}</span></td></tr><tr><td><pagination num-pages=\"numPages\" current-page=\"currentPage\" max-size=\"6\" boundary-links=\"true\" previous-text=\"\'‹\'\" next-text=\"\'›\'\" first-text=\"\'«\'\" last-text=\"\'»\'\" class=\"pagination-centered pagination-small\"></pagination></td></tr></tbody></table></section><section class=\"mod-featured\"><h2>特色推薦</h2><div class=\"mod-project\"><div ng-show=\"!featured\" class=\"featured-loading\"><div class=\"loading-indicator\"></div></div><a ng-href=\"{{featured.homepage}}\"><img ng-src=\"{{featured.thumbnail.reduce ? featured.thumbnail.0 : featured.thumbnail}}\"/></a><h2><a ng-href=\"{{featured.homepage}}\">{{featured.name_zh || featured.name}}</a><p>{{featured.description_zh}}</p></h2></div></section></div></div></div>");
$templateCache.put("partials/project.new.html","<div id=\"newprj\" class=\"modal\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">×</button><h3>新增專案</h3></div><div class=\"modal-body\"><form style=\"width:85%;margin: 0 auto\"><fieldset><label>專案名稱</label><input type=\"text\" ng-model=\"newprj.name\" placeholder=\"輸入專案名稱，例如：香民關心您\"/><label>專案說明</label><textarea ng-model=\"newprj.desc\" placeholder=\"輸入專案描述，例如：香民關心您是個利用進香來關心鄉民的概念\"></textarea><label>勾選參加黑客松期數</label><div class=\"checkboxs\"><label ng-repeat=\"h in newprj.hackathons\" class=\"checkbox\"><input type=\"checkbox\" ng-model=\"h.checked\"/>hackath{{$index}}n</label></div><label>連結的 Hackpad 或 Hackfoldr</label><input type=\"text\" ng-model=\"newprj.url\" placeholder=\"例如：http://hack.g0v.tw/kuansim/mynkDCEAXgc\"/></fieldset></form></div><div class=\"modal-footer\"><div id=\"newprj-uploaded\"><i class=\"icon-ok\"></i>新增完成</div><a href=\"#\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"btn\">取消</a><a ng-click=\"newprj.submit()\" class=\"btn btn-primary\">新增</a></div></div>");
$templateCache.put("partials/tag.html","<div ng-cloak=\"ng-cloak\" class=\"row tag-content\"><div id=\"left-block\" class=\"span4\"><div class=\"p-all-p1\"><h3>專案<ul><li ng-click=\"go(\'/project/{{project.name}}\')\" ng-repeat=\"project in projects | filter:{keywords: tag}\"><div class=\"name\">{{project[\'name_zh\'] || project.name }}</div></li></ul></h3><h3>人群<ul><li ng-repeat=\"person in people | filter:{tags: tag}\"><div ng-class=\"{{person.status}}\" style=\"width:100%;\" class=\"person\"><div class=\"row fix-m-left\"><img ng-src=\"{{person.avatar}}?size=medium\" class=\"img-polaroid\"/><div style=\"display:inline-block;font-size:20px;padding:15px 0;font-family:Century Gothic\" class=\"name\">{{person.username}}</div><br/><button ng-click=\"toggle_tag($event)\" class=\"btn m-top-1\">關鍵字</button></div><div class=\"row m-top-p1 fix-m-left hide\"><span ng-repeat=\"tag in person.tags\" ng-class=\"{ \'label-success\': tag == \'hackath3n\' }\" ng-click=\"gotag(tag)\" class=\"label tag\">{{tag}}</span></div></div></li></ul></h3></div></div><div id=\"right-block\" class=\"span8 p-all-p1\"><div class=\"p-all-p1\"><h3>關於 {{ tag }}</h3><div class=\"back-link\"><a href=\"/people\">回到 Hub</a></div><div id=\"disqus_thread\" class=\"content-panel-content\"></div></div></div></div>");}]);
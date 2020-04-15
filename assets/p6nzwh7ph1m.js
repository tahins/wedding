if (self.CavalryLogger) { CavalryLogger.start_js(["VtJQD"]); }

__d('DocumentMentionsRegex',[],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h='\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\\/!%\'"~=<>_:;',i='\\b[A-Z][^\\s'+h+']',j={PUNCTUATION:h,NAME:i};f.exports=j;},null);
__d('AtSignMentionsStrategy',['DocumentMentionsRegex'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('DocumentMentionsRegex').PUNCTUATION,i=['@','\\uff20'].join(''),j='[^'+i+h+'\\s]',k='(?:'+'\\.[ |$]|'+' |'+'['+h+']|'+')',l=new RegExp('(?:^|\\s|\\()('+'['+i+']'+'((?:'+j+k+'){0,20})'+')$'),m={name:'AtSignMentionsStrategy',findMentionableString:function(n){var o=l.exec(n);if(o!==null){var p=o[2];if(p.length)return {matchingString:p,leadOffset:o[1].length};}return null;}};f.exports=m;},null);
__d('CapitalizedNameMentionsStrategy',['DocumentMentionsRegex'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=1,i=new RegExp('(^|[^#])((?:'+c('DocumentMentionsRegex').NAME+'{'+h+',})$)'),j={name:'CapitalizedNameMentionsStrategy',findMentionableString:function(k){var l=i.exec(k);if(l!==null)return {matchingString:l[2],leadOffset:l[2].length};return null;}};f.exports=j;},null);
__d('DocumentCompositeMentionsSource',['invariant','emptyFunction','nullthrows'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();function i(k,l){var m=k.getCharacterList().toSeq().slice(0,l).reverse().takeWhile(function(n){return n.getEntity()===null;}).count();return k.getText().slice(l-m,l);}function j(k){!(k.length>0)?h(0):void 0;this.$DocumentCompositeMentionsSource1=k;this.$DocumentCompositeMentionsSource2=false;this.$DocumentCompositeMentionsSource3=null;}j.prototype.bootstrap=function(k){if(this.$DocumentCompositeMentionsSource2)return;this.$DocumentCompositeMentionsSource2=true;k=k||c('emptyFunction');var l=this.$DocumentCompositeMentionsSource1.length;function m(){l--;if(!l)k&&k();}this.$DocumentCompositeMentionsSource1.forEach(function(n){n.bootstrap(m);});};j.prototype.search=function(k,l,m){var n=l.getAnchorKey(),o=k.getBlockForKey(n);this.$DocumentCompositeMentionsSource4(i(o,l.getAnchorOffset()),m);};j.prototype.$DocumentCompositeMentionsSource4=function(k,l){var m=this.$DocumentCompositeMentionsSource1.length,n,o;for(var p=0;p<m;p++){n=this.$DocumentCompositeMentionsSource1[p];o=n.findMatch(k);if(o===null){continue;}else{var q=c('nullthrows')(o).matchingString;this.$DocumentCompositeMentionsSource3=q;n.search(q,function(r,s){if(this.$DocumentCompositeMentionsSource3===s)l(r,o.leadOffset);}.bind(this));return;}}this.$DocumentCompositeMentionsSource3=null;l(null,null);};f.exports=j;},null);
__d('DocumentMentionsSource',['invariant'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();function i(j,k){!(typeof j.findMentionableString==='function')?h(0):void 0;this.$DocumentMentionsSource1=j;this.$DocumentMentionsSource2=k;this.$DocumentMentionsSource3=false;}i.prototype.findMatch=function(j){return this.$DocumentMentionsSource1.findMentionableString(j);};i.prototype.bootstrap=function(j){if(!this.$DocumentMentionsSource3){this.$DocumentMentionsSource3=true;this.$DocumentMentionsSource2.bootstrap(j);}};i.prototype.search=function(j,k){this.$DocumentMentionsSource2.search(j,k,{strategyName:this.$DocumentMentionsSource1.name});};f.exports=i;},null);
__d('getHashtagRegexForTypeahead',['getHashtagRegexString'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){return new RegExp(c('getHashtagRegexString')()+'$','i');}f.exports=h;},null);
__d('filterCapitalizedNames',['TokenizeUtil'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(l,m){return i(l)&&(m.length>=5||j(l,m));}function i(l){var m=l.getAuxiliaryData()||k;return !m.disableAutosuggest&&!!(l.getType()==='user'||m.connectedPage);}function j(l,m){return c('TokenizeUtil').isExactMatch(m,l.getTitle());}var k={};f.exports=h;},null);
__d('WebAsyncPlusRegexSearchSource',['invariant','AbstractSearchSource'],function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('AbstractSearchSource'));j=i&&i.prototype;function k(l){'use strict';j.constructor.call(this);this.$WebAsyncPlusRegexSearchSource1=l.asyncSource;this.$WebAsyncPlusRegexSearchSource2=l.regexSource;this.$WebAsyncPlusRegexSearchSource3=!!l.appendRegexEntries;this.$WebAsyncPlusRegexSearchSource4=!!l.preferRegexEntries;!!!this.$WebAsyncPlusRegexSearchSource1?h(0):void 0;!!!this.$WebAsyncPlusRegexSearchSource2?h(0):void 0;}k.prototype.bootstrapImpl=function(l){'use strict';this.$WebAsyncPlusRegexSearchSource1.bootstrap(l);};k.prototype.$WebAsyncPlusRegexSearchSource5=function(l,m){'use strict';var n=[],o=false,p;for(var q=0;q<l.length;q++){p=l[q].getTitle();for(var r=0;r<m.length;r++)if(p===m[r].getTitle()){o=true;break;}if(!o){n.push(l[q]);}else o=false;}return n;};k.prototype.searchImpl=function(l,m,n){'use strict';var o=this.$WebAsyncPlusRegexSearchSource1,p=this.$WebAsyncPlusRegexSearchSource3,q=this.$WebAsyncPlusRegexSearchSource4,r=this.$WebAsyncPlusRegexSearchSource5;this.$WebAsyncPlusRegexSearchSource2.search(l,function(s){m(s,l);o.search(l,function(t){var u=[],v=[];if(q){u=s;v=r(t,s);}else{v=t;u=r(s,t);}var w=p?v.concat(u):u.concat(v);m(w,l);},n);},n);};f.exports=k;},null);
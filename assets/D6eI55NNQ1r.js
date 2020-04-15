if (self.CavalryLogger) { CavalryLogger.start_js(["I5Z1U"]); }

__d("PublishingToolsSource",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={COPYRIGHT_MATCH_PERMALINK:"copyright_match_permalink",DRAFTS_POSTS_TIMELINE_PAGELET:"draft_timeline_pagelet",EXPIRING_POSTS_TIMELINE_PAGELET:"expiring_timeline_pagelet",IA_URL_GROWTH_QP:"ia_url_growth_qp",NOTIFICATION:"notif",OPTIMISTIC_VIDEO_POST:"optimistic_video_post",SCHEDULED_POSTS_TIMELINE_PAGELET:"scheduled_timeline_pagelet",UNKNOWN:"unknown",VIDEO_INSIGHTS:"video_insights",VIDEO_UPLOAD_CONFIRMATION_DIALOG:"video_upload_confirmation_dialog",VIDEOS_HUB:"videos_hub",VIDEOS_YOU_CAN_USE_TIMELINE_PAGELET:"crossposted_timeline_pagelet",VIDEO_EDIT_PERMALINK:"video_edit_permalink",VIDEO_LIBRARY_MEGAPHONE:"video_library_megaphone",VIDEO_UPLOAD_NOTIF:"video_upload_notif"};},null);
__d("ReactComposerConstants",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={ID_PREFIX:"rc.",GK_VIDEO_COPYRIGHT:"video_copyright_confirmation_dialog",GK_MULTILINGUAL_COMPOSER:"multilingual_composer_www"};},null);
__d("ShareModeConst",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={SELF_PAGE:"selfpage",PAGE:"page",SELF_POST:"self",FRIEND:"friend",GROUP:"group",ALBUM:"album",MESSAGE:"message",ONE_CLICK:"oneclick",EVENT:"event",UNKNOWN:"unknown",OWN_POST:"own"};},null);
__d('EncryptedImg',['URI','XHRRequest','EncryptedImgUtils','getCrossOriginTransport'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={insertIntoStyleBackgroundImage:function(m,n){var o=function(p,q){if(p)p.style.backgroundImage="url('"+q+"')";}.bind(undefined,n);h.load(m,o);},insertIntoDOM:function(m,n){var o=function(p,q){if(p)p.setAttribute('src',q);}.bind(undefined,n);h.load(m,o);},load:function(m,n){var o=arguments.length<=2||arguments[2]===undefined?true:arguments[2],p=new (c('URI'))(m),q=c('EncryptedImgUtils').extractKey(p),r=i.bind(undefined,q,n,o);r.includeHeaders=true;new (c('XHRRequest'))(p.toString()).setTransportBuilder(c('getCrossOriginTransport')).setMethod('GET').setResponseType('arraybuffer').setResponseHandler(r).send();},dataUrlPrefix:function(m){var n=arguments.length<=1||arguments[1]===undefined?32:arguments[1];if(!m.startsWith('data:'))return m;var o=m.indexOf(',');if(o<0||o>n)o=n;return m.slice(0,o);}};Object.assign(h,c('EncryptedImgUtils'));f.exports=h;function i(m,n,o,p,q){if(!m){n(l(p,k(q)));return;}var r=j(m),s=new Uint8Array(p),t=s.subarray(2,14);s=s.subarray(14,s.length);var u={name:'AES-GCM',iv:t,tagLength:128};window.crypto.subtle.importKey('raw',r,u,false,['encrypt','decrypt']).then(function(v){return window.crypto.subtle.decrypt(u,v,s);}).then(function(v){if(o){n(l(v,k(q)));}else n(v);})['catch'](function(){});}function j(m){if(typeof m=='string'){var n=new Uint8Array(Math.floor(m.length/2)),o=0;m.replace(/(..)/g,function(p){n[o++]=parseInt(p,16);});return n;}return null;}function k(m){var n='image/jpeg',o=m.toLowerCase().match(/content-type:\s?([\w\/]*)\s/);if(o&&o.length>1)n=o[1];return n;}function l(m,n){var o=new Uint8Array(m),p='';for(var q=0,r=o.byteLength;q<r;++q)p+=String.fromCharCode(o[q]);return 'data:'+n+';base64,'+window.btoa(p);}},null);
__d('getDOMImageSize',['EncryptedImg','URI'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(m){m.onload=null;m.onerror=null;m.onreadystatechange=null;m._callback=null;m._thisObj=null;m._srcStr=null;m.parentNode&&m.parentNode.removeChild(m);}function i(){var m=this;if(m._callback)m._callback.call(m._thisObj,m.naturalWidth||m.width,m.naturalHeight||m.height,m._srcStr);h(m);}function j(){var m=this;if(m.readyState==='complete')i.call(m);}function k(){var m=this;if(m._callback)m._callback.call(m._thisObj,0,0,m._srcStr);h(m);}function l(m,n,o){o=o||null;if(!m){n.call(o,0,0,'');return;}var p=document.body;if(!p){setTimeout(l.bind(this,m,n,o),500);return;}var q;if(typeof m==='string'){q=m;}else if(typeof m==='object')if(typeof m.width==='number'&&typeof m.height==='number'){if(typeof m.src==='string'){q=m.src;if(m.naturalWidth&&m.naturalHeight){n.call(o,m.naturalWidth,m.naturalHeight,q);return;}}if(typeof m.uri==='string'){q=m.uri;if(m.width&&m.height){n.call(o,m.width,m.height,q);return;}}}else if(m instanceof c('URI'))q=m.toString();if(!q){n(0,0,m);return;}var r=document.createElement('img');r.onreadystatechange=j;r.onload=i;r.onerror=k;r._callback=n;r._thisObj=o;r._srcStr=q;if(c('EncryptedImg').isEncrypted(q)){c('EncryptedImg').insertIntoDOM(q,r);}else r.src=q;r.style.cssText='\n    position:absolute;\n    left:-5000px;\n    top:-5000px;\n    width:auto;\n    height:auto;\n    clip:rect(0 0 0 0);\n  '.replace(/\s+/,' ');p.insertBefore(r,p.firstChild);}f.exports=l;},null);
__d('CachedDOMImageSizePool',['debounce','getDOMImageSize'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){'use strict';this.$CachedDOMImageSizePool1={};this.$CachedDOMImageSizePool2=j;this.$CachedDOMImageSizePool3=0;this.$CachedDOMImageSizePool4=i;this.$CachedDOMImageSizePool5=c('debounce')(this.$CachedDOMImageSizePool6,5000,this);this.$CachedDOMImageSizePool7={};this.$CachedDOMImageSizePool8={};}h.prototype.get=function(i,j,k){'use strict';if(!i){j.call(k,0,0,i);return;}var l=this.$CachedDOMImageSizePool1[i];if(l){l.lastAccessTime=Date.now();j.call(k,l.width,l.height,l.src);}else if(this.$CachedDOMImageSizePool7[i]){this.$CachedDOMImageSizePool7[i].push(j);this.$CachedDOMImageSizePool8[i].push(k);}else{this.$CachedDOMImageSizePool7[i]=[j];this.$CachedDOMImageSizePool8[i]=[k];c('getDOMImageSize')(i,this.$CachedDOMImageSizePool9,this);}};h.prototype.set=function(i,j,k){'use strict';if(this.$CachedDOMImageSizePool3>this.$CachedDOMImageSizePool4)this.$CachedDOMImageSizePool5();var l=this.$CachedDOMImageSizePool1;if(i&&!l[i]){var m={width:j,height:k,src:i,lastAccessTime:Date.now()};l[i]=m;this.$CachedDOMImageSizePool3++;}};h.prototype.$CachedDOMImageSizePool9=function(i,j,k){'use strict';this.set(k,i,j);var l=this.$CachedDOMImageSizePool7[k],m=this.$CachedDOMImageSizePool8[k];for(var n=0,o=l.length;n<o;n++)l[n].call(m[n],i,j,k);delete this.$CachedDOMImageSizePool7[k];delete this.$CachedDOMImageSizePool8[k];};h.prototype.$CachedDOMImageSizePool6=function(){'use strict';var i=Date.now(),j=this.$CachedDOMImageSizePool1,k=this.$CachedDOMImageSizePool3,l=this.$CachedDOMImageSizePool2;for(var m in j){var n=j[m];if(i-n.lastAccessTime>l){delete j[m];k--;}}this.$CachedDOMImageSizePool3=k;};f.exports=h;},null);
__d('BackgroundImage.react',['cx','invariant','CachedDOMImageSizePool','Image.react','React','XUISpinner.react','joinClasses','clamp'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k='(-?(\\d+\\.)?\\d+(px|\\%))',l=new RegExp('^'+k+'?(\\s'+k+')?$','g'),m=new (c('CachedDOMImageSizePool'))(50,10*60*1000),n=c('React').createClass({displayName:'BackgroundImage',propTypes:{src:j.string,width:j.number.isRequired,height:j.number.isRequired,backgroundSize:j.oneOf(['contain','cover','containinside','coverinside']),loadingIndicatorStyle:j.oneOf(['none','large','small']),backgroundPosition:function(o,p,q){var r=o[p];if(r){!(typeof r==='string')?i(0):void 0;!r.match(l)?i(0):void 0;}!(o.backgroundFocus==null||o.backgroundPosition==null)?i(0):void 0;},backgroundFocus:function(o,p,q){var r=o[p];if(r){!(typeof r==='string')?i(0):void 0;!r.match(l)?i(0):void 0;}!(o.backgroundFocus==null||o.backgroundPosition==null)?i(0):void 0;},onImageLoad:j.func,optimizeResizeSpeed:j.bool,onContextMenu:j.func},getInitialState:function(){return {imageWidth:null,imageHeight:null,imageSrc:this.props.src,loading:true};},getDefaultProps:function(){return {optimizeResizeSpeed:false,loadingIndicatorStyle:'none'};},componentDidMount:function(){this._resolveImageSize();},componentDidUpdate:function(o){if(this.props.src!==this.state.imageSrc)this.setState({imageWidth:0,imageHeight:0,imageSrc:this.props.src,loading:true},this._resolveImageSize);},_resolveImageSize:function(){var o=this.state.imageSrc;if(o)m.get(o,this._onImageSizeResolved,this);},render:function(){var o={width:this.props.width+'px',height:this.props.height+'px'},p=c('joinClasses')(this.props.className,"_5f0d");return (c('React').createElement('div',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,p),style:babelHelpers['extends']({},this.props.style||{},o),onContextMenu:this.props.onContextMenu}),this._renderImage(),this._renderContent(),this._renderLoadingIndicator()));},_renderLoadingIndicator:function(){if(!this.state.loading||this.props.loadingIndicatorStyle==='none')return null;return (c('React').createElement('div',{className:"_1qe- _5lar"},c('React').createElement('div',{className:"_1qe_"},c('React').createElement('div',{className:"_1qf0"},c('React').createElement(c('XUISpinner.react'),{size:this.props.loadingIndicatorStyle})))));},_renderContent:function(){if(this.props.children)return (c('React').createElement('div',{className:"_1qe-"},c('React').createElement('div',{className:"_1qe_"},c('React').createElement('div',{className:"_1qf0"},this.props.children))));},_renderImage:function(){if(!this.state.imageWidth||!this.state.imageHeight)return;var o=this.props.width,p=this.props.height,q,r;switch(this.props.backgroundSize){case 'cover':q='cover';r=false;break;case 'coverinside':q='cover';r=true;break;case 'contain':q='contain';r=false;break;case 'containinside':q='contain';r=true;}var s=this.state.imageWidth,t=this.state.imageHeight,u=o/p,v=s/t;if(q==='contain')if((s>o||!r)&&v>=u){s=o;t=s/v;}else if(t>p||!r){t=p;s=t*v;}if(q==='cover')if((s>o||!r)&&v>=u){t=p;s=t*v;}else if(t>p||!r){s=o;t=s/v;}var w=this._getImageStyle(s,t);return (c('React').createElement(c('Image.react'),{alt:'',className:"_5i4g"+(this.props.optimizeResizeSpeed?' '+"_5sjv":''),style:w,src:this.state.imageSrc}));},_getImageStyle:function(o,p){var q=['50%','50%'],r=this._getBackgroundPositionPxValue;if(this.props.backgroundPosition){q=this.props.backgroundPosition.split(' ');}else if(this.props.backgroundFocus){q=this.props.backgroundFocus.split(' ');r=this._getBackgroundFocusPxValue;}return {width:Math.round(o)+'px',height:Math.round(p)+'px',left:r(q[0],o,this.props.width),top:r(q[1]||q[0],p,this.props.height)};},_getBackgroundPositionPxValue:function(o,p,q){var r=parseFloat(o),s=o.substr(r.toString().length);if(s==='px')return o;return Math.round((q-p)*(r/100))+'px';},_getBackgroundFocusPxValue:function(o,p,q){var r=parseFloat(o),s=o.substr(r.toString().length);if(p<q)return '0';var t=s==='px'?r:Math.round(p*(r/100)),u=t-q/2;u=c('clamp')(u,0,p-q);return -u+'px';},_onImageSizeResolved:function(o,p,q){if(!this.isMounted()||this.state.imageSrc!==q)return;var r=this.props.onImageLoad?this.props.onImageLoad.bind(null,o,p):null;this.setState({imageWidth:o,imageHeight:p,loading:false},r);}});f.exports=n;},null);
__d('XUIBlock',['cx','React'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j={propTypes:{background:i.oneOf(['base-wash','light-wash','white','highlight','transparent'])},getDefaultProps:function(){return {background:'transparent'};},getBackgroundClass:function(k){var l=(k.background==='base-wash'?"_4-u5":'')+(k.background==='light-wash'?' '+"_57d8":'')+(k.background==='white'?' '+"_4-u8":'')+(k.background==='highlight'?' '+"_4-u7":'');return l;}};f.exports=j;},null);
__d('XUICard.react',['cx','React','XUIBlock','joinClasses'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').createClass({displayName:'XUICard',propTypes:c('XUIBlock').propTypes,getDefaultProps:function(){return babelHelpers['extends']({},c('XUIBlock').getDefaultProps(),{background:'white'});},render:function(){var j=c('joinClasses')("_4-u2",c('XUIBlock').getBackgroundClass(this.props));return (c('React').createElement('div',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,j)}),this.props.children));}});f.exports=i;},null);
__d('XUIAmbientNUXBody.react',['cx','React','XUICloseButton.react','joinClasses'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'XUIAmbientNUXBody',propTypes:{onCloseButtonClick:i.func},render:function(){var k=c('joinClasses')("_21es",this.props.className);return (c('React').createElement('div',{className:k},c('React').createElement(c('XUICloseButton.react'),{shade:'light',className:"_36gl",onClick:this.props.onCloseButtonClick}),c('React').createElement('div',{className:"_36gn"},this.props.children)));}});f.exports=j;},null);
__d('XUIAmbientNUX.react',['React','ReactLayer','ReactAbstractContextualDialog','XUIAmbientNUXTheme','XUIAmbientNUXBody.react'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i=300,j=380,k=c('ReactLayer').createClass(c('ReactAbstractContextualDialog').createSpec({displayName:'XUIAmbientNUX',theme:c('XUIAmbientNUXTheme')})),l=c('React').createClass({displayName:'XUIAmbientNUX',propTypes:{alignment:h.oneOf(['left','center','right']),behaviors:h.object,context:h.object,contextRef:h.func,customwidth:h.number,hasActionableContext:h.bool,insertParent:h.object,offsetX:h.number,offsetY:h.number,onBeforeHide:h.func,onCloseButtonClick:h.func,position:h.oneOf(['above','below','left','right']),shown:h.bool,width:h.oneOf(['wide','normal','auto','custom'])},_getWidth:function(){switch(this.props.width){case 'wide':return j;case 'custom':return this.props.customwidth;case 'auto':return null;default:return i;}},render:function(){return (c('React').createElement(k,{alignment:this.props.alignment,autoFocus:false,behaviors:this.props.behaviors,context:this.props.context,contextRef:this.props.contextRef,focusContextOnHide:false,hasActionableContext:this.props.hasActionableContext,insertParent:this.props.insertParent,offsetX:this.props.offsetX,offsetY:this.props.offsetY,onBeforeHide:this.props.onBeforeHide,position:this.props.position,shown:this.props.shown,width:this._getWidth(this.props)},c('React').createElement(c('XUIAmbientNUXBody.react'),{onCloseButtonClick:this.props.onCloseButtonClick},this.props.children)));}});f.exports=l;},null);
__d('XUIContextualDialogBody.react',['React'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('React').createClass({displayName:'XUIContextualDialogBody',render:function(){return (c('React').createElement('div',{className:this.props.className},this.props.children));}});f.exports=h;},null);
__d('XUIContextualDialogFooter.react',['cx','React','XUIOverlayFooter.react'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').createClass({displayName:'XUIContextualDialogFooter',render:function(){return (c('React').createElement(c('XUIOverlayFooter.react'),{className:"_572u"},this.props.children));}});f.exports=i;},null);
__d('XUIContextualDialogTitle.react',['cx','React','joinClasses'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'XUIContextualDialogTitle',propTypes:{use:i.oneOf(['primary','secondary'])},getDefaultProps:function(){return {use:'primary'};},render:function(){var k=this.props.use,l=c('joinClasses')("_47lu"+(k==='primary'?' '+"_47lv":'')+(k==='secondary'?' '+"_47mc":''),this.props.className);return (c('React').createElement('h3',{className:l},this.props.children));}});f.exports=j;},null);
__d('XUIContextualDialog.react',['cx','ContextualDialogXUITheme','React','ReactAbstractContextualDialog','ReactLayer','XUIContextualDialogBody.react','XUIContextualDialogFooter.react','XUIContextualDialogTitle.react'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('ReactLayer').createClass(c('ReactAbstractContextualDialog').createSpec({displayName:'ReactXUIContextualDialog',theme:c('ContextualDialogXUITheme')})),k=c('React').createClass({displayName:'XUIContextualDialog',propTypes:{position:i.oneOf(['above','below','left','right']),alignment:i.oneOf(['left','center','right']),offsetX:i.number,offsetY:i.number,width:i.number,autoFocus:i.bool,arrowBehavior:i.func,behaviors:i.object,shown:i.bool,context:i.object,contextRef:i.func,hoverContext:i.object,hoverContextRef:i.func,hoverShowDelay:i.number,hoverHideDelay:i.number,hideOnEscape:i.bool,onToggle:i.func,hasActionableContext:i.bool},getDefaultProps:function(){return {hasActionableContext:false,hideOnEscape:true};},_getDialogBody:function(){return this._getChildOfType(c('XUIContextualDialogBody.react'));},_getDialogTitle:function(){return this._getChildOfType(c('XUIContextualDialogTitle.react'));},_getDialogFooter:function(){return this._getChildOfType(c('XUIContextualDialogFooter.react'));},_getChildOfType:function(l){var m=null;c('React').Children.forEach(this.props.children,function(n){if(!m&&n.type===l)m=n;});return m;},updatePosition:function(){var l=this.refs.dialog;if(l)l.layer.updatePosition();},render:function(){var l=this.props.children,m=this._getDialogBody();if(m)l=c('React').createElement('div',{className:"_53iv"},this._getDialogTitle(),m);return (c('React').createElement(j,babelHelpers['extends']({},this.props,{ref:'dialog'}),l,m?this._getDialogFooter():null));}});k.WIDTH={NORMAL:312,WIDE:400};f.exports=k;},null);
__d('XUIDialogButton.react',['cx','React','XUIButton.react','joinClasses'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'XUIDialogButton',propTypes:{action:i.oneOf(['cancel','confirm','button'])},render:function(){var k=this.props.action,l=(k=='confirm'?"layerConfirm":'')+(k=='cancel'?' '+"layerCancel":'')+(k=='button'?' '+"layerButton":''),m=this.props.href;if(k=='cancel'){m='#';}else if(k=='button')m=m||'#';return (c('React').createElement(c('XUIButton.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,l),href:m})));}});f.exports=j;},null);
__d('XUIDialogCancelButton.react',['fbt','React','XUIDialogButton.react'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').createClass({displayName:'XUIDialogCancelButton',render:function(){return (c('React').createElement(c('XUIDialogButton.react'),babelHelpers['extends']({},this.props,{action:'cancel',label:h._("Cancel")})));}});f.exports=i;},null);
__d('XUIDialogOkayButton.react',['cx','fbt','React','XUIDialogButton.react','joinClasses'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k=c('React').createClass({displayName:'XUIDialogOkayButton',propTypes:{action:j.oneOf(['confirm','cancel','button']).isRequired},render:function(){return (c('React').createElement(c('XUIDialogButton.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"_2z1w"),action:this.props.action,label:i._("OK")})));}});f.exports=k;},null);
__d('XUIDialogFooter.react',['cx','LeftRight.react','React','XUIOverlayFooter.react','XUIText.react','joinClasses'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'XUIDialogFooter',propTypes:{fontSize:i.oneOf(['medium','inherit']),fullBleedBorder:i.bool,leftContent:i.object},getDefaultProps:function(){return {fontSize:'medium'};},render:function(){var k="_5a8u"+(this.props.fullBleedBorder?' '+"_27qq":'');return (c('React').createElement(c('XUIOverlayFooter.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,k)}),c('React').createElement(c('XUIText.react'),{display:'block',fontSize:this.props.fontSize},c('React').createElement(c('LeftRight.react'),null,c('React').createElement('div',null,this.props.leftContent),c('React').createElement('div',null,this.props.children)))));}});f.exports=j;},null);
__d('LineClamp.react',['cx','React','Locale','getVendorPrefixedName','joinClasses'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('getVendorPrefixedName')('lineClamp'),k=c('React').createClass({displayName:'LineClamp',propTypes:{customEllipsis:i.node,disableNative:i.bool,lineHeight:i.number,lines:i.number.isRequired,customEllipsisDisableGradient:i.bool},_renderEllipsis:function(){var l;if(this.props.lineHeight&&!this.props.customEllipsisDisableGradient)l={bottom:this.props.lineHeight+'px'};var m;if(this.props.customEllipsis&&this.props.customEllipsisDisableGradient){m=c('Locale').isRTL()?"_1osp":"_1osq";}else m=c('Locale').isRTL()?"_4ik3 _2k5c":"_4ik3 _2k5d";return (c('React').createElement('div',{style:l,className:m,key:'ellipsis'},this.props.customEllipsis?this.props.customEllipsis:'\u2026'));},render:function(){var l=!!j&&!this.props.disableNative,m=c('joinClasses')(this.props.className,"_4ik4"+(l?' '+"_4ik5":'')),n=this.props.children,o={};if(this.props.lineHeight)o={height:this.props.lineHeight*this.props.lines,lineHeight:this.props.lineHeight+'px'};if(l){o[j]=this.props.lines;}else{m=c('joinClasses')(m,'clearfix');if(this.props.customEllipsisDisableGradient){n=[c('React').createElement('div',{className:"_1osu"}),this._renderEllipsis(),c('React').createElement('div',{className:"_1osv",key:'inner'},this.props.children)];}else n=[c('React').createElement('div',{className:"_4ik6",key:'inner'},n),this._renderEllipsis()];}return (c('React').createElement('div',{className:m,style:o},n));}});f.exports=k;},null);
__d('Grid.react',['cx','React','joinClasses'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'Grid',propTypes:{cols:i.number.isRequired,fixed:i.bool,alignv:i.oneOf(['top','middle','bottom']),alignh:i.oneOf(['left','center','right']),spacing:i.string},render:function(){var l=this.props,m=l.alignh,n=l.alignv,o=l.children,p=l.cols,q=l.fixed,r=l.spacing,s=c('React').Children.count(o),t=[],u=[],v=0;c('React').Children.forEach(o,function(w,x){if(w===null||w===undefined)return;var y=w.type===k;v+=y?Math.max(w.props.colSpan||0,1):1;var z=v===p?"_51mw":'';if(!y){w=c('React').createElement(k,{alignh:m,alignv:n,className:c('joinClasses')(r,z),key:w.key||x},w);}else w=c('React').cloneElement(w,{key:w.key||x,alignh:w.props.alignh||m,alignv:w.props.alignv||n,className:c('joinClasses')(w.props.className,r,z)});u.push(w);if(v%p===0||x+1===s){if(q&&v<p){for(var aa=v;aa<p;aa++)u.push(c('React').createElement(k,{key:x+aa}));v=p;}t.push(c('React').createElement('tr',{className:"_51mx",key:x},u));u=[];v=0;}});return (c('React').createElement('table',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"uiGrid"+(' '+"_51mz")+(q?' '+"_5f0n":'')),cellSpacing:'0',cellPadding:'0'}),c('React').createElement('tbody',null,t)));}}),k=c('React').createClass({displayName:'GridItem',propTypes:{alignv:i.oneOf(['top','middle','bottom']),alignh:i.oneOf(['left','center','right'])},render:function(){var l=c('joinClasses')(this.props.className,"_51m-"+(this.props.alignv==='top'?' '+"vTop":'')+(this.props.alignv==='middle'?' '+"vMid":'')+(this.props.alignv==='bottom'?' '+"vBot":'')+(this.props.alignh==='left'?' '+"hLeft":'')+(this.props.alignh==='center'?' '+"hCent":'')+(this.props.alignh==='right'?' '+"hRght":''));return (c('React').createElement('td',babelHelpers['extends']({},this.props,{className:l})));}});j.GridItem=k;f.exports=j;},null);
__d("DateConsts",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=1000,i=60,j=60,k=24,l=7,m=12,n=30.43,o=365.242,p=i*j,q=p*k,r=q*l,s=q*o,t=h*i,u=t*j,v=h*q,w=v*l,x=v*o,y={SUNDAY:0,MONDAY:1,TUESDAY:2,WEDNESDAY:3,THURSDAY:4,FRIDAY:5,SATURDAY:6};Object.freeze(y);var z={getDaysInMonth:function(aa,ba){return new Date(aa,ba,0).getDate();},getCurrentTimeInSeconds:function(){return Date.now()/h;},DAYS:y,MS_PER_SEC:h,MS_PER_MIN:t,MS_PER_HOUR:u,MS_PER_DAY:v,MS_PER_WEEK:w,MS_PER_YEAR:x,SEC_PER_MIN:i,SEC_PER_HOUR:p,SEC_PER_DAY:q,SEC_PER_WEEK:r,SEC_PER_YEAR:s,MIN_PER_HOUR:j,HOUR_PER_DAY:k,DAYS_PER_WEEK:l,MONTHS_PER_YEAR:m,AVG_DAYS_PER_MONTH:n,AVG_DAYS_PER_YEAR:o,"private":{instantRange:{since:-8.64e+12,until:8.64e+12+1}}};f.exports=z;},null);
__d('filterObject',[],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=Object.prototype.hasOwnProperty;function i(j,k,l){if(!j)return null;var m={};for(var n in j)if(h.call(j,n)&&k.call(l,j[n],n,j))m[n]=j[n];return m;}f.exports=i;},null);
__d('keyMirrorRecursive',['invariant'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();function i(l,m){return j(l,m);}function j(l,m){var n={},o;!k(l)?h(0):void 0;for(o in l){if(!l.hasOwnProperty(o))continue;var p=l[o],q=m?m+'.'+o:o;if(k(p)){p=j(p,q);}else p=q;n[o]=p;}return n;}function k(l){return l instanceof Object&&!Array.isArray(l);}f.exports=i;},null);
__d('XUIError',['cx','invariant','Promise','ARIA','Bootloader','CSS','DataStore','DOM','Event','Parent','filterObject','getActiveElement','getElementText','isNode','memoize','nl2br'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j='data-xui-error-alignh',k='XUIError',l='data-xui-error',m="_1tp7",n='data-xui-error-position';c('Event').listen(document.documentElement,'mouseover',function(event){if(c('Parent').byClass(c('getActiveElement')(),m))return;var aa=c('Parent').byClass(event.getTarget(),m);if(aa){w(aa);}else x();});c('Event').listen(document.documentElement,'focusin',function(event){var aa=c('Parent').byClass(event.getTarget(),m);if(aa){w(aa);}else x();});c('Event').listen(document.documentElement,'focusout',function(event){x();});var o=c('memoize')(function(){return new (c('Promise'))(function(aa,ba){c('Bootloader').loadModules(["React","ReactDOM","XUIErrorDialogImpl"],function(ca,da,ea){aa(babelHelpers['extends']({React:ca,ReactDOM:da},ea.getNewDialog()));},'XUIError');});}),p=null;function q(aa){return babelHelpers['extends']({message:aa.getAttribute(l),position:aa.getAttribute(n),alignh:aa.getAttribute(j)},c('DataStore').get(aa,k));}function r(aa,ba){c('DataStore').set(aa,k,ba);}function s(aa,ba){c('DataStore').set(aa,k,babelHelpers['extends']({},c('DataStore').get(aa,k),ba));}function t(aa){c('DataStore').remove(aa,k);}var u=false,v=false;function w(aa){o().done(function(ba){var ca=ba.React,da=ba.ReactDOM,ea=ba.dialog,fa=ba.dialogMessageNode,ga=q(aa),ha=ga.message;if(ha==null)return;var ia=ca.isValidElement(ha);if(u&&!ia)da.unmountComponentAtNode(fa);if(ia){da.render(ha,fa);}else{!(typeof ha==='string'||c('isNode')(ha))?i(0):void 0;if(typeof ha==='string')ha=c('nl2br')(ha);c('DOM').setContent(fa,ha);}u=ia;ea.setContext(aa).setPosition(ga.position||'right').setAlignment(ga.alignh||(ga.position==='above'||ga.position==='below'?'right':null)).show();c('ARIA').notify(c('getElementText')(fa));p=aa;});v=true;}function x(){if(!v)return;o().done(function(aa){var ba=aa.React,ca=aa.ReactDOM,da=aa.dialog,ea=aa.dialogMessageNode;if(!p)return;if(u){ca.unmountComponentAtNode(ea);u=false;}da.hide();p=null;});}function y(aa){if(c('DOM').contains(aa,c('getActiveElement')()))w(aa);}var z={set:function(aa){var ba=aa.target,ca=aa.message,da=aa.position,ea=aa.alignh;!(ca!==null)?i(0):void 0;c('CSS').addClass(ba,m);s(ba,c('filterObject')({message:ca,position:da,alignh:ea},function(fa){return fa!==undefined;}));y(ba);},clear:function(aa){c('CSS').removeClass(aa,m);aa.removeAttribute(l);t(aa);if(aa===p)x();},updatePosition:function(){if(!v)return;o().done(function(aa){var ba=aa.dialog;if(p)ba.updatePosition();});},__setReactError:function(aa,ba){var ca=ba.message,da=ba.position,ea=ba.alignh;!(ca!==null)?i(0):void 0;r(aa,{message:ca,position:da,alignh:ea});y(aa);},__clearReactError:function(aa){t(aa);if(aa===p)x();}};f.exports=z;},null);
__d('XUIError.react',['cx','React','ReactDOM','XUIError','joinClasses'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j="_1tp7",k=c('React').createClass({displayName:'ReactXUIError',propTypes:{xuiError:i.any,xuiErrorPosition:i.oneOf(['above','below','left','right']),xuiErrorAlignh:i.oneOf(['left','center','right'])},componentDidMount:function(){if(this.props.xuiError!=null)c('XUIError').__setReactError(c('ReactDOM').findDOMNode(this),{message:this.props.xuiError,position:this.props.xuiErrorPosition,alignh:this.props.xuiErrorAlignh});},componentDidUpdate:function(){if(this.props.xuiError==null){c('XUIError').__clearReactError(c('ReactDOM').findDOMNode(this));}else c('XUIError').__setReactError(c('ReactDOM').findDOMNode(this),{message:this.props.xuiError,position:this.props.xuiErrorPosition,alignh:this.props.xuiErrorAlignh});},componentWillUnmount:function(){c('XUIError').__clearReactError(c('ReactDOM').findDOMNode(this));},render:function(){var l=c('React').Children.only(this.props.children);if(this.props.xuiError!=null)l=c('React').cloneElement(l,{className:c('joinClasses')(l.props.className,j)});return l;}});f.exports=k;},null);
__d('ReactComposerIDGenerator',['ReactComposerConstants','uniqueID'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h={getID:function(){return c('ReactComposerConstants').ID_PREFIX+c('uniqueID')();},isComposerID:function(i){return !!i&&i.startsWith(c('ReactComposerConstants').ID_PREFIX);}};f.exports=h;},null);
__d('FbFeedHighlight',['cx','JSXDOM','CSS','DOM','DOMScroll'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=1000,j=1000,k=null;function l(){return (c('JSXDOM').div({className:"_1usz"},c('JSXDOM').div({className:"_1us-"}),c('JSXDOM').div({className:"_1us_"}),c('JSXDOM').div({className:"_1ut0"}),c('JSXDOM').div({className:"_1ut1"})));}var m={highlightAndScrollTo:function(n){m.highlightAndScrollToWithTime(n,j,0);},highlightAndScrollToWithTime:function(n,o,p){m.highlightWithTime(n,o);m.scrollTo(n,p);},highlightSingle:function(n){m.highlightSingleWithTime(n,j);},highlightSingleWithTime:function(n,o){var p=l();c('DOM').appendContent(n,p);setTimeout(function(){if(k)c('DOM').remove(k);k=p;c('CSS').addClass(n,"_1ut2");},0);setTimeout(function(){c('CSS').removeClass(n,"_1ut2");setTimeout(function(){c('DOM').remove(p);if(p==k)k=null;},i+o);},i+o);},highlight:function(n){m.highlightWithTime(n,j);},highlightWithTime:function(n,o){var p=m.highlightPermanent(n);setTimeout(function(){c('CSS').removeClass(n,"_1ut2");setTimeout(c('DOM').remove.bind(null,p),i+i);},i+o);},highlightPermanent:function(n){var o=l();c('DOM').appendContent(n,o);setTimeout(c('CSS').addClass.bind(null,n,"_1ut2"),0);return o;},scrollTo:function(n,o){setTimeout(c('DOMScroll').scrollTo.bind(null,n,750,false,false,o),0);}};f.exports=m;},null);
__d('LikeConfirmer',['AsyncDialog','AsyncRequest'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=false,i=false,j={likeContent:function(){},like:function(k,l){this.likeContent=k;if(i)return;if(h){this.likeContent();}else{var m=new (c('AsyncRequest'))().setURI('/like/confirm_like.php').setRelativeTo(l);c('AsyncDialog').send(m,function(n){i=true;n.subscribe('hide',this.onCloseLikeConfirmDialog.bind(this));n.setCausalElement(l);}.bind(this));}return false;},isShowingConfirmation:function(){return i;},onCloseLikeConfirmDialog:function(){i=false;},likeSkipConfirmation:function(k){h=k;this.likeContent();}};f.exports=j;},null);
__d('ContextualLayerPositionClassOnContext',['cx','CSS'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(k){'use strict';this._layer=k;}i.prototype.enable=function(){'use strict';this._subscription=this._layer.subscribe('reposition',this._updateClassName.bind(this));if(this._layer.isShown())this._updateClassName();};i.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null;if(this._prevClassName){c('CSS').removeClass(this._layer.getContext(),this._prevClassName);this._prevClassName=null;}};i.prototype._updateClassName=function(k,l){'use strict';var m=this._layer.getContext(),n=j(l);if(this._prevClassName){if(this._prevClassName===n)return;c('CSS').removeClass(m,this._prevClassName);}c('CSS').addClass(m,n);this._prevClassName=n;};function j(k){var l=k.getAlignment(),m=k.getPosition();if(m==='below'){if(l==='left'){return "_nk";}else if(l==='right'){return "_nl";}else return "_nm";}else if(m==='above'){if(l==='left'){return "_nn";}else if(l==='right'){return "_no";}else return "_np";}else if(m==='left'){return "_nq";}else return "_nr";}Object.assign(i.prototype,{_subscription:null,_prevClassName:null});f.exports=i;},null);
__d("XVideoEditDialogController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/video\/edit\/dialog\/",{video_id:{type:"Int"},source:{type:"Enum",enumType:1},story_dom_id:{type:"String"},timeline_identifier:{type:"String"},post_id:{type:"String"},video_asset_id:{type:"Int"},__asyncDialog:{type:"Int"}});},null);
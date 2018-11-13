
ACC.belkinaddress={countryJson:null,defaultCountry:null,selectedState:null,selectedCountry:null,}
$(document).ready(function()
{$('#address\\.country').change(function(e){var countryRegions=ACC.belkinaddress.countryJson[this.value].regions;updateCountryRegions(countryRegions);});$('input[name=billingAddressOption]:radio').on('change',setBillingAddress);try{initCountrySelectData();}catch(err){}
setupCountrySelects();$('input[name=billingAddressOption]:radio').trigger('change');$(document).on("click","#placeOrder",function(e){$(this).hide();$('#placeOrderProcessing').show();})});function setupCountrySelects(){if(!ACC.belkinaddress.countryJson){return;}
var selectCountry=$('#address\\.country')
selectCountry.empty();var country;for(country in ACC.belkinaddress.countryJson){selectCountry.append($('<option>',{value:country,text:ACC.belkinaddress.countryJson[country].name}));}
var selectedCountry;if(ACC.belkinaddress.selectedCountry&&ACC.belkinaddress.selectedCountry.length>0){selectedCountry=ACC.belkinaddress.selectedCountry;}else{selectedCountry=ACC.belkinaddress.defaultCountry;}
selectCountry.val(selectedCountry);var countryRegions=ACC.belkinaddress.countryJson[selectedCountry].regions;updateCountryRegions(countryRegions,selectedCountry);}
function updateCountryRegions(countryRegions,selectedCountry){if(!ACC.belkinaddress.countryJson){return;}
var selectRegion=$('#address\\.region')
selectRegion.empty();var regionIdx;for(regionIdx in countryRegions){var regionIso=countryRegions[regionIdx].isocode;var regionName=countryRegions[regionIdx].name;selectRegion.append($('<option>',{value:regionIso,text:regionName}));}
if(ACC.belkinaddress.selectedState&&ACC.belkinaddress.selectedState.length>0){selectRegion.val(ACC.belkinaddress.selectedState);}}
function setBillingAddress(){if($('input[name=billingAddressOption]:checked').val()=='same'){$("input#address\\.firstName").val($('#deliveryAddress\\.firstName').html());$("input#address\\.surname").val($('#deliveryAddress\\.lastName').html());$("input#address\\.line1").val($('#deliveryAddress\\.line1').html());$("input#address\\.line2").val($('#deliveryAddress\\.line2').html());$("input#address\\.townCity").val($('#deliveryAddress\\.town').html());$("input#address\\.postcode").val($('#deliveryAddress\\.postalCode').html());$("input#address\\.phone").val($('#deliveryAddress\\.phone').text());var selectCountry=$('#address\\.country');selectCountry.val($('#deliveryAddress\\.country\\.isocode').html());var countryRegions=ACC.belkinaddress.countryJson[$('#deliveryAddress\\.country\\.isocode').html()].regions;updateCountryRegions(countryRegions,selectCountry);var selectRegion=$('#address\\.region');selectRegion.val($('#deliveryAddress\\.country\\.isocode').html()+'-'+$('#deliveryAddress\\.region').html());$('#billingAddressForm').hide();}else{$('#billingAddressForm').show();$("input#address\\.firstName").val('');$("input#address\\.surname").val('');$("input#address\\.line1").val('');$("input#address\\.line2").val('');$("input#address\\.townCity").val('');$("input#address\\.postcode").val('');$("input#address\\.phone").val('');var selectCountry=$('#address\\.country');selectCountry.val($('#deliveryAddress\\.country\\.isocode').html());var countryRegions=ACC.belkinaddress.countryJson[$('#deliveryAddress\\.country\\.isocode').html()].regions;updateCountryRegions(countryRegions,selectCountry);var selectRegion=$('#address\\.region');selectRegion.val('');$('select[id=address\\.state]').val('');}};

$('#lastInTheForm').click(function(event){$("input[name='card_type']").val($("#cardType").val());$("input[name='card_number']").val($("#cardNumber").val());$("input[name='card_expiry_date']").val($("#ExpiryMonth option:selected").text()+"-"+$("#ExpiryYear").val());if($("input[name='card_number']").val()===""||$("input[name='card_type']").val()===""||$("#ExpiryMonth").val()===""||$("#ExpiryYear").val()===""){$('#cardNumber_error').show();event.preventDefault();}
$("input[name='bill_to_forename']").val($("#billingAddressForm #address\\.firstName").val());$("input[name='bill_to_surname']").val($("#billingAddressForm #address\\.surname").val());$("input[name='bill_to_phone']").val($("#billingAddressForm #address\\.phone").val());$("input[name='bill_to_address_line1']").val($("#billingAddressForm #address\\.line1").val());$("input[name='bill_to_address_line2']").val($("#billingAddressForm #address\\.line2").val());$("input[name='bill_to_address_city']").val($("#billingAddressForm #address\\.townCity").val());$("input[name='bill_to_address_postal_code']").val($("#billingAddressForm #address\\.postcode").val());$("input[name='bill_to_address_country']").val($("#billingAddressForm #address\\.country option:selected").val());var stateVal=$("#billingAddressForm #address\\.region option:selected").val();var stateIsoArray=stateVal.split("-");$("input[name='bill_to_address_state']").val(stateIsoArray[stateIsoArray.length-1]);});$("#cybersourceSAForm").submit(function(){$('#cardType').attr('name','');$('#paymentId').attr('name','');$('#cardNumber').attr('name','');$('#ExpiryMonth').attr('name','');$('#ExpiryYear').attr('name','');});

$(document).ready(function(){if($("#checkOutLogin").length!=0){$('#checkOutLogin').click(function(e){e.preventDefault();$('#loginForm').submit();});gigya.socialize.addEventHandlers({onLogin:handleLogin,onLogout:handleLogout});}});function checkForEnter(event){if((event?event:window.event).keyCode==13){$('#checkOutLogin').trigger('click');}
return true;};

$(document).ready(function(){$('#voucherLink').click(function(e){e.preventDefault();var code=$('#enter-promotion-code').val();if(!code||0===code.length){return false;}
$('#voucherForm').submit();});$('.edit-quantity-link, .add-wishlist-link').click(function(e){e.preventDefault();element=$(this).parent().parent();element.submit();});$('#giftcardlink').click(function(e){e.preventDefault();var code=$('#enter-gift-card').val();if(!code||0===code.length){return false;}
$('#giftcardForm').submit();});});

ACC.myaccount={_autoload:["bindDeleteAddress","bindMyAccountTabs","bindCountrySelect","bindDefaultAddress1OnChange","bindMyAccountUnsubscribe"],deleteAddressFormSubmit:function(theAddressId)
{$.ajax({url:ACC.config.countryContextPath+"my-account/delete-address/"+theAddressId,type:'GET',success:function(data){$("#delete-modal").html(data);$('#myModal').modal({backdrop:'static',keyboard:false,show:true});}});},bindDeleteAddress:function(){if($(".delete-address-button").length!=0){$(".delete-address-button").click(function(){ACC.myaccount.deleteAddressFormSubmit($(this).attr('addressid'));});}},bindMyAccountTabs:function(){if($("#myaccount_tab_selector").length!=0){$('#myaccount_tab_selector').on('change',function(){var selectedAction=$("option:selected",this);var targetUrl='';if(selectedAction!=null&&(typeof selectedAction.attr('targetUrl')!==typeof undefined&&selectedAction.attr('targetUrl')!==false)){targetUrl=selectedAction.attr('targetUrl');window.location.href=targetUrl;}});}},bindCountrySelect:function(){var provinceSelectLabel="-- Select --";var stateSelectLabel="-- Select --";if($("#countrySelect").length!=0){$('#countrySelect').change(function(){var selectedStateList=$('#countrySelect option:selected').attr("stateList");var selectedCountry=$("#countrySelect option:selected").val();if(selectedCountry=='CA'){$("#shipping-enter-state").html('');if(selectedStateList!=""){var ar=selectedStateList.split('#');var result="<option value=''>"+provinceSelectLabel+"</option>";$('#shipping-enter-state').append(result);for(var i=0;i<ar.length;i++){var tokens=ar[i].split('|');var value=tokens[0];var label=tokens[1];result="";var currentState='';if((currentState!=null&&currentState!=='')&&(value.toUpperCase()==currentState.toUpperCase()||label.toUpperCase()==currentState.toUpperCase())){result="<option value='"+value+"' selected='selected'>"+label+"</option>";}else if(label.toUpperCase()!='SELECT'){result="<option value='"+value+"'>"+label+"</option>";}
$("#shipping-enter-state").append(result);$('#states').show();$('#stateInput').attr('disabled','disabled');$('#stateInputDiv').hide();}}else{$('#states').hide();$('#stateInput').removeAttr('disabled');$('#stateInputDiv').show();}}else{if(selectedCountry=='US'){$("#shipping-enter-state").html('');if(selectedStateList!=""){var ar=selectedStateList.split('#');var result="<option value=''>"+stateSelectLabel+"</option>";$('#shipping-enter-state').append(result);for(var i=0;i<ar.length;i++){var tokens=ar[i].split('|');var value=tokens[0];var label=tokens[1];result="";var currentState='';if((currentState!=null&&currentState!=='')&&(value.toUpperCase()==currentState.toUpperCase()||label.toUpperCase()==currentState.toUpperCase())){result="<option value='"+value+"' selected='selected'>"+label+"</option>";}else if(label.toUpperCase()!='SELECT'){result="<option value='"+value+"'>"+label+"</option>";}
$("#shipping-enter-state").append(result);$('#states').show();$('#stateInputDiv').hide();$('#stateInput').attr('disabled','disabled');}}else{$('#states').hide();$('#stateInput').removeAttr('disabled');$('#stateInputDiv').show();}}else{$('#states').hide();$('#stateInput').val(currentState);$('#stateInput').removeAttr('disabled');$('#stateInputDiv').show();}}});$('#countrySelect').trigger('change');}},bindDefaultAddress1OnChange:function(){if($("#defaultAddress1").length!=0){$('#defaultAddress1').change(function(){if($(this).is(':checked')){$('#shippingAddress').val('true');}else{$('#shippingAddress').val('false');}});}},bindMyAccountUnsubscribe:function(){if($("#unsubscribe").length!=0){$('#unsubscribe').change(function(){if($(this).is(":checked")){$('.form-section .form-checkbox').removeAttr('checked');}else{$('.form-section .form-checkbox').each(function(){this.checked=true;});}});$('.form-section .form-checkbox').change(function(){if($(this).is(":checked")){$('#unsubscribe').removeAttr('checked');}});}}};
(function(e,t,n){"function"==typeof define&&define.amd?define(["jquery"],function(r){return n(r,e,t),r.mobile}):n(e.jQuery,e,t)})(this,document,function(e,t,n,r){(function(e,t,n,r){function x(e){while(e&&"undefined"!=typeof e.originalEvent)e=e.originalEvent;return e}function T(t,n){var i=t.type,s,o,a,l,c,h,p,d,v;if(t=e.Event(t),t.type=n,s=t.originalEvent,o=e.event.props,i.search(/^(mouse|click)/)>-1&&(o=f),s)for(p=o.length,l;p;)l=o[--p],t[l]=s[l];if(i.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1),i.search(/^touch/)!==-1&&(a=x(s),i=a.touches,c=a.changedTouches,h=i&&i.length?i[0]:c&&c.length?c[0]:r,h))for(d=0,v=u.length;v>d;d++)l=u[d],t[l]=h[l];return t}function N(t){var n={},r,s;while(t){r=e.data(t,i);for(s in r)r[s]&&(n[s]=n.hasVirtualBinding=!0);t=t.parentNode}return n}function C(t,n){var r;while(t){if(r=e.data(t,i),r&&(!n||r[n]))return t;t=t.parentNode}return null}function k(){g=!1}function L(){g=!0}function A(){E=0,v.length=0,m=!1,L()}function O(){k()}function M(){_(),c=setTimeout(function(){c=0,A()},e.vmouse.resetTimerDuration)}function _(){c&&(clearTimeout(c),c=0)}function D(t,n,r){var i;return(r&&r[t]||!r&&C(n.target,t))&&(i=T(n,t),e(n.target).trigger(i)),i}function P(t){var n=e.data(t.target,s);if(!(m||E&&E===n)){var r=D("v"+t.type,t);r&&(r.isDefaultPrevented()&&t.preventDefault(),r.isPropagationStopped()&&t.stopPropagation(),r.isImmediatePropagationStopped()&&t.stopImmediatePropagation())}}function H(t){var n=x(t).touches,r,i;if(n&&1===n.length&&(r=t.target,i=N(r),i.hasVirtualBinding)){E=w++,e.data(r,s,E),_(),O(),d=!1;var o=x(t).touches[0];h=o.pageX,p=o.pageY,D("vmouseover",t,i),D("vmousedown",t,i)}}function B(e){g||(d||D("vmousecancel",e,N(e.target)),d=!0,M())}function j(t){if(!g){var n=x(t).touches[0],r=d,i=e.vmouse.moveDistanceThreshold,s=N(t.target);d=d||Math.abs(n.pageX-h)>i||Math.abs(n.pageY-p)>i,d&&!r&&D("vmousecancel",t,s),D("vmousemove",t,s),M()}}function F(e){if(!g){L();var t=N(e.target),n;if(D("vmouseup",e,t),!d){var r=D("vclick",e,t);r&&r.isDefaultPrevented()&&(n=x(e).changedTouches[0],v.push({touchID:E,x:n.clientX,y:n.clientY}),m=!0)}D("vmouseout",e,t),d=!1,M()}}function I(t){var n=e.data(t,i),r;if(n)for(r in n)if(n[r])return!0;return!1}function q(){}function R(t){var n=t.substr(1);return{setup:function(r,s){I(this)||e.data(this,i,{});var o=e.data(this,i);o[t]=!0,l[t]=(l[t]||0)+1,1===l[t]&&b.bind(n,P),e(this).bind(n,q),y&&(l.touchstart=(l.touchstart||0)+1,1===l.touchstart&&b.bind("touchstart",H).bind("touchend",F).bind("touchmove",j).bind("scroll",B))},teardown:function(r,s){--l[t],l[t]||b.unbind(n,P),y&&(--l.touchstart,l.touchstart||b.unbind("touchstart",H).unbind("touchmove",j).unbind("touchend",F).unbind("scroll",B));var o=e(this),u=e.data(this,i);u&&(u[t]=!1),o.unbind(n,q),I(this)||o.removeData(i)}}}var i="virtualMouseBindings",s="virtualTouchID",o="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),u="clientX clientY pageX pageY screenX screenY".split(" "),a=e.event.mouseHooks?e.event.mouseHooks.props:[],f=e.event.props.concat(a),l={},c=0,h=0,p=0,d=!1,v=[],m=!1,g=!1,y="addEventListener"in n,b=e(n),w=1,E=0,S;e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(var U=0;U<o.length;U++)e.event.special[o[U]]=R(o[U]);y&&n.addEventListener("click",function(t){var n=v.length,r=t.target,i,o,u,a,f,l;if(n){i=t.clientX,o=t.clientY,S=e.vmouse.clickDistanceThreshold,u=r;while(u){for(a=0;n>a;a++)if(f=v[a],l=0,u===r&&Math.abs(f.x-i)<S&&Math.abs(f.y-o)<S||e.data(u,s)===f.touchID)return t.preventDefault(),void t.stopPropagation();u=u.parentNode}}},!0)})(e,t,n),function(e){e.mobile={}}(e),function(e,t){var r={touch:"ontouchend"in n};e.mobile.support=e.mobile.support||{},e.extend(e.support,r),e.extend(e.mobile.support,r)}(e),function(e,t,r){function l(t,n,r){var i=r.type;r.type=n,e.event.dispatch.call(t,r),r.type=i}var i=e(n);e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn&&(e.attrFn[n]=!0)});var s=e.mobile.support.touch,o="touchmove scroll",u=s?"touchstart":"mousedown",a=s?"touchend":"mouseup",f=s?"touchmove":"mousemove";e.event.special.scrollstart={enabled:!0,setup:function(){function s(e,n){r=n,l(t,r?"scrollstart":"scrollstop",e)}var t=this,n=e(t),r,i;n.bind(o,function(t){e.event.special.scrollstart.enabled&&(r||s(t,!0),clearTimeout(i),i=setTimeout(function(){s(t,!1)},50))})}},e.event.special.tap={tapholdThreshold:750,setup:function(){var t=this,n=e(t);n.bind("vmousedown",function(r){function a(){clearTimeout(u)}function f(){a(),n.unbind("vclick",c).unbind("vmouseup",a),i.unbind("vmousecancel",f)}function c(e){f(),s===e.target&&l(t,"tap",e)}if(r.which&&1!==r.which)return!1;var s=r.target,o=r.originalEvent,u;n.bind("vmouseup",a).bind("vclick",c),i.bind("vmousecancel",f),u=setTimeout(function(){l(t,"taphold",e.Event("taphold",{target:s}))},e.event.special.tap.tapholdThreshold)})}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,start:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t;return{time:(new Date).getTime(),coords:[n.pageX,n.pageY],origin:e(t.target)}},stop:function(e){var t=e.originalEvent.touches?e.originalEvent.touches[0]:e;return{time:(new Date).getTime(),coords:[t.pageX,t.pageY]}},handleSwipe:function(t,n){n.time-t.time<e.event.special.swipe.durationThreshold&&Math.abs(t.coords[0]-n.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(t.coords[1]-n.coords[1])<e.event.special.swipe.verticalDistanceThreshold&&t.origin.trigger("swipe").trigger(t.coords[0]>n.coords[0]?"swipeleft":"swiperight")},setup:function(){var t=this,n=e(t);n.bind(u,function(t){function o(t){i&&(s=e.event.special.swipe.stop(t),Math.abs(i.coords[0]-s.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault())}var i=e.event.special.swipe.start(t),s;n.bind(f,o).one(a,function(){n.unbind(f,o),i&&s&&e.event.special.swipe.handleSwipe(i,s),i=s=r})})}},e.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe",swiperight:"swipe"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)}}})}(e,this)});
/*	
 * jQuery mmenu v4.1.9
 * @requires jQuery 1.7.0 or later
 *
 * mmenu.frebsite.nl
 *	
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * Dual licensed under the MIT and GPL licenses.
 * http://en.wikipedia.org/wiki/MIT_License
 * http://en.wikipedia.org/wiki/GNU_General_Public_License
 */


(function( $ ) {

	var _PLUGIN_	= 'mmenu',
		_VERSION_	= '4.1.9';


	//	Plugin already excists
	if ( $[ _PLUGIN_ ] )
	{
		return;
	}

	//	Global variables
	var glbl = {
		$wndw: null,
		$html: null,
		$body: null,
		$page: null,
		$blck: null,

		$allMenus: null,
		$scrollTopNode: null
	};

	var _c = {}, _e = {}, _d = {},
		_serialnr = 0;


	$[ _PLUGIN_ ] = function( $menu, opts, conf )
	{
		glbl.$allMenus = glbl.$allMenus.add( $menu );

		this.$menu = $menu;
		this.opts  = opts
		this.conf  = conf;

		this.serialnr = _serialnr++;

		this._init();

		return this;
	};

	$[ _PLUGIN_ ].prototype = {

		open: function()
		{
			this._openSetup();
			this._openFinish();
			return 'open';
		},
		_openSetup: function()
		{
			//	Find scrolltop
			var _scrollTop = findScrollTop();

			//	Set opened
			this.$menu.addClass( _c.current );

			//	Close others
			glbl.$allMenus.not( this.$menu ).trigger( _e.close );

			//	Store style and position
			glbl.$page
				.data( _d.style, glbl.$page.attr( 'style' ) || '' )
				.data( _d.scrollTop, _scrollTop )
				.data( _d.offetLeft, glbl.$page.offset().left );

			//	Resize page to window width
			var _w = 0;
			glbl.$wndw
				.off( _e.resize )
				.on( _e.resize,
					function( e, force )
					{
						if ( force || glbl.$html.hasClass( _c.opened ) )
						{
							var nw = glbl.$wndw.width();
							if ( nw != _w )
							{
								_w = nw;
								glbl.$page.width( nw - glbl.$page.data( _d.offetLeft ) );
							}
						}
					}
				)
				.trigger( _e.resize, [ true ] );

			//	Prevent tabbing out of the menu
			if ( this.conf.preventTabbing )
			{
				glbl.$wndw
					.off( _e.keydown )
					.on( _e.keydown,
						function( e )
						{
							if ( e.keyCode == 9 )
							{
								e.preventDefault();
								return false;
							}
						}
					);
			}

			//	Add options
			if ( this.opts.modal )
			{
				glbl.$html.addClass( _c.modal );
			}
			if ( this.opts.moveBackground )
			{
				glbl.$html.addClass( _c.background );
			}
			if ( this.opts.position != 'left' )
			{
				glbl.$html.addClass( _c.mm( this.opts.position ) );
			}
			if ( this.opts.zposition != 'back' )
			{
				glbl.$html.addClass( _c.mm( this.opts.zposition ) );
			}
			if ( this.opts.classes )
			{
				glbl.$html.addClass( this.opts.classes );
			}

			//	Open
			glbl.$html.addClass( _c.opened );
			this.$menu.addClass( _c.opened );

			//	Scroll page to scrolltop
			glbl.$page.scrollTop( _scrollTop );

			//	Scroll menu to top
			this.$menu.scrollTop( 0 );
		},
		_openFinish: function()
		{
			var that = this;

			//	Callback
			transitionend( glbl.$page,
				function()
				{
					that.$menu.trigger( _e.opened );
				}, this.conf.transitionDuration
			);

			//	Opening
			glbl.$html.addClass( _c.opening );
			this.$menu.trigger( _e.opening );

			//	Scroll window to top
			window.scrollTo( 0, 1 );
		},
		close: function()
		{
			var that = this;

			//	Callback
			transitionend( glbl.$page,
				function()
				{
					that.$menu
						.removeClass( _c.current )
						.removeClass( _c.opened );

					glbl.$html
						.removeClass( _c.opened )
						.removeClass( _c.modal )
						.removeClass( _c.background )
						.removeClass( _c.mm( that.opts.position ) )
						.removeClass( _c.mm( that.opts.zposition ) );

					if ( that.opts.classes )
					{
						glbl.$html.removeClass( that.opts.classes );
					}

					glbl.$wndw
						.off( _e.resize )
						.off( _e.keydown );

					//	Restore style and position
					glbl.$page.attr( 'style', glbl.$page.data( _d.style ) );

					if ( glbl.$scrollTopNode )
					{
						glbl.$scrollTopNode.scrollTop( glbl.$page.data( _d.scrollTop ) );
					}

					//	Closed
					that.$menu.trigger( _e.closed );
	
				}, this.conf.transitionDuration
			);

			//	Closing
			glbl.$html.removeClass( _c.opening );
			this.$menu.trigger( _e.closing );
	
			return 'close';
		},
	
		_init: function()
		{
			this.opts = extendOptions( this.opts, this.conf, this.$menu );
			this.direction = ( this.opts.slidingSubmenus ) ? 'horizontal' : 'vertical';
	
			//	INIT PAGE & MENU
			this._initPage( glbl.$page );
			this._initMenu();
			this._initBlocker();
			this._initPanles();
			this._initLinks();
			this._initOpenClose();
			this._bindCustomEvents();

			if ( $[ _PLUGIN_ ].addons )
			{
				for ( var a = 0; a < $[ _PLUGIN_ ].addons.length; a++ )
				{
					if ( typeof this[ '_addon_' + $[ _PLUGIN_ ].addons[ a ] ] == 'function' )
					{
						this[ '_addon_' + $[ _PLUGIN_ ].addons[ a ] ]();
					}
				}
			}
		},

		_bindCustomEvents: function()
		{
			var that = this;

			this.$menu
				.off( _e.open + ' ' + _e.close + ' ' + _e.setPage+ ' ' + _e.update )
				.on( _e.open + ' ' + _e.close + ' ' + _e.setPage+ ' ' + _e.update,
					function( e )
					{
						e.stopPropagation();
					}
				);

			//	Menu-events
			this.$menu
				.on( _e.open,
					function( e )
					{
						if ( $(this).hasClass( _c.current ) )
						{
							e.stopImmediatePropagation();
							return false;
						}
						return that.open();
					}
				)
				.on( _e.close,
					function( e )
					{
						if ( !$(this).hasClass( _c.current ) )
						{
							e.stopImmediatePropagation();
							return false;
						}
						return that.close();
					}
				)
				.on( _e.setPage,
					function( e, $p )
					{
						that._initPage( $p );
						that._initOpenClose();
					}
				);

			//	Panel-events
			var $panels = this.$menu.find( this.opts.isMenu && this.direction != 'horizontal' ? 'ul, ol' : '.' + _c.panel );
			$panels
				.off( _e.toggle + ' ' + _e.open + ' ' + _e.close )
				.on( _e.toggle + ' ' + _e.open + ' ' + _e.close,
					function( e )
					{
						e.stopPropagation();
					}
				);

			if ( this.direction == 'horizontal' )
			{
				$panels
					.on( _e.open,
						function( e )
						{
							return openSubmenuHorizontal( $(this), that.$menu );
						}
					);
			}
			else
			{
				$panels
					.on( _e.toggle,
						function( e )
						{
							var $t = $(this);
							return $t.triggerHandler( $t.parent().hasClass( _c.opened ) ? _e.close : _e.open );
						}
					)
					.on( _e.open,
						function( e )
						{
							$(this).parent().addClass( _c.opened );
							return 'open';
						}
					)
					.on( _e.close,
						function( e )
						{
							$(this).parent().removeClass( _c.opened );
							return 'close';
						}
					);
			}
		},
		
		_initBlocker: function()
		{
			var that = this;

			if ( !glbl.$blck )
			{
				glbl.$blck = $( '<div id="' + _c.blocker + '" />' )
					.css( 'opacity', 0 )
					.appendTo( glbl.$body );
			}

			glbl.$blck
				.off( _e.touchstart )
				.on( _e.touchstart,
					function( e )
					{
						e.preventDefault();
						e.stopPropagation();
						glbl.$blck.trigger( _e.mousedown );
					}
				)
				.on( _e.mousedown,
					function( e )
					{
						e.preventDefault();
						if ( !glbl.$html.hasClass( _c.modal ) )
						{
							that.$menu.trigger( _e.close );
						}
					}
				);
		},
		_initPage: function( $p )
		{
			if ( !$p )
			{
				$p = $(this.conf.pageSelector, glbl.$body);
				if ( $p.length > 1 )
				{
					$[ _PLUGIN_ ].debug( 'Multiple nodes found for the page-node, all nodes are wrapped in one <' + this.conf.pageNodetype + '>.' );
					$p = $p.wrapAll( '<' + this.conf.pageNodetype + ' />' ).parent();
				}
			}
	
			$p.addClass( _c.page );
			glbl.$page = $p;
		},
		_initMenu: function()
		{
			var that = this;

			//	Clone if needed
			if ( this.conf.clone )
			{
				this.$menu = this.$menu.clone( true );
				this.$menu.add( this.$menu.find( '*' ) ).filter( '[id]' ).each(
					function()
					{
						$(this).attr( 'id', _c.mm( $(this).attr( 'id' ) ) );
					}
				);
			}

			//	Strip whitespace
			this.$menu.contents().each(
				function()
				{
					if ( $(this)[ 0 ].nodeType == 3 )
					{
						$(this).remove();
					}
				}
			);

			//	Prepend to body
			this.$menu
				.prependTo( 'body' )
				.addClass( _c.menu );

			//	Add direction class
			this.$menu.addClass( _c.mm( this.direction ) );

			//	Add options classes
			if ( this.opts.classes )
			{
				this.$menu.addClass( this.opts.classes );
			}
			if ( this.opts.isMenu )
			{
				this.$menu.addClass( _c.ismenu );
			}
			if ( this.opts.position != 'left' )
			{
				this.$menu.addClass( _c.mm( this.opts.position ) );
			}
			if ( this.opts.zposition != 'back' )
			{
				this.$menu.addClass( _c.mm( this.opts.zposition ) );
			}
		},
		_initPanles: function()
		{
			var that = this;


			//	Refactor List class
			this.__refactorClass( $('.' + this.conf.listClass, this.$menu), 'list' );

			//	Add List class
			if ( this.opts.isMenu )
			{
				$('ul, ol', this.$menu)
					.not( '.mm-nolist' )
					.addClass( _c.list );
			}

			var $lis = $('.' + _c.list + ' > li', this.$menu);

			//	Refactor Selected class
			this.__refactorClass( $lis.filter( '.' + this.conf.selectedClass ), 'selected' );

			//	Refactor Label class
			this.__refactorClass( $lis.filter( '.' + this.conf.labelClass ), 'label' );

			//	Refactor Spacer class
			this.__refactorClass( $lis.filter( '.' + this.conf.spacerClass ), 'spacer' );

			//	setSelected-event
			$lis
				.off( _e.setSelected )
				.on( _e.setSelected,
					function( e, selected )
					{
						e.stopPropagation();
	
						$lis.removeClass( _c.selected );
						if ( typeof selected != 'boolean' )
						{
							selected = true;
						}
						if ( selected )
						{
							$(this).addClass( _c.selected );
						}
					}
				);

			//	Refactor Panel class
			this.__refactorClass( $('.' + this.conf.panelClass, this.$menu), 'panel' );

			//	Add Panel class
			this.$menu
				.children()
				.filter( this.conf.panelNodetype )
				.add( this.$menu.find( '.' + _c.list ).children().children().filter( this.conf.panelNodetype ) )
				.addClass( _c.panel );

			var $panels = $('.' + _c.panel, this.$menu);

			//	Add an ID to all panels
			$panels
				.each(
					function( i )
					{
						var $t = $(this),
							id = $t.attr( 'id' ) || _c.mm( 'm' + that.serialnr + '-p' + i );

						$t.attr( 'id', id );
					}
			);

			//	Add open and close links to menu items
			$panels
				.find( '.' + _c.panel )
				.each(
					function( i )
					{
						var $t = $(this),
							$u = $t.is( 'ul, ol' ) ? $t : $t.find( 'ul ,ol' ).first(),
							$l = $t.parent(),
							// default 
							// $a = $l.find( '> a, > span' ),
							$a = $l.find( '> span' ),
							$p = $l.closest( '.' + _c.panel );

						$t.data( _d.parent, $l );

						if ( $l.parent().is( '.' + _c.list ) )
						{
							var $btn = $( '<a class="' + _c.subopen + '" href="#' + $t.attr( 'id' ) + '" />' ).insertBefore( $a );
							if ( !$a.is( 'a' ) )
							{
								$btn.addClass( _c.fullsubopen );
							}
							if ( that.direction == 'horizontal' )
							{
								$u.prepend( '<li class="' + _c.subtitle + '"><a class="' + _c.subclose + '" href="#' + $p.attr( 'id' ) + '">' + $a.text() + '</a></li>' );
							}
						}
					}
				);

			//	Link anchors to panels
			var evt = this.direction == 'horizontal' ? _e.open : _e.toggle;
			$panels
				.each(
					function( i )
					{
						var $opening = $(this),
							id = $opening.attr( 'id' );

						$('a[href="#' + id + '"]', that.$menu)
							.off( _e.click )
							.on( _e.click,
								function( e )
								{
									e.preventDefault();
									$opening.trigger( evt );
								}
							);
					}
			);

			if ( this.direction == 'horizontal' )
			{
				//	Add opened-classes
				var $selected = $('.' + _c.list + ' > li.' + _c.selected, this.$menu);
				$selected
					.add( $selected.parents( 'li' ) )
					.parents( 'li' ).removeClass( _c.selected )
					.end().each(
						function()
						{
							var $t = $(this),
								$u = $t.find( '> .' + _c.panel );

							if ( $u.length )
							{
								$t.parents( '.' + _c.panel ).addClass( _c.subopened );
								$u.addClass( _c.opened );
							}
						}
					)
					.closest( '.' + _c.panel ).addClass( _c.opened )
					.parents( '.' + _c.panel ).addClass( _c.subopened );
			}
			else
			{
				//	Replace Selected-class with opened-class in parents from .Selected
				$('li.' + _c.selected, this.$menu)
					.addClass( _c.opened )
					.parents( '.' + _c.selected ).removeClass( _c.selected );
			}

			//	Set current opened
			var $current = $panels.filter( '.' + _c.opened );
			if ( !$current.length )
			{
				$current = $panels.first();
			}
			$current
				.addClass( _c.opened )
				.last()
				.addClass( _c.current );

			//	Rearrange markup
			if ( this.direction == 'horizontal' )
			{
				$panels.find( '.' + _c.panel ).appendTo( this.$menu );
			}
		},
		_initLinks: function()
		{
			var that = this;
	
			$('.' + _c.list + ' > li > a', this.$menu)
				.not( '.' + _c.subopen )
				.not( '.' + _c.subclose )
				.not( '[rel="external"]' )
				.not( '[target="_blank"]' )
				.off( _e.click )
				.on( _e.click,
					function( e )
					{
						var $t = $(this),
							href = $t.attr( 'href' );

						//	Set selected item
						if ( that.__valueOrFn( that.opts.onClick.setSelected, $t ) )
						{
							$t.parent().trigger( _e.setSelected );
						}

						//	Prevent default / don't follow link. Default: false
						var preventDefault = that.__valueOrFn( that.opts.onClick.preventDefault, $t, href.slice( 0, 1 ) == '#' );
						if ( preventDefault )
						{
							e.preventDefault();
						}

						//	Block UI. Default: false if preventDefault, true otherwise
						if ( that.__valueOrFn( that.opts.onClick.blockUI, $t, !preventDefault ) )
						{
							glbl.$html.addClass( _c.blocking );
						}

						//	Close menu. Default: true if preventDefault, false otherwise
						if ( that.__valueOrFn( that.opts.onClick.close, $t, preventDefault ) )
						{
							that.$menu.triggerHandler( _e.close );
						}
					}
				);
		},
		_initOpenClose: function()
		{
			var that = this;

			//	Open menu
			var id = this.$menu.attr( 'id' );
			if ( id && id.length )
			{
				if ( this.conf.clone )
				{
					id = _c.umm( id );
				}

				$('a[href="#' + id + '"]')
					.off( _e.click )
					.on( _e.click,
						function( e )
						{
							e.preventDefault();
							that.$menu.trigger( _e.open );
						}
					);
			}

			//	Close menu
			var id = glbl.$page.attr( 'id' );
			if ( id && id.length )
			{
				$('a[href="#' + id + '"]')
					.off( _e.click )
					.on( _e.click,
						function( e )
						{
							e.preventDefault();
							that.$menu.trigger( _e.close );
						}
					);
			}
		},
		
		__valueOrFn: function( o, $e, d )
		{
			if ( typeof o == 'function' )
			{
				return o.call( $e[ 0 ] );
			}
			if ( typeof o == 'undefined' && typeof d != 'undefined' )
			{
				return d;
			}
			return o;
		},
		
		__refactorClass: function( $e, c )
		{
			$e.removeClass( this.conf[ c + 'Class' ] ).addClass( _c[ c ] );
		}
	};


	$.fn[ _PLUGIN_ ] = function( opts, conf )
	{
		//	First time plugin is fired
		if ( !glbl.$wndw )
		{
			_initPlugin();
		}

		//	Extend options
		opts = extendOptions( opts, conf );
		conf = extendConfiguration( conf );

		return this.each(
			function()
			{
				var $menu = $(this);
				if ( $menu.data( _PLUGIN_ ) )
				{
					return;
				}
				$menu.data( _PLUGIN_, new $[ _PLUGIN_ ]( $menu, opts, conf ) );
			}
		);
	};

	$[ _PLUGIN_ ].version = _VERSION_;
	
	$[ _PLUGIN_ ].defaults = {
		position		: 'left',
		zposition		: 'back',
		moveBackground	: true,
		slidingSubmenus	: true,
		modal			: false,
		classes			: '',
		onClick			: {
//			close				: true,
//			blockUI				: null,
//			preventDefault		: null,
			setSelected			: true
		}
	};
	$[ _PLUGIN_ ].configuration = {
		preventTabbing		: true,
		panelClass			: 'Panel',
		listClass			: 'List',
		selectedClass		: 'Selected',
		labelClass			: 'Label',
		spacerClass			: 'Spacer',
		pageNodetype		: 'div',
		panelNodetype		: 'ul, ol, div',
		transitionDuration	: 400
	};



	/*
		SUPPORT
	*/
	(function() {

		var wd = window.document,
			ua = window.navigator.userAgent,
			ds = document.createElement( 'div' ).style;

		var _touch 				= 'ontouchstart' in wd,
			_overflowscrolling	= 'WebkitOverflowScrolling' in wd.documentElement.style,
			_oldAndroidBrowser	= (function() {
				if ( ua.indexOf( 'Android' ) >= 0 )
				{
					return 2.4 > parseFloat( ua.slice( ua.indexOf( 'Android' ) +8 ) );
				}
				return false;
			})();

		$[ _PLUGIN_ ].support = {

			touch: _touch,
			oldAndroidBrowser: _oldAndroidBrowser,
			overflowscrolling: (function() {
				if ( !_touch )
				{
					return true;
				}
				if ( _overflowscrolling )
				{
					return true;
				}
				if ( _oldAndroidBrowser )
				{
					return false;
				}
				return true;
			})()
		};
	})();


	/*
		BROWSER SPECIFIC FIXES
	*/
	$[ _PLUGIN_ ].useOverflowScrollingFallback = function( use )
	{
		if ( glbl.$html )
		{
			if ( typeof use == 'boolean' )
			{
				glbl.$html[ use ? 'addClass' : 'removeClass' ]( _c.nooverflowscrolling );
			}
			return glbl.$html.hasClass( _c.nooverflowscrolling );
		}
		else
		{
			_useOverflowScrollingFallback = use;
			return use;
		}
	};


	/*
		DEBUG
	*/
	$[ _PLUGIN_ ].debug = function( msg ) {};
	$[ _PLUGIN_ ].deprecated = function( depr, repl )
	{
		if ( typeof console != 'undefined' && typeof console.warn != 'undefined' )
		{
			console.warn( 'MMENU: ' + depr + ' is deprecated, use ' + repl + ' instead.' );
		}
	};


	//	Global vars
	var _useOverflowScrollingFallback = !$[ _PLUGIN_ ].support.overflowscrolling;


	function extendOptions( o, c, $m )
	{
		if ( typeof o != 'object' )
		{
			o = {};
		}

		if ( $m )
		{
			if ( typeof o.isMenu != 'boolean' )
			{
				var $c = $m.children();
				o.isMenu = ( $c.length == 1 && $c.is( c.panelNodetype ) );
			}
			return o;
		}


		//	Extend onClick
		if ( typeof o.onClick != 'object' )
		{
			o.onClick = {};
		}


		//	DEPRECATED
		if ( typeof o.onClick.setLocationHref != 'undefined' )
		{
			$[ _PLUGIN_ ].deprecated( 'onClick.setLocationHref option', '!onClick.preventDefault' );
			if ( typeof o.onClick.setLocationHref == 'boolean' )
			{
				o.onClick.preventDefault = !o.onClick.setLocationHref;
			}
		}
		//	/DEPRECATED


		//	Extend from defaults
		o = $.extend( true, {}, $[ _PLUGIN_ ].defaults, o );


		//	Degration
		if ( $[ _PLUGIN_ ].useOverflowScrollingFallback() )
		{
			switch( o.position )
			{
				case 'top':
				case 'right':
				case 'bottom':
					$[ _PLUGIN_ ].debug( 'position: "' + o.position + '" not supported when using the overflowScrolling-fallback.' );
					o.position = 'left';
					break;
			}
			switch( o.zposition )
			{
				case 'front':
				case 'next':
					$[ _PLUGIN_ ].debug( 'z-position: "' + o.zposition + '" not supported when using the overflowScrolling-fallback.' );
					o.zposition = 'back';
					break;
			}
		}

		return o;
	}
	function extendConfiguration( c )
	{
		if ( typeof c != 'object' )
		{
			c = {};
		}


		//	DEPRECATED
		if ( typeof c.panelNodeType != 'undefined' )
		{
			$[ _PLUGIN_ ].deprecated( 'panelNodeType configuration option', 'panelNodetype' );
			c.panelNodetype = c.panelNodeType;
		}
		//	/DEPRECATED


		c = $.extend( true, {}, $[ _PLUGIN_ ].configuration, c )

		//	Set pageSelector
		if ( typeof c.pageSelector != 'string' )
		{
			c.pageSelector = '> ' + c.pageNodetype;
		}

		return c;
	}

	function _initPlugin()
	{
		glbl.$wndw = $(window);
		glbl.$html = $('html');
		glbl.$body = $('body');
		
		glbl.$allMenus = $();


		//	Classnames, Datanames, Eventnames
		$.each( [ _c, _d, _e ],
			function( i, o )
			{
				o.add = function( c )
				{
					c = c.split( ' ' );
					for ( var d in c )
					{
						o[ c[ d ] ] = o.mm( c[ d ] );
					}
				};
			}
		);

		//	Classnames
		_c.mm = function( c ) { return 'mm-' + c; };
		_c.add( 'menu ismenu panel list subtitle selected label spacer current highest hidden page blocker modal background opened opening subopened subopen fullsubopen subclose nooverflowscrolling' );
		_c.umm = function( c )
		{
			if ( c.slice( 0, 3 ) == 'mm-' )
			{
				c = c.slice( 3 );
			}
			return c;
		};

		//	Datanames
		_d.mm = function( d ) { return 'mm-' + d; };
		_d.add( 'parent style scrollTop offetLeft' );

		//	Eventnames
		_e.mm = function( e ) { return e + '.mm'; };
		_e.add( 'toggle open opening opened close closing closed update setPage setSelected transitionend webkitTransitionEnd touchstart touchend mousedown mouseup click keydown keyup resize' );


		$[ _PLUGIN_ ]._c = _c;
		$[ _PLUGIN_ ]._d = _d;
		$[ _PLUGIN_ ]._e = _e;

		$[ _PLUGIN_ ].glbl = glbl;

		$[ _PLUGIN_ ].useOverflowScrollingFallback( _useOverflowScrollingFallback );
	}

	function openSubmenuHorizontal( $opening, $m )
	{
		if ( $opening.hasClass( _c.current ) )
		{
			return false;
		} 

		var $panels = $('.' + _c.panel, $m),
			$current = $panels.filter( '.' + _c.current );
		
		$panels
			.removeClass( _c.highest )
			.removeClass( _c.current )
			.not( $opening )
			.not( $current )
			.addClass( _c.hidden );

		if ( $opening.hasClass( _c.opened ) )
		{
			$current
				.addClass( _c.highest )
				.removeClass( _c.opened )
				.removeClass( _c.subopened );
		}
		else
		{
			$opening
				.addClass( _c.highest );

			$current
				.addClass( _c.subopened );
		}

		$opening
			.removeClass( _c.hidden )
			.removeClass( _c.subopened )
			.addClass( _c.current )
			.addClass( _c.opened );

		return 'open';
	}

	function findScrollTop()
	{
		if ( !glbl.$scrollTopNode )
		{
			if ( glbl.$html.scrollTop() != 0 )
			{
				glbl.$scrollTopNode = glbl.$html;
			}
			else if ( glbl.$body.scrollTop() != 0 )
			{
				glbl.$scrollTopNode = glbl.$body;
			}
		}
		return ( glbl.$scrollTopNode ) ? glbl.$scrollTopNode.scrollTop() : 0;
	}

	function transitionend( $e, fn, duration )
	{
		var _ended = false,
			_fn = function()
			{
				if ( !_ended )
				{
					fn.call( $e[ 0 ] );
				}
				_ended = true;
			};

		$e.one( _e.transitionend, _fn );
		$e.one( _e.webkitTransitionEnd, _fn );
		setTimeout( _fn, duration * 1.1 );
	}

})( jQuery );
/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (typeof define === 'function' && define.amd) {
		define(factory);
		registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';

				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}
					stringifiedAttributes += '=' + attributes[attributeName];
				}
				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));
/*	
 * jQuery mmenu searchfield addon
 * @requires mmenu 4.0.0 or later
 *
 * mmenu.frebsite.nl
 *	
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * Dual licensed under the MIT and GPL licenses.
 * http://en.wikipedia.org/wiki/MIT_License
 * http://en.wikipedia.org/wiki/GNU_General_Public_License
 */


(function( $ ) {

	var _PLUGIN_ = 'mmenu',
		_ADDON_  = 'searchfield';


	$[ _PLUGIN_ ].prototype[ '_addon_' + _ADDON_ ] = function()
	{
		var that = this,
			opts = this.opts[ _ADDON_ ];

		var _c = $[ _PLUGIN_ ]._c,
			_d = $[ _PLUGIN_ ]._d,
			_e = $[ _PLUGIN_ ]._e;

		_c.add( 'search hassearch noresults nosubresults counter' );
		_e.add( 'search reset change' );


		//	Extend options
		if ( typeof opts == 'boolean' )
		{
			opts = {
				add		: opts,
				search	: opts
			};
		}
		if ( typeof opts != 'object' )
		{
			opts = {};
		}
		opts = $.extend( true, {}, $[ _PLUGIN_ ].defaults[ _ADDON_ ], opts );


		//	Add the field
		if ( opts.add )
		{
			$('<form>')
				.attr('name', 'search_form')
				.attr('method', 'GET')
				.attr('action', contextPath + '/search')
				.append($('<div>', {class : _c.search})
						.append('<input id="search" name="text" placeholder="' + opts.placeholder + '" type="text" autocomplete="off" />'))
				.prependTo(this.$menu);
			// $( '<div class="' + _c.search + '" />' )
			// 	.prependTo( this.$menu )
			// 	.append( '<input placeholder="' + opts.placeholder + '" type="text" autocomplete="off" />' );
		}

		if ( $('div.' + _c.search, this.$menu).length )
		{
			this.$menu.addClass( _c.hassearch );
		}
	};

	$[ _PLUGIN_ ].defaults[ _ADDON_ ] = {
		add				: false,
		search			: false,
		showLinksOnly	: true,
		placeholder		: 'Search',
		noResults		: 'No results found.'
	};


	//	Add to plugin
	$[ _PLUGIN_ ].addons = $[ _PLUGIN_ ].addons || [];
	$[ _PLUGIN_ ].addons.push( _ADDON_ );


	//	Functions
	function preventKeypressSearch( c )
	{
		switch( c )
		{
			case 9:		//	tab
			case 16:	//	shift
			case 17:	//	control
			case 18:	//	alt
			case 37:	//	left
			case 38:	//	top
			case 39:	//	right
			case 40:	//	bottom
				return true;
		}
		return false;
	}

})( jQuery );
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms-csstransitions-touch-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.csstransforms=function(){return!!F("transform")},q.csstransitions=function(){return F("transition")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,e.prefixed=function(a,b,c){return b?F(a,b,c):F(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
/*
*	ImageZoom - Responsive jQuery Image Zoom Pluin
*	by hkeyjun
*   http://codecanyon.net/user/hkeyjun	
*/
!function(a,b){a.ImageZoom=function(c,d){function f(a){var b=parseInt(a);return b=isNaN(b)?0:b}var e=this;e.$el=a(c),e.$el.data("imagezoom",e),e.init=function(b){e.options=a.extend({},a.ImageZoom.defaults,b),e.$viewer=a('<div class="zm-viewer '+e.options.zoomViewerClass+'"></div>').appendTo("body"),e.$handler=a('<div class="zm-handler'+e.options.zoomHandlerClass+'"></div>').appendTo("body"),e.isBigImageReady=-1,e.$largeImg=null,e.isActive=!1,e.$handlerArea=null,e.isWebkit=/chrome/.test(navigator.userAgent.toLowerCase())||/safari/.test(navigator.userAgent.toLowerCase()),e.evt={x:-1,y:-1},e.options.bigImageSrc=""==e.options.bigImageSrc?e.$el.attr("src"):e.options.bigImageSrc,(new Image).src=e.options.bigImageSrc,e.callIndex=a.ImageZoom._calltimes+1,e.animateTimer=null,a.ImageZoom._calltimes+=1,a(document).bind("mousemove.imagezoom"+e.callIndex,function(a){e.isActive&&e.moveHandler(a.pageX,a.pageY)}),e.$el.bind("click.imagezoom",function(a){e.isActive=!0,e.showViewer(a)})},e.moveHandler=function(a,c){var i,j,k,l,m,n,o,p,d=e.$el.offset(),g=e.$el.outerWidth(!1),h=e.$el.outerHeight(!1);a>=d.left&&a<=d.left+g&&c>=d.top&&c<=d.top+h?(d.left=d.left+f(e.$el.css("borderLeftWidth"))+f(e.$el.css("paddingLeft")),d.top=d.top+f(e.$el.css("borderTopWidth"))+f(e.$el.css("paddingTop")),g=e.$el.width(),h=e.$el.height(),a>=d.left&&a<=d.left+g&&c>=d.top&&c<=d.top+h&&(e.evt={x:a,y:c},"follow"==e.options.type&&e.$viewer.css({top:c-e.$viewer.outerHeight()/2,left:a-e.$viewer.outerWidth()/2}),1==e.isBigImageReady&&(k=c-d.top,l=a-d.left,"inner"==e.options.type?(i=-e.$largeImg.height()*k/h+k,j=-e.$largeImg.width()*l/g+l):"standard"==e.options.type?(m=l-e.$handlerArea.width()/2,n=k-e.$handlerArea.height()/2,o=e.$handlerArea.width(),p=e.$handlerArea.height(),0>m?m=0:m>g-o&&(m=g-o),0>n?n=0:n>h-p&&(n=h-p),j=-m/e.scale,i=-n/e.scale,e.isWebkit?(e.$handlerArea.css({opacity:.99}),setTimeout(function(){e.$handlerArea.css({top:n,left:m,opacity:1})},0)):e.$handlerArea.css({top:n,left:m})):"follow"==e.options.type&&(i=-e.$largeImg.height()/h*k+e.options.zoomSize[1]/2,j=-e.$largeImg.width()/g*l+e.options.zoomSize[0]/2,-i>e.$largeImg.height()-e.options.zoomSize[1]?i=-(e.$largeImg.height()-e.options.zoomSize[1]):i>0&&(i=0),-j>e.$largeImg.width()-e.options.zoomSize[0]?j=-(e.$largeImg.width()-e.options.zoomSize[0]):j>0&&(j=0)),e.options.smoothMove?(b.clearTimeout(e.animateTimer),e.smoothMove(j,i)):e.$viewer.find("img").css({top:i,left:j})))):(e.isActive=!1,e.$viewer.hide(),e.$handler.hide(),e.options.onHide(e),b.clearTimeout(e.animateTimer),e.animateTimer=null)},e.showViewer=function(b){var k,l,m,n,o,c=e.$el.offset().top,d=f(e.$el.css("borderTopWidth")),g=f(e.$el.css("paddingTop")),h=e.$el.offset().left,i=f(e.$el.css("borderLeftWidth")),j=f(e.$el.css("paddingLeft"));c=c+d+g,h=h+i+j,k=e.$el.width(),l=e.$el.height(),e.isBigImageReady<1&&a("div",e.$viewer).remove(),"inner"==e.options.type?e.$viewer.css({top:c,left:h,width:k,height:l}).show():"standard"==e.options.type?(m=""==e.options.alignTo?e.$el:a("#"+e.options.alignTo),"left"==e.options.position?(n=m.offset().left-e.options.zoomSize[0]-e.options.offset[0],o=m.offset().top+e.options.offset[1]):"right"==e.options.position&&(n=m.offset().left+m.width()+e.options.offset[0],o=m.offset().top+e.options.offset[1]),e.$viewer.css({top:o,left:n,width:e.options.zoomSize[0],height:e.options.zoomSize[1]}).show(),e.$handlerArea&&(e.scale=k/e.$largeImg.width(),e.$handlerArea.css({width:e.$viewer.width()*e.scale,height:e.$viewer.height()*e.scale}))):"follow"==e.options.type&&e.$viewer.css({width:e.options.zoomSize[0],height:e.options.zoomSize[1],top:b.pageY-e.options.zoomSize[1]/2,left:b.pageX-e.options.zoomSize[0]/2}).show(),e.$handler.css({top:c,left:h,width:k,height:l}).show(),e.options.onShow(e),-1==e.isBigImageReady&&(e.isBigImageReady=0,fastImg(e.options.bigImageSrc,function(){if(a.trim(a(this).attr("src"))==a.trim(e.options.bigImageSrc)){if(e.$viewer.append('<img src="'+e.$el.attr("src")+'" class="zm-fast" style="position:absolute;width:'+this.width+"px;height:"+this.height+'px">'),e.isBigImageReady=1,e.$largeImg=a('<img src="'+e.options.bigImageSrc+'" style="position:absolute;width:'+this.width+"px;height:"+this.height+'px">'),e.$viewer.append(e.$largeImg),"standard"==e.options.type){var c=k/this.width;e.$handlerArea=a('<div class="zm-handlerarea" style="width:'+e.$viewer.width()*c+"px;height:"+e.$viewer.height()*c+'px"></div>').appendTo(e.$handler),e.scale=c}-1==e.evt.x&&-1==e.evt.y?e.moveHandler(b.pageX,b.pageY):e.moveHandler(e.evt.x,e.evt.y),e.options.showDescription&&e.$el.attr("alt")&&""!=a.trim(e.$el.attr("alt"))&&e.$viewer.append('<div class="'+e.options.descriptionClass+'">'+e.$el.attr("alt")+"</div>")}},function(){},function(){}))},e.changeImage=function(a,b){this.$el.attr("src",a),this.isBigImageReady=-1,this.options.bigImageSrc="string"==typeof b?b:a,e.options.preload&&((new Image).src=this.options.bigImageSrc),this.$viewer.hide().empty(),this.$handler.hide().empty(),this.$handlerArea=null},e.changeZoomSize=function(a,b){e.options.zoomSize=[a,b]},e.destroy=function(){a(document).unbind("mousemove.imagezoom"+e.callIndex),this.$el.unbind(".imagezoom"),this.$viewer.remove(),this.$handler.remove(),this.$el.removeData("imagezoom")},e.smoothMove=function(a,c){var g,h,i,j,k,d=10,f=parseInt(e.$largeImg.css("top"));return f=isNaN(f)?0:f,g=parseInt(e.$largeImg.css("left")),g=isNaN(g)?0:g,c=parseInt(c),a=parseInt(a),f==c&&g==a?(b.clearTimeout(e.animateTimer),e.animateTimer=null,void 0):(h=c-f,i=a-g,j=f+h/Math.abs(h)*Math.ceil(Math.abs(h/d)),k=g+i/Math.abs(i)*Math.ceil(Math.abs(i/d)),e.$viewer.find("img").css({top:j,left:k}),e.animateTimer=setTimeout(function(){e.smoothMove(a,c)},10),void 0)},e.init(d)},a.ImageZoom.defaults={bigImageSrc:"",preload:!0,type:"inner",smoothMove:!0,position:"right",offset:[10,0],alignTo:"",zoomSize:[100,100],descriptionClass:"zm-description",zoomViewerClass:"",zoomHandlerClass:"",showDescription:!0,onShow:function(){},onHide:function(){}},a.ImageZoom._calltimes=0,a.fn.ImageZoom=function(b){return this.each(function(){new a.ImageZoom(this,b)})}}(jQuery,window);var fastImg=function(){var a=[],b=null,c=function(){for(var b=0;b<a.length;b++)a[b].end?a.splice(b--,1):a[b]();!a.length&&d()},d=function(){clearInterval(b),b=null};return function(d,e,f,g){var h,i,j,k,l,m=new Image;return m.src=d,m.complete?(e.call(m),f&&f.call(m),void 0):(i=m.width,j=m.height,m.onerror=function(){g&&g.call(m),h.end=!0,m=m.onload=m.onerror=null},h=function(){k=m.width,l=m.height,(k!==i||l!==j||k*l>1024)&&(e.call(m),h.end=!0)},h(),m.onload=function(){!h.end&&h(),f&&f.call(m),m=m.onload=m.onerror=null},h.end||(a.push(h),null===b&&(b=setInterval(c,40))),void 0)}}();
/**
 * jquery.elastislide.js v1.1.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */

;( function( $, window, undefined ) {
	
	'use strict';

	/*
	* debouncedresize: special jQuery event that happens once after a window resize
	*
	* latest version and complete README available on Github:
	* https://github.com/louisremi/jquery-smartresize/blob/master/jquery.debouncedresize.js
	*
	* Copyright 2011 @louis_remi
	* Licensed under the MIT license.
	*/
	var $event = $.event,
	$special,
	resizeTimeout;

	$special = $event.special.debouncedresize = {
		setup: function() {
			$( this ).on( "resize", $special.handler );
		},
		teardown: function() {
			$( this ).off( "resize", $special.handler );
		},
		handler: function( event, execAsap ) {
			// Save the context
			var context = this,
				args = arguments,
				dispatch = function() {
					// set correct event type
					event.type = "debouncedresize";
					$event.dispatch.apply( context, args );
				};

			if ( resizeTimeout ) {
				clearTimeout( resizeTimeout );
			}

			execAsap ?
				dispatch() :
				resizeTimeout = setTimeout( dispatch, $special.threshold );
		},
		threshold: 150
	};

	// ======================= imagesLoaded Plugin ===============================
	// https://github.com/desandro/imagesloaded

	// $('#my-container').imagesLoaded(myFunction)
	// execute a callback when all images have loaded.
	// needed because .load() doesn't work on cached images

	// callback function gets image collection as argument
	//  this is the container

	// original: mit license. paul irish. 2010.
	// contributors: Oren Solomianik, David DeSandro, Yiannis Chatzikonstantinou

	// blank image data-uri bypasses webkit log warning (thx doug jones)
	var BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

	$.fn.imagesLoaded = function( callback ) {
		var $this = this,
			deferred = $.isFunction($.Deferred) ? $.Deferred() : 0,
			hasNotify = $.isFunction(deferred.notify),
			$images = $this.find('img').add( $this.filter('img') ),
			loaded = [],
			proper = [],
			broken = [];

		// Register deferred callbacks
		if ($.isPlainObject(callback)) {
			$.each(callback, function (key, value) {
				if (key === 'callback') {
					callback = value;
				} else if (deferred) {
					deferred[key](value);
				}
			});
		}

		function doneLoading() {
			var $proper = $(proper),
				$broken = $(broken);

			if ( deferred ) {
				if ( broken.length ) {
					deferred.reject( $images, $proper, $broken );
				} else {
					deferred.resolve( $images );
				}
			}

			if ( $.isFunction( callback ) ) {
				callback.call( $this, $images, $proper, $broken );
			}
		}

		function imgLoaded( img, isBroken ) {
			// don't proceed if BLANK image, or image is already loaded
			if ( img.src === BLANK || $.inArray( img, loaded ) !== -1 ) {
				return;
			}

			// store element in loaded images array
			loaded.push( img );

			// keep track of broken and properly loaded images
			if ( isBroken ) {
				broken.push( img );
			} else {
				proper.push( img );
			}

			// cache image and its state for future calls
			$.data( img, 'imagesLoaded', { isBroken: isBroken, src: img.src } );

			// trigger deferred progress method if present
			if ( hasNotify ) {
				deferred.notifyWith( $(img), [ isBroken, $images, $(proper), $(broken) ] );
			}

			// call doneLoading and clean listeners if all images are loaded
			if ( $images.length === loaded.length ){
				setTimeout( doneLoading );
				$images.unbind( '.imagesLoaded' );
			}
		}

		// if no images, trigger immediately
		if ( !$images.length ) {
			doneLoading();
		} else {
			$images.bind( 'load.imagesLoaded error.imagesLoaded', function( event ){
				// trigger imgLoaded
				imgLoaded( event.target, event.type === 'error' );
			}).each( function( i, el ) {
				var src = el.src;

				// find out if this image has been already checked for status
				// if it was, and src has not changed, call imgLoaded on it
				var cached = $.data( el, 'imagesLoaded' );
				if ( cached && cached.src === src ) {
					imgLoaded( el, cached.isBroken );
					return;
				}

				// if complete is true and browser supports natural sizes, try
				// to check for image status manually
				if ( el.complete && el.naturalWidth !== undefined ) {
					imgLoaded( el, el.naturalWidth === 0 || el.naturalHeight === 0 );
					return;
				}

				// cached images don't fire load sometimes, so we reset src, but only when
				// dealing with IE, or image is complete (loaded) and failed manual check
				// webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
				if ( el.readyState || el.complete ) {
					el.src = BLANK;
					el.src = src;
				}
			});
		}

		return deferred ? deferred.promise( $this ) : $this;
	};

	// global
	var $window = $( window ),
		Modernizr = window.Modernizr;

	$.Elastislide = function( options, element ) {
		
		this.$el = $( element );
		this._init( options );
		
	};

	$.Elastislide.defaults = {
		// orientation 'horizontal' || 'vertical'
		orientation : 'horizontal',
		// sliding speed
		speed : 500,
		// sliding easing
		easing : 'ease-in-out',
		// the minimum number of items to show. 
		// when we resize the window, this will make sure minItems are always shown 
		// (unless of course minItems is higher than the total number of elements)
		minItems : 5,
		// index of the current item (left most item of the carousel)
		start : 0,
		// click item callback
		onClick : function( el, position, evt ) { return false; },
		onReady : function() { return false; },
		onBeforeSlide : function() { return false; },
		onAfterSlide : function() { return false; }
	};

	$.Elastislide.prototype = {

		_init : function( options ) {
			
			// options
			this.options = $.extend( true, {}, $.Elastislide.defaults, options );

			// https://github.com/twitter/bootstrap/issues/2870
			var self = this,
				transEndEventNames = {
					'WebkitTransition' : 'webkitTransitionEnd',
					'MozTransition' : 'transitionend',
					'OTransition' : 'oTransitionEnd',
					'msTransition' : 'MSTransitionEnd',
					'transition' : 'transitionend'
				};
			
			this.transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ];
			
			// suport for css transforms and css transitions
			this.support = Modernizr.csstransitions && Modernizr.csstransforms;

			// current item's index
			this.current = this.options.start;

			// control if it's sliding
			this.isSliding = false;

			this.$items = this.$el.children( 'li' );
			// total number of items
			this.itemsCount = this.$items.length;
			if( this.itemsCount === 0 ) {

				return false;

			}
			this._validate();
			// remove white space
			this.$items.detach();
			this.$el.empty();
			this.$el.append( this.$items );

			// main wrapper
			if(this.$items.length <= 5){
			//if(this.options.minItems != 4) {
				this.$el.wrap( '<div class="elastislide-five-less elastislide-wrapper elastislide-loading elastislide-' + this.options.orientation + '"></div>' );
			} else {
				this.$el.wrap( '<div class="elastislide-wrapper elastislide-loading elastislide-' + this.options.orientation + '"></div>' );
			}

			// check if we applied a transition to the <ul>
			this.hasTransition = false;
			
			// add transition for the <ul>
			this.hasTransitionTimeout = setTimeout( function() {
				
				self._addTransition();

			}, 100 );

			// preload the images
			
			this.$el.imagesLoaded( function() {

				self.$el.show();

				self._layout();
				self._configure();
				
				if( self.hasTransition ) {

					// slide to current's position
					self._removeTransition();
					self._slideToItem( self.current );

					self.$el.on( self.transEndEventName, function() {

						self.$el.off( self.transEndEventName );
						self._setWrapperSize();
						// add transition for the <ul>
						self._addTransition();
						self._initEvents();

					} );

				}
				else {

					clearTimeout( self.hasTransitionTimeout );
					self._setWrapperSize();
					self._initEvents();
					// slide to current's position
					self._slideToItem( self.current );
					setTimeout( function() { self._addTransition(); }, 25 );

				}

				self.options.onReady();

			} );

		},
		_validate : function() {

			if( this.options.speed < 0 ) {

				this.options.speed = 500;

			}
			if( this.options.minItems < 1 || this.options.minItems > this.itemsCount ) {

				this.options.minItems = 1;

			}
			if( this.options.start < 0 || this.options.start > this.itemsCount - 1 ) {

				this.options.start = 0;

			}
			if( this.options.orientation != 'horizontal' && this.options.orientation != 'vertical' ) {

				this.options.orientation = 'horizontal';

			}
				
		},
		_layout : function() {

			this.$el.wrap( '<div class="elastislide-carousel"></div>' );

			this.$carousel = this.$el.parent();
			this.$wrapper = this.$carousel.parent().removeClass( 'elastislide-loading' );

			// save original image sizes
			var $img = this.$items.find( 'img:first' );
			this.imgSize = { width : $img.outerWidth( true ), height : $img.outerHeight( true ) };
			this._setItemsSize();
			//this.options.orientation === 'horizontal' ? this.$el.css( 'max-height', this.imgSize.height ) : this.$el.css( 'height', this.options.minItems * this.imgSize.height );
			this.options.orientation === 'horizontal' ? this.$el.css( 'max-height', this.imgSize.height ) : this.$el.css( 'height', this.$items.length === 5 ? 5 * this.imgSize.height : this.options.minItems * this.imgSize.height );
			// add the controls
			this._addControls();

		},
		_addTransition : function() {

			if( this.support ) {

				this.$el.css( 'transition', 'all ' + this.options.speed + 'ms ' + this.options.easing );
				
			}
			this.hasTransition = true;

		},
		_removeTransition : function() {

			if( this.support ) {

				this.$el.css( 'transition', 'all 0s' );

			}
			this.hasTransition = false;
			
		},
		_addControls : function() {

			var self = this;

			// add navigation elements
			this.$navigation = $( '<nav><span style="width:'+this.navWidth+'px" class="elastislide-prev">Previous</span><span style="width:'+this.navWidth+'px" class="elastislide-next">Next</span></nav>' )
				.appendTo( this.$wrapper );


			this.$navPrev = this.$navigation.find( 'span.elastislide-prev' ).on( 'mousedown.elastislide', function( event ) {

				self._slide( 'prev' );
				return false;

			} );

			this.$navNext = this.$navigation.find( 'span.elastislide-next' ).on( 'mousedown.elastislide', function( event ) {

				self._slide( 'next' );
				return false;

			} );

		},
		_setItemsSize : function() {

			// width for the items (%)
			var w = this.options.orientation === 'horizontal' ? ( Math.floor( this.$carousel.width() / this.options.minItems ) * 100 ) / this.$carousel.width() : 100;
			
			this.$items.css( {
				'width' : w + '%',
				'max-width' : this.imgSize.width,
				'max-height' : this.imgSize.width
				//'max-height' : this.imgSize.height
			} );

			this.navWidth = this.imgSize.width - 8;

			if( this.options.orientation === 'vertical' ) {
			
				this.$wrapper.css( 'max-width', this.imgSize.width + parseInt( this.$wrapper.css( 'padding-left' ) ) + parseInt( this.$wrapper.css( 'padding-right' ) ) );
			
			}

		},
		_setWrapperSize : function() {

			if( this.options.orientation === 'vertical' ) {
				
				this.$wrapper.css( {
					'height' : (this.$items.length === 5 ? 5 * this.imgSize.height : this.options.minItems * this.imgSize.height) + parseInt( this.$wrapper.css( 'padding-top' ) ) + parseInt( this.$wrapper.css( 'padding-bottom' ) )
					//'height' : this.options.minItems * this.imgSize.height + parseInt( this.$wrapper.css( 'padding-top' ) ) + parseInt( this.$wrapper.css( 'padding-bottom' ) )
				} );

			}

		},
		_configure : function() {

			// check how many items fit in the carousel (visible area -> this.$carousel.width() )
			this.fitCount = this.options.orientation === 'horizontal' ? 
								this.$carousel.width() < this.options.minItems * this.imgSize.width ? this.options.minItems : Math.floor( this.$carousel.width() / this.imgSize.width ) :
								this.$carousel.height() < this.options.minItems * this.imgSize.height ? this.options.minItems : Math.floor( this.$carousel.height() / this.imgSize.height );

		},
		_initEvents : function() {

			var self = this;

			$window.on( 'debouncedresize.elastislide', function() {

				self._setItemsSize();
				self._configure();
				self._slideToItem( self.current );

			} );

			this.$el.on( this.transEndEventName, function() {

				self._onEndTransition();

			} );

			if( this.options.orientation === 'horizontal' ) {

				this.$el.on( {
					swipeleft : function() {

						self._slide( 'next' );
					
					},
					swiperight : function() {

						self._slide( 'prev' );
					
					}
				} );

			}
			else {

				this.$el.on( {
					swipeup : function() {

						self._slide( 'next' );
					
					},
					swipedown : function() {

						self._slide( 'prev' );
					
					}
				} );

			}

			// item click event
			this.$el.on( 'click.elastislide', 'li', function( event ) {

				var $item = $( this );

				self.options.onClick( $item, $item.index(), event );
				
			});

		},
		_destroy : function( callback ) {
			
			this.$el.off( this.transEndEventName ).off( 'swipeleft swiperight swipeup swipedown .elastislide' );
			$window.off( '.elastislide' );
			
			this.$el.css( {
				'max-height' : 'none',
				'transition' : 'none'
			} ).unwrap( this.$carousel ).unwrap( this.$wrapper );

			this.$items.css( {
				'width' : 'auto',
				'max-width' : 'none',
				'max-height' : 'none'
			} );

			this.$navigation.remove();
			this.$wrapper.remove();

			if( callback ) {

				callback.call();

			}

		},
		_toggleControls : function( dir, display ) {

			if( display ) {
				
				// ( dir === 'next' ) ? this.$navNext.show() : this.$navPrev.show();
				( dir === 'next' ) ? this.$navNext.removeClass('inactive-nav') : this.$navPrev.removeClass('inactive-nav');

			}
			else {

				// ( dir === 'next' ) ? this.$navNext.hide() : this.$navPrev.hide();
				( dir === 'next' ) ? this.$navNext.addClass('inactive-nav') : this.$navPrev.addClass('inactive-nav');

			}
			
		},
		_slide : function( dir, tvalue ) {

			if( this.isSliding ) {

				return false;

			}
			
			this.options.onBeforeSlide();

			this.isSliding = true;

			var self = this,
				translation = this.translation || 0,
				// width/height of an item ( <li> )
				itemSpace = this.options.orientation === 'horizontal' ? this.$items.outerWidth( true ) : this.$items.outerHeight( true ),
				// total width/height of the <ul>
				totalSpace = this.itemsCount * itemSpace,
				// visible width/height
				visibleSpace = this.options.orientation === 'horizontal' ? this.$carousel.width() : this.$carousel.height();
			
			if( tvalue === undefined ) {
				
				var amount = this.fitCount * itemSpace;

				if( amount < 0 ) {

					return false;

				}

				if( dir === 'next' && totalSpace - ( Math.abs( translation ) + amount ) < visibleSpace ) {

					amount = totalSpace - ( Math.abs( translation ) + visibleSpace );

					// show / hide navigation buttons
					this._toggleControls( 'next', false );
					this._toggleControls( 'prev', true );

				}
				else if( dir === 'prev' && Math.abs( translation ) - amount < 0 ) {

					amount = Math.abs( translation );

					// show / hide navigation buttons
					this._toggleControls( 'next', true );
					this._toggleControls( 'prev', false );

				}
				else {
					
					// future translation value
					var ftv = dir === 'next' ? Math.abs( translation ) + Math.abs( amount ) : Math.abs( translation ) - Math.abs( amount );
					
					// show / hide navigation buttons
					ftv > 0 ? this._toggleControls( 'prev', true ) : this._toggleControls( 'prev', false );
					ftv < totalSpace - visibleSpace ? this._toggleControls( 'next', true ) : this._toggleControls( 'next', false );
						
				}
				
				tvalue = dir === 'next' ? translation - amount : translation + amount;

			}
			else {

				var amount = Math.abs( tvalue );

				if( Math.max( totalSpace, visibleSpace ) - amount < visibleSpace ) {

					tvalue	= - ( Math.max( totalSpace, visibleSpace ) - visibleSpace );
				
				}

				// show / hide navigation buttons
				amount > 0 ? this._toggleControls( 'prev', true ) : this._toggleControls( 'prev', false );
				Math.max( totalSpace, visibleSpace ) - visibleSpace > amount ? this._toggleControls( 'next', true ) : this._toggleControls( 'next', false );

			}
			
			this.translation = tvalue;

			if( translation === tvalue ) {
				
				this._onEndTransition();
				return false;

			}

			if( this.support ) {
				
				this.options.orientation === 'horizontal' ? this.$el.css( 'transform', 'translateX(' + tvalue + 'px)' ) : this.$el.css( 'transform', 'translateY(' + tvalue + 'px)' );

			}
			else {

				$.fn.applyStyle = this.hasTransition ? $.fn.animate : $.fn.css;
				var styleCSS = this.options.orientation === 'horizontal' ? { left : tvalue } : { top : tvalue };
				
				this.$el.stop().applyStyle( styleCSS, $.extend( true, [], { duration : this.options.speed, complete : function() {

					self._onEndTransition();
					
				} } ) );

			}
			
			if( !this.hasTransition ) {

				this._onEndTransition();

			}

		},
		_onEndTransition : function() {

			this.isSliding = false;
			this.options.onAfterSlide();

		},
		_slideTo : function( pos ) {

			var pos = pos || this.current,
				translation = Math.abs( this.translation ) || 0,
				itemSpace = this.options.orientation === 'horizontal' ? this.$items.outerWidth( true ) : this.$items.outerHeight( true ),
				posR = translation + this.$carousel.width(),
				ftv = Math.abs( pos * itemSpace );

			if( ftv + itemSpace > posR || ftv < translation ) {

				this._slideToItem( pos );
			
			}

		},
		_slideToItem : function( pos ) {

			// how much to slide?
			var amount	= this.options.orientation === 'horizontal' ? pos * this.$items.outerWidth( true ) : pos * this.$items.outerHeight( true );
			this._slide( '', -amount );
			
		},
		// public method: adds new items to the carousel
		/*
		
		how to use:
		var carouselEl = $( '#carousel' ),
			carousel = carouselEl.elastislide();
		...
		
		// append or prepend new items:
		carouselEl.prepend('<li><a href="#"><img src="images/large/2.jpg" alt="image02" /></a></li>');

		// call the add method:
		es.add();
		
		*/
		add : function( callback ) {
			
			var self = this,
				oldcurrent = this.current,
				$currentItem = this.$items.eq( this.current );
			
			// adds new items to the carousel
			this.$items = this.$el.children( 'li' );
			this.itemsCount = this.$items.length;
			this.current = $currentItem.index();
			this._setItemsSize();
			this._configure();
			this._removeTransition();
			oldcurrent < this.current ? this._slideToItem( this.current ) : this._slide( 'next', this.translation );
			setTimeout( function() { self._addTransition(); }, 25 );
			
			if ( callback ) {

				callback.call();

			}
			
		},
		// public method: sets a new element as the current. slides to that position
		setCurrent : function( idx, callback ) {
			
			this.current = idx;

			this._slideTo();
			
			if ( callback ) {

				callback.call();

			}
			
		},
		// public method: slides to the next set of items
		next : function() {

			self._slide( 'next' );

		},
		// public method: slides to the previous set of items
		previous : function() {

			self._slide( 'prev' );

		},
		// public method: slides to the first item
		slideStart : function() {

			this._slideTo( 0 );

		},
		// public method: slides to the last item
		slideEnd : function() {

			this._slideTo( this.itemsCount - 1 );

		},
		// public method: destroys the elastislide instance
		destroy : function( callback ) {

			this._destroy( callback );
		
		}

	};
	
	var logError = function( message ) {

		if ( window.console ) {

			window.console.error( message );
		
		}

	};
	
	$.fn.elastislide = function( options ) {

		var self = $.data( this, 'elastislide' );
		
		if ( typeof options === 'string' ) {
			
			var args = Array.prototype.slice.call( arguments, 1 );
			
			this.each(function() {
			
				if ( !self ) {

					logError( "cannot call methods on elastislide prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				
				}
				
				if ( !$.isFunction( self[options] ) || options.charAt(0) === "_" ) {

					logError( "no such method '" + options + "' for elastislide self" );
					return;
				
				}
				
				self[ options ].apply( self, args );
			
			});
		
		} 
		else {
		
			this.each(function() {
				
				if ( self ) {

					self._init();
				
				}
				else {

					self = $.data( this, 'elastislide', new $.Elastislide( options, this ) );
				
				}

			});
		
		}
		
		return self;
		
	};
	
} )( jQuery, window );

/* =========================================================
 * bootstrap-datepicker.js
 * Repo: https://github.com/eternicode/bootstrap-datepicker/
 * Demo: http://eternicode.github.io/bootstrap-datepicker/
 * Docs: http://bootstrap-datepicker.readthedocs.org/
 * Forked from http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Started by Stefan Petre; improvements by Andrew Rowls + contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

(function($, undefined){

	var $window = $(window);

	function UTCDate(){
		return new Date(Date.UTC.apply(Date, arguments));
	}
	function UTCToday(){
		var today = new Date();
		return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());
	}
	function alias(method){
		return function(){
			return this[method].apply(this, arguments);
		};
	}

	var DateArray = (function(){
		var extras = {
			get: function(i){
				return this.slice(i)[0];
			},
			contains: function(d){
				// Array.indexOf is not cross-browser;
				// $.inArray doesn't work with Dates
				var val = d && d.valueOf();
				for (var i=0, l=this.length; i < l; i++)
					if (this[i].valueOf() === val)
						return i;
				return -1;
			},
			remove: function(i){
				this.splice(i,1);
			},
			replace: function(new_array){
				if (!new_array)
					return;
				if (!$.isArray(new_array))
					new_array = [new_array];
				this.clear();
				this.push.apply(this, new_array);
			},
			clear: function(){
				this.length = 0;
			},
			copy: function(){
				var a = new DateArray();
				a.replace(this);
				return a;
			}
		};

		return function(){
			var a = [];
			a.push.apply(a, arguments);
			$.extend(a, extras);
			return a;
		};
	})();


	// Picker object

	var Datepicker = function(element, options){
		this.dates = new DateArray();
		this.viewDate = UTCToday();
		this.focusDate = null;

		this._process_options(options);

		this.element = $(element);
		this.isInline = false;
		this.isInput = this.element.is('input');
		this.component = this.element.is('.date') ? this.element.find('.add-on, .input-group-addon, .btn') : false;
		this.hasInput = this.component && this.element.find('input').length;
		if (this.component && this.component.length === 0)
			this.component = false;

		this.picker = $(DPGlobal.template);
		this._buildEvents();
		this._attachEvents();

		if (this.isInline){
			this.picker.addClass('datepicker-inline').appendTo(this.element);
		}
		else {
			this.picker.addClass('datepicker-dropdown dropdown-menu');
		}

		if (this.o.rtl){
			this.picker.addClass('datepicker-rtl');
		}

		this.viewMode = this.o.startView;

		if (this.o.calendarWeeks)
			this.picker.find('tfoot th.today, tfoot th.clear')
						.attr('colspan', function(i, val){
							return parseInt(val) + 1;
						});

		this._allow_update = false;

		this.setStartDate(this._o.startDate);
		this.setEndDate(this._o.endDate);
		this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);

		this.fillDow();
		this.fillMonths();

		this._allow_update = true;

		this.update();
		this.showMode();

		if (this.isInline){
			this.show();
		}
	};

	Datepicker.prototype = {
		constructor: Datepicker,

		_process_options: function(opts){
			// Store raw options for reference
			this._o = $.extend({}, this._o, opts);
			// Processed options
			var o = this.o = $.extend({}, this._o);

			// Check if "de-DE" style date is available, if not language should
			// fallback to 2 letter code eg "de"
			var lang = o.language;
			if (!dates[lang]){
				lang = lang.split('-')[0];
				if (!dates[lang])
					lang = defaults.language;
			}
			o.language = lang;

			switch (o.startView){
				case 2:
				case 'decade':
					o.startView = 2;
					break;
				case 1:
				case 'year':
					o.startView = 1;
					break;
				default:
					o.startView = 0;
			}

			switch (o.minViewMode){
				case 1:
				case 'months':
					o.minViewMode = 1;
					break;
				case 2:
				case 'years':
					o.minViewMode = 2;
					break;
				default:
					o.minViewMode = 0;
			}

			o.startView = Math.max(o.startView, o.minViewMode);

			// true, false, or Number > 0
			if (o.multidate !== true){
				o.multidate = Number(o.multidate) || false;
				if (o.multidate !== false)
					o.multidate = Math.max(0, o.multidate);
				else
					o.multidate = 1;
			}
			o.multidateSeparator = String(o.multidateSeparator);

			o.weekStart %= 7;
			o.weekEnd = ((o.weekStart + 6) % 7);

			var format = DPGlobal.parseFormat(o.format);
			if (o.startDate !== -Infinity){
				if (!!o.startDate){
					if (o.startDate instanceof Date)
						o.startDate = this._local_to_utc(this._zero_time(o.startDate));
					else
						o.startDate = DPGlobal.parseDate(o.startDate, format, o.language);
				}
				else {
					o.startDate = -Infinity;
				}
			}
			if (o.endDate !== Infinity){
				if (!!o.endDate){
					if (o.endDate instanceof Date)
						o.endDate = this._local_to_utc(this._zero_time(o.endDate));
					else
						o.endDate = DPGlobal.parseDate(o.endDate, format, o.language);
				}
				else {
					o.endDate = Infinity;
				}
			}

			o.daysOfWeekDisabled = o.daysOfWeekDisabled||[];
			if (!$.isArray(o.daysOfWeekDisabled))
				o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/);
			o.daysOfWeekDisabled = $.map(o.daysOfWeekDisabled, function(d){
				return parseInt(d, 10);
			});

			var plc = String(o.orientation).toLowerCase().split(/\s+/g),
				_plc = o.orientation.toLowerCase();
			plc = $.grep(plc, function(word){
				return (/^auto|left|right|top|bottom$/).test(word);
			});
			o.orientation = {x: 'auto', y: 'auto'};
			if (!_plc || _plc === 'auto')
				; // no action
			else if (plc.length === 1){
				switch (plc[0]){
					case 'top':
					case 'bottom':
						o.orientation.y = plc[0];
						break;
					case 'left':
					case 'right':
						o.orientation.x = plc[0];
						break;
				}
			}
			else {
				_plc = $.grep(plc, function(word){
					return (/^left|right$/).test(word);
				});
				o.orientation.x = _plc[0] || 'auto';

				_plc = $.grep(plc, function(word){
					return (/^top|bottom$/).test(word);
				});
				o.orientation.y = _plc[0] || 'auto';
			}
		},
		_events: [],
		_secondaryEvents: [],
		_applyEvents: function(evs){
			for (var i=0, el, ch, ev; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				}
				else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.on(ev, ch);
			}
		},
		_unapplyEvents: function(evs){
			for (var i=0, el, ev, ch; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				}
				else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.off(ev, ch);
			}
		},
		_buildEvents: function(){
			if (this.isInput){ // single input
				this._events = [
					[this.element, {
						focus: $.proxy(this.show, this),
						keyup: $.proxy(function(e){
							if ($.inArray(e.keyCode, [27,37,39,38,40,32,13,9]) === -1)
								this.update();
						}, this),
						keydown: $.proxy(this.keydown, this)
					}]
				];
			}
			else if (this.component && this.hasInput){ // component: input + button
				this._events = [
					// For components that are not readonly, allow keyboard nav
					[this.element.find('input'), {
						focus: $.proxy(this.show, this),
						keyup: $.proxy(function(e){
							if ($.inArray(e.keyCode, [27,37,39,38,40,32,13,9]) === -1)
								this.update();
						}, this),
						keydown: $.proxy(this.keydown, this)
					}],
					[this.component, {
						click: $.proxy(this.show, this)
					}]
				];
			}
			else if (this.element.is('div')){  // inline datepicker
				this.isInline = true;
			}
			else {
				this._events = [
					[this.element, {
						click: $.proxy(this.show, this)
					}]
				];
			}
			this._events.push(
				// Component: listen for blur on element descendants
				[this.element, '*', {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}],
				// Input: listen for blur on element
				[this.element, {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}]
			);

			this._secondaryEvents = [
				[this.picker, {
					click: $.proxy(this.click, this)
				}],
				[$(window), {
					resize: $.proxy(this.place, this)
				}],
				[$(document), {
					'mousedown touchstart': $.proxy(function(e){
						// Clicked outside the datepicker, hide it
						if (!(
							this.element.is(e.target) ||
							this.element.find(e.target).length ||
							this.picker.is(e.target) ||
							this.picker.find(e.target).length
						)){
							this.hide();
						}
					}, this)
				}]
			];
		},
		_attachEvents: function(){
			this._detachEvents();
			this._applyEvents(this._events);
		},
		_detachEvents: function(){
			this._unapplyEvents(this._events);
		},
		_attachSecondaryEvents: function(){
			this._detachSecondaryEvents();
			this._applyEvents(this._secondaryEvents);
		},
		_detachSecondaryEvents: function(){
			this._unapplyEvents(this._secondaryEvents);
		},
		_trigger: function(event, altdate){
			var date = altdate || this.dates.get(-1),
				local_date = this._utc_to_local(date);

			this.element.trigger({
				type: event,
				date: local_date,
				dates: $.map(this.dates, this._utc_to_local),
				format: $.proxy(function(ix, format){
					if (arguments.length === 0){
						ix = this.dates.length - 1;
						format = this.o.format;
					}
					else if (typeof ix === 'string'){
						format = ix;
						ix = this.dates.length - 1;
					}
					format = format || this.o.format;
					var date = this.dates.get(ix);
					return DPGlobal.formatDate(date, format, this.o.language);
				}, this)
			});
		},

		show: function(){
			if (!this.isInline)
				this.picker.appendTo('body');
			this.picker.show();
			this.place();
			this._attachSecondaryEvents();
			this._trigger('show');
		},

		hide: function(){
			if (this.isInline)
				return;
			if (!this.picker.is(':visible'))
				return;
			this.focusDate = null;
			this.picker.hide().detach();
			this._detachSecondaryEvents();
			this.viewMode = this.o.startView;
			this.showMode();

			if (
				this.o.forceParse &&
				(
					this.isInput && this.element.val() ||
					this.hasInput && this.element.find('input').val()
				)
			)
				this.setValue();
			this._trigger('hide');
		},

		remove: function(){
			this.hide();
			this._detachEvents();
			this._detachSecondaryEvents();
			this.picker.remove();
			delete this.element.data().datepicker;
			if (!this.isInput){
				delete this.element.data().date;
			}
		},

		_utc_to_local: function(utc){
			return utc && new Date(utc.getTime() + (utc.getTimezoneOffset()*60000));
		},
		_local_to_utc: function(local){
			return local && new Date(local.getTime() - (local.getTimezoneOffset()*60000));
		},
		_zero_time: function(local){
			return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());
		},
		_zero_utc_time: function(utc){
			return utc && new Date(Date.UTC(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate()));
		},

		getDates: function(){
			return $.map(this.dates, this._utc_to_local);
		},

		getUTCDates: function(){
			return $.map(this.dates, function(d){
				return new Date(d);
			});
		},

		getDate: function(){
			return this._utc_to_local(this.getUTCDate());
		},

		getUTCDate: function(){
			return new Date(this.dates.get(-1));
		},

		setDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, args);
			this._trigger('changeDate');
			this.setValue();
		},

		setUTCDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, $.map(args, this._utc_to_local));
			this._trigger('changeDate');
			this.setValue();
		},

		setDate: alias('setDates'),
		setUTCDate: alias('setUTCDates'),

		setValue: function(){
			var formatted = this.getFormattedDate();
			if (!this.isInput){
				if (this.component){
					this.element.find('input').val(formatted).change();
				}
			}
			else {
				this.element.val(formatted).change();
			}
		},

		getFormattedDate: function(format){
			if (format === undefined)
				format = this.o.format;

			var lang = this.o.language;
			return $.map(this.dates, function(d){
				return DPGlobal.formatDate(d, format, lang);
			}).join(this.o.multidateSeparator);
		},

		setStartDate: function(startDate){
			this._process_options({startDate: startDate});
			this.update();
			this.updateNavArrows();
		},

		setEndDate: function(endDate){
			this._process_options({endDate: endDate});
			this.update();
			this.updateNavArrows();
		},

		setDaysOfWeekDisabled: function(daysOfWeekDisabled){
			this._process_options({daysOfWeekDisabled: daysOfWeekDisabled});
			this.update();
			this.updateNavArrows();
		},

		place: function(){
			if (this.isInline)
				return;
			var calendarWidth = this.picker.outerWidth(),
				calendarHeight = this.picker.outerHeight(),
				visualPadding = 10,
				windowWidth = $window.width(),
				windowHeight = $window.height(),
				scrollTop = $window.scrollTop();

			var parentsZindex = [];
			this.element.parents().each(function() {
				var itemZIndex = $(this).css('z-index');
				if ( itemZIndex !== 'auto' && itemZIndex !== 0 ) parentsZindex.push( parseInt( itemZIndex ) );
			});
			var zIndex = Math.max.apply( Math, parentsZindex ) + 10;
			var offset = this.component ? this.component.parent().offset() : this.element.offset();
			var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
			var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
			var left = offset.left,
				top = offset.top;

			this.picker.removeClass(
				'datepicker-orient-top datepicker-orient-bottom '+
				'datepicker-orient-right datepicker-orient-left'
			);

			if (this.o.orientation.x !== 'auto'){
				this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
				if (this.o.orientation.x === 'right')
					left -= calendarWidth - width;
			}
			// auto x orientation is best-placement: if it crosses a window
			// edge, fudge it sideways
			else {
				// Default to left
				this.picker.addClass('datepicker-orient-left');
				if (offset.left < 0)
					left -= offset.left - visualPadding;
				else if (offset.left + calendarWidth > windowWidth)
					left = windowWidth - calendarWidth - visualPadding;
			}

			// auto y orientation is best-situation: top or bottom, no fudging,
			// decision based on which shows more of the calendar
			var yorient = this.o.orientation.y,
				top_overflow, bottom_overflow;
			if (yorient === 'auto'){
				top_overflow = -scrollTop + offset.top - calendarHeight;
				bottom_overflow = scrollTop + windowHeight - (offset.top + height + calendarHeight);
				if (Math.max(top_overflow, bottom_overflow) === bottom_overflow)
					yorient = 'top';
				else
					yorient = 'bottom';
			}
			this.picker.addClass('datepicker-orient-' + yorient);
			if (yorient === 'top')
				top += height;
			else
				top -= calendarHeight + parseInt(this.picker.css('padding-top'));

			this.picker.css({
				top: top,
				left: left,
				zIndex: zIndex
			});
		},

		_allow_update: true,
		update: function(){
			if (!this._allow_update)
				return;

			var oldDates = this.dates.copy(),
				dates = [],
				fromArgs = false;
			if (arguments.length){
				$.each(arguments, $.proxy(function(i, date){
					if (date instanceof Date)
						date = this._local_to_utc(date);
					dates.push(date);
				}, this));
				fromArgs = true;
			}
			else {
				dates = this.isInput
						? this.element.val()
						: this.element.data('date') || this.element.find('input').val();
				if (dates && this.o.multidate)
					dates = dates.split(this.o.multidateSeparator);
				else
					dates = [dates];
				delete this.element.data().date;
			}

			dates = $.map(dates, $.proxy(function(date){
				return DPGlobal.parseDate(date, this.o.format, this.o.language);
			}, this));
			dates = $.grep(dates, $.proxy(function(date){
				return (
					date < this.o.startDate ||
					date > this.o.endDate ||
					!date
				);
			}, this), true);
			this.dates.replace(dates);

			if (this.dates.length)
				this.viewDate = new Date(this.dates.get(-1));
			else if (this.viewDate < this.o.startDate)
				this.viewDate = new Date(this.o.startDate);
			else if (this.viewDate > this.o.endDate)
				this.viewDate = new Date(this.o.endDate);

			if (fromArgs){
				// setting date by clicking
				this.setValue();
			}
			else if (dates.length){
				// setting date by typing
				if (String(oldDates) !== String(this.dates))
					this._trigger('changeDate');
			}
			if (!this.dates.length && oldDates.length)
				this._trigger('clearDate');

			this.fill();
		},

		fillDow: function(){
			var dowCnt = this.o.weekStart,
				html = '<tr>';
			if (this.o.calendarWeeks){
				var cell = '<th class="cw">&nbsp;</th>';
				html += cell;
				this.picker.find('.datepicker-days thead tr:first-child').prepend(cell);
			}
			while (dowCnt < this.o.weekStart + 7){
				html += '<th class="dow">'+dates[this.o.language].daysMin[(dowCnt++)%7]+'</th>';
			}
			html += '</tr>';
			this.picker.find('.datepicker-days thead').append(html);
		},

		fillMonths: function(){
			var html = '',
			i = 0;
			while (i < 12){
				html += '<span class="month">'+dates[this.o.language].monthsShort[i++]+'</span>';
			}
			this.picker.find('.datepicker-months td').html(html);
		},

		setRange: function(range){
			if (!range || !range.length)
				delete this.range;
			else
				this.range = $.map(range, function(d){
					return d.valueOf();
				});
			this.fill();
		},

		getClassNames: function(date){
			var cls = [],
				year = this.viewDate.getUTCFullYear(),
				month = this.viewDate.getUTCMonth(),
				today = new Date();
			if (date.getUTCFullYear() < year || (date.getUTCFullYear() === year && date.getUTCMonth() < month)){
				cls.push('old');
			}
			else if (date.getUTCFullYear() > year || (date.getUTCFullYear() === year && date.getUTCMonth() > month)){
				cls.push('new');
			}
			if (this.focusDate && date.valueOf() === this.focusDate.valueOf())
				cls.push('focused');
			// Compare internal UTC date with local today, not UTC today
			if (this.o.todayHighlight &&
				date.getUTCFullYear() === today.getFullYear() &&
				date.getUTCMonth() === today.getMonth() &&
				date.getUTCDate() === today.getDate()){
				cls.push('today');
			}
			if (this.dates.contains(date) !== -1)
				cls.push('active');
			if (date.valueOf() < this.o.startDate || date.valueOf() > this.o.endDate ||
				$.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1){
				cls.push('disabled');
			}
			if (this.range){
				if (date > this.range[0] && date < this.range[this.range.length-1]){
					cls.push('range');
				}
				if ($.inArray(date.valueOf(), this.range) !== -1){
					cls.push('selected');
				}
			}
			return cls;
		},

		fill: function(){
			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth(),
				startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
				startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
				endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
				todaytxt = dates[this.o.language].today || dates['en'].today || '',
				cleartxt = dates[this.o.language].clear || dates['en'].clear || '',
				tooltip;
			if (isNaN(year) || isNaN(month)) return;
			this.picker.find('.datepicker-days thead th.datepicker-switch')
						.text(dates[this.o.language].months[month]+' '+year);
			this.picker.find('tfoot th.today')
						.text(todaytxt)
						.toggle(this.o.todayBtn !== false);
			this.picker.find('tfoot th.clear')
						.text(cleartxt)
						.toggle(this.o.clearBtn !== false);
			this.updateNavArrows();
			this.fillMonths();
			var prevMonth = UTCDate(year, month-1, 28),
				day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
			prevMonth.setUTCDate(day);
			prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7)%7);
			var nextMonth = new Date(prevMonth);
			nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var clsName;
			while (prevMonth.valueOf() < nextMonth){
				if (prevMonth.getUTCDay() === this.o.weekStart){
					html.push('<tr>');
					if (this.o.calendarWeeks){
						// ISO 8601: First week contains first thursday.
						// ISO also states week starts on Monday, but we can be more abstract here.
						var
							// Start of current week: based on weekstart/current date
							ws = new Date(+prevMonth + (this.o.weekStart - prevMonth.getUTCDay() - 7) % 7 * 864e5),
							// Thursday of this week
							th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
							// First Thursday of year, year from thursday
							yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay())%7*864e5),
							// Calendar week: ms between thursdays, div ms per day, div 7 days
							calWeek =  (th - yth) / 864e5 / 7 + 1;
						html.push('<td class="cw">'+ calWeek +'</td>');

					}
				}
				clsName = this.getClassNames(prevMonth);
				clsName.push('day');

				if (this.o.beforeShowDay !== $.noop){
					var before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
					if (before === undefined)
						before = {};
					else if (typeof(before) === 'boolean')
						before = {enabled: before};
					else if (typeof(before) === 'string')
						before = {classes: before};
					if (before.enabled === false)
						clsName.push('disabled');
					if (before.classes)
						clsName = clsName.concat(before.classes.split(/\s+/));
					if (before.tooltip)
						tooltip = before.tooltip;
				}

				clsName = $.unique(clsName);
				html.push('<td class="'+clsName.join(' ')+'"' + (tooltip ? ' title="'+tooltip+'"' : '') + '>'+prevMonth.getUTCDate() + '</td>');
				tooltip = null;
				if (prevMonth.getUTCDay() === this.o.weekEnd){
					html.push('</tr>');
				}
				prevMonth.setUTCDate(prevMonth.getUTCDate()+1);
			}
			this.picker.find('.datepicker-days tbody').empty().append(html.join(''));

			var months = this.picker.find('.datepicker-months')
						.find('th:eq(1)')
							.text(year)
							.end()
						.find('span').removeClass('active');

			$.each(this.dates, function(i, d){
				if (d.getUTCFullYear() === year)
					months.eq(d.getUTCMonth()).addClass('active');
			});

			if (year < startYear || year > endYear){
				months.addClass('disabled');
			}
			if (year === startYear){
				months.slice(0, startMonth).addClass('disabled');
			}
			if (year === endYear){
				months.slice(endMonth+1).addClass('disabled');
			}

			html = '';
			year = parseInt(year/10, 10) * 10;
			var yearCont = this.picker.find('.datepicker-years')
								.find('th:eq(1)')
									.text(year + '-' + (year + 9))
									.end()
								.find('td');
			year -= 1;
			var years = $.map(this.dates, function(d){
					return d.getUTCFullYear();
				}),
				classes;
			for (var i = -1; i < 11; i++){
				classes = ['year'];
				if (i === -1)
					classes.push('old');
				else if (i === 10)
					classes.push('new');
				if ($.inArray(year, years) !== -1)
					classes.push('active');
				if (year < startYear || year > endYear)
					classes.push('disabled');
				html += '<span class="' + classes.join(' ') + '">'+year+'</span>';
				year += 1;
			}
			yearCont.html(html);
		},

		updateNavArrows: function(){
			if (!this._allow_update)
				return;

			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth();
			switch (this.viewMode){
				case 0:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() && month <= this.o.startDate.getUTCMonth()){
						this.picker.find('.prev').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() && month >= this.o.endDate.getUTCMonth()){
						this.picker.find('.next').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
				case 1:
				case 2:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear()){
						this.picker.find('.prev').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear()){
						this.picker.find('.next').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
			}
		},

		click: function(e){
			e.preventDefault();
			var target = $(e.target).closest('span, td, th'),
				year, month, day;
			if (target.length === 1){
				switch (target[0].nodeName.toLowerCase()){
					case 'th':
						switch (target[0].className){
							case 'datepicker-switch':
								this.showMode(1);
								break;
							case 'prev':
							case 'next':
								var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className === 'prev' ? -1 : 1);
								switch (this.viewMode){
									case 0:
										this.viewDate = this.moveMonth(this.viewDate, dir);
										this._trigger('changeMonth', this.viewDate);
										break;
									case 1:
									case 2:
										this.viewDate = this.moveYear(this.viewDate, dir);
										if (this.viewMode === 1)
											this._trigger('changeYear', this.viewDate);
										break;
								}
								this.fill();
								break;
							case 'today':
								var date = new Date();
								date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);

								this.showMode(-2);
								var which = this.o.todayBtn === 'linked' ? null : 'view';
								this._setDate(date, which);
								break;
							case 'clear':
								var element;
								if (this.isInput)
									element = this.element;
								else if (this.component)
									element = this.element.find('input');
								if (element)
									element.val("").change();
								this.update();
								this._trigger('changeDate');
								if (this.o.autoclose)
									this.hide();
								break;
						}
						break;
					case 'span':
						if (!target.is('.disabled')){
							this.viewDate.setUTCDate(1);
							if (target.is('.month')){
								day = 1;
								month = target.parent().find('span').index(target);
								year = this.viewDate.getUTCFullYear();
								this.viewDate.setUTCMonth(month);
								this._trigger('changeMonth', this.viewDate);
								if (this.o.minViewMode === 1){
									this._setDate(UTCDate(year, month, day));
								}
							}
							else {
								day = 1;
								month = 0;
								year = parseInt(target.text(), 10)||0;
								this.viewDate.setUTCFullYear(year);
								this._trigger('changeYear', this.viewDate);
								if (this.o.minViewMode === 2){
									this._setDate(UTCDate(year, month, day));
								}
							}
							this.showMode(-1);
							this.fill();
						}
						break;
					case 'td':
						if (target.is('.day') && !target.is('.disabled')){
							day = parseInt(target.text(), 10)||1;
							year = this.viewDate.getUTCFullYear();
							month = this.viewDate.getUTCMonth();
							if (target.is('.old')){
								if (month === 0){
									month = 11;
									year -= 1;
								}
								else {
									month -= 1;
								}
							}
							else if (target.is('.new')){
								if (month === 11){
									month = 0;
									year += 1;
								}
								else {
									month += 1;
								}
							}
							this._setDate(UTCDate(year, month, day));
						}
						break;
				}
			}
			if (this.picker.is(':visible') && this._focused_from){
				$(this._focused_from).focus();
			}
			delete this._focused_from;
		},

		_toggle_multidate: function(date){
			var ix = this.dates.contains(date);
			if (!date){
				this.dates.clear();
			}
			if (this.o.multidate === 1 && ix === 0){
                // single datepicker, don't remove selected date
            }
			else if (ix !== -1){
				this.dates.remove(ix);
			}
			else {
				this.dates.push(date);
			}
			if (typeof this.o.multidate === 'number')
				while (this.dates.length > this.o.multidate)
					this.dates.remove(0);
		},

		_setDate: function(date, which){
			if (!which || which === 'date')
				this._toggle_multidate(date && new Date(date));
			if (!which || which  === 'view')
				this.viewDate = date && new Date(date);

			this.fill();
			this.setValue();
			this._trigger('changeDate');
			var element;
			if (this.isInput){
				element = this.element;
			}
			else if (this.component){
				element = this.element.find('input');
			}
			if (element){
				element.change();
			}
			if (this.o.autoclose && (!which || which === 'date')){
				this.hide();
			}
		},

		moveMonth: function(date, dir){
			if (!date)
				return undefined;
			if (!dir)
				return date;
			var new_date = new Date(date.valueOf()),
				day = new_date.getUTCDate(),
				month = new_date.getUTCMonth(),
				mag = Math.abs(dir),
				new_month, test;
			dir = dir > 0 ? 1 : -1;
			if (mag === 1){
				test = dir === -1
					// If going back one month, make sure month is not current month
					// (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
					? function(){
						return new_date.getUTCMonth() === month;
					}
					// If going forward one month, make sure month is as expected
					// (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
					: function(){
						return new_date.getUTCMonth() !== new_month;
					};
				new_month = month + dir;
				new_date.setUTCMonth(new_month);
				// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
				if (new_month < 0 || new_month > 11)
					new_month = (new_month + 12) % 12;
			}
			else {
				// For magnitudes >1, move one month at a time...
				for (var i=0; i < mag; i++)
					// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
					new_date = this.moveMonth(new_date, dir);
				// ...then reset the day, keeping it in the new month
				new_month = new_date.getUTCMonth();
				new_date.setUTCDate(day);
				test = function(){
					return new_month !== new_date.getUTCMonth();
				};
			}
			// Common date-resetting loop -- if date is beyond end of month, make it
			// end of month
			while (test()){
				new_date.setUTCDate(--day);
				new_date.setUTCMonth(new_month);
			}
			return new_date;
		},

		moveYear: function(date, dir){
			return this.moveMonth(date, dir*12);
		},

		dateWithinRange: function(date){
			return date >= this.o.startDate && date <= this.o.endDate;
		},

		keydown: function(e){
			if (this.picker.is(':not(:visible)')){
				if (e.keyCode === 27) // allow escape to hide and re-show picker
					this.show();
				return;
			}
			var dateChanged = false,
				dir, newDate, newViewDate,
				focusDate = this.focusDate || this.viewDate;
			switch (e.keyCode){
				case 27: // escape
					if (this.focusDate){
						this.focusDate = null;
						this.viewDate = this.dates.get(-1) || this.viewDate;
						this.fill();
					}
					else
						this.hide();
					e.preventDefault();
					break;
				case 37: // left
				case 39: // right
					if (!this.o.keyboardNavigation)
						break;
					dir = e.keyCode === 37 ? -1 : 1;
					if (e.ctrlKey){
						newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveYear(focusDate, dir);
						this._trigger('changeYear', this.viewDate);
					}
					else if (e.shiftKey){
						newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveMonth(focusDate, dir);
						this._trigger('changeMonth', this.viewDate);
					}
					else {
						newDate = new Date(this.dates.get(-1) || UTCToday());
						newDate.setUTCDate(newDate.getUTCDate() + dir);
						newViewDate = new Date(focusDate);
						newViewDate.setUTCDate(focusDate.getUTCDate() + dir);
					}
					if (this.dateWithinRange(newDate)){
						this.focusDate = this.viewDate = newViewDate;
						this.setValue();
						this.fill();
						e.preventDefault();
					}
					break;
				case 38: // up
				case 40: // down
					if (!this.o.keyboardNavigation)
						break;
					dir = e.keyCode === 38 ? -1 : 1;
					if (e.ctrlKey){
						newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveYear(focusDate, dir);
						this._trigger('changeYear', this.viewDate);
					}
					else if (e.shiftKey){
						newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveMonth(focusDate, dir);
						this._trigger('changeMonth', this.viewDate);
					}
					else {
						newDate = new Date(this.dates.get(-1) || UTCToday());
						newDate.setUTCDate(newDate.getUTCDate() + dir * 7);
						newViewDate = new Date(focusDate);
						newViewDate.setUTCDate(focusDate.getUTCDate() + dir * 7);
					}
					if (this.dateWithinRange(newDate)){
						this.focusDate = this.viewDate = newViewDate;
						this.setValue();
						this.fill();
						e.preventDefault();
					}
					break;
				case 32: // spacebar
					// Spacebar is used in manually typing dates in some formats.
					// As such, its behavior should not be hijacked.
					break;
				case 13: // enter
					focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;
					if (this.o.keyboardNavigation) {
						this._toggle_multidate(focusDate);
						dateChanged = true;
					}
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.setValue();
					this.fill();
					if (this.picker.is(':visible')){
						e.preventDefault();
						if (this.o.autoclose)
							this.hide();
					}
					break;
				case 9: // tab
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.fill();
					this.hide();
					break;
			}
			if (dateChanged){
				if (this.dates.length)
					this._trigger('changeDate');
				else
					this._trigger('clearDate');
				var element;
				if (this.isInput){
					element = this.element;
				}
				else if (this.component){
					element = this.element.find('input');
				}
				if (element){
					element.change();
				}
			}
		},

		showMode: function(dir){
			if (dir){
				this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + dir));
			}
			this.picker
				.find('>div')
				.hide()
				.filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName)
					.css('display', 'block');
			this.updateNavArrows();
		}
	};

	var DateRangePicker = function(element, options){
		this.element = $(element);
		this.inputs = $.map(options.inputs, function(i){
			return i.jquery ? i[0] : i;
		});
		delete options.inputs;

		$(this.inputs)
			.datepicker(options)
			.bind('changeDate', $.proxy(this.dateUpdated, this));

		this.pickers = $.map(this.inputs, function(i){
			return $(i).data('datepicker');
		});
		this.updateDates();
	};
	DateRangePicker.prototype = {
		updateDates: function(){
			this.dates = $.map(this.pickers, function(i){
				return i.getUTCDate();
			});
			this.updateRanges();
		},
		updateRanges: function(){
			var range = $.map(this.dates, function(d){
				return d.valueOf();
			});
			$.each(this.pickers, function(i, p){
				p.setRange(range);
			});
		},
		dateUpdated: function(e){
			// `this.updating` is a workaround for preventing infinite recursion
			// between `changeDate` triggering and `setUTCDate` calling.  Until
			// there is a better mechanism.
			if (this.updating)
				return;
			this.updating = true;

			var dp = $(e.target).data('datepicker'),
				new_date = dp.getUTCDate(),
				i = $.inArray(e.target, this.inputs),
				l = this.inputs.length;
			if (i === -1)
				return;

			$.each(this.pickers, function(i, p){
				if (!p.getUTCDate())
					p.setUTCDate(new_date);
			});

			if (new_date < this.dates[i]){
				// Date being moved earlier/left
				while (i >= 0 && new_date < this.dates[i]){
					this.pickers[i--].setUTCDate(new_date);
				}
			}
			else if (new_date > this.dates[i]){
				// Date being moved later/right
				while (i < l && new_date > this.dates[i]){
					this.pickers[i++].setUTCDate(new_date);
				}
			}
			this.updateDates();

			delete this.updating;
		},
		remove: function(){
			$.map(this.pickers, function(p){ p.remove(); });
			delete this.element.data().datepicker;
		}
	};

	function opts_from_el(el, prefix){
		// Derive options from element data-attrs
		var data = $(el).data(),
			out = {}, inkey,
			replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');
		prefix = new RegExp('^' + prefix.toLowerCase());
		function re_lower(_,a){
			return a.toLowerCase();
		}
		for (var key in data)
			if (prefix.test(key)){
				inkey = key.replace(replace, re_lower);
				out[inkey] = data[key];
			}
		return out;
	}

	function opts_from_locale(lang){
		// Derive options from locale plugins
		var out = {};
		// Check if "de-DE" style date is available, if not language should
		// fallback to 2 letter code eg "de"
		if (!dates[lang]){
			lang = lang.split('-')[0];
			if (!dates[lang])
				return;
		}
		var d = dates[lang];
		$.each(locale_opts, function(i,k){
			if (k in d)
				out[k] = d[k];
		});
		return out;
	}

	var old = $.fn.datepicker;
	$.fn.datepicker = function(option){
		var args = Array.apply(null, arguments);
		args.shift();
		var internal_return;
		this.each(function(){
			var $this = $(this),
				data = $this.data('datepicker'),
				options = typeof option === 'object' && option;
			if (!data){
				var elopts = opts_from_el(this, 'date'),
					// Preliminary otions
					xopts = $.extend({}, defaults, elopts, options),
					locopts = opts_from_locale(xopts.language),
					// Options priority: js args, data-attrs, locales, defaults
					opts = $.extend({}, defaults, locopts, elopts, options);
				if ($this.is('.input-daterange') || opts.inputs){
					var ropts = {
						inputs: opts.inputs || $this.find('input').toArray()
					};
					$this.data('datepicker', (data = new DateRangePicker(this, $.extend(opts, ropts))));
				}
				else {
					$this.data('datepicker', (data = new Datepicker(this, opts)));
				}
			}
			if (typeof option === 'string' && typeof data[option] === 'function'){
				internal_return = data[option].apply(data, args);
				if (internal_return !== undefined)
					return false;
			}
		});
		if (internal_return !== undefined)
			return internal_return;
		else
			return this;
	};

	var defaults = $.fn.datepicker.defaults = {
		autoclose: false,
		beforeShowDay: $.noop,
		calendarWeeks: false,
		clearBtn: false,
		daysOfWeekDisabled: [],
		endDate: Infinity,
		forceParse: true,
		format: 'mm/dd/yyyy',
		keyboardNavigation: true,
		language: 'en',
		minViewMode: 0,
		multidate: false,
		multidateSeparator: ',',
		orientation: "auto",
		rtl: false,
		startDate: -Infinity,
		startView: 0,
		todayBtn: false,
		todayHighlight: false,
		weekStart: 0
	};
	var locale_opts = $.fn.datepicker.locale_opts = [
		'format',
		'rtl',
		'weekStart'
	];
	$.fn.datepicker.Constructor = Datepicker;
	var dates = $.fn.datepicker.dates = {
		en: {
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			today: "Today",
			clear: "Clear"
		}
	};

	var DPGlobal = {
		modes: [
			{
				clsName: 'days',
				navFnc: 'Month',
				navStep: 1
			},
			{
				clsName: 'months',
				navFnc: 'FullYear',
				navStep: 1
			},
			{
				clsName: 'years',
				navFnc: 'FullYear',
				navStep: 10
		}],
		isLeapYear: function(year){
			return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
		},
		getDaysInMonth: function(year, month){
			return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
		},
		validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
		nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
		parseFormat: function(format){
			// IE treats \0 as a string end in inputs (truncating the value),
			// so it's a bad format delimiter, anyway
			var separators = format.replace(this.validParts, '\0').split('\0'),
				parts = format.match(this.validParts);
			if (!separators || !separators.length || !parts || parts.length === 0){
				throw new Error("Invalid date format.");
			}
			return {separators: separators, parts: parts};
		},
		parseDate: function(date, format, language){
			if (!date)
				return undefined;
			if (date instanceof Date)
				return date;
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			var part_re = /([\-+]\d+)([dmwy])/,
				parts = date.match(/([\-+]\d+)([dmwy])/g),
				part, dir, i;
			if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)){
				date = new Date();
				for (i=0; i < parts.length; i++){
					part = part_re.exec(parts[i]);
					dir = parseInt(part[1]);
					switch (part[2]){
						case 'd':
							date.setUTCDate(date.getUTCDate() + dir);
							break;
						case 'm':
							date = Datepicker.prototype.moveMonth.call(Datepicker.prototype, date, dir);
							break;
						case 'w':
							date.setUTCDate(date.getUTCDate() + dir * 7);
							break;
						case 'y':
							date = Datepicker.prototype.moveYear.call(Datepicker.prototype, date, dir);
							break;
					}
				}
				return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0);
			}
			parts = date && date.match(this.nonpunctuation) || [];
			date = new Date();
			var parsed = {},
				setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
				setters_map = {
					yyyy: function(d,v){
						return d.setUTCFullYear(v);
					},
					yy: function(d,v){
						return d.setUTCFullYear(2000+v);
					},
					m: function(d,v){
						if (isNaN(d))
							return d;
						v -= 1;
						while (v < 0) v += 12;
						v %= 12;
						d.setUTCMonth(v);
						while (d.getUTCMonth() !== v)
							d.setUTCDate(d.getUTCDate()-1);
						return d;
					},
					d: function(d,v){
						return d.setUTCDate(v);
					}
				},
				val, filtered;
			setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
			setters_map['dd'] = setters_map['d'];
			date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
			var fparts = format.parts.slice();
			// Remove noop parts
			if (parts.length !== fparts.length){
				fparts = $(fparts).filter(function(i,p){
					return $.inArray(p, setters_order) !== -1;
				}).toArray();
			}
			// Process remainder
			function match_part(){
				var m = this.slice(0, parts[i].length),
					p = parts[i].slice(0, m.length);
				return m === p;
			}
			if (parts.length === fparts.length){
				var cnt;
				for (i=0, cnt = fparts.length; i < cnt; i++){
					val = parseInt(parts[i], 10);
					part = fparts[i];
					if (isNaN(val)){
						switch (part){
							case 'MM':
								filtered = $(dates[language].months).filter(match_part);
								val = $.inArray(filtered[0], dates[language].months) + 1;
								break;
							case 'M':
								filtered = $(dates[language].monthsShort).filter(match_part);
								val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
								break;
						}
					}
					parsed[part] = val;
				}
				var _date, s;
				for (i=0; i < setters_order.length; i++){
					s = setters_order[i];
					if (s in parsed && !isNaN(parsed[s])){
						_date = new Date(date);
						setters_map[s](_date, parsed[s]);
						if (!isNaN(_date))
							date = _date;
					}
				}
			}
			return date;
		},
		formatDate: function(date, format, language){
			if (!date)
				return '';
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			var val = {
				d: date.getUTCDate(),
				D: dates[language].daysShort[date.getUTCDay()],
				DD: dates[language].days[date.getUTCDay()],
				m: date.getUTCMonth() + 1,
				M: dates[language].monthsShort[date.getUTCMonth()],
				MM: dates[language].months[date.getUTCMonth()],
				yy: date.getUTCFullYear().toString().substring(2),
				yyyy: date.getUTCFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			date = [];
			var seps = $.extend([], format.separators);
			for (var i=0, cnt = format.parts.length; i <= cnt; i++){
				if (seps.length)
					date.push(seps.shift());
				date.push(val[format.parts[i]]);
			}
			return date.join('');
		},
		headTemplate: '<thead>'+
							'<tr>'+
								'<th class="prev">&laquo;</th>'+
								'<th colspan="5" class="datepicker-switch"></th>'+
								'<th class="next">&raquo;</th>'+
							'</tr>'+
						'</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
		footTemplate: '<tfoot>'+
							'<tr>'+
								'<th colspan="7" class="today"></th>'+
							'</tr>'+
							'<tr>'+
								'<th colspan="7" class="clear"></th>'+
							'</tr>'+
						'</tfoot>'
	};
	DPGlobal.template = '<div class="datepicker">'+
							'<div class="datepicker-days">'+
								'<table class=" table-condensed">'+
									DPGlobal.headTemplate+
									'<tbody></tbody>'+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-months">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-years">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
						'</div>';

	$.fn.datepicker.DPGlobal = DPGlobal;


	/* DATEPICKER NO CONFLICT
	* =================== */

	$.fn.datepicker.noConflict = function(){
		$.fn.datepicker = old;
		return this;
	};


	/* DATEPICKER DATA-API
	* ================== */

	$(document).on(
		'focus.datepicker.data-api click.datepicker.data-api',
		'[data-provide="datepicker"]',
		function(e){
			var $this = $(this);
			if ($this.data('datepicker'))
				return;
			e.preventDefault();
			// component click requires us to explicitly show it
			$this.datepicker('show');
		}
	);
	$(function(){
		$('[data-provide="datepicker-inline"]').datepicker();
	});

}(window.jQuery));

/**
 * Linksys supported translation for bootstrap-datepicker
 * 
 */
;(function($){
	//EMEA
	$.fn.datepicker.dates['en_GB'] = $.fn.datepicker.dates['en_EU'] = {
		days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
		daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
		daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
		months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		today: "Today",
		clear: "Clear",
		weekStart: 1,
		format: "dd/mm/yyyy"
	};
	$.fn.datepicker.dates['es_EU'] = {
		days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
		daysShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
		daysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"],
		months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
		monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
		today: "Hoy",
		clear: "Borrar",
		weekStart: 1,
		format: "dd/mm/yyyy"
	};
	$.fn.datepicker.dates['de_DE'] = $.fn.datepicker.dates['de_CH'] = {
		days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"],
		daysShort: ["Son", "Mon", "Die", "Mit", "Don", "Fre", "Sam", "Son"],
		daysMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
		months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
		monthsShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
		today: "Heute",
		clear: "Löschen",
		weekStart: 1,
		format: "dd.mm.yyyy"
	};

	$.fn.datepicker.dates['fr_FR'] = $.fn.datepicker.dates['fr_EU'] = {
		days: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
		daysShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
		daysMin: ["D", "L", "Ma", "Me", "J", "V", "S", "D"],
		months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
		monthsShort: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jui", "Jul", "Aou", "Sep", "Oct", "Nov", "Déc"],
		today: "Aujourd'hui",
		clear: "Effacer",
		weekStart: 1,
		format: "dd/mm/yyyy"
	};
	$.fn.datepicker.dates['fr_CH'] = {
		days: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
		daysShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
		daysMin: ["D", "L", "Ma", "Me", "J", "V", "S", "D"],
		months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
		monthsShort: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jui", "Jul", "Aou", "Sep", "Oct", "Nov", "Déc"],
		today: "Aujourd'hui",
		clear: "Effacer",
		weekStart: 1,
		format: "dd.mm.yyyy"
	};
	$.fn.datepicker.dates['fr_CH'] = {
		days: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
		daysShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
		daysMin: ["D", "L", "Ma", "Me", "J", "V", "S", "D"],
		months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
		monthsShort: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jui", "Jul", "Aou", "Sep", "Oct", "Nov", "Déc"],
		today: "Aujourd'hui",
		clear: "Effacer",
		weekStart: 1,
		format: "dd.mm.yyyy"
	};
	$.fn.datepicker.dates['nl_NL'] = $.fn.datepicker.dates['nl_EU'] = {
		days: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"],
		daysShort: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"],
		daysMin: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"],
		months: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
		monthsShort: ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
		today: "Vandaag",
		clear: "Wissen",
		weekStart: 1,
		format: "dd-mm-yyyy"
	};
	$.fn.datepicker.dates['nl_BE'] = {
	    days: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"],
	    daysShort: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"],
	    daysMin: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"],
	    months: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
	    monthsShort: ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
	    today: "Vandaag",
	    clear: "Leegmaken",
	    weekStart: 1,
	    format: "dd/mm/yyyy"
	 };


	//APAC
	$.fn.datepicker.dates['en_ID'] = $.fn.datepicker.dates['en_HK'] = $.fn.datepicker.dates['en_AP'] = $.fn.datepicker.dates['en_TH'] = $.fn.datepicker.dates['en_SG'] = $.fn.datepicker.dates['en_AU'] = {
		days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
		daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
		daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
		months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		today: "Today",
		clear: "Clear",
		weekStart: 1,
		format: "dd/mm/yyyy"
	};


	//MEA
	$.fn.datepicker.dates['en_ME'] = {
		days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
		daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
		daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
		months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		today: "Today",
		clear: "Clear",
		weekStart: 1,
		format: "dd/mm/yyyy"
	};


	//AMERICAS
	$.fn.datepicker.dates['fr_CA'] = {
		days: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
		daysShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
		daysMin: ["D", "L", "Ma", "Me", "J", "V", "S", "D"],
		months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
		monthsShort: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jui", "Jul", "Aou", "Sep", "Oct", "Nov", "Déc"],
		today: "Aujourd'hui",
		clear: "Effacer",
		weekStart: 1,
		format: "dd/mm/yyyy"
	};
	$.fn.datepicker.dates['es_MX'] = $.fn.datepicker.dates['es_AR'] = $.fn.datepicker.dates['es_LA'] = {
		days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
		daysShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
		daysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"],
		months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
		monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
		today: "Hoy",
		clear: "Borrar",
		weekStart: 1,
		format: "dd/mm/yyyy"
	};

	$.fn.datepicker.dates['pt_BR'] = {
		days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
		daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
		daysMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa", "Do"],
		months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
		monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
		today: "Hoje",
		clear: "Limpar"
	};
}(jQuery));

(function() {
    var root = (typeof exports === 'undefined' ? window : exports);
    var config = {
        // An option to choose a suffix for 2x images
        retinaImageSuffix : '@2x',

        // Ensure Content-Type is an image before trying to load @2x image
        // https://github.com/imulus/retinajs/pull/45)
        check_mime_type: true,

        // Resize high-resolution images to original image's pixel dimensions
        // https://github.com/imulus/retinajs/issues/8
        force_original_dimensions: true
    };

    function Retina() {}

    root.Retina = Retina;

    Retina.configure = function(options) {
        if (options === null) {
            options = {};
        }

        for (var prop in options) {
            if (options.hasOwnProperty(prop)) {
                config[prop] = options[prop];
            }
        }
    };

    Retina.init = function(context) {
        if (context === null) {
            context = root;
        }
        context.addEventListener('load', function (){
            var images = document.getElementsByTagName('img'), imagesLength = images.length, retinaImages = [], i, image;
            for (i = 0; i < imagesLength; i += 1) {
                image = images[i];

                 var imageSource = image.src,
                imageExt    = imageSource.substr(imageSource.lastIndexOf('.') + 1);

                if (!!!image.getAttributeNode('data-no-retina') && imageExt != 'svg' ) {
                    if (image.src) {
                        retinaImages.push(new RetinaImage(image));
                    }
                }
            }
        });
    };

    Retina.isRetina = function(){
        var mediaQuery = '(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)';

        if (root.devicePixelRatio > 1) {
            return true;
        }

        if (root.matchMedia && root.matchMedia(mediaQuery).matches) {
            return true;
        }

        return false;
    };


    var regexMatch = /\.[\w\?=]+$/;
    function suffixReplace (match) {
        return config.retinaImageSuffix + match;
    }

    function RetinaImagePath(path, at_2x_path) {
        this.path = path || '';
        if (typeof at_2x_path !== 'undefined' && at_2x_path !== null) {
            this.at_2x_path = at_2x_path;
            this.perform_check = false;
        } else {
            if (undefined !== document.createElement) {
                var locationObject = document.createElement('a');
                locationObject.href = this.path;
                locationObject.pathname = locationObject.pathname.replace(regexMatch, suffixReplace);
                this.at_2x_path = locationObject.href;
            } else {
                var parts = this.path.split('?');
                parts[0] = parts[0].replace(regexMatch, suffixReplace);
                this.at_2x_path = parts.join('?');
            }
            this.perform_check = true;
        }
    }

    root.RetinaImagePath = RetinaImagePath;

    RetinaImagePath.confirmed_paths = [];

    RetinaImagePath.prototype.is_external = function() {
        return !!(this.path.match(/^https?\:/i) && !this.path.match('//' + document.domain) );
    };

    RetinaImagePath.prototype.check_2x_variant = function(callback) {
        var http, that = this;
        if (!this.perform_check && typeof this.at_2x_path !== 'undefined' && this.at_2x_path !== null) {
            return callback(true);
        } else if (this.at_2x_path in RetinaImagePath.confirmed_paths) {
            return callback(true);
        } else if (this.is_external()) {
            return callback(false);
        } else {
            http = new XMLHttpRequest();
            // http.open('HEAD', this.at_2x_path);  FIXES ISSUE WITH SAFARI LOADING WHITE CACHED IMAGE
            http.open('GET', this.at_2x_path);
            http.onreadystatechange = function() {
                if (http.readyState !== 4) {
                    return callback(false);
                }

                if (http.status >= 200 && http.status <= 399) {
                    if (config.check_mime_type) {
                        var type = http.getResponseHeader('Content-Type');
                        if (type === null || !type.match(/^image/i)) {
                            return callback(false);
                        }
                    }

                    RetinaImagePath.confirmed_paths.push(that.at_2x_path);
                    return callback(true);
                } else {
                    return callback(false);
                }
            };
            http.send();
        }
    };

    function RetinaImage(el) {
        this.el = el;
        this.path = new RetinaImagePath(this.el.getAttribute('src'), this.el.getAttribute('data-at2x'));
        var that = this;
        this.path.check_2x_variant(function(hasVariant) {
            if (hasVariant) {
                that.swap();
            }
        });
    }

    root.RetinaImage = RetinaImage;

    RetinaImage.prototype.swap = function(path) {
        if (typeof path === 'undefined') {
            path = this.path.at_2x_path;
        }

        var that = this;
        function load() {
            if (! that.el.complete) {
                setTimeout(load, 5);
            } else {
                if (config.force_original_dimensions) {
                    if (that.el.offsetWidth == 0 && that.el.offsetHeight == 0) {
                        that.el.setAttribute('width', that.el.naturalWidth);
                        that.el.setAttribute('height', that.el.naturalHeight);
                    } else {
                        that.el.setAttribute('width', that.el.offsetWidth);
                        that.el.setAttribute('height', that.el.offsetHeight);
                    }
                }

                that.el.setAttribute('src', path);
            }
        }
        load();
    };


    if (Retina.isRetina()) {
        Retina.init(root);
    }
})();

/*
 * SVGeezy.js 1.0
 *
 * Copyright 2012, Ben Howdle http://twostepmedia.co.uk
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 *
 * Date: Sun Aug 26 20:38 2012 GMT
 */

/*
	//call like so, pass in a class name that you don't want it to check and a filetype to replace .svg with
	svgeezy.init('nocheck', 'png');
*/

window.svgeezy = function() {

		return {

			init: function(avoid, filetype) {
				this.avoid = avoid || false;
				this.filetype = filetype || 'png';
				this.svgSupport = this.supportsSvg();
				if(!this.svgSupport) {
					this.images = document.getElementsByTagName('img');
					this.imgL = this.images.length;
					this.fallbacks();
				}
			},

			fallbacks: function() {
				while(this.imgL--) {
					if(!this.hasClass(this.images[this.imgL], this.avoid) || !this.avoid) {
						var src = this.images[this.imgL].getAttribute('src');
						if(src === null) {
							continue;
						}
						if(this.getFileExt(src) == 'svg') {
							var newSrc = src.replace('.svg', '.' + this.filetype);
							this.images[this.imgL].setAttribute('src', newSrc);
						}
					}
				}
			},

			getFileExt: function(src) {
				var ext = src.split('.').pop();

        			if(ext.indexOf("?") !== -1) {
          				ext = ext.split('?')[0];
        			}

        			return ext;
			},

			hasClass: function(element, cls) {
				return(' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
			},

			supportsSvg: function() {
				return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
			}
		};

	}();

// NEWSLETTER FOOTER SIGNUP //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var emailIdVal;
var signupSubmitted = false,
thankyouMsg =  $('#success').val();
errorMsg = $('#error').val();

function prodNotifyEmail(){
	  var allowSubmit = true;
	  var emailInputObj = $('#prod-notify-email-address');

	  if (!emailInputObj.val()) {
	    $(emailInputObj).siblings("#prodNotifyEmailRequrefield").show();
	    $('#sidebar-email-input').siblings('#prodNotifyEmailRequrefield').css('display', 'block');
	    $(emailInputObj).siblings("#prodNotifyEmailvalidation").hide();
	    $('#sidebar-email-input').siblings('#prodNotifyEmailvalidation').hide();
	    allowSubmit = false;
	  } else {
	    var emailRegex = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
	    var email = emailRegex.test(emailInputObj.val());
	    if (!email) {
	      $(emailInputObj).siblings("#prodNotifyEmailRequrefield").hide();
	      $('#sidebar-email-input').siblings('#prodNotifyEmailRequrefield').hide();
	      $(emailInputObj).siblings("#prodNotifyEmailvalidation").show();
	      $('#sidebar-email-input').siblings('#prodNotifyEmailvalidation').css('display', 'block');
	      allowSubmit = false;
	    }
	  }
	  if(allowSubmit){
	   // $('#prod-notify-email-modal').modal('show');
	   // $(emailInputObj).siblings("#prodNotifyEmailRequrefield").hide();
	   // $(emailInputObj).siblings("#prodNotifyEmailvalidation").hide();
	   // $('#sidebar-email-input').siblings('#prodNotifyEmailRequrefield').hide();
	   // $('#sidebar-email-input').siblings('#prodNotifyEmailvalidation').hide();
	    emailIdVal = $(emailInputObj).val(); 
	    submitProdNotifyEmail(false);
	  }
	}

function submitProdNotifyEmail(cancel) {
	  var allowSubmit=true;
	  signupSubmitted = true;

	  if(!cancel){
	    if($("#emailGroupsUID").val().length === 0 ){
	    //  $(".error-msg-emailgroup").css("display",'block');
	      //$(".error-msg-emailgroup").fadeIn();
	      allowSubmit = false;
	    } else{
	    //  $(".error-msg-emailgroup").css("display",'none');
	      allowSubmit = true;
	    }
	  }
	  if (allowSubmit && !cancel) {
	    //Disable submit button
	   // $('#newsletter-submit-btn').hide();
	   // $('.submit-msg').show();
	    var strUrl = ('https:' === document.location.protocol ? 'https://' : 'http://') + document.location.hostname + (document.location.port ? ':'+document.location.port: '') + ACC.config.countryContextPath +'emailsignup/etemailsignupform';
	    var dat;

	    //if(!cancel){
	    dat = {emailId : emailIdVal, source:$("#emailSource").val(), subscriptionItems : $("#emailGroupsUID").val().split(";")};
	    //}
	    //else{
	    //  dat = {emailId : emailIdVal ,subscriptionItems :["Cancel"]};
	    //}
	    dat = JSON.stringify(dat);
	    $.ajax({
	      //url : "/us/emailsignup/etemailsignupform",
	      url: strUrl,
	      type : 'POST',
	      headers: { 
	            'Accept': 'application/json',
	            'Content-Type': 'application/json' 
	        },
	      data : dat,
	      success : function(data) {
	        if(!cancel){
	            //$('#newsletter-submit-btn').show();
	           // $('.submit-msg').hide();
	           // $('.signup-modal-content').hide();
	           // $('.signup-success').show();
	        	 $('#prod-notify-email-modal').modal('show');
	     	    $(emailInputObj).siblings("#prodNotifyEmailRequrefield").hide();
	     	    $(emailInputObj).siblings("#prodNotifyEmailvalidation").hide();
	     	    $('#sidebar-email-input').siblings('#prodNotifyEmailRequrefield').hide();
	     	    $('#sidebar-email-input').siblings('#prodNotifyEmailvalidation').hide();
	            if (data.success){
	                $('.signup-success').html(thankyouMsg);
	            }
	            else{
	                $('.signup-success').html(errorMsg);
	            }
	            closeSignupModal();  
	        }
	      }
	    });
	  }
	  return false;
	}


function newsletterSignup(){
  var allowSubmit = true;
  var emailInputObj = $('#footer-email-address');

  if (!emailInputObj.val()) {
    $(emailInputObj).siblings("#requrefield").show();
    $('#sidebar-email-input').siblings('#requrefield').css('display', 'block');
    $(emailInputObj).siblings("#emailvalidation").hide();
    $('#sidebar-email-input').siblings('#emailvalidation').hide();
    allowSubmit = false;
  } else {
    var emailRegex = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    var email = emailRegex.test(emailInputObj.val());
    if (!email) {
      $(emailInputObj).siblings("#requrefield").hide();
      $('#sidebar-email-input').siblings('#requrefield').hide();
      $(emailInputObj).siblings("#emailvalidation").show();
      $('#sidebar-email-input').siblings('#emailvalidation').css('display', 'block');
      allowSubmit = false;
    }
  }
  if(allowSubmit){
    $('#email-signup-modal').modal('show');
    $(emailInputObj).siblings("#requrefield").hide();
    $(emailInputObj).siblings("#emailvalidation").hide();
    $('#sidebar-email-input').siblings('#requrefield').hide();
    $('#sidebar-email-input').siblings('#emailvalidation').hide();
    emailIdVal = $(emailInputObj).val(); 
  }
}
function cleanup(){
  

  $('.signup-modal-content').show();
  $('.signup-success').hide();
  
  $('#newsletter-submit-btn').show();
  $('.submit-msg').hide();

  $("#emailCheckboxList li").find("input[type=checkbox]").each(function(){
      $(this).removeAttr("checked");
  });
  $(".error-msg-emailgroup").hide();
  $(".error-msg").hide();
  $("#emailGroupsUID").val("");
  $('#footer-email-address').val("");
  signupSubmitted = false;
}
function closeSignupModal(){
  setTimeout(function(){
    $('#email-signup-modal').modal('hide');
  },5000);
}
function callCancel(){
  if(!signupSubmitted){
    submitNewsletterSignup(true);
  }
}
function submitNewsletterSignup(cancel) {
  var allowSubmit=true;
  signupSubmitted = true;

  if(!cancel){
    if($("#emailGroupsUID").val().length === 0 ){
      $(".error-msg-emailgroup").css("display",'block');
      //$(".error-msg-emailgroup").fadeIn();
      allowSubmit = false;
    } else{
      $(".error-msg-emailgroup").css("display",'none');
      allowSubmit = true;
    }
  }
  if (allowSubmit && !cancel) {
    //Disable submit button
    $('#newsletter-submit-btn').hide();
    $('.submit-msg').show();
    var strUrl = ('https:' === document.location.protocol ? 'https://' : 'http://') + document.location.hostname + (document.location.port ? ':'+document.location.port: '') + ACC.config.countryContextPath +'emailsignup/etemailsignupform';
    var dat;

    //if(!cancel){
    dat = {emailId : emailIdVal, source:$("#emailSource").val(), subscriptionItems : $("#emailGroupsUID").val().split(";")};
    //}
    //else{
    //  dat = {emailId : emailIdVal ,subscriptionItems :["Cancel"]};
    //}
    dat = JSON.stringify(dat);
    $.ajax({
      //url : "/us/emailsignup/etemailsignupform",
      url: strUrl,
      type : 'POST',
      headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
      data : dat,
      success : function(data) {
        if(!cancel){
            $('#newsletter-submit-btn').show();
            $('.submit-msg').hide();
            $('.signup-modal-content').hide();
            $('.signup-success').show();
            if (data.success){
                $('.signup-success').html(thankyouMsg);
            }
            else{
                $('.signup-success').html(errorMsg);
            }
            closeSignupModal();  
        }
      }
    });
  }
  return false;
}
$('#email-signup-modal').on('hide.bs.modal', function () {
    callCancel();
});
$('#email-signup-modal').on('hidden.bs.modal', function () {
    $('#newsletter-submit-btn').show();
    $('.submit-msg').hide();
    cleanup();
});

$('#emailCheckboxList li input:checkbox').on('click', function(e) {

    // prevents the event from bubbling up the DOM tree
    // eg the modal from cancelling the event
    e.stopImmediatePropagation();

    var codeSpliter;
    var allCodes = $("#emailGroupsUID").val(),
    code = $(this).attr("id"),
    codeIndex = allCodes.indexOf(code);

    $(".error-msg-emailgroup").fadeOut();

    if($(this).is(":checked")){  
      if(codeIndex < 0){
        allCodes = allCodes + ";" + code;
      }     
    }
    else{
      if(codeIndex >= 0){
        codeSpliter = allCodes.split(code);
        if(codeSpliter[0] !== undefined){
          allCodes = codeSpliter[0] ; 
        }
        if(codeSpliter[1] !== undefined){
          allCodes+= codeSpliter[1].substring(1,codeSpliter[1].length);
        }
      }
    }
    if(allCodes.substring(0,1) === ";"){
      $("#emailGroupsUID").val(allCodes.substring(1,allCodes.length));  
    }
    else{
      $("#emailGroupsUID").val(allCodes);
    }
    console.log(allCodes);
});

$(document).ready(function(){
  $('.sign-up-form form').submit(function(e){
        e.preventDefault();
        var email = $('input', this).val();
        $('#footer-email-address').val(email);
        newsletterSignup && newsletterSignup();
        $('input', this)('');
        return false;
    });
});

/* Placeholders.js v3.0.2 */
(function(t){"use strict";function e(t,e,r){return t.addEventListener?t.addEventListener(e,r,!1):t.attachEvent?t.attachEvent("on"+e,r):void 0}function r(t,e){var r,n;for(r=0,n=t.length;n>r;r++)if(t[r]===e)return!0;return!1}function n(t,e){var r;t.createTextRange?(r=t.createTextRange(),r.move("character",e),r.select()):t.selectionStart&&(t.focus(),t.setSelectionRange(e,e))}function a(t,e){try{return t.type=e,!0}catch(r){return!1}}t.Placeholders={Utils:{addEventListener:e,inArray:r,moveCaret:n,changeType:a}}})(this),function(t){"use strict";function e(){}function r(){try{return document.activeElement}catch(t){}}function n(t,e){var r,n,a=!!e&&t.value!==e,u=t.value===t.getAttribute(V);return(a||u)&&"true"===t.getAttribute(P)?(t.removeAttribute(P),t.value=t.value.replace(t.getAttribute(V),""),t.className=t.className.replace(R,""),n=t.getAttribute(z),parseInt(n,10)>=0&&(t.setAttribute("maxLength",n),t.removeAttribute(z)),r=t.getAttribute(D),r&&(t.type=r),!0):!1}function a(t){var e,r,n=t.getAttribute(V);return""===t.value&&n?(t.setAttribute(P,"true"),t.value=n,t.className+=" "+I,r=t.getAttribute(z),r||(t.setAttribute(z,t.maxLength),t.removeAttribute("maxLength")),e=t.getAttribute(D),e?t.type="text":"password"===t.type&&K.changeType(t,"text")&&t.setAttribute(D,"password"),!0):!1}function u(t,e){var r,n,a,u,i,l,o;if(t&&t.getAttribute(V))e(t);else for(a=t?t.getElementsByTagName("input"):f,u=t?t.getElementsByTagName("textarea"):h,r=a?a.length:0,n=u?u.length:0,o=0,l=r+n;l>o;o++)i=r>o?a[o]:u[o-r],e(i)}function i(t){u(t,n)}function l(t){u(t,a)}function o(t){return function(){b&&t.value===t.getAttribute(V)&&"true"===t.getAttribute(P)?K.moveCaret(t,0):n(t)}}function c(t){return function(){a(t)}}function s(t){return function(e){return A=t.value,"true"===t.getAttribute(P)&&A===t.getAttribute(V)&&K.inArray(C,e.keyCode)?(e.preventDefault&&e.preventDefault(),!1):void 0}}function d(t){return function(){n(t,A),""===t.value&&(t.blur(),K.moveCaret(t,0))}}function v(t){return function(){t===r()&&t.value===t.getAttribute(V)&&"true"===t.getAttribute(P)&&K.moveCaret(t,0)}}function g(t){return function(){i(t)}}function p(t){t.form&&(T=t.form,"string"==typeof T&&(T=document.getElementById(T)),T.getAttribute(U)||(K.addEventListener(T,"submit",g(T)),T.setAttribute(U,"true"))),K.addEventListener(t,"focus",o(t)),K.addEventListener(t,"blur",c(t)),b&&(K.addEventListener(t,"keydown",s(t)),K.addEventListener(t,"keyup",d(t)),K.addEventListener(t,"click",v(t))),t.setAttribute(j,"true"),t.setAttribute(V,x),(b||t!==r())&&a(t)}var f,h,b,m,A,y,E,x,L,T,S,N,w,B=["text","search","url","tel","email","password","number","textarea"],C=[27,33,34,35,36,37,38,39,40,8,46],k="#ccc",I="placeholdersjs",R=RegExp("(?:^|\\s)"+I+"(?!\\S)"),V="data-placeholder-value",P="data-placeholder-active",D="data-placeholder-type",U="data-placeholder-submit",j="data-placeholder-bound",q="data-placeholder-focus",Q="data-placeholder-live",z="data-placeholder-maxlength",F=document.createElement("input"),G=document.getElementsByTagName("head")[0],H=document.documentElement,J=t.Placeholders,K=J.Utils;if(J.nativeSupport=void 0!==F.placeholder,!J.nativeSupport){for(f=document.getElementsByTagName("input"),h=document.getElementsByTagName("textarea"),b="false"===H.getAttribute(q),m="false"!==H.getAttribute(Q),y=document.createElement("style"),y.type="text/css",E=document.createTextNode("."+I+" { color:"+k+"; }"),y.styleSheet?y.styleSheet.cssText=E.nodeValue:y.appendChild(E),G.insertBefore(y,G.firstChild),w=0,N=f.length+h.length;N>w;w++)S=f.length>w?f[w]:h[w-f.length],x=S.attributes.placeholder,x&&(x=x.nodeValue,x&&K.inArray(B,S.type)&&p(S));L=setInterval(function(){for(w=0,N=f.length+h.length;N>w;w++)S=f.length>w?f[w]:h[w-f.length],x=S.attributes.placeholder,x?(x=x.nodeValue,x&&K.inArray(B,S.type)&&(S.getAttribute(j)||p(S),(x!==S.getAttribute(V)||"password"===S.type&&!S.getAttribute(D))&&("password"===S.type&&!S.getAttribute(D)&&K.changeType(S,"text")&&S.setAttribute(D,"password"),S.value===S.getAttribute(V)&&(S.value=x),S.setAttribute(V,x)))):S.getAttribute(P)&&(n(S),S.removeAttribute(V));m||clearInterval(L)},100)}K.addEventListener(t,"beforeunload",function(){J.disable()}),J.disable=J.nativeSupport?e:i,J.enable=J.nativeSupport?e:l}(this),function(t){"use strict";var e=t.fn.val,r=t.fn.prop;Placeholders.nativeSupport||(t.fn.val=function(t){var r=e.apply(this,arguments),n=this.eq(0).data("placeholder-value");return void 0===t&&this.eq(0).data("placeholder-active")&&r===n?"":r},t.fn.prop=function(t,e){return void 0===e&&this.eq(0).data("placeholder-active")&&"value"===t?"":r.apply(this,arguments)})}(jQuery);
/*! Picturefill - v3.0.1 - 2015-09-30
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
!function(a){var b=navigator.userAgent;a.HTMLPictureElement&&/ecko/.test(b)&&b.match(/rv\:(\d+)/)&&RegExp.$1<41&&addEventListener("resize",function(){var b,c=document.createElement("source"),d=function(a){var b,d,e=a.parentNode;"PICTURE"===e.nodeName.toUpperCase()?(b=c.cloneNode(),e.insertBefore(b,e.firstElementChild),setTimeout(function(){e.removeChild(b)})):(!a._pfLastSize||a.offsetWidth>a._pfLastSize)&&(a._pfLastSize=a.offsetWidth,d=a.sizes,a.sizes+=",100vw",setTimeout(function(){a.sizes=d}))},e=function(){var a,b=document.querySelectorAll("picture > img, img[srcset][sizes]");for(a=0;a<b.length;a++)d(b[a])},f=function(){clearTimeout(b),b=setTimeout(e,99)},g=a.matchMedia&&matchMedia("(orientation: landscape)"),h=function(){f(),g&&g.addListener&&g.addListener(f)};return c.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?h():document.addEventListener("DOMContentLoaded",h),f}())}(window),function(a,b,c){"use strict";function d(a){return" "===a||"	"===a||"\n"===a||"\f"===a||"\r"===a}function e(b,c){var d=new a.Image;return d.onerror=function(){z[b]=!1,aa()},d.onload=function(){z[b]=1===d.width,aa()},d.src=c,"pending"}function f(){L=!1,O=a.devicePixelRatio,M={},N={},s.DPR=O||1,P.width=Math.max(a.innerWidth||0,y.clientWidth),P.height=Math.max(a.innerHeight||0,y.clientHeight),P.vw=P.width/100,P.vh=P.height/100,r=[P.height,P.width,O].join("-"),P.em=s.getEmValue(),P.rem=P.em}function g(a,b,c,d){var e,f,g,h;return"saveData"===A.algorithm?a>2.7?h=c+1:(f=b-c,e=Math.pow(a-.6,1.5),g=f*e,d&&(g+=.1*e),h=a+g):h=c>1?Math.sqrt(a*b):a,h>c}function h(a){var b,c=s.getSet(a),d=!1;"pending"!==c&&(d=r,c&&(b=s.setRes(c),s.applySetCandidate(b,a))),a[s.ns].evaled=d}function i(a,b){return a.res-b.res}function j(a,b,c){var d;return!c&&b&&(c=a[s.ns].sets,c=c&&c[c.length-1]),d=k(b,c),d&&(b=s.makeUrl(b),a[s.ns].curSrc=b,a[s.ns].curCan=d,d.res||_(d,d.set.sizes)),d}function k(a,b){var c,d,e;if(a&&b)for(e=s.parseSet(b),a=s.makeUrl(a),c=0;c<e.length;c++)if(a===s.makeUrl(e[c].url)){d=e[c];break}return d}function l(a,b){var c,d,e,f,g=a.getElementsByTagName("source");for(c=0,d=g.length;d>c;c++)e=g[c],e[s.ns]=!0,f=e.getAttribute("srcset"),f&&b.push({srcset:f,media:e.getAttribute("media"),type:e.getAttribute("type"),sizes:e.getAttribute("sizes")})}function m(a,b){function c(b){var c,d=b.exec(a.substring(m));return d?(c=d[0],m+=c.length,c):void 0}function e(){var a,c,d,e,f,i,j,k,l,m=!1,o={};for(e=0;e<h.length;e++)f=h[e],i=f[f.length-1],j=f.substring(0,f.length-1),k=parseInt(j,10),l=parseFloat(j),W.test(j)&&"w"===i?((a||c)&&(m=!0),0===k?m=!0:a=k):X.test(j)&&"x"===i?((a||c||d)&&(m=!0),0>l?m=!0:c=l):W.test(j)&&"h"===i?((d||c)&&(m=!0),0===k?m=!0:d=k):m=!0;m||(o.url=g,a&&(o.w=a),c&&(o.d=c),d&&(o.h=d),d||c||a||(o.d=1),1===o.d&&(b.has1x=!0),o.set=b,n.push(o))}function f(){for(c(S),i="",j="in descriptor";;){if(k=a.charAt(m),"in descriptor"===j)if(d(k))i&&(h.push(i),i="",j="after descriptor");else{if(","===k)return m+=1,i&&h.push(i),void e();if("("===k)i+=k,j="in parens";else{if(""===k)return i&&h.push(i),void e();i+=k}}else if("in parens"===j)if(")"===k)i+=k,j="in descriptor";else{if(""===k)return h.push(i),void e();i+=k}else if("after descriptor"===j)if(d(k));else{if(""===k)return void e();j="in descriptor",m-=1}m+=1}}for(var g,h,i,j,k,l=a.length,m=0,n=[];;){if(c(T),m>=l)return n;g=c(U),h=[],","===g.slice(-1)?(g=g.replace(V,""),e()):f()}}function n(a){function b(a){function b(){f&&(g.push(f),f="")}function c(){g[0]&&(h.push(g),g=[])}for(var e,f="",g=[],h=[],i=0,j=0,k=!1;;){if(e=a.charAt(j),""===e)return b(),c(),h;if(k){if("*"===e&&"/"===a[j+1]){k=!1,j+=2,b();continue}j+=1}else{if(d(e)){if(a.charAt(j-1)&&d(a.charAt(j-1))||!f){j+=1;continue}if(0===i){b(),j+=1;continue}e=" "}else if("("===e)i+=1;else if(")"===e)i-=1;else{if(","===e){b(),c(),j+=1;continue}if("/"===e&&"*"===a.charAt(j+1)){k=!0,j+=2;continue}}f+=e,j+=1}}}function c(a){return k.test(a)&&parseFloat(a)>=0?!0:l.test(a)?!0:"0"===a||"-0"===a||"+0"===a?!0:!1}var e,f,g,h,i,j,k=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(f=b(a),g=f.length,e=0;g>e;e++)if(h=f[e],i=h[h.length-1],c(i)){if(j=i,h.pop(),0===h.length)return j;if(h=h.join(" "),s.matchesMedia(h))return j}return"100vw"}b.createElement("picture");var o,p,q,r,s={},t=function(){},u=b.createElement("img"),v=u.getAttribute,w=u.setAttribute,x=u.removeAttribute,y=b.documentElement,z={},A={algorithm:""},B="data-pfsrc",C=B+"set",D=navigator.userAgent,E=/rident/.test(D)||/ecko/.test(D)&&D.match(/rv\:(\d+)/)&&RegExp.$1>35,F="currentSrc",G=/\s+\+?\d+(e\d+)?w/,H=/(\([^)]+\))?\s*(.+)/,I=a.picturefillCFG,J="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",K="font-size:100%!important;",L=!0,M={},N={},O=a.devicePixelRatio,P={px:1,"in":96},Q=b.createElement("a"),R=!1,S=/^[ \t\n\r\u000c]+/,T=/^[, \t\n\r\u000c]+/,U=/^[^ \t\n\r\u000c]+/,V=/[,]+$/,W=/^\d+$/,X=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,Y=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d||!1):a.attachEvent&&a.attachEvent("on"+b,c)},Z=function(a){var b={};return function(c){return c in b||(b[c]=a(c)),b[c]}},$=function(){var a=/^([\d\.]+)(em|vw|px)$/,b=function(){for(var a=arguments,b=0,c=a[0];++b in a;)c=c.replace(a[b],a[++b]);return c},c=Z(function(a){return"return "+b((a||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(b,d){var e;if(!(b in M))if(M[b]=!1,d&&(e=b.match(a)))M[b]=e[1]*P[e[2]];else try{M[b]=new Function("e",c(b))(P)}catch(f){}return M[b]}}(),_=function(a,b){return a.w?(a.cWidth=s.calcListLength(b||"100vw"),a.res=a.w/a.cWidth):a.res=a.d,a},aa=function(a){var c,d,e,f=a||{};if(f.elements&&1===f.elements.nodeType&&("IMG"===f.elements.nodeName.toUpperCase()?f.elements=[f.elements]:(f.context=f.elements,f.elements=null)),c=f.elements||s.qsa(f.context||b,f.reevaluate||f.reselect?s.sel:s.selShort),e=c.length){for(s.setupRun(f),R=!0,d=0;e>d;d++)s.fillImg(c[d],f);s.teardownRun(f)}};o=a.console&&console.warn?function(a){console.warn(a)}:t,F in u||(F="src"),z["image/jpeg"]=!0,z["image/gif"]=!0,z["image/png"]=!0,z["image/svg+xml"]=b.implementation.hasFeature("http://wwwindow.w3.org/TR/SVG11/feature#Image","1.1"),s.ns=("pf"+(new Date).getTime()).substr(0,9),s.supSrcset="srcset"in u,s.supSizes="sizes"in u,s.supPicture=!!a.HTMLPictureElement,s.supSrcset&&s.supPicture&&!s.supSizes&&!function(a){u.srcset="data:,a",a.src="data:,a",s.supSrcset=u.complete===a.complete,s.supPicture=s.supSrcset&&s.supPicture}(b.createElement("img")),s.selShort="picture>img,img[srcset]",s.sel=s.selShort,s.cfg=A,s.supSrcset&&(s.sel+=",img["+C+"]"),s.DPR=O||1,s.u=P,s.types=z,q=s.supSrcset&&!s.supSizes,s.setSize=t,s.makeUrl=Z(function(a){return Q.href=a,Q.href}),s.qsa=function(a,b){return a.querySelectorAll(b)},s.matchesMedia=function(){return a.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?s.matchesMedia=function(a){return!a||matchMedia(a).matches}:s.matchesMedia=s.mMQ,s.matchesMedia.apply(this,arguments)},s.mMQ=function(a){return a?$(a):!0},s.calcLength=function(a){var b=$(a,!0)||!1;return 0>b&&(b=!1),b},s.supportsType=function(a){return a?z[a]:!0},s.parseSize=Z(function(a){var b=(a||"").match(H);return{media:b&&b[1],length:b&&b[2]}}),s.parseSet=function(a){return a.cands||(a.cands=m(a.srcset,a)),a.cands},s.getEmValue=function(){var a;if(!p&&(a=b.body)){var c=b.createElement("div"),d=y.style.cssText,e=a.style.cssText;c.style.cssText=J,y.style.cssText=K,a.style.cssText=K,a.appendChild(c),p=c.offsetWidth,a.removeChild(c),p=parseFloat(p,10),y.style.cssText=d,a.style.cssText=e}return p||16},s.calcListLength=function(a){if(!(a in N)||A.uT){var b=s.calcLength(n(a));N[a]=b?b:P.width}return N[a]},s.setRes=function(a){var b;if(a){b=s.parseSet(a);for(var c=0,d=b.length;d>c;c++)_(b[c],a.sizes)}return b},s.setRes.res=_,s.applySetCandidate=function(a,b){if(a.length){var c,d,e,f,h,k,l,m,n,o=b[s.ns],p=s.DPR;if(k=o.curSrc||b[F],l=o.curCan||j(b,k,a[0].set),l&&l.set===a[0].set&&(n=E&&!b.complete&&l.res-.1>p,n||(l.cached=!0,l.res>=p&&(h=l))),!h)for(a.sort(i),f=a.length,h=a[f-1],d=0;f>d;d++)if(c=a[d],c.res>=p){e=d-1,h=a[e]&&(n||k!==s.makeUrl(c.url))&&g(a[e].res,c.res,p,a[e].cached)?a[e]:c;break}h&&(m=s.makeUrl(h.url),o.curSrc=m,o.curCan=h,m!==k&&s.setSrc(b,h),s.setSize(b))}},s.setSrc=function(a,b){var c;a.src=b.url,"image/svg+xml"===b.set.type&&(c=a.style.width,a.style.width=a.offsetWidth+1+"px",a.offsetWidth+1&&(a.style.width=c))},s.getSet=function(a){var b,c,d,e=!1,f=a[s.ns].sets;for(b=0;b<f.length&&!e;b++)if(c=f[b],c.srcset&&s.matchesMedia(c.media)&&(d=s.supportsType(c.type))){"pending"===d&&(c=d),e=c;break}return e},s.parseSets=function(a,b,d){var e,f,g,h,i=b&&"PICTURE"===b.nodeName.toUpperCase(),j=a[s.ns];(j.src===c||d.src)&&(j.src=v.call(a,"src"),j.src?w.call(a,B,j.src):x.call(a,B)),(j.srcset===c||d.srcset||!s.supSrcset||a.srcset)&&(e=v.call(a,"srcset"),j.srcset=e,h=!0),j.sets=[],i&&(j.pic=!0,l(b,j.sets)),j.srcset?(f={srcset:j.srcset,sizes:v.call(a,"sizes")},j.sets.push(f),g=(q||j.src)&&G.test(j.srcset||""),g||!j.src||k(j.src,f)||f.has1x||(f.srcset+=", "+j.src,f.cands.push({url:j.src,d:1,set:f}))):j.src&&j.sets.push({srcset:j.src,sizes:null}),j.curCan=null,j.curSrc=c,j.supported=!(i||f&&!s.supSrcset||g),h&&s.supSrcset&&!j.supported&&(e?(w.call(a,C,e),a.srcset=""):x.call(a,C)),j.supported&&!j.srcset&&(!j.src&&a.src||a.src!==s.makeUrl(j.src))&&(null===j.src?a.removeAttribute("src"):a.src=j.src),j.parsed=!0},s.fillImg=function(a,b){var c,d=b.reselect||b.reevaluate;a[s.ns]||(a[s.ns]={}),c=a[s.ns],(d||c.evaled!==r)&&((!c.parsed||b.reevaluate)&&s.parseSets(a,a.parentNode,b),c.supported?c.evaled=r:h(a))},s.setupRun=function(){(!R||L||O!==a.devicePixelRatio)&&f()},s.supPicture?(aa=t,s.fillImg=t):!function(){var c,d=a.attachEvent?/d$|^c/:/d$|^c|^i/,e=function(){var a=b.readyState||"";f=setTimeout(e,"loading"===a?200:999),b.body&&(s.fillImgs(),c=c||d.test(a),c&&clearTimeout(f))},f=setTimeout(e,b.body?9:99),g=function(a,b){var c,d,e=function(){var f=new Date-d;b>f?c=setTimeout(e,b-f):(c=null,a())};return function(){d=new Date,c||(c=setTimeout(e,b))}},h=y.clientHeight,i=function(){L=Math.max(a.innerWidth||0,y.clientWidth)!==P.width||y.clientHeight!==h,h=y.clientHeight,L&&s.fillImgs()};Y(a,"resize",g(i,99)),Y(b,"readystatechange",e)}(),s.picturefill=aa,s.fillImgs=aa,s.teardownRun=t,aa._=s,a.picturefillCFG={pf:s,push:function(a){var b=a.shift();"function"==typeof s[b]?s[b].apply(s,a):(A[b]=a[0],R&&s.fillImgs({reselect:!0}))}};for(;I&&I.length;)a.picturefillCFG.push(I.shift());a.picturefill=aa,"object"==typeof module&&"object"==typeof module.exports?module.exports=aa:"function"==typeof define&&define.amd&&define("picturefill",function(){return aa}),s.supPicture||(z["image/webp"]=e("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document);
/*
 * Copyright (c) 2016, WebRotate 360 LLC. All rights reserved.
 */
eval((function(x){var d="";var p=0;while(p<x.length){if(x.charAt(p)!="`")d+=x.charAt(p++);else{var l=x.charCodeAt(p+3)-28;if(l>4)d+=d.substr(d.length-x.charCodeAt(p+1)*96-x.charCodeAt(p+2)+3104-l,l);else d+="`";p+=4}}return d})("(function () {WR360 = {};})();` 0*F` &#.prototype.bE = ` ;&eB) {if (eB.constructor == ` U$) {this` Z& = new eB;` **` S* this` 1-t = eB` (&` 1,iQ = 0` &,aB`!h)) {var ` h!` E!ct;for (var i` -$iQ; i > 0; i--) {` K!ct.ct;}` ;#++;return ct;};} else`\"=/`!qW;}` {#` ?!};String` ='format`\"-0tx`\":$;i = arguments.length;while (`\"8\"` F#xt.replace(new RegExp(\"\\\\{\" + i + \"\\\\}\", \"gm\"),` k&[i])`!b&xt`!W0trim`!Y,`\"3'`!1%/^\\s+|\\s+$/g, \"\")` Y0dd`\"4<f (txt`\"G# == 1`\"?%\"0\" +`!a\"`!U:mI` IY` }&`%U\"` <.2`!\"NaK`!D,` r!his == \"auto\"`#P&0` f%parseInt` F!`#d%\"px\"`#`!`#Q1a`#F<`%f./\\r\\n`$T!<br>\")` .1n\\r` #<r` C=` 5(`#&)`,Y/Date.now = ` \"%||`&W1+`,;!Date;};jQuery.fn.f`%=*onclick, proxy`\"r#` '! =` .\" === undefined ? \"\" : \".` 8!\" +` @\";var gv`,S!` &!q = \"touchstart\"`&>!window.navigator.pointerEnabled) {` R\"` 0#down\"`&I(` O-msP` L2MS` 2#D` ^\"`%h!bind(gq`!l$,`/w() {`\"e#.call`&9!, e);e.stopPropagation();e.preventDefault();`\"W!`$,$(`$a%false;})`-R\"`!<!\"`!!!`#1%`!6,if (` ^& - gv < 400`$r%;}`#b#`![2}`%}&`.G\"`%3&oe`%0)`$T\\`\"/!un`\"0\"`%!'` 9$`\"O#` :$`\"J*`!V,`4`!.by`)Z,` 0&.lf`)s0Device = {};` &\".UA = `%\\&userAgent` 8$T`2+\"`$7\"` -#jf = [\"iPhone\", \"iPod` \"\"a` #!android\"]`3]&d`$\"! d <`!?#.jf`1P$ d++`+a$ =` 6&[d]`!,#[t] = !!`!l%.match`1g(t, \"i\"))`!j+` \"(||` (#[t]`-\\%` 5(? true :`&d$`#F&fU = `#S'()` 2&cz`#_)s`..!, d`'k\"Valu`'%$` 5\" == null || ` ,\"`04'`'2&` T)`!f%` K\"`!O(dM` =~`0e*Float` g#)`!?(j`(G*` I~`!>)`28&,\", \".`2<\"`!T%bX` [~`$8+.toLowerCase()`4H!true\"` h'` 0.1\"`!j(g`#E*`(@#charCode`0\\!jd = \"\"` '!mq = 10 +`\"y\"Int(Math.random() * 10)`)M&i`)Q\"i < mq; i`)D!` v$ = 97` O826);jd += S`\"(\"fromC` W#(` _$)`\"m%jd`\"/(qk`\"+,if (typeof `.c#browser`.A!\"`.>%\"`/V'if (` ?*.msie ==`*(!` ?'`+[!rident = /T` %\"\\/7\\./`3o!` 6#.test(`-A/)) {` |+version = \"99\"`0X$`!;*`!C!` +,webkit`.1%` I,ozilla` '4oper` 3&`\"8$` 6+sa = /(`.e#)/i`!~6`\"Y!` L/`#:%var hL`033` J+rY = hL.indexOf(\"Chrome\") > -1` w0rY =`\"&#`#P.sO` `+M`\"v\"/5.0` m# &&` 5)AppleWebKit`!.$}}`&N'mG`&E0`!**) {`&~'(`3{$`& \"`18!ed, ` F#`\"0!!` Z#uaMatch`\" &` *#`!')ua) {ua = ua`*V*`*!\"` J#/(c`#8!)[ \\/]([\\w.]+)/.exec` _!|| /(`&&\"` &:`%n!)(?:.*`'-#|` 3:msie) ` (2ua`#c&compatible\") < 0 && /(`':#`!+\"? rv:` b$|` ]+[]`#T# {`#G#:`\"Y![1] || \"\", `!j#` 1#2` 2\"0\"};};}`$$# =`+*$`#g#`'R2`+F% {}`$P!` X#`%+'` ##[` ++]`* $`*H.` B$` +#`,-\"` ?$`$Y#` o%`*O&` i!} else ` F(`$g#` H&safari` I%`-J,`&\\%`'\"*`'e'fS`&O)`*)$fw = 0, gI`0 !var rA = `.[#window.event !`.R* &&` 30.targetTouches` E,`#l!`!K&U`*L% &&`!5!`*Z&if (e.pageX || ` %\"Y) {`!o!` 3#;`!t!` 5#`#>(e.client` U#` '\"` S'` 6$+ document.body.scrollLeft` /(` <$Ele` +!` <&`!9$` z#` Y3Top` M>Top`2}%{x:fw, y:gI}`&'\"`\"w\"tru`#&!`#U9 null` (:.length > 0`\"l$` 36[0].screen`#i#` '@Y`**%`!~)var s`'v!`%u\"e.originalE`&&;` ;+`&%?st`#'(` @<`#-%` ,9`#&/` 39`#+-` 'CY`%43`*(&pe`*%)qv, dX`*0#jS = qv.slice(-3)`3m\"S`#!\"svg\") {`2&$`'#*appendChild(dX);dX.width = dX.offsetWidth;dX.height` /(H` -!;` f*remove` j&`,,(A`!y)cu, eJ`!#x = cu` r#().left`,>!y` *+top` 3!x2 = x +` 8!uter`!d!(`+L\"` T\"2 = y` 7'`!j\"` 7(jx = Math.abs(eJ.x)`'C$jx >= x && jx <= x2`%l!J.y >= y` $%<= y2`$@)`\"9*`\":#rlocalProtocol = /^(?:about|app|app\\-storage|.+\\-exten`4T!file|res|widget):$/`/8\"ur` b#[\\w\\+\\.\\-]+:)(?:\\/\\/([^\\/?#:]*)(?::(\\d+)|)|)` V\"ajaxLoca`!_!= \"\";try {` (+l` $#.href;} catch`0l\"` ;+`%<%create`-'#(\"a\");` ?(` e!`!+\"` S+` 5-`+;\"` 0#Parts =`\"O!.exec(` C)toLowerCase()) || []`\"C!qm =`#m+.test` W$` s![1]`%/%qm`$`(qT`$_)options) {`#)!if (!`42*.msie`)(%`2;\"`\"#\"qW`.$&ActiveXObjec`-B\"`,f%`)y!qW`2r(` ^*`!0!`&B'()` z1xhr `-\"\"`$t\"` )#ew`!/1(\"Microsoft.XMLHTTP\")`%#*`!4!` a!` q\"`!C2`\"{#.async) {` #) = `#'#ajaxSetting` 5#;}xhr.open`#^$.type, ` &$url` #&` y\"`)~\"v`(,`\"K!var text = xhr.responseText`#^!` b$success`!`'` +#(text);}`\"X)` N(error` M'` +!(e);}}};xhr.send(`#&!`!-!`\"k-jv();} else `#V#.readyState === 4) {setTimeout(jv, 0` K%{`#-!n` N!statechange = jv`0j%true`$[*`$H*};})();(`#5)`&9\"J`#H-his.d`& $Array`(D%J.prototype.iS` M)item`->$esult = -1;for (var i = 0; i < ` {#`3s#; i++`#o#` 3#[i] == ` l#` f%i;break;}`\"O$` 4\"`!I1bk`!==`\"v\"if` 8\" !`'i%`!X$push` T\";` L%`#d\"` ~>`2|\"Item`!!Cvar hN =`\"x\"iS`!2#if (hN > -1`!O'splice(hN, 1`!*Oclear`$`Tcontains`\"$0`&g$`!w(`!w!` U1mh` V*ndex` V+dr[` 2!]` L1d`!7*` K-`&:$` H0nz` 7A == 0;`(E7gl`#41s`-1#`#H#` F\"kT;` 8!bF`#Y)` /!hi` \".aw` \".ky` 40.ep`({!` &%U` \")rows = `#}&gl`)~(q`\"O8` w\"> 0 &&` (&U >`\"s!` \\/ly` _,`*\\%dj`*`\"dj`*_$bF`*^%dj`*c!var cd`(!$bF[dj]`(\"!cd.disabled`30% && cd.renderMode !=`#e$c.bf.au`\"$'`(:!`(8$`-T#`!{#Contro`$V2g`#W!.12`#J\"inBrowserFullScreen`)}%`%w\"`./!` &&iu` 1+oubleClickFulls` P/mouseHoverDrag` .*qc`*C$`%r#deHotspotsOnLoad` A*` 2*Zoom` R)rowSensitivity = 15`!_#rag` ++`%'&Margi`!o!`\"}-to`&`'right` %&bott`!;!` )#lef` 8\"` j*`&\"'parse` {)fG`0F#fG =`/.\" || fG`)f(`%,%;}var aj = fG`-s!t(\",\")`1D1aj`1E+swi`3M!i) {case 0:`\"9'`!m\"by.dM(aj[i],`'.\"top)`1d#` P!1` O\"`\"d$` ?4` ;!` L)2` S\"`#-%` B4` ;\"` N)3` U\"`#Z#` A4lef`!)%default:`3\\$`$+$Alig`$t2vertical` x%` F!.TOP`&S#orizont` 1-LEF`-C#`$z!`''&`!').TOP = -1` ()CENTER`$O!` +(BOTTOM`,!` z,` ;ERIGHT` R-`&a'`\"V-`-\\(`\"d&`\"?*`!&#`-u$`\"i(` 50`\"U+`'n8bK`(##bK`'~(bK`'o7gP = bK`'~(`#{*gP` V$> 0`(11` 9%`(+7var `\"i$`%y$gP[i].toLowerCase().trim()`/Z!` @+= \"top\" ||` Y,= \"-1\"`&B?} else ` g2center` i30` _<`$D$` f8`)P\"` k3`!`=`'K\";}`+;)`,g!g`#*>ag`! !left`!;!` )#`#,'`)>:`\"-'` T#`#$'` +#`\"z&` S5`\"t.` U#`-&!` a(`!6?`)Y!`\"h$`,54ix`,51x`1)&y`14&isXDefin`+v'` 1#Y` (,` v&`)G'ot`*T8` s'||` +$` q$` [2`*1.offsetX, ` #\"Y`\")$`!n)` ># !`*]#&&` +$`)(`\").` m#` F.Y` G-x`0V+`!O%` 8\"`+>#y` 11Y` ?#y)`\"M%kc`$21id = \"\"` g\"type` $'indicatorImag` 4!spot_circle_plus.png` F#disabl`$h,hotspotInfo `\"M\"` 2\"`!a\" = new`!y#ix` 5\"margin` .)M` .!` 9\"a`,t#` 4&`''!` 7\"renderMode`\"n%kc.bf.aC` W#ctivateOnClick`!_*de` '4`#;&.bf = {` $).aC`2.'` -\"io`2+'` ?#u = 2` &)kd = 3` ,#H`\")`$9.src`$2'clickA` =\"`\"D$` W'.iE.NONE` B'Data` Q,DataParam` .'url` <'urlTarg`$H!\"_self`%e$x` .!` $&Width = 242` +%Color = \"#525B69` D&Bk` 2&FFFFFF` 5#fntHeight = 14`!e#ss`!n(d`!|*img`!4$`),$mg` u'transparent` K#lbxShowClo`*X!tru`%<#lbxBackCover`%O*lbx`%O!Activ` G*imgNoScal`+D!`%d)`$$*`%n(`$9/`%z'` /+qq`&#'` -+mA`&,'` H,x`&*2.iE.sL = 4` %3s = 5` &2rH = 6` y3P = 7` &2pB = 8` y3r = 9` %3X = 1`\"b3`$A!1`\"r$lv`(6?labe`'U(dela`1W'bF`+V#Array`,_#i` \".cS`,i$`$j$lq`!(2ourc`.+(`0T$`!*%`0-$= 0` d%nu`.y2`.b$first\"` F%jJ` :1f`&.\"`-V\"otat` V\"alse`!F#kC = -1`!B#`##!` 3(gg`$l!`\"t\"oun`\"$!`(+'` .\"Rows`(%)useInertia`(;*` .\"RelToDragSpe`0L!` 1-TimeToStop = 70`*.$` 7\"MaxInterval = 12` 7#flipHorizontalInput`/..T`\"r1eH`0d)nu`\"6#I` *)jH`%3#ontrol` /)C` .\"` Q#g` J*J`$=&H`!+1hb`\"X)gj`\"g)gw`\"u*T` \")bY` 0*U` 0*z` ]*x`%F&gH`.W!fffff`/L$i`2$!.9` ;#`&!` &$fullScreen`-\\\"`/5$` T)showF` @%Toolba`-&`#~%B`)J:};})();(` 6)` U\"dh` F1dw`.6\"` z$dh.prototype = {constructor:` :$, oK:` ^)return`*/#, addEventListener` B'type, cc, param) {if` 0\"of `!K#[type] == \"undefined\"`!g&` 7$ [];}` ').push({cc:` x%:`!\"!});}, dispatch`!W!`!I'event`!<*` .!`!=!string\") {` -# {type:` )!};}if (!` (!.target` B$` (# =`\"2!` ;*ype`\"+!row`'k!Error(\"`!T! object missing 'type' property.\");}var handl`*a!`%^\"`!y!`\"g#` }&] instanceof`.`\") {var c`+t!` >.;for (var i = 0, `,&!cs.length; i < ia; i++` d#r`\"A!cs[i].cc.call`!E!,`#A\",` 4#`%+\"`!b\"`#`\"ret !`$y* &&` j\"`)8\") {`\">&`)J!}}}`&G#` 2#;}, remove`&4<`${$`%z)`\"[@`\"EPif (`\"k$ ===`!:\"cs.splice(i, 1);break;}}}}`)9$`%>\"`)_(`!y\"bubbles, cancelable`(Z&`!d!`)l#typ`,\\$` M\" =` U$`.`#` X% =` c'` 7\"` m! =` t\"`+39Y`+;1aB().`+*'`%D&)`!7#Q`2[*rootPath`,Y$` v$.bE(`+i$)` ,&`,4%.Ini`\"z*` b$, V`!F$` r'` #$`!5-`\")7ba` t)image, index,` h%, graphics` (\"oq`\"H@if` i# ==`-s!`*\\0ImageO`*j!.` \\!` E! == hotspot\")`-;#` d# ` #!`\"=\"F`3E#` `!`%J#G `!'\"`1n#ndex =`\"+\"`#}-`##*`\"8( =`\"F)` ;\"oq = oq`!5#.b`&f!hi`&M#F.onloa`*!!` j!m` .&err`2m!` 3\"c` 3\"aA()`%E%ba`%:0ba.iK = \"pixel.png\"` 0&`%^&aA`&t1`\"f\"`\"p,`!h,bG`' -bG`!}+lQ` .'`\" )lL` /'abor`0&$.lG`\"1(`!c&gm`!],var bu` P$be;bu.`1|)(new ` e\"ah`\"~#ah.COMPLETE,`-r!,`!|\", bu,`\"'\", bu`%<\"` :$\"\")`#f)`!K'c` ndERROR`!/@` *#\"`(%! loading`'Y\": \" +`!3\"src`!\\4l`$R!`!W9if (bu.hx`)N\") {`0t\"`(m#`%4!`1/!`!vCeD`\"'/` +\"`#BFlL`!=W`!BCdU`!F?`#l2high-res`#^IG`!1~f`#X@`\"+$A`)F!`!WXhx`0(.`!l%` c\".src`!3\"Of`!a#`,M!) != -1` b2L`+R\"`\"|-qv`#%$oq ?` $\"`! \"cS.src :` ((sr`-#F` 7!` S#`/S%+ qv`\" 3S`!-,if `$.!`-k!`1_'`.z%`,y$` s2`!X-`!\"2aE` rB`)S)hK`05*`!|'K`!_D`3b+forceU`/Y!HighRes:`%Z!resBitmapLoader==null`3t%`0/2`\"f'`30)+ \"/\" +`'=#`%N!`!p2kz`\"GJ` 3'`!K!`!J#` 7' else`$W#`#8\"`!1$ah` )typ`(T!bbles, cancelable, af, ht, `(l#success, `2T!Mess`($\"`%\\\"B().constructor.call`!_!, ` j5)`#<\"af = af` '\"ht = ht` '\"`!5! =`!<\"` -\"`!?# =`!H$` 1\"`!H( =`!V)`#j%ah.bE`)Y#`+\\!)` /&`3<$ = \"ImageObject_complete\"` A&`24!` 8,`!,!` :'eD` 2,H`&7\"` ^0f` 45abort` ?'dU` 24`!:#})();(`%~)` W\"fC`%*)bi`$o%`)|$`$I>`$I#bi = bi`$*5F =`)%!`!b!` -\"`*%=`!&%`,O$be`(U#` )$o`)P!`(h%m` .&`\"?!` 0%`+W&fC`$o&dh`$n$fC`% \"s = {` @'` /\".CLICK_ACTION = \"HOTSPOT_API_` 0(`#v$da`(/EO`'R~aO = aO`'Spda`(03da`(:)Hotspot`(23da`(?&` <*`(>)fC`-<'gm`-7,`-e#y.pe`-+\"src,`%;!);var bu`%G$be;bu.dispatch`!s!(new`.U#da`%W$`!z&, true,`-u\", bu, bu`#F\"` 3$\"\")`1.&`!]*c`4H0` {P`#!!`!/9` .#\"`1u! loading `3f!: \"`3s$src`!U4L`(j\"`!b)`(n#`4Q7bi.h`$S\"Info.sr`)$)` t&js`1c6` U*clickA` B\"!=`\"e#`%V#` <!iE.NONE`1%`\"q!;}` %$` `/url.length > 0`$53L`!Q,` V7cdata` h' ||` B\"`#'!` %0` R+txt`!1=e`+>*`!4:imgWidth != 0 ?` &::`!e$width`!(2kv`!1)`&$!rotator`'@$O =`&Q\";switch`$O=) {case`$^2sX:if` {*.pY ==`${!) {` -)cJ();} else` ++g` 5!`!X!`%T!break;` ~6qq:` h.` `.` GFmA` ^/`!%Gx`!0<bV.iG(1` IHsL` OB-` HJs` h*bV.qB`%+6Data`.r\"` &5Param` wHrH`!v?qo`!7:`#rIP`!#*mf`$QIpB` P+t` 2Isr` Q*rc(null` 7Her:var mE`1=%`\"_3;if (mE`,='`*R#hZ = window[mE]` C!typeof` 6!== \"`+1$\") {hZ`#v$`![(}}`!c\"default:`/8%bO`+{2c`+eH`0t%`3E4` *\"` ~%` *!s.CLICK_ACTION`3J%` \"!))`+'`!{'`+|\"`!&%js(` =(`2 @=`2&:var url`$63url`\"G!`,B*D`!7*` 0(sm`\"N)sY.rU.rR);}var re = url.substr(`34!astIndexOf(\".\") + 1)`!0!re && re`2D(` +\"toLowerCase`!E\"\"xml\"`!<,reload(url, `!W*ettings.rootPath`/a&`&Q\".open` S\"`\"_3Target)`&-%`$H\"`$S\"his.kv`%t*;}if (bO`$N+`\"u_`!:$`&s\"};})();(`'?&) {` N\"cL`'T)bh) {`!g!aB().construc`- !all`&3!`$\"\"bh == `*c! {throw new Error(\"ImageP`#f\"er:`#d\"R`!q\" is` S!\");}`!&!` 8! ` g\";`#U\"h = bh`)K%cL.bE`\"?#dY)` ,&le = \"first\"` +'a = \"none` *'`*+&Load`\"I)`%*$, V`\"W$ct.Init`\"L&, ` :(;`,.!h = V`%o&eH`\"%\"` 8!av = `,:#`\"-#.qQ !== \"undefined\" &&` 3'(` r\"qI`)0%h` t&fullScreenOnClick`$\"!!av`*F)h.dV`%g$` q(`$%\"`$2!`(s! >=`.2%bW`!%'` 9,`%'\"W > V.aw`).$- 1) {` T!0;}`\"b#aw[bW].src`,7(`\"n/` ^$== 0 ||`#00`)|.`$s'`$=$`.04cO`%e#cO.COMPLETE,`\"n!`.7%null` +$\"\"));`(K\";}`*L$`!u\"`\"H&=`#*\"` ?u`%o!F =`%9!`$Y#?`\"n(bg.fE :`$@%pH.bV.ob(`*u!`$B!aF <`#L\"aF`$<1` |!`$D)aF`$K\"var oq = av &&`!,(control.qc`&$(bV.lc`!0!oq) {` c*cS !`*)\"`!~!` -%.src :`!+*}`*U+ew `&X!`*c\"`%F\"be`&z#` )(onl`*\"\"` /!o` -+error` 5$mj` 1(src` 1$`*+$ + h`+a)`+#&os`*~)`%;$be`$jX` [$`!L!`%B)`!/1mj` hXERROR`&R1` &#\"`/ % IO ` J!: \" +`!a\"src`!L(O`!>)type, bubbles, cancelable`3V#, success, `$-!Message`0c>,`-w!` f1)`$b' =`!\"\"` -\"`!%# =`!.$` 1\"`!.( =`!<)`\"-'`0x&`#H!`0|%`$[& = \"complet`0o&`#Y# = \"` t!\"`3R6dP`#/)cR`3H@` ;\"w`(4#Array`\"F#U` \".rd`*;!` :\"tartRow`/i\"` .%cG` 9&cR = cR` '\"mu`\";!ache_\" + cR.substr(1, cR`+B#`%@&dP`4 0dP`'-'lU`3X+w`1e#row >`&8#U` r$ {row`,:\"`-O\"` 9$[row]`!,(` x&s`4[*) {` M*` u#` F3M` A8rd` @2rr` :8`.I%` G2Init`\"e+`+|\", graphics` (\"V, `.4!`$B\"t` T!`(2(` N&V`%]#ln` N;`!<2ln` ~N`&B!`0r(/` (\"rows`0/!` >$%`11!` ?1;` I% = 1;}for (var `%=$` $!<` n' row++` h$`%P#`'w)`3@!sK` l!` &!l` e!` r%i` s\"i` o$`!C# i` r!if (i >= sK *`%<$) {sK++;` d#`1g\"aw[i`!2$`#M\"ba(`21!i], sl`$3(`#9*oq`$G#sU[sK - 1][sl++]`1J$` _!`#?!`3x'bg.fE == i`\"U%`*.+` f\";}}`$o1kE`'#,var hX = \"#`/`%mu`!U\"hA = jQuery(hX)`$g&hA`%($==`$o&hA.remove();}` P#`+V$+ \" .container\").append(\"<div style='position:absolute;left:0;top:0;width:100%;height` &\"z-index:0;' id='`!|' + \"'></div>\"`#i#`\"%,`-@(`%L0`)~+`%\\#var af`$>*af.be` ,#;af.add`0\\!Listener`-\\#ah`0_%,` Y\"nU)` 2:`4Q$his.ou` H!Load();`$q2oB`$z)`\"{!`!i(aw[` /!`!b.hS(`*h3oW` g)jM) {`\"fF`(m\"== ` S!continue`(Z(.kz`!w5n`0Q*e`&J$be.kA(e`![3kA` E-if (e.ht`/#%`!;#cG++`+$!eR =`*##cf.PROGRESS`'p&cG >`%,%`1f&` I*`$w$`&5#Q = tr`\"E%hA`'2gvisibility:hidden`($'background-image: url(\" + \"\\\"\" + e.af.F.src` .\")` 7!`(A,dispatch`&w!(`- &cf(eR,`\"5!, false,` m!, Math.`!4!`#,%* 100 /`#*,` W$\"\")`&?4u`$T-var bu`)4$be;bu`!I8`$.%`(^$`!T9bu`!c(bu`!`)` L%errorMessage`!o'cf`!`)type, bubbles, cancelable, af, ee, success, ` e)`'X#aB().constructor.call`#N!, ` c5`$O#`*B\"f` '\"ee = ee` &#` ' =`!,)`1K#`!N\" =`!V$`\"5'.bE`#J#`#e!)` /&`(D$ = \"ImagesCache_progress\"` A&`(8$` ;,complete` @'`$O!` 8,`!n!` :'bJ` Y-`\"j!ed\";})();(`2F)`&?#c`2[,`#U;`('$H`-'!`&V\"F = new Array`0y#u = -1`'D&c`#*&dY`#)$dc`'Y'Init`!@)rootPath, V`!P$ct` B!`%7(` :(`!6\"ku` N)`!8(`-L'`(d*` ~*`-?!W`2T5V.bF`/G/!V.bF[i].disabled` 1#`\"h%= -1`/,%F[eW]`#2#`!Z\"fC(` [#, eW`\"0&);} else `/3!W`0v$hu` 6ReW++;}`0y&`\"i)D`%:1`%'#`205`\"^-`3_!O`,4%F[i]`0Y!aO.bi.hotspotInfo.src` U# > 0) {aO`4 (O.add`) !Listener`%}$a`(X%,`! \"mN)` 2:`-2$his.og` H!Load(`#W%`\"G\"kq`-o'da` {1`-q(aO, aO.`1+!`/<*`#N2mN`4M6q`4Z)`$-)q` @2dH`4B.dK`4A/dH`4K%`$F%`4F*dK`45;`0g4dK`2O1O`2R.dH`2V*`!@&`2N2`\"V(og`2'YdK`$b$K`2L4`!c*bu`!c(bu`!`)`2D<dK`2;EO`1d|O = aO`1vjdK`2M3`&Q' = \"H`*E\"`2O3`&G'` ;.`2X,`$P$` 8.`2])dK`2c#` _+`2J>cI`$G)visi`$9%bV, H`)+%f = ` 8#`2h#z`2e&dg` \"&`#o)bV = bV` &#h` (!.bh` *\"playin`'^!als` p#H = H`#k%cI`(#'c`.t2fR(`&[&` D)aH`\"*0) {` 91eC` A)x`\"R%z = x` l2fv` G)y` K%g = y` >2nT`!w,`,H%bH == null) {return;}`0t!M`*I%V.oy` H\"aO`/S#bH.qh`/_#bH.qw`( #`!u!aM.x`$;'aM.y`$(#H.gM.css(\"left\"` Z#dz` W#` 5'top` 6%g)`.7&bH.image !`!p\" &&` @\"`2C.imgNoScale =`%*#`/}%` &width`!#$aO.ea() *`\"Q%lB);`0y%`#{*R`#2?`!S(gL()`!7& = `-m&bx` R#V`!@%` \"#H`\"q&jw(` \"'`,3\".gV(`2`!`!N0gV`!R,`${\" {x:`#r#, y` $#g};}`)\\6a`%t*`)\\6`-j6`%Z$`)DodW`)~0` E\"b `$$\"` )\"`%Y#HtmlId = \"\"` 2\"kN`'e%h.settings.graphicsPath + \"/\" +`&B(indicatorIm`/E%`&x\"`$w\"` ,'`%+\"`!?%fc`!d*gB`\"N&gE` \"&pl = \"` %_active`!n#`!&!.onload = jQuery.prox`)h#nK`& \"`#t#` H$`/E!` ;2Y` D)`\"~,`\"y$gK`*g$.bi` E#cb`!l&mouseCheckDelayTimer` \\!` 9#kG`'B$`!M\"src` v$kN`%6#H`-t%`,k%aT`2e&dh`2d$aT`2v\"s =`.=&` ,%.ACTIVA`2T#OTSPOT_API_` 0$`2*$` H&DE` <4` 0&` D.ROLLOVER_REMOVED` P(` ,,` S'`)d&kG`0w1`'<!`$D\"(\"<div style='position:absolute' class='`$P#_`%n% wr360` /$`'<%bh.oY + \"' id='` /%`%)*+ \"'/>\").appendTo`%6\"`,0%b`%)\"over(`&%)`\"\"&event`\")$OnMouseOver` 2#;}`&O#` c,ut` EIut` W6fI` FAkf` K4h.add`%'!Listener`&c#`%9#hG,`(^/mC` ^%var self`'c#`!Q%bind(\"touchend `\"U!down\",`%C'e) {e.stopPropagation();self.bh.jB(e);}`(?)`&1&nK`&.)`2^%eC`!`\"`3x%fv` *#g`!j\"`,e$e.target` v#by.pe`*X'`-:+,` R\"`#s&`3d!background-` :!\", \"url(\" +` J\"`*b!+ \")\"` K+`4;$` @\"` )!` 3+height` :%` )\"`\"U4Y`\"\\-`\"/#Z.gA(\"DynamicH`'\"Presenter. E`-r!loading`!$\": \" +`\"u%.src` ~3cD`*-,` 21aH`3P3X`$K$`32)if` ;%) {if (` ?&bb.fadeIn(300);} else` 2&show();}` 0$` H1Out` H2hide` Y!`!q1eC`!y)x`!s%z = x`$L*left\", x -`+v\"`$y' / 2`#83fv` u)y` y%g = y` t*top\", y` s*`%\\\"` g7lX`$A,return`!U-` H3T` =>`!>\"` J2m`#5*`$w$e.param !`3'#`.})`\"]$gY(false);`$)2`-e&` s-`+O0`*s\"c = ` q!`!Z2`/J'` PAe.pr`.D!Default()`'H!`+H'activateOnClick =`!9#) {`,5!H`.!#.fR` V#iH == tru`,w%gE = Date.n`'g#`!h1kf`#X1`!'Bif (` y&`&>$gE < 150`%0%;}`!H&0;}` t(js()`!o'` /(gL` 5\"`!(! ||` w\"`!6: &&` A\"dW` R@`*J%h.dispatch`2-!(new `27'`2<.` Z!,` `\"`2@\"`&a+);}var pU`$C$aO.c`0{#bh`$O\"pU`!Z;`'C,`#G$`#J\"`&m'`\"9%` B9`,](`%u!`%=2jP`%B-clearInterval`!$\"gB);` 2!Timeout` 0\"`4]!CheckDelayTimerId` 60cb`(x#cb`%R!`!t+`$8$`%u)dW`\"I%`,$removeClass` Y\"pl`4Y\"aq`4W!`+/!` x!aq`%'-ld()`&b*`&&2`#I#`!D$if `%K#by.f`$`!` 3+var cV = {x:`&9%O, y` %%ei}`!Q!cV.x == 0 && cV.y` (!` t5A`%{#b, cV`(N(`%H&true`\"]!lM`&U#`#'\"gB = set`$^%`.v)lM.lb();}, 2`2Q!`2(2b`%N)t`$k\"`!6%R` )%`$i\"` '\" !== undefined`'a%cb`\"C$var self`!b)`%R!set`%m$`!a)self.gY(`\"X!;}, `!/%`!b2fR`!a3`%3%bh.fu`#H$`+e%`(e&` *%fc`$-`05$`*Rv` r$cJ`1M$`(&!`%&!` 4$lp` 4$bb.add`(%+`\"A%ll`.I&`.+(`-E1oX`$i&`\"?*`#0&`16!null`.&%`1W%`(l\"renderMode ==`\"e#kc.bf.kd ? `\"w&fH` l#V`\"a#aO` \"#H) :` >'bx` /6`\"]#H.add`#a!Listener`#s#aT`#u$ROLLOVER_REMOVED, jQuery.proxy` |\"jP` s\"`#|%H.jw`#`%H.j`-G$V()`.4+` ,.`#;4`$c!`'$1ll`',)`&I&`%?\"`&&?`\"E&ACTIVATE`&D*))`!#3d` PfDE` nJgY`!/)aX`0wH`0i,`1;F`1$;`(X&d`(X&`'l$`1P'` ?-bH !`(2,.cN(aX,` ^\"`,?3gV`#l3`0n$dz`0j%dg}`#62oX`- 7`1h:`#\\3var delayMouseOut`#F!s`#\\# =`.e$`/i+?` /%: 0` `!`/h(`3v+de`3p3 &&`! 9`3/*`$t7`0]=`2r9` >!jE`3+\"3`3,!,`!=7`'Q3jE`$q,var cV =`$z%bh.dO`$}%bh.ei}`#(!cV.x`\"J! && cV.y`\"L,`$r*A`&d#b, cV`/[)`/6/`0.%bH.iI(` B+`%C\"`3u$`%N3}`'=2lb`!P~`\"1=`4_%`)j#`!l3` \"#`+@!`!x2nT`!~,`2`2`*a-`2X<io`\"s#aM`3C$bV.o`1M#`2D%bH.qh`2R#bH.qw`!n#dz = aM.x` (#g` )\"y`1m%gM.css(\"left\"` Z#dz`2,&` 8$top` 6%g)`!e8!`!s*kd`\"_*.imag` A!`&;!&&`4O$.bi.hotspotInfo.imgNoScal`\"o!`$E)`!M'width`!R$aO.ea() *`# %l`&G6mv`&M0oJ = {`!A#HtmlId`&Y\"` &), parentContainer` >\"H, ` @#Config` 0\"`\"6!, coordX`/%&` +!Y`/,$, isVisible` ,#f}`0Y# oJ;};})();`+m*`'[#x`!{)bV, aO, H`#%$aB().constructor.cal`'V\"`$~$V = bV` &#h` (!.bh` *\"H = H` %\"ig `$s$by.ge(`&<$v `$g\"`(A#M` \")`%)\"` &(qh`(d!` &\"w` \"&aO = aO` '\"`%?'` 1!`%O+` ?\"`(K(` =#` )&` =\"sT` w&bP = 5` &\"v`#f\"`*Q%`!f\"A = new Arra`(=#`\"9!jQuery(\"<div class='`!G#_rollover position` (&wr360` &$_\" +`&q#h.oY + \"' id='` /%ig` 0!/>\").appendTo`(Q\"H`0M&bx.bE`,v#dh)` ,&`,\"'`,l!`%I%`\"D#`)@#` $&`\"8#.show();} else` -&hide()`33#`#%&` ##`!D(`(i'`!%1, duration, hZ`!/5fadeIn(` ?)`!E-fadeOut` 6,`!9HiI`!X)eJ`,5(` [%`+i&`)?#`%b\"}` '#`0m-gM, eJ`$;)`!('L`+X0`(^/`!?%`->(cdata.length !`2D\"`)!&`&`8` U!`&<&`&'6dv`2>$M` 3#`!03);var bn`1F#` L%find(\"iframe\").each`,?*bn.iA.push(`!k#`+~!.attr(\"src\"));}`%(%`0t(F.src`\"X$>`\"Z!var hY`2j$`08; ?`0%' : 1`,>'`#1)`\"ZJ`1$8hY` 9+background-color` K$`!l+BkColor` V#`-t$`!\\%img style='display:block;`!B!:100%;' src`+K'`#9$`!{4gM`#c.`!J(txt`&6B`\"sGkr`!2&`\"$htm`1Q\"`!--ad()`*<$`#H$`.E$\", \"relative\"`(8D ||`#l.`\"/5`'U#a\").fI`'6#.proxy`'W'event` L$ib` )#;}`%!\"));}`*d1kr`*l)dR`, (`!w)ss`!V$=`!X\"dR`\"d\"font-family\", \"Arial\");` 7$`&t)`\"A+Width + \"px` G'`&g5txt`&w#` C$`'2@txt`'M%`!g)size` =0fntHeight`!I-border\", \"1px #eeeeee solid` ;'padding\", \"6px 8px 10` #\"\"`0g&dR`+s$tyl`!31css`$?4jw`/@,`%2\"L(`'I#qh`,4$dv.outer`#g!` 6%w` /,`\"L\"`/v(renderMode !`0?$kc.bf.aC`-;#aM` _$bV.o`.,\".aO`\"%#qh`\".#qw`+~+left\", aM.x` ++top` 3\"y` 2#dv`%y*0` )+h`!s!` 3\"`4?)` }+-`\"/#qh / 2)`!\"1` ;%w` =#`*M\"nc(`4%\"`!,*`4E!ilit`'r!`4Q#\"`3j3lm`$D)e) {e.stopPropagation();e.pr`)u!Default(`2I\"pU`#`$aO.cv`!`\"bh`$'Bu &&` ]!`1G#`%e$cN(true`&+4ib`!6Xlink`.v&e.target`3f$href`-f#` C\"== undefined ||` Z!`+`+`!o!lm(e`$~&`\"U%bh.gD() == `\".!` G#bh.sm.Event(`\"<\"sY.rU.rR);}var `!P\"`!N6` (\"\");window.open`!m!,` R%`!m)? \"_self\" :` :#`#F4nR`#Q)it, ab`(o#gd = 0`#B!jj = ab / 2` +!margin`%B'bi.` .\";switch`\"j#` 4\"align.horizontal) {case`%X#A` 9!LEFT:`!-!it - jj -` #.right;break;` G-CENTER` O'` I( +` '$lef` J5RIGH`!2&+ jj` C1d`&3\":`$M\"ca =` D\"`$}\"P`&!!gd - ca <`%f\"` Y7`%u#` N#+ ca >` e\"H`+]().aK()` `'`\"g0}return gd`*?2oi`$x)gR, bq`$~#ho`$|%hC = bq`$HYvertic`$m2TOP:`!*!gR - hC`!}&bottom`$d;` Q&` I)`#N&top` K4BOTTOM` Z%+ hC` D0`$t+E =` C\"`$w(ho - cE`${$` Y6`$w'ho + cE`$s+`0L#`$z%`\"_9`$|$ho`$n2m`$v*`)|)`''!`)x\"`\"\"'`-Z!D`$w$`&C/`\"J!`'9!ca >= lD) {`!@#lD`'d!`\"9(`&x!`'r&` B#ca`!r%it`1=3F`&e6`#!`&n\"`!l+mQ`!l+`#B)`)H\"R`#p#= mQ`!I&mQ`$]!`)6)R`$h)`!t$E`(q&R`!f2jl`!o)cU`/l$iZ`!>#` )!`4/#`0.'` r\";}`3&0=`3++C`\"f#ab`\"K$qh`\"_!bq` (%w`!#&imag`3z!null &&` <\"hotspotInfo.imgNoSca`!L\"`4&$` u&aO.ea() *`#k#V.lB;`!(!ab` -$aO.F.`#n\" /` ('`%}!;` +!gM`$4\"left\", - (`&_\"))` 2*top` 9\"`%#\")`2o#kK`,2%lg` &!`\":%`+g(parsed`#S$`\"G%` 6)n`4/\"`\"B$` u!` A!nR(cU.x`(H!;`!!!` 2!oi(cU.y`&d!`%`$` K'm` :!` E-lF` J(` .!dv`\"V)kK`\"T#` 0$`\"U\"lg` H$mc(true, 300, jQuery.proxy`\"S\"jm,`!'!))`&Z2cN`&c)aX, aq) {`&V0`\"f$`&_(aX`'9$mc(` <!, 2`!52kk`!A&`\"{#`#M\"` R#`\"C#kk();}a`%x!q !== undefined ? aq :`!C\"`\"q#ispatchEvent(new`(##` *\"` &\"aT` )\"s.ROLLOVER_REMOVED,` e\",` l\"`\"V!`\"q3iZ`\"{)`\"M$gM.unbind(`!w#H` ($\"touchstart.\"`,#$ig` 6-mousedown` 8*`.~2x`!8)e) {e.stopPropagation`+:(`*x'!`*t+u`!z$cN`%|!);}`,:2m`\"H,`+\\A ||`\"&\"` +6io`!;$sT = Date.now(`'R$gM.`\"w'over\",`\"Q(vent) {` #!`\"R/}`\"b\"!`\"-#y.f`.B%` l*down\"`'!+` u.`)j\"m` )#;}`'B%`$h#`$R7` VBmx` j.`(:)`!m%`&/&`!/d`&u2`!=W`1'!n`- #`/3%f`!(!iframe\").each` k'index`1r#sS =`!7#`&G!).attr(\"src\")`/\\!hv = bn.iA[` T!]`'p\"ypeof sS`+3!\"`+0%\" && sS.length == 0`/s!` I\"hv` ?,) {`!'3, hv);}}`)K3kk`'Ry` d%sT != 0` '(bh.gD`1q\"`*,!`$9#bh.sm`-B)sY.rU.te,`))' -`!:\"sT`)7$`)P!0;}`)D%`$@:`\"v8\"\"`)J!`&1\"Z();};})();` Q*`!W\"jI`#4)id, `1;#`\")$Id = id` i\"V`1V$` >$` `8cP` k-dF, cn`-C%j `2?#`0v#f` \"*i`!/(dF = dF` '\"cn = cn` '\"K`'3&\"#`(g&d`%j&cP`0o(W`%d,`3[\"` Q\"cj` @2fi` I)fh`%@(cj`4K!h`4>+!` 6#`\"H$K`$@#class\"`)y\".cn`+j+` 11dF`%a$`#/\"h`!P2aH`!Y)`$a&`!b%K == null`!P!row new Error(\"Set`${#: buttonElement==null.\"`!=$`$E!`%;$if` ~(`!}#sh`0v\"`\",*hide(`2Q'e`&M.cg, be`%d#k, cn, cY, d`3:%aB().constructor.call`\"9!, `&:'`%W\"jn`&&*cg = cg` &#k = ck` &#Y = cY`&G#u = du` '\"be = be`#j%eI.bE`*7#cP)` ,&`#&cD`, 5jn`%\\'`\"q#`03!`!Y#`/y+`!b#`%A#be`0e$`\"4!tru`!J)`&@lun`!N(`!3#`'.5` w%du`/o!` ^&`!=Y`\"4(`%m$`22!u`2/$setTimeout`+_*bu.ka(`2g%.du);}`&I+`!^FdF`!KY`$;)`!WMlj`!w-`*2>ka`&;,`#?R` h0l`!4!` HP`\"[*` u#fb`)\\o` G7`!.'`)h&eI`)j$fb`\"@'p`!N*`0(+iW`3C!` E/j`({*playing`!u$fi` )%`)^&`#G*`2f.`,YD` g&`+{1j`!['nM`!uE` K)as` K)d`![%fi(d`!>!})();`'<*` b\"bN`%g1he = 1`)<\"aF = -` &#kl = 0`.K#U `1`\"` (#B` \")V` 0)es` N&fe` Y'h` :)db`-h$`&{\"A` 1)hz` \")ce` u*`0V+hw`0f+X =`3C!`\"T\"J`\"7#`!w*dZ`!R&jr`!@)lc` b*H`\"P*d` \")jp` \")aG` \")kL` \")lB`#d&rm` x*pJ`!G&sn` \"&hE` '!`%H$bN`%E'iF`$h)bh, bd, jp`$w$`#q!bh`!o'bd`!^'` %$`\" !jp`!&'` J#.css(\"z-index\"`.e#ypeof` <\"hE === \"undefined\" ||` 0'`/$&` q!2002;}`!v1`44+bU, bB, V, es, fe, aU, H` g$`%k\"ew Array`%j(` &*`%u\"` &*`'J!bU`']'bU.startRowIndex`']'bB`'\\&V`%'a` Y#H = H`$s'`#p#.l` Q#`(|!` -$bA.settings.bg.kC == -1 ? 1 : -1`2B&bh.pH !`%w\" &&` Z%pH.configFileFullScreenURL == \"\"` @(`!#%f` ?%OnClick =`&U#`#H$`)r!` y'dG`)x'` ,(A`3?%` N&es` B'fe;}`!~%V`!:&control.hideHotspotsOnLoad`!<$`*o!`(,\"}for (var i`'y! i <`!@#B.bF.length; i++) {var aO`!`%B.bF[i]`#H!aO.bi.disabled =`*B\") {continue;}var dj = ` F\"id;` k!i`)r$` ]&renderMode !=`+W#kc.bf.au) {` M\"`+o%aT(`\"(!, aO`3y\"`3~#H)`#;%` D+cI` 87`'q#[dj] = ai`'m$` *#`'h#[i]` f)jI(dj,`\"P\";ai.cD()`),3oy`)6)aO, width, height`#c#x`$-!var y`$7!var bi`#8$`#'$F.src`$A# >`*c!var hY`#`%h`%?\"Info.imgNoScale`&q% ?`\"-\"lB : 1;`!E!` V\"ea() * hY;`!R\" =`!b\" * `!4!` /#/` (\"` 6!`&m\"bi.offset.ot()`3l&{x:` 1&x *`!1$, y` .'y` /&};}switch` o!align.horizontal) {case`#z#A` 9!LEFT:x = bi.margin.left;break;` >-CENTER` >/ +`(s#H`.u\"`\"9!\").aK() -` =,` %(r`\"p!-`#%\") / 2`!%4RIGH`!g\"` eA` l)` m#default:`\"u/vertic`\"p2TOP:y`\"G)top`\"e;` ?-`\"s,`%I\"`!f0top` #)bottom -`'g%`\"j7BOTTOM`!9!` gB` n+`\"x-`&b&x, y:y};`)P1sx`)X)`(p#sz`-5%U.sd(`4C#`2:#< sz - 1`.A$kl++`+{$`.w0bg.bounceRows`0:-`3-!0`,)#dE` X\"aF)`!Z2ta`!>N`+)\"` '#--`!,[`\"V\"`!HDfo`!\\0dir`!i$`!/*kC`!p&` ,*oc`4,!true\"`!H$he =` f\"= -1 ? 1 : -1`3E*` 4--1`-=!`3L&tk()`\"@(`%t#true`%%` D!iG` K\"he`\"73eT`!L~`!K` =$`![otk`\":0jq`&a'lU`&^$)`24!af = jq[`%n#]`29\"f.image.delay`'(#`!g%sn++ < ` 7*` 5(bh.gQ != -`)I%` .!++`\"'%`\"G!;}`'.\"sn`),!`\"K)`\"+0rE`\"/,` S(` >1ny` >1dE(0`#-3nC` :4`#0/.length`+w!` Y2iG` b)jG`$v'`)b* + jG` O3q`)g*label`#j$ypeof ` .! === \"undefined\" ||` 3\"`!`$<=`$f!`#w*`#9(`,F2for (` 6!H` A! sH`.O!; sH++`&03sH` M(i` R#i < jq`!I#; si` [!if (jq[si]`&-#`!p\"toLowerCase`(=\"` $/`-=*H`%}%`#V#si);}}`&H+`#N1B`#Q., rF, hZ`'Q(pJ !`#9)`'*\"`#@gbh.cJ(`)Y\"`#p8h`#L#h`$$$h`$#%rD `+I#` a!`$*-h` ]'pO` b\"pO`$-*pO`$/(pO`#fQ`!D!`\"}!break;}`#$!rD =` 1\") {` '.`-:+`\"u#if (pO` T!`(J#&&`\"`!` *#kl`$$,var lh`!9$`\"G!v = Math.abs`)0%- pO`4;\"pv <=`\"[& / 2) {` ^\"` F#< pO`/Y%` -)>` 5!`!0!M` 0#`!0!q`$(!`+F(if (lM.bh.pY`\"H%`%]!M.aF == pO && lM`'R!= sh) {clearInterval(lM.pJ);` \"!`$\\!` k\"eg.ji(`#<\"` ,#pY`%D%`!2#` x(`'.#hZ !`'$*`!a#` 4! null) {hZ`+u#;`(k$;}lM.rm`#]$if (sh >`!u\") {lM.sx()`#*$` 9#<` 4(ta()`$y\"`!U\"!= pO`#q\"? lM.eT() : lM.fo()`!'&`*%$`(M$`\"U\"`&1!` +%`\"W!`%6%gg = `*U#y.dM(rF, 1`)$\"eo = gg /`%4'* 1000` g\"`#a!set`#x%`$e)qD();}, eo)`1f>ob`%D)nh`/=*nh`#{, && n`'d\"`(N\"`,y(`0U!`-;$*`+#&M()`3f%` B#`!92lV`!B)index`/=3`)!$`#-!kj`&+)` S! <`,q!` &\"= - ` %!;` F!`-_&` 9\">`#_'- 1` L'` \"\"%`,#'` J)0 && kj` F'` ](`!,\"`\"R$` '#`\"D0nk`\"&Nif (!` )!rm`(Y!his.V.settings.bg.bounce`$l#`!l#`!T*1`$X&` *)`(9(`#G#`08)0`)-%`!2\"lV`!n#`\"*2fK`\"3)bW, deltaX,` \"\"Y`$a@fL`#Z![bW].bG`\"[!fL =`*i%`*^$if (` x\"` 2'` )$ 0` 6'`--!` 5(Y` ;\"var dC` '!var cK` &!`3o%bh.bA.iq`0r!` C!` ,'aw.ep;` N!` '+U`/#%` O!fL.width` F\"fL.height`3s#aG.css(\"` >!\", dC`+C#` 1$` H\"\", cK`%F\"` 9!jr) {` ;)margin-left\",`)7#U['_viewPort.x'] +` X#` ,*`!7!'] - dC) / 2 +`$P#`!=+` }#top` m2y` j5`\" \"` !cK` w)Y`\"+'dZ =`&Y\"` &% dC /` x0`!n#`% \"`#z$fm`\" !`*l#`.}%L.e`.p!` 8*`/<&L.fd`%L\"`$R#` J,`.j#` A'` \\,`!9*J`\"C!`!4/v` O(` @\"` n)M`!.5v`!6-M` Y/`&/\"jr`1b&` ,!hs(fL.src`+C(bh.eG`'W!` *!eh(bW)`&o$`#_)zoomedInX']`!,$`&C0).aK(`%k$` L1Y` H5top` =?W`'##` U+`(W\"` =>H`&^$` Q+`(}#` U(hw`0V%`,u0dE`/7.`,u3ic`!&%F`+b!`,Z\"Value` |$`3N$= parseInt`&&\"nk`.H#`$R\"ic >=`1F\"` I%= ic`-L%` m$`%5#`.*=af`.E\"` g#]`)A&en && af.image.cS !`-z%if (af.bG` ,$` D#bG.cQ =`\".\"`,7%S(` R!`\">\"fK`*w#F)`'X*aS(af`&r(cX.contains(af`&}%cX.bk` F!af.addEventListener(`$D\"ah.eD, jQuery.proxy`!0\"hm`,Q\"),`0A$:`$E*` )\"Y}` _;dU` j0eK` w#` ?;f`!G1` P*hS(`\"g\"`#b\"`1x# ||`#[)`%\"!`+W'hc(`#v!;}`,*!` 2FiM`$/$,`$W\";}}`$2)` 4)`(:\");}`&O\"`'E(`(82aS`(@*w`(4#b`3v\"`&L%`%((iw)) {` =!1;}while` <&ds() > bC` b#`'C!` 5$mh(0`#5$ != `!*!af.remove`%V7`%]#`#|!` 09dU` F#eK` +>f` r$` F#aE`+\\$cX` S#Item`'O!`$R\"`\"9)`2e(`$}\"`$T\";}`#V1iM`#^)bW, jT`\"#`*R5`1r&U`%g$`+J%`24\"jq[bW].F.src.length`!R$` ?$`1!$` ?(`0l?` y!T` .$`.R!`,W#`\"+1kg`\"3)`,'#`#,\"e`,9'for (`.Z!`&>! i <`%Z#e`!y#; i++`+N%e[i].Visibl`-v'`!.2eh`#S-aX`!C#`\"F\"db`#1+`1'$is(\":v`!!\"\") !`-c%`(*!n`$9#;setTimeout(`\"?)bn`#2\"`!,!;}, 400);`#u)kg`+3#`#o#U`!?'`/gEbW`0%\"!af` T'`#@0`09%bF`#I+` k!l =` 7([i` r\"al`$@'` D!i`)x%A[al.source` F#i` B'ai.eC`#F%`4Y!lef`4T$ +`2r#` 4#margin-` 4*al.offsetX *`$0&` K!width` B$/`)p#`.n!i.fv` >*top` x:` 4)`!,%Y`!$-heigh`!W%`!/#fe`!0\"aH`/N!`%+\"`(=\"z`\"v'`'('tru`'-!`'PF`&O!`#o&e`$6$bi !== undefined && ` /!`#{&`$C'bi.Id`$7/`$r!O = ai.aO` :\"O`$\\*nT(`1%!`'3#Q()`0J2kQ`*E,`!wJjg`\"3.!jg`#5$`*\\%A[jg.Id].aH`.<&`!<2`.9*duration, left, top, `%A\"L` ,!` &\"Top, `&?!, `%0\"`*|6`)CE`41#];`(]~`)=>`% 1.bi.renderMod`/ !`#L\"kc.bf.au`%G\"bb.animate({left:left +`#<'`)k-`#F!`)]' - ai.lX`(b!2`$\"!:top` \\%T` '!`)=*`$\"\"`),'` ^#T` _\"}, `$u$`'%\"`%:1lx`%B)`0)!`0rLA`$d\"`1D\"`&Y(`/f#`3=$R`1U&`!70hs`!>)src`&7)`3w+bd.attr(\"src\", `4N!} else`3N'aG =`&`$d` R$aG`%K$jp`,3\"kL`'%%d` ,\"pK` [\"bd,` C$`,^#jp`!&.` 4!mZ` M\"jp` L#` T$`!O%`!C0jp`!E.`!=$`!M&`!a$`!O$` y'`!7#`\"[0`!J)`!'`!N%`%=2pK`#{)fromElemen`*z!` $#) {` #%`1`., ` K'`1~/);` G2top` A7`1R!` J-`2T\"` C/`2l#` @-`1o#` ?/`2($` B-`!}4`!w3`!p3`!j2display` =0` 3$)`0g3mZ`$=)oh, pk, jO) {setTimeout(`13)oh` v\"z-index\", jO.hE);pk` ),0);jO.eh(jO.aF);}, 10`!43bo`29,`.,!I = new Array`/S1`2B6b`/1&`2S%`4h!= undefined && ` /!`/:)N`/i'bi.Id`/i#N instanceof`/C#aT) {aI.push(aN.mv()`(5!`2(\" aI`\":2ActivateHotspot`3F*j, t`#v\"`!K#cA`!H&`2]\"N = cA[dj`!;<N.eb(` f$;`)\\2op`!1+` S`gY(true` |4lO`!')e`,_$db = true`+y\"eh`-,#F,` 1!`,G$h.ih` x$`'F1`&\"*` q*`0_\"` +!lx` _#` l'` :!` a3fP`&x,`!X+` A3hm`!B*, `4$\"`1\\#e.af =`&]%`%w\"`2S#cX.removeItem` E!)`#x!` 5$ds() == 0`22%h.hc`!}%`2X&en` p'e.af` q#EventListener(`$_#h.eD`/k#hm);` ->dU` H#eK` +@f` v$eK`\")\"` N!`+6! !`&O#aF`\"\\,f`1z#aF`#9$.deltaX`#H$` )\"Y`#o3e`1M*e`\"|~`\"e~`#<G};})();`/C*` E\"sY`'C1s`0=!`(D'abel = \"N/A\"` -\"rN = \"WebRotate360` 1$s = \"ga` '$z `#\\\"` )\"hW` '$`$B$sY`$?'cD`!C)viewName, sZ`$N#` +$`/s# >`#y&`!^$` ;$`$d#`\"(!sZ`$U&sZ =`\"8#`%,'var sb = \"GoogleAnalyticsObject\"`-E!ga = window[sb`-H\"typeof ga`0!\"`0|%\" && ga`!V/`\"~!ga`\"v'` m\";} else {` |'.parent.` <u` s*;}`+5!` <%`(5%`!*'_gaq`!',` ~$`${!`\" *` O'`!$*` AC` H#;}`0i%`%f)`'}!`%i)a` #!, value`2-#rJ`'I%`1}!` E\"==`1w#sY.rU.sG) {` E!`1E!`\"`&`%l\"`0M!`\"c#`\"y#!`\"w%` +#[`#e#](\"send\", \"event\"`)I#rN, `!X$`'+&`!e#, rJ)`#*)`\"d#` x+hW`#7!.push([\"_track`\"c!` ^E])`#B*rU = {` $).ZOOM = \"Zoom\"` -)rQ = \"Playback` .*sP = \"ArrowNavigation` 5*FULLSCREE`+?!Fullscree` 7+sk = \"HotspotsOnOff`!7+C = \"ImageGrab` .+W` 4%Hover` m+G = \"ViewerLoaded` 1+c` 6&Rel` //te`!S'Popup`!1+R` 5'A`$&!\"`.N6bs`.X,`2 %s`-E6`'U#self `36\";jQuery(\".wr360embed, ` \"'-cdl\").each`!:*var data =` k!.ed`&Y!)`-2!cF = \"` a!_\" +` D!.name + \"_playerid`-]\"am = `!?$<div id='\" + cF + \"' class='` i\"` W\"'></div>\")`!z$`!8!.append(am`3x\"`!3!background`,x*am.css(\"` 6&-color\",`!j\"` .&)`/h\"r `*W$`%b!`2$!or.Create(cF);r.settings.configFileURL =` m\"xmlfile;r.license` 1+lic` 2*Code` 2'` u(graphicsPath` ;$` ,$` ;)`1Y!`*I!Tracking` G$`+e!` @)responsiveBaseWid` r&basewidth` :2MinHeight` H$minh` ,!` D(`!-!`!?$Alias` G$name` >(zIndexLayersOn` >$z`%9!`!e*oot`\"X(rootpa`!Y*crossDomainC`$3!`)!r`&O&`%x\"hasClass(`'5\"`'v' ?`/I! :`0)'`!)!onready`&,*var fn`1H%[` >(`4\")(fn === \"`(s$\")) {`!n'apiReadyCallback = fn;}}r.run`&Z(();});`*P1ed`*X)hk`)p*`\"[#hk).data(\"imager` q\"\"`**\"defs = new`'z#jQ;`**&`+E\".bv`\"m\"name, (new Date).getTime())` O\"`'_#` H,` 0#, \"`'v#.lic\"` J&` =/, \"` 9$`'s$` 6,` 0$,`\" !`(I)` S#`( \"` H,` 0\"` N$`(R.` V#`(-%` P,` 0%` \\#`(g/` \\#`(@%` S,` 0%` R-`)$%` \\#`(0#` Q,` 0#` X#`(d*` S#`(F$` K,` 0$`!3$`(~#`\"M%`-S$`\"E.` 2$`$1'`'t#` <,` 0#` C\"return`&p!`'12bv`':)param, ez) {`(g'` 2!`(n\"undefined\" ||` 3\"`)_$<=`)c!`!-#ez;}` $#` A!;}`3_6fH`!9)bV, aO, H) {`\"7!aB().constructor.call`2s#`\"W\"V = bV` &#h` (!.bh` *\"dv = null` )\"gM ` \")S` \")iX`1G%by.ge(` {#H = H` %\"eV` E)aO = aO` '\"hotspotInfo` 1!.bi` ((` ?\"sT = 0`$(%fH.bE(` &\"dh)` ,&`$=&iL`\"t)`\"p$`\"5!`+d#\"<div class='`!,#_rollover lightbox` (&`.h!` &$_\" +`& #V.bh.oY + \"' id='` 2%iX` 0!/>\").appendTo`$ !.H)`.Z\"`\"i\".F.src`//*`#p&`![0img_wrap'></div` o.dv`$ #gM.css(\"`((&-`.5!\", \"url(`!d%`!?$ + \")\"` D6color\",` O\"`$?'.imgBkColor`\"2'` 5(lbxShowClose ==`2&!`\"A%S`\"33closelbox`\"(?S.fI(` _\".proxy`(P'`.$!`!&$lw` )#;}`\"#\"));}}`$&(gL()`!Y'var hn`#r7title`!F9var ao` L3usr_text` N0hn`#93c`1:\"`%p\"!`+F\"ao` R#` 83).addClass(\"`'l$` 4!\");} else`\"|#kr(hn, ao);ao.htm`+9\"` e)txt.ad());}ao.find(\"a\")`#^Dib`#r0`)z0kr`*!)`!R#`.K#`\"7-ss`\"m$=`.5(`!`!attr(\"style`'00css`$D\"kh = `'e.` 7!mB = \"text-align\";hn`(B!kh, a` `!(kh)`#4!` /$\"none\")` B$mB` A%mB))`,n(`\"L&jw`,O1iL(`(g6ClickActiv`(r-dv`#qDm`$&/` [$`*j!curs`*`!\"pointer\");}` :$mousedown` s() {e.stopPropagation();}` o&` R!over` 1B`\"|2l`#%)cU`%X(dv.is(\":visible\"`*4(`%Z$`#?4BackC`0!!`,H,`-O.siz`.9!cov`\"s\"`(p#`/c*wid`/g!`0)\"` )\"() ||`.c'height` ;&` *\"()` xAntain`*&,` 77auto\");}`$b\"`4N!cU`$5%fadeIn(300,`,Z#`%q.`!O$jY(e`*')`$70cN`$>)aX, aq`$1:!= false` ?#aX =` (&` L$hide(`&/#iY(null`\"U+`\"'#Out(4`!k@i`!,}aq = aq !== undefined ? aq :`!K\"`#1#ispatchEvent(new `\"c\"` *\"` &\"aT` )\"s.ROLLOVER_REMOVED,` e\",` l\"`\"z!`#53ib`#?)`(>4e.pr`*3!Default(`-%\"link`1M&e.target)`-d#href\"`+j\"` C\"`\"G)||` Z!`.A+`+<%`'j/bh.gD`3O)` /$sm`\"l)sY.rU.rR);}var `!P\"`!N6` (\"\");window.open`!m!,` R%`$?+\"_self\" :` :#`1%4m`#!YpU =`**%cv`\"^#V.bh`#O\"pU`+t/` @!cN(` 2!`$~2l`0/*`!>4` G?jY` Y-` Q!sT = Date.now(`&C4` K.`%\"%sT !`%K\"`$fTte,`!7' -`#C\"sT`1&$`!^!0`$A3iI`!M*J`/l=`+D$`$!\"`*##}` '#` |\"by.fA` [$, eJ);};})();`+0') {` E%mG`%B#hT ` {#` *!jR `\"^\";document.ondragstart`!m)`!A-;`'}#`'e\").unload`!3*`,o#each(lH.ew,` d*`1D&v`#~$pR`-g$}`3^!` w+resize` OSo`3)-pS(`!!%` K%ra` IIloaded` j$qn` j$`!s#`#R$).read`/Q() {`$+!`#|!` j!ypeof lH`+\"!\"`*%\"`4-!` 5$.ew` 7%fe` ;!`)k'var ii = `/`&bs;ii.cD(`#F$`!{6`35\"y(`\"l!}`%n\"ko = \"ECAwQFBgcICQAB\"` 5!fp = \"\"`'q#jX`%a,`4_\"Y`(:!` &\"v` \"&fd` .&fM`(]\"` c#ImageRotator` g)cR` n$aB().constructor.call`$+!`,l\"cR != null && cR`05$>`02&cR = \"#\" + cR`!B\"oY = cR;}lH.add` i#`*@\"ettings`#M)jQ`!y#m`\"!'J` \"&iR` \"&dO`\"]'i` \"&hl`)J%` +!r`+-!` &&n`#R!` &&cp` Q'a` ]'g` \"&qe`!!'u` R*eS` 1'`!I'ri`!)+`!}'kU` .*p`.L!` &&oS` \"*bU `#w\"` (#B` \")eE` 1)eP`\"z'G`#&'A` \"&`(~\"` w*viewerBackgroundCol`%j!\"\"`!/#A`$?)g`!(#nL` 9'configFileFullScreenUR` 6(fN` \"'gf` \"'rootPath` c(q`\"-)toolbar`!:)T` .\"`&/(dV`%3+eload`( !Index = -1` 5\"a`#T!ew Array` X#n` Q*qY`+L$` *!R`$,+d`!V)jp`!e)jW`#j&jt`%^'L`'j*X` f#V`+[*N`#-#s`($'X`$g'b`!M)f`&k+jo` 2)`*V\"` 5&av`\"s0Callback`!z)ok` \")sm`!Z)sY` Z#K`!Q&sI`''Z`!t'`,S'fl` \"&ak` .&aV` 9'q` \"&o`)S'p`)k'O = 5`#Q$o` (!` '#gy` <&gQ`%-'bw = 3` ?$licenseFile`'&#` +#.lic`&d#` +#Code`&u(`&h!`\"p%cZ`#)*`&Z+f`1U%` )\"Q`*W+L` 2)eg` `)dN`*V*Y` \")q`!,*hB`&w+`+B+ey` \"*gT` A+M`'u+`-f+lB = `#E#gu = \"rdVd3lrjF/EFcxKccvguE5TGmYpDXz16dn3CLv2qNR7fcnEECgg7ebiZEA==`#F#oD = \"i8ujXOfyQKsb0ntiQLRJNqDYT9/9OTL6lvTpPB41YFAxMZ9Rt1pBp` [&hV = \"pEObvaqAslGmqYSI1iZngQ3MF/Ar3ZGxZ78TLJ1LZW4kqxU0` V#p`!=!ohtdbI/Ul1vCoSNkyoMEAlSUbVOqLNdSbs9XJPekPzilsNp6DFHMI/E`!:$q`,}!WXau8tyNHUiBQE1xmrkAdTYP/ZKx+Vu92rRIkbli1cMxbsyz`-J$F = \"RamEB6nl1dIeNBEZm7QDsOVb3dGGYWkwNVHWuvJ94wp9G3vW5SHvOOlX44oxMBX7X1vxUANM+tmDqjoqh`\"v&j`$I!GlSkJBzsD5RcCjrwLEVCJ7mIFwJDyCqGGD5Nd` K&bc = \"eLD7JUtPYvyJvsxgrAnCsNSQCgEM7pIfT94HS1rOoLcL2MwyCMuro5pRUlZ5d1RS1DrWjP6l1qNzk6TlHh9omapeMmUV8/FkXCK0FPgIoU9yitzubDz5YmpAWEZAouM9ortgcOiOj734L22h//27xDhbGQa+VU9RGknhdPZN5uqrsOrF0a+kMfYYNxSxRbS7OsmPnBTwGkcq4HiLvnc`\"9$ap = \"TwxktOdX72sNWYxdOZklOOQODD3v/24BL/L3TqfGHTdXH1FgV4B3p0l369uDHjcukAzhbGZGeHpcIcE0hYFO+RQdLIzsG/rzmx37a88D+HbdTlQrliszG4ssH4QdWjuUYEAu1q5Z4kswmvKFVxbERVldXQrZzLX9wzrZGoej0bkEwuw5`!u$Y = \"Q3al7L/L0P9pKODM8KKroGEN0uVXShCvTyhMM6e/SVOR3++eyV0lzeMt9srGcZIhVUNQw5ilDRPYx4WQE9wm0zp6XDihvR7PyNMi6Kf2ejGoVPg3WPY9hNN1dqrqaEaaSsRQvU1kSATMxl7M9Y5KYC7xtB2jhpb47MLtMyVDDsXPWNws9x9aYbFHXmNFywwJ2aYUoA7kCgGBaKajtCCNdXmK+jJXm3a7`&c$j = \"HBxXgwukRpBsuvZcuDhoAlS7QJKv3fqMVC6hPzKuX6bxLD57uiXEN4s+TsbGT+PVr97SoEnk5qVnLihaVLyvY7s6cd2oBhvpsPEfJRiXTofF0atdDzoFJgkrSUPb1Gk7CUn/E4kcVidBATbFSAqXuToe55CMy0DX1ACkFWwtvIrDX/CYGw31M/OIVxEIZHXkNj9LOexPqp33jeQj7hEpzGUdv0qsmJdtydHpAXSGiyIeXj9bZ`)B&aQ`+Z!7rMSKsW9MaGeot+2i175+dODmvU77QTH4r7nbbbHaYtwpgCIbCkAHxjP2TEULx8R6SO5WujzE4H+gskhOTj/gH8SchaFibUWdh6ZWoa5TyB1v0snPyH1gOhLiJdxHqY9Fnd4gpjHGyn+EbOOT+tvSAj20D7ZbduDQ/w45q2ETE/KOrNuLY5rYrwYVSPOIzt0H8TA+ZWMRkhfmczD/MSBtm9EU7YCy/OXWxPyuYE/WQVKTMYIg`/X&q = \"6y7SGSlWes9q2IflC0eN1zTVBe9uUxRIOSAOy+QcMxxjyZdMB+OxqajaTiKOp4X050n1TJPtrKAIERK/AO9Fu308PzrUdhCvmnWRGOcuAGvN3yVXz1SHb2H3nNDE1VOZYFISzEfFxj8+fFdHZ+b4iDk6fpEr8+ZTg+uKy6QsPicLWV8K+ETe5jEHKX1ep+FYyu9izHmUzDexvD385DVbdc7j5bbjIQuGNqhscjYT/GSgtM37tQ+oRp7EQ1R96utA08g1TrAXvwzOCn6WBa5IqwXECkpg7K7f/4M5YBLGvdWWoYoOH/QjSQLGnhQcHW5S6LsSk0Sz9IIoYrmoDtAdfdSRN2CLid5b3c3oS+OWfBaDB6ZhKZRsmKZGmXbZfgxc3JTeUETN6WTZQCGukrbQd0QPoCA/Ml6vFzttVBaSBwi8+VdwOP4XUI3NSHTe2bn5nfXIbOZ0iOb4d9TW/vLrBg9hnoOR53m6obVoMh9zTblKSaHDY1dWjwgDCbwwrOcz1e6ulr33vweOPUZkbJWJLJXiPnPenDGNuPdgNItBy0PI/7w2cA89IYexKc8JruWjwV+AnObhr7FJyA2Zgw0Fg52SRxEr2NogPfBEd+/fv7APlCfs16r2FpnfkuPKufyBMzWNG8xCwtdoweQu+w15lj5ZPlG94GsENbX/XstHR90za3xBs0zgmjV1fNLdYfGxdGHwlmV83SI2tdUmPw8Uw8Cyh/9Yg3MByVCfZyIO3aBpjPnIihzkFXVTdMtJUgcWZy/8jVo5/zmlWHGeQa8hTcHS1Wex8BTRORKFYR33GVrwVzQNPeZ/GtFDm4hfq9G/E07XmrCVlgq7Wl3v4u+8mfKvir+bLHIhd6dBhEr5hnZNECCOygYm+G/G55p0YbxCJwLrimKpTwqcY5idt34WEzi9daPCXj6Ctc4+HNHuU4StY766CAhD4Dz4eJyczxqjFOsHTWfCGC+aPDYFmWoLYwiz+eyih+JRwRECWdkpePVqOzMjxbTZZeIt5gNzatM50ZzYnMFsrTlxTFgyOtrm1/Y9F5mx04qT2rrN1wG6Iensg8ByPikttMtiU25+4QTWupU7aJ7LTIs/TU/4RYLfbTszGuTiOgrpSchT8LaOtQcm7gYMF0km+wMFSkg5hEOLUxJoupWzIgazI2UVGXUoDUsmCn/z6eFqhaDeDVsJablJzatmwBOtObZdOYfL9RjNYQ4KuGnrf6BUrgFp7GbdNtsuwMZQ+BG/hThvZx3fPjcyVRzlBcXXuoIYZaMA7F8xH/GN12m29NtzagISdluoX/+sSL3IiBcP4LqRu2crai/Q2zZUEM5p7ETTcLA8Stfi946Aplfv+lPVoRWTK0koCbbErn9+bK9gYW5JWmpkBaETbhjv43kTHmKL+qoyHxNrcWFTNTGeKuG4e/tRyvWikxP2uIz9GUe3evTtp0TuofIr5WRIwk+po9qL3p5upw+qMfvVQ6PdJFm4jmVvfUWFujXEfbJBZw9a7aHMWWAclOVzr0rY2VYUzeavdLoVFDKa26KwD8XRsJUiVwUyVcuXD2GzXTyqCFj9V89XZP2f/LgEOOBowKGueZXbKCguN1xbq7qBRtkx4KlgHEMqdNOHjbtkhD51QPdiPWyAKhD/VckKo7v9u/yG34gsTpou3adPN/BBDvBu+qz6In6oj2S4bvF0HUEOB4Rrr9Sd9L6bxTM+xF2GuwBRXV1SsWb4V5xICvyEUXU`2-$cl = \"dktqJEFqoPEq0tpyHW+t+g0A5z1CM2WYZjA` H%B = \"R/l5GGs2Xaf3cRvrvK1nanLt6096Idh0` F#ay = \"QNwfbJZzxJbLJoAS6wD5rjfHAwo` n$eN = \"+TRK8gwDasJDqGQwNufuXbi0Y6X3EzfY` E$Q = \"Afj02wTB6swmDOMmUBKl0YqPUGAmx3mj` F#ft = \"wCGtg+3u3OfUBYPdq/af6ZVoYJ7/UddZbmK1Zw=`!G$iO = \"sU1SxZ+bTWPPsst0n2G3qVvXmytz72GF/Dk7IouwuME` Q$gZ = \"UWNbywprZj418vl75nvvduad1DXwSOjFCo6Ehv6sWqoQKzts8y/bduk2OBO6w/Ob3XV9U4EiAQ2r0l6ceDhoTqSK` ~#pr = \"rDRrdT/G3CyWJhlFPwJyqargFHqHSCgKoUMu3HDGhxn7WohEA1YONuK2TagGaNDqG8vk2Z7RQ7WLc3ZWG8L0mOstNa/bYPwAKhefJqWqoSJnQ1i6myiTb8fStXxQR9ptNBlonx9ez4seVsruQea7mLfWlfFPH7rus+XJepIsSrTTh4v6GiYq1xkcCHSwEK6cEHGm09Leu2MQRCiRQ8U7zGCQjcdS9Xsj0/XDmsVyPW2Kk9EblA4atSsaaxnAiyxX/SZEnbn3L/cPI0AqMGWumQBN+kDQYr9Ez5H3aVhMIyKE0JCD/8NfLpSvSVP/XnzvFdFdpORN7xW7z4iiR683ef+wu4CsNyVYpDIe6rpupAFcsv8uXOuzXyfI67HfvIWNYMD8iZD/whCQ3AEh2u7TCIUoI6L4g`&!&oG = \"XOwh26ByinkEBUnj6JYyAyG6Pogtg8f5ZIeHJwEuLX3zRu/HhwD8pXT4p3rMXhURL06HWGS+mRJED6xdIPObueNhlPDsnAA+Jp+xVBwlDfqEeQ3gQZhbTJK7Tsc6uDVhE3JlkB6+PUEDdTBq1zaWJgpGWPkJFmAFM0lcAyeEY4L75+M4wgYVmOOXesWfVFlWlJgx9j6RqhvlgwrOmo6UwNLU/sqsxK7dQw1vKslg3qYko6saw9snTERvFoCfy4/JBdLtWPYkEgFu7OAbWUjTXfPQvuSNCBMYxfHJEU5/sGlqPhlFPbIdM6IogZbtGxoHMi7DPPl7XxhGDeJVu47VZqggct/pXoq6m30yK8BA3lp3fsDpFOzWyzZvhbqkqNVE2KIxFXL4aG+TWVRqjDfhMvYv5662n0HfQyvVhI3ViyE6eNSXUmo0cSDdCH+s5fcq20G2vKS0QLAXUUVO966s+2VxCN+4/M1N0ZgkbnaSHQ92M9gPbQZqstX7VCXXUuT9cWYmNnogsrJoXtp+C3eaTsyr+A7Psjc6hJzoHLwW9W0Qd69RiHH4WwOi/H4H77pMJOI1ux46B9QGKMJglscX9j0dam1+L`&C&pf`&H!j/4NHvML4pcsq3MvkaM3AhqEAHI30bVi+sjPrV7rQ` P%nF = \"74jKbQgCCCSweCxY5xm3RfzymxqRs40kgKxSqA`!$&o = \"aejT9R7nMP19KhITxmBxBaOBaJgGqR6+y4ZzYDYmBTjUY7nw7TGGm7Hp438XllTR`(@$z`/P!8qo8fCMEFHG785164bZu5KlOzaZbE/92zINLNcQ+c2z+PBCNSRT/nkAObS7v9HLu3KzZR0`\".%`1h!v8yhMDISy8CQJF073b9a6xB2lMix`!6$`/l!4IIhiEFPgpBJmPziEDdMl+hEws/AK+6ACB9P` r$S = \"1JY2qJxMa43yQJRXJ5DsaZWEsCMesyT34OV3khaxQVbiWxZjZ3g`!S$hU`#m!qR/XVEBpg/aWMbNx0dxYeet6ZZ/1A8NbCZRJ2+GgSuulVwMtOWtN9GlvXNu+Gy+LTPOiGhAK91uTK0AdScjX49Uvd++aleCNQ3mXK5DqqsopNEdlJKUDLkh1IIobHvW2yjORI0x/A0SVGIEjZMwBHb6ix1Y8gll/YbObgJRXfYbUuorCLyywROZMlEuB0dkVtRQVv24Zbz1RheXbhLnc1ELk++xAFfTNbgCGSwprUoeITRS/6D1cOXni+D5s3H5GO3X7cB7yjipUqaON6YoxILYqylPTTQsrqvr5XbZX5bSG+TL27i7jFCAFoIm170iytoVGGb2C2ZNMCW71Q4TL+kac3jEICKB57VmQlXlJGS8zCcMpUXpqZKG82vYJ7FreST2xOjOwd/d0Su2QWvTCgl8SiOxhW1odZ9lhb77dmMg6UmNmccvcpbG+RlgOKyR+4SN3PHlvT05i21KbTjxUDQhKNKqdyTi5GZr+a42WwXOpLTM1W/fsCzbbX3sD4COOgL3tgg4a+zDBOHQ/1NhtTsUYKLju2E16dWnl4N/g43lAT8MvJ8NQWMgvZ/+GEAPD4vxWysRaIgQFEVqEznGP8eXWjn+nOCXYQ0T1uD8IER+KWDxpDy7E1/Ngugb24TZpPBWUJ3xkVqlRm4DL9+RJ9OOzPhE3WB5AaC/4SQmwMkVR6ArBMgIVl8HGXHPjPVRonZ+da0/mPU1ecEWoACSJ0t+cqlfQ9+gPBRVYeBvzQQ5V2ChbmpwMeatJg3FF2b7ya7VgXBthk8tiqbMxEb8R9OJh2l0Hy9/5y3uwIHbPS3591UlRgFsNXPsqehQCP036Ps1RksCO/FW7hchEkKskrz/iwmw808Y/pu/Lb7HrnKMvGsCUnH5a218dLv77JdKD0SoZzAzwTRXySNQ+ugZ74Cd/4SrzS3tSi61qgsf0WTdBCa71HiKifRyvXrkl7YcvJQCtsmiLjWPiiQHkL+wxgAQmSim/2/ca8LihsrqOIK6cqHnJKBTd3sViif0Mt3aIID92n0H7Div+0mXut9dOISUMb/VOhTHnGuvQBL/Out/yBTEPog6ZJDpQPJyrNf7f/5AwIgcZym4UjaddB/EVxgnizPg+Tmg5JKgPEf3V4rWK6f98NT6xguMQrEInMScBszhO1x4zWCaAL/fB//0TgdPA5JF3a+aYgyQwszHnswR+gud5vq+YsqvMUBVzYRH5DznAdyhJKn089twvv4p9eFfrf+ZzzP3lkqWqBvfN28lV1MssQpOt4xDParY6fg1i9smVsLS3JooBWx80vy8KpNstWRP9AYtoY70pAZWpoU3a12RguJp8iExpjY+ZNr7a32XEUuxqHYD1SEPhQlt23x5dj6m56crFqijbxBabvTqD0ejYsvY99FgpzucZSpd4p82Ar6vJgGFVPbKJHKqnCdjzHqz8Q8LTEmVDo7iK2zB7YY9eb+hP54hKD4/8eaZh/P/4jP9KtjViwEk9rkYLSvDWu9TjZqQrgLjs6OWJjRUEMKUigeDPqIllAMulEvtqSuvAkwV/X9JBXzpu9RmkphbZ686pUGwSutmWZqv1e55jMD4qeRntcNn/3+lVC4t6bVTXCLt931oNKRel6DVPu5ifUuUBY21rmcqrI61bE9+9YDh2z5tgTi0tO8AuGBOQJsqvEH9Yhox0WbYONFoyGX+LBNJR5dNLlsw2yRCKm1qrEGioj3T0LWnf0rz9rTNRvbVwmFScDFvR3SVoppSHgfeoquVJpAWEq2wbfp+l3Oz8MpUhyxQEktTn8czZHHiV37Ufj0W+6lAIiTxmR1PpdFVwzm2iyUP07JcQcuWexRSmamyzIqPTU87rgbQC6n7+5FZsy1bG39PL4FN7EGHcKHhQJ+XrXDyycj8yc7v7UfTQsqlxVPowr6YaOizCH685vwlRF/0wwxpb+PHCD0=\";};WR360.ImageRotator.bE(` 0\"dh)` ,0km = 4;var oH = false` 50Create = function (cR) {if (!oH) {var nf = lH.get(0);if (cR != null && cR.length > 0) {nf.cR = \"#\" + cR;nf.oY = cR;}`!M!true;return nf;}` #$ew `!U.(cR)`\"S2kR`!o)`!s#fp`!A*` v#fp;}fp = kP + ko + kZ`!=$fp` l2prototype.bm` x0!jR || this.bM =`\"5\"`!,%;}`#<!s =`\"%/.kR()`$A!bQ = ac.fk.bL(ns);` l!gu` 1\"G.aD(` +#, bQ` 8#oD` /,oD` 4'hV` /,hV` 4'p` M-p` R(qN` /,qN` 4'gF`!J-F` 4'j`!i-j`!n(bc` /,bc` 4'ap` /,ap` 3(Y` .-Y` q(j` l-j` R(`#e#` S'Q`#*(q`#%-q` 3(U` .-U` 4'cl` /,cl` 3(B` .-B`!O(y`!J-y` 4'e`$\"-e`$'(e`\"(-e`\"-(ft` /,ft` 4'iO` /,iO`%$(Z`$-Z`&!(r`%|-r`&~(G`&y-G` R(f` M-f` 4'n`&;-n`&@(po` M-o`!0(z`!+-z` q(`$\"-n`$'(o`\"f-o`\"k(nS` M-S`&_(M`-$$`+>;rh`+M,ra(`,~3nn` ?)align, defaultVal`+z!if` 3# =`/\"\"`->&` >(;}` @%.toLocaleLowerCase() == \"left\"` U&-1` 1@righ` J(1`/[%`!1*`\"X;eload`1R*onfigFileURL, rootPath, hZ, ` J\"` h!Index`\"b#typeof`.\"pj !== \"undefined\") {` 3#();}` &!kI(`3/!`$`#ri`$_$`2W!`!6(`2Z!` %(`1-*` Z!settings.` L*=` K*`!4#` D%`\"2$ =`\"<%`+|#B = `!Z!`+N#o(`+W$J` \"$ff` \"$hD` \"$mU` \"$loade`#R!` \\&eP = 0`/7#o`\"H$` *!db` \")nV `&-\"`!$#N =`#U\"`\"22`+9#f` 5-`\"(*fX`!6&bA = new`3-#g`!##b`!4!` .%bN`$7#`%0!Callback`!O)dV`!m)`%O, = `%T#` )-`%U+ ?` 1.: -1`%L!` ]#hZ` E-&&` 0\"`):$`!Z2hZ`%5#gN(` D!`'w<i`+ *db` s$`$E!db`!P\"`#.!Y` 3$bY.fi(!` @#);}` e;lz`,\",` k&A.ly()` q%V.mo(` P>iV` GGlO` O?run` .(`*z*R` u(cR`-@$ ||`&b\"cR`)c$==`)g!`*7!` ;)` 2-throw`&^!Error(\"Player ID parameter is empty.\"`+G$cR = \"#\" + cR`0q#Y = cR`.%\"`(**fullScreenOnClick =`'?\" &&`,]#H === `&@%`#/%m();var bn`)'#;jQuery`\"]$).click(`#y)bn.rg();});`.}\"`,\"$`!l&` +!aR(\"wr360UpButton\", ` \"+`+Y#sj` C3Down` M+` ('` W#gU` G3Left` O+` ('`-($d` G3Righ` O,` ((` Y#jA` I3Zoom` P+` ('` V$D` G3Play` O+` ('` W#kp` G3Hotspots` S+` (+` _#pQ` O3F`&0%` Y+` (-`\"&$a` S3ThemePanel_` \\%` ((` Y#ie` H4oolBar` R&` )#` Q#n`!j4` z&Back`!(/` 2!`#F$W`#t4rogress`!6(` ((`3<$`'.4` D$Num` O-Num\")`)%-removeClass` ]#_p`+5!\").add` $1`!>#m = ` _,innerWidth(` ?$J` /4Height` @$iR`3$fJ` ,\"viewerBackgroundCol`.%!`+(-ss(\"b` 9*`)i%f` n$`,\\%rootPath`!X#N` 0-configFileURL` `#`2W$`-\\\"r`4T$`/g;gN`/l)hQ`/E#!hQ || hQ.success == false`-g%S` {$`'i\"y`0q?aR`!!)stringToChange, oA) {`.!\" ` .*.replace(oA, oA + \"_`&3%oY)`\"'<oQ`3&5qX`!,%`/5#ap`#i$aR` >\"ap,`2Q#l`!A%\"#\", \"\")`#k#aY` D-Y` M$B` =4bj` E,bj` N#eN` q5Q` y-Q` M$Q` B/`2s.useOldContainerLayout`$p-hq`! $hU`\"s#` )&`!3$hq`)}$c` g$`0d%` 27image`1-%` )<2` &@toolhead` {B`# !` %A`2s/` 37`2b/` 38Up` \"FDow`0t+` 28`3M.` 28`3=.` 28`3%2` 68`2m4` 88`2a/` 29`2Y*` TB`2G(`\"c9`20.` +@`2+\"`+3#` ?,cl` G$menu` ?%B` 7-B`+'=e`0:%` M$eN`+'=e`+7-e`++9`1G\"t` E,ft`(^2iO` :,iO`)R6p`2]%` F$pf`+A5qX`1wCjy`/^5bS`-(%`2D!T` \")`$j\"B =`!\"\"`02,sm.cD`.&+eventTrackingAlias`#F#` 9%googleE` <(`\"*#rK = Date.now(`&9$`%E!`3X%bm` 1$oQ` \"$lk` \"$pS` \"$kO(`2X3ov`\"^,`3e#ac` :3Z` :3` 9/kR` 4`$%&hj` Y3`\"_\"ootPath` F<lk`$\\5dV`1z(jQuery`(^#R).append`)d$);}` 5(pf).css(\"width\", ` N,innerWidth());` F1height` D4H` 9!(`4&(qr`3e$qr();}` /&U` 0%U()`&O#toolbar.cD`%$$bd =`!%$\"#`3'&_\" +`#O\"oY` D#jp` 522` 9/bd.hide` ~$jp` '$if (!`*|\"G()`![$` v!null`!a#bV.iF`\"#!`'{#bd` \"#jp`#,*ja)` s$`%-\"bZ.o`$;#gu + \" ~ `!W%`(`%version`&/=eG`&93(`!?\".browser.mozilla ||`\"|#` 1%opera) &&`!4+zIndexLayersOn`+ $;}`\"8#.ajaxSetup({error:`!=&XMLHttpRequest, fr, ec) {`\"Z%gA(fr`\"h'gA(ec` \"*` W*.responseText);}}` E$`\"b3im`\"i,`.U\"L();var aW`.f$fN.length != 0`%<!aW`),#`%D\"mY`%E!`!Q(\"Could not parse XML config path.\");`.($`%m\"fs = 0`&I\"dn `)}#`(?&dN`!\\$dN.as(`*=\"`&I#qY`-\\)R` R)`!_\"av`$Z%pL`+&(f`/s!true` 9$ != lH.get(0)`/n'`)S&` b'fT` j*` E$`)&S`\"y!` ,(`#;!`/%\"i();} else`\"6$q();}`'8;kO`-(5licenseCode`$P$> 0`!($`-5$` ;'`#&var bu`%1#`%A!options = {type:\"GET\", url:` [(FileURL, dataT` D!text\", mime` '&/plain\", success`(('gi) {bu.nd(gi);}, `(E,e` ;\"lW(e`\"|!`$v!`&M#y.qT(`!f#)`/o%`)>!` .%`#4=md`'~1ok = new ` R!`3y#k.src`(:$gZ`+g<n` m*`\"H!`%I4`-Q\"K`\"b!` '!im`36>lW` t)e` `<dQ`/S$` Z@e`3_-`4J(`([\"`)*\"` J;gz` L9Q`-{'` J:D` L8ek()`*+%||`)U$`!=EqS`(e5`*8'` d$var l`(N$.jh(document.location.hostname`.5\"qt` B'` #!hV` 4\"pP` *,pD` M#V` *,qN`4'\"lu.indexOf(qt`\"R!-1 && ` -'pP` \"2qV` 1#`#5'`#x!`\"3*`\"o:jh`&L*A) {var gr`/K!if (eA.substr(0, 10`!0!\"http://www\") {` I!11`-C$` E-7` H)` I%7` 858` G&s` F(8` 954` L\"www.` E%4`$y\"gG = eA`#0%\"/\", gr`#{\"gG`#<%` @$`.R\"` V\"pa` .\"`!#\"ing(gr, gG`.O$ pa`#C<a`(E-`&g%ci`*1'`$W#`&@MkH`&-,cZ`&5$ != kH`!&)Z`\"^&.\"`%x&` 5(`11$= 4`&E+` w$ !`&E0`&K+`2q#` 5*`\"n:dQ`/01f` 2!` q!`,K%`+EAjK`/,*W`\"C#gW == null || gW`\"K$==`3c&`.@!`3Q(mW = ` |/kR();try`(T\"hy = getBrowserId(gW, mW);} catch (kV` o1if (hy`!M(hy`!4AfW = hy.split(\"^^\"`%:\"f`\"/%< 3` I1`$j\"r = fW[0]` Q!` -#` y=`%E#` V\"2` P(`%y%`!Y9hF` U\"1` U\"hF` N$!= 12` }2`#]$an`'l$cr +` ##Z`(*!aa`,U!for (var i` *! i < an`*4$ i++) {aa += an.charCodeAt(i)`!Y\"bD = hF`+V)` {\"e = parseInt(bD, 16`#j\"aa != ae`\":5kS` g)6, 1`)}#J = Number(kS)`'_#Q =` 5!= 1`%XA` 1!gz() &&`\"n\"az`3F\"`(W!`$L6`(k!`0+Am`,\\-jQuery`!6\"iO).show()` H<hD`-<5o`#A!0) {clearInterval` 5$`\"v#o`%!\"`\"N&pp` <7pp` P#pp` Q\"`!@;o`\"l!`!O,`\"?(pf).find`\"O&`'f*` <,appe` F$po.format` )\"nF,`$H\"iO.replace(\"#\", \"\"))`&g#p = `#[+;p.attr` ]#B` ]#pr);p`#}$`!e,iO`!i(ft`!e,p`!Z)oz`!Z)ft`!M-`!-#hV` \"#gu`!h$y`!a+ft);y`!\\0oG`'|\"z = y.html`!q#z !`*<#oD) {` 5#` )$;}y`&#CnI`$W0!`!Q(cl).is(\":visible\")`$R+cl).remove(`&!#aL();` 3,unb`#T%oO` 2*pf).un` \":` 2(,`!i'event) {ow` $#;}`!+.` 0I`,|!`-|$`!p4\"mous`\"Q!\"`\"35` >\"out` 0/` U,`!B0bn.g`4c&` G9out` F9`,Y#)`)|=mY`%B,var configFileURL`0v$fN`&g!`4+!!=` 5+&&` #*`(e$>`(g!var el ` F+.lastIndexOf(\"/`4B#-1 == el) {` 3<\\\\\")`-0\"-1 !` N#`*}!ath`!o$gf`!j)` 6!&&` #!`!Z'`0=%ek`0@\"tru`0<%rootP` m\"path;} else` +.`!]*`3#&el + 1)`0z#nL` 34` @$` B!jF` 7,`1a#`%Y#` g\"` A!`!:*+` *\"n` A+`%*:ki`%40hI` v$jF`#A!` '!settings.crossDomainC`!d!Loader`#4'` \\!\"https://www.storeimaging.com/Request-EAcju5ZxyEkezR94gq6A.asmx/Get?url=\" + encodeURIComponen`.j#jF`.F#bu`*\"$var options = {type:\"GET\", url:hI, dataT` 3!xml\", success:`\"_&di) {bu.mO(di);}, error` 7'jk, fr, ec` C#H` '(;}}`#4!!`#x\"by.qT(`!O#`.0&.ajax` .%`)T=dq`$=,`*~\"q = new ` W\"lE`\"u\"bA`0y\"`&1#eP`$l$bA`$a&bg.fE`$y&bA.aw`(+0` 4![0].cS != null`!7$bV.lc`,V%` b%av`%E'`,f)R).css({'background-color':`!N.I.fullScreenBackColor})`)C%`0P,` ]9viewerB` 4%` d%`\"|\"E`#;)cL` q!`#7$E.addEventListener(` A#O.COMPLETE, `$q#prox`!N#lZ`$ #` E@ERROR` Q1K` U-Loa`2F#hj()` 9\".bA` :#bB`\" )dc`${&`-#$`0H!`$]%B.hu =` H#`&T)km`\"z#bB`!c4dK.PROGRESS`!j0nN`!p*` L9`\"K5pq` ;G`#w8n`$$+bB.Ini`+K#`#81U`#?*P`'A%` 8$`$[5f`\"\\9mP`!;+` M8`&)9` =H`#I5ml` U-`\"d1`)V%graphicsPath`#,%` \"#av`+2(`0S&ontrol.qc` 5&V.lc`!,#fX +`,@$U`,#&` +.B.bF` 0)bB.kD(`!p&kE()`2?<mO`.%)`/q!`0i!n`0b(V`-p&`(a!`#2#browser.msie &&`%V#by.pA()) {di =`#\\%arseXML`0h\"var ip` 5%(di).find(\"`\"$\")`!%!ip && ip`.k$== 0) {`!##Z.gA(\"`$i!: Cannot read c`41! se`\"2\"'` n$'.\");return;}`!+-prel`4d!\").each(`0~)V`$Y&eH.image`!w&`%p!.attr(\"` 6!\");});` r-userInterface` g<bI.hb`,*%by.bX`#t#`!#)showArrows\"), ` P,);` $*gj` LBTogglePlayButton` j.gj` k-w` VBZoom` p\"`!`/gw` g,iT` QBF`2&`!\\3iT` l,bY` VBHotspots` b4bY`!e-U`#ADolTip`\"W/iU`!]-z` NBProgressNumber` h/bz`$K-x`2G2nn` q0toolbarAlig`%F0x` m-H`!m(cz` Y7BackColor` e/H`#T-C` l(je`!O9pha`#R/C`![-X` KEBack` a3gX` g-`!_)`\"N2p`$O&`\"L4`!_-f`'m&`#3$` g>` B/` z.` 2/`!-,`)**T`\"q\"`)?L` P#`!/.` 21`.$2`3P#`-t<`3v$gp`$c>dragSpeed`!J+` Z&`\"a)` /$dJ`\">>disableMouseC`!r$` p1dJ` p1inB`3x\"`\"u&` t>` B/` 3` 7/`\"62oubleClickFulls`!\"C` B1`\"I4` 80`\"^2u` mIZoom`-K,` a&` m1qc`0'CighresOn`#H=qc` t1mouseHoverDrag` s>` B*` u3` 7*`!#1hide`2C$OnLoad` z>` B.`!)3` 7.`!!?Zoom` tLZoom` AZoom`!/1rowSensitivity`!4(dM`!,0` B*`!%3` 7*`(Z2rag` lI` B+`(L4` 8*`-l2rotation`-c<bg.fE`0_?irstImage`/H,g.fE`0Z*g.`!8!e` T>` B\"` `.` 2\"` f,k`3f)`$C4tateDire`\"I!` i.k`3c+g.o`*Z)`\"H3orc` Z8o`*K*bg.g`*;)`!Q8Perio`(v,` ]!` d,bounc`#J)`(J2` B\"` `.` 2\"` `2Rows` RDRow`.;,` [)` r,useInertia` `>` B&` p.` 2&` r,i` 1\"RelToDragSpee`,j?` B1`!&.` 21`!,3TimeToStop`$~>` B-`!\"5` 9&`! 3MaxInterval` oE` I'`! 5` 9'`!*,flipHorizontalInput`#P>` B/`+>/` 3.`- !var hH = `,}-h`/~#\");if (hH && hH.length > 0) {var kw = 0;hH`-C/`!b)` k)`-p1var bi = new`\"P#kc;bi.id`!Y&`#j)d\");bi.type` ,2type` >\"renderMod`*B)`+03` C%\"), ` P)` g!indicator`/;!`,k>` B*` m#` '*` s!disabl`(d@` B$` e#` '$` a!activateOnClick` K>` B+` m#` '+`![\"e` LM` B-`!k$` (,` |!offset.parse` Z0` :\"X\"),`$z0` 8\"Y\")` g!margin` R6` :\"` F#alig` 17` :!\")`(L\"dI`#1?bsolutePosi`2:$false`(j\"dI == true) {`&h2kc.bf.au;}`(T/spotinfo`(S1bi.`) #Info`(c)H` .&;` 9*.sr`44?src`$Y#` L+`#@!` ((ur`-k)` Y2ur`-d!` I.` [0Targe`-E)` \\5` E\"` e2` 6\"` p-tx` X?tx` a0tx` Z1Width`+K>` B$` c2` 6!` j0Color`!MA` E!` h2` 6!` j0Bk` VF` E#` l2` 6#` s-fntHeigh`#h)`\"k2` B%` o/` 3%` p-img`#ZC` B$` l/` 3$` j0`\"ZE` B&` l2`\"k4css` [>css` c/css`!_0NoScal`1d)`,H2` B&`!]2` 6#` s-lbxShowClos` c?` B(` u/` 3(` v0BackCove`#v)` q5` E%` t2` 6%` v0`1[!Activ`!pB` E'` x2` 6'`%%.` 4$on`&z>` B'`%30` 4&` q2Data`&!?` C$` k4Data` g6Param`!dC` G%` o8` <!);`2d/cd`!a!`2S=.` D!`\">8text(`!1/d`\"F!});}`4c\"bi.disabled == false) {V.bF[kw] = bi;V.hi[bi.id` *#kw++;}` `\"} else {return;}var fV = `!I#di`\"6$images\"`!3\"fV && fV.length > 0) {var bW = 0;fV`\"T/V.aw.ep`#l>highres`-P%` R#);` #\"U` 9E`/1&` S#` \\#row`,r)` O2row`,{!` J%`%\"1`\"t!`%\"1var dp = new`!%#lv;dp.src`#Y&`!&(src\");dp.label`'{>` B!\"), ` K$` X!delay`!}>` B!` V#` '!);var hO`$]!`\"7/`&e#`\"35al`\">*q;al.sourc`,M)`!u2` B\"\"), ` L%);al.offsetX`!m>` B#` [#` '#` X'Y` ;DY` V)Y`#N!bF[hO] = al;dp.hi[`!]%` /#hO++;}`%M1`&f#`##1dp.cS`#*)kB;` 0!`%_#`\"w<rc`$\\#` L\"`*1!V.aw[bW] = dp;V.ky[`&P\"` +#bW`!f\"`*V'`! #Z.gA(\"ERROR: Cannot read config se`!u\"'`*i\"'.\");`+4$this.dq();};` i\"ImageRotator.prototype.mP = `\"\\&e) {` V\"S` :>nN` \"Vl` |8` %!jb(e`!!>Z` \"aml` V-`#y(e.errorMessag` L>pq` \"hdS` a)`\":$fs++`*!kt = Math.round`&m!.fs / ` $\"X * 100`\"h#cq.il(kt` v=jb`!t-if ` x\"qS())`1_&` /%fs <`!.$` 5'`$\"\"o `2o#;try`!~#`!H\"99`$D$V` b\"bU.aw[` &!eP].F` 8#bV.cD` :$,`!#\"bB,` \"#A` \"#dG` +#d` *$aU,`/U(.pf)`35\"` A\"V == true &&` K\"reload`\"t!Index >=`3P!`!>$dE` U\"` 8,`)z%` t%settings.fullScreenOnClick`!,%|| typeof`!6\"qz === \"undefined\" || !` 5#`#s!`!7,bA` ~&bg.fE)`#m#cq.destroy`(&$lo(`0t\"qL =`!+\"jp ?`!5\"jp :`#F#d`\"p,`$U!) {qL.fadeIn(600`#O$.proxy`-*` W!ke();}`$!\")`,w&qL.show`!M$` @\"`#\".apiReadyCallback != null`$?%dV !`#@\"`!)$` C5(`/K&API`/1\"`!)(`%-5`!-,`!\"$` 0*`\"#$` E+` M\"` |'rK !`&&\"` *%gD()`!4$`!~%m.Event`!S%?`!u#sY.rU.sc :` #*G, Date.now() -`!z#K`%A$rK = 0`0/$V`)A%} catch (ex`,6+\"Exception: \" + ex.m`,H%`*|;fK`+.)deltaX, ` #!Y`'5'en `\"Q\"`*6%`'I%V.aF` K#` P&`0S=`/{.if (`(V\"jo`,''var `31! = e.` %!`'l!` -#`%!%`,T*`,7#eE` L\"`,,&hs` T\".src`(4g`(=0`#\\<l`#n*`0][mH` a)jk, fr, ec`%^,Could not load configura` S!file '\" +`05#N + \"'`&2\"fr + \",`&>\"c.toString()`!;=ci`2h,if (loc`!0!.href.indexOf(\"https://\"`)&!-1 && ` 07` >(||` 24localhost\") !` -;127.0.0` B$`&3%`'z\"}` &#`)O#`$d;`3E!`.;-dG`&K$`3/,.width`'(\"dA` -5height`0@$aded`)R)kY`,}$nx` \"$toolbar.m`4Q$`3l#`3T'qa`!Y$qa(`,($nt` Z$pS(` B'ek`-F\"`\"c!`.`%ci` +') {var lM`\"!#;setTimeout`13*lM.md`19\"20`(h!`#9;g`(M*bi`!$#ax = bi.i`)p\"ax`0 '` 7!ax.replace(/ /g, \"_\"`0u#bi.renderMod`+T!`!<\"kc.bf.au`%=&\"wr360StaticSpot_\" + ax + \"` &!`\"d!oY`*i%` J)Dynam` 9;`**<U`&%,jQuery(\".` ~!hots` w$` m#).remove();` >*rollover` 63`!+;nt`!:,var b`0G!his`#!bn`-i+`!:#`&-\"f).bind(\"selectstart\",`-J(vent) {bn.na` '#;}`!~%` W+mous`!w!` L4onMouseMove` GBdown` N;Down` GBup` L;Up` CBlea`\"#=Lea`\"8)`2(#` `#dblclick` M4lJ` (\"`*}$` P-touchend` I4mr` P-`+3%jp`+a$jp` q[` X%`!K!`%c9`!?/}`#O1`(\"\"O` S0ow`$*3cl` \"W`$t&`!c?k` ?B`'j8nm` >B`$c8L` =Bcancel` Y)` Z#`)v4bc`(xEph(`#o6` Y\"over` G4gT`3.$` E;u`#u5` ^!`,u!`&*!`-*#`2o)) {` 0#oa == 0`)_#a = setInterval`2d*bn.oT`2d*` ^#pp` Z'pp` F;nI` _\"5`32Anx`.q[sR`#2#{`$S%:`!C,tj`!M\"`-K#` /-rq` 5'out` /.M();}`$D+sj` x>sQ` |:so` {;sC`!'/gU` x>np` |:nr` {;lY`!'/hd` w?v` |:m`&?#`!!5mK`!'/jA` ~8`*{(t`*=%` T+kp` [$`/s!` H3f` G4pQ` ?<`'&#rc`%o#c` a&`0U$dN = new `(0\"ej`\"6$.replace(\"#\", \"\"), \"zoomin_button\"` *#out` *$`2y$Y` g)cP`\"G$` `0hotspotso` l(` ,%ff` m+qZ` g1pQ` h0fullscreen` q)` ,'` o-eg` s)fb`\"i#D` l0`4G$this, \"play` }&bn.mR, \"pause` )*p`,)!`!)%.cD(`&.+a).`&.%`,g'`1u(j`0F3` S%move` E3D` <<lea` E4o`!-(}` R!ih(!`%4\"A.settings.control.hideH`$i#OnLoad);`.F;pS`.U,if `%\"#W`'Q#` '#()` $(bV) {` ##.eh` -$.aF,`/&#;}return;}`!u\"kI(` 2#` *!fm = `2[)R).innerWidth()`/|!`.I\"`\"A$responsiveBase` C!`1X$` n\"J` \\4Height`%-+pf).css({width:`!P#, h` H!` )#J`)x$lB = 1;} else`1g\"ratio`1i#.iR /` $\"`!T8`\"V#J` N$fm *` b\"`\"F&fJ <` Q5Min`\"'\"`\"H)` -=;}`\"%Q`#=,` P!` %=parent(` 74`#E&`\"[$`\"u@}`&Q' != null`\"\\$gs`%d(bV.H` 2,`&t.`(b\"av`.#$V`!H'lB;}}`(<;gs`(K,var cW`&T+pf`'H+var dk` .4`' %var jU = dk / cW` ,!ks`!Z$dA`#-$dG` 6!fB = 0, cw` \"\"fa` *\"fF = 0`\"s&dG < cW &&` `%< dk) {` ]!` k$` b!` :#;` g!(cW -` 8$) / 2;` w!(dk` /%A` 2\"`(<$if (jU >= ks` y$cW` v\"cW`!w& *` }*0` n(cw` g*` Y!dk;` i!`\"x!`\" $` ^$G`!e(fB`!a'0;}`'s1\"text-alig`1r!left`3Z%d` <\"margin-` 6!, fa` )2top\", fF` /+`)\"!\", fB` *+`(6\"\", cw`'6'jp`'/$jp`!!9` 0+`!/+` 6$`!--` 1$`!1)`/ \"aU['_viewPort.x'] = fa` Q\"` .*y` 6\"F` (0`!-!` :\"B` ,0`!3\"` <!cw`)n'A.iq`1#!`)K$dZ`&_$bA.aw.ep`%($` |1;}}`(B\"P = \"AQIDBAUGBwgJAA\"`)q:aP`2Q5dV ==`2/# {`%p,append` *\"ap`->+l` 1+Y` 1+B` 2*bj`%;'nS.indexOf` F#r) == -1`!6+` U,aQ)`,<>aL`,J0eZ = \"\"`#?!gn`#s$gu` ,!bp = 6`+g\"g`(h!` 9!mz(`&0#aP`.Z(ek`$e!` '%cr`.l$`+s%cr.length >`4`!if (`.q\"gz` X!`!K!`'-\"u +` M$`*b%` 5&cr + \" &copy;\";}}` ;$`!{'F`0]\"eZ`!-$!=`!1!`\"(!Math.max` 4'* bp, fg`$A.`(h*g`/'\"ij`#6\"`\"G&Z`\"?.` t%`\"G&`\"G%` :(`%1$\".\"`%+&` p&i`\"y!`!K(eN).html(eZ`!b*eQ).hide();return;}`!e!document.location.hostname`/5&j`#V%Z`-j+`!&%`'1\"c.format(ij, eZ))` [%` D-`!E\"`$%!`$~)`#x*gn`#SO`\"F-`!N/` *!hV, gn`!N4`#'&`(E<jV`(X)image`,U$dG = ` -!`,7\"`(=\"dA` -%`->\"` 1\"pS();` n;ng`)^0`4K&`-;2if (fB >`4O&{`%A\" 1;}` ##`!h$/ fB`!&<mJ`-N5`/(#`(o\"` o(ng(`#a&` -(` M!`#E=kY` y6U.sM() > 0`(U%bA.settings.bg.gg`)%#`$w\"o`0e'` 8+`0r#` l$* 100`,}#O` N$eo`1a)` Y%control.gp`!\"(O *` {/` B&`.e>mR`\"O)`&5%gJ`.?(gD(`+!!tru` 9%sm.Event(` z\"sY.rU.r`06!` t;p` }2cJ`&a?r` E3o` :>l`$y*e`$|(pY`3v(` h'`!0<`!u3bV.eT`1o$`\"4!` j&`'-\"X `!)#` *\"rI` \"*hl `#i\"`2t\"u`%Y#`2a#k = setTimeout(`'/)bu.jz();},`%S#w`$5PsP`\";>rq`#SVrM`#;ntj`#t5sx`#\\C`#n!`#x&` 9\"`#!~`#KTmt`#-6eG`2S!`\"6\"i`\"4$`#W+`!:(`'#!` 7%dn`-(&V.lc`.K%;}}}` 2!jL(`\"{!, e`$o=mK`(Jov`$w5f`$}%`(dU`$9~`$\\[T`(dVso`)@VsC`#xnsQ`$Q5ta`$I3`)`&`#]~`#kpf`#-6R`)!'`)F&b`!,,l`!e! else` +#iV()` H'`!GFk`(k?`.,.e.stopPropagation`$9$dispatch`!$\"new ` u\"`!.(` '!s.hG,`$F\",`%q#`&@=nD`%W2kU`%N$` B;o`013` \\!`%r\"`!#<a`\"Y/preventDefault();`\"k0`!;<nMouseDown`%J1e.button == mg`/V&pm(e`&'bA.settings.control.dJ`&+'`\"J\"x(e`%x%` m-D` y!`\"$/`)=\"P` W!`!p;jB`!u-var cC =`%K#by.fS(e`%p$O`)d#`!u)bg.flipHorizontalInput ? - cC.x :` \"!` \\\"ei = cC.y`#J<kx`%/2f`+)!`+R&`30%`0_+sq` \"$e` D*sI = Date.now`3J#!`%]! = window.`#M!;}`!j~`\"e#`4I\"W` h%V.aG.css(\"margin-left\").aK`\"-$jt` 36top` D$}`.=!kZ = \"AgMEBQYHCAkAAQI=\"`/U;u`#t)`-4(eu`,N$ &&`!@\"sI != 0` :(`,UErC,`$&' -` j$);}`(#\"`$N!0`28=q`!R;`+6!`!i%rZ`!7WW`!^0rZ`!i%rZ`!N@`+G#Up`0q6`*dBsu`%P$`(:!`3a'`'x!` %'ff`,\\ELeave` WjQuery` G\"pf)`&}\"cursor\", \"d`,K\"\"`)h$`!z%`)p&`!I`lJ`!u*, target`2h3`-}/`\"(F` ,:oubleClickFullscreen`&>$rc(e);` W-av`&d'` 2(!` n5iu`%M,jL(true, `\"R&`${CMo`%%8qS`1=!`\"7B`%.Gpointer\"`.AVcp`.;\\ha`.n)hg += Math.abs`!t\"cp`*P$dO`!1#qe` 5.ha` ?$ei`&!'`+{3=`,,\"`+:&`1^'`#X&` I0`#b0mouseHoverDrag` K%` y$`1x&cp`1G'`!p#`&\\.` ]V`';#` a%pY`0X%||`#>#n` \"-kU`.],`!KC`!i&qY` e%av && `(S\"`!j%fullS`)E!On`)V!`!\"$kF();} else` +#`+h!` %!nq(e);}`(E;n`1A*e) {var e`4P%jW +`!`#`%~*var g`\"A%jt` >%`%z.et <` +#L.eY) {` v&` -!`!|$` F#>` 2%fd` =,fd`%&\"gO` h(v) {`!C&` -!` h(gO` h(M` =,fM`%t(G`+,!` '%jp`${!`&\"!V.aG`#t$bd.hide`#q,jp` .%`,s\"` P!`+8\"margin-left\", et`$C#` 0.top\", g`)j$bV.fP`0C>mk`3b\\eS`)*` /\"`#\"%hg` ,\"kx(e);`1E0`!B<r`2.5`!@Fvar now`!\\*if (now`&R$fY < 30`,=%lJ`!\"'`!\"`0W#Up`2((` U$= now`!m=L`#0\\`!7)` ,\"C(`#%Qnm` qWvar qg`${'` ,!K` )$qe`#%)Move(e`0;'hg - qg > 8`.I%qe - qK < 20`,q(`-n?bA.aw.rows > 1) {e.pr`3L!Default`)#,r`.9!rue;}`&@Pa`#cLea`\"s\"`!F+`!!Oke`!G)`!;4bg.rotate == \"`2N!\"`!R'` 1?onc` N!` B!gQ`%*$` B+bounce ?` 6#U.sM() * 2 - 2 :` *)`\"m#gJ`\"#?F`\"-5fl == 0`1G#bu`!R#`#U\"fl = setInterval(` W)bu.lN();},`!R\"`-}$`,Z>`2l<ff`!M?`#u$clear`!Y%` >#`!/#`!|!0`*F'` z;lp`!),` V!nJ = 500` ?<oC`!d0!`$v0useInertia`%t0dn`'k,`'a!`&T!`#P1`.g$eS`#].` 3%O`+j!gp`4(%O /` N%`4Y!p > 0.1`+T%nJ < 12`/U%qM(0, gp)`$B=qM`\"^)startTime, pu`&F#ox`!A$O`!9!` ;% >`&h%relativeToSpeed`(@3i`#D\"RelToDrag` G!`\"H!pI =` S.`-A#`($` X1TimeToStop * pu`)4%` .;`!0\"y`!K:Max`')$` K!nH`$],`\"c%;`#!!py * (nH /= pI) * nH +`#1(ox > py`%l'`/2$`#M&`)I)`1G!`*F&se` ?!out`*7*if (bu.ri` o'bu.qf();bu.qM`$l+;}, ox`/j>`.>6gy++`$>!`-d\"`&S$cJ();`(&)ql`)o>q`+9-`&U!M`$)3kC == -1 ? 1 : -1`3r&bV.h`/F!oM`09)V.eT() =`)W#`!g$bV.fo()`#}&` F(fo` <2eT` M!`!t<l`##5pY` k(`#&$`!Q~`!S|gJ`\"87`-[,eg.ji(true`/#pY `*L\"` )\"gy`00!`2<0q`21;me`2E'eo`&>=c`!c1`0+\"`!a4`\"|\"`!o'`/k'gQ = -1`!{)`2q&q !`2u\"`2_0q`2k$q` Q!`#R<co`#Y5ak` {)`+/$` 5#`! #ak`!!\"` L&V`!C7aV` O$V`!9Ajz`*#0`$_+` g!`$R8iJ`$c'O`$L=lN`!%,`2|$+`1%var tc`)\"%U.sd() > 1` 5!dragSensitivit`001control.` <+` Z!r`\";!c`1w%&&` a-> 0 && Math.abs`#X\"cp -`!$\"dO) <` E,`%}!ru`)R(`$M%cp !`!_#dO`\"G'`$n*cp >` 5,`*e%`*g\"` @(<` 9/`*b\"` 1#`\"q$cp` ~#`\"K%`%##row`#!C` <*`\"E\"` O*>`&p!`$T!i` b$ha`#*$ei`({\"i >`!'+`!r'ta(`'9#e` X'`\"N)i < -` H6sx` L2`-9=i`-@6rI` q,`#|,nX`!u,` 2,hl`$3-`/V#`/d+`!H:hc`!Y)show`!c#` $#`%)\"q.show` u,cq.hid`.U!` $lE` c)V, bh`!`%h = bh`#H\"showProgressNum = V`2S'I.bz` B\"tf` P!.qQ`$ $rO`.M*rV`#O6O`&t'`/J$jQuery(bh.kW)`\"0$` +&fj).html(\"\")`&=!bh`!O&useOldContainerLayout`)P,` f\".browser.mozilla`*q(`\")#` M(`!3*css(\"margin-top\", \"-1px\"`%;)` y+rY` z%|| ` .+s`\"^(` k=`!$#`+>&`$=-`!a4`%H$`%`#` /*`%|$}`#&N`$G*addClas`-#tf`\"P%? \"p`!`#_bar_anim_fs\" :` &/\");}`1Y!n`1V$set`3-$`1E*n.rV`1H'`!%)500 : 200`&y#il`&c)percent`&k(`#;/`$%1`&b!` Y# + \"%`$0!`! \"destroy`'b5` WI\"\"`'q-`$a#`#j*` /#` +&ja`$m%`)R&true;`!`#show`!T,`),1` I#hide` 2:`!R$;`+k$bZ` A,` 0&.od` 0)text`,'$eF(\"INFO\", ` 2!` f'.p` 9:DBG` B0gA` 99ERR` B0oU` 99CRI` B0nG` 99WRN` B0eF` I)lA` =#`%s\"window.console`3u#date = new Date;var kn = \"{0}:{1}:{2}.{3}\".format(date.getHours().toString().dd(),` n!.getMinute` &9Second` G;llis` 40mI());`\"(*.log(kn + \" \" + lA` \"%`#'#};`\"x%mg`(l$`/D,si`/f$parseInt` 3,version.subs`!K\"0, 1)) < 9 &&`.q,` =.1, 2`0>!\".\"`1v% 1;}}` $#0;}`!`&D(` :&2;}`%,\"ImageRotator.prototype.qn`(B,`%r\"`+I!`3O&gT` '%`)<#` 2!cl`0M#display\", \"none\"`&@&`!!3pm`!+)`#:$`!6#` \"(gT`/q(` .!qn();`\":#`+\\\"`\"G#`+i\"` &#`!i\"`!(<h`!^~`!$0m`)0*`(z#scrollX = 0,` &#Y = 0`3 !typeof `'=#pageYOffse`2x!\"number\") {` [&` @'X` E\";` k&` V.`4C$if (document.body &&` #+.` b\"Left || ` (0Top)`!A)` I4`!I'` Q3`!D1` D$Element`!V*` .+`!W4` 12`!`6` ]6`!q0` e5`&z%` |$:`!%#`%,%` *#Y`21&`%q3nP`(W-var cC = `/d#y.fS(e`4B%`'+*left\", cC.x -`,\"#` =\"pf).o`%S!().left` K3top` [\"y` E8top` I3`(P'\"` 5*eN` <#backgroundColor\", \"#FFFFFF` B,Q` .@`*8&`++!`+ +`#D%ow`#J!e.preventDefault`+q&` K#`#a\"Toolbar`$!)bh`+H$sD`*\"!` '!tg` \"&hM` \"&iz` .&ik` -'y` \"&r` -'jZ` \"&bh = bh` J#B`,D%`%v$`!W#`%n'cD`+q,`.I%iB`.A-`!{!`#^(bh.sR).outerWidth(true`#U#`\"=!` >,j` 64`\"_!` ?+gU` 64`#!!` ?+hd` 55k` <.jA` 55y` ;/D` 64`$'!` ?+pQ` 64`$I!` ?+kp`!15B`&v$}`$I6Translate`$])V, `&S!if (V.settings.bI.iU =` p\"`%&$`0l\"` {!_TRANSLATE_OVERRIDE !== \"undefined\") {bh` h&i18n`+^$` K/;}`%]/attr(\"title\", ` ^,.sV`*\"*`%q#` 6<y` E-gU` 5=arrowLeftButtonToolti`,6+`&5#` F@Righ` L;jA` J=zoom` _\"s` M5D` E=togglePlay`!3:pQ` J=fullScreen` M:kp` J=hotspo`\"t,`'E7mV`'D1var align = `'S*gx;if (` 6#= 0) {`!a#bh.ie`06#float\", \"none\");} else ` N)-1` =;`34!` F2` ;<righ` W!` ;&n`1g.-c`1s#`\"5+H`#s%` L(opacity` =.X` C(`!C%` 74iC);var cT`0w!`+2.hb`+9'cT += `/=$+` $\"iz`!&'gU).show(`!:(hd` ,%` {\"aw.rows >`#6!` k'sD` n$tg` V'sR` c/sj` ,%`$.#`#z'sR).hide` A-` .#}`$a#` (G`\"7*` $-hd` s&`#5.gw`#?$ && bh.av`3h(`\"X'ik;bh.dN.aH`0:#`!c$` .%` P\"` r1j`$82iy`!_'jD`\"~7jD`!k8iT`!_Dr`\"\"!qZ`!r1` 1\"`!m6bY` {(V.ly()` q*jZ;bh.bY` j1` 1\"` w$`,J+`(*%width\", cT`3}#`3V%`+s#;`,A%` 2#ions`,5)) {` U!`/4. = \"Zoom in / out\"` ~\"`-@0 = \"Hot-spots o` L!ff` J#`.Y3 = \"Full ` 6\"` F,`/z3 = \"Play / Stop` F#`2c2 = \"Rotate `-6!` A'`2I.` B'`-'\"` H\"sV` .'u`!($sy` +'down\"`#a%jQ`#K1graphicsPath = \"` b#configFileURL` -'root` <+responsiveBaseWid` 9!0` -,MinHeight` 3&zIndexLayersOn `&q\"` 5\"inBrowserF`$<% `(&#`$M,OnClick` 1*apiReadyCallba` 9!null` 7\"useOldContainerLayout` R*googleEventTracking` 3*e` /(Alias`#2(rossDomainC`#D!Loader` T*version = \"v3.6 (build 3.6.1.90)` e#i18n = new `(A.`$u%`!e!`(Q-` 0*.hG`(+!IDE_ROLLOVER\"` ;#lC`%I1ew = []` ~%lC.prototype = {constructor:` :$, add:` b&rotator) {if (!` ($ instanceof`\"2#Image`'7!or)`!=!row`\"T!Error(\"Added object is not an ` L(` 7#.\");}for (var i = 0, ia `,|#ew.length; i < ia; i++`![#` ;#[i] === `!u&`!93`!2)already exists`!B!}`!+$push`\"e%;}, remove`\"v1`!*n` U\"splice(i, 1);break;}}}, get`!='index` l#` '! < 0 || ` '\">`!;+ - 1) {return`)\"\"`0K$` -#`!O%ndex];}}};var lH`'M)lC;})()` 6!_i`#K(` :(`#d(;(`'')`1J\".fn.`&=$`'I(op`(O!) {var oR = ` J#extend({},` *$` Y&.defaults, ` Y$;`\"))ach`!8*` y!` s&metadata ?` |/oR`!*%` @$.get`$d!)) : oR;qu` *!, o);});};`!%%qu(qd, oR`!/#cR = qd.attributes.id.value;if (cR =`-C\" || (typeof cR).toString().toLowerCase() != \"s` 6!\" || cR`%,$== 0`(!0Can't get Player ID from the`\"D# selected elemen`)i\"`'i!r =`$t/.Create(cR)`\"#!ir`\" $`&N%;}ir.licenseCode = oR` %(;` 6&`2-&` 9&` -#;ir.setting`2k-oR` %)` >)`3 ,oR` %*` @)`3:'oR` %%` 5*`3@1oR` %0` B3`3e(` L)` 0%` L)`3|-oR` %+` B)`1P#oR` %!` .)`4'0oR` %.` b*nBrowserF` >%` x#` '.` L)apiReadyCallba`!%$` &,` F)useOldContainerLayou`\"#` &1`%G*oogle`3M!Tracking`%U#` '.` L)e` .(Alias` R\"` &.`&,*rossDomainC`&-!Loader`&=#` '2`(>#.qC) {` #!(`&d)`#A&URL)`(V!run`)&(();}`-16 = {`(p':\"\", `(Z*:\"` )#.lic\", `(M(` J!`(1)` #+`!R)` 7!`(<$` '\"`'q.:0` +(`'X%:0, `'6*:true, `&[-:false, `&;/` 2%18n:`1=&Transla`0-!, `&@,:null, `%z1` i$`$F3` 7$`%}/` 3$`%a.:\"\"}`37\"`1:.c = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\"`41!d = window.ac = {`4b\"a = d.fk = {iv:`!8&h, g`.z% h << g | h >>> 32 - g;}, om` 6:` D\"` P%` O!endian` L() {if (h.constructo`0C!Number` i&a.iv(h, 8) & 16711935 |` /%24) & 4278255360;}for (var g = 0; g < h`2b#; g++) {h[g] = a.`!S\"(h[g]);}`!$;}, mw`!`+` k)[]; h > 0; h--) {g.push(Math.floor` %\"random() * 256)` z&`\"r!ar` l4k` !, j = 0,`\"#$j`!~)j++, g += 8) {k[g`#k!5] |= h[j] << 24`$(!% 32`!2%k;}, iP`!0'i`!/(h`!4#`#4'i`!-# * 32;`!*&h`\"O\"i`!1&>>>`!(( & 255`#K+aZ`!0'g`!/(j`!4#h`!5\"h < g`\"F%h`$U!j`!-\"(g[h`!(\"4).toString(16));` 5)& 15` 1,`!E$j.join(\"\")`'R!I`$r:, i`!P\"i`#x)i += 2`%7&parseInt(h.substr(i, 2), `!.)`%8\"J`'~/typeof btoa == \"` :$\"`()&btoa(e.T(h))`'`+[], l`!a\"l`!Z)l += 3`+]#m = h[l`%\\!16 | h[l + 1` ,!8` '%2];`&c)0; k < 4; k`$&!if (l * 8 + k * 6 <=`!*% *`%]!`\"o#c.charAt(m`$O!6 * (3 - k) & 63));} else` H%\"=\");}}`#'%`$>)bL`\"6atob`#!4e.de(atob`#4\"h = h.replace(/[^A-Z0-9+\\/]/gi, \"\")`\"W&`#V$`)J#`\"i#`)C*k = ++j % 4`!N#k == 0) {continue;}`\":#(c.indexOf(h`\"u$j - 1)) & `+7!pow(2, -2 * k + 8)` ;! <<`#j!2 | ` Q0))`#]#-` A\"`&I)};d.mode`0%&b`0*!charen`0;'f = b.UTF8 = {de`)d+`#F(unescape(encodeURIComponent(g))`$N!T` J2de` A-` d$.T` V#`!J\"e`!K!Binary`!A-j`)[0`+:'j`+6+`#}#j`\"R!CodeAt`%M\"`)S(`!c,`+sO`+p\".fromC`!##`,2!`+n3};})();(`!.&`)j#f = ac,`4V!f.fk,`$Q!f`$N$,`\"w#UTF8, d`\"'`#6!c` G!SHA1 = `/j'`4U\"`/k$a.iP(c.mn(i));`\"a$ && g.asBytes ? h :` +&`\"9\" ? d`,(! : a.aZ(h);};c.mn`!\")o`(,#o.constructor == ` `\") {o =`&+\"o);}var v`!R!ar(o), x = o`+R', p`$!#r = 1732584193, q = -271733879`)f\"-` 8%4`$S\"` 8$8`2C\"-1009589776;v[x `3@%128`3?%x`3B\"v[(x + 64`)#!9 << 4) + 15] = x`+*&z`%[\"z < v`%X%z += 16`#s#E = r, D = q, C = k, B = h, A = g` d&y` h\"y < 80; y`.[%y <` k\"p[y] = v[z + y]`.+%var u = p[y - 3] ^` $#8]` \"%14` -&16];` e#u`0?! | u`\"H!31`$4\"s = (r << 5 | r` 7!27) + g + (` X!>>> 0) +`![\"20 ? (q & k | ~q & h`#/\"18500249 :`\"7!4` B#^ k ^` =#859775393` =#6` `)` g! | k` n\"- 1894007588 :` ^)- 899497514);g = h;h = k;k = q << 30` l!`\"+!;q = r;r = s;}r += E;q += D;k += C;h += B;g += A`*+%[r, q, k, h, g]`()!dB = 16`**4e`*7'e`*9%e`*8&`*0\"`*<\"c`*6(e.HMAC`(~)l, m`!9\"`%[#m`({5m`/y!de(m);}`1m!` 25k` C$k` B%`)G#> l.dB *`2R!k = l(k, {`+/#:true}`*,#g = k.slice(0), n` #)`'c&`3b!`3Z\"` t$; j`/7\"[j] ^= 92;n` $#54` x\"f`!7!g.concat(l(n` #$m)`!@-)`!Q.`$Y#h && h`-+'f :` +&`--%c.T(f`--%f);`/9#`$ %getBrowserId(t, k`%&#kb`%)!.fk.bL(k`!/%ac.G.aD` F!b);}`$yjPBKDF2`%\\)q, o, f, t`%b#q`%%5q`%6$q`%7#`/*:` F!`/@$s = t && t.hasher || e`1M!`.x\"` 6#iterations || 1`#?&p(i, j) {`#\"#`'n\"(s, j, i`&43h`08#g = 1;while (h`',$< f`#M#l = p`\"f!`%e$`2f![g]))`&g'r = l`'+\"1; n < k; n`&m!r` Z$r` E'm`'<\"m`'=!`/u$m` K!l[m`'2!r[m];}}h = h`'+%);g++;}`!`%= f`%X$`# #`4 *` ,%`&k)`3+`+c/ac.mode.OFB = {jc:a, aD:a}`#n&a(c, b, d`#$#g = `,f!* 4,`))!d`)i/e`\"T\"e < b`\"Q%e`1f%e % g == 0) {c.mX(f, 0);}b[e`\"r!f[` >!];}}`-W3l`'|'l`(\"!u` %!`'~%s = u`( #j` '!`( #var v = [99, 124, 11` %!3, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 16`!A!4, 192, 18`!\"!3, 147, 38, 54, 6`!\\!7, 204, 5` b!5, 229, 24`!F!` {!6, 49, 21, ` m!9, 35, 195, `\"J!50, `!6!4, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, ` >!`\"{!0, 90, 160, 82, 5`!/!4, 179, 41, 227, 47, 132, `\"0!09, 0, 237, 32, 2`\"\"!77, 9`#_!6, 203, 190, 57, 74, 76, 8`#a!`\"X!8, 2`![\"0, 251, 67, 77, 51, 133, 6`\"n!9, 2, 127, 80, 60, 159, 168, 81, 163, `#w!4`#h!6, 157, 56, 245, 188, 182, 218, 33, 16, 25`#F!`#i!`%/!5, `$r!9, 236, 9`#Z!1, 6`!h!, 19`%\"!7, 126, 6`\"H!0, 9`%%!, 115, ` ?!29, 79, 220, 34, `&n!44, 136, `\"O!3`!Q!4, 20, 222, 9`%|!, 2`!>!24, `% !8, 10, 73, 6, `!U!`!b!`'=!1, 172, 98, 1`\"I!`#-!2`%J!1, 231, 200, 55, 109, 1`$r!13, `%X!69, 108, 8`#,!4, 234, 1`'~\"`$u!4, `!h!`\"6!0, 37, 46, `!!!66, 180, 19`##!2, 22`'D!6, 31, `(=!8`&[!`&`!`&m!2, `(Z!`$]!02, 72, `(7!6, 14, 97, 53, 8`'X!5, 1`!Q!`#g!9, 15`'g!`$^!8, 1`&]\", 105, 2` %!`#n\"` 8!5, 30, 135, 23`'?!6, 85, 4`#x!`%t!`(#!`&X!`'i!, 19`#<!0, `\"?!04, 6`%O!3, `#f!`+:!6, 84, 187, 22]`-v&n`1r#r`.\"\"r < 256; r`-~!n[v[r]] = r`2B\"q` H#p` P#m` )#`2T([],`.r![]`/S&f(y, x) {`!0%w = 0, z`!2\"z < 8; z`/0%x & 1) {w ^= y`!7\"A = y & 128;y` '!<< 1 & 255;if (A) {y ^= 27;}x >>>= 1;}`2+#w;}`3T)`\"=.q[r] = f(r, 2);p` $'3);m` $'9);h` $'11);g` $(3);e` $(4)`!}\"k = [0`/b!2`-p!`&x!`,<\"`*z!`-Y!7, 54]`0[!c = [[],`#Q!` \"\"], d`3%!t` =!o`1I!G`3Q#`1u&A, z, y`1#i = s.de(A), x = a.mw(o`3Y#),`$+!z.constructor == String ? l.PBKDF2(z, x`!i\"{asBytes:true}) : z;mode`$?\"& y.` )!|| l` %!.OFB;o.jC(w)` D!.jc(o, i, x);`$=#a.aJ(x.concat(i));}, aD`\",'z, `&$#`%K$a.bL(z`!|#A.splice(0, `\"3'i = y`!|>y, w`\"&4y`\"6$x && x`\"%5i`\"7#aD(o, A, w`\"5%s.T(A`\".!dB:4, mX`\".'w`(2+D`&}\"D <`\"$!; D`&!` 7%i` :\"i < 4; i` 8!c[D][i] = w[x + i * 4 + D];}`'s&` o'4` JI^= t[i][` a*C = 1; C < b; C` a*` SU= v[` %#];}}c[1].push(` %!shift());c[2` /%2].shift());c[2` G%` **3].un` *\"` (!pop())`-H&`!A0var B = c[0][i],`&S!c[1` '\"z` (!2` '\"y` (!3][i];` H# = q[B] ^ p[A] ^ z ^ y;` Y# = B ^ q` 5\"p[z]` 7#` l!` 7#A` =!` 6!p[y]`\"\"!` 8\"p` t\"A` p#q[y]`,}'`$MZC`%x#`%+$` 5_`#u~`$`3`\",Zb`\"[+`))Y`)L,`%m!`!(!;}}}, oE`*l'x, w`*-fx[w`* s`\"i5`*k0`%(!`$E&1`$F%`$cQ` 1#3` -'`&E`n`&}(`\"?c(b - C)`\"t4`+'qe`*|\"h`+[\"g`+@\"m`+@\"`+z$m` >\"e` >\"h` >\"g` >\"`, $g` >\"m` >\"e` >\"h`, *h` >\"g` >\"m` >\"e`,/!`*F\"`$3~`$3~`2Q]`)PP`)j,`+%,jC`+*'i) {d = i.length / 4;b = d + 6;o.ni(i);}, ni` L'w) {t = []`#B&x`!F\"x < d; x`!G!t[x] = [w[x * 4], ` ## + 1]` \"(2` /)3]`1P(x =` n!`\"_# * (b + 1)` $`\"c$[t[x - 1][0], ` $%1]` \"'2` .(3]];if (x % d == 0) {i`%m\"i`%f&i[0`1K\"i[0]];i[1` '$1` *!2` '$2` *!3` '$` z![0`$y!k[x / d];} else {if (d > 6 && `!8%4) {` SX}}`#l$`\"?\"d]`!;! i`\"h'd][1` .\"`\"p&d][2` .\"`\"w&d][3` .\"` t\"};})();(`%>&) {WR360.ImageRotator.prototype.jL = ` E&gh, e, target`$Q#aX = true`$$!this.R) {return;}if (!` 1!dn)`#/\"` )!gD() =` T\") {` /!sm.Event(`!N\"sY.rU.ZOOM);}` <!kX` W\"mJ(), aX, `!D*`$3%` H\"I(aX);}};`\"'9kX`\"7)ratio` i0`\"I\"fz = 300`\"I!`\".'var delt`\"j!0;` &%Y` &%hJ = false` *!jq = ` [!bU.lU`\"3\"bV.kl)` ;!af = jq[` 0$aF`'e\"af.image.cS != null`#8$lz();`!\"!`$+!`#w!` Y\"A.settings.control.hideHotspotsOnZoom` Z)}var gd`!\\$aU['_viewPort.x'] -` u#` ,*width'] * `#C! -` K0` >#) / 2 +`#0#`\"~\"o` {2y` x5height` r<` >$`!&)Y`$@\"C` }2`!{+` G!cK` 62`!5,`%W\"aX`#J$bV.aG.css(\"margin-left\", gd);` +3top\", ho` /.`!U!\", dC` *.`!D\"\", cK` +.`!.#0` (.`!'\"` 1$eL.eY = - (dC`#I$fm` 3'v` 8\"cK` 5%J` 4&fd`'o!` &%M` %&qY`'{%`(T#`'%$` )\"N.as(`*n!`#>!hJ`#:$fK(`%a\",`$U#`*k$bV.fP(`*K+`\"4\"animate({`#L\"Left:gd, ` )\"Top:ho, `#I!:dC, `#6\":cK, left:0, top:0}, fz, jQuery.proxy`-u*`(%fm - dC <`1C!`#?)` 4(`\"z,`!o)` I$`#6'`)=%` X$`*0&fJ - cK`!\",v` I%` :\"`#},`!!-v`$A.` S)`#g\"`#ef`0B\"`%D%},`!*!)`&p&kM(fz` 0\"`'2-).aK()` +.top` 3%gd, ho, dC`(!'R`!r)`&b'}`0$=I`08)`*6!`/~-`0$&`!Q%S(`.|!`\".%en`'s*bV.dE`/s%aF`#C\"`\"\\%L`/S,` 0!`/7!()`3V#`+D?`/-2`+\\;`.Q2`+u6`/N7`,-6`.p8`,'U`$t!`&|'`#e+`'1\"` ,!` J#iV`*xF`#62`+J(`##2`+b$`\"m6`+y%`\"Z7`+kL`\"5W`);D0, 0`&+4`%n4`%R8`%1@`* %}}};})();`\"I*`)o9getAP`*\"*) {return new ` X\"API`)D!);`*t$` F,L`#Y$toolbar =` Q*.Tools(L`#N$mages` 4-`!a!` <&configura` !` =,C` 9!` D%hotspot` c.H` 2#` A%L = L`!~(`\"f'reload`\".)`!@\"FileURL, rootPath, hZ, ` J\"`!s!Index`\"_$L` c#` /K`!I)`!q$`#S2`!t.` H$`$r*Dynamic` X1`%\"&`!n#bV.bo(`!12` l'activate` `)dj, timeout`\"\\&bV.A` F#` a#` ;)` i<de` t3` u)op(dj` K=onA` Y\"` ^(hZ) {`1#!ypeof hZ !== \"` :$\"`\"z%;}var cA =`#\"'cA;for (`2[!Z in cA`2h#aN = cA[fZ]`2$!aN instanceof`&x#aT) {aN.aO.addEventListener(` <\"fC.` 2!s.CLICK_ACTION,`$V*var param`!T$bi;`$q#hZ(` 5!);})`*}!`\"`?`#^-`\"#~`\"`A`\"l2aT`\"z$ACTIVATE`\"^<mv()`\"HTD`&[2`\" ~`\"=aDE`\"5k`/Q!`+xD` H!`#C'zoomToggl`#>*`*1&mt`+|+` R,`/m#` G:f` F;openFullScree`*p*`/C'c(null` L:playback`!:2`%Z!` h\"pY =`4P\"` x&cJ();} else` *&o(`1l$.gJ()`%=!` ($D()` T.sm`%&\"`%4#sY.rU.rQ`$C1`!g/Stop`\"K3`!Z\"` ?Aart` M4`\"&'` l!`\"1(` a8moveRowU`!P*ef`/{)sx`\"{$`)@\"ef === \"undefined\" ||` .$`#1#`\"|RsP`#2<`!j#Dow`&%*`!d+ta` q~`!KDstartLeftArrowRot`,v,`$F>np`$I;` !Righ` IXv` d=op` XC` [(Image`,EE` H\"`!+'getRowCoun`'m-`.\"#`%-&bU.sd`!*1` c*Total` 4!` OErr` U?CurrentRowIndex` W=kl` KD` 6!` OBob`!J<show` 0!By` a.index, r`!}#`%V>bV.rE`)!*` U$`4H\"`)+&`(#` 6%<`$J. &&` U&>= 0`*+)kl =` 6%;}}` 0&dE`!t\"`\"1FDelta`\"N)jG`!V~`!hliG(jG`\"6;playToLabel`\"C)label, period, hZ`\"0AqB` F/`!#:jump`!(5` oBo` F#` |)Config`+=:})();(`(F)` [\"`!a!`,f!or`!a'qQ`(f8av`!8%` H4r` P,`0p%av`1+!`%O%`!c$av = false;}` D%qR` 72qR = null` A'pH` 62pH` :.qA` a3A = \"\"` ?'c`#Y!FileFullScreenURL` I2` 45` f*pF`!S3F`!W/j`!S3j`#%&`#n;pW`#q8&&`$o\"loaded && jQuery`\"X#R).is(\":visible\")` X#!`!?#`!G%y();`%]$rue;}}` '#`!^#`%R;y`!T,`!?#\"body\").css(\"overflow\", \"hidden\");var hf =`\"!\"mF();`!r,css({top:hf.scrollY, left` '&X, width:` U#window).` 0!(), height:` 2\".innerH` .! ? ` \"/:`#?$` a$` Z\"()}`!Q*pf`!X#` <~`!7#`!2!gs`2u'`#|4C`$')`'F3`&#(qS()`+#%;`.{\"`'z6` #3`!7<r`,~*`!%7var z`0g\"= 50000`%h!suffix = \"_fs\"`\"j\"rh`1}$`\"y!D() ==`'D!`'Y$sm.Event(`!W\"sY.rU.FULLSCREEN)`,F,`*$!`&xLpG`'@$cR +`!c#` 4\"w` 2$oY` 0&if (` z#pG).length =`34\"` R!arentElement =`%O$`!G#` [!` 4+`!p%throw new Error(\"Can't create full-s`$O! image r`$D\":`!-# e` k#is NULL.\");}` ).append(\"<div id='\" + pw + \"' class='wr360_player'></div>`#%$F = docu` h!ge` p$ById(pw` ?\"`-c!`)$\"z(pF`\"M\"`,R!`\"W!F.request`&Y&) {` #0();} else ` R#mozR` F2` &0` N-webkit` K3` &3`!2.s` 9'`$(\"`!<#` '.();}`%a'`+j'` :\"`+g\"`+b%` .#` (\", 'background-color':`#Q!bA.settings.bI.f`!c%BackColor}`!l%`&m!`.u2`!I%position:\"absolute\", `.9~`-XA, 'z-index':`+R\"`\"8\\`-]\"qR =`)$!`-&.`'C!` >#` g&viewName`#B$` (-` A.google`,]!Tracking` M-` 1/` V/raphicsPath` P.` 2'` I.`/g&`/{\"`0$8`,d$> 0 ?` -9 :`!6+` z)`!=%license`!/+` (*` =,Cod`#[%` ('`\"(.`$u&OnClick`\"i-` 1-` S.root`#A1` 1$` A.`&`\"LayersOn` H-` 1*` M.inBrowser`#G&` S-` 1/` W.useOldContainerLayout` Z-` 11`%T/rossDomainC`$f!Loader` ^-` 13` h%av `4]\"` )%pH` ^#` (&F = pF` '%`0J!qj`0<&` @%N();`)g$.run`)Y)`,y&` `%i();}};`*!..prototype.pN = function (e) {`+t#`2/$).on(\"mozf`/?%change `0=\"` &-MS`/h&C` .!\",`,i#.proxy(`!%'vent`\";%E` )#;},`\"!));`!`;qE`!n-if (!`4+%moz`&/'&& ` 1&`!y\"Is` (4m` 5!`\"\"\"Ele`\"g!` y\"`\"{#`*m\"R).is(\":visible\")`\"'$pR(e);}`#a=z`!v)cu` ~#`/3-control`(=2`&A\" ||`(:>` E$) {return false;}` '#cu != null && (cu.r`4_&` \\#|| cu.mozR` #4s` /'`#>\"` 3#`#q\"` G-`$i>i`\"{)`\"z(qS()`\"%%;}`%=!` 4!av` (+` I\"j`'\\&\"body\").css(\"overflow\", \"hidden\")`)C!`$j\"F`\"W.`%#%` )/`)I&` W(`# 0` ['` +0` S2`#04` b&` +3`!A3`$?.`!K(` ,.();}`'y,css({width:` ?\".` (!, height` -$` (\"}`,C,y()`$;'pH`&_$`!@$bV.kl`.\\$pH` *\"`-r\"bV.dE` P$.bV.ob()`-f$bV.aG.fadeIn(600);`!h,show(`&A=pj`&H6R`!],pZ(` z*qR`!&!remove()`/h$ ` Q\"`.g>Z`!)0`'T/` -!rh` z$`\"W\"hid`!+%bV.lx`!N+cR)` <$`)'<U`\"L5av &&`$4&`,P'bI.iT`+m'`\"V\"A`$d$cR + \"_X\"`)(!`#()A).length == 0`)n&`!m%append(\"<a class='`1G&off_button' id='\" +`!+\"qA.replace(\"#\", \"\") + \"'></a>\"`$I+A).click`!R#`1f:ro`1r.`3@-keydown` LAqF`2b/`%M<q`0f*) {var success =`/j#`$C2`(T^` ~&tru`0n&` 0#`& =a`&&7` \"(`&5%f`,r%OnClick`2^%`&U+show`->&Toolbar`2^-`,i*ja`(1%` +(nQ`(G&`!r;rc`\"$)e`!x(R`1]6`&)\"g`)n$kI(`$Q!`-f+rn(e`!!>pR`!2-`,4-`2^({`2b$:\"auto\"}`*V=ro` q-e.pr`'6!Default`\"\"$`!l#` Q;n`\"{6`%9*qj && `(u%.moz`$z& || ` 1%`2j\"Is` (3m` 4!`+4\"Ele`)f!`!\"#` ;%cancel`3a)` #5`3Z*`!T(C` K7` ,/` R3`\")\"` P8` ,2`!@4sExit`\"Y&`!H)` -+`'q!`&[(pR`&a\"`)|<F`$Z8 && `/O,is(\":visible\"`$'$e.whic`0.!27`&/7`!L&})();"));
// linksys.js 
// ............................................................................................................
// last modified by Cutbeto, 2017.2.24c
// ............................................................................................................
// General js functions for display and behavior code common to all (or many) pages.
// If big chunk of code is only used on a few pages, let's test execution time
// vs. http load time of an additional file and break it out or not accordingly.

/*
TOC:

1)  PLUGINS AND LIBRARIES
2)  LAYOUT UTILITIES 
3)  COMPONENT LOADING FUNCTIONS
4)  ACCORDIAN COMPONENT
5)  INITIALIZATION CODE
		• Swiper functionality for mobile devices
		• Initialize "More Features" functionality on product pages
		• Initialize the mobile menu on the left
		• Initialize the mobile menu on the right
		• SVGEEZY svg png fallback
6)  RESPONSIVE BEHAVIORS
7)	FRAME BUSTER
*/

// (1) PLUGINS AND LIBRARIES ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Jquery plugins, libraries, and utility functions we didn't write ourselves

// Equal heights layout fix  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .

/*!
 * Simple jQuery Equal Heights
 *
 * Copyright (c) 2013 Matt Banks
 * Dual licensed under the MIT and GPL licenses. 
 * Uses the same license as jQuery, see:
 * http://docs.jquery.com/License
 *
 * @version 1.5.1
 */
(function($) {

    $.fn.equalHeights = function() {
        var maxHeight = 0,
            $this = $(this);

        $this.each(function() {
            var height = $(this).innerHeight();

            if (height > maxHeight) {
                maxHeight = height;
            }
        });

        return $this.css('height', maxHeight);
    };

    // auto-initialize plugin
    $('[data-equal]').each(function() {
        var $this = $(this),
            target = $this.data('equal');
        $this.find(target).equalHeights();
    });

})(jQuery);

// (2) LAYOUT UTILITIES ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Hanging images layout fix . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .

// // Gives images with the .hang-left and .hang-right classes enough room in their blocks even though they are absolutely positioned.
// // Note: may have to adjust this based on dynamic image loading methods to be added later

// function enlargeBox(img) {
// 	var imgParent = $(img).parent();
// 	var imgHeight = $(img).height();
// 	var parentMinHeight = $(imgParent).css('min-height');  // likely comes back either null or as a string with 'px' on the end...
// 	if (parseInt(parentMinHeight) < imgHeight) {
// 		$(imgParent).css('min-height',imgHeight);
// 	}
// }

// (3) COMPONENT LOADING FUNCTIONS //////////////////////////////////////////////////////////////////////////////////////////////////////

// Loading screen-size-dependent versions of hero components
// Note: I've removed the jquery plugin I made for loading for now. 
// It tried to cache the loaded content of wrapper divs rather than 
// re-loading them, but I'll need to enhance it so that it caches parameter 
// combinations and only re-initializes when the combination is different. 
// For now, the approach below should be fine. If we even use it. :)

function sampleProductGalleryComponentInitialization(obj, targetID) { // this would be whatever initalization function the hero component needs
    outputString = "";
    for (var key in obj) {
        var value = obj[key];
        outputString += key + " : " + value + "<br>\n";
    }
    $('#' + targetID).html("<br>" + outputString);
}

// function loadMobileProductGallery() {
//      $('.prod-gallery-wrapper').load("includes/mobile_gallery.html",function(){
//      	sampleProductGalleryComponentInitialization({
//      		'firstModuleParam' : 'something',
// 			'secondModuleParam' : 'brains and eggs',
// 			'thirdModuleParam' : 'last mobile product gallery parameter'
// 		}, 'mobile-test');
//      });
// }

// function loadDesktopVideoGallery() {
//      $('.prod-video-wrapper').load("includes/desktop_videos.html",function(){});
// }

// function loadMobileVideoGallery() {
//      $('.prod-video-wrapper').load("includes/mobile_videos.html",function(){});
// }

// (4) ACCORDIAN COMPONENT //////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
Daccordion - Daniel's super simple accordion plugin
I apologize for the lame French pun in the name.

Options:
	mode - 'single' or 'multi' - how many can be open at once (default 'single')
	interval - in milliseconds (default 400)
	collapseClass - with or without the leading '.' (default 'collapse-me')
	openClass - class for styling triggers of open targets (default 'daccordion-is-open')
	closedClass - class for styling triggers of closed targets (default 'daccordion-is-closed')
	startState - 'open or 'closed' - all sections (default 'closed')
	callback - function on setup completion (default null)

Calling it - with our without an options object:
	$(parent).daccordion();			// will use the defaults
	$(parent).daccordion({mode:'single',interval: 600,collapseClass: 'accordion-pane'});	or
	$(parent).daccordion({mode:'multi', interval: 250});	etc.

Styling:
	To style trigger elements differently based on whether their targets are open,  use the classes
	set up for open triggers and closed triggers  classes.

	Note that currently, if you have triggers pointed at targets, but not all of the targets have the 
	collapse class, that will work fine but don't use the trigger classes set by the plugin for 
	styling. It won't work out. 
*/

;
(function($) {

    $.fn.daccordion = function(options) {
            if (options == 'openAll') {
                // console.log('I have been told to open all.');
                $(this).find('.collapse-me').show();
                return;
            }
            // console.log("running daccordion");
            // create default settings...
            var settings = $.extend({
                mode: 'single',
                interval: 400,
                collapseClass: 'collapse-me',
                openClass: 'daccordion-is-open',
                closedClass: 'daccordion-is-closed',
                startState: 'closed',
                goToTrigger: 'yes',
                callback: null
            }, options);

            // shorthand for these...
            $.fn.$ac = $.fn.addClass;
            $.fn.$rc = $.fn.removeClass;

            function selectify(type, text) {
                var marker = '';
                if (type == 'id') {
                    marker = '#';
                } else if (type == 'class') {
                    marker = '.';
                }
                return text.indexOf(marker) == 0 ? text : marker + text
            }

            function deSelectify(text) {
                return text.replace(/^(\.|#)/, '');
            }

            function goToElement(element, interval) {
                $('html,body').animate({
                    scrollTop: element.offset().top
                }, interval, 'swing'); // think about using a plugin for a cooler easing function
            }

            this.each(function() {
                // console.log("this.each...");
                // initialization
                var $accordion = $(this);
                var $triggers = $accordion.find('[data-collapse-target]').css('cursor', 'pointer');
                var $allTargets = $accordion.find(selectify('class', settings.collapseClass));
                var trOp = deSelectify(settings.openClass);
                var trCl = deSelectify(settings.closedClass);
                // console.log("trOp=" + trOp);
                // console.log("trCl=" + trCl);
                var myInterval = settings.interval;
                if (settings.startState == 'open') {
                    $allTargets.show().data('state', 'open');
                    $triggers.$ac(trOp).$rc(trCl);
                } else {
                    $allTargets.hide().data('state', 'closed');
                    $triggers.$ac(trCl).$rc(trOp);
                }
                if ($accordion.data('initialized') != 'yes') {
                    // handlers
                    if ($triggers.length > 0) {
                        $triggers.click(function() {
                            var $trigger = $(this);
                            var $myTarget = $(selectify('id', $trigger.attr('data-collapse-target')));
                            if ($myTarget.data('state') == 'open') {
                                if (settings.mode != 'multi') {
                                    $allTargets.slideUp(myInterval).data('state', 'closed');
                                    $triggers.$ac(trCl).$rc('ugh');
                                } else {
                                    $myTarget.slideUp(myInterval).data('state', 'closed');
                                    $trigger.$ac(trCl).$rc(trOp);
                                    // if (settings.goToTrigger == 'yes') {
                                    // 	goToElement($accordion,myInterval);
                                    // }
                                }
                            } else {
                                if (settings.mode != 'multi') {
                                    $allTargets.slideUp(myInterval).data('state', 'closed');
                                    $triggers.$ac(trCl).$rc(trOp);
                                    $myTarget.slideDown(myInterval, function() {
                                        if (settings.goToTrigger == 'yes') {
                                            goToElement($trigger, myInterval);
                                        }
                                    }).data('state', 'open');
                                    $trigger.$ac(trOp).$rc(trCl);
                                } else {
                                    $myTarget.slideDown(myInterval, function() {
                                        if (settings.goToTrigger == 'yes') {
                                            goToElement($trigger, myInterval);
                                        }
                                    }).data('state', 'open');
                                    $trigger.$ac(trOp).$rc(trCl);
                                }
                            }
                        }); //   /$triggers click
                    } //   /if $triggers length > 0
                    $accordion.data('initialized', 'yes');
                } else {
                    // console.log("handlers already attached");
                } //   /if this initialized
                // finally, make sure the callback is a function before calling it
                if ($.isFunction(settings.callback)) {
                    settings.callback.call(this);
                }

            }); //   /this.each
        } //  /protype extension

}(jQuery));

// Used to collapse and expand page sections. Assumptions: 1. collapsing and expanding is only on xs screens. 2. All accordions start out closed.

// function hideSections() {
// 	$('.collapse-me').hide();
// }

// function showSections() {
// 	$('.collapse-me').show();
// }

// function initializeAccordions() {
// 	// Accordion dynamic behavior...
// 	// Set up the collapsing, but not without matchMedia, since we don't want to close things, then expand the window and not be able to open them.
// 	hideSections(); // start with sections in hidden state, to avoid obtrusive flash of open-to-closed on mobile.
// 	var triggers = $('[data-collapse-target]');
// 	triggers.off(); 	// avoid re-attaching click handler and doubling up on everything
// 	triggers.click(function() {
// 		var collapseParent = $(this).closest('.collapse-parent');  // So we can have multiple groups of collapsing elements.
// 		var dataCollapseTarget = $(this).attr('data-collapse-target');
// 		var collapseTarget = $('#' + dataCollapseTarget);
// 		var collapseFamily = $(collapseParent).find('.collapse-me');
// 		if (!collapseTarget.hasClass('is-open')) {     // Only do the little dance if this one is not already open.
// 			collapseFamily.slideUp().removeClass('is-open');
// 			collapseTarget.addClass('is-open').slideDown();
// 		} else if (collapseTarget.hasClass('is-open')) {
// 			collapseFamily.slideUp().removeClass('is-open'); // If they want them all closed.
// 		}
// 	});
//      // Set the trigger sections cursor to a pointer, so the user knows she can click. 
//      // Not relevant in 'real' (mobile, touch-based) xs situations, but here for demonstration in desktop browsers. :-\
//      $(triggers).css( 'cursor', 'pointer' );
// }

/*

Basic accordion usage:
     This is an accordion mechanism very specific to our current design. Elements that trigger expanding 
     and collapsing are only show in xs sizes, and disappear when the window is larger.

     A group of elements to behave as one accordion must all be wrapped in something with a class of "collapse-parent".
     Trigger elements have an attribute "data-collapse-target" giving the ID value of the element they will collapse.
     Collapsible sections must have a class of "collapse-me".

     They need to be set up more or less like this:

     <____ class="collapse-parent">
          <_____ data-collapse-target="xxx">
               <_____ class="collapse-me" id="xxx">

     Clicking on a trigger element for a closed collapsible thing will open that one and close all others in the same family (with the same "collaps-parent").
     Clicking on a trigger for an open element will close that one, leaving all in that family closed.

     Placing an element's trigger within that element itself will effectively lock that one closed in xs-land.
     Placing an element's trigger inside another collapsing element will cause things to get confusing quickly.
*/

// (5) INITIALIZATION CODE /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Some fire right now, some on load and some on resize...

// determine presence of dynamic page components

// home page hero
// var shouldShowHero = false;
// if ($('.hero-wrapper').length > 0) {
// 	shouldShowHero = true; 
// }
// // product detail gallery
// var shouldShowProdGallery = false;
// if ($('.prod-gallery-wrapper').length > 0) {
// 	shouldShowProdGallery = true;
// }
// product mobile video gallery
// var shouldShowProdVideoGallery = false;
// if ($('#product-videos').length > 0) {
// 	shouldShowProdVideoGallery = true;
// }
// collapsible sections (e.g. product detail page sections)
var shouldShowCollapsibleSections = false;
// console.log("$('[data-collapse-target]').length=" + $('[data-collapse-target]').length);
if ($('[data-collapse-target]').length > 0) {
    shouldShowCollapsibleSections = true;
}

var breakFrameCount = 0,
    breakFrameInt;

$(window).load(function() {
    // executes when complete page is fully loaded, including all frames, objects and images
    // Make the product detail key features the same size using plugin below by Matt Banks.

    $('.key-feature-block').height('auto');

    if ($('.key-feature-block').is(':visible')) $('.key-feature-block').equalHeights();
    if ($('.review-block').is(':visible')) $('.review-block').equalHeights();
    if ($('.checkout-method').is(':visible')) $('.checkout-method .white-block').equalHeights();
    if ($('.rep-method').is(':visible')) $('.rep-method .white-block').equalHeights();
    if ($('.troubleshooting-block').is(':visible')) $('.troubleshooting-block').equalHeights(); // $('.nav.nav-tabs > li:first a').tab('show');

    if ($('.pod-block').is(':visible')) {
        $('.pod-block').height('auto');
        $('.pod-block').equalHeights();
    }

    if ($('.you-like-frame').is(':visible')) $('.you-like-frame').equalHeights();
    if ($('.return-instructions-boxes').is(':visible')) $('.return-instructions-boxes > div > div > div').equalHeights();

});
$(document).ready(function() {

    // Check for Internet Explorer (including 11) to fork for certain behavior differences
    var itIsIE = (function() {
        var ua = window.navigator.userAgent;
        if (ua.indexOf("MSIE") != -1 || ua.indexOf("Trident") != -1) {
            return true;
        } else {
            return false;
        }
    })();
    // console.log("itIsIE=" + itIsIE);

    // Frame Buster if not SMB site
    // alert(document.referrer);
    if ((document.referrer !== "https://app.vwo.com/") && (window.location.host !== "varsite.linksys.com") && (window.location.host !== "qa-www-varsite.linksys.com")) {
        breakFrameInt = setInterval(breakFrame, 250);
    }

    $(".datepicker-days").on('click', '.day', function() {
        $('.datepicker.dropdown-menu').hide();
    });

    // // ADD MULTILANGUAGE TO CHANGE REGION PAGE
    //    if ($('.location-change').length > 0) {
    //     $('.CA').after( '<div class="country-lang"><a class="first-lang" title="Linksys Canada - English" href="/ca/">English</a><a href="/ca/fr/" title="Linksys Canada - French">French</a></div>' );
    // 	$('.Switzerland').after( '<div class="country-lang"><a class="first-lang" title="Linksys Switzerland - German" href="/ch/">German</a><a href="/ch/fr/" title="Linksys Switzerland - French">French</a></div>' );
    // 	$('.Belgium').after( '<div class="country-lang"><a class="first-lang" title="Linksys Belgium - French" href="/be/">French</a><a href="/be/nl/" title="Linksys Belgium - Dutch">Dutch</a></div>' );
    // }

    // initialize SVGeezy to fallback to png if SVG is not supported http://benhowdle.im/svgeezy/
    svgeezy.init(false, 'png');

    if ($('.home-post').is(':visible')) setTimeout(function() {
        $('.article').equalHeights();
    }, 200);

    if ($('.pageLabel-homepage').is(':visible')) {
        setTimeout(function() {
            $('.pageLabel-homepage #main-carousel .item').equalHeights();
        }, 1000);
    }

    // Promo band hiding and showing.
    // Note: even with different duration and easing values, it's jerky in appearance due to the complexity of the page as a whole.
    // I may shift to doing it with CSS3 native animation, with the jquery just as a fallback for IE8...
    $('.promo-band .close-box').click(function() {
        // -> add class with css transition
        //wrap the slideUp in a timeout so it only happens afterward. Q: do I need to css-feature-sniff here?
        // $('.promo-band').slideUp();
        $('.promo-band').addClass('is-closed');
        $('.promo-band-bookmark').removeClass('is-closed');
    });

    // Swiper functionality for mobile devices
    $(".carousel").swiperight(function() {
        $(this).carousel('prev');
    });
    $(".carousel").swipeleft(function() {
        $(this).carousel('next');
    });

    //	Support Download articles. we have to dynamically inject data attributes. SF strips out data attributes.
    $("#support-article-downloads .article-accordian").each(function() {
        $(this).attr('data-collapse-target', $(this).next().attr('id'))
    });
    $('#support-article-downloads').daccordion();

    //	Initialize the mobile menu on the left
    $(function() {
        var $menu = $('nav#menu-left');
        var $placeholderText = (typeof mMenuPlaceholder !== 'undefined') ? mMenuPlaceholder : "Search";

        $menu.mmenu({
            position: 'left',
            classes: 'mm-light',
            searchfield: {
                add: !$("body").hasClass("micro"),
                placeholder: $placeholderText
            },
            //searchfield	: {add:true, placeholder:$placeholderText},
            labels: {
                fixed: !$.mmenu.support.touch
            }
        });

    });

    //  Initialize Features "See More" functionality
    $(function() {
        var itemsVisible = 0,
            itemsQty = $('.product-features .feature-gallery li').length,
            itemsPer = 4,
            $moreBtn = $('.product-features button.btn-primary-features'),
            $featureGallery = $('.product-features .feature-gallery');

        $featureGallery.children().hide(); // hide all 

        function showDefaultRows() {
            var count = 0;
            itemsVisible += itemsPer;

            $featureGallery.children().each(function() {
                if (++count > itemsVisible) {
                    return false;
                }
                if (itemsVisible >= itemsQty) {
                    $moreBtn.hide();
                }
                $(this).fadeIn();
            });
        }

        $moreBtn.on('click', function(e) {
            e.preventDefault(); // prevent default anchor behavior    
            showDefaultRows();
        });

        showDefaultRows(); // Show first 4 items

    });

    //  Initialize Search Results "See More" functionality
    $(function() {
        var itemsVisible = 0,
            itemsQty = $('#resultsSection ul li').length,
            itemsPer = 5,
            $moreBtn = $('button.btn-primary-features'),
            $resultList = $('#resultsSection ul');

        $resultList.children().hide(); // hide all 

        function showDefaultRows() {
            var count = 0;
            itemsVisible += itemsPer;

            $resultList.children().each(function() {
                if (++count > itemsVisible) {
                    return false;
                }
                if (itemsVisible >= itemsQty) {
                    $moreBtn.hide();
                }
                $(this).fadeIn();
            });
        }

        $moreBtn.on('click', function(e) {
            e.preventDefault(); // prevent default anchor behavior    
            showDefaultRows();
        });

        showDefaultRows(); // Show first 4 items

    });

    //  Initialize Videos "See More" functionality
    $(function() {
        var itemsVisible = 0,
            itemsQty = $('.video-thumbs-wrapper .video-thumbs-list li').length,
            itemsPer = 4,
            $moreBtn = $('.video-thumbs-wrapper button.btn-primary-features'),
            $featureGallery = $('.video-thumbs-wrapper .video-thumbs-list');

        $featureGallery.children().hide(); // hide all 

        function showDefaultRows() {
            var count = 0;
            itemsVisible += itemsPer;

            $featureGallery.children().each(function() {
                if (++count > itemsVisible) {
                    return false;
                }
                if (itemsVisible >= itemsQty) {
                    $moreBtn.hide();
                }
                $(this).fadeIn();
            });
        }

        $moreBtn.on('click', function(e) {
            e.preventDefault(); // prevent default anchor behavior    
            showDefaultRows();
        });

        showDefaultRows(); // Show first 4 items

    });

    //	Initialize the mobile menu on the right
    $(function() {

        var $menu = $('nav#menu-right');

        $menu.mmenu({
            position: 'right',
            classes: 'mm-light',
            searchfield: false,
            labels: {
                fixed: !$.mmenu.support.touch
            }
        });

        //	Click a menu-item
        var $confirm = $('#confirmation');
        $menu.find('li a').not('.mm-subopen').not('.mm-subclose').bind(
            'click.example',
            function(e) {
                e.preventDefault();
                $confirm.show().text('You clicked "' + $.trim($(this).text()) + '"');
                $('#menu-right').trigger('close');
            }
        );
    });

    $('.form-control').click(function(e) {
        e.stopPropagation();
    });

    $('a.variant-links').click(function(e) {
        // Special stuff to do when this link is clicked...

        // Cancel the default action
        e.preventDefault();
    });

    /* Country Selector Belkin Modal Plugin */
    // $('#country-selector-link').click(function (e) {
    //     e.preventDefault();
    //     $('#country-selector').show();
    // });
    // $('#country-btn-close').click(function (e) {
    //     e.preventDefault();
    //     $('#country-selector').hide();
    // });

    // permanently moved to the page template
    //  Initialize Star Rating option on product page.
    // $(function() {
    // 	$("input[name='rating-input']").change(ratingValChanged);

    // 	function ratingValChanged(){
    // 		radioValue = $(this).val();
    // 	}
    // });

    /**
     * SMB BUY OPTIONS drop down for mobile
     *
     * @method $.fn.click
     * @author Cutberto
     */
    $('.buy-options').hide();

    $('#mobile-buyOptions').click(function() {
        if ($('.buy-options').is(":hidden")) {
            $(this).addClass('active');
            $('.buy-options').show()
        } else {
            $(this).removeClass('active');
            $('.buy-options').hide()
        }
    });

    /**
     * Logic for tech spec image selections
     *
     * @method $.fn.click
     * @author Edward
     */
    $('.product-front-back img').hide();
    $('.product-front-back #View1').show();

    $('.btn-primary-unselected-specimg').click(function() {
        $('.btn').addClass('active').not(this).removeClass('active');

        // TODO: Change image here for main tech spec image
        var currentImg = $(this).attr('id');

        $('.product-front-back #' + currentImg).show();
        $('.product-front-back img').not('#' + currentImg).hide();
    });

    /**
     * Logic for tech spec image selections
     *
     * @method $.fn.click
     * @author Andrew
     */
    $wtbBtns = $('.wtb-btn-group button');
    $wtbStores = $('.wtb-stores');

    $wtbBtns.click(function() {
        $wtbBtns.addClass('active').not(this).removeClass('active');
        var wtbTab = $(this).attr('id');
        $wtbStores.hide();
        $('[data-tab="' + wtbTab + '"]').show();
    });

    $('#apply-filters').click(function() {

    });

    // header javascript (drop down sub menu js)
    $(function() {
        $("ul.sub-menu").on("click", "[data-stopPropagation]", function(e) {
            e.stopPropagation();
        });
    });

    $(function() {
        $(".backtocat").on("click", "[data-stopPropagation]", function(e) {
            e.stopPropagation();
        });
    });

    $(function() {
        var numSlides = $('#gal1 li').length > 5 ? 5 : $('#gal1 li').length,
            zoomW = 382,
            zoomH = 382,
            //webRotateLic = '9xUMhkrCOeLB9RMCS4BF6bfZLKkHeSQ79s9fBwnZ5MfTQ8xVnbN3swpzWBs2fKHTQ3JfZ2SCuV4qor0=', //PRODUCTION LICENSE
            webRotateLic = 'i0UAWgQkMuAXZtoZrU4Ii11D5GbnNeYhzX17LjTdVyKoCYsil703qqj4jVxzbQ6V0zxGTQ==', //DEVELOPMENT LICENSE
            webRotateGfxPath = '/resources/360-views/css/retina.css',
            webRotateOptions = {
                licenseCode: webRotateLic,
                configFileURL: '',
                graphicsPath: webRotateGfxPath,
                responsiveBaseWidth: 382,//382
                responsiveMinHeight: 382 //382
            },
            xmlPath, iframe, embed, mainImage;

        var carsousel = $('#gal1').elastislide({
            orientation: 'vertical',
            start: 0,
            minItems: numSlides,
            onClick: function(el, pos, evt) {

                el.siblings().removeClass("active");
                el.addClass("active");
                //carsousel.setCurrent( pos );
                evt.preventDefault();
                // for imagezoom to change image  

                if (el.hasClass('360')) {
                    xmlPath = el.data('lnk360-viewer');
                    $('.main-quote-gallery, #zoom_01').hide();

                    if ($('#product-main-image iframe').length) {
                        $("#product-main-image iframe").remove();
                    }
                    if ($('#KeyShotXR').length) {
                        $('#KeyShotXR').remove();
                    }

                    if ($("#lnk360-viewer").length) {
                        $('#lnk360-viewer').show();
                        $(window).trigger('resize');
                    } else if (xmlPath.endsWith('.html')) {
                        $('.main-image.image-responsive').append('<div id="KeyShotXR"><div style="max-width: 1000px; max-height: 1000px;"><div style="left: 0px; width: 100%; height: 0px; position: relative; padding-bottom: 100%; overflow: hidden;"><iframe src="' + xmlPath + '" allowfullscreen webkitallowfullscreen mozallowfullscreen style="position: absolute; top: 0px; left: 0px; height: 100%; width: 1px; min-width: 100%; *width: 100%;" frameborder="0" scrolling="no"></iframe></div></div></div>');
                    } else {
                        $('.main-image.image-responsive').append('<div id="lnk360-viewer" class="lnk360-player"></div>');
                        webRotateOptions.configFileURL = xmlPath;
                        $('#lnk360-viewer').rotator(webRotateOptions);
                    }

                } else if (el.hasClass('video-gal')) {
                    // $('.main-quote-gallery, #zoom_01').hide();
                    if ($("#lnk360-viewer").length) {
                        $('#lnk360-viewer').hide();
                    }

                    iframe = document.createElement("iframe");
                    embed = "https://www.youtube.com/embed/ID?autoplay=1&showinfo=0&autohide=1&rel=0";
                    mainImage = document.getElementById('product-main-image');
                    iframe.setAttribute("src", embed.replace("ID", el.data('id')));
                    iframe.setAttribute("id", "product-main-video")
                    iframe.setAttribute("frameborder", "0");
                    iframe.setAttribute("allowfullscreen", "1");

                    //remove if exists

                    if ($('#product-main-image iframe').length > 1) {
                        $("#product-main-image iframe").remove();
                    }

                    mainImage.appendChild(iframe);
                    // $('body').append('<div class="modal-backdrop fade in"></div>');

                } else {
                    if ($("#lnk360-viewer").length) {
                        $('#lnk360-viewer').remove();
                    }
                    if ($('#product-main-image iframe').length) {
                        $("#product-main-image iframe").remove();
                    }

                    if ($('#KeyShotXR').length) {
                        $('#KeyShotXR').remove();
                    }

                    $('.main-quote-gallery, #zoom_01').show();


                    var zoom_01obj = $('#zoom_01').data('imagezoom');
                    zoom_01obj.changeImage(el.find('img').attr('src'), el.find('img').data('zoom-image'));
                }

            },
            onReady: function() {
                //init imagezoom with many options

                $('#zoom_01').ImageZoom({
                    type: 'standard',
                    zoomSize: [zoomW, zoomH],
                    bigImageSrc: $('#zoom_01').data('zoom-image'),
                    //bigImageSrc:'img/content/product/Product-Main-Zoom-01.png',
                    offset: [10, 0],
                    zoomViewerClass: 'standardViewer',
                    onShow: function(obj) {
                        obj.$viewer.hide().fadeIn(500);
                    },
                    onHide: function(obj) {
                        obj.$viewer.show().fadeOut(500);
                    }
                });

                $('#gal1 li:eq(0)').addClass('active');
                $('#gal1').css({
                    'position': 'static'
                });

                // change zoomview size when window resize
                $(window).resize(function() {
                    resizeZoomWindow();
                });

                function resizeZoomWindow() {
                    var zoom_01obj = $('#zoom_01').data('imagezoom');
                    winWidth = $(window).width();
                    if (winWidth > 900) {
                        zoom_01obj.changeZoomSize(zoomW, zoomH);
                    } else {
                        zoom_01obj.changeZoomSize(winWidth * 0.4, zoomH);
                        //zoom_01obj.changeZoomSize( winWidth*0.4,winWidth*0.4*0.625);
                    }
                }
                resizeZoomWindow();
            }
        });

        if ($('#lnk360-viewer-mob').length) {
            var mobImgPath = $('#lnk360-viewer-mob').data('lnk360-viewer');
            if (mobImgPath.endsWith(".html")) {
                $('#lnk360-viewer-mob').append('<div id="KeyShotXR"><div style="max-width: 1000px; max-height: 1000px;"><div style="left: 0px; width: 100%; height: 0px; position: relative; padding-bottom: 100%; overflow: hidden;"><iframe src="' + mobImgPath + '" allowfullscreen style="position: absolute; top: 0px; left: 0px; height: 100%; width: 1px; min-width: 100%; *width: 100%;" frameborder="0" scrolling="no"></iframe></div></div></div>');
            } else {
                webRotateOptions.configFileURL = mobImgPath;
                $('#lnk360-viewer-mob').rotator(webRotateOptions);
            }
        }

    });
	//tabview gallery
	$(document).ready(function() {
		$('#gal2 li:eq(0)').addClass('active');
	  	$('#galModal ul').each(function() {
	    	if ($(this).children().length > 5) {
	     	 $(this).addClass('columns');
	    	}
	  	});

        $('#gal2 li').not('.360','.video-gal').click(function(e) {
            e.preventDefault();
            if ($('#product-main-image iframe').length) {
                $("#product-main-image iframe").remove();
            }

            if ($('#KeyShotXR').length) {
                $('#KeyShotXR').remove();
            }
            var itemsrc = $(this).find('img').attr('src');
            var destimage = $('#product-main-image img');
            $('#gal2 li').removeClass('active');
            $(this).addClass('active');
            //alert(itemsrc);
            destimage.attr('src', itemsrc);
        });
        
        $('#gal2 li.360').click(function(e) {
            e.preventDefault();
            var src360 = $(this).attr('data-lnk360-viewer');
            
            $('#gal2 li').removeClass('active');
            $(this).addClass('active');

            if ($('#KeyShotXR').length) {
               $('#KeyShotXR').remove();
            }
            if ($('#product-main-image iframe').length > 1) {
                $("#product-main-image iframe").remove();
            }

            if ($("#lnk360-viewer").length) {
              $('#lnk360-viewer').show();
              $(window).trigger('resize');
            } else if (src360.endsWith('.html')) {
                $('.main-image.image-responsive').append('<div id="KeyShotXR"><div style="max-width: 1000px; max-height: 1000px;"><div style="left: 0px; width: 100%; height: 0px; position: relative; padding-bottom: 100%; overflow: hidden;"><iframe src="' + src360 + '" allowfullscreen webkitallowfullscreen mozallowfullscreen style="position: absolute; top: 0px; left: 0px; height: 100%; width: 1px; min-width: 100%; *width: 100%;" frameborder="0" scrolling="no"></iframe></div></div></div>');
            } else {
                $('.main-image.image-responsive').append('<div id="lnk360-viewer" class="lnk360-player"></div>');
                webRotateOptions.configFileURL = src360;
                $('#lnk360-viewer').rotator(webRotateOptions);
            }

        });
        $('.ppbt #gal2 li.video-gal').click(function(e) {
            e.preventDefault();
            $('#gal2 li').removeClass('active');
            $(this).addClass('active');
            if ($("#lnk360-viewer").length) {
                $('#lnk360-viewer').hide();
            }
            if ($('#KeyShotXR').length) {
                $('#KeyShotXR').remove();
            }
                    iframe = document.createElement("iframe");
                    embed = "https://www.youtube.com/embed/ID?autoplay=1&showinfo=0&autohide=1&rel=0";
                    mainImage = document.getElementById('product-main-image');
                    iframe.setAttribute("src", embed.replace("ID", $(this).data('id')));
                    iframe.setAttribute("id", "product-main-video")
                    iframe.setAttribute("frameborder", "0");
                    iframe.setAttribute("allowfullscreen", "1");

                    //remove if exists

                    if ($('#product-main-image iframe').length > 0) {
                        $("#product-main-image iframe").remove();
                    }

                    mainImage.appendChild(iframe);
        });
    });
	
	//tabview modal
	$('#gal2-modal li').not('.360').not('.video-gal').click(function(e) {
		e.preventDefault();
		var itemsrc = $(this).find('img').attr('src');
		var destimage = $('#galModal #modal-product-main-image img');

        $('#gal2-modal li').removeClass('active');
        $(this).addClass('active');

        if ($('#modal-product-main-image iframe').length > 0) {
            $('#modal-product-main-image iframe').remove();
        }
        if ($('#KeyShotXR').length) {
            $('#KeyShotXR').remove();
        }
        if ($('#modal-product-main-image #zoom_01').is(':hidden')) {
            $('#modal-product-main-image #zoom_01').show();
        }
		destimage.attr('src', itemsrc);
	});
    $('#gal2-modal li.360').click(function(e) {
        e.preventDefault();
        var src360gal = $(this).attr('data-lnk360-viewer');
        $('#gal2-modal li').removeClass('active');
        $(this).addClass('active');
        /*$('#modal-product-main-image #zoom_01').hide();*/

        if ($('#KeyShotXR').length) {
            $('#KeyShotXR').remove();
        }
        if ($('#modal-product-main-image iframe').length > 0) {
            $("#modal-product-main-image iframe").remove();
        }

        if ($("#lnk360-viewer").length) {
              $('#lnk360-viewer').show();
              $(window).trigger('resize');
            } else if (src360gal.endsWith('.html')) {
                $('#modal-product-main-image').append('<div id="KeyShotXR"><div style="max-width: 1000px; max-height: 1000px;"><div style="left: 0px; width: 100%; height: 0px; position: relative; padding-bottom: 100%; overflow: hidden;"><iframe src="' + src360gal + '" allowfullscreen webkitallowfullscreen mozallowfullscreen style="position: absolute; top: 0px; left: 0px; height: 100%; width: 1px; min-width: 100%; *width: 100%;" frameborder="0" scrolling="no"></iframe></div></div></div>');
            } else {
                $('#modal-product-main-image').append('<div id="lnk360-viewer" class="lnk360-player"></div>');
                webRotateOptions.configFileURL = src360gal;
                $('#lnk360-viewer').rotator(webRotateOptions);
            }
    });
    $('.ppbt #gal2-modal li.video-gal').click(function(e) {
            e.preventDefault();
            $('#gal2-modal li').removeClass('active');
            $(this).addClass('active');
            if ($("#lnk360-viewer").length) {
                $('#lnk360-viewer').hide();
            }
            if ($('#KeyShotXR').length) {
                $('#KeyShotXR').remove();
            }
                    iframe = document.createElement("iframe");
                    embed = "https://www.youtube.com/embed/ID?autoplay=1&showinfo=0&autohide=1&rel=0";
                    mainImage = document.getElementById('modal-product-main-image');
                    iframe.setAttribute("src", embed.replace("ID", $(this).data('id')));
                    iframe.setAttribute("id", "modal-product-main-video")
                    iframe.setAttribute("frameborder", "0");
                    iframe.setAttribute("allowfullscreen", "1");

                    //remove if exists

                    if ($('#modal-product-main-image iframe').length > 0) {
                        $("#modal-product-main-image iframe").remove();
                    }

                    mainImage.appendChild(iframe);
        });
     $('#galModal').on('hidden.bs.modal',function(){
            var rawVideoURL = $("#modal-product-main-video")[0].src;

            rawVideoURL = rawVideoURL.replace("?autoplay=1", "");
            $("#modal-product-main-video")[0].src = rawVideoURL;
            $('#gal2-modal li').removeClass('active');
            $('#modal-product-main-image iframe').remove();
            $('#gal2-modal li').first().addClass('active');
    });
	$('ul#gal2').each(function(){
	  var max = 4
	  var itemcount = $(this).find("li").length - max -1;// -1 to account for extra item appended.
	  
	  if ($(this).find("li").length > max) {
	    $(this)
	      .find('li:gt('+max+')')
	      .hide()
	      .end()
	      .append(
	        $('<li class="smore">+'+itemcount+'</li>').click( function(){
	        	if (itemcount == 0){
	        		$(this).hide();
	        	}
	          $('#galModal').modal('show');
	          $('#galModal ul li:eq(0)').addClass('active');
	        })
	    );
	  }
	});

    $(function() {
        $('#location-popover').popover({
            html: true,
            content: function() {
                return $('#popover_content_wrapper').html();
            }
        });
    });

    $(function() { 
        /**
         * Logic for showing submenu from image-menu click
         *
         * @method $.fn.click
         * @author Andrew
         */
        $('.images-dropdown-menu ul.sub-menu li').click(function() {
            var $thisClass = $(this).attr('class');
            $thisClass = $thisClass
                .replace('col-sm-4 col-ten-md-2 ', '') //remove other classes
                .replace(/ /g, ''); //remove white space
            $('.' + $thisClass).addClass('highlight-nav');

            hideImageMenu();
            showItemSubMenu($thisClass);
        });

        /**
         * Logic for showing submenu from text-menu click
         *
         * @method $.fn.click
         * @author Andrew
         */
        $('.text-dropdown-menu .sub-menu-text li').click(function() {
            if (!$(this).hasClass('highlight-nav')) {
                var $thisClass = $(this).attr('class');
                $thisClass = $thisClass
                    .replace('col-sm-4 col-ten-md-2 ', '') //remove other classes
                    .replace(/ /g, ''); //remove white space
                $('.sub-menu li').removeClass('highlight-nav');
                $('.' + $thisClass).addClass('highlight-nav');

                showItemSubMenu($thisClass);
            }
        });

        $('.backtocatbutton').on('click', function() {
            resetMenuGlobal();
        });
    });

    //$('.myaccount .nav-wrapper').addClass('static-sticky-bar');
    //Some utility JS by Andrew
    hidePromoBandArrows();

    $('#main-carousel .carousel-control').click(function() {
        $('#main-carousel').carousel('pause');
    });
    $('.more-link').click(function() {
        $(this).scrollTo('.product-features');
    });
    $('p.reviews-label').click(function() {
        $(this).scrollTo('#product-reviews');
    });

    // Changes March 2015: adding touch-start handlers for tablets viewing
    // the 'desktop' layout, forking using Modernizr's dodgy touch detection.
    // -------------------------
    // The following section, to exclude touch-capable laptops from the no-hover path, 
    // is commented out for now until we can test properly. And, obviously its userAgent sniffing
    // is not a sustainable, long-term solution.
    // .........................
    // var dua = navigator.userAgent;
    // console.log("dua=" + dua);
    // var isWinTouch = dua.indexOf("; Touch") === -1 ? false : dua.indexOf("Windows Phone") === -1 ? false : true;
    // console.log("isWinTouch=" + isWinTouch);
    // if (Modernizr.touch && !isWinTouch ) {
    // -------------------------
    // if (Modernizr.touch) {
    // Touch events probably exist...
    // Note that although we're not using AMD, and Modernizr is currently loaded after 
    // this script, we're all wrapped in a document.ready, so we should be ok for now.
    // var openTimer;
    // var myHref = "";
    // var $menuTriggers = $('.navbar-nav li.dropdown > a');
    // $('html').on('touchstart', function() { // hide menus if user taps outside the element
    // 	$($menuTriggers).find('.dropdown-menu, .dropdown-toggle .caret').stop(true,true).fadeOut(200);
    // });
    // $menuTriggers.on('touchstart', function(e) {
    // 	e.stopPropagation(); // so a tap on item won't be caught by 'html' element and hide everything
    // 	if($(this).siblings('.dropdown-menu').is(':visible')) {
    // 		// go to URL if one exists, otherwise close the menu
    // 		myHref = $(this).attr('href');
    // 		if (myHref !== undefined && myHref.length > 0) {
    // 			// just go to the darned url
    // 			// console.log("myHref=" + myHref);
    // 		} else {
    // 			// close the menu
    // 			$(this).siblings('.dropdown-menu').stop(true,true).fadeOut(200);
    // 			$(this).find('.caret').stop(true,true).fadeOut(200);
    // 		}
    // 	} else {
    // 		// open the menu, timer and all
    // 		e.preventDefault();
    // 		window.clearTimeout(openTimer);
    // 		$($menuTriggers).find('.dropdown-menu, .dropdown-toggle .caret').stop(true,true).fadeOut(200); // hide others before showing this
    // 		$(this).siblings('.dropdown-menu').stop(true,true).fadeIn(200);
    // 		$(this).find('.caret').stop(true,true).fadeIn(200);
    // 		openTimer = window.setTimeout(function() {
    // 			$('.dropdown-menu, .dropdown-toggle .caret').stop(true,true).fadeOut(200);
    // 		}, 3900); // adjust this delay as needed
    // 	}
    // });
    // } else {
    // var tOut;
    // if we believe that touch events don't exist, and we're pretending touch screen laptops don't exist... :-O

    // $('.navbar-nav li.dropdown').not('.search-icon-bk').hover(function() {
    // 		$(this).find('.dropdown-menu, .dropdown-toggle .caret').stop(true, true).delay(300).fadeIn(200);
    // 		tOut = setTimeout(function(){
    //         fadeOutSearchBar();
    //     },300);
    // }, function() {
    //  		$(this).find('.dropdown-menu, .dropdown-toggle .caret').stop(true, true).delay(300).fadeOut(200);
    //  		clearTimeout(tOut);
    // });
    // } 

    // $('.navbar-nav li.search-icon-bk').click(function() {
    // 	var $sBar = $(this).find('.dropdown-menu');
    // 	if ($sBar.is(':visible')) {
    // 		fadeOutSearchBar();
    // 	} else {
    // 		fadeInSearchBar();
    // 		if (!itIsIE) { // IE zaps placeholder text on focus, and later we'll fake our way around that, but for now just let IE users click in the field
    // 			window.setTimeout(function() { // It isn't setting focus without this little delay, most of the time.
    // 				$('input#search').focus();
    // 			}, 300);
    // 		}
    // 	}
    // });

    $('.main-dropdown-but a[href*="/#"]').click(function(e) {
        return false;
    });
    $('.main-dropdown-but').hover(function() {
        $('#nav-page-overlay').addClass('active');
    }, function() {
        $('#nav-page-overlay').removeClass('active');
    })
    $('.navbar-nav li.dropdown').not('.search-icon-bk').hover(function() {
        tOut = setTimeout(function() {
            if ($('.search-icon-bk').hasClass('open')) {
                $('.search-icon-bk').trigger("click");
            }
        }, 300);
    }, function() {
        clearTimeout(tOut);
    });
    // function fadeOutSearchBar(){
    // 	//$('#search-icon-main').attr('src','/_ui/linksys/img/ui/main-nav-search-icon@2x.png');
    // 	//$('.navbar-nav li.search-icon-bk .dropdown-menu').stop(true, true).fadeOut(200);
    // }
    // function fadeInSearchBar(){
    // 	//$('#search-icon-main').attr('src','/_ui/linksys/img/ui/main-nav-search-icon-blue@2x.png');
    // 	//$('.navbar-nav li.search-icon-bk .dropdown-menu').stop(true, true).fadeIn(200);
    // }

    // $(document).mouseup(function (e)
    // {
    //     var searchContainer = $('.navbar-nav li.search-icon-bk');

    //     if (!searchContainer.is(e.target) // if the target of the click isn't the container...
    //         && searchContainer.has(e.target).length === 0) // ... nor a descendant of the container
    //         // && !Modernizr.touch) //not on iPads, please
    //     {
    //        // $('#search-icon-main').attr('src','/_ui/linksys/img/ui/main-nav-search-icon@2x.png');
    // 		//$('.navbar-nav').find('.dropdown-menu').stop(true, true).delay(300).fadeOut(200);
    //     }
    // });

    // $('.navbar-nav li.search-icon-bk').hover(
    // 	function(){
    // 		$('#search-icon-main').attr('src','/_ui/linksys/img/ui/main-nav-search-icon-blue@2x.png'); 
    // 	},
    // 	function(){
    // 		var $sBar = $(this).find('.dropdown-menu');
    // 		console.log("search open "+ $sBar.is(':visible'))
    // 		if ($sBar.is(':visible')) {
    // 			$('#search-icon-main').attr('src','/_ui/linksys/img/ui/main-nav-search-icon-blue@2x.png'); 
    // 		} else{
    // 			$('#search-icon-main').attr('src','/_ui/linksys/img/ui/main-nav-search-icon@2x.png')
    // 		}
    // 	});

    // $('.cart-icon-bk').hover(
    // 	function(){$('#cart-icon-bk').attr('src','/_ui/linksys/img/ui/cart-icon-blue.png'); },
    // 	function(){$('#cart-icon-bk').attr('src','/_ui/linksys/img/ui/cart-icon-grey.png'); });

    $('.expand-cart').click(function(e) {
        e.preventDefault();
        $('.order-table').slideToggle();
        $(this).toggleClass('open-cart');
        $(this).text(function(i, text) {
            return text === expCart ? colCart : expCart;
        });
    });

    $('.promotion-apply').click(function(e) {
        e.preventDefault();
        $('.promotion-input, .promotion-apply, .promotion-cancel-row, .promotion-help-button').addClass('hidden');
        $('.promotion-text, .promotion-amount, .promotion-edit').removeClass('hidden');
    });

    $('.zip-section button').click(function(e) {
        e.preventDefault();
        $('.zip-section, .shipping-cancel-row, .shipping-help-button').addClass('hidden');
        // $('.cart-shipping, .shipping-zip, .shipping-amount').removeClass('hidden');
        // $('.cart-shipping, .shipping-zip, .shipping-edit').removeClass('hidden');
        // submit the form
        $('#postalCodeForm').submit();
    });

    $('.shipping-edit').click(function(e) {
        e.preventDefault();
        $('.shipping-edit').addClass('hidden');
        $('.form-section.cart-shipping').addClass('hidden');
        $('.zip-section, .shipping-cancel-row').removeClass('hidden');
    });

    $('.shipping-cancel').click(function(e) {
        e.preventDefault();
        $('.zip-section, .shipping-cancel-row, .shipping-help-button').addClass('hidden');
        $('.cart-shipping, .shipping-zip, .shipping-amount').removeClass('hidden');
        $('.cart-shipping, .shipping-zip, .shipping-edit').removeClass('hidden');
    });

    $('.promotion-edit').click(function(e) {
        e.preventDefault();
        $('.promotion-edit').addClass('hidden');
        $('.promotion-text').addClass('hidden');
        $('#removeVoucherLink').addClass('hidden');
        $('#voucherForm').removeClass('hidden');
        $('.promotion-cancel-row').removeClass('hidden');
    });

    $('.promotion-cancel').click(function(e) {
        e.preventDefault();
        $('.promotion-cancel-row').addClass('hidden');
        $('#removeVoucherLink').removeClass('hidden');
        $('#voucherForm').addClass('hidden');
        $('.promotion-text, .promotion-amount, .promotion-edit').removeClass('hidden');
    });

    $('.tooltip-promo').tooltip();
    $('.tooltip-support-download').tooltip();
    $('.tooltip-shipping').tooltip();
    $('.video-thumbs-list li a').tooltip();
    $('[data-toggle="tooltip"]').tooltip();
    //$('.linksys-acct-login').hide();

    $("input[name$='socialOptRadios']").click(function() {
        var loginOption = $(this).attr('id');
        $(".login-opt").hide();
        $("." + loginOption).show();
        // console.log('click');
    });

    $('.support-troubleshooting a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        var $this = $(this),
            activeTab = e.target.hash,
            arrowPerc = (((($this.parent().index() + 1)) * 2) - 1) * 50 / $('.container.support-troubleshooting.hidden-xs .nav-tabs > li').length,
            arrowLeft = arrowPerc.toString() + "%";

        $('.support-troubleshooting li.active').not($this.parent()).removeClass('active')

        $('.tab-pane.active').not(activeTab).removeClass('active');

        $('.tab-pane.active').siblings('.tab-arrow').animate({
            'left': arrowLeft
        }, 500);

        // $('html, body').animate({
        //        scrollTop: $(this).offset().top - 80
        //    }, 500);
    })
    $('.support-troubleshooting a[data-toggle="tab"]').click(function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top - 100
        }, 500);
    });
    $('.close-panel').click(function(e) {
        e.preventDefault();
        $(this).parent().removeClass('active');
        $(".support-troubleshooting ul.nav li").each(function(index) {
            $(this).removeClass('active');
        });
    })
    $('.support-troubleshooting ul li:first-child a[data-toggle="tab"]').tab('show');
    // Sticky Support Side nav
    $('.sticky-side-nav nav ul').hover(
        function() {
            $("a:NOT(.chat-modal) .side-nav-label").each(function(index) {
                $(this).addClass('active');
            });
        },
        function() {
            $("a:NOT(.chat-modal) .side-nav-label").each(function(index) {
                $(this).removeClass('active');
            });
        })
    $('.side-nav > li > a:NOT(.outLink)').click(function(e) {
        e.preventDefault();
        var sectionId = $(this).attr('href').replace("#", "");
        var sectionOffSet = $('#' + sectionId).offset().top - 60;
        $('html, body').animate({
            scrollTop: sectionOffSet
        }, 500);
    });

    //ALL ARTICLE PAGES
    $('.share-icon a').click(function(e) {
        e.preventDefault();
        $('.article-share-bar').toggle();
        if ($('.article-share-bar').css('display') === 'none') {
            $('.article-share-bar').css('display', '');
            $('.share-icon').removeClass('close-share-icon');
        } else {
            $('.share-icon').addClass('close-share-icon');
        }

    })

    //Remove this to enable links on "Steps"
    // $('.arrow_box.inactive, .wrapper-infinite.visible-xs.visible-sm > a h3.precall-divider').click(function (e){
    // 	e.preventDefault();
    // });

    /**
     * Logic for article downloads modal
     *
     * @method $.fn.click
     * @author Cutberto
     */

    $('.article-accordian-content a.eulacls').click(function(e) {
        e.preventDefault();
        $('#legal-download-modal').modal('show');
    });
});

$(document).ready(function() {
    $sasa = $('#sameAsShippingAddress, #billToAnotherAddress');
    $ao = $('.address-option');
    $sasa.click(function() {
        $ao.hide();
        $(this).parent().parent().parent().find('.address-option').show();
    });
});

$(document).scroll(function() {
    scrollTop = $(document).scrollTop();
    $('.side-nav-section').each(
        function(i) {
            var itemPosTop = Math.floor($(this).position().top - 60)
            if (itemPosTop <= scrollTop) {
                $('.sticky-side-nav a').removeClass('t-current b-current')
                $('.sticky-side-nav a.current').removeClass('current');
                $('.sticky-side-nav a').eq(i).addClass('current');

                if ($('.sticky-side-nav a').eq(i - 1).length)
                    $('.sticky-side-nav a').eq(i - 1).addClass('t-current');
                if ($('.sticky-side-nav a').eq(i + 1).length)
                    $('.sticky-side-nav a').eq(i + 1).addClass('b-current');
            }
        }
    );
    if ($('.affiliate').length) {
        var aff_els = []
        aff_els.push($('.affiliate #main-carousel'));
        aff_els.push($('.affiliate #perks'));
        aff_els.push($('.affiliate #works'));
        aff_els.push($('.affiliate #faq'));
        $(aff_els).each(
            function(i) {
                var itemPosTop = Math.floor($(this).position().top - staticStickyBarHeight)
                if (itemPosTop <= scrollTop) {
                    $('.affiliate-nav li').removeClass('active-aff');
                    if ((i - 1) >= 0)
                        $('.affiliate-nav li').eq(i - 1).addClass('active-aff');
                }
            });
    }

});

$(document).scroll(function() {
    if (!Modernizr.touch) { // this check is to prevent hiding the search box when the ios forms assistant 'scrolls' the page
        // $('.search-dropdown').css('display','none');
        // $('.dropdown-linksys.search-icon-bk').css('background-color','transparent');
        // $('#search-icon-main').attr('src','/_ui/linksys/img/ui/main-nav-search-icon.png');
        //$('.dropdown-linksys.search-icon-bk').removeClass('open');
        if ($('.search-icon-bk').hasClass('open')) {
            $('.search-icon-bk').trigger("click");
        }
    }
});

/**
 *
 * CATEGORY BANNER FULL STORY
 *
 */

ACC.productgrid = {

    expandTitle: "",
    collapseTitle: "",

    bindClickExpandFullStory: function() {
        // console.log("bindClickExpandFullStory");
        ACC.productgrid.expandTitle = $('.full-story').data("expandtitle");
        ACC.productgrid.collapseTitle = $('.full-story').data("collapsetitle");

        $('.full-story').click(function(event) {

            // event.preventDefault();
            var catHead = $('.category-header-section').height(),
                navWrap = $('.nav-wraper').height(),
                promoBand = $('.promo-band').height(),
                diff = catHead + navWrap + 95 + promoBand;

            if ($('#story').hasClass('in')) {
                $('.full-story').text(ACC.productgrid.expandTitle);
                history.pushState("", document.title, window.location.pathname);
                window.location.hash = '';
            } else {

                $('.full-story').text(ACC.productgrid.collapseTitle);
                $('html, body').animate({
                    scrollTop: diff
                }, 800);
                window.location.hash = '#fullstory';
            }
            //return false;
        });
    },

    bindClickStickyCloseIcon: function() {
        // console.log("bindClickStickyCloseIcon");
        $(document).on('click', '.sticky-x', function(e) {
            // event.preventDefault();
            $(this).parent().parent().parent().removeClass('in').addClass('collapse');

            history.pushState("", document.title, window.location.pathname);
            window.location.hash = '';
            $('.full-story').text(ACC.productgrid.expandTitle);
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
    },

    bindStickyCloseIcon: function() {
        // console.log("bindStickyCloseIcon");
        $(window).scroll(function() {
            var storyTop = $('#story').position();
            if (window.pageYOffset >= storyTop.top) {
                $('.sticky-x').addClass('fixed-x');
            } else {
                $('.sticky-x').removeClass('fixed-x');
            }
        });
    }
};

$(document).ready(function() {
    if ($(".full-story").length > 0) {
        ACC.productgrid.bindClickExpandFullStory();
        ACC.productgrid.bindClickStickyCloseIcon();
        ACC.productgrid.bindStickyCloseIcon();

        if (window.location.hash) {
            var hash = window.location.hash.substring(1);
            if (hash == 'fullstory') {
                $('.full-story').trigger("click");
            }
        }

    }

});

/**
 *
 * ADD PENCIL BANNER
 *
 */
ACC.pencilbanner = {

    banrCookie: '',
    banrCookieValue: '',
    banrHTML: '',

    bindClickCloseBanner: function() {
        $('.pb-close').click(function(event) {

            event.preventDefault();
            //SET COOKIE STATUS/VALUE TO CLOSED
            Cookies.set(ACC.pencilbanner.banrCookie, 'closed', {
                expires: 15,
                path: '/'
            });
            //REMOVE BANNER
            $("#pagebanner").empty();
            //return false;
        });
    },
    loadPencilBanner: function() {
        if (ACC.pencilbanner.banrCookieValue == null || ACC.pencilbanner.banrCookieValue == "opened") {

            Cookies.set(ACC.pencilbanner.banrCookie, 'opened', {
                expires: 15,
                path: '/'
            });
            $("#pagebanner").prepend(ACC.pencilbanner.banrHTML);

            ACC.pencilbanner.bindClickCloseBanner();
        } else {
            $("#pagebanner").empty();
        }
    },
    setCookieValue: function() {
        ACC.pencilbanner.banrHTML = pencilBanrHtml;
        ACC.pencilbanner.banrCookie = pencilCookie;
        ACC.pencilbanner.banrCookieValue = Cookies.get(ACC.pencilbanner.banrCookie);
        ACC.pencilbanner.loadPencilBanner();
    }
};

/**
 * Set Support Toolbox widths and heights
 *
 * @method setToolboxWidths
 * @author Cutberto
 */
function setToolboxWidths() {
    var toolboxNum = $('.container.support-troubleshooting.hidden-xs .nav-tabs > li').length,
        navTabWidth = $('.container.support-troubleshooting.hidden-xs .nav-tabs').width(),
        toolWidth = (navTabWidth - ((navTabWidth * 0.011) * (toolboxNum - 1))) / navTabWidth * 100,
        toolboxWidth = toolWidth / toolboxNum;

    $("#support-toolbox .container.support-troubleshooting.hidden-xs .nav-tabs > li").each(function(index) {
        $(this).width(toolboxWidth + '%');
    });
    $('.troubleshooting-block').height('auto');
    $('.troubleshooting-block').equalHeights();
}

/**
 * Return dropdown menu to normal state
 *
 * @method resetMenuGlobal
 * @author Andrew
 */
function resetMenuGlobal() {
    $('.images-dropdown-menu ul.sub-menu').removeClass('hidden');
    $('.images-dropdown-menu').css({
        'opacity': '1',
        'height': 'auto'
    });
    $('.row.text-dropdown-menu').addClass('hidden');
    $('.row.sub-categories').addClass('hidden');
    $('.sub-menu li').removeClass('highlight-nav');
    //$('.sub-categories .sub-menu').addClass('hidden');
}

/**
 * Return dropdown menu to normal state
 *
 * @method hideImageMenu
 * @author Andrew
 */
function hideImageMenu() {
    $('.images-dropdown-menu ul.sub-menu').addClass('hidden');
    $('.row.sub-categories').removeClass('hidden');
    $('.row.text-dropdown-menu').removeClass('hidden');
    // $('.row.sub-categories').fadeIn('slow',function(){
    // 	$('.row.sub-categories').removeClass('hidden');
    // });
    // $('.row.text-dropdown-menu').fadeIn('slow',function(){

    // });
    // $('.row.sub-categories').removeClass('hidden',10000);
    // $('.row.text-dropdown-menu').removeClass('hidden',10000);
}

/**
 * Show subMenu of parent menu item clicked
 *
 * @method showItemSubMenu
 * @param $thisClass
 * @author Andrew
 */
function showItemSubMenu($thisClass) {
    $('.sub-categories .sub-menu').hide();
    var $thisSubMenu = ".sub-menu-" + $thisClass;
    $($thisSubMenu).fadeIn();
}

/**
 * Hide promo-band navigation arrows if carousel-inner contains 1 element
 *
 * @method hidePromoBandArrows
 * @author Andrew
 */
function hidePromoBandArrows() {
    if ($('.promo-band .carousel-inner div').length >= 2) {
        $('.promo-band .promo-next-prev').css('display', 'block');
    }
}

/**
 * Show fixed product-sticky-header when scrolling past product-features div. also includes code for modelnumber sticky bar
 *
 * @method $.fn.scroll
 * @author Andrew
 */

// var modelNumberBar = false;
// var modelNumberOffSet;

// $(document).ready(function () {
// 	if ($('#modelnumber-sticky-bar').length > 0){
// 	  modelNumberOffSet = $('#modelnumber-sticky-bar').offset();
// 	  modelNumberBar = true;
// 	}
// });

//var menuY = $('. ').offset().top;

// $(document).scroll(function(){
// 	var topY = $(this).scrollTop();

// 	if(topY >= menuY) {
// 		//console.log(topY + ' ' + menuY);
// 		$('.account-header-menu').addClass('static-sticky-bar').addClass('fixed');
// 	} else if(topY < menuY) {
// 		//console.log(topY + ' ' + menuY);
// 		$('.account-header-menu').removeClass('static-sticky-bar').removeClass('fixed');
// 	}
// });

var isStaticStickyBar = false;
var isWTBMap = false;
var isProductDetail = false;
var isTopTen = false;

var staticStickyBarOffSet;
var staticStickyBarHeight;

$(document).ready(function() {
    $('.account-header-menu').addClass('static-sticky-bar');

    if ($('.static-sticky-bar').length > 0) {
        staticStickyBarOffSet = $('.static-sticky-bar').offset();
        staticStickyBarHeight = $('.static-sticky-bar').height();
        isStaticStickyBar = true;
    }
    if ($('.sl-map.static-sticky-bar').length > 0) {
        isWTBMap = true;
    }
    if ($('.container.product-info').length > 0) {
        isProductDetail = true;
    }
    if ($('#top-ten-tips').length > 0) {
        isTopTen = true;
    }

    if ($('.where-to-buy').length > 0) {
        //hide all logos and enable site logos only.  fix for region sites.
        var pathArray = window.location.pathname.split('/');
        $('.wtb-logo.' + pathArray[1]).css('display', 'block');
    }

});

$(window).scroll(function() {
    var pfpos = 600;
    var y = $(this).scrollTop();
    var x = $(document).width();
    // var ttt1 = $('.ttt1').offset().top;

    // if (y > (ttt1-80)) {
    //     $('.ttt-sticky-bar')
    //       .removeClass('deactive')
    //       .addClass('active');
    // } else {
    //     $('.ttt-sticky-bar')
    //       .removeClass('active')
    //       .addClass('deactive');
    // }

    if ($('.ttt1').length) {
        var y = $(this).scrollTop();
        var ttt1 = $('.ttt1').offset().top;

        if (y > (ttt1 - 80)) {
            $('.ttt-sticky-bar')
                .removeClass('deactive')
                .addClass('active');
        } else {
            $('.ttt-sticky-bar')
                .removeClass('active')
                .addClass('deactive');
        }
    }
    if (x > 768) {
        if (y > (pfpos - 20)) {
            $('.product-sticky-header')
                .removeClass('deactive')
                .addClass('active');
        } else {
            $('.product-sticky-header')
                .removeClass('active')
                .addClass('deactive');
        }

        //    if (modelNumberBar){
        //    	if(y > modelNumberOffSet.top) {
        //    		$('#modelnumber-sticky-bar').addClass('fixed');
        //    	} else {
        //    		$('#modelnumber-sticky-bar').removeClass('fixed');
        //    	}
        // } 
        if (isStaticStickyBar) {
            if (y > staticStickyBarOffSet.top) {
                if (isWTBMap && ($(window).scrollTop() + $(window).height() >= $(document).height() - ($('.fat-footer').outerHeight() - ($(window).height() - 500)))) {

                    $('.static-sticky-bar').removeClass('fixed');
                    $('.static-sticky-bar').addClass('fixed-bottom');

                } else {
                    $('.static-sticky-bar').addClass('fixed');
                    $('.static-sticky-bar').removeClass('fixed-bottom');
                    $('.static-sticky-bar').next().css("padding-top", staticStickyBarHeight);
                    //$('.myaccount-replacements-main').css( "padding-top", staticStickyBarHeight );
                    $('.myaccount-header').next().css("padding-top", staticStickyBarHeight);
                }

            } else {
                $('.static-sticky-bar').removeClass('fixed');
                $('.static-sticky-bar').removeClass('fixed-bottom');
                $('.static-sticky-bar').next().css("padding-top", 0);
                $('.myaccount-header').next().css("padding-top", 0);
            }
        }
    } else if (isProductDetail) {
        if (y > staticStickyBarOffSet.top) {
            $('.static-sticky-bar.mob').addClass('fixed');
            $('.static-sticky-bar.mob').removeClass('fixed-bottom');
            $('.static-sticky-bar').next().css("padding-top", staticStickyBarHeight);
        } else {
            $('.static-sticky-bar.mob').removeClass('fixed');
            $('.static-sticky-bar.mob').removeClass('fixed-bottom');
            $('.static-sticky-bar').next().css("padding-top", 0);
        }
        //$('.static-sticky-bar').next().css( "padding-top", staticStickyBarHeight );
    } else if (isTopTen) {
        if (y > staticStickyBarOffSet.top) {
            $('.static-sticky-bar').addClass('fixed');
            $('.static-sticky-bar').removeClass('fixed-bottom');
            $('.static-sticky-bar').next().css("padding-top", staticStickyBarHeight);
        } else {
            $('.static-sticky-bar').removeClass('fixed');
            $('.static-sticky-bar').removeClass('fixed-bottom');
            $('.static-sticky-bar').next().css("padding-top", 0);
        }
        //$('.static-sticky-bar').next().css( "padding-top", staticStickyBarHeight );
    } else {
        if (isStaticStickyBar) {
            $('.static-sticky-bar').removeClass('fixed');
            $('.static-sticky-bar').next().css("padding-top", 0);
            $('.myaccount-header').next().css("padding-top", 0);
        }
    }
});

$(document).ready(function() {
    var $radios = $('.precall-form-section .col-md-6:first-child .form-section .radio-control');
    var $opts = $('.precall-form-section .col-md-6:nth-child(2) > .row');
    var $opt1 = $('.precall-form-section .col-md-6:nth-child(2) .row:first-child');
    var $opt1 = $('.precall-form-section .col-md-6:nth-child(2) .row:first-child');
    var $opt2 = $('.precall-form-section .col-md-6:nth-child(2) .row:nth-child(2)');
    $($radios).click(function() {
        var $this = $(this).parent().parent().parent();
        $opts.hide();
        $radios.not(this).removeAttr('checked');
        if ($this.is(':nth-child(2)')) {
            $opt1.show();
        } else {
            $opt2.show();
        }
    });
});
/**
 * Scroll to desired div after click an element
 *
 * @method scrollTo
 * @param div
 * @author Andrew, Edward
 */
$.fn.scrollTo = function(div) {
    $('html,body').animate({
        scrollTop: $(div).offset().top
    }, 1000);
}

$(document).ready(function() {
    $click = $('.col-md-4.order-left ul li:nth-child(-n+3)');

    $click.click(function() {
        // console.log('clicked');
        $this = $(this);
        $thisOuter = $this.parent().parent();
        $children = $this.parent().parent().find('ul li:nth-child(n+4)');
        $or = $this.parent().parent().parent().find('.order-right');

        $thisOuter.toggleClass('open');
        $children.toggle();
        $or.toggle();
    });
});

$(document).ready(function() {
    var $window = $(window);
    var $click2 = $('h4.login-header, h4.guest-login-header, h4.login-header');
    var $accLogin = $('.linksys-acct-login');
    // var $socRadio = $('#soc-acct-login');
    // var $guestLogin = $('#guestForm');
    var $defaults = $('.login-section > *, .register-section > *, .guest-login-section > *').not('h4, script, .paypalCheckoutButton');

    var checkWidth = function() {
        var windowsize = $window.width();
        if (windowsize < 768) {
            $click2.unbind("click");
            $click2.click(function() {
                $this = $(this);
                $children = $this.parent().children().not('h4, script, .paypalCheckoutButton');
                $this.parent().toggleClass('open');
                $children.toggle();
            });
        } else {
            $click2.unbind("click");
            $defaults.show();
            //$guestLogin.show();
            //$accLogin.hide();
            //$socRadio.prop('checked', true);
        }
    }
    $accLogin.hide();
    checkWidth();
    $window.resize(checkWidth);
});

/** PERMANENTLY MOVED TO THE PAGE TEMPLATE
 * Logic to calculate star rating and add span element for ui
 *
 * @method $.fn.starReview
 * @author Cutberto
 */

// $.fn.starReview = function() {
//     return $(this).each(function() {
//         var val = parseFloat($(this).html());
//         val = Math.round(val * 2) / 2; 
//         var sizeW = Math.max(0, (Math.min(5, val))) * 21;
//         var $span = $('<span title="'+val+' Stars"/>').width(sizeW);
//         $(this).html($span);
//     });
// }

// $(document).ready(function(){
// 	$('span.stars').starReview();
// });

// // Separate initialization event to get around a bug in which Webkit browsers measure height before the page has completely loadDesktopProductGallery
// $(window).load(function() {
// 	// Since the 'hang-(left|right)' images are absolutely positioned, they do not cause their containing div to expand,
// 	// so if the content in the other column(s) is shorter than the height of the image, the image will be
// 	// cut off. So we'll look for that class and set a min-height equal to the img height, unless the parent
// 	// already has a larger min-height on it for its own reasons.
// 	$('.hang-left, .hang-right').each(function() {
// 			enlargeBox($(this));
// 	});
// });

// $(window).load(function(){
// 	$('#myModal').modal({
//   		backdrop: 'static',
//   		keyboard: false
// 	}); 
//     $('#myModal').modal('show');

// });

// $('.precall-02-buttons .btn-blue').click(function(e){
// 	e.preventDefault();
// 	$('#articleSuggestion').modal('show');
// });

// $('#country-selector-link').click(function(e){
// 	e.preventDefault();
// 	$('#countrySelectorModal').modal('show');
// });

$('.wizard-form .find-product-link').click(function(e) {
    e.preventDefault();
    $('#myModal-find-product').modal('show');
});

$('.login-opts .sign-facebook').click(function(e) {
    e.preventDefault();
    $('#myModal-social').modal('show');
});

$('.chat-modal').click(function(e) {
    e.preventDefault();
    $('#chat-modal').modal('show');
});

// (6) RESPONSIVE BEHAVIORS //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Keep equal height components equal using Matt Banks' plugin. Consider rewriting plugin to manage multiple 'equal-height groups' on a page
$(window).resize(function() {
    $('.key-feature-block').height('auto');
    if ($('.key-feature-block').is(':visible')) $('.key-feature-block').equalHeights();

    $('.troubleshooting-block').height('auto');
    if ($('.troubleshooting-block').is(':visible')) $('.troubleshooting-block').equalHeights();

    $('.review-block').height('auto');
    if ($('.review-block').is(':visible')) $('.review-block').equalHeights();

    $('.pod-block').height('auto');
    if ($('.pod-block').is(':visible')) $('.pod-block').equalHeights();

    if ($('.pageLabel-homepage').is(':visible')) {
        $('.pageLabel-homepage #main-carousel .item').height('auto');
        $('.pageLabel-homepage #main-carousel .item').equalHeights();
    }

    $('.you-like-frame').height('auto');
    if ($('.you-like-frame').is(':visible')) $('.you-like-frame').equalHeights();

    $('.return-instructions-boxes div.row > div > div > div').height('auto');
    if ($('.return-instructions-boxes').is(':visible')) $('.return-instructions-boxes > div > div > div').equalHeights();

    if ($('.home-post').is(':visible')) {
        $('.article').height('auto');
        $('.article').equalHeights();
    }

    if ($(window).width() > 992) {
        var navMenu = $('nav#menu-left, nav#menu-right');
        if (navMenu)
            navMenu.mmenu().trigger("close.mm");
    }
    if ($(window).width() < 767) {
        $('#product-features .key-feature-block').height('auto');
    }
    if ($(window).width() < 480) {
        if ($('.you-like-frame').is(':visible')) $('.you-like-frame').height('auto');
    }
});

// global variable for incremental width checks for non-matchMedia browsers
var currentWinSize = null;

// Initialization by screen width
function initializeMobile() {
    if (shouldShowCollapsibleSections) {
        // hideSections();
        // initializeAccordions();
        // console.log("i should now do the accordion stuff...");
        $('.product-retailers-block').daccordion();
        $('#prod-page-sections').daccordion();
        $('#prod-page-sections-mob').daccordion();
        $('#support-prod-page-sections').daccordion();
        $('#media-kits-sections').daccordion();
    }
    // if (shouldShowProdGallery) {
    // 	loadMobileProductGallery();
    // }
    // if (shouldShowProdVideoGallery){
    // 	loadMobileVideoGallery();
    // }
    // if (shouldShowHero) {
    // 	loadMobileHero();
    // }
    $('.carousel').carousel('pause');
    $('#main-carousel.carousel').carousel('cycle');
    $('#promo-carousel.carousel').carousel({
        interval: 3000
    })
    $('#promo-carousel.carousel').carousel('cycle');

    $('#reviews-carousel').carousel();
    $('#smb-story-switch-carousel').carousel();
    $('#smart-wifi-carousel').carousel();
}

function initializeDesktop() {
    // console.log("running initializeDesktop");
    if (shouldShowCollapsibleSections) {
        // console.log("shouldShowCollapsibleSections=" + shouldShowCollapsibleSections);
        $('.product-retailers-block').daccordion('openAll');
        $('#prod-page-sections').daccordion('openAll');
        $('#support-prod-page-sections').daccordion('openAll');
        $('#media-kits-sections').daccordion('openAll');

        if ($('.troubleshooting-block').is(':visible')) {
            setToolboxWidths();

        }
    }

    $('#main-carousel.carousel').carousel('cycle');
    $('#promo-carousel.carousel').carousel('pause');
}

function widthChange(size) {
    // console.log("running widthChange(" + size + ")");
    if (size == 'mobile') {
        initializeMobile();
    } else {
        initializeDesktop();
    }
}

// Determine screen mode - desktop or mobile
function mqWidthChange(xsCheck) {
    if (xsCheck.matches) {
        widthChange('mobile');
    } else {
        widthChange('desktop');
    }
}

function ieWidthChange() { // need to get IE8 and IE9 to test this!
    var windowWidth = $(window).width();
    var newWinSize = windowWidth < 768 ? 'mobile' : 'desktop';
    if (newWinSize != currentWinSize) {
        widthChange(newWinSize);
        currentWinSize = newWinSize;
    }
}

var ie = (function() {
    var undef,
        v = 3,
        div = document.createElement('div'),
        all = div.getElementsByTagName('i');
    while (
        div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
        all[0]
    );
    return v > 4 ? v : undef;
}());

// fire off change functions when breakpoints are hit
//if (window.matchMedia) {
//if(typeof window.matchMedia != "undefined" || typeof window.msMatchMedia != "undefined") {
if (ie <= 9) {
    // console.log("ie <= 9");
    $(document).ready(function() {
        ieWidthChange();
    });
    $(window).resize(function() {
        ieWidthChange();
    });
} else {
    var xsCheck = window.matchMedia("(max-width: 767px)");
    xsCheck.addListener(mqWidthChange);
    mqWidthChange(xsCheck); // To set up desktop behavior immediately if width > 767px
}

// (7) FRAME BUSTER //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function breakFrame() {
    if (top != self) {
        top.location.replace(self.location.href);
        breakFrameCount++;
        if (breakFrameCount === 5) {
            clearInterval(breakFrameInt);
            displayOverlayWarning();
        }
    } else {
        clearInterval(breakFrameInt);
    }
}

function displayOverlayWarning() {
    var overlayWarning = jQuery('<div id="overlay-warning"><h1>You are currently viewing Linksys.com through a third party website via iFrame.  To access <a href="http://www.linksys.com/" target="_blank">Linksys.com</a> free and secure from third party clickjacking, <a href="http://www.linksys.com/" target="_blank">click here</a>.</h1></div>');
    overlayWarning.appendTo(document.body)
}

// (8) YouTube MOBILE Product Gallery //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded",
    function() {
        var div, n,
            v = document.getElementsByClassName("yt-embed");
        for (n = 0; n < v.length; n++) {
            div = document.createElement("div");
            div.setAttribute("data-id", v[n].dataset.id);
            div.innerHTML = labnolThumb(v[n].dataset.id, v[n].dataset.thumb);
            div.onclick = labnolIframe;
            v[n].appendChild(div);
        }
    });

function labnolThumb(id, thumbtype) {
    var thumb = '<img src="https://i.ytimg.com/vi/ID/' + (thumbtype === 'max' ? 'maxresdefault' : 'sddefault') + '.jpg" class="img-responsive">';
    var play = '<i class="glyphicon glyphicon-play"></i>';
    return thumb.replace("ID", id) + play;
}

function labnolIframe() {
    var iframe = document.createElement("iframe");
    var embed = "https://www.youtube.com/embed/ID?autoplay=1&showinfo=0&autohide=1&rel=0";
    iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    this.parentNode.replaceChild(iframe, this);
}

//SUPPORT FOR CONSOLE.LOG ON IE8
// var alertFallback = false;
// if (typeof console === "undefined" || typeof console.log === "undefined") {
//  console = {};
//  if (alertFallback) {
//      console.log = function(msg) {
//           alert(msg);
//      };
//  } else {
//      console.log = function() {};
//  }
// }

/* Legacy Codekit Compiler
@codekit-append "/linksys-libraries/productPlayer.js";
@codekit-append "/linksys-libraries/userGuides.js";
@codekit-append "/linksys-libraries/resourceCenter.js";
*/
// Padiact EMEA popup
$(document).ready(function() {
    var emeaSites = ['cz', 'dk', 'fi', 'gr', 'hu', 'it', 'no', 'pl', 'pt', 'ro', 'ru', 'se', 'ua', 'at', 'ch', 'be', 'eg', 'kw', 'qa', 'sa', 'za', 'ae', 'tr'];
    var zcountryCode = ACC.config.countryContextPath.replace(/\//g, "");
    var zcountryLang = $('html').attr('lang');
    if (emeaSites.indexOf(zcountryCode) != -1) {
        function addCountryC() {
            $('.padiForm input#nrlsk_field7').attr('value', zcountryCode);
            $('.padiForm input#nrlsk_field8').attr('value', zcountryLang);
        }
        setTimeout(addCountryC, 11000)
    }
});

// 'use strict';

var productPlayer = (function () {

    var player = {
        playlist: [],
        wPlayer: null,
        yPlayer: null,
        yReady: false,
        wReady: false,
        yLoaded: false,
        wLoaded: false,
        yDetected: false,
        wDetected: false,
        state: 'stopped',
        videoId: null,
        wistiaOptions: {
            videoFoam: true
        },
    },
    videoListElement = document.getElementById('playerPlaylist'),
    videosList = videoListElement ? videoListElement.childNodes : null,
    videos = [],
    attrs;

    if (videosList) {
        for (var i = 0, len = videosList.length; i < len; i++) {

            if (videosList[i].nodeName === 'LI') {
                
                if (videos.length > 2) 
                    videosList[i].className = videosList[i].className + ' hidden-xs';

                videos.push({
                    id: videosList[i].getAttribute('data-vid'),
                    type: videosList[i].getAttribute('data-vendor'),
                    title: videosList[i].getAttribute('data-vtitle') 
                });

                if (!player.wDetected && videos[videos.length - 1].type == 2) {
                    player.wDetected = true;
                    player.videoId = videos[videos.length - 1].id; 
                }


                if (!player.yDetected && videos[videos.length - 1].type == 1)
                    player.yDetected = true;
            }
    
        };
        
        if (videos.length) {
            player.playlist = videos;
            player.videoId = player.playlist[0].id;
        }
    }

    function onYoutubeReady() {
        player.yLoaded = true;
    };

    function onYoutubeStateChange (e) {
        if (e.data === YT.PlayerState.ENDED) {
            player.state = 'ended';
        } else if (e.data === YT.PlayerState.PLAYING) {
            player.state = 'playing';
        } else if (e.data === YT.PlayerState.PAUSED) {
            player.state = 'paused';
        }
    };

    return {
        createPlayer: function (type) {
            if (type === 'youtube') {
                return new YT.Player('youtubePlayer', {
                    height: '100%',
                    width: '100%',
                    videoId: player.videoId,
                    playerVars: {
                        rel: 0,
                        showinfo: 0
                    },
                    events: {
                        'onReady': onYoutubeReady,
                        'onStateChange': onYoutubeStateChange
                    } 
                });
            } else if (type === 'wistia') {
                var playlist = productPlayer.getPlaylist(),
                len = playlist.length,
                api = [],
                wistiaEmbed;

                for (var i = 0; i < len; i++) {
                    if (playlist[i].type == 2) {
                        wistiaEmbed = Wistia.embed(playlist[i].id, player.wistiaOptions);
                        
                        if (wistiaEmbed) 
                            api.push(wistiaEmbed);
                    }
                };

                if (api[0]) {
                    player.wPlayer = api[0];
                    player.wReady = true;
                }

                window._wq = window._wq || [];
                _wq.push({ '_all': function(video) {
                        video.embedded(function() {
                            var bin = video._mediaData.assets[0].url,
                                id = video.hashedId(),
                                src,
                                el;
                                //img = document.getElementById('wistia-' + id + '-img'),
                            var img = document.getElementById('wistia_' + id);
                            var thumbnail,
                                icon,
                                inner,
                                innerImg;

                            console.log("Wisting Img: "+img);

                            if (img) {
                                src = bin.slice(0, -3);
                                src += 'jpg?mage_crop_resized=240x180';
                                console.log("Wistia SRC: "+src);
                                el = $('#playerPlaylist').find('li[data-vid="' + id + '"]');
                                thumbnail = $('<div class="product-playlist-thumbnail left"/>');
                                inner = $('<div class="product-playlist-thumbnail-inner"/>');
                                icon = $('<i class="glyphicon glyphicon-play" aria-hidden="true"/>');
                                innerImg = $('<img id="wistia-' + id + '-img" src="' + src + '" alt="">');
                                 
                                el.prepend(
                                    thumbnail.append(
                                        inner.append(innerImg), icon
                                ));
                            }
                        });
                }});
            }
        },
        getPlaylist: function () {
            return player.playlist;
        },
        getState: function () {
            return player.state;
        },
        loadPlayer: function (type) {
            if (type === 'youtube') {
                if (player.yReady) {
                    player.yPlayer = this.createPlayer(type);
                }

            } else if (type === 'wistia') {
                if (Wistia) 
                    this.createPlayer(type);
            }
        },
        yPause: function () {
            player.yPlayer.pauseVideo();
        },
        yPlay: function () {
            player.yPlayer.playVideo();
        },
        wPlay: function () {
            player.wPlayer.play();
        },
        setPlaylist: function (videos) {
            player.playlist = videos;
        },
        setVideo: function (id) {
            player.videoId = id;
        },
        getPlayingVideoId: function () {
            return player.videoId;
        },
        ready: function (type) {
            if (type === 'youtube') {
                player.yReady = true;

            } else if (type === 'wistia') {
                player.wReady = true;
            }
        },
        isReady: function (type) {
            if (type === 'youtube') {
               return player.yReady;
            } else if (type === 'wistia') {
                return player.wReady;
            } else {
                return;
            }
        },
        isDetected: function (type) {
            if (type === 'youtube') {
               return player.yDetected;
            } else if (type === 'wistia') {
                return player.wDetected;
            } else {
                return;
            }
        },
        launchPlayer: function (type, id) {
            if (typeof id !== 'string' || id.length < 2)
                return;

            if (type === 'youtube' && player.yPlayer && player.yPlayer.loadVideoById) {
                player.videoId = id;
                player.yPlayer.loadVideoById(id);
                return player;
            } else if (type === 'wistia') {
                this.setVideo(id);
                player.wPlayer.replaceWith(id);
            }
        }
    }
})();

function loadMoreClick(e) {
    var playlist = document.getElementById('playerPlaylist'),
        btn = document.getElementById('playlistLoadMore'),
        li;

    if (playlist) {
        li = $(playlist).find('.hidden-xs').removeClass('hidden-xs');
        $(btn).removeClass('visible-xs').hide();
    }

    e.preventDefault();
    e.stopPropagation();
}

function videosListClick (e) {
    var el = $(this), 
        idx = el.index(),
        yEmbed = document.getElementById('youtubeEmbed'),
        wEmbed = document.getElementById('wistiaEmbed'),
        playlist;

        el.parent().find('li.selected').removeClass('selected');

    if (idx > -1) {
        playlist = productPlayer.getPlaylist();
        if (Array.isArray(playlist) && playlist.length) {
            if (playlist[idx] && playlist[idx].id) {
                if (playlist[idx].type == 1) {
                    $(wEmbed).addClass('hidden');
                    $(yEmbed).removeClass('hidden');
                    
                    if (playlist[idx].id !== productPlayer.getPlayingVideoId() && productPlayer.isReady('youtube'))
                        productPlayer.launchPlayer('youtube', playlist[idx].id);
                } else if (playlist[idx].type == 2) {
                    if (productPlayer.isReady('youtube')) 
                        productPlayer.yPause();
                    
                    $(yEmbed).addClass('hidden');
                    $(wEmbed).removeClass('hidden');

                    if (productPlayer.getPlayingVideoId() !== playlist[idx].id)
                        productPlayer.launchPlayer('wistia', playlist[idx].id);

                    if (productPlayer.isReady('wistia'))
                        productPlayer.wPlay();
                }

                if (playlist[idx].title)
                    $('#productTitle').text(playlist[idx].title);
            }
        }

        el.addClass('selected');
    }
};
 
window.onYouTubeIframeAPIReady = function () {
    productPlayer.ready('youtube');
    productPlayer.loadPlayer('youtube');
};

$(window).load(function() {
    var playlistBox = document.getElementById('playerPlaylist'),
        youtubeIsDetected = productPlayer.isDetected('youtube'),
        wistiaIsDetected = productPlayer.isDetected('wistia'),
        script,
        link,
        yEmbed = document.getElementById('youtubeEmbed'),
        wEmbed = document.getElementById('wistiaEmbed'),
        playlist = productPlayer.getPlaylist(),
        loadMoreBtn = document.getElementById('playlistLoadMore');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', loadMoreClick);
            if (playlist && playlist.length < 4)
                $(loadMoreBtn).removeClass('visible-xs').hide();
        }

        if (playlistBox) {
            if (youtubeIsDetected || wistiaIsDetected) {
                $(playlistBox).on('click', 'li', videosListClick);
                if (document.getElementById('playerPlaylistLoader'))
                    document.getElementById('playerPlaylistLoader').className = 'col-md-3 product-player-col';
            }

            if (wistiaIsDetected) {
                $(wEmbed).find('.wistia_embed:first').removeClass('hidden');
                productPlayer.loadPlayer('wistia');
            }

            if (youtubeIsDetected) {
                // YouTube Player API script
                script = document.createElement('script');
                script.src = '//www.youtube.com/player_api';
                link = document.getElementsByTagName('link')[0];
                link.parentNode.insertBefore(script, link);
            }

            if (!youtubeIsDetected || playlist && playlist.length > 0 && playlist[0].type == 2) {
                $(yEmbed).addClass('hidden');
                $(wEmbed).removeClass('hidden');
            } 
        }
});
(function() {
	'use strict';

	function init () {
		var hash = location.hash,
		menu = document.getElementById('user-guides-menu');
		
		$('.user-guides-top').click(selectGuide);
		menu.addEventListener('click', selectGuideMenu);
		
		if (hash) {
			hash = hash.slice(1);

			if (hash.indexOf('business') > -1)
				$(menu).find('a[href="#business"]').tab('show');

			$(document.getElementById('a-' + hash)).click();

			setTimeout(function () {
	    		$('html, body').animate({ scrollTop: $('#s-' + hash).offset().top });
	    	}, 300);
		}
	}

	function selectGuideMenu (e) {
		var tab;
		if (e.target && e.target.nodeName == 'A') {
			tab = e.target.href.split('#')[1];
			$(document.getElementById('user-guides-menu')).find('a[href="#' + tab + '"]').tab('show');
			
			e.preventDefault();
		}
	}

	function selectGuide (e) {
		var target = e.currentTarget.id,
			className = e.currentTarget.className,
			content = document.getElementById('content'),
			elems = content.querySelectorAll('.user-guides-active'),
			arrElems = Array.prototype.slice.call(elems),
			lastPos = $(window).scrollTop(),
			targetEl;

		target = target.slice(2);
		arrElems.forEach(removeActiveClass);
		$('.user-guides-sub.in').collapse('hide');

		if (className.indexOf('user-guides-active') < 0) {
			// State: Inactive
			e.currentTarget.className = className + ' user-guides-active';
			if (target && typeof target === 'string') {
				location.hash = target;
				targetEl = document.getElementById('s-' + target);
				$(targetEl).collapse('show');
				$(window).scrollTop(lastPos);
			}
		} else {
			// State: Active
			history.pushState('', document.title, window.location.pathname + window.location.search);
		} 	
		
		e.preventDefault();
		e.stopPropagation();
	}

	function removeActiveClass (e) {
		e.className = 'text-center user-guides-item user-guides-top';
	}

	if (document.getElementById('user-guides'))
		$(document).ready(init);
})();

$(function(){

  var resourceCenterTabs = $('.home-category');

  if (resourceCenterTabs) {
    var hash = window.location.hash;

    if (hash == ""){
    	$('.home-category ul li:first-child a').tab('show');
    } else {
    	hash && $(hash).tab('show');	
    }
    
    $('.home-category ul a').click(function (e) {
      $(this).tab('show');
      window.location.hash = $(this).attr('id');
    });

  }
  
});


function arLoadBlogPostForm(){console.log("triggred"),jQuery.ajax({url:ajaxurl,type:"POST",dataType:"HTML",data:{action:"gf_post_form",res:grecaptcha.getResponse(widgetId1)},beforeSend:function(){},success:function(e){jQuery("#gf-form-wrap").html(e);var t="post_content";switchEditors.go(t,"tmce"),quicktags({id:t}),tinyMCEPreInit.mceInit[t].elements=t,tinyMCEPreInit.mceInit[t].body_class=t,tinyMCEPreInit.mceInit[t].succesful=!1,tinymce.init(tinyMCEPreInit.mceInit[t])}})}!function(e){function t(t,a){$el=e(a),e.get(t,function(t){e(".loading-indicator--position").hide(),$el.data("current",parseInt($el.data("current"))+1),html=e(t).find(".userblog-feat").html(),e(".userblog-feat").append(html),$el.show(),e.waypoints("refresh"),e("body").data("ajaxLoadingPosts",!1)})}var a;window.CampDoug_Vars&&(a=window.CampDoug_Vars.ajaxURL),e(document).mouseup(function(t){var a=e(".menutoggle");a.is(t.target)||0!==a.has(t.target).length||(a.find(".menudrop").removeClass("active"),a.removeClass("active"))}),e(function(){e(".entry-content").fitVids();var n=e("#includeIngText"),o=n.attr("placeholder"),i=e("#excludeIngText"),r=i.attr("placeholder"),s=function(t){var a=e(this).parent().find(".bootstrap-tagsinput");a.find(".tag").length&&a.find("input").attr("placeholder","")},c=function(t){var a=e(this),n=a.parent().find(".bootstrap-tagsinput");if(!n.find(".tag").length){var i="includeIngText"==a.attr("id")?o:r;n.find("input").attr("placeholder",i)}};n.tagsinput({tagClass:"include-item",trimValue:!0}),i.tagsinput({tagClass:"exclude-item",trimValue:!0}),n.on("itemAdded",s),n.on("itemRemoved",c),i.on("itemAdded",s),i.on("itemRemoved",c),e("#back-to-top-button").on("click",function(t){t.preventDefault(),e("html, body").animate({scrollTop:0},"fast")});var l=function(e,t){if(e&&e.length){e.closest("li").toggleClass("active").siblings().removeClass("active")}t&&t.length&&t.toggleClass("active").siblings().removeClass("active")};e(".ar-nav").on("click",".menutoggle .showdrop",function(t){t.preventDefault(),e(this).next().is(".active")||(e(".menudrop.active").parent().removeClass("active"),e(".menudrop.active").removeClass("active"));var a=e(this);e(a.next()).toggleClass("active"),a.parent().toggleClass("active")}),e(".loginstate .show-user-menu").on("click",function(t){t.preventDefault();var a=e(this),n=e(".nav-tab__user-menu");l(a,n)}),e("#ingredientSearch, .search-tab.small-screen a").on("click",function(t){t.preventDefault();var a=e(this),n=e(".nav-tab__search");a.hasClass("ingredient-searchtxt")?l(null,n):l(a,n)}),e(".nav-tab__search .icon--close").on("click",function(t){t.preventDefault();e(".nav-tab__search").removeClass("active")}),e(".filter").on("click",function(t){t.preventDefault(),e(".dropdown-menu").toggleClass("active")});var d,u=2;e(".primary-content").on("click",".load-more-button",function(t){var n=e(this);if(n.hasClass("disabled"))return!1;if(!a)return!0;t.preventDefault();var o=e(void 0===n.data("c")?".primary-content > .entry-grid":n.data("c"));d||(d=n.text());var i=void 0!==n.data("next")?n.data("next"):u,r=void 0!==n.data("action")?n.data("action"):"",s=void 0!==n.data("sort")?n.data("sort"):"",c=void 0!==n.data("args")?n.data("args"):"";e.ajax({url:a,type:"POST",context:n,data:{action:"get_more_posts",query_vars:window.CampDoug_Vars.queryVars,page:i,load_action:r,sort:s,args:c},beforeSend:function(){n.text("Loading...").addClass("disabled")},success:function(t){t=e.parseJSON(t),console.log(o),u+=1,n.data("next",i+1),o.append(t.content);o.find(".grid-item").length<t.total_posts?n.text(d).removeClass("disabled"):n.remove()}})}),e(".content-container").on("click",".load-more-button",function(t){var n=e(this);if(n.hasClass("disabled"))return!1;if(!a)return!0;t.preventDefault();var o=e(".content-container > .entry-grid");d||(d=n.text()),e.ajax({url:a,type:"POST",data:{action:"get_more_posts",query_vars:window.CampDoug_Vars.queryVars,page:u},beforeSend:function(){n.text("Loading...").addClass("disabled")},success:function(t){t=e.parseJSON(t),u+=1,o.append(t.content);o.find(".grid-item").length<t.total_posts?n.text(d).removeClass("disabled"):n.remove()}})}),e("#searchrecipes").hide(),e("#attachrecipe a").on("click",function(t){t.preventDefault(),e("#searchrecipes").fadeToggle("fast")}),e("#searchrecipes .close").on("click",function(t){t.preventDefault(),e("#searchrecipes").fadeToggle("fast")}),e(".addbutton").on("click",function(t){t.preventDefault(),e("#searchrecipes").fadeToggle("fast"),e("#attachrecipe").hide(),e("#recipeattatchment").fadeToggle("fast")}),e("#addcomment").on("click",function(t){t.preventDefault(),e("#addcomment").hide(),e("#answer-form").fadeIn("fast")}),e("#cancel").on("click",function(t){t.preventDefault(),e("#answer-form").hide(),e("#addcomment").fadeIn("fast")}),e("body").delegate(".ask-button","click",function(){e(".ask-wrapper").hide(),e(".question-form").fadeIn("fast")}),e("#cancel").on("click",function(t){t.preventDefault(),e(".question-form").hide(),e(".ask-wrapper").fadeIn("fast")}),e("#answerquestion").on("click",function(t){t.preventDefault(),e("#answerquestion").hide(),e("#answer-form-c").fadeIn("fast")}),e("#cancel").on("click",function(t){t.preventDefault(),e("#answer-form-c").hide(),e("#answerquestion").fadeIn("fast")}),e(".editpostlink").on("click",function(t){t.preventDefault(),t.stopPropagation(),e(this).next(".editposttab").fadeToggle(4)}),e(".load-more-posts").length>0&&e(window).on("DOMContentLoaded load resize scroll",function(){var t=e(".load-more-posts .nav-links .next");e(".load-more-posts").hide(),e(".load-more-posts").inView("topOnly")&&!e("body").data("ajaxLoadingPosts")&&void 0!==t.attr("href")&&(e(".loading-indicator--position").show(),e("body").data("ajaxLoadingPosts",!0),e.get(t.attr("href"),function(t){console.log("YO"),e("#author-archive .load-more-posts").html(""),e("#author-archive .entry-grid").append(e(t).find("#author-archive .entry-grid").html()),e("#author-archive").append(e(t).find("#author-archive .load-more-posts").html()),e("body").data("ajaxLoadingPosts",!1),e(".load-more-posts").hide(),e(".loading-indicator--position").hide()}))}),e(document).on("apAfterSorting",function(t){!function(e,t){var a=new Date;a.setTime(a.getTime()+864e5),document.cookie=e+"="+t+";expires="+a.toUTCString()}("ApSorting",e('#ap-question-sorting input[name="ap_sort"]').val())}),e("#blog_description").on("keyup",function(t){var a=e(this).val();console.log(a.length),e(this).parent().find(".textarea-limit i").text(a.length),a.length<=99||e("textarea").val(a.substring(0,a.length-1))}),e('[data-action="arajaxloadcontent"]').length>0&&e('[data-action="arajaxloadcontent"]').waypoint(function(){$el=e(this);var a=$el.attr("href")+"page/"+(parseInt($el.data("current"))+1)+"/";!e("body").data("ajaxLoadingPosts")&&$el.data("current")<4&&($el.hide(),e(".loading-indicator--position").show(),e("body").data("ajaxLoadingPosts",!0),t(a,$el))},{offset:"bottom-in-view"}),e('[data-action="arajaxloadcontent"]').click(function(a){a.preventDefault(),$el=e(this);var n=$el.attr("href")+"page/"+(parseInt($el.data("current"))+1)+"/";e(".loading-indicator--position").show(),e("body").data("ajaxLoadingPosts",!0),t(n,$el)}),e("#country-selector").on("change",function(t){t.preventDefault(),window.location.replace(e(this).val())}),e("body").delegate("#gf-post-edit .btn","click touchstart",function(t){e('input[name="post_slug"]').length>0&&e('input[name="post_slug"]').attr("value","")})}),e("#gf-signup").submit(function(){var t=!0,a=e(this).find("#blog_slug"),n=e(this).find("#blog_title"),o=new RegExp(/^[a-zA-Z0-9-_]+$/),i=new RegExp(/^[a-z\d\-_&\s]+$/i);return e(this).find(".ap-have-error").removeClass("ap-have-error"),e(this).find(".ap-form-error-message").remove(),o.test(a.val())||(a.parent().addClass("ap-have-error"),a.after('<p class="ap-form-error-message">Blog name should be lowercase. Only alpha numeric (a-z, 1-0), hyphen(-) and underscore (_) are allowed.</p>'),t=!1),i.test(n.val())||(n.parent().addClass("ap-have-error"),n.after('<p class="ap-form-error-message">No special charecter allowed except &</p>'),t=!1),t||e("html, body").animate({scrollTop:e(this).offset().top-150},500),t})}(jQuery);;
/**
 * @file
 * Tells KARMA what kind of page/device we're on and initializes it.
 *
 * @see _meredith_karma_page_settings()
 */

(function (window) {
  if (typeof drupalSettings.meredithKarma !== 'undefined') {
    window.adService = drupalSettings.meredithKarma.adService;
    window.adService.mobileAds = Drupal.breakpoints.isMobile();
    var karmaCore=document.createElement("script");
    karmaCore.src="http://karma.mdpcdn.com/service/js-min/karma.footer.js";
    var node=document.getElementsByTagName("script")[0];
    node.parentNode.insertBefore(karmaCore,node);
  }
})(window);
;
;
/**
 * @file
 * Use clamp to truncate recent post titles to two lines.
 */

(function ($) {
  $(document).ready(function () {
    $('#recent-posts h3')
      .css("max-height", "40px")
      .dotdotdot({
        watch: "window"
      });
  });
})(jQuery);
;
/**
 * @file
 * Adds interactivity to social icons set to share the current page.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Gathers page data and adds click events to social icons.
   */
  function init(i, links) {
    var $links = $(links);

    var shareData = {
      'title': prepareData($('meta[property="og:title"]').attr('content') || document.title),
      'description': prepareData($('meta[property="og:description"]').attr('content')),
      'url': prepareData(window.location.href),
      'image': prepareData($('meta[property="og:image"]').attr('content')),
    }

    $links.find('.social-icon--facebook').bind('click', shareData, shareFacebook);
    $links.find('.social-icon--pinterest').bind('click', shareData, sharePinterest);
    $links.find('.social-icon--twitter').bind('click', shareData, shareTwitter);
    $links.find('.social-icon--google').bind('click', shareData, shareGooglePlus);
    $links.find('.social-icon--stumbleupon').bind('click', shareData, shareStumbleUpon);
    $links.find('.social-icon--email').bind('click', shareData, shareEmail);
  }

  /**
   * Handles a Facebook icon click event.
   */
  function shareFacebook(event) {
    event.preventDefault();
    reportShare('facebook');

    var facebookAppId = $('meta[property="fb:app_id"]').attr('content');
    if (facebookAppId) {
      // @see https://developers.facebook.com/docs/sharing/reference/feed-dialog
      var shareUrl = 'https://www.facebook.com/dialog/feed?app_id=' + facebookAppId
        + '&display=popup'
        + '&link=' + event.data.url
        + '&redirect_uri=';

      if (Drupal.breakpoints.isMobile()) {
        window.location = shareUrl += event.data.url;
      }
      else {
        var redirectUri = window.location.protocol + '//' + window.location.host + '/modules/custom/meredith_social/static/self.close.html';
        shareUrl += encodeURIComponent(redirectUri);

        window.open(shareUrl, '', 'width=600, height=400, location=1, resizable=0, scrollbars=0, toolbar=0, menubar=0');
      }
    }
    else {
      console.error(new Error('Missing fb:app_id meta tag.'));
    }

    return false;
  };

  /**
   * Handles a Pinterest icon click event.
   */
  function sharePinterest(event) {
    event.preventDefault();
    reportShare('pinterest');

    var $link = $(this);
    var shareUrl = $link.data('pin-href');
    if (!shareUrl) {
      shareUrl = '//pinterest.com/pin/create/button/?guid=&media=' + event.data.image
        + '&description=' + (event.data.description || event.data.title)
        + '&url=' + event.data.url;

      $link.attr('data-pin-href', shareUrl);
    }

    window.open(shareUrl, '', 'width=785, height=627, location=1, resizable=0, scrollbars=0, toolbar=0, menubar=0');

    return false;
  };

  /**
   * Handles a Twitter icon click event.
   */
  function shareTwitter(event) {
    event.preventDefault();
    reportShare('twitter');

    var shareUrl = '//twitter.com/share?'
      + '&text=' + event.data.title
      + '&url=' + event.data.url;

    var $twitterHandle = $('meta[name="twitter:site"]').attr('content');
    if ($twitterHandle) {
      shareUrl += '&via=' + $twitterHandle.replace('@', '');
    }
    else {
      console.error(new Error('Missing twitter:site meta tag.'));
    }

    if (Drupal.breakpoints.isMobile()) {
      window.location = shareUrl + '&redirect_uri=' + event.data.url;
    }
    else {
      window.open(shareUrl, '', 'width=600, height=400, location=1, resizable=0, scrollbars=0, toolbar=0, menubar=0');
    }

    return false;
  };

  /**
   * Handles a Google Plus icon click event.
   */
  function shareGooglePlus(event) {
    event.preventDefault();
    reportShare('Googleplus');

    var shareUrl = '//plus.google.com/share?'
      + 'url=' + event.data.url;

    if (Drupal.breakpoints.isMobile()) {
      window.location = shareUrl;
    }
    else {
      window.open(shareUrl, '', 'width=600, height=400, location=1, resizable=0, scrollbars=0, toolbar=0, menubar=0');
    }

    return false;
  };

  /**
   * Handles a StumbleUpon icon click event.
   */
  function shareStumbleUpon(event) {
    event.preventDefault();
    reportShare('stumbleupon');

    var shareUrl = '//stumbleupon.com/submit?'
      + '&url=' + event.data.url
      + '&title=' + event.data.title

    if (Drupal.breakpoints.isMobile()) {
      window.location = shareUrl;
    }
    else {
      window.open(shareUrl, '', 'width=564, height=590, location=1, resizable=0, scrollbars=0, toolbar=0, menubar=0');
    }

    return false;
  };

  /**
   * Handles an email icon click event.
   */
  function shareEmail(event) {
    event.preventDefault();
    reportShare('Email');

    var siteName = $('meta[property="og:site_name"]').attr('content');
    window.location = 'mailto:?subject=Check out this' + (siteName ? ' ' + siteName : '' ) + ' article!&body=' + event.data.url;

    return false;
  };

  /**
   * Reports an individual share event to the GA dataLayer.
   */
  function reportShare(provider) {
    if (typeof dataLayer == 'object') {
      dataLayer.push({'Social Network': provider, 'Social Action': 'Share Published', 'event': 'share'});
    }
  };

  /**
   * Prepares data to be used within share icon URLs.
   */
  function prepareData(data) {
    // Removes any HTML from the value.
    data = $('<span/>').html(data).text();

    // Removes any whitespace from the beginning and end of the value.
    data = $.trim(data);

    // Encodes a URI to properly pass data in a share URL.
    data = encodeURIComponent(data);

    return data;
  };

  /**
   * Adds interactivity to the share links when Drupal behaviors are attached.
   */
  Drupal.behaviors.socialShare = {
    attach: function (context, settings) {
      $(context).find('.social-links--share').once('social-share').each(init);
    }
  };

})(jQuery, Drupal);
;
/**
 * @file
 * Pushes custom variables to the GTM dataLayer.
 *
 * @see https://developers.google.com/tag-manager/devguide#datalayer
 * @see meredith_gtm/README.md
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Initializes and pushes variables to the dataLayer.
   */
  function init() {
    if (typeof drupalSettings.meredithGtm !== 'undefined') {
      var dataLayerVariables = drupalSettings.meredithGtm.variables;
      var urlParameters = getUrlParameters();

      // Set campaign variables if they exist in the URL query parameters.
      var parameterVariables = {
        'ordersrc': 'External Campaign',
        'sssdmh': 'External Campaign',
        'did': 'External Campaign',
        'psrc': 'Internal Campaign',
        'socsrc': 'Social Campaign',
        'esrc': 'Email Campaign'
      };
      $.each(parameterVariables, function (key, value) {
        if (key in urlParameters) {
          dataLayerVariables[value] = urlParameters[key];
        }
      });

      // Set profile variables if the user is logged in.
      var drupalProfile = getDrupalProfile(urlParameters);
      if (drupalProfile.isGALoggedIn()) {
        dataLayerVariables['Member Logged In'] = 'true';
      }
      if (drupalProfile.isAvailable()) {
        dataLayerVariables['Profile ID'] = drupalProfile.getProfileId();
      }
      if ($.cookie('hid') !== null) {
        dataLayerVariables['Hash ID'] = $.cookie('hid');
      }

      // Set the default event to be a pageview.
      if (typeof dataLayerVariables['event'] === 'undefined') {
        dataLayerVariables['event'] = 'pageview';
      }

      // Allow JavaScript within site-specific modules to alter the variables
      // before they are pushed to the dataLayer.
      $(document).trigger('meredithGtm.alterDataLayerVariables', [dataLayerVariables]);

      // Push the variables to the dataLayer.
      dataLayer.push(dataLayerVariables);
    }
  };

  /**
   * Retrieves an object of URL parameters.
   *
   * @see http://stackoverflow.com/a/21210643/1369144
   */
  function getUrlParameters() {
    var parameters = {};
    window.location.search.substr(1).split("&").forEach(function(item) {parameters[item.split("=")[0]] = item.split("=")[1]});
    return parameters;
  };

  /**
   * Retrieves an object used to build profile variables.
   */
  function getDrupalProfile(urlParameters) {
    return {
      isAvailable: function () {
        var partnerCookieValue = $.cookie('mdp_partner');
        if (partnerCookieValue) {
          return new RegExp("\\|Y\\|").test(partnerCookieValue);
        }
        return false;
      },
      isGALoggedIn: function() {
        return this.isAvailable() || ($.cookie('hid') || ('hid' in urlParameters));
      },
      getValues: function () {
        var partnerCookieValue = $.cookie('mdp_partner');
        var values = partnerCookieValue.split('|');
        return values;
      },
      getProfileId: function () {
        return this.getValues()[0];
      },
      getEmail: function () {
        return this.getValues()[1];
      },
      getFirstName: function () {
        return this.getValues()[2];
      }
    };
  };

  /**
   * Initialize GTM functionality when behaviors are attached.
   */
  Drupal.behaviors.meredithGtm = {
    attach: function (context, settings) {
      $(context).once('meredith-gtm').each(init);
    }
  };

})(jQuery, Drupal);
;

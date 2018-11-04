// encode data for html context
// default: \n -> &#10;  \r -> &#13;
var FCAN_HTML_BR       = 1; // \n -> <br />
var FCAN_HTML_NBSP     = 2; // ' ' -> &nbsp;
var FCAN_HTML_NBSP_BR  = 3; // 1 + 2
var FCAN_HTML_BR_NBSP  = 3; // 1 + 2
var FCAN_HTML_PRESERVE = 4; // preserve 

function fcan_htmlencode (str, ws) {
	if (str === null || str === undefined) {
		return '';
	}
	
	var str = new String(str);
	
	str = str.replace(/&/g, "&amp;");
	str = str.replace(/>/g, "&gt;");
	str = str.replace(/</g, "&lt;");
	str = str.replace(/"/g, "&quot;");
	str = str.replace(/'/g, "&apos;");
	// encode whitespace
	if ( ws ) {
		// translate space
		if ( ws == 2 || ws == 3 ) {
			str = str.replace(/ /g, "&nbsp;");
			str = str.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
		}
		// htmlify line breaks
		if ( ws == 1 || ws == 3 ) {
			str = str.replace(/\r\n/g, "\n"); //pc
			str = str.replace(/\r/g, "\n");   // mac <= 9
			str = str.replace(/\n/g, "<br />");
		}
	} else {
		// for attributes/general
		str = str.replace(/\n/g, "&#10;");
		str = str.replace(/\r/g, "&#13;");
	}
	
	return str.valueOf();
}


// similar to php string escape
function fcan_addslashes(str) {
	if (str === null || str === undefined) {
		return '';
	}

	str = new String(str);
	
	var str = str.replace(/\\/g, '\\\\').
		replace(/\u0008/g, '\\b').
		replace(/\t/g, '\\t').
		replace(/\n/g, '\\n').
		replace(/\f/g, '\\f').
		replace(/\r/g, '\\r').
		replace(/'/g, '\\\'').
		replace(/"/g, '\\"');
		
	return str.valueOf();
}


// logging for client console
function fcan_log(s) {
	if (typeof console != 'undefined' && console.log) {
		console.log(s);
	}
}

function fcan_notify(_commentId, _address, _commentMessage, _parentCommentId) {
	$.ajax({
		type: 'POST',
		url: fcan_global_data.ajaxurl, 
		data: {
			action: 'fcan_comment_created',
			commentID: _commentId,
			href: _address,
			commentText: _commentMessage,
			parentCommentID: _parentCommentId 
		},
		error: function (jqXHR, textStatus, errorThrown) {
			fcan_log(errorThrown);
		}
 });
}

// load widget
window.fbAsyncInit = function() {
	FB.init({
		appId      : fcan_global_data.appid,
		xfbml      : true,
		version    : 'v2.4'
	});

	FB.Event.subscribe('comment.create', function(response) {
		if (!response || ! response.commentID) {
			fcan_log('fcan: no response');
			return;
		} 
		
		fcan_notify(response.commentID, response.href, response.message, response.parentCommentID);
	});
};

(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


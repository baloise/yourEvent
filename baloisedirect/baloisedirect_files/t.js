function et_escape(param)
{
	return encodeURIComponent(param);
}

function et_unescape(param)
{
	return decodeURIComponent(param);
}

var et_checkOptInCookie = function(showDialog)
{
	if(et_getCookieValue('et_oi') === 'no')
	{
		return false;
	}

	if(showDialog && !document.cookie.match(/et_oi/gi))
	{
		et_showOptIn();
		return false;
	}

	return true;
};
var et_easy = 1;

function et_eC(param)
{
	et_secureId = param;

	et_imageSrc = et_server + '/' + et_cntScript + '?'+et_parameter() + et_addFpcParams();
	et_imageSrc = et_imageSrc.substr(0, et_maxUrlLength);

	if(et_first && !(false || true || et_optInActive) && !document.getElementById('et_image'))
	{
		document.write('<p id="et_image" style="display:none;"></p>');
	}

	et_createScriptTag(et_imageSrc);
}

function et_createCntImage(imgSrc, href)
{
	if(et_first)
	{
		et_first = false;

		var et_anchor = document.createElement('a');
		et_anchor.href = href;
		et_anchor.target = '_blank';
		et_anchor.innerHTML = '<img style="border:0px;" alt="" src="'+imgSrc+'">';

		et_appendCntImage(et_anchor);
	}
	else
	{
		var et_image=new Image();
		et_image.src = et_imageSrc;
	}
}
        var arrOfLinksToPrepare = [
    {
        "name": "Twitter",
        "type": "et_LinkEvent",
        "pattern": "^(https?:)?(\/\/)?[^\/]*twitter\\.com"
    },
    {
        "name": "Xing",
        "type": "et_LinkEvent",
        "pattern": "^(https?:)?(\/\/)?[^\/]*xing\\.com"
    },
    {
        "name": "LinkedIn",
        "type": "et_LinkEvent",
        "pattern": "^(https?:)?(\/\/)?[^\/]*linkedin\\.com"
    },
    {
        "name": "YouTube",
        "type": "et_LinkEvent",
        "pattern": "^(https?:)?(\/\/)?[^\/]*youtube\\.com"
    },
    {
        "name": "Facebook",
        "type": "et_LinkEvent",
        "pattern": "^(https?:)?(\/\/)?[^\/]*de-de\\.facebook\\.com"
    },
    {
        "name": "Instagram",
        "type": "et_LinkEvent",
        "pattern": "^(https?:)?(\/\/)?[^\/]*instagram\\.com"
    },
    {
        "name": "Pinterest",
        "type": "et_LinkEvent",
        "pattern": "^(https?:)?(\/\/)?[^\/]*de\\.pinterest\\.com"
    },
    {
        "name": "Tumblr",
        "type": "et_LinkEvent",
        "pattern": "^(https?:)?(\/\/)?[^\/]*tumblr\\.com"
    },
    {
        "name": "pdf",
        "type": "et_DownloadEvent",
        "pattern": "\\.pdf$"
    }
];

function _et_vm_ct()
{
	var t0 = function() {var pn_set=typeof(et_pagename) != 'undefined' && typeof(et_pagename) != 'unknown';var pn_lc=pn_set ? et_pagename.toLowerCase() : document.location.pathname.toLowerCase();if(pn_lc == 'fahrzeug/rechner/auto/versicherung/de/bd' || pn_lc == 'fahrzeug%2frechner%2fauto%2fversicherung%2fde%2fbd' || pn_lc == 'fahrzeug/rechner/auto/versicherung/de/bd' || pn_lc == 'fahrzeug%2frechner%2fauto%2fversicherung%2fde%2fbd' ) {return 1;} else {return 0;}};var t1 = function() {var pn_set=typeof(et_pagename) != 'undefined' && typeof(et_pagename) != 'unknown';var pn_lc=pn_set ? et_pagename.toLowerCase() : document.location.pathname.toLowerCase();if(pn_lc == 'fahrzeug/rechner/auto/versicherung/fr/bd' || pn_lc == 'fahrzeug%2frechner%2fauto%2fversicherung%2ffr%2fbd' || pn_lc == 'fahrzeug/rechner/auto/versicherung/fr/bd' || pn_lc == 'fahrzeug%2frechner%2fauto%2fversicherung%2ffr%2fbd' ) {return 1;} else {return 0;}};var t2 = function() {var pn_set=typeof(et_pagename) != 'undefined' && typeof(et_pagename) != 'unknown';var pn_lc=pn_set ? et_pagename.toLowerCase() : document.location.pathname.toLowerCase();if(pn_lc == 'fahrzeug/rechner/auto/versicherung/it/bd' || pn_lc == 'fahrzeug%2frechner%2fauto%2fversicherung%2fit%2fbd' || pn_lc == 'fahrzeug/rechner/auto/versicherung/it/bd' || pn_lc == 'fahrzeug%2frechner%2fauto%2fversicherung%2fit%2fbd' ) {return 1;} else {return 0;}};
	return ((t0()|t1()|t2()) == 1);
}if(typeof(et_proxy_redirect) == 'undefined' || typeof(et_proxy_redirect) == 'unknown' || et_proxy_redirect == '')
{
	var et_server = '//www.etracker.de';
	var et_vm_server = '//www.etracker.de/vm';
	var et_vv_server = '//visitorvoice.etracker.com/';
	var et_code_server = '//code.etracker.com';
}
else
{
	var et_server = et_proxy_redirect;
	var et_vm_server = et_proxy_redirect + '/vm';
	var et_vv_server = et_proxy_redirect + '/vv/';
	var et_code_server = et_proxy_redirect;
}

var et_ver = '4.0';
var et_panelLink      = et_server + '/app?et=';
var et_cntScript    = 'cnt_js.php';
var et_secureId     = 'oyxvPK';
var et_maxUrlLength = 8190;
var et_deliveryHash = "YAndkWTUkq2hlGJ6Bz1nbQ==";
var et_pd_etpl, et_pd_i, et_pd_k, et_pd_s,
	et_pd_maxfl	= 15,
	et_pd_maxsh	= 15,
	et_pd_maxqt	= 15,
	et_pd_maxsl = 4,
	et_pd_v		= 1.0,
	et_pd_js	= 0,
	et_pd_ag	= navigator.userAgent.toLowerCase(),
	et_pd_z		= 0,
	et_pd_a		= [30],
	et_pd_eta	= "Adobe Acrobat ",
	et_pd_eti	= " Plug-in",
	et_pd_etm	= "Windows Media Video",
	et_pd_etp	= "PDF.PdfCtrl.",
	et_pd_etq	= "QuickTime",
	et_pd_etr	= "RealPlayer(tm)",
	et_pl	    = "Shockwave",
	et_pd_ud	= "undefined",
	et_blockPlugin  = et_blockPlugin ||false;var et_host		= '//application.etracker.com/';
var et_cntHost	= et_server + '/';
var et_et   	= 'oyxvPK';
var et_urlParamLink = [];
var et_ibrowse  = 0;
var et_ibrowsev = 99;
var et_safari   = 0;
var et_o		= 0;
var et_ff	   = 0;



var et_location, et_top, et_sendloc;
try
{
	et_location = top.location.hash;
	et_sendloc = top.location.search;
	et_top = top.location;
}
catch(e)
{
}
				
if(typeof(et_location) == 'undefined' || typeof(et_sendloc) == 'undefined')
{
	et_location = window.location.hash;
    et_sendloc = window.location.search;
    et_top = window.location;
}
function et_spLink( url )
{
	if(!url) return '';
	url = url.replace(/#.*/gi, '');
	url = et_removeUrlParamLink(url);
	var includes = new Array();
	var host = url.replace(/\?.*/gi, '');
	var query = url.replace(/.*\?/gi, '').split('&');
	var query_export = '';

	for(var i = 0; i < query.length; i++)for(var j=0; j < includes.length; j++)
		if(query[i].indexOf(includes[j]) == 0 &&(query[i].length == includes[j].length ||query[i].substr(includes[j].length,1) == '='))
			query_export += '&' + query[i];
	
	query = query_export ? '?' + query_export.substr(1) : '';

	return host+query.replace(/&/gi, '%26');
}

function et_spPage( url ) 
{
	return et_spLink( url ); 
}

var et_links		= 1;
var et_toppos		= 0;
var et_leftpos	  	= 0;
var et_overlay		= 0;
var et_gauged		= 0;
var et_px			= 0;
var et_py			= 0;
var et_direction	= 1;
var et_blockOverlay = false;
var et_overlayLimit = 100;ET_Event = new etEvent("oyxvPK", et_server);
var cc_cntScript    = 'cntcc';
var cc_genericEventPath = '/api/tracking/v5/webEvents';
var cc_deltaTime 	= 14741030411595-(new Date().getTime()*10);
var cc_codecVersion	= 1;
var cc_apiVersion	= '1.1.2';
var cc_articleDivider = '|';
var cc_itemDivider	= ';';
var cc_active = true;

etVM = new ETVMRecorder('oyxvPK', et_vm_server, 0, true);function _etc_start()
{
	var c = "";

	if(!et_blockPlugin)
		et_pd();		et_eC('oyxvPK');
		if (typeof _etracker.setFirstPixelSent == 'function')
			_etracker.setFirstPixelSent();
		if (typeof _etracker.doWrapperCalls == 'function')
			_etracker.doWrapperCalls();
	if(!et_blockOverlay)
	{
		_etracker.addOnLoad(et_iO);
	}	et_cc('oyxvPK');
	etCommerce.etCommerceLoad('oyxvPK');
	etCommerce.doPreparedEvents();
         
	window.et_vm_init_retries = 0;
	function et_vm_init()
	{
		if(document.body)
		{
			etVM.initRecorder(_et_vm_ct());
		}
		else if(et_vm_init_retries < 100)
		{
			window.setTimeout(et_vm_init, 10);
			++et_vm_init_retries;
		}
	}
	
	et_vm_init();if(c != '') {var x = document.createElement('div');x.innerHTML = c;var et_bodyInterval = window.setInterval(function(){if(document.body) {window.clearInterval(et_bodyInterval);document.body.appendChild(x);}}, 1);}	}

	var _etc = function() {
		if(et_checkOptInCookie(0)) {
			_etc_start();
		}
	};

_etracker.setReady();
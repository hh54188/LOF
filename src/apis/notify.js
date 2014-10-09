define (["../lib/message"], function () {

	function injectStyle () {
		var head = document.head;
		var cssText = ".dhtmlx_message_area{position:fixed;right:5px;width:250px;z-index:1000}.dhtmlx-info{min-width:120px;min-height:20px;padding:4px 4px 4px 20px;font-family:Tahoma;z-index:10000;margin:5px;margin-bottom:10px;-webkit-transition:all .5s ease;-moz-transition:all .5s ease;-o-transition:all .5s ease;transition:all .5s ease}.dhtmlx-info.hidden{height:0;min-height:0;padding-top:0;padding-bottom:0;border-width:0;margin-top:0;margin-bottom:0;overflow:hidden}.dhtmlx_modal_box{overflow:hidden;display:inline-block;min-width:300px;width:300px;text-align:center;position:fixed;background-color:#fff;background:-webkit-linear-gradient(top,#fff 1%,#d0d0d0 99%);background:-moz-linear-gradient(top,#fff 1%,#d0d0d0 99%);box-shadow:0 0 14px #888;font-family:Tahoma;z-index:20000;border-radius:6px;border:1px solid #fff}.dhtmlx_popup_title{border-top-left-radius:5px;border-top-right-radius:5px;border-width:0;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAoCAMAAAAIaGBFAAAAhFBMVEVwcHBubm5sbGxqampoaGhmZmZlZWVjY2NhYWFfX19dXV1bW1taWlpYWFhWVlZUVFRSUlJRUVFPT09NTU1LS0tJSUlHR0dGRkZERERCQkJAQEA+Pj49PT09PT0+Pj5AQEBBQUFDQ0NERERGRkZHR0dJSUlKSkpMTExMTEw5OTk5OTk5OTkny8YEAAAAQklEQVQImQXBCRJCAAAAwKVSQqdyjSPXNP7/QLsIhA6OTiJnF7GrRCpzc/fw9PKW+/gqlCq1RqvTG/yMJrPF6m/bAVEhAxxnHG0oAAAAAElFTkSuQmCC);background-image:-webkit-linear-gradient(top,#707070 1%,#3d3d3d 70%,#4c4c4c 97%,#393939 97%);background-image:-moz-linear-gradient(top,#707070 1%,#3d3d3d 70%,#4c4c4c 97%,#393939 97%)}.dhtmlx-info,.dhtmlx_popup_button,.dhtmlx_button{user-select:none;-webkit-user-select:none;-moz-user-select:-moz-none;cursor:pointer}.dhtmlx_popup_text{overflow:hidden}.dhtmlx_popup_controls{border-radius:6px;padding:5px}.dhtmlx_popup_button,.dhtmlx_button{height:30px;line-height:30px;display:inline-block;margin:0 5px;border-radius:6px;color:#FFF}.dhtmlx_popup_button{min-width:120px}div.dhx_modal_cover{background-color:#000;cursor:default;filter:alpha(opacity = 20);opacity:.2;position:fixed;z-index:19999;left:0;top:0;width:100%;height:100%;border:0;zoom:1}.dhtmlx-info img,.dhtmlx_modal_box img{float:left;margin-right:20px}.dhtmlx-info img{margin-left:-10px}.dhtmlx-alert-error .dhtmlx_popup_title,.dhtmlx-confirm-error .dhtmlx_popup_title{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAsCAIAAAArRUU2AAAATklEQVR4nIWLuw2AMBBDjVuQiBT2oWbRDATrnB0KQOJoqPzRe3BrHI6dcBASYREKovtK6/6DsDOX+stN+3H1YX9ciRgnYq5EWYhS2dftBIuLT4JyIrPCAAAAAElFTkSuQmCC)}.dhtmlx-alert-error,.dhtmlx-confirm-error{border:1px solid #f00}.dhtmlx_button,.dhtmlx_popup_button{box-shadow:0 0 4px #888;border:1px solid #838383}.dhtmlx_button input,.dhtmlx_popup_button div{border:1px solid #FFF;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAeCAMAAADaS4T1AAAAYFBMVEVwcHBtbW1ra2toaGhmZmZjY2NhYWFeXl5cXFxaWlpXV1dVVVVSUlJQUFBNTU1LS0tJSUlGRkZERERBQUE/Pz88PDw9PT0+Pj5AQEBCQkJDQ0NFRUVHR0dISEhKSkpMTEzqthaMAAAAMklEQVQImQXBhQ2AMAAAsOIMlwWH/8+kRSKVyRVKlVrQaHV6g9FktlhFm93hdLk9Xt8PIfgBvdUqyskAAAAASUVORK5CYII=);background-image:-webkit-linear-gradient(top,#707070 1%,#3d3d3d 70%,#4c4c4c 99%);background-image:-moz-linear-gradient(top,#707070 1%,#3d3d3d 70%,#4c4c4c 99%);border-radius:6px;font-size:15px;-moz-box-sizing:content-box;box-sizing:content-box;color:#fff;padding:0;margin:0;vertical-align:top;height:28px;line-height:28px}.dhtmlx_button input:focus,.dhtmlx_button input:active,.dhtmlx_popup_button div:active,.dhtmlx_popup_button div:focus{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAeCAMAAADaS4T1AAAAXVBMVEVwcHBubm5tbW1sbGxra2tpaWloaGhnZ2dmZmZlZWVjY2NiYmJhYWFgYGBfX19dXV1cXFxbW1taWlpZWVlXV1dWVlZVVVVUVFRTU1NRUVFQUFBPT09OTk5NTU1LS0tT9SY0AAAAMUlEQVQImQXBhQGAMAAAIGxnx2z9/00BiVQmVyhVakGj1ekNRpPZYhVtdofT5fZ4fT8hpwG05JjexgAAAABJRU5ErkJggg==);background-image:-webkit-linear-gradient(top,#707070 1%,#4c4c4c 99%);background-image:-moz-linear-gradient(top,#707070 1%,#4c4c4c 99%)}.dhtmlx_popup_title{color:#fff;text-shadow:1px 1px #000;height:40px;line-height:40px;font-size:20px}.dhtmlx_popup_text{margin:15px 15px 5px 15px;font-size:14px;color:#000;min-height:30px;border-radius:6px}.dhtmlx-info,.dhtmlx-error{font-size:14px;color:#fff;box-shadow:0 4px 4px -4px #000;border-radius:5px;background-color:#000;background-color:rgba(0,0,0,0.8)}.dhtmlx-error{color:#F00}";
		var styleBlock = document.createElement("style");
		styleBlock.innerHTML = cssText;
		head.appendChild(styleBlock);
	}

	var injectStyleAlready = false;
	if (!injectStyleAlready) {
		injectStyle();
		injectStyleAlready = true;
	}

	return {
		log: function (msg) {
			dhtmlx.message(msg);
		}
	}
});
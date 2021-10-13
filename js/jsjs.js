
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); 

  /* for when editing site */
 /* ga = function(){window.console && console.log(arguments);}; */
  
  
  ga('create', 'UA-84731030-4', 'auto');
  ga('send', 'pageview'); 


  

  
if (typeof jQuery != 'undefined') {
  jQuery(document).ready(function($) {
    var filetypes = /\.(zip|exe|dmg|tex|pdf)$/i;
    var baseHref = '';
    if (jQuery('base').attr('href') != undefined) baseHref = jQuery('base').attr('href');
 
    jQuery('a').on('click', function(event) {
      var el = jQuery(this);
      var track = true;
      var href = (typeof(el.attr('href')) != 'undefined' ) ? el.attr('href') :"";
      var isThisDomain = href.match(document.domain.split('.').reverse()[1] + '.' + document.domain.split('.').reverse()[0]);
      if (!href.match(/^javascript:/i)) {
        var elEv = []; elEv.value=0, elEv.non_i=false;
        
        if (href.match(filetypes)) {
          var extension = (/[.]/.exec(href)) ? /[^.]+$/.exec(href) : undefined;
          elEv.category = "download";
          elEv.action = "click-" + extension[0];
          elEv.label = href.replace(/ /g,"-");
          elEv.loc = baseHref + href;
        }
        else if (href.match(/^https?\:/i) && !isThisDomain) {
          elEv.category = "external";
          elEv.action = "click";
          elEv.label = href.replace(/^https?\:\/\//i, '');
          elEv.non_i = true;
          elEv.loc = href;
        }
        
        else track = false;
 
        if (track) {
        	ga('send', 'event', elEv.category.toLowerCase(), elEv.action.toLowerCase(), elEv.label.toLowerCase())
          //_gaq.push(['_trackEvent', elEv.category.toLowerCase(), elEv.action.toLowerCase(), elEv.label.toLowerCase(), elEv.value, elEv.non_i]);
          if ( el.attr('target') == undefined || el.attr('target').toLowerCase() != '_blank') {
            setTimeout(function() { location.href = elEv.loc; }, 400);
            return false;
    	}
    }
      }
    });
    
    jQuery('table').contextmenu(function(){
	  ga('send', 'event', "click", "right-click", "0d4fc4");	  
    });
  });
}

function listLecture(n)
{
	if (0 < n)
	{	
		listLecture(n-1);
		document.getElementById("lecture_list").innerHTML += '<li><a href="'+ document.getElementsByTagName("title")[0].innerHTML +' Lecture '+ n + '.pdf">Lecture '+ n + '</a></li><br>';
		
	}
}

function listTutorial(n)
{
	if (0 < n)
	{	
		listTutorial(n-1);
		document.getElementById("tutorial_list").innerHTML += '<li><a href="'+ document.getElementsByTagName("title")[0].innerHTML +' Tutorial '+ n + '.pdf">Tutorial '+ n + '</a></li><br>';
		
	}
}
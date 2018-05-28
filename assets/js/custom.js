/*=============================================================
    Authour URI: www.binarytheme.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US
   
    ========================================================  */

jQuery(function($) {

    /*==========================================
    CUSTOM SCRIPTS
    =====================================================*/

    // CUSTOM LINKS SCROLLING FUNCTION 

    $('a[href*=#]').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
       && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body')
                .animate({ scrollTop: targetOffset }, 800); //set scroll speed here
                return false;
            }
        }
    });
	
	$(document).scroll(function(){
		var menu = $('.sidenav');
		var menuOffset = $('.topPlaceholder').offset();
		var container = $('.navContainer');
		var menuWidth = $('.topPlaceholder').width();
		$('.sticky').css({'width': menuWidth + 'px', 'margin-left': $('shell').left + 'px'});
		menu.css({'width': menuWidth + 'px', 'margin-left': $('shell').left + 'px'});
		if(window.pageYOffset >= menuOffset.top - 50 && window.pageYOffset < menuOffset.top + container.height() - menu.height() - 100){
			if(menuWidth < 400 && menu.hasClass('sticky') == false && $(window).width() > 500){
				menu.addClass('sticky').css({});
			}	
		console.log('placeholder width - ' + menuWidth);
		}else if(window.pageYOffset < menuOffset.top - 50 || window.pageYOffset >= menuOffset.top + container.height() - menu.height() - 100){
			if(menu.hasClass('sticky') == true){
				menu.removeClass('sticky');
			}
		}
    });
/*
	$(document).ready(function() {
		$('#frmemail').submit(function(event) {
			$.ajax({
				type: 'POST',
				url: 'insert.php',
				data: $('#frmemail').serialize(),
				success: function() {
					$('.success').fadeIn(1000)
				}
			})
		})
	});
	
	
	function after_form_submitted(data){
		if(data.result == 'success'){
			$('#frmemail').hide();
			$('#success_message').show();
			$('#error_message').hide();
		}else{
			$('#error_message').append('<ul></ul>');

			jQuery.each(data.errors,function(key,val){
				$('#error_message ul').append('<li>'+key+':'+val+'</li>');
			});
			
			$('#success_message').hide();
			$('#error_message').show();
			//reverse the response on the button
			$('button[type="button"]', $form).each(function(){
				$btn = $(this);
				label = $btn.prop('orig_label');
				if(label){
					$btn.prop('type','submit' );
					$btn.text(label);
					$btn.prop('orig_label','');
				}
			});
		}//else
	}
	$('#frmemail').submit(function(e){
		e.preventDefault();

		$form = $(this);
		//show some response on the button
		$('button[type="submit"]', $form).each(function(){
			$btn = $(this);
			$btn.prop('type','button' );
			$btn.prop('orig_label',$btn.text());
			$btn.text('Sending ...');
		});
		$.ajax({
			type: "POST",
			url: 'insert.php',
			data: $form.serialize(),
			success: after_form_submitted,
			dataType: 'json'
		});
	});
	*/
	// magic.js
	$(document).ready(function() {
		// process the form
		$('form').submit(function(event) {
			// stop the form from submitting the normal way and refreshing the page
			event.preventDefault();
			// get the form data
			// there are many ways to get this data using jQuery (you can use the class or id also)
			var formData = {
				'user_name': $('input[name=user_name]').val(),
				'user_email': $('input[name=user_email]').val(),
				'user_msg': $('input[name=user_msg]').val()
			};
			// process the form
			$.ajax({
				type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
				url: 'insert.php', // the url where we want to POST
				data: formData, // our data object
				dataType: 'json', // what type of data do we expect back from the server
				encode: true
			})
			// using the done promise callback
			.done(function(data) {
				// log data to the console so we can see
				console.log(data); 
				// here we will handle errors and validation messages
			});
		});
	});


	/*
	$("#submit").click(function(e) {
		e.preventDefault();
		var form = $('#formSub');
		var name = $("#name").val(); 
		var email = $("#email").val();
		var message = $('#message').val();
		var dataString = 'name='+name+'&email='+email+'&message='+message;
		$.ajax({
			type:'POST',
			data:'dataString',
			mimeTypes: "text/plain",
			url: $(form).attr('action'),
			success: after_form_submitted,
			dataType: 'json'
		});
	});
	
    /*==========================================
   SCROLL REVEL SCRIPTS
   =====================================================*/

    
       window.scrollReveal = new scrollReveal(); 
    

    /*==========================================
    WRITE  YOUR  SCRIPTS BELOW
    =====================================================*/

});

/*==========================================
    SIDENAV AND VERSION BTN ACTIVE CLASS
    =====================================================*/

var elems, btns, makeActive;
elems = document.querySelectorAll('.sideUL li');
btns = document.getElementsByClassName('versions');

makeActive = function (){
	if(this.tagName == 'LI'){
		for(var i = 0; i < elems.length; i++){
			elems[i].classList.remove('active');
		}
	}else if(this.tagName == 'DIV'){
		for(var i = 0; i < btns.length; i++){
			btns[i].classList.remove('active');
		}
	}
	this.classList.add('active');
};

for(var i = 0; i < elems.length; i++){
	elems[i].addEventListener('mousedown', makeActive);
}
for(var i = 0; i < btns.length; i++){
	btns[i].addEventListener('mousedown', makeActive);
}

/*========================================== 
IFRAME EXAMPLE DESCRIPTION SPAN
=====================================================*/

function textChange(ref){
	var txt = document.getElementById("exDesc");
	var obj = document.getElementById('iFCont');
	var text, height;
	if(ref === "OLMW"){
		text = "In OLM Weekly, the side bar with 'My favorites' and 'recommendations' were dynamic user based code.";
		height = "1801";
	}else if(ref === "TP"){
		text = "In Travel Portal, the powers that be wished to experiment with mimicking buttons with html.";
		height = "1419";
	}else if(ref === "OLMM"){
		text = "In OLM Monthly, the main body format and savings offers were dynamic with customer shopping trends. Particularly, the P.S. section only displayed for customers, who indeed hadn't shopped previously.";
		height = "2170";
	}else if(ref === "OLMMvC"){
		text = "In OLM Monthly version C, the main body format and savings offers were dynamic with customer shopping trends. Particularly, the P.S. section only displayed for customers, who indeed hadn't shopped previously.";
		height = "2264";
	}else if(ref === "UPS"){
		text = "The Upromise Scholarship campaign was targeted to customers who had recently enrolled in credit rewards.";
		height = "1030";
	}else if(ref === "DvB"){
		text = "In Dining Program version B, we dynamically retrieved the name of the customer, as well as restaurants participating nearby.";
		height = "1119";
	}else if(ref === "DvC"){
		text = "In Dining Program version C, the customer withheld their name. However, their location was shared. As such, restaurants participating nearby displayed.";
		height = "1215";
	}else if(ref === "UPT"){
		text = "The Upromise Toolbar campaign was a promotional add-on for Mozilla and IE browsers.";
		height = "1091";
	}else if(ref === "BCSvA"){
		text = "Bonus College Savings month version A was directed to customers who regularly shop with Upromise.";
		height = "1320";
	}else if(ref === "BCSvB"){
		text = "Bonus College Savings month version B was directed to customers who were new to shopping with Upromise. As such, There were some additional directions provided.";
		height = "1400";
	}else{
		text = "";
		height = "1801";
	}
	height = Number(height) + 50;
	txt.innerHTML = txt.textContent = txt.value = text;
	obj.style.height = height +'px';
	obj.setAttribute("height", height);
}

/*========================================== 
IFRAME SOURCE CHANGE
=====================================================*/

/*
primaryDir is the desired target link;
firstSecondary is first search option;
secondSecondary is designated for .png version; unless .png is primaryDir value;
*/

function linkChange(vers, primaryDir, firstSecondary, secondSecondary){
	var htmlRef, dir, activeLink, linkIncludesPrim, linkIncludesFirst, linkIncludesSecond, iFra, activeRef;
	htmlRef = document.querySelectorAll('.sideUL li a');
	activeLink = document.querySelectorAll('.sideUL .active');
	iFra = document.getElementById('iFCont');
	for(var i = 0; i < htmlRef.length; i++){
		dir = htmlRef[i];
		linkIncludesPrim = dir.href.includes(primaryDir);
		linkIncludesFirst = dir.href.includes(firstSecondary);
		linkIncludesSecond = dir.href.includes(secondSecondary);
		if(vers == 'clean'){
			if(linkIncludesPrim == true){
				console.log("Alread Linked.");
			}else if(linkIncludesFirst == true){
				dir.href = dir.href.replace(firstSecondary, primaryDir);
				console.log(dir.href);
			}else if(linkIncludesSecond == true){
				dir.href = dir.href.replace(secondSecondary, primaryDir);
				dir.href = dir.href.replace(".png", ".html");
				console.log(dir.href);
			}else{
				console.log("Error, no return.");
			}
		}else if(vers == 'encode'){
			if(linkIncludesPrim == true){
				console.log("Alread Linked.");
			}else if(linkIncludesFirst == true){
				dir.href = dir.href.replace(firstSecondary, primaryDir);
				console.log(dir.href);
			}else if(linkIncludesSecond == true){
				dir.href = dir.href.replace(secondSecondary, primaryDir);
				dir.href = dir.href.replace(".png", ".html");
				console.log(dir.href);
			}else{
				console.log("Error, no return.");
			}
		}else if(vers == 'png'){
			if(linkIncludesPrim == true){
				console.log("Alread Linked.");
			}else if(linkIncludesFirst == true){
				dir.href = dir.href.replace(firstSecondary, primaryDir);
				dir.href = dir.href.replace(".html", ".png");
				console.log(dir.href);
			}else if(linkIncludesSecond == true){
				dir.href = dir.href.replace(secondSecondary, primaryDir);
				dir.href = dir.href.replace(".html", ".png");
				console.log(dir.href);
			}else{
				console.log("Error, no return.");
			}
		}
	}
	activeRef = activeLink[0].children[0].href;
	iFra.src = activeRef;
	console.log("Frame source - " + iFra.src);
}

/*========================================== 
PAGE REFRESH ALWAYS DEFAULTS TO RECODED OLM WEEKLY
=====================================================*/

window.onload = function(){
	document.getElementById('iFCont').src = './assets/upemail/Recoded/20070806_OLM_WEEKLY_32.html';
};

/*========================================== 
IFRAME SIDENAV STICKY SCROLL
=====================================================

//get position of sidenav
function getPos(el) {
    // yay readability
    for (var lx=0, ly=0;
         el != null;
         lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
    return {x: lx,y: ly};
}
var menu = document.querySelector('.sidenav');
var menuPosition = getPos(menu);
var container = document.querySelector('.navContainer');
var menuTop = menuPosition.y - 120;
window.addEventListener('scroll', function(){
	var containerHeight = container.getBoundingClientRect().height;
	console.log('menuTop = ' + menuTop);
	console.log('pageYOffset = ' + window.pageYOffset);
    if(window.pageYOffset >= menuTop && window.pageYOffset < menuTop + containerHeight - menuPosition.height - 100){
        menu.classList.add('sticky');
		menu.style.width = menuPosition.width + 'px';
    }else if(window.pageYOffset < menuTop || window.pageYOffset >= menuTop + containerHeight - menuPosition.height - 100) {
        menu.classList.remove('sticky');
    }
});
/*========================================== 
IFRAME SOURCE FORMAT REDIRECT
=====================================================*/

function changeFormat(ver){
	var firstTxt = document.getElementById("firstStat");
	var verText;
	if(ver == "reCode"){
		verText = "I have removed encoding, and cleaned up these versions with local image sources. Links have been removed as well.";
		linkChange('clean', "upemail/Recoded", "upemail/Encoded", "upemail/Img");
	}else if(ver == 'enCode'){
		verText = "These files are all fully encoded with click tracking and are unedited. Unfortunately, given that I have no access to the servers, I'm completely at a loss with regard to the links and image sources being inactive.";
		linkChange('encode', "upemail/Encoded", "upemail/Recoded", "upemail/Img");
	}else if(ver == 'img'){
		verText = "These files are all local flat .png images.";
		linkChange('png', "upemail/Img", "upemail/Recoded", "upemail/Encoded");
	}
	firstTxt.innerHTML = firstTxt.textContent = firstTxt.value = verText;
}

/*========================================== 
IFRAME AUTO SIZE SCRIPT; STILL BROKEN IN GOOGLE CHROME
=====================================================

function resizeIframe(){
	var obj = document.getElementById('iFCont');
	var dir = (obj.contentWindow.document || obj.contentDocument);
	var height = Math.min(dir.body.offsetHeight, dir.body.scrollHeight);
	obj.style.height = height + 'px' ;
	obj.setAttribute("height", height);
	console.log("dir.body.offsetHeight - " + dir.body.offsetHeight);
	console.log("dir.body.scrollHeight - " + dir.body.scrollHeight);
}
*/
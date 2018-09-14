/* =============================================================
    Authour URI: www.binarytheme.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US

    ========================================================  */

/* ==========================================
CUSTOM SCRIPTS
===================================================== */

// CUSTOM LINKS SCROLLING FUNCTION

$('a[href*=\\#]').click(function () {
  if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
    location.hostname === this.hostname) {
    let $target = $(this.hash)
    $target = $target.length && $target ||
      $('[name=' + this.hash.slice(1) + ']')
    if ($target.length) {
      const targetOffset = $target.offset().top
      $('html,body')
        .animate({
          scrollTop: targetOffset
        }, 800) // set scroll speed here
      return false
    }
  }
})

/* ==========================================
IFRAME SIDENAV STICKY SCROLL
===================================================== */

$(document).scroll(function () {
  const menu = $('.sidenav')
  const menuOffset = $('.topPlaceholder').offset()
  const container = $('.navContainer')
  const menuWidth = $('.topPlaceholder').width()
  $('.sticky').css({
    'width': menuWidth + 'px',
    'margin-left': $('.shell').left + 'px'
  })
  menu.css({
    'width': menuWidth + 'px',
    'margin-left': $('.shell').left + 'px'
  })
  if (window.pageYOffset >= menuOffset.top - 50 && window.pageYOffset < menuOffset.top + container.height() - menu.height() - 100) {
    if (menuWidth < 400 && menu.hasClass('sticky') === false && $(window).width() > 500) {
      menu.addClass('sticky')
    }
  } else if (window.pageYOffset < menuOffset.top - 50 || window.pageYOffset >= menuOffset.top + container.height() - menu.height() - 100) {
    if (menu.hasClass('sticky') === true) {
      menu.removeClass('sticky')
    }
  }
})

/* ==========================================
SCROLL REVEL SCRIPTS
===================================================== */

window.scrollReveal = new scrollReveal()

/* ==========================================
WR ITE  YOUR  SCRIPTS BELOW
===================================================== */

/* ==========================================
  SIDENAV AND VERSION BTN ACTIVE CLASS
===================================================== */

const elems = $('.sideUL li')
const btns = $('.versions')

const makeActive = function () {
  if (this.tagName.toLowerCase() === 'li') {
    Array.from(elems).forEach(elem => elem.classList.remove('active'))
  } else if (this.tagName.toLowerCase() === 'div') {
    Array.from(btns).forEach(btn => btn.classList.remove('active'))
  }
  this.classList.add('active')
}
// Array.from(items).map(function(item) {
//         return item.id;
//     });
/* ==========================================
IF RAME EXAMPLE DESCRIPTION SPAN
===================================================== */

// ignore linter, textchange is called in the html. To be repaired in version 2.
function textChange (ref) {
  const txt = document.getElementById('exDesc')
  const obj = document.getElementById('iFCont')
  let text, height
  if (ref === 'OLMW') {
    text = 'In OLM Weekly, the side bar with \'My favorites\' and \'recommendations\' were dynamic user based code.'
    height = 1801
  } else if (ref === 'TP') {
    text = 'In Travel Portal, the powers that be wished to experiment with mimicking buttons with html.'
    height = 1419
  } else if (ref === 'OLMM') {
    text = 'In OLM Monthly, the main body format and savings offers were dynamic with customer shopping trends. Particularly, the P.S. section only displayed for customers, who indeed hadn\'t shopped previously.'
    height = 2170
  } else if (ref === 'OLMMvC') {
    text = 'In OLM Monthly version C, the main body format and savings offers were dynamic with customer shopping trends. Particularly, the P.S. section only displayed for customers, who indeed hadn\'t shopped previously.'
    height = 2264
  } else if (ref === 'UPS') {
    text = 'The Upromise Scholarship campaign was targeted to customers who had recently enrolled in credit rewards.'
    height = 1030
  } else if (ref === 'DvB') {
    text = 'In Dining Program version B, we dynamically retrieved the name of the customer, as well as restaurants participating nearby.'
    height = 1119
  } else if (ref === 'DvC') {
    text = 'In Dining Program version C, the customer withheld their name. However, their location was shared. As such, restaurants participating nearby displayed.'
    height = 1215
  } else if (ref === 'UPT') {
    text = 'The Upromise Toolbar campaign was a promotional add-on for Mozilla and IE browsers.'
    height = 1091
  } else if (ref === 'BCSvA') {
    text = 'Bonus College Savings month version A was directed to customers who regularly shop with Upromise.'
    height = 1320
  } else if (ref === 'BCSvB') {
    text = 'Bonus College Savings month version B was directed to customers who were new to shopping with Upromise. As such, There were some additional directions provided.'
    height = 1400
  } else {
    text = ''
    height = 1801
  }
  height += 50
  txt.innerHTML = txt.textContent = txt.value = text
  obj.style.height = height + 'px'
  obj.setAttribute('height', height)
}

/* ==========================================
IFRAME SOURCE CHANGE
===================================================== */

/*
primaryDir is the desired target link;
firstSecondary is first search option;
secondSecondary is designated for .png version; unless .png is primaryDir value;
*/

function linkChange (vers, primaryDir, firstSecondary, secondSecondary) {
  let linkIncludesPrim, linkIncludesFirst, linkIncludesSecond
  const htmlRef = document.querySelectorAll('.sideUL li a')
  const activeLink = document.querySelectorAll('.sideUL .active')
  const iFra = document.getElementById('iFCont')
  htmlRef.forEach(ref => {
    const dir = ref
    linkIncludesPrim = dir.href.includes(primaryDir)
    linkIncludesFirst = dir.href.includes(firstSecondary)
    linkIncludesSecond = dir.href.includes(secondSecondary)
    if (vers === 'clean') {
      if (linkIncludesPrim === true) {
        // console.log('Alread Linked.')
      } else if (linkIncludesFirst === true) {
        dir.href = dir.href.replace(firstSecondary, primaryDir)
        // console.log(dir.href)
      } else if (linkIncludesSecond === true) {
        dir.href = dir.href.replace(secondSecondary, primaryDir)
        dir.href = dir.href.replace('.png', '.html')
        // console.log(dir.href)
      } else {
        // console.log('Error, no return.')
      }
    } else if (vers === 'encode') {
      if (linkIncludesPrim === true) {
        // console.log('Alread Linked.')
      } else if (linkIncludesFirst === true) {
        dir.href = dir.href.replace(firstSecondary, primaryDir)
        // console.log(dir.href)
      } else if (linkIncludesSecond === true) {
        dir.href = dir.href.replace(secondSecondary, primaryDir)
        dir.href = dir.href.replace('.png', '.html')
        // console.log(dir.href)
      } else {
        // console.log('Error, no return.')
      }
    } else if (vers === 'png') {
      if (linkIncludesPrim === true) {
        // console.log('Alread Linked.')
      } else if (linkIncludesFirst === true) {
        dir.href = dir.href.replace(firstSecondary, primaryDir)
        dir.href = dir.href.replace('.html', '.png')
        // console.log(dir.href)
      } else if (linkIncludesSecond === true) {
        dir.href = dir.href.replace(secondSecondary, primaryDir)
        dir.href = dir.href.replace('.html', '.png')
        // console.log(dir.href)
      } else {
        // console.log('Error, no return.')
      }
    }
  })
  const activeRef = activeLink[0].children[0].href
  iFra.src = activeRef
  // console.log('Frame source - ' + iFra.src)
}

/* ==========================================
IFRAME SOURCE FORMAT REDIRECT
===================================================== */

function changeFormat (ver) {
  const firstTxt = document.getElementById('firstStat')
  let verText
  if (ver === 'reCode') {
    verText = 'I have removed encoding, and cleaned up these versions with local image sources. Links have been removed as well.'
    linkChange('clean', 'upemail/Recoded', 'upemail/Encoded', 'upemail/Img')
  } else if (ver === 'enCode') {
    verText = 'These files are all fully encoded with click tracking and are unedited. Unfortunately, given that I have no access to the servers, I\'m completely at a loss with regard to the links and image sources being inactive.'
    linkChange('encode', 'upemail/Encoded', 'upemail/Recoded', 'upemail/Img')
  } else if (ver === 'img') {
    verText = 'These files are all local flat .png images.'
    linkChange('png', 'upemail/Img', 'upemail/Recoded', 'upemail/Encoded')
  }
  firstTxt.innerHTML = firstTxt.textContent = firstTxt.value = verText
}

$(() => {
  elems.on('mousedown', makeActive)
  btns.on('mousedown', makeActive)
  $('iFCont').src = './assets/upemail/Recoded/20070806_OLM_WEEKLY_32.html'
})
/* ==========================================
IFRAME AUTO SIZE SCRIPT; STILL BROKEN IN GOOGLE CHROME
=====================================================

function resizeIframe(){
  var obj = document.getElementById('iFCont')
  var dir = (obj.contentWindow.document || obj.contentDocument)
  var height = Math.min(dir.body.offsetHeight, dir.body.scrollHeight)
  obj.style.height = height + 'px'
  obj.setAttribute('height', height)
  // console.log('dir.body.offsetHeight - ' + dir.body.offsetHeight)
  // console.log('dir.body.scrollHeight - ' + dir.body.scrollHeight)
}
*/

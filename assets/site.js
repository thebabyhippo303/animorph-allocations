(function(){var b=document.querySelector('.nav-toggle'),n=document.getElementById('nav');if(!b||!n)return;
function set(o){n.classList.toggle('open',o);b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Close menu':'Open menu');}
b.addEventListener('click',function(){set(!n.classList.contains('open'));});
n.addEventListener('click',function(e){if(e.target.tagName==='A')set(false);});
document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false);});})();

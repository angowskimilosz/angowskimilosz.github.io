(function(){var b=document.createElement('div');b.className='prog';document.body.appendChild(b);
function u(){var h=document.documentElement;b.style.width=(h.scrollTop/((h.scrollHeight-h.clientHeight)||1)*100)+'%'}
addEventListener('scroll',u,{passive:true});u();
var els=document.querySelectorAll('.card,.rows>div,.step,.pt,.hint,.note-box,details,.cinfo,.fcard,.feat>div');
function all(){els.forEach(function(el){el.classList.add('vis')})}
if(matchMedia('(prefers-reduced-motion:reduce)').matches||!('IntersectionObserver' in window)){return}
var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('vis');io.unobserve(x.target)}})},{threshold:0,rootMargin:'0px 0px -4% 0px'});
els.forEach(function(el){el.classList.add('rv');io.observe(el)});
setTimeout(all,2500);addEventListener('load',function(){setTimeout(all,1200)})})();

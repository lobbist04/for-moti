const ids=['lock','welcome','cake','balloons','memories','letter','voice','final'];const bg=document.getElementById('bg');
function go(id){ids.forEach(x=>document.getElementById(x).classList.remove('show'));document.getElementById(id).classList.add('show');if(id==='final')fireworks();scrollTo(0,0)}
function unlock(){if(document.getElementById('pw').value.trim().toLowerCase()==='moti'){go('welcome');bg.volume=.25;bg.play().catch(()=>{})}else document.getElementById('err').textContent='Not quite... read the hint again. ❤️'}
document.getElementById('pw').addEventListener('keydown',e=>{if(e.key==='Enter')unlock()});
function blow(){document.getElementById('flame').classList.add('off');document.getElementById('wish').textContent='Wish made. ✨ May this year bring you everything your heart deserves. ❤️';burst(innerWidth/2,innerHeight/2)}
function pop(el,text){el.classList.add('popped');document.getElementById('msg').textContent=text;burst(innerWidth/2,innerHeight/2)}
function musicToggle(){if(bg.paused){bg.play();document.getElementById('music').textContent='♫'}else{bg.pause();document.getElementById('music').textContent='🔇'}}
const c=document.getElementById('fx'),x=c.getContext('2d');let s=[];function resize(){c.width=innerWidth;c.height=innerHeight}resize();addEventListener('resize',resize);
function burst(a,b){for(let i=0;i<70;i++){let q=Math.random()*6.28,v=2+Math.random()*6;s.push({x:a,y:b,vx:Math.cos(q)*v,vy:Math.sin(q)*v,l:1})}}
function fireworks(){burst(innerWidth/2,innerHeight*.25);setInterval(()=>burst(Math.random()*innerWidth,innerHeight*.2+Math.random()*innerHeight*.4),1200)}
(function loop(){x.clearRect(0,0,c.width,c.height);s=s.filter(p=>p.l>0);s.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.07;p.l-=.018;x.globalAlpha=p.l;x.fillStyle='#ff80aa';x.beginPath();x.arc(p.x,p.y,2,0,7);x.fill()});x.globalAlpha=1;requestAnimationFrame(loop)})()
let num =1;
const $accordionList = document.querySelector('.accordion-list')
const $portfolio = document.querySelector('.portfolio')
$accordionList.onclick = (e) => {
  
  if(!e.target.matches('.accordion-list>li')) return;
  if(e.target.matches('.accordion-list>li.active')) return;
  // [...$accordionList.children].forEach($li => $li.classList.remove('active'))
  [...$accordionList.children].forEach(($li,index)=> {
    if(e.target === $li) {
      for(let i = 0 ;i<=index;i++){
        $accordionList.children[i].classList.add('active')
        $accordionList.children[i].style.left = `${(5*i)}%`
        $accordionList.children[index].animate([
          { transform: 'translateX(100%)' }, 
          { transform: 'translateX(0)'}
        ],{
          duration:500,
        })
      }
    }
  })
}

$portfolio.onclick = (e) => {
  const className = e.target.parentNode.className;
  const $slideImg = document.querySelector('.img_wrap img')
  if(!e.target.matches('.portfolio i')) return;
  $slideImg.classList.remove('run-animation')
  void $slideImg.offsetWidth;
  $slideImg.classList.add('run-animation')
  if(className === 'right') num ++;
  else  num--;
  num = num>0? num>4?1:num:1;
    $slideImg.src = `./img/portfolio${num}.jpg`
}


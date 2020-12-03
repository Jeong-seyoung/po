const $accordionList = document.querySelector('.accordion-list')

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


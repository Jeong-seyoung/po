const $accordionList = document.querySelector('.accordion-list')

$accordionList.onclick = (e) => {
  if(!e.target.matches('.accordion-list>li')) return;
  // [...$accordionList.children].forEach($li => $li.classList.remove('active'))
  e.target.classList.add('active')
  console.log(e.target.previoussibling)
}
const d=document
export default function activeNavbarMobile(){
 /*  alert("hola") */
  const $btn=d.querySelector("#buttonOpenCloseMenu")
  const menu = d.querySelector("#menu-mobile-items")
  const svgMenu=d.querySelector(".svgMenu")
  const linksMenuMobile=d.querySelectorAll(".linksMenuMobile")
  d.addEventListener("click",(e)=>{
    console.log(e.target)
    if(e.target===$btn || e.target===svgMenu) menu.classList.toggle("menu-mobile-closed")
  })
  linksMenuMobile.forEach(link=>link.addEventListener("click",(e)=>{
    menu.classList.add("menu-mobile-closed")
  }))
}
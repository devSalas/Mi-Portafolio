 const d=document,w=window,ls=localStorage;
 const scrollGlobal=0;
export default function ChangeBackground(){
 
  const $sun=d.querySelector(".sun")
  const $moon=d.querySelector(".moon")
  const $dataDark=d.querySelectorAll('[data-dark]')
  const $header = d.querySelector(".menu")
  

const darkMode = ()=> {
  $moon.classList.add('icon-none')
  $sun.classList.remove('icon-none')
  $dataDark.forEach((el)=>el.classList.add("dark-Mode"))
  ls.setItem("theme","dark")
  
}
                  
const lightMode = ()=> {
  $moon.classList.remove('icon-none')
  $sun.classList.add('icon-none')
  $dataDark.forEach((el)=>el.classList.remove("dark-Mode"))
  ls.setItem("theme", "light")
 
}

const addBackgroundHeader=()=>{
    
  w.addEventListener("scroll",(e)=>{
    
    let scrollTop= w.pageYOffset || d.documentElement.scrollTop;
    if(scrollTop >20 && ls.getItem("theme")!== "dark"){
      $header.querySelectorAll("a").forEach(el=> el.style.color="black")  
      $header.querySelector("h1").style.color="black"
      $header.style.background="white";
      $header.style.borderBottom="1px solid #80808038"
      
    }
    if(scrollTop <20 && ls.getItem("theme")!== "dark" ){
      $header.querySelectorAll("a").forEach(el=> el.style.color="")
      $header.querySelector("h1").style.color=""  
      $header.style.background="";
      $header.style.background="";
      $header.style.borderBottom=""
    }
    if(scrollTop >20 && ls.getItem("theme")=== "dark"){
      $header.querySelectorAll("a").forEach(el=> el.style.color="white")  
      $header.querySelector("h1").style.color="white"
      $header.style.background="black";
      $header.style.borderBottom="1px solid #80808038"
      
    }
    if(scrollTop <20 && ls.getItem("theme")=== "dark"){
      $header.style.background="";
      $header.style.borderBottom=""
    }


  })
}
addBackgroundHeader()



  d.addEventListener("click",(e)=>{
    if(e.target==$moon){
      darkMode()
     
    }
    if(e.target==$sun){
      lightMode()
    }

  })
  
  d.addEventListener("DOMContentLoaded",(e)=>{

    if(ls.getItem("theme")=== null)ls.setItem("theme","light")
    if(ls.getItem("theme")=="light")  lightMode()
    if(ls.getItem("theme")==="dark")  darkMode()
      
      
     
    
    
    
    
  })
}
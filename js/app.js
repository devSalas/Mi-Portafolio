
import effectMachine from "./animationEfectMachine.js";
import ChangeBackground from "./DarkMode.js";
import contactFormValidations from "./validaciones_formulario.js"

const d=document;

d.addEventListener('DOMContentLoaded',(e)=>{
   effectMachine();
   contactFormValidations();
})

ChangeBackground();

const effectMachine=()=>{
  const d= document
  const $infoDev= d.querySelector(".info-dev")
  const $infoCv= d.querySelector(".info-cv")
  const ParamsDev={
    tag:$infoDev,
    withd:undefined,
    named:"typing",
    duration:1,
    timingFunction:21,
    delay:0,
  };
  const ParamsCv={
    tag:$infoCv,
    withd:undefined,
    named:"typing",
    duration:1,
    timingFunction:0,
    delay:1,
  };

  const ApplyAnimation=({tag,withd,named,duration,delay})=>{
    const defaultAmount= withd || tag.textContent.length
    console.log(delay)
      setTimeout(()=>{
        tag.style.width=`${defaultAmount}ch`
        tag.style.animation=`${named} ${duration}s steps(${defaultAmount})`
      },delay*1000)
  }

  ApplyAnimation(ParamsDev)
  ApplyAnimation(ParamsCv)
}
export default effectMachine;
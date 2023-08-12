let meno= document.querySelector('#contextMenu')
let bodi =document.body
bodi.addEventListener('contextmenu',function(event){
    event.preventDefault()
    meno.style.display='flex'
    meno.style.position='absolute'
    meno.style.left=event.pageX
    meno.style.top=event.pageY
})
bodi.addEventListener('click',function(event){
    meno.style.display='none'
})
function space(event){
    if(event.code=='Space'){
        meno.style.display='none'

    }
}
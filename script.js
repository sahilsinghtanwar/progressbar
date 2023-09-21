const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circle = document.getElementById('.circle')

let curerentActive = 1

next.addEventListener('click', () =>{
    curerentActive++

    if(curerentActive > circle.length){
        curerentActive = circle.length
    }
})


prev.addEventListener('click', () =>{ 

    curerentActive--

    if(curerentActive < 1){
        curerentActive = 1
    }
    update()
})

function update(){
    circles.forEach((circle, idx) => {
        if(idx < curerentActive){
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = documents.querySelectorAll('.active')

    console.log(actives.length, circles.length)
}


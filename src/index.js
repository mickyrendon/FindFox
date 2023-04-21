// btns
const btn = document.querySelector(".btn")
btn.addEventListener('click', async () => {
    console.log('click');
    const module = await import('./js/createImages.js')
    module.addImg()
})
// clear images dynamic import
const clearBtn =  document.querySelector(".clear-btn")
clearBtn.addEventListener('click', async () => {
    const { clear } = await import('./js/clear.js')
    clear()
})

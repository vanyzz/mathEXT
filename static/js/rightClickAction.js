oncontextmenu = (e) => {
    e.preventDefault()
    let menu = document.createElement("div")
    menu.id = "ctxmenu"
    menu.style = `top:${e.pageY-10}px;left:${e.pageX-40}px`
    menu.onmouseleave = () => ctxmenu.outerHTML = ''
    menu.innerHTML = "<p> Add formula using AI</p><p>Draw formula</p>";
    document.body.appendChild(menu)
  }
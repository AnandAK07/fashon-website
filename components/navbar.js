function navbar(){
    return `<nav id="navbar">
    <div id="nav-left">
      <h1>Glossier.</h1>
    </div>
    
    <div id="nav-center">
      <a href="./catalog.html">SKINCARE</a>
      <a href="./catalog.html">makeup</a>
      <a href="./catalog.html">body</a>
      <a href="./catalog.html">fragrance</a>
      <a href="./catalog.html">glossiwear</a>
      <a href="./catalog.html">sets</a>
    </div>

    

    <div id="nav-right">
    <a id="menurk" href="./catalog.html">MENU</a>
      
      <a href="">stories</a>
      <a href="./search.html">search</a>
      <a href="./login.html">login</a>
      <a href="">bags <span id="count">(0)</span></a>
    </div>
  </nav>`
}

export default navbar;
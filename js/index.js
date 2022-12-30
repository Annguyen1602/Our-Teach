function changeHeader() {
  
  if (window.scrollY > 100) {
    document.getElementById("header-1").classList.add("scrolling-header");
  } else {
    document.getElementById("header-1").classList.remove("scrolling-header");
  }
  
}

window.onscroll = changeHeader;





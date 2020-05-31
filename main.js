
function menuBtnClicked() {
  console.log('function clicked');
  // Show/Hide Menu
  document.getElementById('side-menu').classList.toggle('active')
  //Fill/Unfill Side Menu Button
  document.getElementById('side-menu-btn').classList.toggle('active');
  
}
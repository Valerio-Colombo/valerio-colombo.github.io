function openTab(evt, tabName) {
    // Hide all tab content first
    var tabcontent = document.getElementsByClassName('mission-content');
    for (var i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }
  
    // Remove the 'active' class from all tab buttons
    var tablinks = document.getElementsByClassName('mission-button');
    for (var i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove('active');
    }
  
    // Show the selected tab content and mark the button as 'active'
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.classList.add('active');
  }


var tabcontent = document.getElementsByClassName('mission-content');
for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
}

// Open the first tab by default
document.getElementById('mission_0').style.display = 'block';
document.getElementsByClassName('mission-button')[0].classList.add('active');
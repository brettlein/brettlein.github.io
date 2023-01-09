function mobileToggle() {
    var x = document.getElementById("navMobile");
    if (x.className === "navmobile") {
      x.className += " responsive";
    } else {
      x.className = "navmobile";
    }
  }

  function Dropabout() {
    var y = document.getElementById("dropabout");
    if (y.className === "navmobile__listitemdrop") {
      y.className += " active";
    } else {
      y.className = "navmobile__listitemdrop"
    }
  }

  function Dropcontact() {
    var y = document.getElementById("dropcontact");
    if (y.className === "navmobile__listitemdrop") {
      y.className += " active";
    } else {
      y.className = "navmobile__listitemdrop"
    }
  }
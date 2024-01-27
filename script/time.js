

      a = new Date();
      let date = a.toLocaleDateString();
      let time = a.toLocaleTimeString();
      document.getElementById("time").innerHTML = time + " On " + date;

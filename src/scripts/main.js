   $(document).ready (function(){

        var mainPanel = document.getElementById('mainPanel');
        var sidePanel = document.getElementById('sidePanel');

        var removePanel = document.getElementById('removePanel');
        var removeContactPanel = document.getElementById('removeContactPanel');

        var mainContactPanel = document.getElementById('mainContactPanel');
        var sideContactPanel = document.getElementById('sideContactPanel');

        var btnCookies = document.getElementById('btnCookies');
        var panelCookies = document.getElementById('panelCookies');


      /* Navegador Desktop */
        mainPanel.addEventListener('click', onSwipe);
        removePanel.addEventListener('click', removeSwipe);

        mainContactPanel.addEventListener('click', onSwipeContact);
        removeContactPanel.addEventListener('click', removeSwipeContact);

        btnCookies.addEventListener('click', removeCookies);

        function onSwipe() {
            sidePanel.classList.add('open-chat-panel');

        }

        function removeSwipe() {
            sidePanel.classList.remove('open-chat-panel');

        }

       function onSwipeContact() {
            sidePanelContact.classList.add('open-contact-panel');

        }

        function removeSwipeContact(){
            sidePanelContact.classList.remove('open-contact-panel');
        }

        function removeCookies() {
            panelCookies.classList.toggle('remove-cookies-panel');
      }

    });

    //TWITTER

        window.twttr = (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0],
          t = window.twttr || {};
        if (d.getElementById(id)) return t;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);

        t._e = [];
        t.ready = function(f) {
          t._e.push(f);
        };

        return t;
      }(document, "script", "twitter-wjs"));

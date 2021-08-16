const tabs = document.querySelector(".tab-section");
    const tabButton = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");

    tabs.onclick = e => {
    const id = e.target.dataset.id;
    if (id) {
        tabButton.forEach(btn => {
        btn.classList.remove("active");
        });
        e.target.classList.add("active");

        contents.forEach(content => {
        content.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
}




//

(function() {

    //fade in element function
    function unfade(element) {
      var $html = document.getElementsByTagName('html')[0];
      var op = 0.1;  // initial opacity
      element.style.display = 'block';
      var timer = setInterval(function () {
      if (op >= 1) {
        clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.1;
      }, 10); //set the time here 1=100ms
     }
    
    //prevent click events for links
    var $tab_links = document.getElementsByClassName('nav-link');
    if ($tab_links[0] !== null && $tab_links[0] !== 'undefined'   && $tab_links[0] !== undefined) {
      for (var $i = 0; $i < $tab_links.length; $i++) {
        $tab_links[$i].onclick = function (event) {
          event.preventDefault();
          var $tabToggle = event.target.parentElement.parentElement.parentElement;
          var toggle;
          return toggle = new Toggle($tabToggle);
        }
      }
    }
  
    this.Toggle = (function() {
      Toggle.prototype.el = null;
  
      Toggle.prototype.tabs = null;
      
      Toggle.prototype.links = null;
  
      Toggle.prototype.panels = null;
  
      function Toggle(toggleClass) {
        this.el = $(toggleClass);
        this.tabs = this.el.find(".nav-item");
        this.panels = this.el.find(".panel");
        this.bind();
      }
  
      Toggle.prototype.show = function(index) {
        var activePanel, activeTab;
        this.tabs.removeClass('active');
        activeTab = this.tabs.get(index);
        $(activeTab).addClass('active');
        this.panels.hide();
        activePanel = this.panels.get(index);
        // return $(activePanel).show();
        return unfade(activePanel);
      };
  
      Toggle.prototype.bind = function() {
        var _this = this;
        return this.tabs.unbind('click').bind('click', function(e) {
          return _this.show($(e.currentTarget).index());
        });
      };
  
      return Toggle;
  
    })();
  
  }).call(this);
  
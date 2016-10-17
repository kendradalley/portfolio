$(document).ready(function(){

  
  if($(window).scrollTop() > 100) {
    $("#main-menu").addClass("menu-scroll");
  }
  else{
    $("#main-menu").removeClass("menu-scroll");
  }
  
  // Cache selectors
  var lastId,
      topMenu = $("#main-menu"),
      topMenuHeight = topMenu.outerHeight()+15,
      // All list items
      menuItems = topMenu.find("li > a"),
      // Anchors corresponding to menu items
      scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
      });
  
 
  //Window Scroll Function
  $(window).scroll(function(){
    //Parallax
    var wScroll = $(this).scrollTop();
        
    if(wScroll > 100) {
      $("#main-menu").addClass("menu-scroll");
    }
    else{
      $("#main-menu").removeClass("menu-scroll");
    }
    
    /*Parallax Effects*/
    $('.header-image').css('transform', 'translate(0px, '+ wScroll /10 +'%)');
    
    if(wScroll > $('#about').offset().top - ($(window).height() / 1.2 )){
      $('#about .section-title').css('transform', 'translate(0px, '+ wScroll /30 +'%)');
    }
    
    
    // Get container scroll position
    var fromTop = $(this).scrollTop()+topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function(){
      if ($(this).offset().top < fromTop)
        return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems
        .parent().removeClass("active")
        .end().filter("[href='#"+id+"']").parent().addClass("active");
    }
  });// End Get container scroll position
  
  //ScrollTo
  $("#main-menu, .logo").localScroll({
		target: "body",
		duration: 1000,
		offset: (-79) //tamanho do menu
	});
 
  
});
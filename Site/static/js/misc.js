
(function($){
     $.fn.moveUp = function(){
         return this.each(function(){
			      var cl = $(this).clone();
			      $(cl).appendTo($(this).parent());
			      $(this).remove();
			  });
     };
 })(jQuery);


knits = $("pre.knitr");

for(k in knits){
    fixup(k);
}

fixup=function(k){
    var p = $(k).parent();

    var imgs = $(k).find("img");
    imgs.detach();
    imgs.wrap("<div class='rimage' />");
    $(k).wrap("<div class='rcode' />").wrap("<div class='chunk' />");
    $(k).find("div.chunk").append(imgs);
};
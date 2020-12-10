$(document).ready(function() { 
      console.log("jquery ok");
      $("#esconder").click(function(){
        $("article").hide();
      });
      $("#ensenar").click(function(){
        $("article").show();
      });
      $("#anado").click(function(){
        $("section").append("<article>Esto es un article dentro de section</article>");
      });
      $("#quito").click(function(){
        $("article:last-child").remove();
      });
    });
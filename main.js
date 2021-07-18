$(document).ready(function(){
    
    $(".greeting").click(function() {
        if($(".list_1").css("display") == 'none'){
            $(".list_1").show();
        } else {
            $(".list_1").hide();
        }
    });
    $(".hobby").click(function(){
        if($(".list_2").css("display") == 'none'){
            $(".list_2").show();
        } else {
            $(".list_2").hide();
        }
    });
    $(".interesting").click(function(){
        if($(".list_3").css("display") == 'none'){
            $(".list_3").show();
        } else {
            $(".list_3").hide();
        }
    });
});
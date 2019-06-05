$(document).ready(function() { 
    $('#meet')
        .ajaxForm({
            url : 'https://workspace.ru/ajax/test/test.php', 
            dataType : 'json',
            success : function (response) {
                window.location.href = "#progress_bar_cont";
                var error = $("#error_submit_form");
                var thanks = $("#success_submit_form");
                if(!response.success){
                    thanks.attr('hidden','');                    
                    for(var msg in response.data){
                        var msgCont = $("#message_" + msg);
                        msgCont.html(response.data[msg]);
                        msgCont.css({"background-color":"red","color":"white"});                        
                    }
                    error.removeAttr('hidden');                                       
                }else{
                    error.attr('hidden','');
                    thanks.removeAttr('hidden');                    
                }
                $("div").scrollTop();                
            }
        });
});
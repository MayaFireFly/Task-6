$("#meet input, #meet textarea").change(function() {  
    var numValid = 0;    
    $("#meet input, #meet textarea").each(function() {                
        if(this.validity.valid && this.value !== ""){
            numValid++;        
        }      
    });
    var percent = $("#percent_form_progress");
    var progress = $("#progress");                
    switch(numValid){
        case 0:{
            progress.attr("value", "0");
            percent.html("0%");
            break;
        }
        case 1:{
            progress.attr("value", "17");
            percent.html("17%");
            break;
        }
        case 2:{
            progress.attr("value", "34");
            percent.html("34%");
            break;
        }
        case 3:{
            progress.attr("value", "50");
            percent.html("50%");
            break;
        }
        case 4:{
            progress.attr("value", "67");
            percent.html("67%");
            break;
        }
        case 5:{
            progress.attr("value", "84");
            percent.html("84%");
            break;
        }
        case 6:{
            progress.attr("value", "100");
            percent.html("100%");
            break;
        }
        default:{
            break;
        }
    }  
});
let blogNum = 0;

function setup() {
    $("#edit1").change(function() {
        if(this.checked) {
            $("#edit2").hide()
            $("#edit3").hide()
            blogNum = 1;
            $("#textArea").show()
        }else{
            $("#edit2").show()
            $("#edit3").show()
            blogNum = 0;
            $("#textArea").hide()
        }
    });

    $("#edit2").change(function() {
        if(this.checked) {
            $("#edit1").hide()
            $("#edit3").hide()
            blogNum = 2;
            $("#textArea").show()
        }else{
            $("#edit1").show()
            $("#edit3").show()
            blogNum = 0;
            $("#textArea").hide()
        }
    });

    $("#edit3").change(function() {
        if(this.checked) {
            $("#edit1").hide()
            $("#edit2").hide()
            blogNum = 3;
            $("#textArea").show()
        }else{
            $("#edit1").show()
            $("#edit2").show()
            blogNum = 0;
            $("#textArea").hide()
        }
    });
    
    //Listener for submit button
    $('#submit').click(()=>{
        
        //check if storage is available
        if(typeof Storage !=='undefined'){
        
            //get the word from user
            let input = $('#words').val();
        
            //put input in object
            let obj = {name:input}

            //Store stringified object to localStorage
            window.localStorage.setItem('edit'+blogNum,JSON.stringify(obj))

    //else if there is no local storage
    }else{
        console.log('no local storage available')
    }
    })
    
    //Listener for cancel button
    $('#cancel').click(()=>{
        
        //show buttons
        $("#edit1").show()
        $("#edit2").show()
        $("#edit3").show()
        
        //uncheck buttons
        $('#edit1').prop('checked',false)
        $('#edit2').prop('checked',false)
        $('#edit3').prop('checked',false)
        
        //hide text box and keyboard
        $('#textArea').css('display','none')
    })
}

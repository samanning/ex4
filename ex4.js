//Javascript

//call to jQuery ready function
//make sure html and css are loaded

$(document).ready(function(){
    
    console.log('ready');
    
    //hide all tips
    $('.agendaTip, .penTip, .keysTip, .burtsTip, .phoneTip').hide();
    
    //click agenda shows clear agenda
    $('#agenda').click(function(){
        $(this).attr('src','media/agenda.png').animate(
            {
            opacity: 1
        });
    });
    
    //click pen shows clear pen
    $('#pen').click(function(){
        $(this).attr('src','media/pen.png').animate(
        {
            opacity:1
        });
    });
    
    //click keys shows clear keys
    $('#keys').click(function(){
        $(this).attr('src','media/keys.png').animate(
        {
            opacity:1
        });
    });
    
    //click burts shows clear burts
    $('#burts').click(function(){
        $(this).attr('src','media/burts.png').animate(
        {
            opacity:1
        });
    });
    
       //click phone shows clear phone
    $('#phone').click(function(){
        $(this).attr('src','media/phone.png').animate(
        {
            opacity:1
        });
    });
    
    //agenda tool tip on hover
    $('img#agenda').hover(function () { // first function

        //turn on the tool tip
        $('.agendaTip').show();

    }, function () { // second function
        $('.agendaTip').hide();
    });
    
    //pen tool tip on hover
    $('img#pen').hover(function () { // first function

        //turn on the tool tip
        $('.penTip').show();

    }, function () { // second function
        $('.penTip').hide();
    });

     //keys tool tip on hover
    $('img#keys').hover(function () { // first function

        //turn on the tool tip
        $('.keysTip').show();

    }, function () { // second function
        $('.keysTip').hide();
    });
    
     //burts tool tip on hover
    $('img#burts').hover(function () { // first function

        //turn on the tool tip
        $('.burtsTip').show();

    }, function () { // second function
        $('.burtsTip').hide();
    });
    
     //phone tool tip on hover
    $('img#phone').hover(function () { // first function

        //turn on the tool tip
        $('.phoneTip').show();

    }, function () { // second function
        $('.phoneTip').hide();
    });

}); //close jQuery ready function
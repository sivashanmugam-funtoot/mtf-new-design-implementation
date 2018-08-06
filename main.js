function isQuestionTextOverflow() {
    if($('.mtf-header').height() < $('.mtf-question-container').height()){
        $('.expand-button').css('display','block');
    }
}
//isQuestionTextOverflow()

function exapndQuestionText(){
    if($('.mtf-header').css('overflow') == 'visible'){
        $('.mtf-header').css('overflow', 'hidden');
        $('.mtf-question-text').css('overflow', 'hidden');
        $('.mtf-question-text').css('display', '-webkit-box');
        $('.mtf-question-text').css('height', '50px');
        $(".expand-button").css('bottom','unset');
        $(".expand-button").css('top','0%');
        $(".expand-button").toggleClass('flip');


    } else {
        $('.mtf-header').css('overflow', 'visible');
        $('.mtf-question-text').css('overflow', 'unset');
        $('.mtf-question-text').css('display', 'block');
        $('.mtf-question-text').css('height', 'auto');
        $(".expand-button").toggleClass('flip');
        $(".expand-button").css('bottom','5%');
        $(".expand-button").css('top','unset');
    }
}

$(document).ready(function(){
    $( ".rhs-container" ).sortable();
    $( ".rhs-container" ).disableSelection();
}) 
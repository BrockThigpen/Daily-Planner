let arr1 = ['9', '10', '11', '12', '13', '14', '15', '16', '17']
let dt = new Date();
let time = dt.getHours();
// genterate current day
$('#currentDay').text('Today is ' + moment().format("dddd" + ', ' + "MMM Do"));
// generate new rows 
arr1.forEach(function(gen){
    let newRow = $('<div>').addClass('row');
    let newHour = $('<div>').addClass('hour text-center pt-4');
    if(parseInt(gen) < 12){
        newHour.text(gen + 'am')
    }else if(parseInt(gen) > 12){
        newHour.text(gen - 12 + 'pm')
    }else{
        newHour.text(gen + 'pm')
    }
    let newTextarea = $('<textarea>').attr('i', gen);
    let newSaveBtn = $('<button>').addClass('saveBtn fas fa-save fa-lg')
    newRow.append(newHour, newTextarea, newSaveBtn);
    $('.container').append(newRow);
})
// localStorage
$(document).ready ( () => {
    bgTime();
    $('*[i]').each(function() {
        $(this).val(localStorage.getItem('row - ' + $(this).attr('i')));
    });
    // save btn on click
    $('.saveBtn').on('click', function(){
        localStorage.setItem('row - ' + $(this).prev('textarea').attr('i'), $(this).prev('textarea').val());
    });
    //time based bg color
    setInterval(bgTime, 60000);
    function bgTime(){
        $('*[i]').each(function() {
            if(parseInt($(this).attr('i')) == time){
                $(this).removeClass('future past').addClass('present');
            }else if(parseInt($(this).attr('i')) < time){
                $(this).removeClass('present future').addClass('past');
            }else{
                $(this).removeClass('past present').addClass('future');
            }
        });
    }
})
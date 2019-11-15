let arr1 = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm']
// genterate current day
$('#currentDay').text('Today is ' + moment().format("dddd" + ', ' + "MMM Do"));
// generate new rows 
arr1.forEach(function(gen){
    let newRow = $('<div>').addClass('row');
    let newHour = $('<div>').addClass('hour text-center pt-4').text(gen);
    let newTextarea = $('<textarea>').addClass('past').attr('i', gen);
    let newSaveBtn = $('<button>').addClass('saveBtn fas fa-save fa-lg')
    newRow.append(newHour, newTextarea, newSaveBtn);
    $('.container').append(newRow);
})
// localStorage
$(document).ready ( () => {
    $('*[i]').each(function() {
        $(this).val(localStorage.getItem('row - ' + $(this).attr('i')));
    });
    // save btn on click
    $('.saveBtn').on('click', function(){
        localStorage.setItem('row - ' + $(this).prev('textarea').attr('i'), $(this).prev('textarea').val());
        console.log($(this).attr('i'));
    })
})
// add click event for local storage
// check local storage and display any data
// function that checks client time on a one min interval and color code text areas accordingly....call function in arr1.foreach....put arr1.foreach on a one min interval?....remove past class from textarea in arr1.foreach


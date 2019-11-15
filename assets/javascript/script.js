let arr1 = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm']
// genterate current day
$('#currentDay').text('Today is ' + moment().format("dddd" + ', ' + "MMM Do"));
// generate new rows 
arr1.forEach(function(gen){
    let newRow = $('<div>').addClass('row');
    let newHour = $('<div>').addClass('hour').text(gen);
    let newTextarea = $('<textarea>');
    let newSaveBtn = $('<button>').addClass('saveBtn')
    newRow.append(newHour, newTextarea, newSaveBtn);
    $('.container').append(newRow);
})

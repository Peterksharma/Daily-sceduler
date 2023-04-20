$(function () {
  dayjs.extend(window.dayjs_plugin_advancedFormat);

  var currentDay = $("#currentDay");
  var currentDate = dayjs().format('dddd, MMMM Do');
  var currentHour = dayjs().hour();
  currentDay.text(currentDate);
  function createTimeBlocks() {
    var startHour = 9; // 9AM
    var endHour = 18; // 6PM

    //for loop to add classes
    for (var hour = startHour; hour < endHour; hour++) {
      var timeBlock = $('<div>').addClass('row time-block').attr('id', 'hour-' + hour);
      var hourLabel = $('<div>').addClass('col-2 col-md-1 hour text-center py-3').text(hourToAmPm(hour));
      var textarea = $('<textarea>').addClass('col-8 col-md-10 description').attr('rows', '3');
      //getting the text from local storage
      var savedText = localStorage.getItem('hour-' + hour)
      var saveBtn = $('<button>').addClass('btn saveBtn col-2 col-md-1').attr('aria-label', 'save');
      var saveIcon = $('<i>').addClass('fas fa-save').attr('aria-hidden', 'true');

      if (savedText) {
        textarea.val(savedText);
      }
      
      //Adding the past, present, or future class
      if (hour < currentHour) {
        textarea.addClass('past');
      } else if (hour === currentHour) {
        textarea.addClass('present');
      } else { 
        textarea.addClass('future');
      }

      saveBtn.append(saveIcon);
      timeBlock.append(hourLabel, textarea, saveBtn);
      $('#time-block-container').append(timeBlock);

      //Saving the text to local storage
      saveBtn.on('click', function () {
        var clickedHour = $(this).parent().attr('id');
        var textToSave = $(this).siblings('textarea').val();
        localStorage.setItem(clickedHour, textToSave);
        console.log('Save button has been activated. The text was saved to local storage');
      });
    }
  }
  
  function hourToAmPm(hour) {
    if (hour < 12) {
      return hour + 'AM';
    } else if (hour === 12) {
      return '12PM';
    } else {
      return (hour - 12) + 'PM';
    }
  }

  var currentHour = dayjs().hour();
  createTimeBlocks();

});


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
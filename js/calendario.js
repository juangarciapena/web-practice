document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid'],
      locale: 'es',
      height: 550, 
      buttonText:{
          today: 'hoy'
      },
      events: [
            {
                title: 'Vacuna 1',
                start: '2020-11-17',
                end:'2020-11-19'
            },
            {
                title: 'Vacuna 2',
                start: '2020-11-21'
            },
            {
                title: 'Vacuna 3',
                start: '2020-11-27'
            },
            {
                title: 'Vacuna 4',
                start: '2020-11-30'
            },
            {
                title: 'Vacuna 5',
                start: '2020-12-16'
            },
            {
                title: 'Vacuna 6',
                start: '2021-01-03'
            }
        ]
    }); 
    
    calendar.render();
  });

  

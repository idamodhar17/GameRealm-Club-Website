<script>
    document.addEventListener('DOMContentLoaded', function () {
        // Initialize FullCalendar
        $('#eventCalendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            events: [
                {
                    title: 'Game Night Extravaganza',
                    start: '2023-11-01T18:00:00',
                    description: 'Join us for a night of fun and games!',
                },
                {
                    title: 'Coding Challenge Marathon',
                    start: '2023-11-15T19:30:00',
                    description: 'Test your coding skills in our marathon challenge!',
                },
                // Add more events as needed
            ],
            eventClick: function (event) {
                alert('Event: ' + event.title + '\nDate: ' + event.start.format('MMMM D, YYYY') + '\nDescription: ' + event.description);
            },
        })
    });
</script>

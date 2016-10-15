 // Options
 var legend_options = {
     display: true,
     position: "bottom",
     labels: {
         fontFamily: 'Roboto, sans-serif',
         boxWidth: 10
     }
 };

// GLOBAL CHARTS OPTIONS

Chart.defaults.global.defaultFontFamily = "'Roboto', Helvetica, Arial, sans-serif";
Chart.defaults.global.maintainAspectRatio = false;
Chart.defaults.global.responsive = true;
Chart.defaults.bar.scaleShowVerticalLines = false;

 // ------------------------------------------------------
 // LINE CHARTS
 // ------------------------------------------------------

 // Hourly, Daily, Weekly and Monthly Datasets for line charts

 var hourly_data = {
     labels: ['12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00'],
     datasets: [
         {
             data: [7000, 6000, 5500, 8000, 6500, 7000, 8000, 7000, 6000, 7500, 4500],
             backgroundColor: 'rgba(88, 20, 181, 0.3)',
             lineTension: 0,
             pointBorderColor: 'rgba(88, 20, 18, 0.8)',
             pointRadius: 6,
             pointBorderWidth: 2,
             pointBackgroundColor: '#fff'
         }
     ]
 };


var daily_data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
        {
            data: [8000, 7500, 5500, 6500, 4500, 7500, 8000],
            backgroundColor: 'rgba(74, 217, 217, 0.3)',
            lineTension: 0,
            pointBorderColor: 'rgba(74, 217, 217, 0.8)',
            pointRadius: 6,
            pointBorderWidth: 2,
            pointBackgroundColor: '#fff'
        }
    ]
};

var weekly_data = {
  labels: ['16-22','23-29','30-5','6-12','13-19','20-26','27-3','4-10','11-17','18-24','25-31'],
  datasets: [
      {
          data: [5000, 8500, 9000, 6500, 6500, 5500, 7000, 8000, 4500, 6000, 4000],
          backgroundColor: 'rgba(245, 165, 3, 0.3)',
          lineTension: 0,
          pointBorderColor: 'rgba(245, 165, 3, 0.8)',
          pointRadius: 6,
          pointBorderWidth: 2,
          pointBackgroundColor: '#fff'
      }
  ]
};

var monthly_data = {
  labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov', 'Dec'],
  datasets: [
      {
          data: [9000, 7500, 8500, 8500, 8500, 7500, 7000, 6500, 6500, 8500, 9500, 5000],
          backgroundColor: 'rgba(242, 56, 90, 0.3)',
          lineTension: 0,
          pointBorderColor: 'rgba(242, 56, 90, 0.8)',
          pointRadius: 6,
          pointBorderWidth: 2,
          pointBackgroundColor: '#fff'
      }
  ]
};

var line_chart_area = document.getElementById("web-traffic-line-chart").getContext('2d');
var line_chart = new Chart(line_chart_area, {
    type: 'line',
    data: weekly_data,
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                type: 'linear',
                ticks: {
                    max: 10000,
                    min: 4000,
                    stepSize: 2000
                }
            }],
            xAxes: [{
                gridLines: {
                    drawTicks: false,
                    color: '#dfdfdf'
                }
            }]
        }
    }
});

// Button clicks function to swap line charts datasets

$("#datasets-options a").click(function(event) {
        $('#datasets-options a').removeClass("active");
        $(this).addClass("active");
        event.preventDefault(event);
    });

    // Update charts
     $("#hourly-btn").click(function(event) {
         event.preventDefault(event);
         line_chart.config.data = hourly_data;
         line_chart.update();
     });

     $("#daily-btn").click(function(event) {
         event.preventDefault(event);
         line_chart.config.data = daily_data;
         line_chart.update();
     });

     $("#weekly-btn").click(function(event) {
         event.preventDefault(event);
         line_chart.config.data = weekly_data;
         line_chart.update();
     });

     $("#monthly-btn").click(function(event) {
         event.preventDefault(event);
         line_chart.config.data = monthly_data;
         line_chart.update();
     });

// ------------------------------------------------------
// BAR CHARTS
// ------------------------------------------------------

var bar_chart_area = document.getElementById("daily-traffic-bar-chart");
var bar_chart = new Chart(bar_chart_area, {
    type: 'bar',
    data: {
        labels: ["S", "M", "W", "T", "T", "F", "S"],
        datasets: [{
            label: 'AM',
            data: [15, 14, 20, 11, 16, 10, 13],
            backgroundColor: '#2e6da4'
        },
        {
            label: 'PM',
            data: [11, 15, 22, 30, 12, 8, 22],
            backgroundColor: '#e74c3c'//'#b14843'
        }]
    },
    options: {
        stacked: true,
        legend: legend_options,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

// ------------------------------------------------------
// DONUT (yummy) CHARTS
// ------------------------------------------------------

var donut_chart_area = document.getElementById("source-traffic-donut-chart");
var donut_chart = new Chart(donut_chart_area, {
    type: 'doughnut',
    data: {
        labels: [
            "Desktop",
            "Tablet",
            "Mobile",
            "Others"
            ],
        datasets: [
            {
                data: [300, 50, 100, 20],
                backgroundColor: [
                    "#2e6da4",
                    "#2c3e50",
                    "#e74c3c",
                    "#3498db"
                ],
                hoverBackgroundColor: [
                    "#2e6da4",
                    "#2c3e50",
                    "#e74c3c",
                    "#3498db"
                ]
            }]

    },
    options: {
        responsive: true,
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontFamily: 'Roboto, sans-serif',
                boxWidth: 10
            }
        }
    }
});

// ----------------------------------------------------------------------

// CLOSE ALERT DIV ON CLICK
 $("#alert-dismiss").click(function() {
     $("#alert").fadeOut("slow");
 });


// NOTIFICATION MODAL DIALOG
$( "#notif-dialog" ).dialog({
    autoOpen: false,
    modal: true,
    show: {
        effect: "fade",
        duration: 150
    },
    hide: {
        effect: "fade",
        duration: 150
    },
    	position: {
    		my: "center",
    		at: "center"
    	},
	// Add the 2 options below to use click outside feature
	clickOutside: true, // clicking outside the dialog will close it
	clickOutsideTrigger: "#notif-button"  // Element (id or class) that triggers the dialog opening
});

$("#notif-button").click(function(){
    $( "#notif-dialog" ).dialog( "open" );
});


// MESSAGE USER FORM VALIDATION
$('#btn-message-send').click(function(event){
    event.preventDefault(event);
    if($.trim($('#user-message').val()) === '' || $.trim($('#user-name-search').val()) === ''){
        $( "#message-form-alert" ).css('background-color', '#ffdb99');
        $( "#message-form-alert" ).html('Username and message are required!')
             .fadeIn( "fast" );
   } else {
    // Show success message, fade in then fade out
        $( "#message-form-alert" ).css('background-color', '#5fba7d');
        $( "#message-form-alert" ).html('Message sent!')
            .fadeIn( "fast" )
            .delay(1000)
            .fadeOut('slow');

        // clear the textfields
        $('#user-message').val('');
        $('#user-name-search').val('');
   }


});


// AUTOCOMPLETE USER SEARCH
var all_users = [
      "Miranda Lawson",
      "Evie Fyre",
      "Piper Wright",
      "Nick Valentine",
      "Varric Tethras",
      "Cullen Rutherford",
      "Cassandra Pentaghast",
      "John Shepard",
      "Liara",
      "Ezio Auditore"
];
$( "#user-name-search" ).autocomplete({
    source: all_users
});

// LOCAL STORAGE FOR SETTINGS

// check if localstorage has previously saved a settings,
// If it exists in localstorage, put it on the respective elements
// localStorage.clear();
var selected_tz = localStorage.getItem("selected-tz");
var email_pref = localStorage.getItem("email-pref");
var profile_pref = localStorage.getItem("profile-pref");

if (selected_tz !== null) {
    $( "select#user-timezone").val(selected_tz);
}

if (email_pref !== null) {
    $( "#email-pref" ).prop( "checked", email_pref );
}

if (profile_pref !== null) {
    $( "#profile-pref" ).prop( "checked", profile_pref );
}

// alert("in local storage: " + selected_tz + ", " + email_pref + ", " + profile_pref);

// on save button click, update localstorage
$( "#btn-settings-save" ).click(function(){
    // get selected value from timezone dropdown, email and profile preference
    selected_tz = $( "select#user-timezone option:selected").val();
    email_pref = $( "#email-pref" ).prop( "checked" );
    profile_pref = $( "#profile-pref" ).prop( "checked" );

    // alert(selected_tz + ", " + email_pref + ", " + profile_pref);

    // update localstorage
    // for email and profile reference, remove the items if they are unchecked
    // can't seem to get consistent results otherwise.
    if (email_pref) {
        localStorage.setItem("email-pref", email_pref);
    } else {
        localStorage.removeItem("email-pref");
    }

    if (profile_pref) {
        localStorage.setItem("profile-pref", profile_pref);
    } else {
        localStorage.removeItem("profile-pref");
    }

    localStorage.setItem("selected-tz", selected_tz);

    // alert(selected_tz + ", " + email_pref + ", " + profile_pref + "---------saved data: " + localStorage['selected-tz']+ ", " + localStorage['email-pref'] + ", " + localStorage['profile-pref']);

    alert("Settings saved!");
});

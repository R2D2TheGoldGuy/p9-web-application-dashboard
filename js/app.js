 // Options
 var legend_options = {
     display: true,
     position: "bottom",
     labels: {
         fontFamily: 'Nunito, sans-serif',
         boxWidth: 10
     }
 };

// GLOBAL CHARTS OPTIONS
Chart.defaults.global.defaultFontFamily = "'Nunito', Helvetica, Arial, sans-serif";
Chart.defaults.global.maintainAspectRatio = false;
Chart.defaults.global.responsive = true;
Chart.defaults.bar.scaleShowVerticalLines = false;

 /* ------------------------------------------------------
   LINE CHARTS
 ------------------------------------------------------ */

 var hourlyData = { // Hourly dataset
     labels: ['12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00'],
     datasets: [
         {
             data: [7000, 6000, 5500, 8000, 6500, 7000, 8000, 7000, 6000, 7500, 4500],
             backgroundColor: 'rgba(255, 199, 135, 0.75)',
             lineTension: 0,
             pointBorderColor: 'rgba(255, 199, 135, 1)',
             pointRadius: 6,
             pointBorderWidth: 2,
             pointBackgroundColor: '#fff'
         }
     ]
 };


var dailyData = { // Daily dataset
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
        {
            data: [8000, 7500, 5500, 6500, 4500, 7500, 8000],
            backgroundColor: 'rgba(44,132,247, 0.75)',
            lineTension: 0,
            pointBorderColor: 'rgba(44,132,247, 1)',
            pointRadius: 6,
            pointBorderWidth: 2,
            pointBackgroundColor: '#fff'
        }
    ]
};

var weeklyData = { // Weekly dataset
  labels: ['16-22','23-29','30-5','6-12','13-19','20-26','27-3','4-10','11-17','18-24','25-31'],
  datasets: [
      {
          data: [5000, 8500, 9000, 6500, 6500, 5500, 7000, 8000, 4500, 6000, 4000],
          backgroundColor: 'rgba(114, 255, 142, 0.75)',
          lineTension: 0,
          pointBorderColor: 'rgba(114, 255, 142, 1)',
          pointRadius: 6,
          pointBorderWidth: 2,
          pointBackgroundColor: '#fff'
      }
  ]
};

var monthlyData = { // Monthly dataset
  labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov', 'Dec'],
  datasets: [
      {
          data: [9000, 7500, 8500, 8500, 8500, 7500, 7000, 6500, 6500, 8500, 9500, 5000],
          backgroundColor: 'rgba(186, 94, 94, 0.75)',
          lineTension: 0,
          pointBorderColor: 'rgba(186, 94, 94, 1)',
          pointRadius: 6,
          pointBorderWidth: 2,
          pointBackgroundColor: '#fff'
      }
  ]
};

var lineChartArea = document.getElementById("web-traffic-line-chart").getContext('2d');
var lineChart = new Chart(lineChartArea, {
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
         line_chart.config.data = hourlyData;
         line_chart.update();
     });

     $("#daily-btn").click(function(event) {
         event.preventDefault(event);
         line_chart.config.data = dailyData;
         line_chart.update();
     });

     $("#weekly-btn").click(function(event) {
         event.preventDefault(event);
         line_chart.config.data = weeklyData;
         line_chart.update();
     });

     $("#monthly-btn").click(function(event) {
         event.preventDefault(event);
         line_chart.config.data = monthlyData;
         line_chart.update();
     });

// ------------------------------------------------------
// BAR CHARTS
// ------------------------------------------------------

var barChartArea = document.getElementById("daily-traffic-bar-chart");
var barChart = new Chart(barChartArea, {
    type: 'bar',
    data: {
        labels: ["S", "M", "W", "T", "T", "F", "S"],
        datasets: [{
            label: 'AM',
            data: [15, 14, 20, 11, 16, 10, 13],
            backgroundColor: '#80c98f'
        },
        {
            label: 'PM',
            data: [11, 15, 22, 30, 12, 8, 22],
            backgroundColor: '#7376be'
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

var donutChartArea = document.getElementById("source-traffic-donut-chart");
var donutChart = new Chart(donutChartArea, {
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
                    "#2C84F7",
                    "#FFC787",
                    "#72FF8E",
                    "#BA5E5E"
                ],
                hoverBackgroundColor: [
                    "rgba(44, 132, 247, 0.8)",
                    "rgba(255, 199, 135, 0.8)",
                    "rgba(114, 255, 142, 0.8)",
                    "rgba(186, 94, 94, 0.8)"
                ]
            }]

    },
    options: {
        responsive: true,
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontFamily: 'Nunito, sans-serif',
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
        effect: "fadeIn",
        duration: 350
    },
    hide: {
        effect: "fadeOut",
        duration: 350
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
        $( "#message-form-alert" ).css('background-color', '#FFC787');
        $( "#message-form-alert" ).html('Username and message are required!')
             .fadeIn( "fast" );
   } else {
    // Show success message, fade in then fade out
        $( "#message-form-alert" ).css('background-color', '#80c98f');
        $( "#message-form-alert" ).html('Message sent!')
            .fadeIn("fast")
            .delay(1400)
            .fadeOut('slow');

        // clear the textfields
        $('#user-message').val('');
        $('#user-name-search').val('');
   }


});


// AUTOCOMPLETE USER SEARCH
var allUsers = [
      "London Woods",
      "Francine Wellington",
      "Marry Jane",
      "Peter Parker",
      "Tyrone Chambers",
      "Caesar Jackson",
      "Michael Jackson",
      "Eric Cartman",
      "Tai Lopez",
      "Regis Detlaff"
];
$( "#user-name-search" ).autocomplete({
    source: allUsers
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

// on save button click, update localstorage
$( "#btn-settings-save" ).click(function(){
    // get selected value from timezone dropdown, email and profile preference
    selected_tz = $( "select#user-timezone option:selected").val();
    email_pref = $( "#email-pref" ).prop( "checked" );
    profile_pref = $( "#profile-pref" ).prop( "checked" );

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

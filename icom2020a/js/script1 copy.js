function UpdateLoadingFlag(Percentage) {
  if (document.getElementById("loading_flag")) {
    document.getElementById("loading_flag").innerText = "Loading " + Percentage + "%";
    if (Percentage >= 100) {
      document.getElementById("loading_flag").style.display = "none";
    } else {
      document.getElementById("loading_flag").style.display = "block";
    }
  }
}


function UpdateLoadingFlag2(Percentage) {
  if (document.getElementById("playpause")) {
    document.getElementById("playpause").innerHTML = '<span style="font-size:24px">Loading ' + Percentage + '%</span>';
    if (Percentage >= 100) {
      //document.getElementById("playpause").style.display = "none";
    } else {
      //document.getElementById("playpause").style.display = "block";
    }
  }
}

var checkReadyState = setInterval(() => {
  if (document.readyState === "complete") {
    clearInterval(checkReadyState);
    console.log('Page is loaded.');
    /* Put your code logic here */


    (function ($) {
      // All your code here
      




      $(document).ready(function () {
        console.log('ready');


        $body = $("body");

        $(document).on({
            ajaxStart: function() { $body.addClass("loading");    },
             ajaxStop: function() { $body.removeClass("loading"); }    
        });


        if ($("#player1").length != 0) {

          //it doesn't exist


          // $( '.views-field-field-upload-mp3 .file-link' ).replaceWith( "play" );

          //file--mime-audio-mpeg       

          var wavesurfer = WaveSurfer.create({
            responsive: 'true',
            container: '#waveform',
            waveColor: '#00ff00',
            progressColor: '#113311',
            barMinHeight: '10',
            height: '66',
            barWidth: '2',
            normalize: 'true',
          });
          wavesurfer.on('pause', function () {
            console.log('pause');
            $('#playpause').html('play>');
          });
          wavesurfer.on('play', function () {
            console.log('play');
            $('#playpause').html('pause||');
          });
          wavesurfer.on('play', function () {
            console.log('play');
            $('#playpause').html('pause||');
          });

          //wavesurfer.load('/sites/default/files/protman-20200426-juliachild-122instacakes.mp3');
          console.log($("[class$=mp3] a").first().attr('href'));
          console.log($("[class$=mp3] a").attr('href'));
          //views-field-field-upload-mp3"


          wavesurfer.load($("[class$=mp3] a").first().attr('href'));
          $('#playinfo').html($("[class$=mp3] a").first().attr('title'));
          //.first()


          wavesurfer.on('loading', function (X, evt) {
            UpdateLoadingFlag2(X);

          });
          wavesurfer.on('ready', function () {
            $('#playpause').html('play>');
            //#waveform
            $('#waveform').css('opacity', '0');
            $('#waveform').fadeTo("slow", 1);
          });



          //$('#playpause').html('play>');
          $("[class$=mp3] a").click(function (e) {
            e.preventDefault();
            console.log($(this).attr('href'));
            wavesurfer.load($(this).attr('href'));
            $('#playinfo').html($(this).attr('title'));
            wavesurfer.on('ready', function () {
              wavesurfer.play();
            });
          });
          wavesurfer.on('seek', function () {
            wavesurfer.play();
          });
          $("#playpause").click(function (e) {
            wavesurfer.playPause();
            wavesurfer.on('pause', function () {});
          });
        }
        console.log('whereplayer?');


        // show progress while loading sound


        // clean up etc., when wavesurfer fires the "ready" event
        if ($("#player1").length != 0) {
        wavesurfer.on('ready', function () {
          console.log("ready fired");
        });
      }
      });



      $('#edit-field-upload-mp3-0-upload').attr("accept", ".mp3")


	  //$('#countdown1').countdown({ schedule: { "Wednesday": [ "17:00:00", "17:50:00" ], "Friday": [ "12:00:00" ] }, showOnZeroDays: true, });

	  //$('#countdown').countdown({ schedule: { "Wednesday": [ "17:00:00", "17:50:00" ], "Friday": [ "12:00:00" ] } });


var d = new Date();
console.log((d.getDay()));
toff = (5-(d.getDay()+7) % 7);
console.log(toff);
d.setDate(d.getDate() + toff);
d.setHours(0);
d.setMinutes(0);
d.setSeconds(0);
console.log(d);
	  

	
	  //console.log(icomtime);

	
	

			$('#countdown1').countdown({until: d, timezone: +0, compact: true});


      /* utiluty functions */

      /* wavesurfer functions */

      // create wavesurfer object
      // be sure to read about options, https://wavesurfer-js.org/docs/options.html



      /*
      img {
        filter:hue-rotate(180deg);
      }


        $(document).ready(function() {
       
              $('div').each(function() {
                  $(this).css('filter','hue-rotate('+  Math.floor(Math.random() * 360) + 'deg)');
              });
         
      });




      */


    }(jQuery));
  }
}, 100);



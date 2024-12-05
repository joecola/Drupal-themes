function UpdateLoadingFlag(e) {
  document.getElementById("loading_flag") && (document.getElementById("loading_flag").innerText = "Loading " + e + "%", document.getElementById("loading_flag").style.display = e >= 100 ? "none" : "block")
}

function UpdateLoadingFlag2(e) {
  document.getElementById("playpause") && (document.getElementById("playpause").innerHTML = '<span style="font-size:24px">Loading ' + e + "%</span>")
}

var checkReadyState = setInterval(() => {
  "complete" === document.readyState && (clearInterval(checkReadyState), console.log("Page is loaded."), function (e) {
    e(document).ready(function () {
      if (console.log("ready"), $body = e("body"), e(document).on({
          ajaxStart: function () {
            $body.addClass("loading")
          },
          ajaxStop: function () {
            $body.removeClass("loading")
          }
        }), 0 != e("#player1").length) {
        var a = WaveSurfer.create({
          responsive: "true",
          container: "#waveform",
          waveColor: "#00ff00",
          progressColor: "#113311",
          barMinHeight: "10",
          height: "66",
          barWidth: "2",
          normalize: "true"
        });
        a.on("pause", function () {
          console.log("pause"), e("#playpause").html('play&nbsp;<i class="fa fa-play">')
        }), a.on("play", function () {
          console.log("play"), e("#playpause").html('pause&nbsp;<i class="fa fa-pause"></i>')
        }), a.on("play", function () {
          console.log("play"), e("#playpause").html('pause&nbsp;<i class="fa fa-pause"></i>')
        }), console.log(e("[class$=mp3] a").first().attr("href")), console.log(e("[class$=mp3] a").attr("href")), a.load(e("[class$=mp3] a").first().attr("href")), e("#playinfo").html(e("[class$=mp3] a").first().attr("title")), a.on("loading", function (e, a) {
          UpdateLoadingFlag2(e)
        }), a.on("ready", function () {
          e("#playpause").html('play&nbsp;<i class="fa fa-play">'), e("#waveform").css("opacity", "0"), e("#waveform").fadeTo("slow", 1)
        }), e("[class$=mp3] a").click(function (o) {
          o.preventDefault(), console.log(e(this).attr("href")), a.load(e(this).attr("href")), e("#playinfo").html(e(this).attr("title")), a.on("ready", function () {
            a.play()
          })
        }), a.on("seek", function () {
          a.play()
        }), e("#playpause").click(function (e) {
          a.playPause(), a.on("pause", function () {})
        })
      }
      console.log("whereplayer?"), 0 != e("#player1").length && a.on("ready", function () {
        console.log("ready fired")
      })
    }), e("#edit-field-upload-mp3-0-upload").attr("accept", ".mp3");


    (function ($) {
      $("#loader").fadeOut("slow");
   }(jQuery));

  
 


  }(jQuery))
}, 100);

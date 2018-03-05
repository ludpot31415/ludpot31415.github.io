
function videoPlayer(strFileToStream,strTitel, strStartImage, strWidth, notstartup)
{

    browser = {};
    if (navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/NOKIA/i) )
    {
        if (!notstartup) {
            $(".video-player").each(function () {
                /*
                var id = $(this)[0].id;
                var video = $(this)[0].find(".video")
            
                video = controls.video[0];
                videoSlider = controls.videoSlider.selector;
                */
                var controlsTimeout;
                var parentid = $(this)[0].id;
                var id = $(this)[0].id + "video";
                var source = $(this).attr("data-source");
                var title = $(this).attr("data-title");
                var width = $(this).attr("data-width");
                var ratio = 480 / 768;
		
                width = 95;
                width = $("#content").width() / 100 * width;

                var height = width * ratio;
                //height = (height / 1160) * 100;
                $(this).css("width", width + 'px');
                $(this).css("height", height + 'px');

                var html = '';
                html += '<video class="videoframe" id="' + id + '" width="' + width + 'px" height="' + height + '"  controls>\n';
                html += '<source src="files/' + source + '.mp4" type="video/mp4" />\n';
                //html += '<source src="files/' + source + '.ogg"/>\n';
                html += 'Your browser does not support the video tag.\n';
                html += '</video>\n';

                $(this).html(html);

                $("#" + parentid).bind("DOMNodeRemoved", function (objEvent) {

                    var target = $(objEvent.target);

                    if (target.is("video")) {
                        $("#" + id).attr('src', '');
                        $("#control" + id).remove();

                    }
                });
            });
        } else { //popupdiv
            /*
            var id = $(this)[0].id;
            var video = $(this)[0].find(".video")
            
            video = controls.video[0];
            videoSlider = controls.videoSlider.selector
            strFileToStream,strTitel, strStartImage, startup
            */
            var controlsTimeout;
            var parentid = "popUpDivMovie";
            var id = parentid + "video";
            var source = strFileToStream;
            var title = strTitel;
            var wantedwidth = strWidth;
            //var height = width * ratio;
            var parameter = new Date().getMilliseconds();
            var ratio = 480 / 768;

            width = $("body").width() / 100 * wantedwidth;

            var height = width * ratio;


            var html = '';
            html += '<video class="videoframe" id="' + id + '" width="' + width + 'px" height="' + height + 'px" controls>\n';
            html += '<source src="files/' + source + '.mp4" type="video/mp4" />\n';
            //html += '<source src="files/' + source + '.ogg"/>\n';
            html += 'Your browser does not support the video tag.\n';
            html += '</video>\n';


            $("#" + parentid).append(html);
            $("#" + parentid).css("width", wantedwidth + "%");
            $("#" + parentid).css("height", height + "px");

            $("#" + parentid).bind("DOMNodeRemoved", function (objEvent) {

                var target = $(objEvent.target);
                if (target.is("video")) {

                    $("#" + id).attr('src', '');
                    $("#control" + id).remove();

                }
            });
        }
    } else if (navigator.userAgent.match(/ANDROID/i)) {
        if (!notstartup) {
            $(".video-player").each(function () {
                /*
                var id = $(this)[0].id;
                var video = $(this)[0].find(".video")
            
                video = controls.video[0];
                videoSlider = controls.videoSlider.selector;
                */
                var controlsTimeout;
                var parentid = $(this)[0].id;
                var id = $(this)[0].id + "video";
                var source = $(this).attr("data-source");
                var title = $(this).attr("data-title");
                var wantedwidth = $(this).attr("data-width");
                var fontSize = 1;
                var bottomSize = 1;
                var ratio = 480 / 768;
                width = $(".PAGE").width() / 100 * wantedwidth;
                var height = width * ratio;
                //height = (height / 1160) * 100;
                $(this).css("width", wantedwidth + '%');
                //$(this).css("height", height + 'px' + "19%");

                var html = '';
                html += '<video class="videoframe" id="' + id + '" width="100%" preload="auto" controls>\n';
                /*
                if (navigator.userAgent.match(/firefox/i)) {
                    html += '<source src="files/' + source + '.ogg" />\n';
                } else {
                    html += '<source src="files/' + source + '.mp4"/>\n';
                    html += '<source src="files/' + source + '.ogg" />\n';
                }
                */
                html += '<source src="files/' + source + '.mp4" type="video/mp4"/>\n';
                html += 'Your browser does not support the video tag.\n';
                html += '</video>\n'

                $(this).html(html);

                $("#" + id).css("margin-bottom", "0px");
                $("#" + parentid).bind("DOMNodeRemoved", function (objEvent) {

                    var target = $(objEvent.target);

                    if (target.is("video")) {
                        $("#" + id).attr('src', '');
                        $("#control" + id).remove();

                    }
                });
            });
        } else { //popupdiv
            /*
            var id = $(this)[0].id;
            var video = $(this)[0].find(".video")
            
            video = controls.video[0];
            videoSlider = controls.videoSlider.selector
            strFileToStream,strTitel, strStartImage, startup
            */
            var controlsTimeout;
            var parentid = "popUpDivMovie";
            var id = parentid + strFileToStream;
            var source = strFileToStream;
            var title = strTitel;
            var wantedwidth = strWidth;
            //var height = width * ratio;
            var parameter = new Date().getMilliseconds();

            var ratio = 480 / 768;
            width = $(".PAGE").width() / 100 * wantedwidth;

            var parameter = new Date().getMilliseconds();
            var height = width * ratio;
            //height = (height / 1160) * 100;
            //$(this).css("width", wantedwidth + 'px');
            //$(this).css("height", height + 'px');

            var html = '';
            html += '<video class="videoframe" id="' + id + '" width="100%"  preload="metadata" controls>\n';
            /*
            if (navigator.userAgent.match(/firefox/i)) {
                html += '<source src="files/' + source + '.ogg" />\n';
            } else {
                html += '<source src="files/' + source + '.mp4"/>\n';
                html += '<source src="files/' + source + '.ogg" />\n';
            }
            */
            html += '<source src="files/' + source + '.mp4" type="video/mp4"/>\n';
            html += 'Your browser does not support the video tag.\n';
            html += '</video>\n'



            $("#" + parentid).append(html);
            $("#" + parentid).css("width", wantedwidth + "%");
            $("#" + id).css("margin-bottom", "0px");
            $("#" + parentid).bind("DOMNodeRemoved", function (objEvent) {

                var target = $(objEvent.target);
                if (target.is("video")) {

                    $("#" + id).attr('src', '');
                    $("#control" + id).remove();

                }
            });
        }
    }





    else if (navigator.userAgent.match(/MSIE 10.0/i) || navigator.userAgent.match(/MSIE 9.0/i)) {
        if (!notstartup) {
            $(".video-player").each(function () {
                /*
                var id = $(this)[0].id;
                var video = $(this)[0].find(".video")
            
                video = controls.video[0];
                videoSlider = controls.videoSlider.selector;
                */
                var controlsTimeout;
                var parentid = $(this)[0].id;
                var id = $(this)[0].id + "video";
                var source = $(this).attr("data-source");
                var title = $(this).attr("data-title");
                var wantedwidth = $(this).attr("data-width");
                var ratio = 480 / 768;

                if ($(window).height() <= 800) width = 629.2;
                else width = 925.84;

                var height = width * ratio;
                //height = (height / 1160) * 100;
                $(this).css("width", width + 'px');
                $(this).css("height", height + 'px' + "100px");


                var html = '';
                html += '<video class="videoframe" id="' + id + '" width="' + width + 'px" height="' + height + '" >\n'
                html += '<source src="files/' + source + '.mp4" type="video/mp4" />\n'
                html += '<source src="files/' + source + '.webm" type="video/webm"/>\n'
                html += 'Your browser does not support the video tag.\n';
                html += '</video>\n'
                html += '<div class="controls" id="control' + id + '">\n'
                html += '<span id="playpause' + id + '" class="paused" ></span>\n';
                html += '<div class="title" id="title' + id + '">' + title + '</div>\n';
                html += '<span class="progressdiv" id="progressdiv' + id + '">\n';
                html += '<progress class="progressBar" id="progress-bar' + id + '" min="0" max="100" value="0"></progress>\n';
                html += '<div class="spanprogress" id="spanprogress' + id + '"></div>';
                html += '<div class="videoduration" id="videoduration' + id + '">00:00</div>\n';
                html += '<div class="videototal" id="videototal' + id + '">14:00</div>\n';
                html += '</span>\n';
                html += '<div class="volume" id="volume' + id + '">\n';
                html += '<div class="sound" id="sound' + id + '" title="Mute/Unmute sound"></div>\n';
                //html += '<div class="soundbutton" id="soundbutton' + id + '"></div>';
                html += '<span class="volumeCover" id="volumeCover' + id + '" title="Set volume"></span>\n';
                html += '<span class="volumeBar" id="volumeBar' + id + '"></span>\n';
                html += '</div>\n';
                html += '<div class="progressbutton" id="progressbutton' + id + '"></div>';
                html += '</div>\n';


                html += '</div>\n';

                $(this).html(html);
                var controls = {
                    video: $("#" + id),
                    playpause: $("#playpause" + id)
                };

                var video = controls.video[0];
                var fullscreen = false;
                var thisID = $(this)[0].id;
                fontSize = wantedwidth / 100;
                /*bottomSize = wantedwidth / 120;*/
				$("#control" + id).css("font-size", "16px");
                $("#videoduration" + id).css("font-size", fontSize + "em");


                $("#videototal" + id).css("font-size", fontSize + "em");

                $("#videoduration" + id).css("bottom", "-0.2em");
                $("#videototal" + id).css("bottom", "-0.2em");
                if (wantedwidth <= 60) {
                    $("#videoduration" + id).css("bottom", "-0.1em");
                    $("#videototal" + id).css("bottom", "-0.1em");
                }
                $("#title" + id).css("font-size", fontSize + "em");
                $("#progressdiv" + id).css("top", "20%");
                $("#progressdiv" + id).css("height", "0.5em");


                $("#volume" + id).css("height", "0.5em");

                // Event listener for the full-screen button
                $("#progressbutton" + id).on('click', function () {

                    if (fullscreen == false) {
                        enableIEfullscreen();
                        fullscreen = true;
                        controlsTimeout = setTimeout(function () {
                            $("#control" + id).fadeOut('slow');
                        }, 2000); // <-- time in milliseconds

                    } else {
                        disableIEfullscreen();
                        fullscreen = false;
                        $("#control" + id).fadeIn('fast');
                        clearTimeout(controlsTimeout);
                    }

                });

                $("#" + parentid).mousemove(function (event) {
                    //console.log("Moved");
                    if (fullscreen) {
                        if ($("#control" + id).css('display') == 'none') {
                            $("#control" + id).fadeIn('slow');
                        } else {
                            clearTimeout(controlsTimeout);
                            controlsTimeout = setTimeout(function () {
                                $("#control" + id).fadeOut('slow');
                            }, 2000); // <-- time in milliseconds

                        }
                    }
                });


                controls.playpause.click(function () {
                    if (video.paused) {

                        video.play();
                        //$(this).text("Pause");
                        $(this).switchClass("paused", "play");
                    } else {

                        video.pause();
                        // $(this).text("Play");
                        $(this).switchClass("play", "paused");
                    }
                    // $(this).toggleClass("paused");
                });

                video.addEventListener("ended", function () {
                    video.pause();
                    //controls.playpause.text("Play");
                    controls.playpause.switchClass("play", "paused");
                });

                video.addEventListener('timeupdate', updateProgressBar, false);


                function disableIEfullscreen() {


                    var control = $("#control" + id);
                    control.css("position", "absolute");
                    control.css("bottom", "0");
                    control.css("margin-top", "-100px");
                    control.css("padding", "0");
                    control.css("height", "100px");

                    var videodiv = $("#" + parentid);
                    videodiv.css("overflow", "hidden");
                    videodiv.css("border-radius", "10px");
                    videodiv.css("position", "relative");
                    videodiv.css("top", "0");
                    videodiv.css("left", "0");

                    videodiv.css("z-index", "1");
                    videodiv.css("width", $("#" + id).attr('width') + "px");
                    //console.log("Width wanted = " + wantedwidth);
                    videodiv.css("height", $("#" + id).attr('height') + "px" + "100px");

                    var videoframe = $("#" + id);
                    videoframe.css("position", "relative");
                    videoframe.css("margin-bottom", "100px");
                    videoframe.css("width", videoframe.attr('width') + 'px');
                    //console.log("Width video = " + width);
                    videoframe.css("height", videoframe.attr('height') + 'px');
                    //console.log("Height video = " + width);
                }

                function enableIEfullscreen() {
                    var control = $("#control" + id);
                    control.css("position", "fixed");
                    control.css("bottom", "0");
                    control.css("left", "0");
                    control.css("margin", "0");
                    control.css("padding", "0");

                    var videodiv = $("#" + parentid);
                    videodiv.css("overflow", "visible");
                    videodiv.css("border-radius", "0px");
                    videodiv.css("position", "fixed");
                    videodiv.css("height", "100%");
                    videodiv.css("width", "100%");
                    videodiv.css("top", "0");
                    videodiv.css("left", "0");
                    videodiv.css("bottom", "0");
                    videodiv.css("right", "0");
                    videodiv.css("z-index", "1000");

                    var videodiv = $("#" + id);
                    videodiv.css("width", $("body").width() + "px");
                    videodiv.css("height", $("body").height() + "px");

                }
                //PROGRESSBAR
                function updateProgressBar() {
                    var progressBar = document.getElementById('progress-bar' + id);
                    var percentage = Math.floor((100 / video.duration) * video.currentTime);
                    /*
                    var currentPos = video[0].currentTime; //Get currenttime
                    var maxduration = video[0].duration; //Get video duration
                    */
                    if (video.readyState === 4) {
                        $('#videototal' + id).text(TimeFormat(video.duration));
                    } else {
                        if (video.duration == video.currentTime) $('#videototal' + id).text(TimeFormat(video.duration));
                        else $('#videototal' + id).text("Loader");
                    }
                    $('#videoduration' + id).text(TimeFormat(video.currentTime));
                    // progressBar.value = percentage;

                    progressBar.value = 0;
                    //progressBar.innerHTML = percentage + '% played';
                    $('#spanprogress' + id).css("width", percentage + '%');
                    // $('#progressbutton' + id).css("left", percentage + "%");
                }

                var TimeFormat = function (seconds) {
                    var m = Math.floor(seconds / 60) < 10 ? '0' + Math.floor(seconds / 60) : Math.floor(seconds / 60);
                    var s = Math.floor(seconds - (m * 60)) < 10 ? '0' + Math.floor(seconds - (m * 60)) : Math.floor(seconds - (m * 60));
                    return m + ':' + s;
                };


                var timeDrag = false;   /* Drag status */
                var soundtimeDrag = false;
                $('#progress-bar' + id).mousedown(function (e) {
                    timeDrag = true;
                    updatebar(e.pageX);

                });


                $('#spanprogress' + id).mousedown(function (e) {
                    timeDrag = true;
                    updatebar(e.pageX);
                });

                
                var clickHandler = "click";

                if ('ontouchstart' in document.documentElement) {
                    clickHandler = "touchstart";
                }

                $(document).mouseup(function (e) {
                    if (timeDrag) {
                        timeDrag = false;
                        updatebar(e.pageX);
                    }
                    else if (soundtimeDrag) {
                        soundtimeDrag = false;
                        updateVolume(e.pageX);
                    }
                });

                $(document).mousemove(function (e) {
                    if (timeDrag) {
                        updatebar(e.pageX);
                    } else if (soundtimeDrag) {
                        soundtimeDrag = false;
                        updateVolume(e.pageX);
                    }
                });



                //update Progress Bar control
                var updatebar = function (x) {
                    var progress = $('#progress-bar' + id);
                    var maxduration = video.duration; //Video duraiton
                    var position = x - progress.offset().left; //Click pos
                    var percentage = 100 * position / progress.width();

                    //Check within range
                    if (percentage > 100) {
                        percentage = 100;
                    }
                    if (percentage < 0) {
                        percentage = 0;
                    }
                    //

                    video.currentTime = Math.round(maxduration * percentage / 100);
                    //console.log("tid = " + video.currentTime);
                    percentage = percentage - 1;
                    // $('#progressbutton' + id).css("left", percentage + "%");
                };

                //sound button clicked
                $('#sound' + id).click(function () {
                    video.muted = !video.muted;
                    $(this).toggleClass('muted');
                    $('#volumeBar' + id).toggleClass('volumeoff');
                });

                $('#volumeCover' + id).mousedown(function (e) {

                    soundtimeDrag = true;
                    updateVolume(e.pageX);
                });


                var updateVolume = function (x, vol) {
                    var volume = $('#volume' + id);
                    var percentage;
                    //if only volume have specificed
                    //then direct update volume
                    if (vol) {
                        percentage = vol * 100;
                    }
                    else {
                        var position = x - volume.offset().left;
                        percentage = 100 * position / volume.width();
                    }

                    //ceil to 25 mutiplier
                    percentage = Math.ceil(percentage);
                    $('#volumeBar' + id).css('width', percentage + '%');


                    //Check within range
                    if (percentage > 100) {
                        percentage = 100;
                    }
                    if (percentage < 0) {
                        percentage = 0;
                    }
                    //console.log("tid f�r = " + video.volume + " procent= " + percentage / 100);
                    video.volume = percentage / 100;
                    percentage = percentage - 1;

                };
                //updateVolume(0, 0.75);

                $("#" + parentid).bind("DOMNodeRemoved", function (objEvent) {

                    var target = $(objEvent.target);

                    if (target.is("video")) {
                        $("#" + id).attr('src', '');
                        $("#control" + id).remove();

                    }
                });
            });
        } else { //popupdiv
            /*
            var id = $(this)[0].id;
            var video = $(this)[0].find(".video")
            
            video = controls.video[0];
            videoSlider = controls.videoSlider.selector
            strFileToStream,strTitel, strStartImage, startup
            */
            var controlsTimeout;
            var parentid = "popUpDivMovie";
            var id = parentid + "video";
            var source = strFileToStream;
            var title = strTitel;
            var wantedwidth = strWidth;
            //var height = width * ratio;
            var parameter = new Date().getMilliseconds();

            var ratio = 480 / 768;


            width = ($("#content").width() / 100) * wantedwidth;
            width = width - 30;

            var height = width * ratio;
            //height = (height / 1160) * 100;
            $("#" + parentid).css("width", width + 'px');
            $("#" + parentid).css("height", height + 'px' + "100px");

            //height = (height / 1160) * 100;
            //$(this).css("width", wantedwidth + 'px');
            //$(this).css("height", height + 'px');

            var html = '';
            html += '<video class="videoframe" id="' + id + '" width="' + width + 'px" height="' + height + '">\n';
            html += '<source src="files/' + source + '.mp4"  type="video/mp4"/>\n';
            //html += '<source src="files/' + source + '.ogg"/>\n';
            html += 'Your browser does not support the video tag.\n';
            html += '</video>\n';
            html += '<div class="controls" id="control' + id + '">\n';
            html += '<span id="playpause' + id + '" class="paused" ></span>\n';
            html += '<div class="title" id="title' + id + '">' + title + '</div>\n';
            html += '<span class="progressdiv" id="progressdiv' + id + '">\n';
            html += '<progress class="progressBar" id="progress-bar' + id + '" min="0" max="100" value="0"></progress>\n';
            html += '<div class="spanprogress" id="spanprogress' + id + '"></div>';
            html += '<div class="videoduration" id="videoduration' + id + '">00:00</div>\n';
            html += '<div class="videototal" id="videototal' + id + '"></div>\n';
            html += '</span>\n';
            html += '<div class="volume" id="volume' + id + '">\n';
            html += '<div class="sound" id="sound' + id + '" title="Mute/Unmute sound"></div>\n';
            //html += '<div class="soundbutton" id="soundbutton' + id + '"></div>';
            html += '<span class="volumeCover" id="volumeCover' + id + '" title="Set volume"></span>\n';
            html += '<span class="volumeBar" id="volumeBar' + id + '"></span>\n';
            html += '</div>\n';
            html += '<div class="progressbutton" id="progressbutton' + id + '"></div>';
            html += '</div>\n';
            html += '</div>\n';


            $("#" + parentid).append(html);
            //$("#" + parentid).css("width", wantedwidth + "%");
            var controls = {
                video: $("#" + id),
                playpause: $("#playpause" + id)
            };
            $("#" + id).css("border-radius", "0px");
            $("#control" + id).css("border-radius", "0px");
			
				$("#control" + id).css("font-size", "30px");
            var video = controls.video[0];
            var fullscreen = false;
            var thisID = $(this)[0].id;
            var fontSize = wantedwidth / 100;
            /*bottomSize = wantedwidth / 120;*/
            video.onloadedmetadata = function () {
                var currentHeight = ($("#" + parentid).height() + ($(window).height() / 100) * 8) + 40;
                if (currentHeight >= $(window).height()) {

                    width = $(".PAGE").width() / 100 * 40;
                    var height = width * ratio;
                    //height = (height / 1160) * 100;
                    $("#" + parentid).css("width", width + 'px');
                    $("#" + parentid).css("height", height + 'px' + "100px");

                    $("#" + id).attr("width", width + "px");
                    $("#" + id).attr("height", height + "px");
                }
            };
            if ($("#" + id).width() >= 700) {
                $("#videoduration" + id).css("font-size", fontSize + "em");
                $("#videototal" + id).css("font-size", fontSize + "em");

                $("#videoduration" + id).css("bottom", "-" + fontSize / 2 + "em");
                $("#videototal" + id).css("bottom", "-" + fontSize / 2 + "em");

                $("#title" + id).css("font-size", fontSize + "em");
                $("#title" + id).css("top", "8%");
            }
            else {
                fontSize = fontSize - (fontSize / 8);
                $("#videoduration" + id).css("font-size", fontSize + "em");
                $("#videototal" + id).css("font-size", fontSize + "em");

                $("#videoduration" + id).css("bottom", "-" + fontSize / 2 + "em");
                $("#videototal" + id).css("bottom", "-" + fontSize / 2 + "em");

                $("#title" + id).css("font-size", fontSize + "em");
                $("#title" + id).css("top", "8%");
            }
            $("#videoduration" + id).css("left", "-14%");
            $("#videototal" + id).css("right", "-14%");

            $("#playpause" + id).css("top", "48%");
            $("#progressdiv" + id).css("top", "20%");
            // Event listener for the full-screen button
            $("#progressbutton" + id).on('click', function () {

                if (fullscreen == false) {
                    enableIEfullscreenPopup();
                    fullscreen = true;
                    controlsTimeout = setTimeout(function () {
                        $("#control" + id).fadeOut('slow');
                    }, 2000); // <-- time in milliseconds

                } else {
                    disableIEfullscreenPopup();
                    fullscreen = false;
                    $("#control" + id).fadeIn('fast');
                    clearTimeout(controlsTimeout);
                }


                return false;
            });

            $("#" + parentid).mousemove(function (event) {
                //console.log("Moved");
                if (fullscreen) {
                    if ($("#control" + id).css('display') == 'none') {
                        $("#control" + id).fadeIn('slow');
                    } else {
                        clearTimeout(controlsTimeout);
                        controlsTimeout = setTimeout(function () {
                            $("#control" + id).fadeOut('slow');
                        }, 2000); // <-- time in milliseconds
                    }
                }
            });


            controls.playpause.click(function () {
                if (video.paused) {

                    video.play();
                    //$(this).text("Pause");
                    $(this).switchClass("paused", "play");
                } else {

                    video.pause();
                    // $(this).text("Play");
                    $(this).switchClass("play", "paused");
                }
                // $(this).toggleClass("paused");
            });

            video.addEventListener("ended", function () {
                video.pause();
                //controls.playpause.text("Play");
                controls.playpause.switchClass("play", "paused");
            });

            video.addEventListener('timeupdate', updateProgressBarPopup, false);


            function disableIEfullscreenPopup() {

                var newheight;
                newheight = $("#" + id).attr('height');
                newheight = parseInt(newheight);
                newheight += 100;

                var control = $("#control" + id);
                control.css("position", "absolute");
                control.css("bottom", "0");
                control.css("margin-top", "-100px");
                control.css("padding", "0");
                control.css("height", "100px");

                var videodiv = $("#" + parentid);
                //videodiv.css("border-radius", "10px");
                videodiv.css("top", "8%");
                videodiv.css("left", "0");
                videodiv.css("width", $("#" + id).attr('width') + "px");
                videodiv.css("height", newheight);
                videodiv.css("border", "20px solid #262626");

                //console.log("attr. = " + $("#" + id).attr('height'));
                var videoframe = $("#" + id);
                videoframe.css("position", "relative");
                videoframe.css("margin-bottom", "100px");
                videoframe.css("width", videoframe.attr('width') + 'px');
                videoframe.css("height", videoframe.attr('height') + "px");

                //console.log("attr. after = " + videoframe.attr('height'));
                /*
                //var videosize = $("#" + id);
                //videosize.attr("width", "100%");
    
                var paused = $(".paused");
                paused.css("width", "30px");
    
                var play = $(".play");
                play.css("width", "30px");
    
                var sound = $(".sound");
                sound.css("width", "10%");
                sound.css("margin-top", "-2%");
                sound.css("margin-left", "-17%");
    
    
                var sound = $(".videoduration");
                sound.css("top", "26%");
                sound.css("left", "5%");
                sound.css("font-size", "80%");
    
                var sound = $(".videototal");
                sound.css("top", "26%");
                sound.css("right", "5%");
                sound.css("font-size", "80%");
                */
            }

            function enableIEfullscreenPopup() {
                var control = $("#control" + id);
                control.css("position", "fixed");
                control.css("bottom", "0");
                control.css("left", "0");
                control.css("margin", "0");
                control.css("padding", "0");

                var videodiv = $("#" + parentid);
                videodiv.css("overflow", "visible");
                videodiv.css("border-radius", "0px");
                videodiv.css("height", "100%");
                videodiv.css("width", "100%");
                videodiv.css("top", "0");
                videodiv.css("left", "0");
                videodiv.css("bottom", "0");
                videodiv.css("right", "0");
                videodiv.css("border", "0");

                var videodiv = $("#" + id);
                videodiv.css("width", $("body").width() + "px");
                videodiv.css("height", $("body").height() + "px");

            }
            //PROGRESSBAR
            function updateProgressBarPopup() {
                var progressBar = document.getElementById('progress-bar' + id);
                var percentage = Math.floor((100 / video.duration) * video.currentTime);
                /*
                var currentPos = video[0].currentTime; //Get currenttime
                var maxduration = video[0].duration; //Get video duration
                */
                if (video.readyState === 4) {
                    $('#videototal' + id).text(TimeFormat(video.duration));
                } else {
                    if (video.duration == video.currentTime) $('#videototal' + id).text(TimeFormat(video.duration));
                    else $('#videototal' + id).text("Loader");
                }
                $('#videoduration' + id).text(TimeFormat(video.currentTime));
                // progressBar.value = percentage;

                //progressBar.value = 0;
                //progressBar.innerHTML = percentage + '% played';
                $('#spanprogress' + id).css("width", percentage + '%');
                // $('#progressbutton' + id).css("left", percentage + "%");
            }

            var TimeFormat = function (seconds) {
                var m = Math.floor(seconds / 60) < 10 ? '0' + Math.floor(seconds / 60) : Math.floor(seconds / 60);
                var s = Math.floor(seconds - (m * 60)) < 10 ? '0' + Math.floor(seconds - (m * 60)) : Math.floor(seconds - (m * 60));
                return m + ':' + s;
            };


            var timeDrag = false;   /* Drag status */
            var soundtimeDrag = false;
            $('#progress-bar' + id).mousedown(function (e) {
                timeDrag = true;
                updatebarPopup(e.pageX);

            });


            $('#spanprogress' + id).mousedown(function (e) {
                timeDrag = true;
                updatebarPopup(e.pageX);
            });

            var clickHandler = "click";

            if ('ontouchstart' in document.documentElement) {
                clickHandler = "touchstart";
            }

            $(document).mouseup(function (e) {
                if (timeDrag) {
                    timeDrag = false;
                    updatebarPopup(e.pageX);
                }
                else if (soundtimeDrag) {
                    soundtimeDrag = false;
                    updateVolumePopup(e.pageX);
                }
            });

            $(document).mousemove(function (e) {
                if (timeDrag) {
                    updatebarPopup(e.pageX);
                } else if (soundtimeDrag) {
                    soundtimeDrag = false;
                    updateVolumePopup(e.pageX);
                }
            });



            //update Progress Bar control
            var updatebarPopup = function (x) {
                var progress = $('#progress-bar' + id);
                var maxduration = video.duration; //Video duraiton
                var position = x - progress.offset().left; //Click pos
                var percentage = 100 * position / progress.width();

                //Check within range
                if (percentage > 100) {
                    percentage = 100;
                }
                if (percentage < 0) {
                    percentage = 0;
                }
                //

                video.currentTime = Math.round(maxduration * percentage / 100);
                //console.log("tid = " + video.currentTime);
                percentage = percentage - 1;
                // $('#progressbutton' + id).css("left", percentage + "%");
            };

            //sound button clicked
            $('#sound' + id).click(function () {
                video.muted = !video.muted;
                $(this).toggleClass('muted');
                $('#volumeBar' + id).toggleClass('volumeoff');
            });

            $('#volumeCover' + id).mousedown(function (e) {

                soundtimeDrag = true;
                updateVolumePopup(e.pageX);
            });


            var updateVolumePopup = function (x, vol) {
                var volume = $('#volume' + id);
                var percentage;
                //if only volume have specificed
                //then direct update volume
                if (vol) {
                    percentage = vol * 100;
                }
                else {
                    var position = x - volume.offset().left;
                    percentage = 100 * position / volume.width();
                }

                //ceil to 25 mutiplier
                percentage = Math.ceil(percentage);
                $('#volumeBar' + id).css('width', percentage + '%');


                //Check within range
                if (percentage > 100) {
                    percentage = 100;
                }
                if (percentage < 0) {
                    percentage = 0;
                }
                //console.log("tid f�r = " + video.volume + " procent= " + percentage / 100);
                video.volume = percentage / 100;
                percentage = percentage - 1;

            };
            $("#" + parentid).bind("DOMNodeRemoved", function (objEvent) {

                var target = $(objEvent.target);
                if (target.is("video")) {

                    $("#" + id).attr('src', '');
                    $("#control" + id).remove();

                }
            });
        }
    } else {
        if (!notstartup) {
            $(".video-player").each(function () {
                /*
                var id = $(this)[0].id;
                var video = $(this)[0].find(".video")
        
                video = controls.video[0];
                videoSlider = controls.videoSlider.selector;
                */
                var controlsTimeout;
                var parentid = $(this)[0].id;
                var id = $(this)[0].id + "video";
                var source = $(this).attr("data-source");
                var title = $(this).attr("data-title");
                var wantedwidth = $(this).attr("data-width");
                var fontSize = 1;
                var bottomSize = 1;
                var ratio = 480 / 768;
                width = $(".PAGE").width() / 100 * wantedwidth;
                var height = width * ratio;
                //height = (height / 1160) * 100;
                $(this).css("width", wantedwidth + '%');
                //$(this).css("height", height + 'px' + "19%");

                var html = '';
                html += '<video class="videoframe" id="' + id + '" width="100%" preload="auto">\n';
                /*
                if (navigator.userAgent.match(/chrome/i) && location.href.indexOf("file") == -1) {
                    var parameter = new Date().getMilliseconds();
                    html += '<source src="files/' + source + '.mp4?t=' + parameter + '" />\n'
                    html += '<source src="files/' + source + '.ogg?t=' + parameter + '"/>\n'
                } else if (navigator.userAgent.match(/firefox/i)) {
                    html += '<source src="files/' + source + '.ogg"/>\n'
                }
                else {
                    html += '<source src="files/' + source + '.mp4" />\n'
                    html += '<source src="files/' + source + '.ogg"/>\n'
                }
                */
                if (navigator.userAgent.match(/chrome/i) && location.href.indexOf("file") == -1) {
                    var parameter = new Date().getMilliseconds();
                    html += '<source src="files/' + source + '.mp4?t=' + parameter + '" type="video/mp4" />\n';
                } 
                else {
                    html += '<source src="files/' + source + '.mp4" type="video/mp4" />\n';
                }
                html += 'Your browser does not support the video tag.\n';
                html += '</video>\n'
                html += '<div class="controls" id="control' + id + '">\n'
                html += '<span id="playpause' + id + '" class="paused" ></span>\n';
                html += '<div class="title" id="title' + id + '">' + title + '</div>\n';
                html += '<span class="progressdiv" id="progressdiv' + id + '">\n';
                html += '<div class="videoduration" id="videoduration' + id + '">00:00</div>\n';
                html += '<div class="videototal" id="videototal' + id + '"></div>\n';
                html += '<progress class="progressBar" id="progress-bar' + id + '" min="0" max="100" value="0"></progress>\n';
                html += '<div class="spanprogress" id="spanprogress' + id + '"></div>';
                html += '</span>\n';
                html += '<span class="volume" id="volume' + id + '">\n';
                html += '<div class="sound" id="sound' + id + '" title="Mute/Unmute sound"></div>\n';
                //html += '<div class="soundbutton" id="soundbutton' + id + '"></div>';
                html += '<span class="volumeCover" id="volumeCover' + id + '" title="Set volume"></span>\n';
                html += '<span class="volumeBar" id="volumeBar' + id + '"></span>\n';
                html += '</span>\n';
                html += '<div class="progressbutton" id="progressbutton' + id + '"></div>';
                html += '</div>\n';


                html += '</div>\n';

                $(this).html(html);

                var controls = {
                    video: $("#" + id),
                    playpause: $("#playpause" + id)
                };

                var video = controls.video[0];
                var fullscreen = false;
                var thisID = $(this)[0].id;

                fontSize = wantedwidth / 100;
                /*bottomSize = wantedwidth / 120;*/
				
				$("#control" + id).css("font-size", "16px");
                $("#videoduration" + id).css("font-size", fontSize + "em");
            

                $("#videototal" + id).css("font-size", fontSize + "em");

                $("#videoduration" + id).css("bottom", "-0.2em");
                $("#videototal" + id).css("bottom", "-0.2em");
                if (wantedwidth <= 60) {
                    $("#videoduration" + id).css("bottom", "-0.3em");
                    $("#videototal" + id).css("bottom", "-0.3em");
                }
                $("#title" + id).css("font-size", fontSize + "em");
                $("#progressdiv" + id).css("top", "20%");
                $("#progressdiv" + id).css("height", "0.5em");
     

                $("#volume" + id).css("height", "0.5em");


                var changeHandler = function () {
                    //NB the following line requrires the libary from John Dyer                         

                    if (!fullscreen) {
                        enablefullscreen();
                        fullscreen = true;
                        controlsTimeout = setTimeout(function () {
                            $("#control" + id).fadeOut('slow');
                        }, 2000); // <-- time in milliseconds
                    }
                    else {
                        disablefullscreen();
                        fullscreen = false;
                        $("#control" + id).fadeIn('fast');
                        clearTimeout(controlsTimeout);
                    }
                }


                // Event listener for the full-screen button
                $("#progressbutton" + id).on('click', function () {


                        var divObj = document.getElementById(thisID); //  get the target element



                        if (divObj.requestFullscreen) {
                            document.addEventListener("fullscreenchange", changeHandler, false);
                            if (document.fullScreenElement) {
                                document.cancelFullScreen();
                                //disablefullscreen();
                            } else {

                                divObj.requestFullscreen();
                                //enablefullscreen();
                            }
                        } else if (divObj.msRequestFullscreen) {
                            document.addEventListener("MSFullscreenChange", changeHandler, false);
                            if (document.msFullscreenElement) {
                                document.msExitFullscreen();

                                //disablefullscreen();
                            } else {

                                divObj.msRequestFullscreen();

                                //enablefullscreen();

                            }
                        }
                        else if (divObj.mozRequestFullScreen) {


                            document.addEventListener("mozfullscreenchange", changeHandler, false);
                            if (document.mozFullScreenElement) {
                                document.mozCancelFullScreen();

                                //disablefullscreen();
                            } else {

                                divObj.mozRequestFullScreen();

                                //enablefullscreen();
                            }
                        } else if (divObj.webkitRequestFullscreen) {
                            document.addEventListener("webkitfullscreenchange", changeHandler, false);
                            if (document.webkitFullscreenElement) {
                                document.webkitCancelFullScreen();

                                //disablefullscreen();
                            } else {
                                divObj.webkitRequestFullscreen();

                                //enablefullscreen();
                            }
                        }
            

                    return false;
                });

                //if (fullscreen) {
                $("#" + parentid).mousemove(function (event) {
                    //console.log("Moved");
                    if (fullscreen) {
                        if ($("#control" + id).css('display') == 'none') {
                            $("#control" + id).fadeIn('slow');
                        } else {
                            clearTimeout(controlsTimeout);
                            controlsTimeout = setTimeout(function () {
                                $("#control" + id).fadeOut('slow');
                            }, 2000); // <-- time in milliseconds
                       
                        }
                    }
                });

                controls.playpause.click(function () {
                    if (video.paused) {

                        video.play();
                        //$(this).text("Pause");
                        $(this).switchClass("paused", "play");
                    } else {

                        video.pause();
                        // $(this).text("Play");
                        $(this).switchClass("play", "paused");
                    }
                    // $(this).toggleClass("paused");
                });

                video.addEventListener("ended", function () {
                    video.pause();
                    //controls.playpause.text("Play");
                    controls.playpause.switchClass("play", "paused");
                });

                video.addEventListener('timeupdate', updateProgressBar, false);

                function disablefullscreen() {
                    var control = $("#control" + id);
                    control.css("position", "absolute");
                    control.css("bottom", "0");
                    control.css("margin-top", "-100px");
                    control.css("padding", "0");
                    control.css("height", "100px");

                    var videodiv = $("#" + parentid);
                    //videodiv.css("overflow", "hidden");
                    videodiv.css("border-radius", "10px");
                    videodiv.css("width", wantedwidth + "%");


                    var videoframe = $("#" + id);
                    videoframe.css("position", "relative");
                    videoframe.css("margin-bottom", "100px");

                    var videosize = $("#" + id);
                    videosize.attr("width", "100%");

                    //var paused = $(".paused");
                    //paused.css("width", "5%");

                    //var play = $(".play");
                    //play.css("width", "5%");

                    var sound = $("#sound" + id);
                    sound.css("width", "10%");
                    sound.css("margin-top", "-2%");
                    sound.css("margin-left", "-17%");



                    var sound = $("#videoduration" + id);
                    sound.css("left", "-11%");
                    sound.css("font-size", fontSize + "em");

                    var sound = $("#videototal" + id);
                    sound.css("right", "-11%");
                    sound.css("font-size", fontSize + "em");

                    if (wantedwidth <= 60) {
                        $("#videoduration" + id).css("bottom", "-0.5em");
                        $("#videototal" + id).css("bottom", "-0.5em");
                    }
                }

                function enablefullscreen() {
                    var control = $("#control" + id);
                    control.css("position", "fixed");
                    control.css("bottom", "0");
                    control.css("left", "0");
                    control.css("margin", "0");
                    control.css("padding", "0");
                    control.css("margin-top", "0");
                    control.css("height", "100px");

                    var videodiv = $("#" + parentid);
                    videodiv.css("overflow", "visible");
                    videodiv.css("border-radius", "0px");
                    videodiv.css("width", "100%");
                

                    var videoframe = $("#" + id);
                    videoframe.css("position", "fixed");
                    videoframe.css("margin-bottom", "0%");
                    videoframe.css("height", "100%");

                    var videosize = $("#" + id);
                    videosize.attr("width", "100%");

                    //var paused = $(".paused");
                    //paused.css("width", "2%");

                    //var play = $(".play");
                    //play.css("width", "2%");

                    var sound = $("#sound" + id);
                    sound.css("width", "4%");
                    sound.css("margin-top", "-0.3%");
                    sound.css("margin-left", "-5%");

                    if ($(window).width() < 800) {

                        var sound = $("#videoduration" + id);

                        sound.css("left", "-16%");
                        sound.css("font-size", "1em");

                        var sound = $("#videototal" + id);
                        sound.css("right", "-16%");

                    } else {
                        var sound = $("#videoduration" + id);

                        sound.css("left", "-5%");
                        sound.css("font-size", "1em");

                        var sound = $("#videototal" + id);
                        sound.css("right", "-5%");
                    }
                }

                //PROGRESSBAR
                function updateProgressBar() {
                    var progressBar = document.getElementById('progress-bar' + id);
                    var percentage = Math.floor((100 / video.duration) * video.currentTime);
                    /*
                    var currentPos = video[0].currentTime; //Get currenttime
                    var maxduration = video[0].duration; //Get video duration
                    */
                    if (video.readyState === 4) {
                        $('#videototal' + id).text(TimeFormat(video.duration));
                    } else {
                        if (video.duration == video.currentTime) $('#videototal' + id).text(TimeFormat(video.duration));
                        else $('#videototal' + id).text("Loader");
                    }
                    $('#videoduration' + id).text(TimeFormat(video.currentTime));
                    // progressBar.value = percentage;

                    progressBar.value = 0;
                    //progressBar.innerHTML = percentage + '% played';
                    $('#spanprogress' + id).css("width", percentage + '%');
                    // $('#progressbutton' + id).css("left", percentage + "%");
                }

                var TimeFormat = function (seconds) {
                    var m = Math.floor(seconds / 60) < 10 ? '0' + Math.floor(seconds / 60) : Math.floor(seconds / 60);
                    var s = Math.floor(seconds - (m * 60)) < 10 ? '0' + Math.floor(seconds - (m * 60)) : Math.floor(seconds - (m * 60));
                    return m + ':' + s;
                };


                var timeDrag = false;   /* Drag status */
                var soundtimeDrag = false;
                $('#progress-bar' + id).mousedown(function (e) {
                    timeDrag = true;
                    updatebar(e.pageX);

                });


                $('#spanprogress' + id).mousedown(function (e) {
                    timeDrag = true;
                    updatebar(e.pageX);
                });

                var clickHandler = "click";

                if ('ontouchstart' in document.documentElement) {
                    clickHandler = "touchstart";
                }
                
                $(document).mouseup(function (e) {
                    if (timeDrag) {
                        timeDrag = false;
                        updatebar(e.pageX);
                    }
                    else if (soundtimeDrag) {
                        soundtimeDrag = false;
                        updateVolume(e.pageX);
                    }
                });

                $(document).mousemove(function (e) {
                    if (timeDrag) {
                        updatebar(e.pageX);
                    } else if (soundtimeDrag) {
                        soundtimeDrag = false;
                        updateVolume(e.pageX);
                    }
                });



                //update Progress Bar control
                var updatebar = function (x) {
                    var progress = $('#progress-bar' + id);
                    var maxduration = video.duration; //Video duraiton
                    var position = x - progress.offset().left; //Click pos
                    var percentage = 100 * position / progress.width();

                    //Check within range
                    if (percentage > 100) {
                        percentage = 100;
                    }
                    if (percentage < 0) {
                        percentage = 0;
                    }
                    //

                    video.currentTime = Math.round(maxduration * percentage / 100);
                    //console.log("tid = " + video.currentTime);
                    percentage = percentage - 1;
                    // $('#progressbutton' + id).css("left", percentage + "%");
                };

                //sound button clicked
                $('#sound' + id).click(function () {
                    video.muted = !video.muted;
                    $(this).toggleClass('muted');
                    $('#volumeBar' + id).toggleClass('volumeoff');
                });
                //VOLUME BAR
                //volume bar event
                /*
                $('#soundbutton' + id).mousedown(function (e) {

                    soundtimeDrag = true;
                    updateVolume(e.pageX);
                });
                */
                $('#volumeCover' + id).mousedown(function (e) {

                    soundtimeDrag = true;
                    updateVolume(e.pageX);
                });

                /*
                $('#volumeCover' + id).on('mousedown', function (e) {
                    updateVolume(e.pageX);
                });
                */
                var updateVolume = function (x, vol) {
                    var volume = $('#volume' + id);
                    var percentage;
                    //if only volume have specificed
                    //then direct update volume
                    if (vol) {
                        percentage = vol * 100;
                    }
                    else {
                        var position = x - volume.offset().left;
                        percentage = 100 * position / volume.width();
                    }

                    //ceil to 25 mutiplier
                    percentage = Math.ceil(percentage);
                    $('#volumeBar' + id).css('width', percentage + '%');


                    //Check within range
                    if (percentage > 100) {
                        percentage = 100;
                    }
                    if (percentage < 0) {
                        percentage = 0;
                    }
                    //console.log("tid f�r = " + video.volume + " procent= " + percentage / 100);
                    video.volume = percentage / 100;
                    percentage = percentage - 1;


                    //$('#soundbutton' + id).css("left", percentage + "%");
                };
                //updateVolume(0, 0.75);
                $("#" + parentid).bind("DOMNodeRemoved", function (objEvent) {

                    var target = $(objEvent.target);

                    if (target.is("video")) {
                        $("#" + id).attr('src', '');
                        $("#control" + id).remove();

                    }
                });
            });
        } else { //popupdiv
            /*
            var id = $(this)[0].id;
            var video = $(this)[0].find(".video")
        
            video = controls.video[0];
            videoSlider = controls.videoSlider.selector
            strFileToStream,strTitel, strStartImage, startup
            */
            var controlsTimeout;
            var parentid = "popUpDivMovie";
            var id = parentid + strFileToStream;
            var source = strFileToStream;
            var title = strTitel;
            var wantedwidth = strWidth;
            //var height = width * ratio;
            var parameter = new Date().getMilliseconds();

            var ratio = 480 / 768;
            width = $(".PAGE").width() / 100 * wantedwidth;
       
            var parameter = new Date().getMilliseconds();
            var height = width * ratio;
            //height = (height / 1160) * 100;
            //$(this).css("width", wantedwidth + 'px');
            //$(this).css("height", height + 'px');

            var html = '';
            html += '<video class="videoframe" id="' + id + '" width="100%"  preload="metadata">\n';
            /*
            if (navigator.userAgent.match(/chrome/i) && location.href.indexOf("file") == -1) {
                var parameter1 = new Date().getMilliseconds();
                html += '<source src="files/' + source + '.mp4?t=' + parameter1 + '" />\n';
                html += '<source src="files/' + source + '.ogg?t=' + parameter1 + '"/>\n';
            } else if (navigator.userAgent.match(/firefox/i)) {
                html += '<source src="files/' + source + '.ogg"/>\n';
            }
            else {
                html += '<source src="files/' + source + '.mp4" />\n';
                html += '<source src="files/' + source + '.ogg"/>\n';
            }
            */
            if (navigator.userAgent.match(/chrome/i) && location.href.indexOf("file") == -1) {
                var parameter1 = new Date().getMilliseconds();
                html += '<source src="files/' + source + '.mp4?t=' + parameter1 + '" type="video/mp4" />\n';
            }
            else {
                html += '<source src="files/' + source + '.mp4" type="video/mp4" />\n';
            }
            html += 'Your browser does not support the video tag.\n';
            html += '</video>\n';
            html += '<div class="controls" id="control' + id + '">\n';
            html += '<span id="playpause' + id + '" class="paused" ></span>\n';
            html += '<div class="title" id="title' + id + '">' + title + '</div>\n';
            html += '<span class="progressdiv" id="progressdiv' + id + '">\n';
            html += '<div class="videoduration" id="videoduration' + id + '">00:00</div>\n';
            html += '<div class="videototal" id="videototal' + id + '"></div>\n';
            html += '<progress class="progressBar" id="progress-bar' + id + '" min="0" max="100" value="0"></progress>\n';
            html += '<div class="spanprogress" id="spanprogress' + id + '"></div>';
            html += '</span>\n';
            html += '<div class="volume" id="volume' + id + '">\n';
            html += '<div class="sound" id="sound' + id + '" title="Mute/Unmute sound"></div>\n';
            //html += '<div class="soundbutton" id="soundbutton' + id + '"></div>';
            html += '<span class="volumeCover" id="volumeCover' + id + '" title="Set volume"></span>\n';
            html += '<span class="volumeBar" id="volumeBar' + id + '"></span>\n';
            html += '</div>\n';
            html += '<div class="progressbutton" id="progressbutton' + id + '"></div>';
            html += '</div>\n';
            html += '</div>\n';

       
            $("#" + parentid).append(html);
            $("#" + parentid).css("width", wantedwidth + "%");

            $("#" + id).css("margin-bottom", "93px");
            $("#" + id).css("border-radius", "0px");
            $("#control" + id).css("border-radius", "0px");
            
				$("#control" + id).css("font-size", "30px");
            var video = $("#" + id).get(0);
            var fullscreen = false;
            var thisID = parentid;
            var fontSize = wantedwidth / 100;

            video.onloadedmetadata = function () {
                var currentHeight = ($("#" + parentid).height() + ($(window).height() / 100) * 8) + 40;
                if (currentHeight >= $(window).height()) {

                    $("#" + parentid).css("width", "40%");
                } 
            };
            if ($("#" + id).width() >= 700) {

                $("#videoduration" + id).css("font-size", fontSize + "em");
                $("#videototal" + id).css("font-size", fontSize + "em");

                $("#videoduration" + id).css("bottom", "-" + fontSize / 2 + "em");
                $("#videototal" + id).css("bottom", "-" + fontSize / 2 + "em");

                $("#title" + id).css("font-size", fontSize + "em");
                $("#title" + id).css("top", "8%");

            }
            else {
                fontSize = fontSize - (fontSize / 3);
                $("#videoduration" + id).css("font-size", fontSize + "em");
                $("#videototal" + id).css("font-size", fontSize + "em");

                $("#videoduration" + id).css("bottom", "-" + fontSize / 2 + "em");
                $("#videototal" + id).css("bottom", "-" + fontSize / 2 + "em");

                $("#title" + id).css("font-size", fontSize + "em");
                $("#title" + id).css("top", "8%");

            }
            $("#videoduration" + id).css("left", "-14%");
            $("#videototal" + id).css("right", "-14%");

            $("#playpause" + id).css("top", "48%");
           
            
            $("#progressdiv" + id).css("top", "20%");
            var changeHandlerPopup = function () {
                //NB the following line requrires the libary from John Dyer                         

           
                if (navigator.userAgent.match(/MSIE 10/i)) {

                    if (!fullscreen) {
                        enableIEfullscreenPopup();
                        fullscreen = true;
                        controlsTimeout = setTimeout(function () {
                            $("#control" + id).fadeOut('slow');
                        }, 2000); // <-- time in milliseconds
                    } else {
                        disableIEfullscreenPopup();
                        fullscreen = false;
                        $("#control" + id).fadeIn('fast');
                        clearTimeout(controlsTimeout);
                    }
                }
                else {
                    if (!fullscreen) {
                        enablePopupfullscreen();
                        fullscreen = true;
                        controlsTimeout = setTimeout(function () {
                            $("#control" + id).fadeOut('slow');
                        }, 2000); // <-- time in milliseconds
                    }
                    else {
                        disablePopupfullscreen();
                        fullscreen = false;
                        $("#control" + id).fadeIn('fast');
                        clearTimeout(controlsTimeout);
                    }
                }
            }


            // Event listener for the full-screen button
            $("#progressbutton" + id).on('click', function () {


                if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
                    if (fullscreen == false) {
                        enableIEfullscreenPopup();
                        fullscreen = true;
                    } else {
                        disableIEfullscreenPopup();
                        fullscreen = false;
                        $("#control" + id).fadeIn('fast');
                        clearTimeout(controlsTimeout);
                    }
                }

                else if (navigator.userAgent.match(/MSIE 10/i)) {

                    if (fullscreen == false) {
                        enableIEfullscreenPopup();
                        fullscreen = true;
                    } else {
                        disableIEfullscreenPopup();
                        fullscreen = false;
                        $("#control" + id).fadeIn('fast');
                        clearTimeout(controlsTimeout);
                    }
                }
                else {
                    var divObj = document.getElementById(thisID); //  get the target element



                    if (divObj.requestFullscreen) {
                        document.addEventListener("fullscreenchange", changeHandlerPopup, false);
                        if (document.fullScreenElement) {
                            document.cancelFullScreen();
                            //disablefullscreen();
                        } else {

                            divObj.requestFullscreen();
                            //enablefullscreen();
                        }
                    } else if (divObj.msRequestFullscreen) {
                        document.addEventListener("MSFullscreenChange", changeHandlerPopup, false);
                        if (document.msFullscreenElement) {
                            document.msExitFullscreen();

                            //disablefullscreen();
                        } else {

                            divObj.msRequestFullscreen();

                            //enablefullscreen();

                        }
                    }
                    else if (divObj.mozRequestFullScreen) {


                        document.addEventListener("mozfullscreenchange", changeHandlerPopup, false);
                        if (document.mozFullScreenElement) {
                            document.mozCancelFullScreen();

                            //disablefullscreen();
                        } else {

                            divObj.mozRequestFullScreen();

                            //enablefullscreen();
                        }
                    } else if (divObj.webkitRequestFullscreen) {
                        document.addEventListener("webkitfullscreenchange", changeHandlerPopup, false);
                        if (document.webkitFullscreenElement) {
                            document.webkitCancelFullScreen();

                            //disablefullscreen();
                        } else {
                            divObj.webkitRequestFullscreen();

                            //enablefullscreen();
                        }
                    }
                }

                return false;
            });

            //if (fullscreen) {
            $("#" + parentid).mousemove(function (event) {
                //console.log("Moved");
                if (fullscreen) {
                    if ($("#control" + id).css('display') == 'none') {
                        $("#control" + id).fadeIn('slow');
                    } else {
                        clearTimeout(controlsTimeout);
                        controlsTimeout = setTimeout(function () {
                            $("#control" + id).fadeOut('slow');
                        }, 2000); // <-- time in milliseconds
                    }
                }
            });

            $("#playpause" + id).click(function () {
                if (video.paused) {

                    video.play();
                    //$(this).text("Pause");
                    $(this).switchClass("paused", "play");
                } else {

                    video.pause();
                
                    // $(this).text("Play");
                    $(this).switchClass("play", "paused");
                }
                // $(this).toggleClass("paused");
            });

            video.addEventListener("ended", function () {
                video.pause();
                //controls.playpause.text("Play");
                $("#playpause" + id).switchClass("play", "paused");
            });

        

            function disablePopupfullscreen() {
           
                var control = $("#control" + id);
                control.css("position", "absolute");
                control.css("bottom", "0");
                control.css("margin-top", "-100px");
                control.css("padding", "0");
                control.css("height", "100px");

                var videodiv = $("#" + parentid);
                //videodiv.css("overflow", "hidden");
                //videodiv.css("border-radius", "10px");
                videodiv.css("border", "20px solid #262626");
                videodiv.css("width", wantedwidth + "%");
                videodiv.css("height", "auto");
                videodiv.css("top", "8%");

                var closediv = $("#closeDivLayer");
                closediv.css("display", "block");

                var videoframe = $("#" + id);
                videoframe.css("position", "relative");
                videoframe.css("margin-bottom", "93px");

                var videosize = $("#" + id);
                videosize.attr("width", "100%");

                var paused = $("#paused" + id);
                paused.css("width", "5%");

                var play = $("#play" + id);
                play.css("width", "5%");

                var sound = $("#sound" + id);
                sound.css("width", "10%");
                sound.css("margin-top", "-2%");
                sound.css("margin-left", "-17%");


                var sound = $("#videoduration" + id);
                sound.css("left", "-14%");

                var sound = $("#videototal" + id);
                sound.css("right", "-14%");

                currentHeight = ($("#" + parentid).height() + ($(window).height() / 100) * 8) + 40;
                if (currentHeight >= $(window).height()) {

                    $("#" + parentid).css("width", "40%");
                }
            }

            function enablePopupfullscreen() {
            
                var control = $("#control" + id);
                    control.css("position", "fixed");
                    control.css("bottom", "0");
                    control.css("left", "0");
                    control.css("margin", "0");
                    control.css("padding", "0");
                    control.css("margin-top", "0");

                    var videodiv = $("#" + parentid);
               
                    videodiv.css("overflow", "visible");
                    videodiv.css("border-radius", "0px");
                    videodiv.css("border", "0");
                    videodiv.css("width", "100%");
                    videodiv.css("height", "100%");
                    videodiv.css("top", "0");

                    var closediv = $("#closeDivLayer");
                    closediv.css("display", "none");

                    var videoframe = $("#" + id);
                    videoframe.css("position", "fixed");
                    videoframe.css("margin-bottom", "0");
                    videoframe.css("height", "100%");

                    var videosize = $("#" + id);
                    videosize.attr("width", "100%");

                    var paused = $("#paused" + id);
                    paused.css("width", "2%");

                    var play = $("#play" + id);
                    play.css("width", "2%");

                    var sound = $("#sound" + id);
                    sound.css("width", "4%");
                    sound.css("margin-top", "-0.3%");
                    sound.css("margin-left", "-5%");


                    var sound = $("#videoduration" + id);
                    sound.css("left", "-14%");
                //sound.css("font-size", "0.6em");

                    var sound = $("#videototal" + id);
                    sound.css("right", "-14%");
                //sound.css("font-size", "0.6em");
            }

            //PROGRESSBAR
            function updateProgressBar2() {
                var progressBar = document.getElementById('progress-bar' + id);
                var percentage = Math.floor((100 / video.duration) * video.currentTime);
                /*
                var currentPos = video[0].currentTime; //Get currenttime
                var maxduration = video[0].duration; //Get video duration
                */
                if (video.readyState === 4) {
                    $('#videototal' + id).text(TimeFormat(video.duration));
                } else {
                    if (video.duration == video.currentTime) $('#videototal' + id).text(TimeFormat(video.duration));
                    else $('#videototal' + id).text("Loader");
                }
               
                $('#videoduration' + id).text(TimeFormat(video.currentTime));
                // progressBar.value = percentage;

                //progressBar.value = 0;
                //progressBar.innerHTML = percentage + '% played';
                $('#spanprogress' + id).css("width", percentage + '%');
                // $('#progressbutton' + id).css("left", percentage + "%");
            }
            video.addEventListener('timeupdate', updateProgressBar2, false);
            var TimeFormat = function (seconds) {
                var m = Math.floor(seconds / 60) < 10 ? '0' + Math.floor(seconds / 60) : Math.floor(seconds / 60);
                var s = Math.floor(seconds - (m * 60)) < 10 ? '0' + Math.floor(seconds - (m * 60)) : Math.floor(seconds - (m * 60));
                return m + ':' + s;
            };


            var timeDrag = false;   /* Drag status */
            var soundtimeDrag = false;
            $('#progress-bar' + id).mousedown(function (e) {
                timeDrag = true;
                updatebarPopup(e.pageX);

            });


            $('#spanprogress' + id).mousedown(function (e) {
                timeDrag = true;
                updatebarPopup(e.pageX);
            });

           
            var clickHandler = "click";

            if ('ontouchstart' in document.documentElement) {
                clickHandler = "touchstart";
            }
            
            $(document).mouseup(function (e) {
                if (timeDrag) {
                    timeDrag = false;
                    updatebarPopup(e.pageX);
                }
                else if (soundtimeDrag) {
                    soundtimeDrag = false;
                    updateVolumePopup(e.pageX);
                }
            });

            $(document).mousemove(function (e) {
                if (timeDrag) {
                    updatebarPopup(e.pageX);
                } else if (soundtimeDrag) {
                    soundtimeDrag = false;
                    updateVolumePopup(e.pageX);
                }
            });



            //update Progress Bar control
            var updatebarPopup = function (x) {
                var progress = $('#progress-bar' + id);
                var maxduration = video.duration; //Video duraiton
                var position = x - progress.offset().left; //Click pos
                var percentage = 100 * position / progress.width();

                //Check within range
                if (percentage > 100) {
                    percentage = 100;
                }
                if (percentage < 0) {
                    percentage = 0;
                }
                //

                video.currentTime = Math.round(maxduration * percentage / 100);
                //console.log("tid = " + video.currentTime);
                percentage = percentage - 1;
                // $('#progressbutton' + id).css("left", percentage + "%");
            };

            //sound button clicked
            $('#sound' + id).click(function () {
                video.muted = !video.muted;
                $(this).toggleClass('muted');
                $('#volumeBar' + id).toggleClass('volumeoff');
            });
            //VOLUME BAR
            //volume bar event
            /*
            $('#soundbutton' + id).mousedown(function (e) {

                soundtimeDrag = true;
                updateVolume(e.pageX);
            });
            */
            $('#volumeCover' + id).mousedown(function (e) {

                soundtimeDrag = true;
                updateVolumePopup(e.pageX);
            });

            /*
            $('#volumeCover' + id).on('mousedown', function (e) {
                updateVolume(e.pageX);
            });
            */
            var updateVolumePopup = function (x, vol) {
                var volume = $('#volume' + id);
                var percentage;
                //if only volume have specificed
                //then direct update volume
                if (vol) {
                    percentage = vol * 100;
                }
                else {
                    var position = x - volume.offset().left;
                    percentage = 100 * position / volume.width();
                }

                //ceil to 25 mutiplier
                percentage = Math.ceil(percentage);
                $('#volumeBar' + id).css('width', percentage + '%');


                //Check within range
                if (percentage > 100) {
                    percentage = 100;
                }
                if (percentage < 0) {
                    percentage = 0;
                }
                //console.log("tid f�r = " + video.volume + " procent= " + percentage / 100);
                video.volume = percentage / 100;
                percentage = percentage - 1;


                //$('#soundbutton' + id).css("left", percentage + "%");
            };

            $("#" + parentid).bind("DOMNodeRemoved", function (objEvent) {
                
                var target = $(objEvent.target);
           
                if (target.is("video")) {
                    $("#" + id).attr('src', '');
                    $("#control" + id).remove();

                }
            });
        }
     }
}



/*
* Configuration file
*
* @author Faisal T
*/

//Server socket connections setup
var protocol="http://";
var host="148.88.227.217";
var port="3000";

//ShapeClip interface configuration
var h_max = 4; //number of horizontal pixels, e.g. in 3x4 grid this would be 3
var v_max = 4; //number of horizontal pixels, e.g. in 3x4 grid this would be 3

//Override the default pulse width value. Default=200ms
var OVERRIDE_PULSE_WIDTH = 200;

//Define RGB colours for each row (horizontal row) of the LEDS
var colors=[
[255,0,0],
[0,0,255],
[0,255,0],
[255,0,128],
[255,255,0],
[128,0,0]
];

//Define audio file to load
var audioFile = "test_song2.mp3";
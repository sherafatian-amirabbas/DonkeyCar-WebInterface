
arrow_left = 37;
arrow_right = 39;
arrow_up = 38;
arrow_down = 40;
key_d = 68
key_s = 83

$(document).ready(function(){

    Donkey.OpenSocket()
});

$(document).on('keydown',function(e){

    switch(e.which)
    {
        case arrow_up:
        {
            Donkey.MoveForward();
            break;
        }
        case arrow_down:
        {
            Donkey.MoveBackward();
            break;
        }
        case arrow_left:
        {
            Donkey.ToTheLeft();
            break;   
        }
        case arrow_right:
        {
            Donkey.ToTheRight();
            break;
        }
    }

    console.log("keydown: " + e.which);
 });

$(document).on('keyup',function(e){

    switch(e.which)
    {
        case arrow_up:
        case arrow_down:
        {
            Donkey.StopDriving();
            break;
        }
        case key_d:
        {
            Donkey.DriveWithDefaults();
            break;
        }
        case key_s:
        {
            Donkey.StopDriving();
            break;
        }
    }

    console.log("keyup: " + e.which);
 });







$(document).ready(function(){

    Donkey.OpenSocket()
});

$(document).on('keyup',function(e){

    arrow_left = 37;
    arrow_right = 39;
    arrow_up = 38;
    arrow_down = 40;
    key_d = 68
    key_s = 83

    switch(e.which)
    {
        case arrow_up:
        {
            Donkey.SpeedUp();
            break;
        }
        case arrow_down:
        {
            Donkey.SpeedDown();
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
 });






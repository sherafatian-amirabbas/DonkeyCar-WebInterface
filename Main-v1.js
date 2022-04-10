
arrow_left = 37;
arrow_right = 39;
arrow_up = 38;
arrow_down = 40;
key_d = 68
key_s = 83

$(document).ready(function(){

    DonkeyDrive.OpenSocket();

    DonkeyVideo.OpenSocket();
    DonkeyVideo.OnMessage(function(e){ 
        var objectURL = URL.createObjectURL(e.data);
        //console.log(objectURL);
        document.getElementById("ItemPreview").src = objectURL;
     });
});

$(document).on('keydown',function(e){

    switch(e.which)
    {
        case arrow_up:
        {
            DonkeyDrive.MoveForward();
            break;
        }
        case arrow_down:
        {
            DonkeyDrive.MoveBackward();
            break;
        }
        case arrow_left:
        {
            DonkeyDrive.ToTheLeft();
            break;   
        }
        case arrow_right:
        {
            DonkeyDrive.ToTheRight();
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
            DonkeyDrive.StopDriving();
            break;
        }
        case key_d:
        {
            DonkeyDrive.DriveWithDefaults();
            break;
        }
        case key_s:
        {
            DonkeyDrive.StopDriving();
            break;
        }
    }

    console.log("keyup: " + e.which);
 });






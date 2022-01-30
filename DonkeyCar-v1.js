 

 // similar to the web interface but joystick mode
 
 
 Donkey = function(){

    defaultAngle = 0.0;
    defaultSpeedForward = 1.0;
    defaultSpeedBackward = -0.7;

    currentAngle = 0.0;
    currentThrottle = 0.0;

    minAngle = -1.0;
    maxAngle = 1.0;

    angleIncreaseBy = 0.2;



    function DonkeyCar(socketEndpoint) {

        this.Endpoint = "ws://" + socketEndpoint; 
        this.Socket;
    };



    DonkeyCar.prototype.DriveWithDefaults = function() {

        currentThrottle = defaultSpeedForward;
        currentAngle = defaultAngle;
        this.SendMessage(currentAngle, currentThrottle);

        return this;
    };
    
    DonkeyCar.prototype.StopDriving = function() {

        currentThrottle = 0.0;
        currentAngle = 0.0;
        this.SendMessage(0, currentThrottle);

        return this;
    };



    DonkeyCar.prototype.MoveForward = function() {

        currentThrottle = defaultSpeedForward;
        this.SendMessage(currentAngle, currentThrottle);

        return this;
    };

    DonkeyCar.prototype.MoveBackward = function() {

        currentThrottle = defaultSpeedBackward;
        this.SendMessage(currentAngle, currentThrottle);

        return this;
    };

    DonkeyCar.prototype.ToTheLeft = function() {

        currentAngle -= angleIncreaseBy;
        currentAngle = Math.max(minAngle, currentAngle);
        this.SendMessage(currentAngle, currentThrottle);

        return this;
    };

    DonkeyCar.prototype.ToTheRight = function() {

        currentAngle += angleIncreaseBy;
        currentAngle = Math.min(maxAngle, currentAngle);
        this.SendMessage(currentAngle, currentThrottle);

        return this;
    };



    DonkeyCar.prototype.OpenSocket = function(onOpenHandler) {
        this.Socket = new WebSocket(this.Endpoint);
        this.Socket.onopen = function(e) {

            console.log("connection opened!");

            if (onOpenHandler != null)
                onOpenHandler();
        };

        return this;
    };

    DonkeyCar.prototype.CloseSocket = function() {
        this.Socket.close();
        return this;
    };

    DonkeyCar.prototype.SendMessage = function(angle, throttle) {

        var data = { "angle": angle, "throttle": throttle, "recording": false, "drive_mode": "user" };
        this.Socket.send(JSON.stringify(data));
        console.log("data sent: " + JSON.stringify(data));
    };

    DonkeyCar.prototype.OnMessage = function(handler) {

        this.Socket.onmessage = function(e) {

            console.log("message received!");
            if (handler != null)
                handler(e);
        };

        return this;
    };

    DonkeyCar.prototype.OnClose = function(handler) {

        this.Socket.onclose = function(e) {

            console.log("connection closed!");
            if (handler != null)
                handler();
        };

        return this;
    };

    DonkeyCar.prototype.OnError = function(handler) {

        this.Socket.onerror = function(e) {

            console.log("error raised!");
            if (handler != null)
                handler();
        };

        return this;
    };

    socketEndpoint = "192.168.1.9:8887/wsVideo"
    return new DonkeyCar(socketEndpoint);
}();
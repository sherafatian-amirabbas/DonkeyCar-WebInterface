 

 // similar to the web interface but joystick mode
 
 
 DonkeyVideo = function(){


    function DonkeyCar(socketEndpoint) {

        this.Endpoint = "ws://" + socketEndpoint; 
        this.Socket;
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

    // the webosocket connection added to the source to consume the camera
    // socketEndpoint = "192.168.1.9:8080/wsVideo"
    socketEndpoint = "192.168.137.153:8080/wsVideo"
    return new DonkeyCar(socketEndpoint);
}();
const createConnection = (serverUrl, roomId) => {
    return{
        connect(){
            console.log("connecting to " + roomId + " room at " + serverUrl )
        },
        disconnected(){
            console.log("Disconnecting to " + roomId + " room at " + serverUrl )
        }
    }
};

export {createConnection}


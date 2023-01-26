const WebSocket = require("ws");
const ws = new WebSocket.Server({port:8008});

let user_id = 0; //A unique value given to a client, such as a social security number
let ALL_WS = []; //Save websocket and user_id for each user to control all users
ws.on("connection", function connect(websocket, req){ //Executes when a specific client connects to the websocket.
    user_id++;
    console.log("NEW USER CONNECT ("+user_id+")");
    ALL_WS.push({"ws":websocket, "user_id":user_id});

    sendUserId(user_id);

    function sendUserId(user_id) {
        let data = {"code":"my_user_id","msg":user_id};
        websocket.send(JSON.stringify(data));
    }
});
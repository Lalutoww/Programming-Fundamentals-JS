function chat(array) {
    
    let result = [];
    let action = array.shift().split(" ");
    let command = action.shift();

    while (command != "end") {
        switch (command) {
            case "Chat": result.push(action[0]); break;
            case "Delete": for (let i = 0; i < result.length; i++) {
                if (result[i] == action[0]) {
                    result.splice(i, 1);
                    break;
                }
            } break;
            case "Edit": for (let i = 0; i < result.length; i++) {
                if (result[i] == action[0]) {
                    result.splice(i, 1, action[1]);
                    break;
                }
            } break;
            case "Pin": for (let i = 0; i < result.length; i++) {
                if (result[i] == action[0]) {
                    let pinned = result[i];
                    result.splice(i, 1);
                    result.push(pinned);
                    break;
                }
            } break;
            case "Spam" : for (let i = 0 ; i<action.length; i++){
                result.push(action[i]);
            } break;
    }
    action = array.shift().split(" ");
    command = action.shift();
    }
    console.log(result.join('\n'));
}
chat(["Chat John",
"Spam Let's go to the zoo",
"Edit zoo cinema",
"Chat tonight",
"Delete tonight",
"Pin John",
"end"])
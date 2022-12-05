function followers(input){

    let line = input.shift();
    let janeFollowers = {};

    while(line != 'Log out'){
        let [command, username, arg1] = line.split(': ');

        switch (command) {
            case 'New follower':
                if(!janeFollowers[username]){
                    janeFollowers[username] = {
                        likes: 0,
                        comments: 0,
                    }
                }
            break;
            case 'Like':
                let count = Number(arg1);
                if(!janeFollowers[username]){
                    janeFollowers[username] = {
                        likes: count,
                        comments: 0,
                    }
                }else{
                    janeFollowers[username].likes += count;
                }
            break;
            case 'Comment':
                if(!janeFollowers[username]){
                    janeFollowers[username] = {
                        likes: 0,
                        comments: 1,
                    }
                }else{
                    janeFollowers[username].comments++;
                }
            break;
            case 'Blocked':
                if(!janeFollowers[username]){
                    console.log(`${username} doesn't exist.`);
                }else{
                    delete janeFollowers[username];
                }
            break;
        }
        line = input.shift();
    }

    let followers = Object.keys(janeFollowers).length;
    console.log(`${followers} followers`);
    for (const follower in janeFollowers) {
        let likes = janeFollowers[follower].likes;
        let comments = janeFollowers[follower].comments;
        console.log(`${follower}: ${likes+comments}`);
    }
}
followers(["Blocked: Amy",
"Comment: Amy",
"New follower: Amy",
"Like: Tom: 5",
"Like: Ellie: 5",
"Log out"])


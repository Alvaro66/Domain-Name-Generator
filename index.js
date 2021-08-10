let pronoun = ["the","our",];
let adj = ["great","big",];
let noun = ["jogger","racoon",];

for(p = 0; p < pronoun.length; p++){
    for(a= 0; a < adj.length; a++){
        for(n = 0; n < noun.length; n++){
            const element = pronoun[p]+adj[a]+noun[n];
            console.log("https://www."+ element + ".com");
            console.log("https://www" + element + ".net")
            console.log(`https://www.${element}.cl`);
            console.log(`https://www.${element}.cl`);
        }    
    }
}

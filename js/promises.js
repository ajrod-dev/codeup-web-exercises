"use strict";


function myPromise(username){
    const url = `https://api.github.com/users/${username}/events/public`;
    return fetch(url, {headers: {'Authorization': `token ${myGithubToken}`}}).then((resp) => {
        return resp.json()
    }).then((data) => {
        console.log(data)
        return new Date(data[0].created_at).toDateString()
    }).catch((err) => {
        console.log(err)
    })
}

myPromise('ajrod-dev').then((resp) => {
    console.log("Last commit made was: " + resp)
})


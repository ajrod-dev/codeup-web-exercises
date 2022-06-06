"use strict";

const myToken = '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';




function myPromise(username){
    const url = `https://api.github.com/users/${username}/events/public`;
    return fetch(url, {headers: {'Authorization': `token ${myToken}`}}).then((resp) => {
        return resp.json()
    }).then((data) => {
        return new Date(data[0].created_at).toDateString()
    })
}

myPromise('ajrod-dev').then((resp) => {
    console.log("Last commit made was: " + resp)
})


$.get('/data/blog.json').done(function (posts) {
    $('#posts').html("")
    posts.forEach(function (post, index) {
        let gridItem = "grid-item-" + (index + 1)
        let div = '<div class=grid-item id="'+gridItem+'">' + post.title + '<br>' + post.content + '<br>' + post.categories + '<br>' + post.date + '<br></div>'
        $('#posts').append(div)
    })

})
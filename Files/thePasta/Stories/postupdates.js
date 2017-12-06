function featuredUpdate() {
    for (var selFile = 1; selFile <= 3; selFile++) {
        var linecount = 0;
        var HTML_FILE = "https://cdn.rawgit.com/ludpot31415/thepasta-pasta-collection-2/1fdfc6de/pasta" + selFile + ".txt";
        
        $.get(HTML_FILE, function(data) {
           var lines = (data).split('\n');
           $("Content").append("<a></a").attr("href","#").attr("click","show('feat" + selFile + "')")
           $("Content").append("<div class='story' id='story" + selFile + "'>");
           $('story1').append("<h1>DDD</h1>").innerHTML;
           $('story1').append("<p><i></i></p>").innerHTML();
        })
        
    }
}
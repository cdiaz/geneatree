window.$ = window.jQuery = require('./libs/lib.jquery.js');

$(function() {
    $(window).on('dragenter', function(e){
        e.preventDefault();
    });

    $('#DropZone').bind('dragover', function(event){
        event.preventDefault();
        event.stopPropagation();
        $(this).addClass('dragged');
    });

    $('#DropZone').bind('dragleave', function(event){
        event.preventDefault();
        event.stopPropagation();
        $(this).removeClass('dragged');
    });

    $("html").on('drop', function(event) {
        event.preventDefault();
        event.stopPropagation();
        alert("Dropped!");
        console.log(event);
        var file = event.originalEvent.dataTransfer.files;          
                console.log(file);
    });
});

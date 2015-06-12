$('#course-list a').on('click', function() {
    $('#course-list a').removeClass('active') ;
    classie.add( this, 'active' );
})

$('#goals a').on('click', function() {
    classie.toggle( this, 'active' );
})

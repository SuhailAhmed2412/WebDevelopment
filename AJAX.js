var data= null;

$('#button').click(function() {
    // $('#myDiv').load('https://imdb-api.projects.thetuhin.com/title/tt6522580',function(response, status, xhr){
    //     if(status == 200) {
    //         alert('All Okay');
    //     } else if (status == 'error') {
    //     alert('Error: ' + xhr.status+' '+xhr.statusText);
    //     }
    // });
    $.get('https://imdb-api.projects.thetuhin.com/title/tt15354916', function(response, status, xhr){
        if(xhr.status == 200) {
            console.log('All Okay');
            console.log(response);
            $('#title').html(response.title); 
            $('#img').attr('src',response.image); 
        } else if (status == 'error') {
            console.log('Error: ' + xhr.status+' '+xhr.statusText);
        }          
    })
})
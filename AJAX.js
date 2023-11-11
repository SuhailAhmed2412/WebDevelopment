var data= null;

$('#button').click(function() {
    $('#myDiv').load('AJA.txt',data,function(response, status, xhr){
        if(status == 'success') {
            alert('All Okay');
        } else if (status == 'error') {
        alert('Error: ' + xhr.status+' '+xhr.statusText);
        }
    });
})
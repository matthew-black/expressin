$(document).ready(function(){
  $('.deletePeep').on('click', deletePeep);
});

function deletePeep(){
  var confirmation = confirm('Are You Sure?');

  if(confirmation){
    $.ajax({
      type: 'DELETE',
      url: '/peeps/' + $(this).attr("data-id")
    })
    window.location.replace('/');
  } else {
    return false;
  }
}
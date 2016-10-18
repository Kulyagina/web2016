function remove(rem) {
  $(rem).parent().parent().remove();

}

(function($){
$(function() {
 $("#btnShowTable").click(function(){
   $(this).hide();
   $("#hiddenTable").show();
 });



 $("#btnAdd").click(function(){
   var p = $(this).parent().parent();
   var str = "";
   str += '<tr>';
   str += '<td>';
   str += 'Комсомольский';
   str += '</td>';
   str += '<td>';
   str += '12971';
   str += '</td>';
   str += '<td>';
   str += '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> <span onclick="remove(this);" class="glyphicon glyphicon-trash" aria-hidden="true"></span>';
   str += '</td>';
   str += '</tr>';
   $(str).insertBefore(p);
 });



   $('a.foto').colorbox({rel:'foto'});


});



})(jQuery);

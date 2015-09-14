(function(){
  // To trigger the -moz-drag-over CSS pseudoclass and the drog event
  // https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Drag_operations
  $('.droparea').on('dragenter', function(e) {
    e.stopPropagation();
    e.preventDefault();
  });

  $('.droparea').on('dragover', function(e) {
    e.stopPropagation();
    e.preventDefault();
  });

  $('#join .droparea').on('drop', function(e) {
    e.stopPropagation();
    e.preventDefault();

    var files = e.originalEvent.dataTransfer.files;
    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      if (!/^image\//.test(file.type)) {
        continue;
      }

      var reader = new FileReader();
      reader.onload = function(e) {
        $('#join .droparea-mask').css({
          'border': 'solid 0',
          'background-image': 'url(' + e.target.result + ')'
        });
        $('#join .droparea-desc').hide();
      };
      reader.readAsDataURL(file);
      break;
    }
  });

  $('#thanks div').children().each(function(){ $(this).hide(); });
  $('#thanks div h2').show();
  $('#thanks div h2 a').click(function() {
    $('#thanks').removeClass('shout');
    $('#thanks h2').html($('#thanks h2').text());
    $('#thanks div').children().each(function(){ $(this).show(); });
    return false; // Stop bubbling
  });
}).call(this);

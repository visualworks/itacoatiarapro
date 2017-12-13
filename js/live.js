var loadingHtml = '<img src="img/loading.gif" alt="loading" style="border:3px" />';

$(function()
{	
	
	if( $('.events-list').length )
	{
		$.getScript( 'js_caradogol.js', function()
		{		
			$('#eventIs').text( eventIs );
			$('#webcastIs').text( webcastIs );
			$('#waves').text( waves );
			$('#weather').text( weather );
			$('#wind').text( wind );
			$('#schedule').text( schedule );
			$('#updated').text( updated );
			$('.events-block').slideDown();
		});
	}
	
	$('ul li a').click( function()
	{
		$(this).parent('li').parent().children('li').removeClass('active');
		$(this).parent().addClass('active');
	});
	
	$('[placeholder]').focus(function() {
	  var input = $(this);
	  if (input.val() == input.attr('placeholder')) {
		input.val('');
		input.removeClass('placeholder');
	  }
	}).blur(function() {
	  var input = $(this);
	  if (input.val() == '' || input.val() == input.attr('placeholder')) {
		input.addClass('placeholder');
		input.val(input.attr('placeholder'));
	  }
	}).blur().parents('form').submit(function() {
	  $(this).find('[placeholder]').each(function() {
		var input = $(this);
		if (input.val() == input.attr('placeholder')) {
		  input.val('');
		}
	  })
	});	
	
	$("#form-message").submit(function()
	{
		$('#status-message').html( "Sending message..." );
		$('#form-message').hide();
		
		$.ajax({
			type: 'POST',
			url: $(this).attr('action'),
			data: $(this).serialize(),
			success: function( data ){
				$('#form-message').each(function(){	this.reset(); });
				$('#status-message').show().text('Message sent!');
				$("#status-message").fadeOut(5000, function()
				{
					$('#form-message').show();						  
				});
			},
			dataType: 'text'
		});

        return false;
	});	
	
});

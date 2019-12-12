$(function() {

  function buildHTML(message) {
    console.log(message)
    if (message.image) {
      var html = `<div class="message">
                    <div class="upper-message">
                      <div class="upper-message__user-name">
                        ${ message.name}
                      </div>
                      <div class="upper-message__date">
                        ${ message.created_at}
                      </div>
                      </div>
                      <div class="lower-message">
                        <p class="lower-message__content">
                          ${ message.content}
                        </p>
                        <img class="lower-message__image" src=${ message.image} alt="A">
                      </div>
                    </div>`
    } else {
      var html = `<div class="message">
                    <div class="upper-message">
                      <div class="upper-message__user-name">
                        ${ message.name}  
                      </div>
                      <div class="upper-message__date">
                        ${ message.created_at}
                      </div>
                      </div>
                      <div class="lower-message">
                        <p class="lower-message__content">
                          ${ message.content}
                        </p>
                      </div>
                  </div>`
    }
    return html
  }
  
    
    
  $("#new_message").on("submit", function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $('.main__bottom-text-send-link').prop('disabled', false);
      $('.new_message')[0].reset();
    })
    .fail(function() {
      alert('error');
    })
  })
})

  
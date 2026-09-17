document.getElementById('year').textContent = new Date().getFullYear();

  var toggle = document.getElementById('menuToggle');
  var links = document.getElementById('navLinks');
  toggle.addEventListener('click', function(){
    var open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  links.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){ links.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); });
  });

  var form = document.getElementById('quoteForm');
  var status = document.getElementById('form-status');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    try{
      var data = new FormData(form);
      var name = data.get('name') || '';
      var phone = data.get('phone') || '';
      var vehicle = data.get('vehicle') || '';
      var service = data.get('service') || '';
      var location = data.get('location') || '';
      var message = data.get('message') || '';

      var subject = 'Service request: ' + service + ' — ' + name;
      var body =
        'Name: ' + name + '\n' +
        'Phone: ' + phone + '\n' +
        'Vehicle: ' + vehicle + '\n' +
        'Service needed: ' + service + '\n' +
        'Location: ' + location + '\n\n' +
        'Details:\n' + message;

      var mailto = 'mailto:blakegordon44@outlook.com'
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(body);

      window.location.href = mailto;
      status.textContent = 'Opening your email app to send this request…';
      status.className = 'ok';
    }catch(err){
      status.textContent = 'Something went wrong — please call 1-769-236-2290 instead.';
      status.className = '';
    }
  });

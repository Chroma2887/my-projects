tinymce.init({
  selector: '#myEditor',
  height: 300
});

document.getElementById('publish').addEventListener('click', function() {
  const content = tinymce.get('myEditor').getContent();
  alert(content);
});
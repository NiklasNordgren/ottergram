var anchors = document.getElementsByTagName('a');
var anchorsArray = [].slice.apply(anchors);

anchorsArray.forEach(function(a){
  a.addEventListener('click', function(event){
    event.preventDefault();
  })
})

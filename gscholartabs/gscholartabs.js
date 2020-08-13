// Get the publication entries
var elements = document.getElementsByClassName('gsc_a_at');

// Replace javascript:void(0) with the actual href
for (i = 0; i < elements.length; i++) {
  elements.item(i).href = elements.item(i).dataset.href
} 

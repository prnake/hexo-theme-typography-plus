/*给p标签中的「Papersnake」字样加上标记*/
(function () {
  $('p:contains("Papersnake")').each(function () {
      $(this).replaceWith('<p>' + $(this).html().replace(/Papersnake/g, '<span class="cat-and-sunflower">Papersnake</span>') + '</p>');
  });
})();

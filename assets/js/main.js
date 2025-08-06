var first_visible = false;
var second_visible = false;
var article_text_one = document.getElementById("full-content-article-one");
var first_article_read_more = document.getElementById(
  "first_article_read_more"
);
var second_article_read_more = document.getElementById(
  "second_article_read_more"
);
var article_text_second = document.getElementById(
  "full-content-article-second"
);
function firstToggle() {
  if (first_visible) {
    first_visible = 0;
    first_article_read_more.innerHTML = "Read more &gt;";
    article_text_one.style.display = "none";
  } else {
    first_visible = 1;
    first_article_read_more.innerHTML = "Read Less &lt;";
    article_text_one.style.display = "block";
  }
}
function secondToggle() {
  if (second_visible) {
    second_visible = 0;
    second_article_read_more.innerHTML = "Read more &gt;";
    article_text_second.style.display = "none";
  } else {
    second_visible = 1;
    second_article_read_more.innerHTML = "Read Less &lt;";
    article_text_second.style.display = "block";
  }
}

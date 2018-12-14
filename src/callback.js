// 回调地狱问题

import $ from 'jquery';

function showError(e) {
  console.error('Error', e);
}

function updateUI(info) {
  $('#app').html(JSON.stringify(info));
}

const username = 'shuangmianxiaoQ';

$('#btn1').on('click', () => {
  $.getJSON({
    url: `https://api.github.com/users/${username}/repos`,
    success(repo) {
      console.log(repo);
      $.get({
        url: repo[0].url,
        success(data) {
          updateUI(data.name);
        },
        error: showError
      });
    },
    error: showError
  });
});

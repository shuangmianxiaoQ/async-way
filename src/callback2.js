// 优化 callback.js ，将回调函数进行封装

import $ from 'jquery';

const username = 'shuangmianxiaoQ';

function showError(e) {
  console.warn('Error', e);
}

function updateUI(info) {
  $('#app').html(JSON.stringify(info));
}

function getRepos(username, onSucess, onError) {
  $.getJSON({
    url: `https://api.github.com/users/${username}/repos`,
    success: onSucess,
    error: onError
  });
}

function getRepoName(repo, onSucess, onError) {
  $.get({
    url: repo[1].url,
    success: onSucess,
    error: onError
  });
}

$('#btn2').on('click', () => {
  getRepos(
    username,
    repo => {
      getRepoName(repo, data => updateUI(data.name), showError);
    },
    showError
  );
});

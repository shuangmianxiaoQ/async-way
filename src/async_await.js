// 使用 Async/Await

import $ from 'jquery';

const username = 'shuangmianxiaoQ';

function showError(e) {
  console.warn('Error', e);
}

function updateUI(info) {
  $('#app').html(JSON.stringify(info));
}

function getRepos(username) {
  return new Promise((resolve, reject) => {
    $.getJSON({
      url: `https://api.github.com/users/${username}/repos`,
      success: resolve,
      error: reject
    });
  });
}

function getRepoName(repo) {
  return new Promise((resolve, reject) => {
    $.get({
      url: repo[3].url,
      // resolve函数的参数会往下传递给 .then 所指定的函数
      success(data) {
        resolve(data);
      },
      error: reject
    });
  });
}

$('#btn4').on('click', async () => {
  try {
    const repos = await getRepos(username);
    const data = await getRepoName(repos);

    updateUI(data.name);
  } catch (e) {
    showError(e);
  }
});

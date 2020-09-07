const core = require('@actions/core');
const fetch = require('node-fetch');

const callApi = ({ method, token, params = {} }) => {
  return fetch(`https://api.telegram.org/bot${token}/${method}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  }).then((res) => res.json());
};

try {
  const message = core.getInput('message');
  const token = core.getInput('token');

  callApi({
    method: 'sendMessage',
    token,
    params: {
      chat_id: '104953010',
      text: message,
    },
  }).then(console.log);
} catch (error) {
  core.setFailed(error.message);
}

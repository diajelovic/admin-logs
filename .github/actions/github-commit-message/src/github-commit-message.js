const core = require('@actions/core');
const github = require('@actions/github');

try {
  core.setOutput('last_commit_message', github.context.payload.head_commit.message);
} catch (error) {
  core.setFailed(error.message);
}

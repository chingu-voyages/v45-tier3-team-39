# Github workflow

## Issues

Make sure there is an issue (ticket) for each piece of work you do. This will help us keep track of what is being worked on and what has been completed. If you need to create a new issue, please follow the format below -

- Title - _Short description of the work_
- Description - _More detailed description of the work_
- Assignees - _Assign the issue to yourself_
- Labels - _Add the relevant labels to the issue_

Take note of the issue number as you will need this when creating a new branch.

## Branches

The branches you work on (feature branches) should **always** be created from the `develop` branch. Always make sure you have the most up-to-date development branch before creating a new branch from it. You can do this with `git pull`.

### Branch creation

To create a new branch from the `develop branch`, first do `git checkout develop` and then use the following command -

`git checkout -b feature/issue-01/filter-comic`

This will create a new branch called `feature/issue-01/filter-comic` and will switch you to that branch.

### Branch naming

Names for new working branches should follow this format -

(_feature_ | _bug-fix_ | _update_) / issue-(_issue-number_) / _name-of-work_

_For example_

feature/issue-01/filter-comic

_or_

bug-fix/issue-980/get-comic-list

## Pull Requests

The process for creating a new PR is as follows

- Create a new branch from `develop`, making sure your `develop` branch is up to date (see above - Branch creation).
- Do the required work on your new branch
- Commit the work to your branch and push to Github
- Create PR into `develop` branch

Some useful point to remember

- Pull requests must always be targeting the `develop` branch.
- Pull requests need to be approved by at least one other member of the team before they can be merged
- Any checks must pass before the request can be merged
- Please add a description on each pull request to let us know what the work is.
- In the PR description, please add a `Closes` tag followed by the issue number that the PR is linked to. _For example_ `Closes #138`. This will link the PR to the issue.

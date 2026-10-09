#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

commit_message="${1:-Update website}"

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "This script must be run inside a Git repository."
  exit 1
fi

echo "Checking current changes..."
git status --short

if git diff --quiet && git diff --cached --quiet && [ -z "$(git ls-files --others --exclude-standard)" ]; then
  echo "No changes to publish."
  exit 0
fi

echo
echo "Building the site..."
npm run build

echo
echo "These files will be staged, committed, and pushed:"
git status --short
echo
read -r -p "Continue? [y/N] " answer

case "$answer" in
  [yY] | [yY][eE][sS])
    ;;
  *)
    echo "Canceled."
    exit 0
    ;;
esac

git add -A

if git diff --cached --quiet; then
  echo "No staged changes to commit."
  exit 0
fi

git commit -m "$commit_message"
git push

echo
echo "Pushed to GitHub. GitHub Pages will deploy from the main branch workflow."

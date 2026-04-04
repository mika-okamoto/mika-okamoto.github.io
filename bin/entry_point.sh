#!/bin/bash
set -euo pipefail

echo "Entry point script running"

CONFIG_FILE=_config.yml

# Function to manage Gemfile.lock
manage_gemfile_lock() {
    if command -v git &> /dev/null; then
        git config --global --add safe.directory '*' || true
    fi

    if [ ! -f Gemfile.lock ]; then
        return
    fi

    # Only try to reason about tracking status if we're inside a git worktree.
    if command -v git &> /dev/null && git rev-parse --is-inside-work-tree &> /dev/null; then
        if git ls-files --error-unmatch Gemfile.lock &> /dev/null; then
            echo "Gemfile.lock is tracked by git, keeping it intact"
            git restore Gemfile.lock 2>/dev/null || true
        else
            echo "Gemfile.lock is not tracked by git; keeping it (Docker dev needs it)"
        fi
    else
        echo "Not a git worktree; keeping Gemfile.lock"
    fi
}

ensure_bundle_install() {
    # `bundle exec` requires gems to be installed; git-sourced gems (e.g. jekyll-terser)
    # are checked out during `bundle install`.
    if bundle check &> /dev/null; then
        return
    fi

    echo "Installing gems (bundle install)"
    bundle install
}

start_jekyll() {
    manage_gemfile_lock
    ensure_bundle_install
    bundle exec jekyll serve --watch --port=8080 --host=0.0.0.0 --livereload --verbose --trace --force_polling &
}

start_jekyll

while true; do
    inotifywait -q -e modify,move,create,delete $CONFIG_FILE
    if [ $? -eq 0 ]; then
        echo "Change detected to $CONFIG_FILE, restarting Jekyll"
        jekyll_pid=$(pgrep -f jekyll)
        kill -KILL $jekyll_pid
        start_jekyll
    fi
done

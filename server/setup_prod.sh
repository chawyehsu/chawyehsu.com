#!/bin/bash

# Check python3
if [[ ! -x "$(command -v python3)" ]]; then
  echo "Need Python3 to run the application."
  exit 1
fi

# Setup virtualenv
if [[ ! -x "$(command -v pipenv)" ]]; then
  echo "Missing pipenv to setup virtualenv."
elif [[ -d ./.venv ]]; then
  echo "Virtualenv has been created at './.venv'."
else
  PIPENV_VENV_IN_PROJECT=1 PIP_IGNORE_INSTALLED=1 pipenv install
fi

# Pour out supervisor config
if [[ -d /etc/supervisor/conf.d ]]; then
  sudo cp ./supervisor.conf /etc/supervisor/conf.d/h404bi.com.server.conf
  echo "Execute 'supervisorctl reload' to retart supervisor."
fi

#!/bin/bash
cd /home/kavia/workspace/code-generation/tictactoemaster-93450-93474/main_container_for_tictactoe_master
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi


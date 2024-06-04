#!/bin/bash

# transcode_dir target_dir
transcode_dir() {
  temp_dir=$(mktemp -d 2>/dev/null || mktemp -d -t 'jeopardy')
  target_dir=$1
  echo "Transcoding $target_dir"
  (
    cd $target_dir
    for entry in $(find * -type f -maxdepth 1)
    do
      echo "$target_dir/$entry"
      ffmpeg -hide_banner -loglevel error -i "./$entry" "$temp_dir/$entry"
    done
  )
  mv $temp_dir "$target_dir\T" 
  rm -rf "$temp_dir"
  echo ''
}

transcode_dir jeopardy/static/full
transcode_dir jeopardy/static/short

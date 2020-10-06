#!/usr/bin/env node
const path = require('path')
const fs = require('fs')
const program = require('commander');
program
  .version('0.0.1')
  .description('Transform to vite');

program
  .command('v <dir>')
  .option('-f, --framework <framework>', 'Transform some framework to vite')
  .action(function (dir, cmdObj) {
    console.log('getdir ' + path.resolve(dir)  + (cmdObj.framework ? '----'+ cmdObj.framework : 'no'))
  })

program.parse(process.argv);
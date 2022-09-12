#! /usr/bin/env node
const { program } = require('commander')
// console.log('my cli')

// console.log(process.argv);
program.option('-f, --framwork <framwork>', '设置框架');

program
  .command('create <project> [other...]')
  .alias('crt')
  .description('创建项目')
  .action((project, args) => {
    console.log(project);
    console.log(args);
  })

program.parse(process.argv)

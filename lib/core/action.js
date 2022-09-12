const inquirer = require('inquirer');
const config = require('../../config')
const downloadFun = require('./download')

const myAction = async function (project, args) {

  const answer = await inquirer.prompt([{
    type: 'list',
    name: 'framwork',
    choices: config.framwork,
    message: '请选择你所使用的框架'
  }])

  downloadFun(config.framworkUrl[answer.framwork], project)
}

module.exports = myAction

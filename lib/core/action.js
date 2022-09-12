const inquirer = require('inquirer');
const config = require('../../config')
const myAction = function (project, args) {

  inquirer.prompt([{
    type: 'list',
    name: 'framwork',
    choices: config.framwork,
    message: '请选择你所使用的框架'
  }]).then(answer => {
    console.log(answer);
  })

}

module.exports = myAction

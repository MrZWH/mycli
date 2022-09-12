const download = require('download-git-repo')
const ora = require('ora')
const chalk = require('chalk')

const downloadFun = (url, project) => {
  const spinner = ora().start()
  spinner.text = '代码正在下载'
  download('direct:' + url, project, { clone: true }, (err) => {
    if (!err) {
      spinner.succeed('代码下载完成')
      console.log(chalk.blue.bold('Done!'), chalk.bold(' you can:'));
      console.log('cd' + project);
      console.log('npm install');
      console.log('npm run dev');
    } else {
      spinner.fail('代码下载失败!')
    }
  })
}

module.exports = downloadFun

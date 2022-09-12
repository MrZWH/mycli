const download = require('download-git-repo')

download('direct:https://gitee.com/MrZWH/mycli.git', './xxxx', { clone: true }, (err) => {
  console.log(err);
})

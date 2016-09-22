'use strict';

var yg = require('yeoman-generator');

module.exports = yg.Base.extend({

initializing: function () {
   this.props = {};
},

 prompting: function () {
    return this.prompt([{
      type    : 'input',
      name    : 'sitename',
      message : 'Your website name',
      default : 'newsite'
    },
    {
      type    : 'input',
      name    : 'username',
      message : 'Your user name',
      default : 'admin'
    }
    ]).then(function (answers) {
      this.props.sitename = answers.sitename;
      this.props.username = answers.username;
    }.bind(this));
  },

writing: function () {
    this.fs.copyTpl(
        this.templatePath('default.htm'),
        this.destinationPath(this.props.sitename + '/index.htm'), {
            username: this.props.username
        }
    );
}

});
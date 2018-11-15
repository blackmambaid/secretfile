'use strict'

//const insta = require('./func.js');
const Client = require('instagram-private-api').V1;
const delay = require('delay');
const chalk = require('chalk');
const inquirer = require('inquirer');
//const Spinner = require('cli-spinner').Spinner;

const questionTools = [
  {
    type:"list",
    name:"Tools",
    message:"Select tools:",
    choices:
      [
        "[1]  FFT",
        "[2]  Repost Media Target By Hashtag",
        "[3]  Repost Media Target By Link",
        "[4]  Repost Media Target By People",
        "[5]  Unfollow Not Followback",
        "[6]  Unfollow All",
        ""
      ]
  }
]

const main = async () => {
  var spinner;
  try{
    var toolChoise = await inquirer.prompt(questionTools);
    toolChoise = toolChoise.Tools;
    switch(toolChoise){
      case "[1]  FFT":
        const botlike = require('./ig.js');
        await botlike();
        break;

      case "[2]  Repost Media Target By Hashtag":
        const botlike2 = require('./hashtag.js');
        await botlike2();
        break;

      case "[3]  Repost Media Target By Link":
        const dellallphoto = require('./link.js');
        await dellallphoto();
        break;

      case "[4]  Repost Media Target By People":
        const unfollall = require('./people.js');
        await unfollall();
        break;

      case "[5]  Unfollow Not Followback":
        const unfollnotfollback = require('./unf.js');
        await unfollnotfollback();
        break;

      case "[6]  Unfollow All":
        const RMTLink = require('./unfollall.js');
        await RMTLink();
        break;
      default:
        console.log('\nERROR:\n[?] Aw, Snap! \n[!] Something went wrong while displaying this program!\n[!] Please try again!');
    }
  } catch(e) {
    //spinner.stop(true);
    //console.log(e);
  }
}

console.log(chalk`
  {bold.cyan
  ╦┌┐┌┌─┐┌┬┐┌─┐┌─┐┬─┐┌─┐┌┬┐
  ║│││└─┐ │ ├─┤│ ┬├┬┘├─┤│││
  ╩┘└┘└─┘ ┴ ┴ ┴└─┘┴└─┴ ┴┴ ┴
  ╔╦╗┌─┐┌─┐┬  ┌─┐    © 2018
   ║ │ ││ ││  └─┐   SGBTeam
   ╩ └─┘└─┘┴─┘└─┘   -------
}
      `);

main()

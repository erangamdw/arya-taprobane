module.exports = {
  apps : [{
    script: 'npm start',
  }],

  deploy : {
    production : {
      key:'arya.pem',
      user : 'ubuntu',
      host : '3.8.96.169',
      ref  : 'origin/main',
      repo : 'git@github.com:erangamdw/arya-taprobane.git',
      path : 'home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options':'ForwardAgent=yes'
    }
  }
};

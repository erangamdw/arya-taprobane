module.exports = {
  apps : [{
    script: 'npm start',
  }],

  deploy : {
    production : {
      key:'arya.pem',
      user : 'ubuntu',
      host : '13.42.113.181',
      ref  : 'origin/main',
      repo : 'https://github.com/erangamdw/arya-taprobane-travels.git',
      path : 'home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options':'ForwardAgent=yes'
    }
  }
};

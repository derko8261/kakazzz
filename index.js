    let reportedUser = message.guild.member(message.mentions.users.first() ||  message.guild.members.get(args[0]));
    if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply("❌ You do not have permissions to warns members. Please contact a staff member")
                .then(m => m.delete(5000));
        
        }
    if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
            return message.reply("❌ I do not have permissions to warns members. Please contact a staff member")
                .then(m => m.delete(5000));
  
    }
    
    if(!reportedUser) {
      return message.channel.send("L'utilisateur n'existe pas !")
    }
    let reportedReason = args.join(" ").slice(22);
    
    let reportEmbed = new Discord.RichEmbed()
    .setDescription('warns')
    .setColor('RANDOM')
    .addField("Utilisateur reporté", `${reportedUser} (ID: ${reportedUser.id})`)
    .addField("L'Utilisateur ayant reporté", `${message.author} (ID: ${message.author.id})`)
    .addField("Salon ayant reporté", message.channel)
    .addField("Raison", reportedReason);
    let reportChannel = message.guild.channels.find('name',"logs")
    if(!reportChannel) {
      return message.channel.send("Salon logs introuvable. veuillez créer ce salon 'logs'")
    }
   reportChannel.send(reportEmbed)
  }
  if (command === `${prefix}kick`) {
  message.delete()
    let kickedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
  
           // No author permissions
       

if (!message.member.hasPermission("KICK_MEMBERS")) {
            return message.reply("❌ You do not have permissions to kick members. Please contact a staff member")
                .then(m => m.delete(5000));
        
        }
        // No bot permissions
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
            return message.reply("❌ I do not have permissions to kick members. Please contact a staff member")
                .then(m => m.delete(5000));
    
  }
   if(!kickedUser) {
     return message.channel.send("L'utilisateur n'existe pas !")
   }
    let kickReason = args.join(" ").slice(22);
    
    let kickEmbed = new Discord.RichEmbed()
  }
  
  
})

bot.login(config.token)

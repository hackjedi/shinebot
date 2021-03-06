//
// Copyright (c) 2016 Cisco Systems
// Licensed under the MIT License 
//

/* 
 * a Cisco Spark webhook that leverages a simple library (batteries included)
 *
 */

var SparkBot = require("../sparkbot/webhook");

// Starts your Webhook with default configuration 
var bot = new SparkBot();
 
bot.onEvent("all", "all", function(trigger) {
  
    //
    // YOUR CODE HERE
    //
    console.log("EVENT: " + trigger.resource + "/" + trigger.event + ", with data id: " + trigger.data.id + ", triggered by person id:" + trigger.actorId);
  
});


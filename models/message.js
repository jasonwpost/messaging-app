var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./user');

var schema = new Schema({
  content: {type: String, required: true},
  user: {type: Schema.Types.ObjectId, ref: 'User'}
});

//post: happens after some action
// here: remove
schema.post('remove', function(message){
  User.findById(message.user, function(){
    user.messages.pull(message);
  });
});

module.exports = mongoose.model('message', schema);

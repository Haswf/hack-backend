const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
// Print mongodb query in log
mongoose.set('debug', false);

module.exports = mongoose;
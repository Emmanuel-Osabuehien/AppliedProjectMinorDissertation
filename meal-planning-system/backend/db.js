const mongoose = require('mongoose');

const uri = 'mongodb+srv://admin:Lt1FhR3OeX0xIU9M@cluster0.iemzw.mongodb.net/mealsApp?retryWrites=true&w=majority'

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
  console.log('Connected');
}).catch(error => console.log(error))
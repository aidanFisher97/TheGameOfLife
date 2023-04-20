const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gameOfLife');

const express = require('express');

// connect to the database
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));

const userSchema = new mongoose.Schema({

});

const User = new mongoose.model('User', userSchema);

const eventSchema = new mongoose.Schema({

});

const Event = new mongoose.model('Event', eventSchema);

module.exports.User = User;
module.exports.Event = Event;

// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Get values from .env
const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URL;

// then we do rest of the things


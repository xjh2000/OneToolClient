import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);


mock.onPost('/login').reply(200, { role: "admin" });
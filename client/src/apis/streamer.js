import axios from 'axios';

const streamer = axios.create({
  baseURL: 'http://localhost:3001'
});

export const createStream = stream => streamer.post('/streams', stream);

export const deleteStream = id => streamer.delete(`/streams/${id}`);

export const readStream = id => streamer.get(`/streams/${id}`);

export const readStreams = () => streamer.get('/streams');

export const updateStream = (id, updates) =>
  streamer.patch(`/streams/${id}`, updates);

import axios from "axios";

export default {
  user: {
    login: credentials =>
      axios.post('/api/auth', { credentials }).then(res => res.data.user),
    signup: user =>
      axios.post('/api/users', { user }).then(res => res.data.user),
     addChild: child =>
     	axios.post('/api/child', { child }).then(res => res.data.child)
  }
};
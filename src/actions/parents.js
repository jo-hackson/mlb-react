import api from '../api';

export const addChild = credentials => dispatch =>
	api.parent.addChild(credentials).then(child => {
		localStorage.child = { childName: child.name, startingBalance: child.startingBalance };
		dispatch(console.log("what is going on..."))
	});

// import api from '../api';
// import { userLoggedIn } from './auth';

// export const signup = data => dispatch => 
// 	api.user.signup(data).then(user => {
// 		localStorage.mlbJWT = user.token;
// 		dispatch(userLoggedIn(user));
// 	});



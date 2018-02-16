import React from 'react';

class GenderSalutation extends React.Component {


};

export default GenderSalutation;


function checkGender(gender) {
	if (gender === 'female') return <h2>Mrs.</h2>
	return <h2>Mr.</h2>
};

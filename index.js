const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('i1ZEiFaPQC', uuidlib.v4());
	}

module.exports = generateId

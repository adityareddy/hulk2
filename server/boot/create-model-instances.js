module.exports = function(app) {
	app.models.user.create([{
		email: 'admin@projects.com',
		password: 'opensesame',
		balance: 100000,
		role: 1
	}], function(err, users) {
		if (err) throw err;

		//create the admin role
		app.models.Role.create({
			name: 'admin'
		}, function(err, role) {
			if (err) throw (err);

			//make bob an admin
			role.principals.create({
				principalType: app.models.RoleMapping.USER,
				principalId: users[0].id
			}, function(err, principal) {
				if (err) throw (err);
			});
		});

		app.models.Role.create([{
			name: 'zpb'
		}, {
			name: 'md'
		}, {
			name: 'ad'
		}, {
			name: 'retailer'
		}]);

	});

};
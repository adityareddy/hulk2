var loopback = require('loopback');

module.exports = function(User) {
	User.afterCreate = function(next) {
		if (this.parentId !== undefined && this.parentId !== null) {
			this.balance = 0;
			var test = User.app.models.RoleMapping.find({
				"where": {
					"id": this.parentId
				}
			}, function(err, role) {
				if (err) throw err;
				this.role = role[0].roleId + 1;
				this.save();
				User.app.models.RoleMapping.create({
					"id": this.id,
					"principalType": "USER",
					"principalId": this.id.toString(),
					"roleId": role[0].roleId + 1
				});
			}.bind(this));
		}
		next();
	};

	//transferAmount
	User.transferAmount = function(payeeId, amount, cb) {
		var payerId = loopback.getCurrentContext().get('accessToken').userId;
		if (!amount || amount <= 0 || amount === null) return cb("invalid", false);
		User.findById(payerId, function(err, payer) {
			if (err) return cb(err);
			if (payer.balance < amount) return cb("Not sufficient balance", false);
			User.findById(payeeId, function(err, payee) {
				payer.balance -= amount;
				payee.balance += amount;
				payer.save();
				payee.save();
				cb(null, true);
			});
		});

	};
	User.remoteMethod('transferAmount', {
		accepts: [{
			arg: 'id',
			type: 'number'
		}, {
			arg: 'amount',
			type: 'number'
		}, ],
		returns: {
			arg: 'success',
			type: 'boolean'
		},
		http: {
			path: '/transferAmount',
			verb: 'post'
		}
	});
};
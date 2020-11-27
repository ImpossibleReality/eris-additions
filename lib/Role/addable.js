module.exports = Eris => {
	Object.defineProperty(Eris.Role.prototype, "addable", {
		get: function() {
			const clientMember = this.guild.members.get(this.guild.shard.client.user.id);
			return clientMember.permission.has("manageRoles") && clientMember.highestRole.higherThan(this);
		},
        configurable: true
	});
};

module.exports.deps = ["Member.highestRole", "Role.higherThan"];

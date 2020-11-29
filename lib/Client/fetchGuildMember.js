module.exports = Eris => {
	Eris.Client.prototype.fetchGuildMember = function(guildId, memberId) {
		return this.requestHandler.request("GET", Endpoints.GUILD_MEMBER(guildID, memberID), true).then((member) => new Eris.Member(member, null));
	};
};

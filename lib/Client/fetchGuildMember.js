let Endpoints = require("eris/lib/rest/Endpoints");
module.exports = Eris => {
	Eris.Client.prototype.fetchGuildMember = function(guildId, memberId) {
		return this.requestHandler.request("GET", Endpoints.GUILD_MEMBER(guildId, memberId), true).then((member) => new Eris.Member(member, null));
	};
};

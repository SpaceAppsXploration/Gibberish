define([], function() {
    return {
		init: function(gibberish) {			
			gibberish.generators.Clip = gibberish.createGenerator("Clip", ["source", "amount", "amp"], "{0}({1},{2}) * {3}");
			gibberish.make["Clip"] = this.makeClip;
			gibberish.Clip = this.Clip;
		},
		
		Clip : function(amount, amp) {
			var that = {
				type:		"Clip",
				category:	"FX",
				amount:		amount,
				amp:		amp,
				source:		null,
				mod: 		Gibberish.mod,
				mods:		[],
				removeMod:	Gibberish.removeMod,		
			}
			
			Gibberish.defineProperties( that, ["amount", "amp"] );
	
			return that;
		},

		makeClip : function() {
			var abs = Math.abs;
			var log = Math.log;
			var ln2 = Math.LN2;
			var output = function(sample, amount) {
				var x = sample * amount;
				return (x / (1 + abs(x))) / (log(amount) / ln2); //TODO: get rid of log / divide
			};
			return output;
		},
    }
});
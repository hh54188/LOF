define([
	"gestures/BaseGesture",
	"validate_flow/NativeFlow"], function (BaseGesture, NativeFlow) {
   	
   	function ScreenTapsGesture () {
   		this.validateFlow = new this.ValidateFlowConstructor(this);
   	}

   	ScreenTapsGesture.prototype =  Object.create(BaseGesture.prototype, {

   		ValidateFlowConstructor: {
			value: NativeFlow
		},

		validate: {
			value: function (frame) {

			}
		}
   	});

   	return ScreenTapsGesture;
});
/*
	跟随手势：
	一旦识别成功，及触发手势

 */
define (["./BaseFlow"], function (BaseFlow) {

	function FollowedFlow (gesture) {

		this.MAX_FRAME_NUM = 15;

		this.gesture = gesture;

		this.isRecognitionStarted = false;
	}

	FollowedFlow.prototype = Object.create(BaseFlow.prototype, {

		reset: {
			value: function () {

				this.isRecognitionStarted = false;
				this.frameQueue.length = 0;
				this.gesture.reset();
			}
		},

		validate: {
			value: function (frame) {
				
				var gesture = this.gesture;
				this.frameQueue.push(frame);

				if (!this.isRecognitionStarted) {

					if (gesture.validateGestureStart(frame)) {
						this.isRecognitionStarted = true;
						this.currentFrameCount = 1;
					} else {
						this.reset();
					}

				} else {

					this.currentFrameCount++;

					if (this.currentFrameCount == this.MAX_FRAME_NUM) {

						var frameData = cloneArray(this.frameQueue);
						this.reset();

						if (gesture.validateGestureEnd(frame)) {
							return frameData;
						}
					}

					
					if (!gesture.validateGestureOnMove(frame) || 
						!gesture.validateGestureBasicCondition(frame)) {

						this.reset();
					}
				}

				return false;
			}
		}
	});

	return FollowedFlow;
});
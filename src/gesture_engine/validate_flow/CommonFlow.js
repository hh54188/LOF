define (["./BaseFlow"], function (BaseFlow) {

	function cloneArray (frames) {
		var result = [];
		frames.forEach(function (frame) {
			result.push(frame);
		});

		return result;
	}

	function CommonFlow (gesture, followEachFrame) {

		this.MAX_FRAME_NUM = 15;

		this.gesture = gesture;
		this.currentFrameCount = 0;
		this.frameQueue = [];

		this.isRecognitionStarted = false;
		// 用于单帧手势情况，比如图片更随手势移动
		this.followEachFrame = followEachFrame || false;
	}

	CommonFlow.prototype = Object.create(BaseFlow.prototype, {

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
						if (this.followEachFrame) {
							return true;
						}

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

	return CommonFlow;
});
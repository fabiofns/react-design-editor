import { fabric } from 'fabric';
import 'gifler';

const Gif = fabric.util.createClass(fabric.Object, {
	type: 'gif',
	superType: 'image',
	gifCanvas: null,
	isStarted: false,
	initialize(options: any) {
		options = options || {};
		this.callSuper('initialize', options);
		this.gifCanvas = document.createElement('canvas');
	},
	drawFrame(ctx: CanvasRenderingContext2D, frame: any) {
		
		this.gifCanvas.width = frame.width;
		this.gifCanvas.height = frame.height;

		ctx.drawImage(frame.buffer, -frame.width / 2, -frame.height / 2, frame.width, frame.height);
	},
	_render(ctx: CanvasRenderingContext2D) {
		this.callSuper('_render', ctx);
		if (!this.isStarted) {

			console.log('teste gif');

			this.isStarted = true;
			window
				// @ts-ignore
				.gifler(this.src)
				.frames(this.gifCanvas, (_c: CanvasRenderingContext2D, frame: any) => {
					this.isStarted = true;
					this.drawFrame(ctx, frame);
				});
		}
	},
});

Gif.fromObject = (options: any, callback: (obj: any) => any) => {
	return callback(new Gif(options));
};

// @ts-ignore
window.fabric.Gif = Gif;

export default Gif;

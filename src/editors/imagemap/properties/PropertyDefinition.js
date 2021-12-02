import MarkerProperty from './MarkerProperty';
import GeneralProperty from './GeneralProperty';
import StyleProperty from './StyleProperty';
import TooltipProperty from './TooltipProperty';
import ImageProperty from './ImageProperty';
import TextProperty from './TextProperty';
import MapProperty from './MapProperty';
import LinkProperty from './LinkProperty';
import VideoProperty from './VideoProperty';
import ElementProperty from './ElementProperty';
import IframeProperty from './IframeProperty';
import AnimationProperty from './AnimationProperty';
import ShadowProperty from './ShadowProperty';
import UserProperty from './UserProperty';
import TriggerProperty from './TriggerProperty';
import ImageFilterProperty from './ImageFilterProperty';
import ChartProperty from './ChartProperty';

export default {
	map: {
		map: {
			title: 'Map',
			component: MapProperty,
		},
		image: {
			title: 'Image',
			component: ImageProperty,
		},
	},
	group: {
		general: {
			title: 'General',
			component: GeneralProperty,
		},
		shadow: {
			title: 'Shadow',
			component: ShadowProperty,
		},
	},
	'i-text': {
		general: {
			title: 'General',
			component: GeneralProperty,
		},
		marker: {
			title: 'Marker',
			component: MarkerProperty,
		},
		link: {
			title: 'Link',
			component: LinkProperty,
		},
		tooltip: {
			title: 'Tooltip',
			component: TooltipProperty,
		},
		style: {
			title: 'Style',
			component: StyleProperty,
		},
		shadow: {
			title: 'Shadow',
			component: ShadowProperty,
		},
		animation: {
			title: 'Animation',
			component: AnimationProperty,
		},
		
	},
	textbox: {
		general: {
			title: 'General',
			component: GeneralProperty,
		},
		text: {
			title: 'Text',
			component: TextProperty,
		},
		link: {
			title: 'Link',
			component: LinkProperty,
		},
		tooltip: {
			title: 'Tooltip',
			component: TooltipProperty,
		},
		style: {
			title: 'Style',
			component: StyleProperty,
		},
		shadow: {
			title: 'Shadow',
			component: ShadowProperty,
		},
		animation: {
			title: 'Animation',
			component: AnimationProperty,
		},		
	},
	image: {
		general: {
			title: 'General',
			component: GeneralProperty,
		},
		image: {
			title: 'Image',
			component: ImageProperty,
		},
		filter: {
			title: 'Filter',
			component: ImageFilterProperty,
		},
		link: {
			title: 'Link',
			component: LinkProperty,
		},
		tooltip: {
			title: 'Tooltip',
			component: TooltipProperty,
		},
		style: {
			title: 'Style',
			component: StyleProperty,
		},
		shadow: {
			title: 'Shadow',
			component: ShadowProperty,
		},
		animation: {
			title: 'Animation',
			component: AnimationProperty,
		},
	
	},
	triangle: {
		general: {
			title: 'General',
			component: GeneralProperty,
		},
		link: {
			title: 'Link',
			component: LinkProperty,
		},
		tooltip: {
			title: 'Tooltip',
			component: TooltipProperty,
		},
		style: {
			title: 'Style',
			component: StyleProperty,
		},
		shadow: {
			title: 'Shadow',
			component: ShadowProperty,
		},
		animation: {
			title: 'Animation',
			component: AnimationProperty,
		},
		
	},
	rect: {
		general: {
			title: 'General',
			component: GeneralProperty,
		},
		link: {
			title: 'Link',
			component: LinkProperty,
		},
		tooltip: {
			title: 'Tooltip',
			component: TooltipProperty,
		},
		style: {
			title: 'Style',
			component: StyleProperty,
		},
		shadow: {
			title: 'Shadow',
			component: ShadowProperty,
		},
		animation: {
			title: 'Animation',
			component: AnimationProperty,
		},
		
	},
	circle: {
		general: {
			title: 'General',
			component: GeneralProperty,
		},
		link: {
			title: 'Link',
			component: LinkProperty,
		},
		tooltip: {
			title: 'Tooltip',
			component: TooltipProperty,
		},
		style: {
			title: 'Style',
			component: StyleProperty,
		},
		shadow: {
			title: 'Shadow',
			component: ShadowProperty,
		},
		animation: {
			title: 'Animation',
			component: AnimationProperty,
		},
		
	},
	polygon: {
		general: {
			title: 'General',
			component: GeneralProperty,
		},
		link: {
			title: 'Link',
			component: LinkProperty,
		},
		tooltip: {
			title: 'Tooltip',
			component: TooltipProperty,
		},
		style: {
			title: 'Style',
			component: StyleProperty,
		},
		shadow: {
			title: 'Shadow',
			component: ShadowProperty,
		},
		animation: {
			title: 'Animation',
			component: AnimationProperty,
		},
		
	},
	line: {
		general: {
			title: 'General',
			component: GeneralProperty,
		},
		link: {
			title: 'Link',
			component: LinkProperty,
		},
		tooltip: {
			title: 'Tooltip',
			component: TooltipProperty,
		},
		style: {
			title: 'Style',
			component: StyleProperty,
		},
		shadow: {
			title: 'Shadow',
			component: ShadowProperty,
		},
		animation: {
			title: 'Animation',
			component: AnimationProperty,
		},		
	},
	arrow: {
		general: {
			title: 'General',
			component: GeneralProperty,
		},
		link: {
			title: 'Link',
			component: LinkProperty,
		},
		tooltip: {
			title: 'Tooltip',
			component: TooltipProperty,
		},
		style: {
			title: 'Style',
			component: StyleProperty,
		},
		shadow: {
			title: 'Shadow',
			component: ShadowProperty,
		},
		animation: {
			title: 'Animation',
			component: AnimationProperty,
		},
	},
	video: {
		general: {
			title: 'General',
			component: GeneralProperty,
		},
		video: {
			title: 'Video',
			component: VideoProperty,
		},
	},
	element: {
		general: {
			title: 'General',
			component: GeneralProperty,
		},
		video: {
			title: 'Element',
			component: ElementProperty,
		},
	},
	iframe: {
		general: {
			title: 'General',
			component: GeneralProperty,
		},
		video: {
			title: 'Iframe',
			component: IframeProperty,
		},
	},
	svg: {
		general: {
			title: 'General',
			component: GeneralProperty,
		},
		link: {
			title: 'Link',
			component: LinkProperty,
		},
		tooltip: {
			title: 'Tooltip',
			component: TooltipProperty,
		},
		style: {
			title: 'Style',
			component: StyleProperty,
		},
		shadow: {
			title: 'Shadow',
			component: ShadowProperty,
		},
		animation: {
			title: 'Animation',
			component: AnimationProperty,
		},
	},
	chart: {
		general: {
			title: 'General',
			component: GeneralProperty,
		},
		chartOption: {
			title: 'Chart Option',
			component: ChartProperty,
		},
	},
};
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '../ui/resizable';

const ResizebleTabContent = () => {
	return (
		<ResizablePanelGroup direction="horizontal">
			<ResizablePanel>One</ResizablePanel>
			<ResizableHandle />
			<ResizablePanel>Two</ResizablePanel>
		</ResizablePanelGroup>
	);
};

export default ResizebleTabContent;

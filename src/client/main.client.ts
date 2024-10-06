import { Workspace } from "@rbxts/services";

const partsFolder = Workspace.WaitForChild("PartsFolder") as Folder;

const parts = new Array<Part>();

partsFolder.ChildAdded.Connect((child) => {
	if (child.IsA("Part")) {
		const part = child as Part;
		parts.push(part);
		initializePart(part);
	}
});

function initializePart(part: Part) {
	part.Touched.Connect((otherPart) => {
		print(`Touched: ${otherPart.Name}`);
	});
}

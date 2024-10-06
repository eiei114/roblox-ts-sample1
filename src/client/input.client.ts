const Player = game.GetService("Players").LocalPlayer;
const UserInputService = game.GetService("UserInputService");

function HandleInput(input: InputObject, userid: number) {
	if (input.KeyCode === Enum.KeyCode.E) {
		print("E Key Pressed");
		return true;
	}

	return false;
}

UserInputService.InputBegan.Connect((input) => HandleInput(input, Player.UserId));

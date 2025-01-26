class POST {
	getInfo() {
		return {
			id: "post",
			name: "POST",
			blocks: [
				{
					opcode: "post_data"
					blockType: Scratch.BlockType.COMMAND,
					text: "POST [DATA] to [URL]",
					arguments: {
						DATA: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: "Example"
						},
						URL: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: "https://httpbin.org/post"
						}
					}
				}
			]
		};
	}

	post_data({DATA, URL}) {
		
	}
}

Scratch.extensions.register(new POST());

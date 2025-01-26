class GithubCloud {
	getInfo() {
		return {
			id: "githubCloud",
			name: "Github Cloud",
			blocks: [
				{
					opcode: "setcloud",
					blockType: Scratch.BlockType.COMMAND,
					text: "Set Cloud to [INPUT]",
					arguments: {
						INPUT: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: "Example"
						}
					}
				}
			]
		};
	}

	setcloud({INPUT}) {
		const apiToken = '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';
		const repoOwner = 'ashmitiscodingpython';
		const repoName = 'rccarcontrol';
		const filePath = 'cloud.txt';
		const url = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`;
		const headers = {
			'Authorization': `Bearer ${apiToken}`
		};
		try {
			const response = await fetch(url, { headers });
			const data = await response.json();
			const fileSHA = data.sha;
			return fileSHA;
		} catch (error) {
			return 'error';
		}
	}
}

Scratch.extensions.register(new GithubCloud());

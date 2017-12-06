module.exports = {
	contentObject: [
		{
			type: 'body',
			attributes: {
				style: 'padding: 1rem',
			},
			content: [
				{
					type: 'div',
					attributes: {
						class: 'first-div',
					},
					content: [
						{
							type: 'span',
							attributes: {
								class: 'button',
								style: 'padding: 5px;background-color: #eee;',
							},
							content: 'A Button Span Deluxe',
						},
					],
				},
				{
					type: 'table',
					content: [
						{
							type: 'td',
							attributes: {
								id: 'first',
								class: 'button',
							},
							content: 'I am in a table!',
						},
						{
							type: 'td',
							content: 'I am in a table too!',
						},
					],
				},
			],
		},
	],
	singleElement: {
		type: 'div',
		attributes: {
			class: 'some-class',
		},
		content: 'Single div',
	},
};

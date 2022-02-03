const Render = async (response, request, view, data) => {
	if (!data) {
		data = {};
	}

	const BaseData = {
		path: request.path
	};

	response.status(200).render(view, Object.assign(BaseData, data));
};

module.exports = Render;

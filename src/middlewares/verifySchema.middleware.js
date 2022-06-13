const schemaValidationMiddleware = (schema) => async (request, response, next) => {
    try {
        const validated = await schema.validate(request.body);
        request.body = validated;
        next();
    } catch (error) {
        return response.status(400).json({
            message: error.errors.join(", "),
        });
    }
};
export default schemaValidationMiddleware;
export const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "portfolio's backend api documetation",
            version: "1.0.0",
            description: "documentation for backend of portfolio website"
        },
        },
        servers: [
            {
                url: "http://localhost:3000"
            }

        ],
        apis: ["./src/api/routes/*.ts"]

}
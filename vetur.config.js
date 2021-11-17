/** @type {import("vls").VeturConfig} */
module.exports = {
    settings: {
        "vetur.useWorkspaceDependencies": true
    },
    projects: [
        "./galaxy-explorer",
        {
            root: "./galaxy-explorer",
            package: "./package.json",
            tsconfig: "./tsconfig.json",
            globalComponents: [
                "./src/components/**/*.vue"
            ]
        }
    ]
}
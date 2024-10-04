exports.handler = async (event, context) => {
    // Parse query parameters for 'app' and 'version'
    const appName = event.queryStringParameters.app;
    const appVersion = event.queryStringParameters.version;

    // Check if both appName and appVersion are provided
    if (!appName || !appVersion) {
        return {
            statusCode: 400,
            body: 'Please provide both an app name and version using ?app=appname&version=version',
        };
    }

    // Base URL structure (same for all apps)
    const baseUrl = 'https://stickx.top/extension/';

    // Construct full download link with app name and version
    const downloadLink = `${baseUrl}${appName}${appVersion}.apk`;

    // Respond with redirect to the constructed link
    return {
        statusCode: 302, // Redirect to the download link
        headers: {
            Location: downloadLink,
        },
    };
};

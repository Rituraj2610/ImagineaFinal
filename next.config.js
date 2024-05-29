const nextConfig = {
    webpack: (config) => {
        config.externals.push({
            "utf-8-validate": "commonjs utf-8-validate",
            bufferutil: "commonjs bufferutil" // corrected typo from "butterutil" to "bufferutil"
        });
        return config;
    },
    images: {
        domains: [
            "uploadthing.com",
            "utfs.io" // add this line
        ]
    }
}

module.exports = nextConfig;

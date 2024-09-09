const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.modules.rules.push({test: /\.ext$/, use: ['my-loader-example']})
    return config;
  }
}
module.exports = {
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  webpack: config => {
    config.resolve.fallback = { ...config.resolve.fallback, fs: false, path: false };

    return config
  }
}


/**
 * Metro configuration for pnpm monorepo with NativeWind.
 *
 * This config resolves workspace packages correctly
 * by pointing Metro to the monorepo root for node_modules
 * and watching workspace package directories.
 */

const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

const projectRoot = __dirname;
const monorepoRoot = path.resolve(projectRoot, '../..');

const config = getDefaultConfig(projectRoot);

// 1. Watch all files in the monorepo
config.watchFolders = [monorepoRoot];

// 2. Let Metro resolve packages from the monorepo root node_modules
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(monorepoRoot, 'node_modules'),
];

// 3. Force resolution of key packages to the mobile app's versions
config.resolver.disableHierarchicalLookup = false;

module.exports = withNativeWind(config, { input: './global.css', inlineRem: 16 });

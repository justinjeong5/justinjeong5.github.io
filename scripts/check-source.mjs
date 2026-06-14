import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { build, transformWithOxc } from 'vite';

const rootDir = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const sourceRoots = ['src', 'scripts'];
const sourceExtensions = new Set(['.js', '.jsx', '.mjs']);
const ignoredDirectories = new Set(['.git', 'dist', 'dist-ssr', 'node_modules']);

export function modeFromArgs(args) {
  const modeIndex = args.indexOf('--mode');
  const requestedMode = modeIndex === -1 ? 'lint' : args[modeIndex + 1];
  return requestedMode === 'typecheck' ? 'typecheck' : 'lint';
}

export async function collectSourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      if (!ignoredDirectories.has(entry.name)) {
        files.push(...(await collectSourceFiles(entryPath)));
      }
      continue;
    }

    if (entry.isFile() && sourceExtensions.has(path.extname(entry.name))) {
      files.push(entryPath);
    }
  }

  return files;
}

function langFor(filePath) {
  return path.extname(filePath) === '.jsx' ? 'jsx' : 'js';
}

export async function checkSyntaxSource(source, filePath) {
  await transformWithOxc(source, filePath, {
    lang: langFor(filePath),
  });
}

async function checkSyntax(filePath) {
  const source = await readFile(filePath, 'utf8');
  await checkSyntaxSource(source, filePath);
}

export function hasDecorativeGardenCopy(source) {
  return /🌱\s*→\s*🌿\s*→\s*🌳|→\s+→\s*\./u.test(source);
}

async function checkAccessibleCopy(checkRootDir) {
  const homePage = await readFile(path.join(checkRootDir, 'src/pages/HomePage.jsx'), 'utf8');

  if (hasDecorativeGardenCopy(homePage)) {
    throw new Error('HomePage Digital garden copy exposes decorative arrow placeholders.');
  }
}

async function checkViteModuleGraph(checkRootDir) {
  const commonOptions = {
    root: checkRootDir,
    logLevel: 'silent',
    build: {
      emptyOutDir: false,
      write: false,
    },
  };

  await build(commonOptions);
  await build({
    ...commonOptions,
    build: {
      ...commonOptions.build,
      ssr: path.join(checkRootDir, 'src/entry-server.jsx'),
    },
  });
}

export async function runSourceCheck({ checkRootDir = rootDir, mode = 'lint' } = {}) {
  const failures = [];
  const sourceFiles = (
    await Promise.all(sourceRoots.map((dir) => collectSourceFiles(path.join(checkRootDir, dir))))
  ).flat();

  for (const filePath of sourceFiles) {
    try {
      await checkSyntax(filePath);
    } catch (error) {
      failures.push(`${path.relative(checkRootDir, filePath)}: ${error.message}`);
    }
  }

  try {
    await checkAccessibleCopy(checkRootDir);
  } catch (error) {
    failures.push(`src/pages/HomePage.jsx: ${error.message}`);
  }

  if (mode === 'typecheck') {
    try {
      await checkViteModuleGraph(checkRootDir);
    } catch (error) {
      failures.push(`vite module graph: ${error.message}`);
    }
  }

  return { failures, sourceFiles };
}

async function main() {
  const mode = modeFromArgs(process.argv.slice(2));
  const { failures, sourceFiles } = await runSourceCheck({ mode });
  const label = mode === 'typecheck' ? 'typecheck (Vite module graph)' : 'lint';

  if (failures.length > 0) {
    console.error(`Source ${label} failed:`);
    for (const failure of failures) {
      console.error(`- ${failure}`);
    }
    process.exit(1);
  }

  console.log(`Source ${label} passed for ${sourceFiles.length} files.`);
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

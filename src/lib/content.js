import usesData from '../content/uses.json';
import nowData from '../content/now.json';
import readingData from '../content/reading.json';
import cvData from '../content/cv.json';
import aboutData from '../content/about.json';
import siteData from '../content/site.json';

const caseModules = import.meta.glob('../content/cases/*.mdx', { eager: true });
const noteModules = import.meta.glob('../content/notes/*.mdx', { eager: true });
const essayModules = import.meta.glob('../content/essays/*.mdx', { eager: true });
const logModules = import.meta.glob('../content/logs/*.mdx', { eager: true });

function extractSlug(path) {
  const match = path.match(/\/([^/]+)\.mdx$/);
  return match ? match[1] : '';
}

function pickDate(entry) {
  return entry.lastTendedAt || entry.plantedAt || entry.date || '';
}

function toEntries(modules) {
  return Object.entries(modules)
    .map(([path, mod]) => ({
      slug: extractSlug(path),
      ...(mod.frontmatter || {}),
      Component: mod.default,
    }))
    .sort((a, b) => pickDate(b).localeCompare(pickDate(a)));
}

export const getAllCases = () => toEntries(caseModules);
export const getCase = (slug) => getAllCases().find((entry) => entry.slug === slug);

export const getAllNotes = () => toEntries(noteModules);
export const getNote = (slug) => getAllNotes().find((entry) => entry.slug === slug);

export const getAllEssays = () => toEntries(essayModules);
export const getEssay = (slug) => getAllEssays().find((entry) => entry.slug === slug);

export const getAllLogs = () => toEntries(logModules);

export { usesData, nowData, readingData, cvData, aboutData, siteData };

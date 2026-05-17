/**
 * Busca dados de carreira no Firestore.
 * Retorna null se Firebase não estiver configurado ou em caso de erro
 * (para o hook usar fallback estático).
 */

import {
  collection,
  getDocs,
  query,
  orderBy,
  type DocumentData,
  type QuerySnapshot,
} from 'firebase/firestore';
import { getFirebaseFirestore, isFirebaseConfigured } from '@/lib/firebase';
import type {
  ExperienceItem,
  EducationItem,
  ProjectItem,
  LocalizedText,
  LocalizedTextArray,
} from '@/types/career';

const COLLECTIONS = {
  experiences: 'experiences',
  education: 'education',
  projects: 'projects',
} as const;

function docToExperience(doc: DocumentData, id: string): ExperienceItem {
  const d = doc as Record<string, unknown>;
  return {
    id,
    order: (d.order as number) ?? 0,
    title: (d.title as LocalizedText) ?? { pt: '', en: '' },
    role: (d.role as LocalizedText) ?? { pt: '', en: '' },
    description: (d.description as LocalizedTextArray) ?? { pt: [], en: [] },
    date: (d.date as LocalizedText) ?? { pt: '', en: '' },
    logoKey: (d.logoKey as string) ?? '',
    linkedinUrl: (d.linkedinUrl as string) ?? '',
    techKeys: Array.isArray(d.techKeys) ? (d.techKeys as string[]) : [],
  };
}

function docToEducation(doc: DocumentData, id: string): EducationItem {
  const d = doc as Record<string, unknown>;
  const item: EducationItem = {
    id,
    order: (d.order as number) ?? 0,
    title: (d.title as LocalizedText) ?? { pt: '', en: '' },
    role: (d.role as LocalizedText) ?? { pt: '', en: '' },
    description: (d.description as LocalizedTextArray) ?? { pt: [], en: [] },
    date: (d.date as LocalizedText) ?? { pt: '', en: '' },
    logoKey: (d.logoKey as string) ?? '',
    linkedinUrl: (d.linkedinUrl as string) ?? '',
  };
  if (d.descriptionLinks && Array.isArray(d.descriptionLinks)) {
    item.descriptionLinks = (d.descriptionLinks as { index: number; href: string; label: LocalizedText }[]).map(
      (link) => ({
        index: link.index,
        href: link.href,
        label: link.label ?? { pt: '', en: '' },
      })
    );
  }
  return item;
}

function docToProject(doc: DocumentData, id: string): ProjectItem {
  const d = doc as Record<string, unknown>;
  const item: ProjectItem = {
    id,
    order: (d.order as number) ?? 0,
    title: (d.title as LocalizedText) ?? { pt: '', en: '' },
    description: (d.description as LocalizedText) ?? { pt: '', en: '' },
    githubLink: (d.githubLink as string) ?? '',
    bgImage: (d.bgImage as string) ?? '',
    videoUrl: (d.videoUrl as string) ?? '',
  };
  if (d.subtitle) item.subtitle = d.subtitle as LocalizedText;
  if (typeof d.featured === 'boolean') item.featured = d.featured;
  if (d.highlights) item.highlights = d.highlights as LocalizedTextArray;
  if (typeof d.liveUrl === 'string' && d.liveUrl.trim()) item.liveUrl = d.liveUrl.trim();
  return item;
}

export interface CareerDataFromFirebase {
  experiences: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
}

export async function fetchCareerFromFirebase(): Promise<CareerDataFromFirebase | null> {
  if (!isFirebaseConfigured()) return null;
  const db = getFirebaseFirestore();
  if (!db) return null;

  try {
    const [expSnap, eduSnap, projSnap] = await Promise.all([
      getDocs(query(collection(db, COLLECTIONS.experiences), orderBy('order', 'asc'))),
      getDocs(query(collection(db, COLLECTIONS.education), orderBy('order', 'asc'))),
      getDocs(query(collection(db, COLLECTIONS.projects), orderBy('order', 'asc'))),
    ]);

    const experiences = (expSnap as QuerySnapshot<DocumentData>).docs.map((doc) =>
      docToExperience(doc.data(), doc.id)
    );
    const education = (eduSnap as QuerySnapshot<DocumentData>).docs.map((doc) =>
      docToEducation(doc.data(), doc.id)
    );
    const projects = (projSnap as QuerySnapshot<DocumentData>).docs.map((doc) =>
      docToProject(doc.data(), doc.id)
    );

    return { experiences, education, projects };
  } catch {
    return null;
  }
}

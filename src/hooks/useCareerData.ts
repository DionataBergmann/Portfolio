
import { useMemo, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  staticExperiences,
  staticEducation,
  staticProjects,
} from '@/data/staticCareerData';
import { fetchCareerFromFirebase } from '@/services/firestoreCareer';
import type {
  ExperienceItemResolved,
  EducationItemResolved,
  ProjectItemResolved,
  Locale,
} from '@/types/career';
import type {
  ExperienceItem,
  EducationItem,
  ProjectItem,
  LocalizedText,
  LocalizedTextArray,
} from '@/types/career';

function pickLocalized(primary: LocalizedText | undefined, fallback: LocalizedText): LocalizedText {
  return {
    pt: primary?.pt?.trim() || fallback.pt,
    en: primary?.en?.trim() || fallback.en,
  };
}

function pickLocalizedArray(
  primary: LocalizedTextArray | undefined,
  fallback: LocalizedTextArray
): LocalizedTextArray {
  return {
    pt: primary?.pt?.length ? primary.pt : fallback.pt,
    en: primary?.en?.length ? primary.en : fallback.en,
  };
}

/** Lista do static = fonte da verdade (ordem e ids). Firestore só preenche lacunas. */
function mergeFromStatic<T extends { id: string }>(
  firebase: T[],
  staticItems: T[],
  mergeItem: (fb: T, st: T) => T
): T[] {
  const firebaseById = new Map(firebase.map((item) => [item.id, item]));
  return staticItems.map((st) => {
    const fb = firebaseById.get(st.id);
    return fb ? mergeItem(fb, st) : st;
  });
}

function mergeExperiences(firebase: ExperienceItem[], staticItems: ExperienceItem[]): ExperienceItem[] {
  return mergeFromStatic(firebase, staticItems, (fb, st) => ({
    ...st,
    ...fb,
    order: st.order,
    title: pickLocalized(fb.title, st.title),
    role: pickLocalized(fb.role, st.role),
    date: pickLocalized(fb.date, st.date),
    description: pickLocalizedArray(fb.description, st.description),
    techKeys: fb.techKeys?.length ? fb.techKeys : st.techKeys,
    logoKey: fb.logoKey || st.logoKey,
    linkedinUrl: fb.linkedinUrl || st.linkedinUrl,
  }));
}

function mergeEducation(firebase: EducationItem[], staticItems: EducationItem[]): EducationItem[] {
  return mergeFromStatic(firebase, staticItems, (fb, st) => ({
    ...st,
    ...fb,
    order: st.order,
    title: pickLocalized(fb.title, st.title),
    role: pickLocalized(fb.role, st.role),
    date: pickLocalized(fb.date, st.date),
    description: pickLocalizedArray(fb.description, st.description),
    descriptionLinks: fb.descriptionLinks?.length ? fb.descriptionLinks : st.descriptionLinks,
    logoKey: fb.logoKey || st.logoKey,
    linkedinUrl: fb.linkedinUrl ?? st.linkedinUrl,
  }));
}

function mergeProjects(firebase: ProjectItem[], staticItems: ProjectItem[]): ProjectItem[] {
  return mergeFromStatic(firebase, staticItems, (fb, st) => ({
    ...st,
    ...fb,
    order: st.order,
    title: pickLocalized(fb.title, st.title),
    subtitle: st.subtitle
      ? pickLocalized(fb.subtitle ?? st.subtitle, st.subtitle)
      : fb.subtitle,
    description: pickLocalized(fb.description, st.description),
      highlights: st.highlights ?? fb.highlights,
      featured: st.featured ?? fb.featured,
      liveUrl: fb.liveUrl?.trim() || st.liveUrl,
    }));
}

function getLocale(i18nLanguage: string): Locale {
  return i18nLanguage.startsWith('pt') ? 'pt' : 'en';
}

function resolveExperiences(items: ExperienceItem[], locale: Locale): ExperienceItemResolved[] {
  return items
    .sort((a, b) => a.order - b.order)
    .map((item) => ({
      id: item.id,
      order: item.order,
      title: item.title[locale],
      role: item.role[locale],
      description: item.description[locale],
      date: item.date[locale],
      logoKey: item.logoKey,
      linkedinUrl: item.linkedinUrl,
      techKeys: item.techKeys,
    }));
}

function resolveEducation(items: EducationItem[], locale: Locale): EducationItemResolved[] {
  return items
    .sort((a, b) => a.order - b.order)
    .map((item) => ({
      id: item.id,
      order: item.order,
      title: item.title[locale],
      role: item.role[locale],
      description: item.description[locale],
      date: item.date[locale],
      logoKey: item.logoKey,
      linkedinUrl: item.linkedinUrl,
      descriptionLinks: item.descriptionLinks?.map((link) => ({
        index: link.index,
        href: link.href,
        label: link.label[locale],
      })),
    }));
}

function resolveProjects(items: ProjectItem[], locale: Locale): ProjectItemResolved[] {
  return items
    .sort((a, b) => a.order - b.order)
    .map((item) => ({
      id: item.id,
      order: item.order,
      title: item.title[locale],
      subtitle: item.subtitle?.[locale],
      description: item.description[locale],
      featured: item.featured ?? false,
      highlights: item.highlights?.[locale],
      githubLink: item.githubLink,
      liveUrl: item.liveUrl,
      bgImage: item.bgImage,
      videoUrl: item.videoUrl,
    }));
}

export function useCareerData(): {
  experiences: ExperienceItemResolved[];
  education: EducationItemResolved[];
  projects: ProjectItemResolved[];
  locale: Locale;
} {
  const { i18n } = useTranslation();
  const locale = useMemo(() => getLocale(i18n.language), [i18n.language]);

  const [firebaseData, setFirebaseData] = useState<{
    experiences: ExperienceItem[];
    education: EducationItem[];
    projects: ProjectItem[];
  } | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetchCareerFromFirebase().then((data) => {
      if (!cancelled && data && data.experiences.length + data.education.length + data.projects.length > 0) {
        setFirebaseData(data);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return useMemo(() => {
    const experiences =
      firebaseData?.experiences?.length
        ? mergeExperiences(firebaseData.experiences, staticExperiences)
        : staticExperiences;
    const education =
      firebaseData?.education?.length
        ? mergeEducation(firebaseData.education, staticEducation)
        : staticEducation;
    const projects =
      firebaseData?.projects?.length
        ? mergeProjects(firebaseData.projects, staticProjects)
        : staticProjects;

    return {
      locale,
      experiences: resolveExperiences(experiences, locale),
      education: resolveEducation(education, locale),
      projects: resolveProjects(projects, locale),
    };
  }, [locale, firebaseData]);
}

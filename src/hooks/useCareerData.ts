
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
import type { ExperienceItem, EducationItem, ProjectItem } from '@/types/career';

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
      description: item.description[locale],
      githubLink: item.githubLink,
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
    const experiences = firebaseData?.experiences ?? staticExperiences;
    const education = firebaseData?.education ?? staticEducation;
    const projects = firebaseData?.projects ?? staticProjects;

    return {
      locale,
      experiences: resolveExperiences(experiences, locale),
      education: resolveEducation(education, locale),
      projects: resolveProjects(projects, locale),
    };
  }, [locale, firebaseData]);
}
